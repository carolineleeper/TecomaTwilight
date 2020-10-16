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
      <h1>Home</h1>
      <p>
        The perfect pre-Christmas market – promoting living and buying
        ethically.
      </p>
      <p>
        This twilight market supports ethical trading, community empowerment and
        sustainable practices. Spending your money at any of the 60 plus stalls
        will help create positive change locally and globally.
      </p>
      <p>
        With quality, local food vendors and a stellar line up of local
        performers, this festival-like market will be a great community event
        for the whole family.
      </p>
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
