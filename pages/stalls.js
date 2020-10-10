import Checkboxes from "../components/Checkboxes";
import Stall from "../components/Stall";
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

      console.log(mergedArray);
      console.log(checkArray);

      const intersectChecker = (array, target) =>
        target.every((value) => array.includes(value));

      return intersectChecker(mergedArray, checkArray);
    });

    return filtered;
  };

  return (
    <>
      <SEO title="Stalls" />
      <h1>Stall Guide</h1>

      <input onChange={handleInput} value={search} />

      <Checkboxes
        checkArray={checkArray}
        setCheckArray={setCheckArray}
        departments={props.stalls.map((stall) => {
          return stall.departments;
        })}
        criteria={props.stalls.map((stall) => {
          return stall.criteria;
        })}
        categories={props.stalls.map((stall) => {
          return stall.categories;
        })}
      />

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
