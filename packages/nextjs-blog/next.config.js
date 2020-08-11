const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix =  isProd ? '/nextjs-playground' : '';

console.log({ assetPrefix })

module.exports = {
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}
