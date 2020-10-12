import CheckboxesMenu from "../components/CheckboxesMenu";
import Stall from "../components/Stall";
import StallSearch from "../components/StallSearch";
import NoStalls from "../components/NoStalls";
import SEO from "../components/SEO";
import matter from "gray-matter";
import { useState } from "react";
import Link from "next/link";
import fs from "fs";

const Stalls = (props) => {
  const [search, setSearch] = useState("");
  const [checkArray, setCheckArray] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // search bar filtering
  const filteredStalls = () => {
    const searchFiltered = props.stalls.filter((stall) => {
      const criteriaArray = stall.criteria.map((criteria) =>
        criteria.toLowerCase()
      );
      const categoriesArray = stall.categories.map((category) =>
        category.toLowerCase()
      );
      const departmentsArray = stall.departments.map((department) =>
        department.toLowerCase()
      );

      return (
        stall.storeName.toLowerCase().includes(search.toLowerCase()) ||
        criteriaArray.find((a) => a.includes(search.toLowerCase())) ||
        departmentsArray.find((a) => a.includes(search.toLowerCase())) ||
        categoriesArray.find((a) => a.includes(search.toLowerCase()))
      );
    });

    // checkbox filtering
    const filtered = searchFiltered.filter((stall) => {
      const criteriaArray = stall.criteria.map((criteria) =>
        criteria.toLowerCase()
      );
      const categoriesArray = stall.categories.map((category) =>
        category.toLowerCase()
      );
      const departmentsArray = stall.departments.map((department) =>
        department.toLowerCase()
      );

      const mergedArray = [
        ...criteriaArray,
        ...categoriesArray,
        ...departmentsArray,
      ];

      const intersectChecker = (array, target) =>
        target.every((value) => array.includes(value));

      return intersectChecker(mergedArray, checkArray);
    });

    return filtered;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  const randomFilteredStalls = shuffleArray(filteredStalls());

  return (
    <>
      <SEO title="Stalls" />
      <div className="stallsContainer">
        <CheckboxesMenu
          checkArray={checkArray}
          setCheckArray={setCheckArray}
          stalls={props.stalls}
        />

        <div className="stallContentContainer">
          <h1>Stall Guide</h1>
          <p>
            This is all the stalls, you can filter your search by department and
            ethical categories in the menu to the left.
          </p>

          <StallSearch handleInput={handleInput} search={search} />

          <ul className="galleryContainer">
            {randomFilteredStalls.length ? (
              randomFilteredStalls.map((stall) => {
                return (
                  <Link key={stall.filename} href={`stalls/${stall.filename}`}>
                    <a className="stallLink">
                      <Stall stall={stall} />
                    </a>
                  </Link>
                );
              })
            ) : (
              <NoStalls />
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = () => {
  const directory = `${process.cwd()}/stalls`;
  const rawFilenames = fs.readdirSync(directory);

  const stalls = rawFilenames.map((filename) => {
    const rawFileContent = fs
      .readFileSync(`${directory}/${filename}`)
      .toString();
    const { data } = matter(rawFileContent);
    return {
      filename: filename.replace(".md", ""),
      storeName: data.name,
      departments: data.departments,
      criteria: data.criteria,
      categories: data.categories,
      logo: data.logo,
    };
  });

  return { props: { stalls } };
};

export default Stalls;
