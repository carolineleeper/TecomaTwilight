import style from "./ListenWhileShop.module.css";

const ListenWhileShop = (props) => {
  return (
    <div className={props.isPlayerHidden ? style.listenHidden : style.listen}>
      <div>Listen while you shop </div>
    </div>
  );
};

export default ListenWhileShop;
