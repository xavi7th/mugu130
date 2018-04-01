let mix = require('laravel-mix');
require('laravel-mix-purgecss');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


 mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['jquery', 'axios',  'bootstrap-sass'])
    .sass('resources/assets/sass/app.scss', 'public/css')
    // .sass('resources/assets/sass/dashboard-app.scss', 'public/css')
    .js('resources/assets/js/home-app.js', 'public/js')
    .js('resources/assets/js/dashboard-app.js', 'public/js')
    // .js('resources/assets/js/admin-app.js', 'public/js')
    .options({
        //  processCssUrls: false,
         fileLoaderDirs: {
           images: 'img',
           // fonts: 'web-fonts'
         },
         postCss: [
             require( 'postcss-fixes' )(), // add fallbacks for rem units and other fixes
             require( 'postcss-merge-rules' )(), // merge rules
             require( 'postcss-discard-duplicates' )() // remove duplicate rules
         ]
    }
 )
    .autoload({
         jquery: ['$', 'jQuery']
     })
    .version()
    .sourceMaps();

  mix.combine([
    'resources/assets/js/libraries/semantic.js',
    'resources/assets/js/libraries/itse-master.js',
      'resources/assets/js/libraries/nprogress.js',
  ], 'public/js/libraries.js');


   mix.browserSync({
    //  proxy: "localhost:8000",
    reloadDelay: 2000,
    proxy: {
         target: 'localhost:8000',
         reqHeaders: function () {
             return {
                 host: "localhost:3000"
             };
         }
      },
    browser: "vivaldi",
    files: [

        //  'app/**/*.php',
         'resources/views/**/*.php',
         'resources/**/*.js',
         'public/**/*.html',
         'public/**/*.php',
         '!public/js/**/*.js',
         '!public/js/**/libraries.js',
         'public/css/**/*.css'
     ],
   });
