import SEO from "../components/SEO";
import FeaturedStalls from "../components/FeaturedStalls";
import LiveVideoContainer from "../components/LiveVideoContainer";
import VideoPlaylistContainer from "../components/VideoPlaylistContainer";
import InlineImage from "../components/InlineImage";

import matter from "gray-matter";
import fs from "fs";

const Home = (props) => {
  return (
    <>
      <SEO title="Home" />
      <InlineImage src="/images/DSC_0161.jpg" align="imageRight" />
      <LiveVideoContainer />
      <FeaturedStalls stalls={props.stalls} />
      <VideoPlaylistContainer />
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
    return { ...data, filename: filename.replace(".md", "") };
  });

  return { props: { stalls } };
};

export default Home;
