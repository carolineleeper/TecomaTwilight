import style from "./LiveVideoContainer.module.css";
import ReactPlayer from "react-player";

const LiveVideoContainer = () => {
  return (
    <div className={style.liveVideoContainer}>
      <h1 className="title">Watch Live</h1>
      <div className={style.responsiveVideoContainer}>
        <ReactPlayer
          className={style.reactPlayer}
          url="https://youtu.be/H0nUceZ5Uts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default LiveVideoContainer;
