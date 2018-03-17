// Require the stuffs that are particular to this app



home = angular.module('home', ['ngRoute', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest', 'parseHTML', 'customFileChange', 'customFileUpload', 'inputCountValidator', 'countdownTimer', 'truncate']);

home.run(['$rootScope', '$window', 'Notification', 'sendRequest', function ($rootScope, $window, Notification, sendRequest) {
	$rootScope.logout = function () {
		sendRequest.postRequest('/logout')
			.then(function (response) {
				if (response.status == 200) {
					Notification.success({
						message: 'Logout successful',
						positionX: 'center'
					});
					$window.location.href = '/login';
				} else {
					Notification.error({
						message: 'Logout failed! Reload page.',
						positionX: 'center'
					});
				}
			});
	};
}]);

home.factory('bootstrapPage', ['$timeout', function InboxService($timeout) {
	return {
	 homepage: function (scope) {
      scope.$on('$viewContentLoaded', function() {
        // $timeout(function () {
        //   $(function () {
				//
        //     //set up the slideshow
    		// 		var slidesWrapper = $('.cd-hero-slider');
				//
    		// 		//check if a .cd-hero-slider exists in the DOM
    		// 		if (slidesWrapper.length > 0) {
    		// 			var primaryNav = $('.cd-primary-nav'),
    		// 				sliderNav = $('.cd-slider-nav'),
    		// 				navigationMarker = $('.cd-marker'),
    		// 				slidesNumber = slidesWrapper.children('li').length,
    		// 				visibleSlidePosition = 3,
    		// 				autoPlayId,
    		// 				autoPlayDelay = 5000;
				//
    		// 			//upload videos (if not on mobile devices)
    		// 			uploadVideo(slidesWrapper);
				//
    		// 			//autoplay slider
    		// 			setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);
				//
    		// 			//on mobile - open/close primary navigation clicking/tapping the menu icon
    		// 			primaryNav.on('click', function (event) {
    		// 				if ($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
    		// 			});
				//
    		// 			//change visible slide
    		// 			sliderNav.on('click', 'li', function (event) {
    		// 				event.preventDefault();
    		// 				var selectedItem = $(this);
    		// 				if (!selectedItem.hasClass('selected')) {
    		// 					// if it's not already selected
    		// 					var selectedPosition = selectedItem.index(),
    		// 						activePosition = slidesWrapper.find('li.selected').index();
				//
    		// 					if (activePosition < selectedPosition) {
    		// 						nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
    		// 					} else {
    		// 						prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
    		// 					}
				//
    		// 					//this is used for the autoplay
    		// 					visibleSlidePosition = selectedPosition;
				//
    		// 					updateSliderNavigation(sliderNav, selectedPosition);
    		// 					updateNavigationMarker(navigationMarker, selectedPosition + 1);
    		// 					//reset autoplay
    		// 					setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);
    		// 				}
    		// 			});
    		// 		}
				//
    		// 		function nextSlide(visibleSlide, container, pagination, n) {
    		// 			visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
    		// 				visibleSlide.removeClass('is-moving');
    		// 			});
				//
    		// 			container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');
    		// 			checkVideo(visibleSlide, container, n);
    		// 		}
				//
    		// 		function prevSlide(visibleSlide, container, pagination, n) {
    		// 			visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
    		// 				visibleSlide.removeClass('is-moving');
    		// 			});
				//
    		// 			container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
    		// 			checkVideo(visibleSlide, container, n);
    		// 		}
				//
    		// 		function updateSliderNavigation(pagination, n) {
    		// 			var navigationDot = pagination.find('.selected');
    		// 			navigationDot.removeClass('selected');
    		// 			pagination.find('li').eq(n).addClass('selected');
    		// 		}
				//
    		// 		function setAutoplay(wrapper, length, delay) {
    		// 			if (wrapper.hasClass('autoplay')) {
    		// 				clearInterval(autoPlayId);
    		// 				autoPlayId = window.setInterval(function () {
    		// 					autoplaySlider(length)
    		// 				}, delay);
    		// 			}
    		// 		}
				//
    		// 		function autoplaySlider(length) {
    		// 			if (visibleSlidePosition < length - 1) {
    		// 				nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, visibleSlidePosition + 1);
    		// 				visibleSlidePosition += 1;
    		// 			} else {
    		// 				prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, 0);
    		// 				visibleSlidePosition = 0;
    		// 			}
    		// 			updateNavigationMarker(navigationMarker, visibleSlidePosition + 1);
    		// 			updateSliderNavigation(sliderNav, visibleSlidePosition);
    		// 		}
				//
    		// 		function uploadVideo(container) {
    		// 			container.find('.cd-bg-video-wrapper').each(function () {
    		// 				var videoWrapper = $(this);
    		// 				if (videoWrapper.is(':visible')) {
    		// 					// if visible - we are not on a mobile device
    		// 					var videoUrl = videoWrapper.data('video'),
    		// 						video = $('<video loop><source src="' + videoUrl + '.mp4" type="video/mp4" /><source src="' + videoUrl + '.webm" type="video/webm" /></video>');
    		// 					video.appendTo(videoWrapper);
    		// 					// play video if first slide
    		// 					if (videoWrapper.parent('.cd-bg-video.selected').length > 0) video.get(0).play();
    		// 				}
    		// 			});
    		// 		}
				//
    		// 		function checkVideo(hiddenSlide, container, n) {
    		// 			//check if a video outside the viewport is playing - if yes, pause it
    		// 			var hiddenVideo = hiddenSlide.find('video');
    		// 			if (hiddenVideo.length > 0) hiddenVideo.get(0).pause();
				//
    		// 			//check if the select slide contains a video element - if yes, play the video
    		// 			var visibleVideo = container.children('li').eq(n).find('video');
    		// 			if (visibleVideo.length > 0) visibleVideo.get(0).play();
    		// 		}
				//
    		// 		function updateNavigationMarker(marker, n) {
    		// 			marker.removeClassPrefix('item').addClass('item-' + n);
    		// 		}
				//
    		// 		$.fn.removeClassPrefix = function (prefix) {
    		// 			//remove all classes starting with 'prefix'
    		// 			this.each(function (i, el) {
    		// 				var classes = el.className.split(" ").filter(function (c) {
    		// 					return c.lastIndexOf(prefix, 0) !== 0;
    		// 				});
    		// 				el.className = $.trim(classes.join(" "));
    		// 			});
    		// 			return this;
    		// 		};
				//
				//
        //     //Bootstrap the rest of the page
				//
        //   		lightbox();
        //   		fancyBoxFire();
        //   		toggleHeading();
        //   		bootstrapAnimatedLayer();
        //   		clientCarousel();
				// 			partnersCarousel();
				// 			membershipCarousel();
        //   		thmProjectFilter();
				// 			relatedPostsCarousel();
        //   		thmBarChart();
        //   		doughnutChartBox();
        //   		testiCarousel();
        //   		maineNavToggle();
        //   		contactFormValidation();
        //   		scrollMenu();
				// 			buySellCryptoFilter();
				// 			scrollToTop();
				// 			console.log('page bootstrapped');
				//
    		// 	});
        // }, 500);
      });

		}
	};
}]);

require('./angular/filters/parseHTML');
require('./angular/filters/truncateString');
require('./angular/services/services');
//
// require('./angular/filters/rangeFilter');
//
require('./angular/directives/customFileChange');
require('./angular/directives/customFileUpload');
require('./angular/directives/inputCountValidator');
require('./angular/directives/countdownTimer');
//
//
// require('./angular/directives/ngRepeatFinishedCallback');
//
// require('./angular/directives/setSameHeight');



require('./angular/routes/home-routes');

require('./angular/controllers/home-controller');
