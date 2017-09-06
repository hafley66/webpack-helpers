const { styles, filenames, paths } = require( `../utils` );


var [
  css,
  scss,
  sass,
] = styles.allLoaders();

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: `file-loader`,
        options: {
          publicPath: paths.fileLoader(),
          name: filenames.file(),
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: `file-loader`,
        options: {
          publicPath: paths.fileLoader(),
          name: filenames.file(),
        },
      },
      {
        test: /\.scss$/, use: scss,
      },
      {
        test: /\.sass$/, use: sass,
      },
      {
        test: /\.css$/, use: css,
      },
    ],
  },
  plugins: [
    styles.createPlugin(),
  ],
});
