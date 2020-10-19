import ListenWhileShop from "../components/ListenWhileShop";
import SpotifyPlayer from "react-spotify-player";
import { useState, useEffect } from "react";

const SpotifyContainer = () => {
  const [isSpotifyHidden, setIsSpotifyHidden] = useState(true);

  useEffect(() => {
    const spotify = document.querySelector(".spotify");
    if (isSpotifyHidden) {
      spotify.classList.remove("spotifyHidden");
    } else {
      spotify.classList.add("spotifyHidden");
    }
  }, [isSpotifyHidden]);

  console.log(isSpotifyHidden);
  return (
    <div
      className="spotify"
      onClick={() =>
        isSpotifyHidden ? setIsSpotifyHidden(false) : setIsSpotifyHidden(true)
      }
    >
      <ListenWhileShop />
      <SpotifyPlayer
        uri="spotify:playlist:1rxwrZl10pVNyc9bbvzr1q"
        size="compact"
        view="list"
        theme="white"
      />
    </div>
  );
};

export default SpotifyContainer;
