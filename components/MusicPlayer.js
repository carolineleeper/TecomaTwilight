import ListenWhileShop from "./ListenWhileShop";
// import SpotifyPlayer from "react-spotify-player";
import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";

const MusicPlayer = () => {
  const [isPlayerHidden, setIsPlayerHidden] = useState(true);

  useEffect(() => {
    const player = document.querySelector(".playerWrapper");
    if (isPlayerHidden) {
      player.classList.remove("playerWrapperHidden");
    } else {
      player.classList.add("playerWrapperHidden");
    }
  }, [isPlayerHidden]);

  return (
    <div
      className="playerWrapper"
      onClick={() =>
        isPlayerHidden ? setIsPlayerHidden(false) : setIsPlayerHidden(true)
      }
    >
      <ListenWhileShop isPlayerHidden={isPlayerHidden} />
      <ReactPlayer
        url="https://www.youtube.com/embed/videoseries?list=PLMq7xD7P5TDfwhj4r3CSWCqvhDQL55bAE&modestbranding=1&rel=0&enablejsapi=1"
        width="100%"
        pip={false}
        // height="100%"
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
  );
};

export default MusicPlayer;
