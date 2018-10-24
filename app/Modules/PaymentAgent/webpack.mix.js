const { mix } = require('laravel-mix');
require('laravel-mix-merge-manifest');

// mix.setPublicPath('../../public').mergeManifest();

mix.js(__dirname + '/Resources/js/agent-app.js', 'js/paymentagent.js')
    .sass( __dirname + '/Resources/sass/agent-app.scss', 'css/paymentagent.css');

// if (mix.inProduction()) {
    // mix.version();
// }
mix
   .version()
   .sourceMaps();

 mix.webpackConfig({
      devtool: 'source-map'
  });
