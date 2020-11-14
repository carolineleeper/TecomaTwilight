import SEO from "../../components/SEO";
import MusicianPage from "../../components/MusicianPage";
import matter from "gray-matter";
import fs from "fs";

const Musician = (props) => {
  return (
    <>
      <SEO title={props.musician.name} />
      <MusicianPage musician={props.musician} />
    </>
  );
};

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/musicians`;
  const rawFilenames = fs.readdirSync(directory);

  const filenames = rawFilenames.map((filename) => {
    return filename.replace(".md", "");
  });

  const paths = filenames.map((filename) => {
    return {
      params: { musician: filename },
    };
  });

  return {
    paths,
    fallback: false, // uses standard 404 page
  };
};

export const getStaticProps = (context) => {
  const musicianName = context.params.musician;
  const filepath = `${process.cwd()}/musicians/${musicianName}.md`;
  const rawFileContent = fs.readFileSync(filepath).toString();
  const { data, content } = matter(rawFileContent);

  return { props: { musician: { ...data, content } } };
};

export default Musician;
