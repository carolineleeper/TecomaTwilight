import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      </div>
      <Footer />
    </>
  );
}
