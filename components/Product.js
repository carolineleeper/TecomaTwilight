import Products from "./Products";

const Product = (props) => {
  return (
    <div>
      <p>Name: {props.product_name}</p>
      <p>Description: {props.product_description}</p>
      <p>Price: {props.product_price}</p>
      <img src={props.product_image}></img>
    </div>
  );
};

export default Product;
