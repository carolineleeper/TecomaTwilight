import Checkboxes from "../components/Checkboxes";
import Stall from "../components/Stall";
import SEO from "../components/SEO";
import matter from "gray-matter";
import { useState } from "react";
import Link from "next/link";
import fs from "fs";

const Stalls = (props) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const filteredStalls = () => {
    const filtered = props.stalls.filter((stall) => {
      const toLowerCritera = stall.criteria.map((criteria) =>
        criteria.toLowerCase()
      );
      const toLowerCategories = stall.categories.map((category) =>
        category.toLowerCase()
      );

      return (
        stall.filename.toLowerCase().includes(search.toLowerCase()) ||
        stall.storeName.toLowerCase().includes(search.toLowerCase()) ||
        toLowerCritera.find((a) => a.includes(search.toLowerCase())) ||
        toLowerCategories.find((a) => a.includes(search.toLowerCase()))
      );
    });
    return filtered;
  };

  return (
    <>
      <SEO title="Stalls" />
      <p>This is the list of stalls we have!</p>

      <input onChange={handleInput} value={search} />

      <Checkboxes
        categories={props.stalls.map((stall) => {
          return stall.categories;
        })}
      />

      <ul>
        {filteredStalls().map((stall) => {
          return (
            <Link key={stall.filename} href={`stalls/${stall.filename}`}>
              <a>
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
      criteria: data.criteria,
      categories: data.categories,
      logo: data.logo,
    };
  });

  return { props: { stalls } };
};

export default Stalls;
