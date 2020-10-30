import Video from "./Video";
import style from "./LiveVideoContainer.module.css";
import ReactPlayer from "react-player";

const LiveVideoContainer = () => {
  return (
    <div className={style.liveVideoContainer}>
      <div className={style.responsiveVideoContainer}>
        <ReactPlayer
          url="https://www.facebook.com/PhillipIslandNatureParks/videos/388417159000165"
          width="100%"
          height="100%"
        />
      </div>
      <div className={style.liveVideoContainerText}>
        <h1>Watch Live!</h1>
        <p>
          Our stall holders talk about cool stuff. We discuss ethical approaches
          and other things.
        </p>
      </div>
    </div>
  );
};

export default LiveVideoContainer;
