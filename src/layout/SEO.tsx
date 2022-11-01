import { FC } from "react";
import Head from "next/head";

const metaData = {
  title: "황원태",
  siteName: "황원태",
  description: "#Front-End #BlockChain #Web3",
  url: "https://wontae.site/",
  robots: "follow, index",
  image: "images/intro.png",
};

const SEO: FC = () => {
  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="robots" content={metaData.robots} />
      <meta content={metaData.description} name="description" />
      <meta property="og:url" content={`${metaData.url}`} />

      {/* Open Graph */}
      <meta property="og:site_name" content={metaData.siteName} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:image" name="image" content={metaData.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />

      <link rel="icon" type="image/jpg" href="images/logo.jpg" />

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};

export default SEO;
