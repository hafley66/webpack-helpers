var { paths, filenames } = require( `../../utils` );
var { deps } = require( `../../utils` );
var webpack = require( `webpack` );


module.exports = {
  output: {
    path: paths.buildFolder.internal(),
    filename: filenames.js(),
    chunkFilename: filenames.js(),
  },
  plugins: [
    ...require( `./production/stable-chunk-ids` ),
    ...require( `./production/legacy-webpack-compat` ),
    ...require( `./production/caching` ),
    ...require( `./production/compression` ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"production"`,
      },
    }),
  ],
  devtool: `source-map`,

};
