import style from "./LiveVideoContainer.module.css";
import ReactPlayer from "react-player";
import { TwitchPlayer } from "react-twitch-embed";

const LiveVideoContainer = () => {
  return (
    <div className={style.liveVideoContainer}>
      <h1 className="title">Watch Live</h1>
      <div className={style.responsiveVideoContainer}>
        <TwitchPlayer
          channel="tecomatwilight"
          id="tecomatwilight"
          theme="light"
          muted
          width="100%"
          // withChat={false}
          onOffline={() => console.log("offline")}
        />

        {/* <ReactPlayer
          className={style.reactPlayer}
          url="https://youtu.be/sDqaRiUJ_qo"
          width="100%"
          height="100%"
        /> */}
        {/* <ReactPlayer
          className={style.reactPlayer}
          url="https://player.twitch.tv/?channel=carothedev&parent=netlify.app"
          width="100%"
          height="100%"
        />*/}
      </div>
    </div>
  );
};

export default LiveVideoContainer;
