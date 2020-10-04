import matter from "gray-matter";
import marked from "marked";
import fs from "fs";

const Stall = (props) => {
  console.log(props.data.products);
  return (
    <>
      <h2>{props.data.name}</h2>
      <p>Website: {props.data.url}</p>
      <div>
        {props.data.criteria.map((criterion) => {
          return <p key={criterion}>{criterion}</p>;
        })}
      </div>
      <div>
        {props.data.category.map((category) => {
          return <p key={category}>{category}</p>;
        })}
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
      <h2>Products:</h2>
      <div>
        {props.data.products.map((product) => {
          return (
            <>
              <p>Name: {product.product_name}</p>
              <p>Description: {product.product_description}</p>
              <p>Price: {product.product_price}</p>
              <img src={product.product_image}></img>
            </>
          );
        })}
      </div>
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
