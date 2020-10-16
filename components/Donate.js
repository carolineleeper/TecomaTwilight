import style from "./Donate.module.css";

const Donate = () => {
  return (
    <form action="https://foothills.raisely.com/" method="get" target="_blank">
      <button className={style.donateButton} type="submit">
        Donate
      </button>
    </form>
  );
};

export default Donate;
