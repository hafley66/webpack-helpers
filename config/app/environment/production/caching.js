var WebpackChunkHash = require( `webpack-chunk-hash` );
var ManifestPlugin = require( `webpack-manifest-plugin` );
var { paths } = require( `../../../utils` );
// var ChunkManifestPlugin = require( `chunk-manifest-webpack-plugin` );


module.exports = [

  new WebpackChunkHash(),
  new ManifestPlugin({
    fileName: `webpack-manifest.json`,
    publicPath: paths.buildFolder.external(),
  }),
    // new ChunkManifestPlugin({
    //   filename: `chunk-manifest.json`,
    //   basePath: outpath,
    //   manifestVariable: `webpackManifest`,
    // }),
];
