var webpack = require( `webpack` );

module.exports = ( utils ) => ({
  entry: {
    dom: [
      `vue`,
      `chart.js`,
      `jquery`,
      `jquery-circliful`,
      `raphael`,
      `unpacked/morris.min`,
      `element-ui/lib/theme-default/index.css`,
      `element-ui/lib/locale/lang/en`,
      `element-ui/lib/locale`,
      `element-ui`,
      `custom-bootstrap-css`,
      `bootstrap-js`,
      `inputmask/dist/jquery.inputmask.bundle.js`,
      `font-awesome/css/font-awesome.css`,
    ],
    util: [
      `axios`,
      `moment`,
      `lodash`,
      `core-js`,
      `regenerator-runtime`,
    ],
    polyfill: [
      `whatwg-fetch`,
      `es6-promise`,
    ],
    login: [
      `full-bootstrap.css`,
    ],
  },
  manifestPath( name = `[name]` ) {
    return utils.paths.client( `dll`, `${ name }-manifest.json` );
  },
  DllReferencePlugins() {
    return Object.keys( this.entry ).map( dllName => {
      console.log( `creating a reference for...`, dllName );
      var opts = {
        context: utils.paths.client(),
        manifest: this.manifestPath( dllName ),
      };
      console.log( opts );
      return new webpack.DllReferencePlugin( opts );
    });
  },
  DllPlugin() {
    return new webpack.DllPlugin({
      name: `[name]`,
      path: this.manifestPath(),
      context: utils.paths.client(),
    });
  },
  CommonsChunkPlugins() {
    return [ utils.chunks.MultipleExplicitVendorChunks({ names: Object.keys( this.entry ) }) ];
  },
  CachedVendorPlugins() {
    if ( utils.env.isDev()) {
      return this.DllReferencePlugins();
    } else {
      return [];
    }
  },
});
