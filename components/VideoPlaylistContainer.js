import Video from "./Video";
import style from "./VideoPlaylistContainer.module.css";

const VideoPlaylistContainer = () => {
  return (
    <div className={style.videoPlaylistContainer}>
      <div className={style.videoPlaylistContainerText}>
        <h1 className="title">Get Ethical!</h1>
        <p>
          Check out the videos below to hear our stall holders talk about all
          things ethical
        </p>
      </div>
      <Video src="https://www.youtube.com/embed/videoseries?list=PL735C37C69C6A737C" />
    </div>
  );
};

export default VideoPlaylistContainer;
