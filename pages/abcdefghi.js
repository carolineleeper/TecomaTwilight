// import style from "./LiveVideoContainer.module.css";
import ReactPlayer from "react-player";
import { TwitchPlayer } from "react-twitch-embed";

const Test = () => {
  return (
    <TwitchPlayer
      channel="tecomatwilight"
      id="tecomatwilight"
      theme="light"
      muted
      width="100%"
      height="100%"
    />
  );
};

export default Test;
