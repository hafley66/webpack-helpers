var { env } = require( `../utils` );

// const HappyPack = require( `happypack` );
// HappyPack.SERIALIZABLE_OPTIONS.push( `vue` );
var BundleAnalyzerPlugin = require( `webpack-bundle-analyzer` ).BundleAnalyzerPlugin;
var DashboardPlugin = require( `webpack-dashboard/plugin` );
var plugins = [];

if ( env.isDebug() || env.isWatch()) {
  plugins.push( new DashboardPlugin({ port: 3001 }));
}
if ( env.isDebug()) {
  plugins.push(
    new BundleAnalyzerPlugin({
      // Can be `server`, `static` or `disabled`.
      // In `server` mode analyzer will start HTTP server to show bundle report.
      // In `static` mode single HTML file with bundle report will be generated.
      // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
      analyzerMode: `static`,
      // Host that will be used in `server` mode to start HTTP server.
      // analyzerHost: `localhost`,
      // Port that will be used in `server` mode to start HTTP server.
      // analyzerPort: 10000,
      // Path to bundle report file that will be generated in `static` mode.
      // Relative to bundles output directory.
      reportFilename: `webpack-stats.html`,
      // Automatically open report in default browser
      // If `true`, Webpack Stats JSON file will be generated in bundles output directory
      generateStatsFile: true,
      // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
      // Relative to bundles output directory.
      statsFilename: `stats.json`,
      // Options for `stats.toJson()` method.
      // For example you can exclude sources of your modules from stats file with `source: false` option.
      // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
      statsOptions: null,
      // Log level. Can be 'info', 'warn', 'error' or 'silent'.
      logLevel: `info`,
    })
  );
}

module.exports = plugins;
