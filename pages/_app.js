import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
