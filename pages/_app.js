import Header from "../components/Header";
import Footer from "../components/Footer";
import ListenWhileShop from "../components/ListenWhileShop";
import "../style.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpotifyPlayer from "react-spotify-player";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/f06f95e36e.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
      <div className="pageContent">
        <Component {...pageProps} />
        <div className="spotify">
          <ListenWhileShop />
          <SpotifyPlayer
            uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
            size="compact"
            view="list"
            theme="white"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
