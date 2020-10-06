import Criteria from "../../components/Criteria";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import matter from "gray-matter";
import marked from "marked";
import fs from "fs";

const Stall = (props) => {
  return (
    <>
      <h2>{props.data.name}</h2>
      <p>
        Website: <a href={props.data.url}>{props.data.url}</a>
      </p>
      <Criteria criteria={props.data.criteria} />
      <Categories categories={props.data.categories} />
      <Products products={props.data.products} />

      <div dangerouslySetInnerHTML={{ __html: props.html }} />
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
  const { content, data } = matter(rawFileContent);
  const html = marked(content);

  return { props: { html, data } };
};

export default Stall;
