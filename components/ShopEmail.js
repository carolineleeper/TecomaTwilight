import style from "./ShopLink.module.css";

const ShopLink = (props) => {
  return (
    <form
      className={style.form}
      action={"mailto:".concat(props.url)}
      method="get"
      target="_blank"
    >
      <button className={style.shopButton} type="submit">
        CONTACT NOW
      </button>
    </form>
  );
};

export default ShopLink;
