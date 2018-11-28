const { mix } = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.js(__dirname + '/Resources/js/admin-app.js', 'js/admin-supplementary-app.js')

mix
   .version()
   .sourceMaps();

 mix.webpackConfig({
      devtool: 'source-map'
  });
