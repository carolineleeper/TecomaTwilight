import matter from "gray-matter";
import marked from "marked";
import fs from "fs";

const Stall = (props) => {
  return (
    <>
      <h2>{props.data.name}</h2>
      <p>Website: {props.data.url}</p>
      <p>Criteria: {props.data.criteria}</p>
      <p>Categories: {props.data.category}</p>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
      <h2>Products:</h2>
      <p>{props.data.products}</p>
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
  const storeName = context.params.stall;
  const filepath = `${process.cwd()}/stalls/${storeName}.md`;
  const rawFileContent = fs.readFileSync(filepath).toString();
  const { content, data } = matter(rawFileContent);
  const html = marked(content);

  return { props: { html, data } };
};

export default Stall;
