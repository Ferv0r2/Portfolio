/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = {
  baseUrl: "src",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
    unoptimized: true,
  },
};

module.exports = removeImports({
  ...nextConfig,
});
