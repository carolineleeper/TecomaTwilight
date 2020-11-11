// import style from "./LiveVideoContainer.module.css";
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
      // autoplay={false}
    />
  );
};

export default Test;
