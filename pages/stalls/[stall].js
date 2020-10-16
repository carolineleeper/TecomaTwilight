import SEO from "../../components/SEO";
import Departments from "../../components/Departments";
import Criteria from "../../components/Criteria";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import matter from "gray-matter";
import fs from "fs";

const Stall = (props) => {
  return (
    <>
      <SEO title={props.stall.name} />
      <h2>{props.stall.name}</h2>
      <p>
        Website: <a href={props.stall.url}>{props.stall.url}</a>
      </p>
      <Criteria criteria={props.stall.criteria} />
      <Departments departments={props.stall.departments} />
      {props.stall.categories && (
        <Categories categories={props.stall.categories} />
      )}
      {props.stall.products && <Products products={props.stall.products} />}
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
