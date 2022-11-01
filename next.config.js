/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || "production") === "production";
const assetPrefix = isProd ? "https://wontae.site" : undefined;

const nextConfig = {
  assetPrefix: assetPrefix,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
    unoptimized: true,
  },
};

module.exports = nextConfig;
