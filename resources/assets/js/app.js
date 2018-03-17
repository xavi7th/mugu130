/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

jQuery.fn.load = function (callback) {
	$(window).on("load", callback);
};


$(function () {

	$('img[data-enlarge]')
		.each(function () {
			// console.log($(this).data('enlarge'));
			var theImg = $(this)
				.attr('src');
			$(this)
				.parent()
				.css({
					'background-image': 'url(' + theImg + ')',
					'background-size': 'cover',
					'background-position': 'center',
					'background-color': 'whitesmoke',
					'max-width': '100%',
					'height': $(this)
						.data('enlarge')
				});
			$(this)
				.remove();
		});

});
