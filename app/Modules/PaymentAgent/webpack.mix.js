const { mix } = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.js(__dirname + '/Resources/js/agent-app.js', 'js/paymentagent.js')

mix
   .version()
   .sourceMaps();

 mix.webpackConfig({
      devtool: 'source-map'
  });
