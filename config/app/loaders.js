var merge = require( `webpack-merge` );
const { styles } = require( `../utils` );
const commonLoaders = require( `../shared/loaders` );


var [
  css,
  scss,
  sass,
] = styles.allLoaders( `vue-style-loader` );

module.exports = merge(
  {
    module: {
      rules: [
        {
          test: /\.babel$/,
          exclude: /node_modules/,
          use: {
            loader: `babel-loader`,
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.vue$/,
          loader: `vue-loader`,
          options: {
            loaders: { css, scss, sass },
            postcss: [
              require( `autoprefixer` )( `last 2 versions`, `ie 9` ),
            ],
          },
        },
      ],
    },
  },
  commonLoaders()
);
