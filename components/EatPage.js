import StallCard from "./StallCard";
import Link from "next/link";
import style from "./EatPage.module.css";

const EatPage = (props) => {
  return (
    <>
      <h1 className="title">EAT</h1>
      <div className={style.textContainer}>
        <p className="textCenter">
          What did you love to do during lockdown? Grab a coffee/chai or food?
          It was often a reason to go out and a way to connect. There were some
          superstars who were there for the long haul, day after day, even when
          dealing with their own difficulties, they opened their doors. They
          delivered in the rain and brought hot warm delights cooked with love
          into our homes.
        </p>
        <p className="upperCase">
          Tecoma Ethical Market wanted to say thank you to some of them. Please
          support these eateries as a way of thanking them for feeding you
          during the tough times.
        </p>
      </div>
      <div className={style.eatGalleryContainer}>
        <ul className="galleryContainer">
          {props.stalls.map((stall) => {
            return (
              <Link key={stall.filename} href={`stalls/${stall.filename}`}>
                <a className="stallLink">
                  <StallCard stall={stall} />
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default EatPage;
