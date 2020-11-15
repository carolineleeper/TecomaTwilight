import Head from "next/head";

const SEO = (props) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="all" />
      <link rel="icon" href="/static/favicon.ico" />
      <title>Tecoma Twilight | {props.title}</title>

      <meta name="title" content={`Tecoma Twilight | ${props.title}`} />
      <meta
        name="description"
        content="This market supports ethical trading, community empowerment and sustainable practices. Spending your money at any of the stalls will help create positive change locally and globally."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" key="ogtype" />
      <meta
        property="og:url"
        content="https://tecomatwilight.com/"
        key="ogurl"
      />
      <meta
        property="og:title"
        content={`Tecoma Twilight | ${props.title}`}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content="This market supports ethical trading, community empowerment and sustainable practices. Spending your money at any of the stalls will help create positive change locally and globally."
        key="ogdesc"
      />
      <meta
        property="og:image"
        content="tecomatwilight.com/static/og_image.png"
        key="ogimage"
      />
      <meta
        property="og:image:secure_url"
        content="tecomatwilight.com/static/og_image.png"
        key="ogimage"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tecomatwilight.com/" />
      <meta
        property="twitter:title"
        content={`Tecoma Twilight | ${props.title}`}
      />
      <meta
        property="twitter:description"
        content="This market supports ethical trading, community empowerment and sustainable practices. Spending your money at any of the stalls will help create positive change locally and globally."
      />
      <meta
        property="twitter:image"
        content="tecomatwilight.com/static/og_image.png"
      />
      <meta
        property="twitter:image"
        content="tecomatwilight.com/static/og_image.png"
      />
      <meta
        name="google-site-verification"
        content="9uDLJF378FoOce23lDVo9JvSu8qF_j1wtvtVSM7kWkg"
      />
    </Head>
  );
};

export default SEO;
