// import style from "./ShopPhone.module.css";

const ShopPhone = (props) => {
  return (
    <form
      // className={style.form}
      action={"tel:".concat(props.phone)}
      method="get"
      target="_blank"
    >
      {/* <button className={style.shopButton} type="submit"> */}
      <button type="submit">CALL NOW {props.phone}</button>
    </form>
  );
};

export default ShopPhone;
