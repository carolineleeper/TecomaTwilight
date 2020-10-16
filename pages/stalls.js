import CheckboxesMenu from "../components/CheckboxesMenu";
import Stall from "../components/Stall";
import StallSearch from "../components/StallSearch";
import NoStalls from "../components/NoStalls";
import SEO from "../components/SEO";

import matter from "gray-matter";
import { useState, useEffect } from "react";
import Link from "next/link";
import fs from "fs";
import _ from "lodash";

const Stalls = (props) => {
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

  return (
    <>
      <SEO title="Stalls" />
      <div className="stallsContainer">
        <CheckboxesMenu
          checkArray={checkArray}
          setCheckArray={setCheckArray}
          stalls={randomStalls}
        />

        <div className="stallContentContainer">
          <StallSearch handleInput={handleInput} search={search} />

          {filteredStalls().length ? (
            <ul className="galleryContainer">
              {filteredStalls().map((stall) => {
                return (
                  <Link key={stall.filename} href={`stalls/${stall.filename}`}>
                    <a className="stallLink">
                      <Stall stall={stall} />
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
      ethicalDesc: data.ethical,
      logo: data.logo,
    };
  });

  return { props: { stalls } };
};

export default Stalls;
