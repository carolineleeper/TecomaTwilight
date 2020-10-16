import SEO from "../components/SEO";
import Video from "../components/Video";
import FeaturedStalls from "../components/FeaturedStalls";

import matter from "gray-matter";
import marked from "marked";
import fs from "fs";

const Home = (props) => {
  return (
    <>
      <SEO title="Home" />
      <Video src="https://www.youtube.com/embed/ZGb6xasktBg" />
      <FeaturedStalls stalls={props.stalls} />
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
    const { content, data } = matter(rawFileContent);
    const html = marked(content);
    return {
      filename: filename.replace(".md", ""),
      storeName: data.name,
      departments: data.departments,
      criteria: data.criteria,
      categories: data.categories,
      logo: data.logo,
      products: data.products,
      description: html,
    };
  });

  return { props: { stalls } };
};

export default Home;
