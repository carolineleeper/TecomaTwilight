import style from "./LiveVideoContainer.module.css";
import ReactPlayer from "react-player";

const LiveVideoContainer = () => {
  return (
    <div className={style.liveVideoContainer}>
      <h1 className="title">Watch Live</h1>
      <div className={style.responsiveVideoContainer}>
        {/* <ReactPlayer
          className={style.reactPlayer}
          url="https://youtu.be/sDqaRiUJ_qo"
          width="100%"
          height="100%"
        /> */}
        <ReactPlayer
          className={style.reactPlayer}
          url="https://player.twitch.tv/?channel=carothedev&parent=tecomatwilight.com"
          width="100%"
          height="100%"
        />

        <iframe
          src="https://player.twitch.tv/?channel=carothedev&parent=tecomatwilight.com"
          width="100%"
          height="315"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LiveVideoContainer;
