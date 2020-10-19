import style from "./Ethics.module.css";

const Ethics = () => {
  return (
    <div className={style.ethicsContainer}>
      <div className={style.imageContainer}>
        <img alt="upcycled" title="upcycled" src="/images/005-recycling.png" />
        <p>Upcycled</p>
      </div>
      <div className={style.imageContainer}>
        <img
          alt="fair trade"
          title="fair trade"
          src="/images/001-equality.png"
        />
        <p>Fair Trade</p>
      </div>
      <div className={style.imageContainer}>
        <img
          alt="locally made"
          title="locally made"
          src="/images/004-paint.png"
        />
        <p>Local</p>
      </div>
      <div className={style.imageContainer}>
        <img
          alt="environmentally friendly"
          title="environmentally friendly"
          src="/images/002-eco-friendly.png"
        />
        <p>Eco Friendly</p>
      </div>
      <div className={style.imageContainer}>
        <img
          alt="community empowerment"
          title="community empowerment"
          src="/images/003-protest.png"
        />
        <p>Community</p>
      </div>
    </div>
  );
};

export default Ethics;
