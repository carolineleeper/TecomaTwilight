import SEO from "../../components/SEO";
import StallPage from "../../components/StallPage";
import matter from "gray-matter";
import fs from "fs";

const Stall = (props) => {
  console.log(props);
  return (
    <>
      <SEO title={props.stall.name} />
      <StallPage stall={props.stall} />
    </>
  );
};

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/stalls`;
  const rawFilenames = fs.readdirSync(directory);

  const filenames = rawFilenames.map((filename) => {
    return filename.replace(".md", "");
  });

  const paths = filenames.map((filename) => {
    return {
      params: { stall: filename },
    };
  });

  return {
    paths,
    fallback: false, // uses standard 404 page
  };
};

export const getStaticProps = (context) => {
  const stallName = context.params.stall;
  const filepath = `${process.cwd()}/stalls/${stallName}.md`;
  const rawFileContent = fs.readFileSync(filepath).toString();
  const { data } = matter(rawFileContent);

  return { props: { stall: data } };
};

export default Stall;
