import SEO from "../components/SEO";
import Video from "../components/Video";
import LiveVideoContainer from "../components/LiveVideoContainer";
import FeaturedStalls from "../components/FeaturedStalls";

import matter from "gray-matter";
import fs from "fs";

const Home = (props) => {
  return (
    <>
      <SEO title="Home" />
      <LiveVideoContainer />
      <Video src="https://www.youtube.com/embed/videoseries?list=PL735C37C69C6A737C" />
      <FeaturedStalls stalls={props.stalls} />
    </>
  );
};

// channel id: UCFsqNXY_8Ab3yFDOdZTKKbA

export const getStaticProps = () => {
  const directory = `${process.cwd()}/stalls`;
  const rawFilenames = fs.readdirSync(directory);

  const stalls = rawFilenames.map((filename) => {
    const rawFileContent = fs
      .readFileSync(`${directory}/${filename}`)
      .toString();
    const { data } = matter(rawFileContent);
    return { ...data, filename: filename.replace(".md", "") };
  });

  return { props: { stalls } };
};

export default Home;
