import style from "./Flags.module.css";

const Flags = () => {
  return (
    <div className={style.flags}>
      <img
        className={style.flag}
        src="/images/australian_aboriginal_flag_small.jpeg"
      />
      <img
        className={style.flag}
        src="/images/torres_strait_islanders_flag_small.jpeg"
      />
    </div>
  );
};

export default Flags;
