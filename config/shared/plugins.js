var webpack = require( `webpack` );
var tools = require( `../utils/tools` );
var autoprefixer = require( `autoprefixer` );
module.exports = {
  plugins: [
    // NOTE-1: See http://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
    new webpack.ContextReplacementPlugin( /moment[\/\\]locale$/, /en$/ ),
    ...tools,
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer( `last 2 versions`, `ie 9` ),
        ],
      },
    }),
  ],
};
