import Video from "./Video";
import style from "./VideoPlaylistContainer.module.css";

const VideoPlaylistContainer = () => {
  return (
    <div className={style.videoPlaylistContainer}>
      <div className={style.videoPlaylistContainerText}>
        <h1 className="title"></h1>
        <p>
          Our stall holders talk about cool stuff. We discuss ethical approaches
          and other things.
        </p>
      </div>
      <Video src="https://www.youtube.com/embed/videoseries?list=PL735C37C69C6A737C" />
    </div>
  );
};

export default VideoPlaylistContainer;
