import Video from "./Video";
import style from "./LiveVideoContainer.module.css";
import ReactPlayer from "react-player/youtube";

const LiveVideoContainer = () => {
  return (
    <div className={style.liveVideoContainer}>
      <Video src="https://www.youtube.com/embed/ZGb6xasktBg" />

      {/* <div className={style.responsiveVideoContainer}>
        <ReactPlayer
          url="https://www.youtube.com/embed/ZGb6xasktBg"
          width="100%"
          height="100%"
        />
      </div> */}

      {/* <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D110769387488948%26id%3D109732840925936"
        width="640"
        height="480"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
      ></iframe> */}
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
