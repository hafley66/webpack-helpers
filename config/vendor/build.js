var webpack = require( `webpack` );
var resolve = require( `../shared/resolve` );
var loaders = require( `../shared/loaders` );
var commonPlugins = require( `../shared/plugins` );
var { deps, paths, filenames, env } = require( `../utils` );
var DashboardPlugin = require( `webpack-dashboard/plugin` );


// TODO: Split into environment specific configs
var config = {
  context: paths.client(),
  entry: deps.entry,
  // TODO: Test dll module resolution in production mode with hashed names.
  output: {
    filename: filenames.jsDLL(),
    path: paths.buildFolder.dll.internal(),
    library: `[name]`,
  },

  plugins: [
    deps.DllPlugin(),
  ],
  devtool: `source-map`,
};

config = require( `webpack-merge` )( resolve, loaders(), config, commonPlugins );
console.log( `The DLL Config is...` );
console.log( config );
module.exports = config;
