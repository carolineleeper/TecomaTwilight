import style from "./ShopEmail.module.css";

const ShopEmail = (props) => {
  return (
    <form
      className={style.form}
      action={"mailto:".concat(props.email)}
      method="get"
      target="_blank"
    >
      {/* <button className={style.shopButton} type="submit"> */}
      <button type="submit">CONTACT NOW</button>
    </form>
  );
};

export default ShopEmail;
