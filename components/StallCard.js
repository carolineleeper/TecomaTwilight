import Departments from "./Departments";
import Criteria from "./Criteria";
import Categories from "./Categories";
import style from "./StallCard.module.css";
import Image from "next/image";

const StallCard = ({ stall }) => {
  const replaceImgWithError = (e) => {
    e.target.onError = null;
    e.target.src = "/images/image_placeholder.png";
  };

  const hideImgWhenError = (e) => {
    e.target.onError = null;
    e.target.style.display = "none";
  };
  return (
    <div className={style.stallThumb}>
      <div className={style.name}>{stall.name}</div>
      <div className={style.stallImageContainer}>
        {/* <Image
          src={stall.logo}
          alt={`${stall.name}`}
          layout="fill"
          onError={replaceImgWithError}
        /> */}
        <img
          src={stall.logo}
          alt={`${stall.name}`}
          onError={replaceImgWithError}
        />
      </div>
      <div className={style.keywordContainer}>
        <Criteria criteria={stall.criteria} />
        <Departments departments={stall.departments} />
        <Categories categories={stall.categories} />
      </div>
    </div>
  );
};

export default StallCard;
