module.exports = {
  plugins: [
    // require('postcss-modules')({
    //   scopeBehaviour: 'global',
    //   generateScopedName: '[name]__[local]___[hash:base64:5]',
    // }),
    require( `autoprefixer` )( `last 2 versions`, `ie 9` ),
  ],
};
