import style from "./Flags.module.css";

const Flags = () => {
  return (
    <div className={style.flags}>
      <img
        className={style.flag}
        src="/images/australian_aboriginal_flag_small.jpeg"
        alt="Australian Aboriginal flag"
      />
      <img
        className={style.flag}
        src="/images/torres_strait_islanders_flag_small.jpeg"
        alt="Torres Strait Islanders flag"
      />
    </div>
  );
};

export default Flags;
