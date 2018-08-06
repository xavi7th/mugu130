let mix = require('laravel-mix');
let glob = require('glob');

let directiveFiles = glob.sync(
    Mix.paths.root('resources/assets/js/angular/directives/*.js')
);

let htmlFiles = glob.sync(
    Mix.paths.root('public/angular/views/**/*.html')
);
let paths = directiveFiles.concat(htmlFiles);//.concat(otherPhpFiles);
//


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
	.extract(['jquery', 'angular', 'angular-route', 'angular-animate', 'ngStorage', 'angular-ui-notification', 'angular-timeago'])
	// .sass('resources/assets/sass/dashboard-app.scss', 'public/css')
	.js('resources/assets/js/home-app.js', 'public/js')
	.js('resources/assets/js/dashboard-app.js', 'public/js')
	.js('resources/assets/js/admin-app.js', 'public/js')
  .autoload({
    jquery: ['$', 'jQuery']
  })
	.sass('resources/assets/sass/app.scss', 'public/css')
  .sourceMaps()
	.options({
		//  processCssUrls: false,
		purifyCss: {
		   paths: paths,
		   purifyOptions: {
		     whitelist:['*.datepicker*', '*.owl-*', '*ui-notification*', '*.ng-*'],
		     // extensions: ['html', 'php', 'js', 'php'],
		     // info: true,
		     rejected: true,
		   }
		 },
		fileLoaderDirs: {
			images: 'img',
			// fonts: 'web-fonts'
		},
		postCss: [
             require('postcss-fixes')(), // add fallbacks for rem units and other fixes
             // require('postcss-merge-rules')(), // merge rules
             // require('postcss-discard-duplicates')() // remove duplicate rules
         ]
	})
	.version();

mix.scripts([
    'resources/assets/js/libraries/semantic.js',
    'resources/assets/js/libraries/itse-master.js',
      'resources/assets/js/libraries/nprogress.js',
  ], 'public/js/libraries.js');

mix.webpackConfig({
		 devtool: 'source-map'
 });

mix.browserSync({
	//  proxy: "localhost:8000",
	reloadDelay: 1000,
	// Don't show any notifications in the browser.
	notify: false,
	// Inject CSS changes
	injectChanges: true,
	ghostMode: {
			clicks: false,
			forms: false,
			scroll: true
	},
	// Attempt to use the URL "http://my-private-site.localtunnel.me"
	tunnel: "daniel",
	// Will not attempt to determine your network status, assumes you're ONLINE.
	online: false,
	proxy: {
		target: 'localhost:9000',
		reqHeaders: function () {
			return {
				host: "localhost:3000"
			};
		}
	},
	// browser: "vivaldi",
	browser: ["google chrome", "firefox"],
	files: [

        //  'app/**/*.php',
         'resources/views/**/*.php',
         '!resources/**/*.js',
         'public/**/*.html',
         'public/**/*.php',
         'public/js/**/*.js',
         '!public/js/**/libraries.js',
         '!public/css/**/*.css',
         '!public/css/**/*.map'
     ],
});
