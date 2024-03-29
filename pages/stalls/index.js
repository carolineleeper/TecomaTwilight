import CheckboxesMenuMobile from "../../components/CheckboxesMenuMobile";
import CheckboxesMenu from "../../components/CheckboxesMenu";
import StallCard from "../../components/StallCard";
import StallSearch from "../../components/StallSearch";
import NoStalls from "../../components/NoStalls";
import SEO from "../../components/SEO";

import { useMediaQuery } from "react-responsive";
import matter from "gray-matter";
import { useState, useEffect } from "react";
import Link from "next/link";
import fs from "fs";
import _ from "lodash";

const Stalls = (props) => {
	const [clientIsMobile, setClientIsMobile] = useState(null);

	const isMobile = useMediaQuery({
		query: "(max-width: 750px)",
	});

	useEffect(() => {
		setClientIsMobile(isMobile);
	}, [isMobile]);

	const [search, setSearch] = useState("");
	const [checkArray, setCheckArray] = useState([]);
	const [randomStalls, setRandomStalls] = useState([]);

	useEffect(() => {
		setRandomStalls(_.shuffle(props.stalls));
	}, [props.stalls]);

	const handleInput = (e) => {
		setSearch(e.target.value);
	};

	// search bar filtering
	const filteredStalls = () => {
		const searchFiltered = randomStalls.filter((stall) => {
			const criteriaArray = stall.criteria.map((criteria) => criteria.toLowerCase());
			const categoriesArray = stall.categories.map((category) => category.toLowerCase());
			const departmentsArray = stall.departments.map((department) => department.toLowerCase());

			const productsArray = stall.products
				? stall.products.map((product) => product.product_name.toLowerCase())
				: [];

			return (
				stall.name.toLowerCase().includes(search.toLowerCase()) ||
				criteriaArray.find((a) => a.includes(search.toLowerCase())) ||
				departmentsArray.find((a) => a.includes(search.toLowerCase())) ||
				categoriesArray.find((a) => a.includes(search.toLowerCase())) ||
				productsArray.find((a) => a.includes(search.toLowerCase()))
			);
		});

		// checkbox filtering
		const filtered = searchFiltered.filter((stall) => {
			const criteriaArray = stall.criteria.map((criteria) => criteria.toLowerCase());
			const categoriesArray = stall.categories.map((category) => category.toLowerCase());
			const departmentsArray = stall.departments.map((department) => department.toLowerCase());

			const mergedArray = [...criteriaArray, ...categoriesArray, ...departmentsArray];

			const matched = checkArray.some((value) => mergedArray.includes(value));

			return checkArray.length === 0 ? searchFiltered : matched;

			// const intersectChecker = (array, target) =>
			//   target.every((value) => array.includes(value));

			// return intersectChecker(mergedArray, checkArray);
		});

		return filtered;
	};

	return (
		<>
			<SEO title="Browse" />
			<div className="stallsContainer">
				{clientIsMobile ? (
					<>
						<CheckboxesMenuMobile
							checkArray={checkArray}
							setCheckArray={setCheckArray}
							stalls={randomStalls}
							isMobile={isMobile}
						/>
					</>
				) : (
					<>
						<CheckboxesMenu
							checkArray={checkArray}
							setCheckArray={setCheckArray}
							stalls={randomStalls}
						/>
					</>
				)}

				<div className="stallContentContainer">
					<p className="upperCase">
						Check out some of the stalls that have featured in our markets over the years
					</p>
					<StallSearch handleInput={handleInput} search={search} />

					{filteredStalls().length ? (
						<ul className="galleryContainer">
							{filteredStalls().map((stall) => {
								return (
									<Link key={stall.filename} href={`stalls/${stall.filename}`}>
										<a className="stallLink">
											<StallCard stall={stall} />
										</a>
									</Link>
								);
							})}
						</ul>
					) : (
						<NoStalls />
					)}
				</div>
			</div>
		</>
	);
};

export const getStaticProps = () => {
	const directory = `${process.cwd()}/stalls`;
	const rawFilenames = fs.readdirSync(directory);

	const stalls = rawFilenames.map((filename) => {
		const rawFileContent = fs.readFileSync(`${directory}/${filename}`).toString();
		const { data } = matter(rawFileContent);
		return { ...data, filename: filename.replace(".md", "") };
	});

	return { props: { stalls } };
};

export default Stalls;
