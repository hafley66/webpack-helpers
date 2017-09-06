var { paths, filenames } = require( `../../utils` );

module.exports = {
  output: {
    path: paths.buildFolder.internal(),
    filename: filenames.js(),
  },
  plugins: [
    ...require( `./development/stable-chunk-names` ),
  ],
  devtool: `source-map`,
};
