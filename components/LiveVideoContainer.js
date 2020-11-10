import Facebook from "./Facebook";
import Youtube from "./Youtube";
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
          className={style.twitchPlayer}
          id="tecomatwilight"
          theme="light"
          muted
          width="100%"
          height="100%"
        />

        {/* CAROLINE CHANNEL */}
        {/* <ReactPlayer
          className={style.reactPlayer}
          url="https://youtu.be/sDqaRiUJ_qo"
          width="100%"
          height="100%"
          controls={false}
        /> */}

        {/* TT CHANNEL */}
        {/* <ReactPlayer
          className={style.reactPlayer}
          url="https://youtu.be/H0nUceZ5Uts"
          width="100%"
          height="100%"
          controls={false}
        /> */}

        {/* FACEBOOK NEED TO UPDATE URL */}
        {/* <ReactPlayer
          className={style.reactPlayer}
          url="https://www.facebook.com/PhillipIslandNatureParks/videos/1050357245480289"
          width="100%"
          height="100%"
          controls={true}
          pip={false}
        /> */}
      </div>
      <div className={style.socialContainer}>
        <p>Watch On</p>
        <Facebook href="https://www.facebook.com/TecomaTwilightEthicalMarket" />
        <Youtube href="https://youtu.be/H0nUceZ5Uts" />
      </div>
    </div>
  );
};

export default LiveVideoContainer;
