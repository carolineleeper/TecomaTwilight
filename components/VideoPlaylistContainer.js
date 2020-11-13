import style from "./VideoPlaylistContainer.module.css";
import ReactPlayer from "react-player/youtube";
import { useEffect, useRef } from "react";

const VideoPlaylistContainer = () => {
  const videoRef = useRef();

  const onReady = (e) => {
    console.log(e.player.player.player.setShuffle());
    e.player.player.player.setShuffle(true);
    // videoRef?.current?.player?.player?.player?.setShuffle?.(true);
  };
  // useEffect(() => {
  //   videoRef?.current?.player?.player?.player?.setShuffle?.(true);
  // }, [videoRef.current]);

  return (
    <div className={style.videoPlaylistContainer}>
      <h1 className="title">Get Ethical!</h1>
      <p>
        Check out the videos below to hear our stall holders talk about all
        things ethical
      </p>

      <div className={style.responsiveVideoContainer}>
        <ReactPlayer
          url="https://www.youtube.com/embed/videoseries?list=PLMq7xD7P5TDdR13SbtlIiWjcSjCpomGJ9"
          width="100%"
          height="100%"
          className={style.reactPlayer}
          pip={false}
          ref={videoRef}
          onReady={onReady}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                controls: 1,
                rel: 0,
                showinfo: 0,
                enablejsapi: 1,
                origin: "tecomatwilight.com",
                iv_load_policy: 3,
                loop: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlaylistContainer;
