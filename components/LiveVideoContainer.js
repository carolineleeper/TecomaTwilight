import Video from "./Video";
import style from "./LiveVideoContainer.module.css";

const LiveVideoContainer = () => {
  return (
    <div className={style.liveVideoContainer}>
      <Video src="https://www.youtube.com/embed/ZGb6xasktBg" />
      <div className={style.liveVideoContainerText}>
        <h1>Watch our live stream</h1>
        <p>
          Our stall holders talk about cool stuff. We discuss ethical approaches
          and other things.
        </p>
      </div>
    </div>
  );
};

export default LiveVideoContainer;
