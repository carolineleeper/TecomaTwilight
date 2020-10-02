import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tecoma Twilight</title>
      </Head>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
