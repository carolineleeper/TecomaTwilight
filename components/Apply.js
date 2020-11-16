import style from "./Apply.module.css";

const Apply = () => {
  return (
    <div className={style.applyContainer}>
      <p className={style.applyText}>
        Are you an ethical business wanting to feature in this market?
      </p>
      <a
        className={style.applyBtn}
        href="https://docs.google.com/forms/d/e/1FAIpQLSdMb5r3Vr8q8jMA_9mIYrJriC1u3vZT2dRFi9JfTU1A-B6I2w/viewform?usp=sf_link"
        target="_blank"
        rel="noopener"
      >
        <button>Apply Here</button>
      </a>
    </div>
  );
};

export default Apply;
