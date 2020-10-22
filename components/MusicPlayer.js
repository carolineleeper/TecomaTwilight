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
      <ListenWhileShop />
      <ReactPlayer
        url="https://www.youtube.com/embed/videoseries?list=PL6ogdCG3tAWjN3nOVWjA6DCwYYKAMk5-f"
        // width="100%"
        // height="100%"
      />

      {/* <SpotifyPlayer
        uri="spotify:playlist:1rxwrZl10pVNyc9bbvzr1q"
        size="compact"
        view="list"
        theme="white"
      /> */}
    </div>
  );
};

export default MusicPlayer;
