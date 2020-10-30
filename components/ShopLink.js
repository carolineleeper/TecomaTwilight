import style from "./ShopLink.module.css";

const ShopLink = (props) => {
  return (
    <form
      className={style.form}
      action={props.url}
      method="get"
      target="_blank"
    >
      <button className={style.shopButton} type="submit">
        GO TO SHOP NOW
      </button>
    </form>
  );
};

export default ShopLink;
