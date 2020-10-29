import FeaturedStall from "./FeaturedStall";
import style from "./FeaturedStalls.module.css";
import Carousel from "react-slick";

const getWrappedIndex = (collection, index) => {
  let wrappedIndex = Math.abs(index);
  while (wrappedIndex > collection.length - 1) {
    wrappedIndex -= collection.length;
  }
  return wrappedIndex;
};

const FeaturedStalls = ({ stalls }) => {
  const goLiveDate = new Date("2020-10-27");
  const today = new Date();
  const diffTime = today - goLiveDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const stallLeft = stalls[getWrappedIndex(stalls, diffDays - 1)];
  const stallMiddle = stalls[getWrappedIndex(stalls, diffDays)];
  const stallRight = stalls[getWrappedIndex(stalls, diffDays + 1)];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <h1 className="title">STALL SPOTLIGHT</h1>
      <div className={style.carouselContainer}>
        <Carousel {...settings} className={style.carousel}>
          <FeaturedStall className={style.carouselItem} stall={stallLeft} />
          <FeaturedStall className={style.carouselItem} stall={stallMiddle} />
          <FeaturedStall className={style.carouselItem} stall={stallRight} />
        </Carousel>
      </div>
    </>
  );
};

export default FeaturedStalls;
