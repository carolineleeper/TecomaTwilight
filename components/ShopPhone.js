import style from "./ShopPhone.module.css";

const ShopPhone = (props) => {
  return (
    <div className={style.shopButtonContainer}>
      <a className={style.shopButton} href={"tel:".concat(props.phone)}>
        CALL NOW {props.phone}
      </a>
    </div>
  );
};

export default ShopPhone;
