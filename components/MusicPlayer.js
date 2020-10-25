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
        url="https://www.youtube.com/embed/videoseries?list=PLxkEptprzfQX2rQUy-JQlXq3DHF_5hPfj"
        width="100%"
        // height="100%"
      />
    </div>
  );
};

export default MusicPlayer;
