import Head from "next/head";

const SEO = (props) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tecoma Twilight | {props.title}</title>
    </Head>
  );
};

export default SEO;
