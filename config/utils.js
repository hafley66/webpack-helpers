var path = require( `path` );
var styles = require( `./utils/styles` );

const HOME = process.env.HOME;
var ENV = process.env.RAILS_ENV;
process.env.NODE_ENV = ENV;

console.log( ENV );

const env = {
  toString: () => ENV,
  isLocal() {
    return this.isDev();
  },
  isDev: () => !!ENV.match( /^dev|development?/ig ),
  isProd: () => !!ENV.match( /^prod|production?/ig ),
  isTest: () => !!ENV.match( /^test|testing?/ig ),
  isWatch: () => !!process.env.NODE_WATCH,
  isDebug: () => !!( process.env.DEBUG || process.env.NODE_DEBUG ),
};

const filenames = {
  js: () => env.isDev() ? `[name].js` : `[name].[chunkhash].js`,
  jsDLL: () => env.isDev() ? `[name].dll.js` : `[name].[chunkhash].dll.js`,
  css: () => env.isDev() ? `[name].css` : `[name].[contenthash].css`,
  file: () => env.isDev() ? `[name].[ext]` : `[name].[ext]?[hash]`,
};

const paths = {
  client: path.join.bind( path, HOME, `client` ),
  server: path.join.bind( path, HOME ),
  buildFolder: {
    internal: path.join.bind( path, HOME, `public`, `bassets` ),
    external: path.join.bind( path, `/bassets/` ),
    dll: {
      internal: path.join.bind( path, HOME, `public`, `dll-assets` ),
      external: path.join.bind( path, `/bassets`, `dll-assets` ),
    },
  },
  fileLoader: () => env.isDev() ? `/dll-assets/` : `/bassets/`,
};

var utils = {
  env,
  filenames,
  paths,
  chunks: require( `./utils/chunks` ),
  extract: require( `./utils/extract` ),
};

utils.deps = require( `./utils/vendors` )( utils );
utils.styles = require( `./utils/styles` )( utils );

module.exports = ( utils );
