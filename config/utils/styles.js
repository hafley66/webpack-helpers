const autoprefixer = require( `autoprefixer` );
const { plugin: PLUGIN, loader: LOADER } = require( `./extract` );

const ALL_LOADERS = [
  ``, //css
  `sass-loader`,
  `sass-loader?indentedSyntax`,
];

module.exports = ( utils ) => (
  {
    createPlugins() {
      return [ this.createPlugin() ];
    },
    createPlugin() {
      this._extractor = this._extractor || PLUGIN( this.extractionOptions());
      return this._extractor;
    },
    createLoader( loaderConfig, fallback = `style-loader` ) {
      return LOADER({
        use: this.withBaseLoaders( loaderConfig ),
        fallback,
      });
    },
    extractionOptions: () => ({
      filename: utils.filenames.css(),
      disable: utils.env.isDev(),
    }),
    withBaseLoaders( loader ) {
      if ( loader ) {
        return [ ...this.baseLoaders(), loader ];
      } else {
        return this.baseLoaders();
      }
    },
    baseLoaders() {
      this._baseLoaders = this._baseLoaders || [
        { loader: `css-loader`, options: { autoprefixer: false, minimize: false } },
        {
          loader: `postcss-loader`,
            // TODO: Test autoprefixer to make sure its prefixing
          options: { postcss: [ autoprefixer( `last 2 versions`, `ie 9` ) ] },
        },
      ];
      return this._baseLoaders;
    },
    _extractor: null,
    _baseLoaders: null,
    allLoaders( fallback = `style-loader` ) {
      return ALL_LOADERS.map( str => this.createLoader( str, fallback ));
    },
  }
);
