const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.js',
  },
};

module.exports = withPlugins([], nextConfig);


module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}