import style from "./ShopEmail.module.css";

const ShopEmail = (props) => {
  return (
    <div className={style.shopButtonContainer}>
      <a className={style.shopButton} href={"mailto:".concat(props.email)}>
        EMAIL NOW
      </a>
    </div>
  );
};

export default ShopEmail;
