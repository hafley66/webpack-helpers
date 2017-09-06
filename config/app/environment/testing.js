var path = require( `path` );

// TODO: Match with new config and get karma to work.
module.exports = {
  devtool: `cheap-module-source-map`,
  output: {
    path: path.join( __dirname, `/../../../public/bassets/` ),
    filename: `[name].js`,
  },
};
module.exports = TestingConfig;
