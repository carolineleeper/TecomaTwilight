import Product from "./Product";

const Products = (props) => {
  return (
    <>
      <h2>Products:</h2>
      <div>
        {props.products.map((product) => {
          console.log(product.product_image);
          return (
            <Product
              key={product.product_name}
              product_name={product.product_name}
              product_description={product.product_description}
              product_price={product.product_price}
              product_image={product.product_image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
