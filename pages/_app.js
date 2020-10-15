import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="pageContent">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
