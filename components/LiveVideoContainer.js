import Video from "./Video";
import style from "./LiveVideoContainer.module.css";
import ReactPlayer from "react-player";

const LiveVideoContainer = () => {
  return (
    <div className={style.liveVideoContainer}>
      <h1 class="title">Watch Live</h1>
      <div className={style.responsiveVideoContainer}>
        <ReactPlayer
          className={style.reactPlayer}
          url="https://youtu.be/7hCBQmnnbQg"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default LiveVideoContainer;
