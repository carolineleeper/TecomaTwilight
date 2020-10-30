import SEO from "../components/SEO";
import FeaturedStalls from "../components/FeaturedStalls";
import LiveVideoContainer from "../components/LiveVideoContainer";
import VideoPlaylistContainer from "../components/VideoPlaylistContainer";

import matter from "gray-matter";
import fs from "fs";

const Home = (props) => {
  return (
    <>
      <SEO title="Home" />
      <FeaturedStalls stalls={props.stalls} />
      {/* <LiveVideoContainer />
      <VideoPlaylistContainer /> */}
      <h1 className="title">Watch Live</h1>
      <div className="divCenter">
        <img src="/images/live_vid.png" />
      </div>
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
