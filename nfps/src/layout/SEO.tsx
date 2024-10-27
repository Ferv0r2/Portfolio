import Head from "next/head";
import { useRouter } from "next/router";

const metaData = {
  title: "NFPS",
  siteName: "NPFS",
  description: "NFT Project Funding Solution",
  url: "https://nfps.wontae.net/",
  robots: "follow, index",
  image: "banner.png",
};

const SEO = () => {
  const router = useRouter();

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="robots" content={metaData.robots} />
      <meta content={metaData.description} name="description" />
      <meta property="og:url" content={`${metaData.url}${router.asPath}`} />
      <meta property="og:site_name" content={metaData.siteName} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:image" name="image" content={metaData.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="icon" type="image/png" href="favicon.ico" />

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};

export default SEO;
