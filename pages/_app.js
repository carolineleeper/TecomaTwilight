import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="headerContainer">
        <Header />
        <Nav />
      </div>
      <div className="pageContent">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
