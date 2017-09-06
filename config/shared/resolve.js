var { paths: { client } } = require( `../utils` );

const alias = {
  'app': client( `app` ),
  'lib': client( `lib` ),
  'styles': client( `styles` ),
  'vendor': client( `vendor` ),
  'vue': `vue/dist/vue.common.js`,
  'stdlib': client( `lib/stdlib` ),
  'unpacked': client( `unpacked-dependencies` ),
  'custom-bootstrap-css': client( `unpacked-dependencies/custom-bootstrap.css` ),
  'bootstrap-js': client( `unpacked-dependencies/bootstrap-sass/assets/javascripts/bootstrap.min.js` ),
  'full-bootstrap.css': client( `unpacked-dependencies/bootstrap-sass/assets/stylesheets/full-bootstrap.css` ),
  'application.css': client( `unpacked-dependencies/application.css` ),
  'images': client( `images` ),
  'old': client( `lib/old` ),
};

module.exports = {
  resolve: {
    alias,
    extensions: [ `.js`, `.json`, `.babel`, `*` ],
  },
};
