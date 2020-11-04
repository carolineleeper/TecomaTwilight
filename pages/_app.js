import Header from "../components/Header";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";
import "../style.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
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
        <MusicPlayer />
      </div>
      <Footer />
    </>
  );
};

export default MyApp;
