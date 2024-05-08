module.exports = {
  webpack: (config) => {
    // Add a custom webpack rule to handle JSON files
    config.module.rules.push({
      test: /\.json$/,
      use: 'json-loader',
      type: 'javascript/auto',
    })

    // Important: return the modified config
    return config
  },
}
