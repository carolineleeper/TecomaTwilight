import style from "./ViewStallButton.module.css";

const ViewStallButton = (props) => {
  return (
    <form action={`stalls/${props.filename}`} method="get">
      <button className={style.viewStallButton} type="submit">
        View
      </button>
    </form>
  );
};

export default ViewStallButton;
