import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="pageContent">
        <Component {...pageProps} />
      </div>
    </>
  );
}
