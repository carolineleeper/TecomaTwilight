// import style from "./LiveVideoContainer.module.css";
import ReactPlayer from "react-player";
import { TwitchPlayer } from "react-twitch-embed";

const Test = () => {
  return (
    <ReactPlayer
      url="https://www.twitch.tv/tecomatwilight"
      width="100%"
      height="100%"
      controls={false}
    />
    // <TwitchPlayer
    //   channel="tecomatwilight"
    //   id="tecomatwilight"
    //   theme="dark"
    //   muted
    //   width="100%"
    //   height="100%"
    //   // autoplay={false}
    // />
  );
};

export default Test;
