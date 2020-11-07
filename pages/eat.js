import SEO from "../components/SEO";
import EatPage from "../components/EatPage";
import matter from "gray-matter";
import fs from "fs";

const featuredFoodVendorNames = [
  "The Eatery Tecoma",
  "Proserpina Bakehouse",
  "Babaji's Kitchen",
  "The Dolly Bus",
  "Nevedya",
  "Blacksmith",
];

const Eat = (props) => {
  return (
    <>
      <SEO title="Eat" />
      <EatPage stalls={props.stalls} />
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
