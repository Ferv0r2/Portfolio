/** @type {import('next').NextConfig} */

module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/,
        use: "json-loader",
        type: "javascript/auto",
      },
    ],
  },
};
