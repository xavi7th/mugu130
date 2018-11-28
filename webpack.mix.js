const mix = require('laravel-mix');
let glob = require('glob');
let fs = require('fs-extra');

let modules = fs.readdirSync('app/Modules'); // Make sure the path of yoour modules are correct

if (modules && modules.length > 0){
    modules.forEach((module) => {
        let path = `./app/Modules/${module}/webpack.mix.js`;
        if (fs.existsSync(path)) {
          require(path);
        }
    });
}

let bladeFiles = glob.sync(
    Mix.paths.root('resources/views/**/*.blade.php')
);

let jsFiles = glob.sync(
    Mix.paths.root('resources/assets/js/**/*.js')
);

let htmlFiles = glob.sync(
    Mix.paths.root('public/angular/views/**/*.html')
);

let moduleBladeFiles = glob.sync(
    Mix.paths.root('app/Modules/**/*.blade.php')
);

let vueFiles = glob.sync(
    Mix.paths.root('app/Modules/**/*.vue')
);
let paths = moduleBladeFiles.concat(htmlFiles).concat(vueFiles)
            .concat(jsFiles).concat(htmlFiles).concat(bladeFiles);

console.log(paths);


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
	.js('resources/assets/js/home-app.js', 'public/js')
	.js('resources/assets/js/dashboard-app.js', 'public/js')
	.js('resources/assets/js/admin-app.js', 'public/js')
  .autoload({
    jquery: ['$', 'jQuery']
  })
	.sass('resources/assets/sass/app.scss', 'public/css')
  .sourceMaps()
	.options({
		 // processCssUrls: false,
		purifyCss: {
		   paths: paths,
		   purifyOptions: {
		     whitelist:['*.datepicker*', '*.owl-*', '*ui-notification*', '*.ng-*', '*.modals*', '*.ui.table*', '*.ui.form*',
                    '*.scrolling*', '*.sweet-alert*', '.showSweetAlert', '.hideSweetAlert', '.animateSuccessTip', '.animateSuccessLong',
                    '.animateSuccessTip', '.animateSuccessLong', '.animateErrorIcon', '.animateXMark', '.pulseWarning', '.pulseWarningIns',
                    '.sweet-overlay', '*.sa-success*'],
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

// mix.browserSync({
// 	//  proxy: "localhost:8000",
// 	reloadDelay: 1000,
// 	// Don't show any notifications in the browser.
// 	notify: false,
// 	// Inject CSS changes
// 	injectChanges: true,
// 	ghostMode: {
// 			clicks: false,
// 			forms: false,
// 			scroll: false
// 	},
// 	// Attempt to use the URL "http://my-private-site.localtunnel.me"
// 	tunnel: "daniel",
// 	// Will not attempt to determine your network status, assumes you're ONLINE.
// 	online: false,
// 	proxy: {
// 		target: 'localhost:8000',
// 		reqHeaders: function () {
// 			return {
// 				host: "localhost:3000"
// 			};
// 		}
// 	},
// 	// browser: "vivaldi",
// 	browser: ["google chrome"],
// 	files: [
//
//         //  'app/**/*.php',
//          'resources/views/**/*.php',
//          '!resources/**/*.js',
//          'public/**/*.html',
//          'public/**/*.php',
//          'public/js/**/*.js',
//          '!public/js/**/libraries.js',
//          '!public/css/**/*.css',
//          '!public/css/**/*.map',
//          'app/Modules/**/*.vue',
//          'app/Modules/**/*.blade.php'
//      ],
// });
