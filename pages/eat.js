import SEO from "../components/SEO";
import EatPage from "../components/EatPage";
import matter from "gray-matter";
import fs from "fs";
import { useState, useEffect } from "react";
import _ from "lodash";

const featuredFoodVendorNames = [
  "The Eatery Tecoma",
  "Proserpina Bakehouse",
  "Babaji's Kitchen",
  "Nevedya-Food For the Spirit",
  "Blacksmith",
  "Sushi Express",
  "The Dolly Bus",
];

const Eat = (props) => {
  const [randomStalls, setRandomStalls] = useState([]);
  useEffect(() => {
    setRandomStalls(_.shuffle(props.stalls));
  }, [props.stalls]);

  return (
    <>
      <SEO title="Eat" />
      <EatPage stalls={randomStalls} />
    </>
  );
};

export const getStaticProps = () => {
  const directory = `${process.cwd()}/stalls`;
  const rawFilenames = fs.readdirSync(directory);

  const stalls = rawFilenames
    .map((filename) => {
      const rawFileContent = fs
        .readFileSync(`${directory}/${filename}`)
        .toString();
      const { data } = matter(rawFileContent);
      return { ...data, filename: filename.replace(".md", "") };
    })
    .filter((stall) => {
      return featuredFoodVendorNames.includes(stall.name);
    });

  return { props: { stalls } };
};

export default Eat;
