var webpack = require( `webpack` );

function make( opts ) {
  console.log( `Options are...`, opts );
  return new webpack.optimize.CommonsChunkPlugin( opts );
}

module.exports = {
  WebpackBootstrapChunk( name = `manifest` ) {
    return make({
      name,
      minChunks: Infinity,
    });
  },
  ImplicitVendorChunk({ name = `vendor`, target_folder = `node_modules` } = {}) {
    return make({
      name,
      minChunks( module, count ) {
        return module.context && module.context.indexOf( target_folder ) !== -1;
      },
    });
  },
  ExplicitVendorChunk({ entry: name = `vendor` } = {}) {
    return make({
      name,
      minChunks: Infinity,
    });
  },
  MultipleExplicitVendorChunks({ names } = {}) {
    return make({
      names,
      minChunks: Infinity,
    });
  },
  ImplicitCommonChunk({ name = `commons`, minChunks = 2 } = {}) {
    return make({
      name,
      minChunks,
    });
  },
};
