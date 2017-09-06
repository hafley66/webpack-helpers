const { deps, chunks } = require( `../utils` );

module.exports = {
  webpackBootstrap: () => [ chunks.WebpackBootstrapChunk() ],
  cachedVendors: () => deps.CachedVendorPlugins(),
  implicitVendors: () => [ chunks.ImplicitVendorChunk() ],
  lib: () => [ chunks.ImplicitCommonChunk() ],
};
