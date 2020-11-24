import style from "./Product.module.css";
import { useRouter } from "next/router";

const Product = (props) => {
  const router = useRouter();

  const replaceImgWithError = (e) => {
    e.target.onError = null;
    e.target.src = "/images/image_placeholder.png";
  };

  const hideImgWhenError = (e) => {
    e.target.onError = null;
    e.target.style.display = "none";
  };

  console.log(router.asPath);

  return (
    <>
      {props.product_name ? (
        <div className={style.productCard}>
          {/* <p>Price: {props.product_price}</p> */}
          <div
            className={
              router.asPath === "/stalls/jewels-of-hope"
                ? style.jewelsOfHopeImageContainer
                : style.imageContainer
            }
          >
            {props.product_image && (
              <img
                src={props.product_image}
                onError={replaceImgWithError}
                // alt={`picture of ${props.product_name}`}
              ></img>
            )}
          </div>
          <div className={style.productInfo}>
            {props.product_name && <h2>{props.product_name}</h2>}
            {props.product_description && <p>{props.product_description}</p>}
          </div>
        </div>
      ) : (
        props.product_image && (
          <div className={style.imageOnlyContainer}>
            <img
              src={props.product_image}
              onError={replaceImgWithError}
              // alt={`picture of ${props.product_name}`}
            ></img>
          </div>
        )
      )}
    </>
  );
};

export default Product;
