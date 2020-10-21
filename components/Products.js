import Product from "./Product";
import style from "./Products.module.css";

const Products = (props) => {
  return (
    <div className={style.products}>
      <h2>Product Spotlight</h2>
      <div className={style.productsGallery}>
        {props.products.map((product) => {
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
    </div>
  );
};

export default Products;
