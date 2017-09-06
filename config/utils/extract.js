const ExtractTextPlugin = require( `extract-text-webpack-plugin` );

module.exports = {
  loader({ use, fallback = `style-loader` } = {}) {
    return ExtractTextPlugin.extract({
      use,
      fallback,
    });
  },
  plugin( opts = {}) {
    opts.allChunks = true;
    return new ExtractTextPlugin( opts );
  },
};
