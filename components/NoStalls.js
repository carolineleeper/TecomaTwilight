import style from "./NoStalls.module.css";

const NoStalls = () => {
  return (
    <p className={style.noStalls}>
      No stalls found with that criteria, try a wider search.
    </p>
  );
};

export default NoStalls;
