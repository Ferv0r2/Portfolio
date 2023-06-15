/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    loader: "akamai",
    path: "/",
    unoptimized: true,
  },
};
