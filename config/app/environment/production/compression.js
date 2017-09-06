var webpack = require( `webpack` );
var CompressionPlugin = require( `compression-webpack-plugin` );
const UglifyJSPlugin = require( `uglifyjs-webpack-plugin` );

module.exports = [
  new CompressionPlugin({
    asset: `[path].gz[query]`,
    algorithm: `gzip`,
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
  new UglifyJSPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true,
    },
    compress: {
      screw_ie8: true,
      warnings: false,
    },
    comments: false,
    verbose: false,
  }),
];
