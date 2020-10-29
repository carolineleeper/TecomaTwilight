import style from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={style.productCard}>
      {/* <p>Price: {props.product_price}</p> */}
      <div className={style.imageContainer}>
        <img
          src={props.product_image}
          alt={`picture of ${props.product_name}`}
        ></img>
      </div>
      <div className={style.productInfo}>
        <h2>{props.product_name}</h2>
        <p>{props.product_description}</p>
      </div>
    </div>
  );
};

export default Product;
