webpackJsonp([3],{

/***/ "./node_modules/angular-sweetalert/SweetAlert.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
@fileOverview

@toc

*/

(function (root, factory) {
	"use strict";

	/*global define*/
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/angular/index.js"), __webpack_require__("./node_modules/angular-sweetalert/node_modules/sweetalert/lib/sweet-alert.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));  // AMD
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('angular'), require('sweetalert')); // Node
	} else {
		factory(root.angular, root.swal);					// Browser
	}

}(this, function (angular, swal) {
	"use strict";

	angular.module('oitozero.ngSweetAlert', [])
		.factory('SweetAlert', [ '$rootScope', function ( $rootScope ) {
			//public methods
			var self = {

				swal: function ( arg1, arg2, arg3 ) {
					$rootScope.$evalAsync(function(){
						if( typeof(arg2) === 'function' ) {
							swal( arg1, function(isConfirm){
								$rootScope.$evalAsync( function(){
									arg2(isConfirm);
								});
							}, arg3 );
						} else {
							swal( arg1, arg2, arg3 );
						}
					});
				},
				success: function(title, message) {
					$rootScope.$evalAsync(function(){
						swal( title, message, 'success' );
					});
				},
				error: function(title, message) {
					$rootScope.$evalAsync(function(){
						swal( title, message, 'error' );
					});
				},
				warning: function(title, message) {
					$rootScope.$evalAsync(function(){
						swal( title, message, 'warning' );
					});
				},
				info: function(title, message) {
					$rootScope.$evalAsync(function(){
						swal( title, message, 'info' );
					});
				},
				showInputError: function(message) {
					$rootScope.$evalAsync(function(){
						swal.showInputError( message );
					});
				},
				close: function() {
					$rootScope.$evalAsync(function(){
						swal.close();
					});
				}
			};

			return self;
		}]);
}));





/***/ }),

/***/ "./node_modules/angular-sweetalert/node_modules/sweetalert/lib/sweet-alert.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// SweetAlert
// 2014 (c) - Tristan Edwards
// github.com/t4t5/sweetalert
;(function(window, document, undefined) {

  var modalClass   = '.sweet-alert',
      overlayClass = '.sweet-overlay',
      alertTypes   = ['error', 'warning', 'info', 'success'],
      defaultParams = {
        title: '',
        text: '',
        type: null,
        allowOutsideClick: false,
        showConfirmButton: true,
        showCancelButton: false,
        closeOnConfirm: true,
        closeOnCancel: true,
        confirmButtonText: 'OK',
        confirmButtonColor: '#AEDEF4',
        cancelButtonText: 'Cancel',
        imageUrl: null,
        imageSize: null,
        timer: null,
        customClass: '',
        html: false,
        animation: true,
        allowEscapeKey: true
      };


  /*
   * Manipulate DOM
   */

  var getModal = function() {
      var $modal = document.querySelector(modalClass);

      if (!$modal) {
        sweetAlertInitialize();
        $modal = getModal();
      }

      return $modal;
    },
    getOverlay = function() {
      return document.querySelector(overlayClass);
    },
    hasClass = function(elem, className) {
      return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    },
    addClass = function(elem, className) {
      if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
      }
    },
    removeClass = function(elem, className) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
          newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
    },
    escapeHtml = function(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    },
    _show = function(elem) {
      elem.style.opacity = '';
      elem.style.display = 'block';
    },
    show = function(elems) {
      if (elems && !elems.length) {
        return _show(elems);
      }
      for (var i = 0; i < elems.length; ++i) {
        _show(elems[i]);
      }
    },
    _hide = function(elem) {
      elem.style.opacity = '';
      elem.style.display = 'none';
    },
    hide = function(elems) {
      if (elems && !elems.length) {
        return _hide(elems);
      }
      for (var i = 0; i < elems.length; ++i) {
        _hide(elems[i]);
      }
    },
    isDescendant = function(parent, child) {
      var node = child.parentNode;
      while (node !== null) {
        if (node === parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    },
    getTopMargin = function(elem) {
      elem.style.left = '-9999px';
      elem.style.display = 'block';

      var height = elem.clientHeight,
          padding;
      if (typeof getComputedStyle !== "undefined") { /* IE 8 */
        padding = parseInt(getComputedStyle(elem).getPropertyValue('padding'), 10);
      } else {
        padding = parseInt(elem.currentStyle.padding);
      }

      elem.style.left = '';
      elem.style.display = 'none';
      return ('-' + parseInt(height / 2 + padding) + 'px');
    },
    fadeIn = function(elem, interval) {
      if (+elem.style.opacity < 1) {
        interval = interval || 16;
        elem.style.opacity = 0;
        elem.style.display = 'block';
        var last = +new Date();
        var tick = function() {
          elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
          last = +new Date();

          if (+elem.style.opacity < 1) {
            setTimeout(tick, interval);
          }
        };
        tick();
      }
      elem.style.display = 'block'; //fallback IE8
    },
    fadeOut = function(elem, interval) {
      interval = interval || 16;
      elem.style.opacity = 1;
      var last = +new Date();
      var tick = function() {
        elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
        last = +new Date();

        if (+elem.style.opacity > 0) {
          setTimeout(tick, interval);
        } else {
          elem.style.display = 'none';
        }
      };
      tick();
    },
    fireClick = function(node) {
      // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
      // Then fixed for today's Chrome browser.
      if (typeof MouseEvent === 'function') {
        // Up-to-date approach
        var mevt = new MouseEvent('click', {
          view: window,
          bubbles: false,
          cancelable: true
        });
        node.dispatchEvent(mevt);
      } else if ( document.createEvent ) {
        // Fallback
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('click', false, false);
        node.dispatchEvent(evt);
      } else if( document.createEventObject ) {
        node.fireEvent('onclick') ;
      } else if (typeof node.onclick === 'function' ) {
        node.onclick();
      }
    },
    stopEventPropagation = function(e) {
      // In particular, make sure the space bar doesn't scroll the main window.
      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation();
        e.preventDefault();
      } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
        window.event.cancelBubble = true;
      }
    };

  // Remember state in cases where opening and handling a modal will fiddle with it.
  var previousActiveElement,
      previousDocumentClick,
      previousWindowKeyDown,
      lastFocusedButton;


  /*
   * Add modal + overlay to DOM
   */

  var sweetAlertInitialize = function() {
    var sweetHTML = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="sa-icon sa-error"><span class="sa-x-mark"><span class="sa-line sa-left"></span><span class="sa-line sa-right"></span></span></div><div class="sa-icon sa-warning"> <span class="sa-body"></span> <span class="sa-dot"></span> </div> <div class="sa-icon sa-info"></div> <div class="sa-icon sa-success"> <span class="sa-line sa-tip"></span> <span class="sa-line sa-long"></span> <div class="sa-placeholder"></div> <div class="sa-fix"></div> </div> <div class="sa-icon sa-custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
        sweetWrap = document.createElement('div');

    sweetWrap.innerHTML = sweetHTML;

    // Append elements to body
    while (sweetWrap.firstChild) {
      document.body.appendChild(sweetWrap.firstChild);
    }
  };


  /*
   * Global sweetAlert function
   */
  var sweetAlert, swal;
  
  sweetAlert = swal = function() {
    var customizations = arguments[0];

    /*
     * Use argument if defined or default value from params object otherwise.
     * Supports the case where a default value is boolean true and should be
     * overridden by a corresponding explicit argument which is boolean false.
     */
    function argumentOrDefault(key) {
      var args = customizations;

      if (typeof args[key] !== 'undefined') {
        return args[key];
      } else {
        return defaultParams[key];
      }
    }

    if (arguments[0] === undefined) {
      logStr('SweetAlert expects at least 1 attribute!');
      return false;
    }

    var params = extend({}, defaultParams);

    switch (typeof arguments[0]) {

      // Ex: swal("Hello", "Just testing", "info");
      case 'string':
        params.title = arguments[0];
        params.text  = arguments[1] || '';
        params.type  = arguments[2] || '';

        break;

      // Ex: swal({title:"Hello", text: "Just testing", type: "info"});
      case 'object':
        if (arguments[0].title === undefined) {
          logStr('Missing "title" argument!');
          return false;
        }

        params.title = arguments[0].title;

        var availableCustoms = [
          'text',
          'type',
          'customClass',
          'allowOutsideClick',
          'showConfirmButton',
          'showCancelButton',
          'closeOnConfirm',
          'closeOnCancel',
          'timer',
          'confirmButtonColor',
          'cancelButtonText',
          'imageUrl',
          'imageSize',
          'html',
          'animation',
          'allowEscapeKey'];

        // It would be nice to just use .forEach here, but IE8... :(
        var numCustoms = availableCustoms.length;
        for (var customIndex = 0; customIndex < numCustoms; customIndex++) {
          var customName = availableCustoms[customIndex];
          params[customName] = argumentOrDefault(customName);
        }

        // Show "Confirm" instead of "OK" if cancel button is visible
        params.confirmButtonText  = (params.showCancelButton) ? 'Confirm' : defaultParams.confirmButtonText;
        params.confirmButtonText  = argumentOrDefault('confirmButtonText');

        // Function to call when clicking on cancel/OK
        params.doneFunction       = arguments[1] || null;

        break;

      default:
        logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]);
        return false;

    }

    setParameters(params);
    fixVerticalPosition();
    openModal();


    // Modal interactions
    var modal = getModal();

    // Mouse interactions
    var onButtonEvent = function(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement,
          targetedConfirm    = (target.className.indexOf("confirm") !== -1),
          modalIsVisible     = hasClass(modal, 'visible'),
          doneFunctionExists = (params.doneFunction && modal.getAttribute('data-has-done-function') === 'true');

      switch (e.type) {
        case ("mouseover"):
          if (targetedConfirm) {
            target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.04);
          }
          break;
        case ("mouseout"):
          if (targetedConfirm) {
            target.style.backgroundColor = params.confirmButtonColor;
          }
          break;
        case ("mousedown"):
          if (targetedConfirm) {
            target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.14);
          }
          break;
        case ("mouseup"):
          if (targetedConfirm) {
            target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.04);
          }
          break;
        case ("focus"):
          var $confirmButton = modal.querySelector('button.confirm'),
              $cancelButton  = modal.querySelector('button.cancel');

          if (targetedConfirm) {
            $cancelButton.style.boxShadow = 'none';
          } else {
            $confirmButton.style.boxShadow = 'none';
          }
          break;
        case ("click"):
          if (targetedConfirm && doneFunctionExists && modalIsVisible) { // Clicked "confirm"

            params.doneFunction(true);

            if (params.closeOnConfirm) {
              sweetAlert.close();
            }
          } else if (doneFunctionExists && modalIsVisible) { // Clicked "cancel"

            // Check if callback function expects a parameter (to track cancel actions)
            var functionAsStr          = String(params.doneFunction).replace(/\s/g, '');
            var functionHandlesCancel  = functionAsStr.substring(0, 9) === "function(" && functionAsStr.substring(9, 10) !== ")";

            if (functionHandlesCancel) {
              params.doneFunction(false);
            }

            if (params.closeOnCancel) {
              sweetAlert.close();
            }
          } else {
            sweetAlert.close();
          }

          break;
      }
    };

    var $buttons = modal.querySelectorAll('button');
    for (var i = 0; i < $buttons.length; i++) {
      $buttons[i].onclick     = onButtonEvent;
      $buttons[i].onmouseover = onButtonEvent;
      $buttons[i].onmouseout  = onButtonEvent;
      $buttons[i].onmousedown = onButtonEvent;
      //$buttons[i].onmouseup   = onButtonEvent;
      $buttons[i].onfocus     = onButtonEvent;
    }

    // Remember the current document.onclick event.
    previousDocumentClick = document.onclick;
    document.onclick = function(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;

      var clickedOnModal = (modal === target),
          clickedOnModalChild = isDescendant(modal, target),
          modalIsVisible = hasClass(modal, 'visible'),
          outsideClickIsAllowed = modal.getAttribute('data-allow-ouside-click') === 'true';

      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && outsideClickIsAllowed) {
        sweetAlert.close();
      }
    };


    // Keyboard interactions
    var $okButton = modal.querySelector('button.confirm'),
        $cancelButton = modal.querySelector('button.cancel'),
        $modalButtons = modal.querySelectorAll('button[tabindex]');


    function handleKeyDown(event) {
      var e = event || window.event;
      var keyCode = e.keyCode || e.which;

      if ([9,13,32,27].indexOf(keyCode) === -1) {
        // Don't do work on keys we don't care about.
        return;
      }

      var $targetElement = e.target || e.srcElement;

      var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
      for (var i = 0; i < $modalButtons.length; i++) {
        if ($targetElement === $modalButtons[i]) {
          btnIndex = i;
          break;
        }
      }

      if (keyCode === 9) {
        // TAB
        if (btnIndex === -1) {
          // No button focused. Jump to the confirm button.
          $targetElement = $okButton;
        } else {
          // Cycle to the next button
          if (btnIndex === $modalButtons.length - 1) {
            $targetElement = $modalButtons[0];
          } else {
            $targetElement = $modalButtons[btnIndex + 1];
          }
        }

        stopEventPropagation(e);
        $targetElement.focus();
        setFocusStyle($targetElement, params.confirmButtonColor); // TODO

      } else {
        if (keyCode === 13 || keyCode === 32) {
            if (btnIndex === -1) {
              // ENTER/SPACE clicked outside of a button.
              $targetElement = $okButton;
            } else {
              // Do nothing - let the browser handle it.
              $targetElement = undefined;
            }
        } else if (keyCode === 27 && params.allowEscapeKey === true) {
          $targetElement = $cancelButton;
        } else {
          // Fallback - let the browser handle it.
          $targetElement = undefined;
        }

        if ($targetElement !== undefined) {
          fireClick($targetElement, e);
        }
      }
    }

    previousWindowKeyDown = window.onkeydown;

    window.onkeydown = handleKeyDown;

    function handleOnBlur(event) {
      var e = event || window.event;
      var $targetElement = e.target || e.srcElement,
          $focusElement = e.relatedTarget,
          modalIsVisible = hasClass(modal, 'visible');

      if (modalIsVisible) {
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.

        if ($focusElement !== null) {
          // If we picked something in the DOM to focus to, let's see if it was a button.
          for (var i = 0; i < $modalButtons.length; i++) {
            if ($focusElement === $modalButtons[i]) {
              btnIndex = i;
              break;
            }
          }

          if (btnIndex === -1) {
            // Something in the dom, but not a visible button. Focus back on the button.
            $targetElement.focus();
          }
        } else {
          // Exiting the DOM (e.g. clicked in the URL bar);
          lastFocusedButton = $targetElement;
        }
      }
    }

    $okButton.onblur = handleOnBlur;
    $cancelButton.onblur = handleOnBlur;

    window.onfocus = function() {
      // When the user has focused away and focused back from the whole window.
      window.setTimeout(function() {
        // Put in a timeout to jump out of the event sequence. Calling focus() in the event
        // sequence confuses things.
        if (lastFocusedButton !== undefined) {
          lastFocusedButton.focus();
          lastFocusedButton = undefined;
        }
      }, 0);
    };
  };


  /*
   * Set default params for each popup
   * @param {Object} userParams
   */
  sweetAlert.setDefaults = swal.setDefaults = function(userParams) {
    if (!userParams) {
      throw new Error('userParams is required');
    }
    if (typeof userParams !== 'object') {
      throw new Error('userParams has to be a object');
    }

    extend(defaultParams, userParams);
  };


  /*
   * Set type, text and actions on modal
   */

  function setParameters(params) {
    var modal = getModal();

    var $title = modal.querySelector('h2'),
        $text = modal.querySelector('p'),
        $cancelBtn = modal.querySelector('button.cancel'),
        $confirmBtn = modal.querySelector('button.confirm');

    // Title
    $title.innerHTML = (params.html) ? params.title : escapeHtml(params.title).split("\n").join("<br>");

    // Text
    $text.innerHTML = (params.html) ? params.text : escapeHtml(params.text || '').split("\n").join("<br>");

    if (params.text) {
      show($text);
    }

    //Custom Class
    if (params.customClass) {
      addClass(modal, params.customClass);
      modal.setAttribute('data-custom-class', params.customClass);
    } else {
      // Find previously set classes and remove them
      var customClass = modal.getAttribute('data-custom-class');
      removeClass(modal, customClass);
      modal.setAttribute('data-custom-class', "");
    }

    // Icon
    hide(modal.querySelectorAll('.sa-icon'));
    if (params.type && !isIE8()) {
      var validType = false;
      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }
      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return false;
      }
      var $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
      show($icon);

      // Animate icon
      switch (params.type) {
        case "success":
          addClass($icon, 'animate');
          addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;
        case "error":
          addClass($icon, 'animateErrorIcon');
          addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;
        case "warning":
          addClass($icon, 'pulseWarning');
          addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;
      }
    }

    // Custom image
    if (params.imageUrl) {
      var $customIcon = modal.querySelector('.sa-icon.sa-custom');

      $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
      show($customIcon);

      var _imgWidth  = 80,
          _imgHeight = 80;

      if (params.imageSize) {
        var dimensions = params.imageSize.toString().split('x');
        var imgWidth  = dimensions[0];
        var imgHeight = dimensions[1];

        if (!imgWidth || !imgHeight) {
          logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + params.imageSize);
        } else {
          _imgWidth  = imgWidth;
          _imgHeight = imgHeight;
        }
      }
      $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
    }

    // Show cancel button?
    modal.setAttribute('data-has-cancel-button', params.showCancelButton);
    if (params.showCancelButton) {
      $cancelBtn.style.display = 'inline-block';
    } else {
      hide($cancelBtn);
    }

    // Show confirm button?
    modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
    if (params.showConfirmButton) {
      $confirmBtn.style.display = 'inline-block';
    } else {
      hide($confirmBtn);
    }

    // Edit text on cancel and confirm buttons
    if (params.cancelButtonText) {
      $cancelBtn.innerHTML = escapeHtml(params.cancelButtonText);
    }
    if (params.confirmButtonText) {
      $confirmBtn.innerHTML = escapeHtml(params.confirmButtonText);
    }

    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set box-shadow to default focused button
    setFocusStyle($confirmBtn, params.confirmButtonColor);

    // Allow outside click?
    modal.setAttribute('data-allow-ouside-click', params.allowOutsideClick);

    // Done-function
    var hasDoneFunction = (params.doneFunction) ? true : false;
    modal.setAttribute('data-has-done-function', hasDoneFunction);

    // Prevent modal from animating
    if (!params.animation){
      modal.setAttribute('data-animation', 'none');
    } else{
      modal.setAttribute('data-animation', 'pop');
    }

    // Close timer
    modal.setAttribute('data-timer', params.timer);
  }


  /*
   * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
   */

  function colorLuminance(hex, lum) {
    // Validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    // Convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }

    return rgb;
  }

  function extend(a, b){
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }

    return a;
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
  }

  // Add box-shadow style to button (depending on its chosen bg-color)
  function setFocusStyle($button, bgColor) {
    var rgbColor = hexToRgb(bgColor);
    $button.style.boxShadow = '0 0 2px rgba(' + rgbColor +', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
  }


  // Animation when opening modal
  function openModal() {
    var modal = getModal();
    fadeIn(getOverlay(), 10);
    show(modal);
    addClass(modal, 'showSweetAlert');
    removeClass(modal, 'hideSweetAlert');

    previousActiveElement = document.activeElement;
    var $okButton = modal.querySelector('button.confirm');
    $okButton.focus();

    setTimeout(function() {
      addClass(modal, 'visible');
    }, 500);

    var timer = modal.getAttribute('data-timer');

    if (timer !== "null" && timer !== "") {
      modal.timeout = setTimeout(function() {
        sweetAlert.close();
      }, timer);
    }
  }


  // Aninmation when closing modal
  sweetAlert.close = swal.close = function() {
    var modal = getModal();
    fadeOut(getOverlay(), 5);
    fadeOut(modal, 5);
    removeClass(modal, 'showSweetAlert');
    addClass(modal, 'hideSweetAlert');
    removeClass(modal, 'visible');


    // Reset icon animations

    var $successIcon = modal.querySelector('.sa-icon.sa-success');
    removeClass($successIcon, 'animate');
    removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
    removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

    var $errorIcon = modal.querySelector('.sa-icon.sa-error');
    removeClass($errorIcon, 'animateErrorIcon');
    removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

    var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
    removeClass($warningIcon, 'pulseWarning');
    removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
    removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');


    // Reset the page to its previous state
    window.onkeydown = previousWindowKeyDown;
    document.onclick = previousDocumentClick;
    if (previousActiveElement) {
      previousActiveElement.focus();
    }
    lastFocusedButton = undefined;
    clearTimeout(modal.timeout);
  };


  /*
   * Set "margin-top"-property on modal based on its computed height
   */

  function fixVerticalPosition() {
    var modal = getModal();

    modal.style.marginTop = getTopMargin(getModal());
  }

  // If browser is Internet Explorer 8
  function isIE8() {
    if (window.attachEvent && !window.addEventListener) {
      return true;
    } else {
      return false;
    }
  }

  // Error messages for developers
  function logStr(string) {
    if (window.console) { // IE...
      window.console.log("SweetAlert: " + string);
    }
  }

    if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return sweetAlert; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined' && module.exports) {
      module.exports = sweetAlert;
    } else if (typeof window !== 'undefined') {
      window.sweetAlert = window.swal = sweetAlert;
    }

})(window, document);


/***/ }),

/***/ "./node_modules/angular-utils-pagination/dirPagination.js":
/***/ (function(module, exports) {

/**
 * dirPagination - AngularJS module for paginating (almost) anything.
 *
 *
 * Credits
 * =======
 *
 * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
 * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */

(function() {

    /**
     * Config
     */
    var moduleName = 'angularUtils.directives.dirPagination';
    var DEFAULT_ID = '__default';

    /**
     * Module
     */
    angular.module(moduleName, [])
        .directive('dirPaginate', ['$compile', '$parse', 'paginationService', dirPaginateDirective])
        .directive('dirPaginateNoCompile', noCompileDirective)
        .directive('dirPaginationControls', ['paginationService', 'paginationTemplate', dirPaginationControlsDirective])
        .filter('itemsPerPage', ['paginationService', itemsPerPageFilter])
        .service('paginationService', paginationService)
        .provider('paginationTemplate', paginationTemplateProvider)
        .run(['$templateCache',dirPaginationControlsTemplateInstaller]);

    function dirPaginateDirective($compile, $parse, paginationService) {

        return  {
            terminal: true,
            multiElement: true,
            priority: 100,
            compile: dirPaginationCompileFn
        };

        function dirPaginationCompileFn(tElement, tAttrs){

            var expression = tAttrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/v1.4.x/src/ng/directive/ngRepeat.js#L339
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage\s*:\s*(.*\(\s*\w*\)|([^\)]*?(?=\s+as\s+))|[^\)]*)/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            addNoCompileAttributes(tElement);

            // If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
            // dir-pagination-controls directives that may be looking for this ID.
            var rawId = tAttrs.paginationId || DEFAULT_ID;
            paginationService.registerInstance(rawId);

            return function dirPaginationLinkFn(scope, element, attrs){

                // Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
                // potentially register a new ID if it evaluates to a different value than the rawId.
                var paginationId = $parse(attrs.paginationId)(scope) || attrs.paginationId || DEFAULT_ID;
                
                // (TODO: this seems sound, but I'm reverting as many bug reports followed it's introduction in 0.11.0.
                // Needs more investigation.)
                // In case rawId != paginationId we deregister using rawId for the sake of general cleanliness
                // before registering using paginationId
                // paginationService.deregisterInstance(rawId);
                paginationService.registerInstance(paginationId);

                var repeatExpression = getRepeatExpression(expression, paginationId);
                addNgRepeatToElement(element, attrs, repeatExpression);

                removeTemporaryAttributes(element);
                var compiled =  $compile(element);

                var currentPageGetter = makeCurrentPageGetterFn(scope, attrs, paginationId);
                paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                if (typeof attrs.totalItems !== 'undefined') {
                    paginationService.setAsyncModeTrue(paginationId);
                    scope.$watch(function() {
                        return $parse(attrs.totalItems)(scope);
                    }, function (result) {
                        if (0 <= result) {
                            paginationService.setCollectionLength(paginationId, result);
                        }
                    });
                } else {
                    paginationService.setAsyncModeFalse(paginationId);
                    scope.$watchCollection(function() {
                        return collectionGetter(scope);
                    }, function(collection) {
                        if (collection) {
                            var collectionLength = (collection instanceof Array) ? collection.length : Object.keys(collection).length;
                            paginationService.setCollectionLength(paginationId, collectionLength);
                        }
                    });
                }

                // Delegate to the link function returned by the new compilation of the ng-repeat
                compiled(scope);
                 
                // (TODO: Reverting this due to many bug reports in v 0.11.0. Needs investigation as the
                // principle is sound)
                // When the scope is destroyed, we make sure to remove the reference to it in paginationService
                // so that it can be properly garbage collected
                // scope.$on('$destroy', function destroyDirPagination() {
                //     paginationService.deregisterInstance(paginationId);
                // });
            };
        }

        /**
         * If a pagination id has been specified, we need to check that it is present as the second argument passed to
         * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
         *
         * @param expression
         * @param paginationId
         * @returns {*}
         */
        function getRepeatExpression(expression, paginationId) {
            var repeatExpression,
                idDefinedInFilter = !!expression.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);

            if (paginationId !== DEFAULT_ID && !idDefinedInFilter) {
                repeatExpression = expression.replace(/(\|\s*itemsPerPage\s*:\s*[^|\s]*)/, "$1 : '" + paginationId + "'");
            } else {
                repeatExpression = expression;
            }

            return repeatExpression;
        }

        /**
         * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
         * appropriate multi-element ng-repeat to the first and last element in the range.
         * @param element
         * @param attrs
         * @param repeatExpression
         */
        function addNgRepeatToElement(element, attrs, repeatExpression) {
            if (element[0].hasAttribute('dir-paginate-start') || element[0].hasAttribute('data-dir-paginate-start')) {
                // using multiElement mode (dir-paginate-start, dir-paginate-end)
                attrs.$set('ngRepeatStart', repeatExpression);
                element.eq(element.length - 1).attr('ng-repeat-end', true);
            } else {
                attrs.$set('ngRepeat', repeatExpression);
            }
        }

        /**
         * Adds the dir-paginate-no-compile directive to each element in the tElement range.
         * @param tElement
         */
        function addNoCompileAttributes(tElement) {
            angular.forEach(tElement, function(el) {
                if (el.nodeType === 1) {
                    angular.element(el).attr('dir-paginate-no-compile', true);
                }
            });
        }

        /**
         * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
         * @param element
         */
        function removeTemporaryAttributes(element) {
            angular.forEach(element, function(el) {
                if (el.nodeType === 1) {
                    angular.element(el).removeAttr('dir-paginate-no-compile');
                }
            });
            element.eq(0).removeAttr('dir-paginate-start').removeAttr('dir-paginate').removeAttr('data-dir-paginate-start').removeAttr('data-dir-paginate');
            element.eq(element.length - 1).removeAttr('dir-paginate-end').removeAttr('data-dir-paginate-end');
        }

        /**
         * Creates a getter function for the current-page attribute, using the expression provided or a default value if
         * no current-page expression was specified.
         *
         * @param scope
         * @param attrs
         * @param paginationId
         * @returns {*}
         */
        function makeCurrentPageGetterFn(scope, attrs, paginationId) {
            var currentPageGetter;
            if (attrs.currentPage) {
                currentPageGetter = $parse(attrs.currentPage);
            } else {
                // If the current-page attribute was not set, we'll make our own.
                // Replace any non-alphanumeric characters which might confuse
                // the $parse service and give unexpected results.
                // See https://github.com/michaelbromley/angularUtils/issues/233
                var defaultCurrentPage = (paginationId + '__currentPage').replace(/\W/g, '_');
                scope[defaultCurrentPage] = 1;
                currentPageGetter = $parse(defaultCurrentPage);
            }
            return currentPageGetter;
        }
    }

    /**
     * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
     * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
     * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
     */
    function noCompileDirective() {
        return {
            priority: 5000,
            terminal: true
        };
    }

    function dirPaginationControlsTemplateInstaller($templateCache) {
        $templateCache.put('angularUtils.directives.dirPagination.template', '<ul class="pagination" ng-if="1 < pages.length || !autoHide"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' || ( ! autoHide && pages.length === 1 ) }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>');
    }

    function dirPaginationControlsDirective(paginationService, paginationTemplate) {

        var numberRegex = /^\d+$/;

        var DDO = {
            restrict: 'AE',
            scope: {
                maxSize: '=?',
                onPageChange: '&?',
                paginationId: '=?',
                autoHide: '=?'
            },
            link: dirPaginationControlsLinkFn
        };

        // We need to check the paginationTemplate service to see whether a template path or
        // string has been specified, and add the `template` or `templateUrl` property to
        // the DDO as appropriate. The order of priority to decide which template to use is
        // (highest priority first):
        // 1. paginationTemplate.getString()
        // 2. attrs.templateUrl
        // 3. paginationTemplate.getPath()
        var templateString = paginationTemplate.getString();
        if (templateString !== undefined) {
            DDO.template = templateString;
        } else {
            DDO.templateUrl = function(elem, attrs) {
                return attrs.templateUrl || paginationTemplate.getPath();
            };
        }
        return DDO;

        function dirPaginationControlsLinkFn(scope, element, attrs) {

            // rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
            // not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
            // no corresponding dir-paginate directive and wrongly throwing an exception.
            var rawId = attrs.paginationId ||  DEFAULT_ID;
            var paginationId = scope.paginationId || attrs.paginationId ||  DEFAULT_ID;

            if (!paginationService.isRegistered(paginationId) && !paginationService.isRegistered(rawId)) {
                var idMessage = (paginationId !== DEFAULT_ID) ? ' (id: ' + paginationId + ') ' : ' ';
                if (window.console) {
                    console.warn('Pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive, which was not found at link time.');
                }
            }

            if (!scope.maxSize) { scope.maxSize = 9; }
            scope.autoHide = scope.autoHide === undefined ? true : scope.autoHide;
            scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
            scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

            var paginationRange = Math.max(scope.maxSize, 5);
            scope.pages = [];
            scope.pagination = {
                last: 1,
                current: 1
            };
            scope.range = {
                lower: 1,
                upper: 1,
                total: 1
            };

            scope.$watch('maxSize', function(val) {
                if (val) {
                    paginationRange = Math.max(scope.maxSize, 5);
                    generatePagination();
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
                }
            }, function(length) {
                if (0 < length) {
                    generatePagination();
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getItemsPerPage(paginationId));
                }
            }, function(current, previous) {
                if (current != previous && typeof previous !== 'undefined') {
                    goToPage(scope.pagination.current);
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return paginationService.getCurrentPage(paginationId);
                }
            }, function(currentPage, previousPage) {
                if (currentPage != previousPage) {
                    goToPage(currentPage);
                }
            });

            scope.setCurrent = function(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    num = parseInt(num, 10);
                    paginationService.setCurrentPage(paginationId, num);
                }
            };

            /**
             * Custom "track by" function which allows for duplicate "..." entries on long lists,
             * yet fixes the problem of wrongly-highlighted links which happens when using
             * "track by $index" - see https://github.com/michaelbromley/angularUtils/issues/153
             * @param id
             * @param index
             * @returns {string}
             */
            scope.tracker = function(id, index) {
                return id + '_' + index;
            };

            function goToPage(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    var oldPageNumber = scope.pagination.current;

                    scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = num;
                    updateRangeValues();

                    // if a callback has been set, then call it with the page number as the first argument
                    // and the previous page number as a second argument
                    if (scope.onPageChange) {
                        scope.onPageChange({
                            newPageNumber : num,
                            oldPageNumber : oldPageNumber
                        });
                    }
                }
            }

            function generatePagination() {
                if (paginationService.isRegistered(paginationId)) {
                    var page = parseInt(paginationService.getCurrentPage(paginationId)) || 1;
                    scope.pages = generatePagesArray(page, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = page;
                    scope.pagination.last = scope.pages[scope.pages.length - 1];
                    if (scope.pagination.last < scope.pagination.current) {
                        scope.setCurrent(scope.pagination.last);
                    } else {
                        updateRangeValues();
                    }
                }
            }

            /**
             * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
             * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
             */
            function updateRangeValues() {
                if (paginationService.isRegistered(paginationId)) {
                    var currentPage = paginationService.getCurrentPage(paginationId),
                        itemsPerPage = paginationService.getItemsPerPage(paginationId),
                        totalItems = paginationService.getCollectionLength(paginationId);

                    scope.range.lower = (currentPage - 1) * itemsPerPage + 1;
                    scope.range.upper = Math.min(currentPage * itemsPerPage, totalItems);
                    scope.range.total = totalItems;
                }
            }
            function isValidPageNumber(num) {
                return (numberRegex.test(num) && (0 < num && num <= scope.pagination.last));
            }
        }

        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param rowsPerPage
         * @param paginationRange
         * @param collectionLength
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
                var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i ++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange/2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }
    }

    /**
     * This filter slices the collection into pages based on the current page number and number of items per page.
     * @param paginationService
     * @returns {Function}
     */
    function itemsPerPageFilter(paginationService) {

        return function(collection, itemsPerPage, paginationId) {
            if (typeof (paginationId) === 'undefined') {
                paginationId = DEFAULT_ID;
            }
            if (!paginationService.isRegistered(paginationId)) {
                throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
            }
            var end;
            var start;
            if (angular.isObject(collection)) {
                itemsPerPage = parseInt(itemsPerPage) || 9999999999;
                if (paginationService.isAsyncMode(paginationId)) {
                    start = 0;
                } else {
                    start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
                }
                end = start + itemsPerPage;
                paginationService.setItemsPerPage(paginationId, itemsPerPage);

                if (collection instanceof Array) {
                    // the array just needs to be sliced
                    return collection.slice(start, end);
                } else {
                    // in the case of an object, we need to get an array of keys, slice that, then map back to
                    // the original object.
                    var slicedObject = {};
                    angular.forEach(keys(collection).slice(start, end), function(key) {
                        slicedObject[key] = collection[key];
                    });
                    return slicedObject;
                }
            } else {
                return collection;
            }
        };
    }

    /**
     * Shim for the Object.keys() method which does not exist in IE < 9
     * @param obj
     * @returns {Array}
     */
    function keys(obj) {
        if (!Object.keys) {
            var objKeys = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    objKeys.push(i);
                }
            }
            return objKeys;
        } else {
            return Object.keys(obj);
        }
    }

    /**
     * This service allows the various parts of the module to communicate and stay in sync.
     */
    function paginationService() {

        var instances = {};
        var lastRegisteredInstance;

        this.registerInstance = function(instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.deregisterInstance = function(instanceId) {
            delete instances[instanceId];
        };
        
        this.isRegistered = function(instanceId) {
            return (typeof instances[instanceId] !== 'undefined');
        };

        this.getLastInstanceId = function() {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function(instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function(instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function(instanceId) {
            var parser = instances[instanceId].currentPageParser;
            return parser ? parser(instances[instanceId].context) : 1;
        };

        this.setItemsPerPage = function(instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function(instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function(instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function(instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function(instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.setAsyncModeFalse = function(instanceId) {
            instances[instanceId].asyncMode = false;
        };

        this.isAsyncMode = function(instanceId) {
            return instances[instanceId].asyncMode;
        };
    }

    /**
     * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
     */
    function paginationTemplateProvider() {

        var templatePath = 'angularUtils.directives.dirPagination.template';
        var templateString;

        /**
         * Set a templateUrl to be used by all instances of <dir-pagination-controls>
         * @param {String} path
         */
        this.setPath = function(path) {
            templatePath = path;
        };

        /**
         * Set a string of HTML to be used as a template by all instances
         * of <dir-pagination-controls>. If both a path *and* a string have been set,
         * the string takes precedence.
         * @param {String} str
         */
        this.setString = function(str) {
            templateString = str;
        };

        this.$get = function() {
            return {
                getPath: function() {
                    return templatePath;
                },
                getString: function() {
                    return templateString;
                }
            };
        };
    }
})();


/***/ }),

/***/ "./node_modules/angular-utils-pagination/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/angular-utils-pagination/dirPagination.js");
module.exports = 'angularUtils.directives.dirPagination';


/***/ }),

/***/ "./resources/assets/js/angular/controllers/dashboard-controller.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {dashboard.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage) {
  NProgress.start();

  $scope.hide = true;

  $scope.transferEarnings = function () {
    sendRequest.postRequest('user/transfer-earnings').then(function (rsp) {
      if (rsp.status == 200) {
        if (rsp.data.status == true) {
          Notification.success({ message: 'Earnings transferred to wallet', positionX: 'center' });
        } else if (rsp.data.status == 'Insufficient') {
          Notification.error({ message: 'No earnings to transfer', positionX: 'center' });
        }
      }

      sendRequest.getUserDetails('/user/get-user-details', true).then(function (rsp) {
        $scope.userdetails = rsp.userdetails;
      });
      sendRequest.getTotalEarnings('/user/get-total-earnings', true).then(function (rsp) {
        $scope.total_earnings = rsp.total_earnings;
      });
    });
  };

  $scope.sendMessage = function () {
    sendRequest.postRequest('/user/send-message', $scope.message).then(function (rsp) {
      if (rsp.status == 200) {
        NProgress.done();
      }
    });
    $scope.message = null;
  };

  bootstrapPage.dashboard($scope);

  NProgress.done();
}]);

dashboard.controller('WithdrawalController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage) {
  NProgress.start();

  console.log(sendRequest.getData('tr_id'));

  sendRequest.postRequest('user/get-withdrawal-instructions-data', { 'id': sendRequest.getData('tr_id') }).then(function (rsp) {
    if (rsp.status == 200) {
      $scope.amount = rsp.data.amount;
      $scope.total_amount = rsp.data.total_amount;
      $scope.time_joined = rsp.data.time_joined;
      $scope.refcode = rsp.data.refcode;
    }
    sendRequest.storeData('tr_id', null);
  });

  NProgress.done();
}]);

dashboard.controller('ProfileController', ['$scope', '$location', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, $location, Notification, sendRequest, bootstrapPage) {
  NProgress.start();

  bootstrapPage.profile($scope);

  $scope.viewShareInfo = function (id) {
    console.log(id);
    sendRequest.storeData('tr_id', id);
    $location.path('dashboard/withdrawal/success');
  };

  NProgress.done();
}]);

dashboard.controller('SettingsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage) {
  NProgress.start();

  $scope.updateDetails = function () {
    $scope.loading = true;
    sendRequest.postRequest('/user/update-user-details', $scope.userdetails).then(function (rsp) {
      if (rsp.status == 422) {
        Notification.error({ message: 'Invalid data', positionX: 'center' });
      } else {
        Notification.success({ message: 'Updated', positionX: 'center' });
      }
      $scope.loading = null;
    });
  };

  $scope.updatePassword = function () {
    if (!$scope.userdetails.old_password || !$scope.userdetails.password) {
      Notification.error('Old and new password required');
      return;
    }
    sendRequest.postRequest('/user/confirm-user-password', $scope.userdetails.old_password).then(function (rsp) {
      if (rsp.status == 423) {
        Notification.error('Old password mismatch');
      } else if (rsp.status == 200) {
        if (rsp.data.status) {
          $scope.updateDetails();
          $scope.logout();
        }
      }
    });
  };

  bootstrapPage.settings($scope);

  NProgress.done();
}]);

dashboard.controller('GamePlayController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', 'gameActive', function ($scope, Notification, sendRequest, bootstrapPage, gameActive) {
  NProgress.start();

  $scope.game_timer = gameActive.game_timer;
  $scope.total_examinees = gameActive.total_examinees;

  bootstrapPage.gameplay($scope);

  NProgress.done();
}]);

dashboard.controller('DisplayResultsController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage) {
  NProgress.start();

  bootstrapPage.results($scope);

  NProgress.done();
}]);

dashboard.controller('MessageController', ['$scope', 'bootstrapPage', 'sendRequest', function ($scope, bootstrapPage, sendRequest) {
  NProgress.start();
  // var hello = _.dropRightWhile($scope.userdetails.messages, ['read', true]).length;
  // console.log(hello);

  $scope.markAsRead = function (msg) {
    msg.read = true;
    sendRequest.postRequest('/user/mark-message-as-read', msg);
  };
  $scope.deleteMessage = function (msg) {
    sendRequest.postRequest('/user/delete-message', msg).then(function (rsp) {
      var removedMessage = $scope.userdetails.messages.indexOf(msg);
      $scope.userdetails.messages.splice(removedMessage, 1);
    });
  };

  bootstrapPage.messages($scope);

  NProgress.done();
}]);

dashboard.controller('NoticeController', ['$scope', 'bootstrapPage', 'sendRequest', function ($scope, bootstrapPage, sendRequest) {
  NProgress.start();

  $scope.markAsRead = function (notice) {
    notice.read = true;
    sendRequest.postRequest('/user/mark-notice-as-read', notice);
  };
  $scope.deleteNotice = function (notice) {
    sendRequest.postRequest('/user/delete-notice', notice).then(function (rsp) {
      var removedNotice = $scope.userdetails.notices.indexOf(notice);
      $scope.userdetails.notices.splice(removedNotice, 1);
    });
  };

  bootstrapPage.notices($scope);

  NProgress.done();
}]);

dashboard.controller('FundWalletController', ['$scope', '$timeout', 'sendRequest', function ($scope, $timeout, sendRequest) {
  NProgress.start();

  $scope.$on('$viewContentLoaded', function () {
    $timeout(function () {
      $('#fund-account .item').tab();
    }, 500);
  });

  NProgress.done();
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/buyUnits.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-play></game-play>

var url = '\n<section id="buyUnits" class="ui horizontal list">\n\n  <div id="form" class="ui segments animate fade" ng-show="makeDeposit == 1">\n\n    <div id="session-menu" class="ui one item menu">\n      <a class="item" style="background-color: #03A9F4; color:#FFF;">PAY ONLINE</a>\n    </div>\n\n    <div class="ui segment" style="padding-bottom: 30px;">\n      <div class="image content flex-center">\n        <div class="ui form">\n          <div class="field">\n            <input type="number" placeholder="Minimum: \u20A6500 | Maximum: \u20A65,000" ng-model="requested_amount" ng-min="500" ng-max="5000" style="width: 270px;">\n          </div>\n          <div class="actions  flex-center row" >\n            <div ng-class="[\'ui green left button\', {\'disabled\': !requested_amount}]" ng-click="switch(2)">Pay Online</div>\n          </div>\n        </div>\n      </div>\n\n      <div class="ui segments" id="info-images">\n        <div class="ui segment">\n          <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>\n          <p></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="ui segments animate translate-in" ng-if="makeDeposit == 2" id="info-images">\n    <div class="ui segment">\n      <p><b>Amount:</b> {{ requested_amount | currency }}</p>\n      <p><b>Charge:</b> {{ fees | currency }}</p>\n      <p><b>Payment channel:</b> Paystack Limited</p>\n      <p><b>Payment Due:</b> {{ requested_amount + fees | currency }}</p>\n      <p><b>Status:</b> <span style="color:gold">Pending</span></p>\n    </div>\n    <div class="ui segment">\n      <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>\n      <div class="actions  flex-center row" >\n        <pay-with-paystack></pay-with-paystack>\n        <div class="ui red left button" ng-click="switch(1)">Go back</div>\n      </div>\n    </div>\n    <div class="ui secondary segment">\n      <p>\n        <img src="/img/paystack_preview.png" alt="" />\n      </p>\n    </div>\n  </div>\n\n\n</section>\n';

angular.module('buyUnits', []).directive('buyUnits', ['$timeout', 'Notification', 'sendRequest', function ($timeout, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope: {},
    template: url,
    replace: true,
    controller: ['$scope', function ($scope) {

      $scope.amt_per_unit = 1;
      $scope.makeDeposit = 1;

      $scope.switch = function (num) {
        $scope.fees = 0.017 * $scope.requested_amount;

        if ($scope.requested_amount > 2500) {
          $scope.fees = 0.017 * $scope.requested_amount + 100;
        }
        $timeout(function () {
          $scope.makeDeposit = num;
        }, 500);
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/cacheBusting.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('cacheBusting', []).factory('cacheBusting', ['$injector', function ($injector) {
  return {
    'request': function request(config) {
      if (config.url.indexOf('views') !== -1 || config.url.indexOf('img') !== -1) {
        config.url = config.url + '?id=' + window.version_number; // this variable is passed here from env file using @javascript
      }
      return config;
    }
  };
}]).config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('cacheBusting');
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/countdownTimer.js":
/***/ (function(module, exports) {

// This is a highly modified and specific version of the timer. For a more robust and better baseline see the timer setup in Evernote.
// This is a directive that accepts countdown time in seconds and counts down those seconds till now.

angular.module('countdownTimer', []).directive('countdownTimer', ['$timeout', '$compile', function ($timeout, $compile) {

	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			countdownAttr: '=countdown', //what unit? seconds
			onfinish: '&finish'
		},

		template: '<div>' + '<h1 class="time">{{ minutes }}:' + '{{ seconds }}</h1>' + '<ng-transclude></ng-transclude>' + '</div>',

		link: function link(scope, elem, attrs) {

			//Properties
			var countdown = parseInt(scope.countdownAttr, 10);

			function tick() {

				//The default time that the timer will be reset to after count down expires.
				scope.millis = 0;

				if (countdown > 0) {
					scope.millis = countdown * 1000;
					countdown--;
				} else if (countdown <= 0) {
					scope.stop();
					// elem.children('h1').html('Time up!');
					scope.onfinish();
				}

				scope.seconds = twoNumbers(Math.floor(scope.millis / 1000 % 60));
				scope.minutes = Math.floor(scope.millis / (1000 * 60) % 60);
				scope.hours = Math.floor(scope.millis / (1000 * 60 * 60) % 24);
				scope.days = Math.floor(scope.millis / (1000 * 60 * 60) / 24);

				scope.$apply();
			}

			function resetInterval() {
				if (scope.intervalId) {
					clearInterval(scope.intervalId);
					scope.intervalId = null;
				}
			}

			scope.stop = function () {
				scope.stoppedTime = new Date();
				resetInterval();
				scope.$emit('timer-stopped', { intervalId: scope.intervalId, millis: scope.millis });
			};

			//if not used anywhere, make it a regular function so you don't pollute the scope
			function start() {
				resetInterval();
				scope.intervalId = setInterval(tick, 1000); // make the interval fire every 1000ms = 1s
			}

			start(); //start timer automatically

			function twoNumbers(num) {
				if (num < 10) {
					return '0' + num;
				}

				return num;
			}
			//Cleanup
			elem.on('$destroy', function () {
				resetInterval();
			});
		}
	};
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/customFileChange.js":
/***/ (function(module, exports) {

//This directive saves the selected file details on the passed variables AND then aves the base64 version of the image on the model.
// <input type="file" class="form-control" file-change="yourHandler($event, files)" ng-model="details.test3"/>
//
// $scope.yourHandler = function ($event, files) {
//   console.log($event);
//   console.log(files);
//   // console.log(data);
//   console.log($scope.details.test3);
// };

angular.module('customFileChange', []).directive('fileChange', ['$parse', function ($parse) {

  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link($scope, element, attrs, ngModel) {

      // Get the function provided in the file-change attribute.
      // Note the attribute has become an angular expression,
      // which is what we are parsing. The provided handler is
      // wrapped up in an outer function (attrHandler) - we'll
      // call the provided event handler inside the handler()
      // function below.
      var attrHandler = $parse(attrs['fileChange']);

      // This is a wrapper handler which will be attached to the
      // HTML change event.
      var handler = function handler(e) {

        // Execute the provided handler in the directive's scope.
        // The files variable will be available for consumption
        // by the event handler.
        var reader = new FileReader();

        reader.onload = function (et) {
          $scope.$apply(function () {

            // $scope.details.headerImage = et.target.result;
            ngModel.$setViewValue(et.target.result);
            attrHandler($scope, { $event: e, files: e.target.files, data: et.target.result });
          });
        };

        reader.readAsDataURL(e.target.files[0]);
      };
      $scope.$watch(function () {
        return ngModel.$viewValue;
      }, function (value) {
        if (!value) {
          element.val("");
        }
      });
      // Attach the handler to the HTML change event
      element[0].addEventListener('change', handler, false);
    }
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/customFileUpload.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <custom-file-upload dest="'u32/'" mdl="post.postImage" attr="postImage" altText="Post Image Upload"></custom-file-upload>

// The mdl attribute is the model to use for the element and the attr is the name and the id to use. the dest folder is the folder to upload the image to in our storage directory
// We use jQLite to set the id and the name attribute in the link method and we set the model and the destination folder in the controller

// The attr attribute is used to set the name and the id attributes of the generated filefield from the template userdetails
// The altText attr is used to set the alt attribut of the nested image used for displaying the uploaded image

// // NOTE:

// This directive requires the file change directive to be loaded. We use the file change directive to respond to when the user selects an image and then trigger the upload
// This directive also requires the sendRequest directives
// The directive passes the filename of the aved imnage on the server back to the model instance that was passed in


// EXAMPLE templateUrl
// <div>
//   <img ng-if="mdl" ng-src="{{mdl}}" class="img-responsive" style="max-width:25%;">
//   <input type="file" class="form-control" file-change="uploadImage($event, files)" ng-model="mdl">
// </div>

// EXAMPLE LARAVEL CONTROLLER TO HANDLE THE ROUTYE
// public function handleImageUpload(){
//
//     // dump(request()->all());
//
//     $data = request('image');
//     $foldername = request('fn');
//
//     list($type, $data) = explode(';', $data);
//     list(, $data)      = explode(',', $data);
//
//     $data = base64_decode($data);
//     $imageName = time().'.png';
//     $hey = Storage::disk('public')->put($foldername.$imageName, $data);
//
//     return ['filename' => '/storage/'.$foldername.$imageName];
//
// }

var url = '\n<div>\n   <img ng-if="mdl" ng-src="{{mdl}}" class="img-responsive" style="max-width:25%;">\n   <input type="file" class="form-control" file-change="uploadImage($event, files)" ng-model="mdl">\n</div>\n\n';

angular.module('customFileUpload', []).directive('customFileUpload', ['$localStorage', 'sendRequest', function ($localStorage, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      dest: '=',
      mdl: '=',
      attr: '=',
      altText: '='
    },
    template: url,
    // templateUrl:'angular/directive-templates/customFileUploadTemplate.php',
    replace: true,
    link: function link(scope, element, attributes) {

      // console.log(attributes); //literal string "{{some string}}", no interpolation
      // console.log(element); //literal string "{{some string}}", no interpolation
      // console.log(attributes.anotherParam); //literally "another string"
      element.children('input[type="file"]').attr('id', attributes.attr);
      element.children('input[type="file"]').attr('name', attributes.attr);
      element.children('img').attr('alt', attributes.altText);
      // attributes.$observe('myDirective', function(value){
      // 	console.log(value);
      // });
      //
      // attributes.$observe('anotherParam', function(value){
      // 	console.log(value);
      // });
    },
    controller: ['$scope', function ($scope) {
      $scope.uploadImage = function ($event, files) {
        sendRequest.processImageUpload('/api/upload-image', $scope.mdl, $scope.dest, $localStorage.userToken).then(function (data) {
          console.log(data);
          if (undefined == data.filename) {
            console.error('Server Route Error');
          } else {
            $scope.mdl = data.filename;
            $scope.$parent.filename = data.filename;
            // Notification.success({ message: 'Upload Successful', positionX: 'center'});
          }
        });
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/gamePlay.js":
/***/ (function(module, exports) {

// EXAMPLE
// <game-play></game-play>


var url = '\n<section id="game-play">\n\n\n<style>\n  #timer h1{\n    margin: 0 !important;\n  }\n</style>\n<style media="(max-width:767px)">\n  #heading{\n    -webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;\n  }\n  #game-play{\n    margin-top: -140px;\n  }\n</style>\n\n\n\n  <div class="ui compact horizontal segments flex-center" style="background-color: rgba(255,255,255,0.6);" id="heading">\n    <div class="ui segment">\n      <div class="ui compact menu">\n        <a class="item" style="padding: 0 20px !important;">\n          <i class="icon clock outline"></i> <countdown-timer countdown="game_timer" finish="displayResults()" id="timer"></countdown-timer>\n        </a>\n      </div>\n    </div>\n\n    <div class="ui segment">\n      <div class="ui violet label" style="font-size: 13px;">\n        <span style="padding-right: 10px;">Active Gamers</span>\n        <i class="users icon"></i> {{ total_examinees }}\n      </div>\n    </div>\n\n\n    <div class="ui segment">\n      <h1 style="color: white; float: right;">Lifelines</h1>\n    </div>\n\n    <div class="ui segment">\n      <div class="ui compact menu">\n        <a class="item">\n          50/50\n          <div class="floating ui red label">1</div>\n        </a>\n        <a class="item" style="background:#21BA45; color: white;">\n          CHANGE QUESTION\n          <div class="floating ui teal label">1</div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n\n  <div class="ui styled fluid accordion">\n\n    <div ng-repeat="q in user_questions" ng-if="$index < 10">\n\n      <div ng-class="{ \'title\': true, \'active\': $index == 0 }">\n        <i class="dropdown icon"></i> Question {{ $index + 1}}\n      </div>\n\n      <div ng-class="{ \'content\': true, \'active\': $index == 0 }">\n        <div class="ui stacked segment">\n\n          <p id="question">{{ q.question.question }}</p>\n\n          <div class="ui middle aligned selection list">\n\n            <label class="item" for="option1{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.question.option_1">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_1" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_1" id="option1{{$index}}">\n                  <label>{{ q.question.option_1 }}</label>\n                </div>\n              </div>\n            </label>\n\n\n\n            <label class="item" for="option2{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.question.option_2">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_2" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_2" id="option2{{$index}}">\n                  <label>{{ q.question.option_2 }}</label>\n                </div>\n              </div>\n            </label>\n\n\n\n            <label class="item" for="option3{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.question.option_3">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_3" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_3" id="option3{{$index}}">\n                  <label>{{ q.question.option_3 }}</label>\n                </div>\n              </div>\n            </label>\n\n\n\n            <label class="item" for="option4{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.question.option_4">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_4" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_4" id="option4{{$index}}">\n                  <label>{{ q.question.option_4 }}</label>\n                </div>\n              </div>\n            </label>\n\n            <div class="ui buttons">\n              <button class="ui button" ng-click="requestOptions(q)" ng-disabled="lifelines.options">50/50</button>\n              <div class="or"></div>\n              <button class="ui positive button" ng-click="requestExtra(q)" ng-disabled="lifelines.extra">CHANGE QUESTION</button>\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class="text-center" style="display: flex; align-items: center; justify-content: center;">\n      <button ng-click="submitExam()" ng-class="[\'positive\', \'ui\', \'button\', {\'loading\' : loading}]">Finish</button>\n  </div>\n\n</section>\n\n';

angular.module('gamePlay', []).directive('gamePlay', ['$location', '$localStorage', 'Notification', 'sendRequest', function ($location, $localStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {
      $scope.lifelines = $localStorage;
      $scope.lifelines.extra = $scope.lifelines.extra || false;
      $scope.lifelines.options = $scope.lifelines.options || false;

      sendRequest.getUserQuestions('/user/get-user-questions').then(function (rsp) {
        $scope.user_questions = rsp;
      });

      $scope.submitExam = function () {
        $scope.loading = true;
        sendRequest.storeData('prevent', true);

        sendRequest.postRequest('/user/submit-exam', $scope.user_questions).then(function (rsp) {
          delete $localStorage.user_questions;
          delete $localStorage.extra;
          delete $localStorage.options;

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
            $location.path('/dashboard');
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              sendRequest.storeData('user_score', rsp.data.user_score);
              $localStorage.user_score = rsp.data.user_score;
              $location.path('/dashboard');
            }
          }
        });
      };

      $scope.requestExtra = function (q) {
        q.answered_option = 'skipped';
        var removedQuestion = $scope.user_questions.indexOf(q);
        $scope.user_questions.splice(removedQuestion, 1);
        $scope.lifelines.extra = true;

        //Add it back to the array so that it gets sent to the server and marked as skipped.
        //This way we can prevent it from showing up in the displayed results
        $scope.user_questions.push(q);
      };

      $scope.requestOptions = function (q) {
        sendRequest.postRequest('/user/question-remove-options', q.question.id).then(function (rsp) {
          q.question = rsp.data;
        });

        $scope.lifelines.options = true;
      };

      $scope.displayResults = function () {
        sendRequest.storeData('prevent', true);
        sendRequest.postRequest('/user/end-exam', $scope.user_questions).then(function (rsp) {
          delete $localStorage.user_questions;
          delete $localStorage.extra;
          delete $localStorage.options;

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
            $location.path('/dashboard');
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              sendRequest.storeData('user_score', rsp.data.user_score);
              $localStorage.user_score = rsp.data.user_score;
              $location.path('/dashboard/display-results');
            }
          }
        });
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/gameState.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-state><game-state>


var url = '\n<div id="game">\n  <div id="card" class="ui segments" ng-if="game_state == \'loading\' && !transition">\n    <!-- game load -->\n    <div class="ui segment">\n      <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">\n        <span>Countdown to next game</span>\n      </div>\n    </div>\n    <div class="ui segment">\n      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>\n      <button>Next game</button>\n    </div>\n  </div>\n\n  <div id="card" class="ui segments" ng-if="game_state == \'waiting\' && !transition">\n    <!-- game waiting -->\n    <div class="ui segment">\n      <div class="ui horizontal list">\n        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">\n          <span style="padding-right: 10px;">Active Gamers</span>\n          <i class="users icon"></i> {{ total_examinees }}\n        </div>\n      </div>\n    </div>\n    <div class="ui segment">\n      <countdown-timer countdown="game_timer" finish="displayResults()"></countdown-timer>\n    </div>\n\n    <div class="ui segment">\n\n      <div class="ui labeled button" tabindex="-1" ng-if="user_score == null">\n        <div class="ui green button">\n          <i class="fork icon"></i> Score\n        </div>\n        <a class="ui basic green left pointing label">\n          Awaiting results\n        </a>\n      </div>\n\n      <div class="ui labeled button" tabindex="-1" ng-if="user_score < 10">\n        <div class="ui red button">\n          <i class="fork icon"></i> Score\n        </div>\n        <a class="ui basic red left pointing label">\n          {{ user_score }} out of 10\n        </a>\n      </div>\n      <div class="ui labeled button" tabindex="-1" ng-if="user_score > 9">\n        <div class="ui basic blue button">\n          <i class="fork icon"></i> Score\n        </div>\n        <a class="ui basic left pointing blue label">\n        {{ user_score }} out of 10\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div id="card" class="ui segments" ng-if="game_state == \'active\' && !transition">\n    <!-- game active -->\n    <div class="ui segment">\n      <div class="ui label" style="background-color: #21BA45; color: #fff; font-size: 13px;">\n        <span>Game in progress</span>\n      </div>\n    </div>\n    <div class="ui segment">\n      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>\n      <button style="cursor: pointer; background-color: #21BA45;" ng-click="joinGame()" ng-disabled="transition">Join Game</button>\n    </div>\n  </div>\n\n  <div id="card" class="ui segments" ng-if="game_state == \'paused\' && !transition">\n    <!-- game paused -->\n    <div class="ui segment">\n      <div class="ui horizontal list">\n        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">\n          <span style="padding-right: 10px;">Active Gamers</span>\n          <i class="users icon"></i> {{ total_examinees }}\n        </div>\n      </div>\n    </div>\n    <div class="ui segment">\n      <countdown-timer countdown="game_timer" finish="endGameReload()"></countdown-timer>\n      <button style="cursor: pointer" ng-click="resumeGame()">Resume Game</button>\n    </div>\n  </div>\n\n  <div id="card" class="ui segments">\n    <div class="content" style="padding-bottom: 5px;">\n      <div class="ui compact segment">\n        <div class="ui blue image label">\n          My referral link\n          <div class="detail" id="refcode" ng-click="copy()" style="cursor: pointer;" title="Click to copy">https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }}</div>\n          <input type="text" ng-hide="true" id="hiddenref">\n        </div>\n        <div class="a2a_kit a2a_kit_size_32 a2a_default_style">\n          <br />\n          <strong style="margin-right: 15px; color:#555!important;"">INVITE SOMEONE AND GET PAID:</strong>\n          <br />\n          <br />\n          <a class="ui facebook icon button" href="https://www.facebook.com/sharer/sharer.php?u=https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }}" target="_blank">\n            <i class="facebook f icon"></i>\n          </a>\n          <a class="ui twitter button icon" ng-href="https://twitter.com/intent/tweet?text=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later. #fastplay24" title="Tweet" target="_blank">\n            <i class="twitter icon"></i>\n          </a>\n          <a class="ui black button icon" href="mailto:?subject=Join FastPlay24&body=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later." title="Email">\n            <i class="envelope outline icon"></i>\n          </a>\n          <a class="ui green button icon" ng-href="whatsapp://send?text=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later. #fastplay24" title="Whatsapp Share">\n              <i class="whatsapp icon"></i>\n            </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n';

angular.module('gameState', []).directive('gameState', ['$location', '$route', 'Notification', '$localStorage', 'sendRequest', function ($location, $route, Notification, $localStorage, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gameStateTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.transition = true;

      if (sendRequest.getData('user_score') || !angular.isUndefined($localStorage.user_score)) {
        $scope.user_score = $localStorage.user_score;
      }

      //when the game was paused, ends the user's incomplete game and displays the results
      $scope.endGameReload = function () {
        $scope.transition = true;
        alert('The game has ended');
        //Send a request to end the user's game and redirect to results display page
        sendRequest.postRequest('/user/end-exam', $localStorage.user_questions).then(function (rsp) {
          delete $localStorage.user_questions;
          delete $localStorage.extra;
          delete $localStorage.options;

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
            $location.path('/dashboard');
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              sendRequest.storeData('user_score', rsp.data.user_score);
              $localStorage.user_score = rsp.data.user_score;
              $location.path('/dashboard/display-results');
            }
          }
        });
      };

      //when the game was paused, take the user back to the game
      $scope.resumeGame = function () {
        $scope.transition = true;

        sendRequest.postRequest('user/resume-game').then(function () {
          $location.path('/dashboard/game-play');
        });

        //Send a request to resume the game and set the session back to active

        // $scope.displayResults();
      };

      // handle page reload on timer countdown so that the page can get the next thing from the server
      $scope.pageReload = function () {
        // location.reload();
        sendRequest.getGameState().then(function (rsp) {
          $scope.game_state = rsp.game_state;
          $scope.game_timer = rsp.game_timer;
          $scope.total_examinees = rsp.total_examinees;
        });
      };

      // refresh the game state and then redirect to the display results page
      $scope.displayResults = function () {
        NProgress.start();
        $scope.transition = true;

        sendRequest.getGameState('/user/get-game-state').then(function (rsp) {
          $scope.game_state = rsp.game_state;
          $scope.game_timer = rsp.game_timer;

          if (rsp.game_state == 'loading') {
            $location.path('/dashboard/display-results');
          } else {
            // $location.url('/invalid');
            $route.reload();
          }
          NProgress.done();
        });
      };

      $scope.joinGame = function () {
        $scope.transition = true;

        NProgress.start();

        delete $localStorage.user_score;
        delete $localStorage.extra;
        delete $localStorage.options;
        delete $localStorage.user_questions;

        sendRequest.postRequest('/user/join-game').then(function (rsp) {

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              $scope.transition = true;
              $location.path('/dashboard/game-play');
            }
          } else if (rsp.status == 402) {
            console.log(rsp);
            $scope.transition = false;
            Notification.error({ message: rsp.data.err_msg, positionX: 'center' });
          } else if (rsp.status == 403) {
            $scope.transition = true;
            Notification.error({ message: 'Already in a game session.', positionX: 'center' });
            $location.path('/dashboard/game-play');
          }
        });

        NProgress.done();
      };

      sendRequest.getGameState().then(function (rsp) {
        $scope.game_state = rsp.game_state;
        $scope.game_timer = rsp.game_timer;
        $scope.total_examinees = rsp.total_examinees;
        $scope.transition = false;
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/inputCountValidator.js":
/***/ (function(module, exports) {

//This directive is used for instance to validate whether the values entered into a numeric field == 10

var INTEGER_REGEXP = /^-?\d+$/;
angular.module('inputCountValidator', []).directive('count', function () {
  return {
    require: 'ngModel',
    link: function link(scope, elm, attrs, ctrl) {
      ctrl.$validators.count = function (modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (viewValue.length != attrs.count) {
          // it is invalid
          return false;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});

/***/ }),

/***/ "./resources/assets/js/angular/directives/makeWithdrawal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<section id="makeWithdrawal" class="ui right floated horizontal  list">\n  <div class=" ui vertical animated orange compact button" tabindex="-1" ng-click="openModal()">\n    <div class="hidden content"><i class="icon money bill alternate outline"></i></div>\n    <div class="visible content">\n      Cash Out\n    </div>\n  </div>\n\n\n  <div class="ui tiny modal makeWithdrawal transition hidden">\n\n      <div class="ui icon mini message">\n        <i class="inbox icon"></i>\n        <div class="content">\n          <div class="header">\n            TRANSFER EARNINGS FIRST\n          </div>\n          <p> To cashout your earnings, first transfer it to your wallet by clicking the \'transfer earnings\' button. Otherwise proceed.</p>\n        </div>\n      </div>\n\n      <div class="header">\n        Enter an Amount\n      </div>\n      <div class="image content flex-center">\n        <div class="ui form" style="flex-basis:  55%;">\n          <div class="field">\n            <input type="number" placeholder="Min \u20A61,000 | Max: \u20A615, 000" ng-model="requested_amount" ng-max="withdrawal_max" ng-min="1000">\n          </div>\n        </div>\n      </div>\n      <div class="actions  flex-center">\n        <div class="ui black left deny button">\n          Close\n        </div>\n        <div ng-class="{\'ui positive right labeled icon button\': true, \'disabled\': !requested_amount}" prompt-password="requestWithdrawal()">\n          Yep, proceed!\n          <i class="checkmark icon"></i>\n        </div>\n      </div>\n      <div class="image content" style="flex-direction:column;">\n        <div class="ui icon mini message positive">\n          <i class="inbox icon"></i>\n          <div class="content">\n            <div class="header">\n              NOTE:\n            </div>\n            <p> For withdrawals from \u20A61,000 and above, a service fee of \u20A6140 will be charged. </p>\n            <p> While an additional service fee of \u20A670 will be charged for every additional \u20A61,000.</p>\n            <p> You cannot cashout between 5pm on Friday to 7:59am on Monday. Weekend rest is good you know.</p>\n          </div>\n        </div>\n        <div class="ui icon mini message negative">\n          <i class="inbox icon"></i>\n          <div class="content">\n            <div class="header">\n              NOTE:\n            </div>\n            <p> NB: If you do not receive the requested amount in your bank account within 72 hours after the time of request, kindly send an email to <a href="mailto:hello@fastplay24.com">hello@fastplay24.com</a>. </p>\n          </div>\n        </div>\n        <div class="ui icon mini message">\n          <i class="inbox icon"></i>\n          <div class="content">\n            <div class="header">\n              NOTE:\n            </div>\n            <p> Withdrawals below \u20A61000 will be sent to your registered phone number as credit. </p>\n            <p> While withdrawals above \u20A61000 will be sent to your registered bank account.</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n</section>\n';

angular.module('makeWithdrawal', []).directive('makeWithdrawal', ['$timeout', '$location', 'Notification', 'sendRequest', function ($timeout, $location, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.openModal = function () {
        $('.ui.modal.makeWithdrawal').modal({
          centered: false,
          blurring: true,
          onDeny: function onDeny() {
            return true;
          },
          onHide: function onHide() {
            var remove = function remove() {
              // $('.ui.modal.makeWithdrawal').remove();
            };
            setTimeout(remove, 1000);
            // return false;
          },
          onApprove: function onApprove() {
            return true;
          }
        }).modal('show');
      };

      $scope.requestWithdrawal = function () {

        sendRequest.postRequest('/user/request-withdrawal', { 'amt': $scope.requested_amount }).then(function (rsp) {
          if (rsp.status == 422) {
            Notification.error(rsp.data.message);
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              if ($scope.requested_amount < 1000) {
                Notification.primary('Amount requested will be sent as airtime to ' + $scope.$parent.userdetails.phone1);
              } else {
                sendRequest.storeData('withdraw', true);
                $location.path('dashboard/withdrawal/success');
                Notification.primary({ message: 'Amount requested will be sent to account number (' + $scope.$parent.userdetails.acct_no + ' - ' + $scope.$parent.userdetails.bank + ') within 72 hours', positionX: 'center' });
              }

              $scope.$parent.userdetails.available_units = $scope.$parent.userdetails.available_units - $scope.requested_amount;
              $scope.requested_amount = null;
            }
          }
        });
      };

      $timeout(function () {
        //This prevent the dashboard from crashing on page load where the parent scope may not yet be ready
        $scope.withdrawal_max = $scope.$parent.userdetails.available_units < 15000 ? $scope.$parent.userdetails.available_units : 15000;
      }, 1000);

      $scope.$on('$routeChangeStart', function () {
        $timeout(function () {
          if ($('.ui.modal.makeWithdrawal').length > 1) {
            //remove extras
            $('.ui.modal.makeWithdrawal')[1].remove();
          }
        }, 0);
      });
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/miniGameState.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-state><game-state>


var url = '\n\n<div id="mini-game">\n<style>\n\n</style>\n\n  <div class="ui labeled button" tabindex="-1" ng-if="game_state == \'loading\'">\n    <div class="ui red button">\n      <i class="clock icon"></i> <ng-transclude></ng-transclude> Next Game\n    </div>\n    <a class="ui basic red left pointing label">\n      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>\n    </a>\n  </div>\n\n\n  <div class="ui labeled button" tabindex="-1" ng-if="game_state == \'active\'" ng-click="joinGame()">\n    <div class="ui green button">\n     <ng-transclude></ng-transclude>\n      <i class="gamepad icon"></i>Join Game\n    </div>\n    <a class="ui basic left pointing green label" ng-click="joinGame()">\n        <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>\n    </a>\n  </div>\n\n';

angular.module('miniGameState', []).directive('miniGameState', ['$location', 'Notification', '$localStorage', 'sendRequest', function ($location, Notification, $localStorage, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gameStateTemplate.php',
    template: url,
    replace: true,
    transclude: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      if (sendRequest.getData('user_score') || !angular.isUndefined($localStorage.user_score)) {
        $scope.user_score = $localStorage.user_score;
      }

      // handle page reload on timer countdown so that the page can get the next thing from the server
      $scope.pageReload = function () {
        // location.reload();
        sendRequest.getGameState().then(function (rsp) {
          $scope.game_state = rsp.game_state;
          $scope.game_timer = rsp.game_timer;
          $scope.total_examinees = rsp.total_examinees;
        });
      };

      $scope.joinGame = function () {
        NProgress.start();

        delete $localStorage.user_score;
        delete $localStorage.extra;
        delete $localStorage.options;
        delete $localStorage.user_questions;

        sendRequest.postRequest('/user/join-game').then(function (rsp) {

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              $scope.game_state = 'transition';
              $location.path('/dashboard/game-play');
            }
          } else if (rsp.status == 402) {
            Notification.error({ message: 'Insufficient credits to join game.', positionX: 'center' });
          } else if (rsp.status == 403) {
            $scope.game_state = 'transition';
            Notification.error({ message: 'Already in a game session.', positionX: 'center' });
            $location.path('/dashboard/game-play');
          }
        });

        NProgress.done();
      };

      sendRequest.getGameState().then(function (rsp) {
        $scope.game_state = rsp.game_state;
        $scope.game_timer = rsp.game_timer;
        $scope.total_examinees = rsp.total_examinees;
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/payWithPaystack.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<section id="payWithPaystack" class="ui right floated horizontal list">\n  <form action="/dashboard/save-order-and-pay" method="POST">\n   <input type="hidden" name="amount" value="{{ requested_amount * 100 }}">\n   <input type="hidden" name="_token" value="{{ CSRF_TOKEN }}">\n   <button type="submit" ng-class="{\'ui purple right labeled icon button\': true, \'loading disabled\':loading}" id="pay-now" title="Pay now">\n     Pay Now\n     <i class="credit card outline icon"></i>\n   </button>\n  </form>\n\n</section>\n';

angular.module('payWithPaystack', []).directive('payWithPaystack', ['Notification', 'SweetAlert', 'sendRequest', 'CSRF_TOKEN', function (Notification, SweetAlert, sendRequest, CSRF_TOKEN) {
  return {
    restrict: 'E',
    template: url,
    replace: true,
    link: function link(scope, element) {
      var scriptTag = angular.element(document.createElement('script'));
      scriptTag.attr('charset', 'utf-8');
      scriptTag.attr('src', 'https://js.paystack.co/v1/inline.js');
      element.append(scriptTag);
      console.log(element);
    },
    controller: ['$scope', '$location', function ($scope, $location) {

      $scope.CSRF_TOKEN = CSRF_TOKEN;

      $scope.saveOrderThenPayWithPaystack = function () {
        console.log(PAYSTACK_PUBLIC_KEY);

        $scope.loading = true;
        SweetAlert.swal({
          title: "Please wait.....",
          text: "Contacting Paystack payment gateway.",
          showCancelButton: false,
          showConfirmButton: false
        });
        $scope.awardCredits().then(function (rsp) {
          $scope.payWithPaystack();
        }, function (err) {
          SweetAlert.swal("Error", "Network Error. Please refresh the page and try again.", "error");
        });
      };

      $scope.payWithPaystack = function () {
        console.log(PAYSTACK_PUBLIC_KEY);
        var fees = 0.017 * $scope.requested_amount;

        if ($scope.requested_amount > 2500) {
          fees = 0.017 * $scope.requested_amount + 100;
        }

        var orderid = _.random(676764765, 544765545646456);
        var handler = PaystackPop.setup({
          // This assumes you already created a constant named
          // PAYSTACK_PUBLIC_KEY with your public key from the
          // Paystack dashboard. You can as well just paste it
          // instead of creating the constant
          key: PAYSTACK_PUBLIC_KEY,
          email: $scope.$root.userdetails.email,
          first_name: $scope.$root.userdetails.firstname,
          last_name: $scope.$root.userdetails.lastname,
          phone: $scope.$root.userdetails.phone1,
          amount: Math.ceil(($scope.requested_amount + fees) * 100),
          // ref: orderid,
          metadata: {
            cartid: orderid,
            orderid: orderid,
            custom_fields: [// to be displayed on paystack transaction page and paystack email.
            {
              display_name: "Paid on",
              variable_name: "paid_on",
              value: 'Website'
            }, {
              display_name: "Paid via",
              variable_name: "paid_via",
              value: 'Inline Popup'
            }, {
              display_name: "User Details",
              variable_name: "user_details",
              value: $scope.$root.userdetails.firstname + ' ' + $scope.$root.userdetails.lastname + ': ' + $scope.$root.userdetails.phone1
            }, {
              display_name: "User ID",
              variable_name: "user_id",
              value: $scope.$root.userdetails.id
            }, {
              display_name: "Fees",
              variable_name: "fees",
              value: fees * 100
            }]
          },
          callback: function callback(response) {
            SweetAlert.swal({
              title: "Please wait.....",
              text: "We are attempting to acknowledge your payment.",
              icon: 'info',
              showCancelButton: false,
              showConfirmButton: false
            });

            // post to server to verify transaction before giving value
            sendRequest.postRequest('/user/credit-account?reference=' + response.reference).then(function (rsp) {
              if (rsp.status == 200) {
                if (rsp.data.verified) {

                  sendRequest.storeData('activeTransaction', true);

                  SweetAlert.swal('Success!', 'Transaction verified. Units added to account', 'success');

                  $scope.$root.userdetails.available_units += $scope.requested_amount;
                  $scope.requested_amount = null;
                  $location.path('/dashboard/order-successful');
                } else {
                  SweetAlert.swal('Notice!', 'Automatic transction verification failed. Transaction will be manually verified and a sales rep will get in touch with you. Thank you.', 'warning');
                }
              }
            });
          },
          onClose: function onClose() {
            $scope.requested_amount = null;
            SweetAlert.swal('Error!', 'Transaction cancelled by user', 'error');
            // Notification.error('Transaction cancelled by user');
            location.reload();
          }
        });
        handler.openIframe();
        // Notification.warning({message:'Contacting payment gate way. Please wait...', delay:20000, replaceMessage:true});
      };

      $scope.awardCredits = function () {

        var data = {
          'amt': $scope.requested_amount,
          'trans_type': 'wallet funding',
          'status': 'pending'
        };

        return sendRequest.postRequest('/user/send-credit-account-request', data).then(function (rsp) {
          if (rsp.status == 200) {
            if (rsp.data.status) {
              return true;
            }
          }
        });
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/promptPassword.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-play></game-play>
// <button ng-class="['ui purple button', {'loading':verifying}]" confirm-action="verifyUser(u)" ng-hide="u.verified">Verify</button>


angular.module('promptPassword', []).directive('promptPassword', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'A',
    transclude: true,
    template: "<div ng-transclude></div>",
    link: function link(scope, el, attrs) {

      var msg = "Enter your password";
      var clickAction = attrs.promptPassword;
      el.bind('click', function (event) {
        var pwd = window.prompt(msg);
        sendRequest.postRequest('/user/confirm-user-password', pwd).then(function (rsp) {
          if (rsp.status == 423) {
            Notification.error('Incorrect password');
            scope.$parent.logout();
            // console.log(scope.$parent);
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              scope.$eval(clickAction);
            }
          }
        });
      });
    }
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/sendMessage.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<div class="ui small basic green icon buttons right floated">\n  <button class="ui button active" ng-click="openModal()">\n    <ng-transclude></ng-transclude>\n  </button>\n  <div class="ui mini modal sendMessage transition hidden">\n      <div class="header">\n        Send a message\n      </div>\n      <div class="content flex-center">\n        <div class="ui form">\n          <div class="field">\n            <input type="text" placeholder="Message Subject" ng-model="m.subject">\n          </div>\n          <div class="field">\n            <textarea placeholder="Message goes here" ng-model="m.message" ></textarea>\n          </div>\n        </div>\n      </div>\n      <div class="actions  flex-center">\n        <div class="ui black left deny button">\n          Bail\n        </div>\n        <div ng-class="{\'ui positive right labeled icon button\': true, \'disabled\': !m.message || !m.subject}" ng-click="sendMessage()">\n          Send\n          <i class="checkmark icon"></i>\n        </div>\n      </div>\n    </div>\n</div>\n';

angular.module('sendMessage', []).directive('sendMessage', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      msg: '='
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    transclude: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.openModal = function () {
        $('.ui.modal.sendMessage').modal({
          blurring: true
        }).modal('show');
      };

      $scope.sendMessage = function () {
        sendRequest.postRequest('/user/send-message', $scope.m).then(function (rsp) {
          if (rsp.data.status) {
            Notification.primary('Message sent');
            $scope.msg.read = true;
            sendRequest.postRequest('/user/mark-message-as-read', $scope.msg);
            $scope.m = null;
          }
        }, function (err) {
          Notification.error('Sending Failed');
        });
      };
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/userProfile.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {

var url = '\n<section id="u_details">\n  <div class="grid-container">\n    <div class="grid-50">\n      <div class="content">\n        <h2 class="header" style="margin-bottom: 2px;">{{ userdetails.firstname }} {{ userdetails.lastname }}</h2>\n        <div class="content" style="padding-bottom: 5px;">\n          <div class="meta">\n            <span class="date">Joined {{ userdetails.created_at | timeAgo }}</span>\n          </div>\n\n        </div>\n        <div class="content" >\n\n        </div>\n        <div class="content" style="padding-bottom: 5px;">\n\n        </div>\n      </div>\n    </div>\n    <div class="grid-50">\n      <div class="content">\n        <button class="ui compact right floated violet button" ng-click="transferEarnings()">\n          <i class="icon credit card amazon pay"></i>\n          Transfer Earnings\n        </button>\n      </div>\n      <div class="content">\n        <make-withdrawal  style="margin-right: 3%; margin-bottom: 15px;"></make-withdrawal>\n      </div>\n      <div class="content" style="margin-bottom: 15px;">\n        <a class="ui vertical blue compact button right floated" href="/dashboard/fund-wallet" style="margin-right: 3%;">\n          <i class="icon credit card amazon pay"></i>\n          Fund Wallet\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n';

angular.module('userProfile', []).directive('userProfile', [function () {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/userProfileTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', 'Notification', 'sendRequest', function ($scope, Notification, sendRequest) {

      $scope.copy = function () {
        console.log($('#refcode'));
        $('#hiddenref').val($('#refcode').text());
        $('#hiddenref').select();
        document.execCommand('Copy');
        Notification.primary('Referral code copied');
      };

      $scope.transferEarnings = function () {
        sendRequest.postRequest('user/transfer-earnings').then(function (rsp) {
          if (rsp.status == 200) {
            if (rsp.data.status == true) {
              Notification.success({ message: 'Earnings transferred to wallet', positionX: 'center' });
            } else if (rsp.data.status == 'Insufficient') {
              Notification.error({ message: 'No earnings to transfer', positionX: 'center' });
            }
          }

          sendRequest.getUserDetails('/user/get-user-details', true).then(function (rsp) {
            $scope.userdetails = rsp.userdetails;
          });
          sendRequest.getTotalEarnings('/user/get-total-earnings', true).then(function (rsp) {
            $scope.total_earnings = rsp.total_earnings;
          });
        });
      };
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/verifyAccount.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<section id="verifyAccount" class="ui left floated horizontal  list">\n  <style>\n    .tooltip {\n      position: relative;\n      display: inline-block;\n      border-bottom: 1px dotted black;\n    }\n\n    .tooltip .tooltiptext {\n      visibility: hidden;\n      width: 120px;\n      background-color: black;\n      color: #fff;\n      text-align: center;\n      border-radius: 6px;\n      padding: 5px 0;\n\n      /* Position the tooltip */\n      position: absolute;\n      z-index: 1;\n    }\n\n    .tooltip:hover .tooltiptext {\n      visibility: visible;\n    }\n\n  </style>\n  <div class="ui circular green labels " ng-if="userdetails.verified" title="Verified Account" >\n    <a class="ui label tooltip">\n      <i class="check circle icon " style="margin: 0;"></i>\n      <span class="tooltiptext">Account verified</span>\n    </a>\n  </div>\n\n  <div class="ui labeled button" tabindex="-1" ng-click="sendVerificationMai()" ng-if="!userdetails.verified">\n  <!--\n    <div class="ui red label right pointing" >\n      <i class="exclamation triangle icon"></i>\n    </div>\n    <a class="ui basic red label ng-binding tooltip">\n      Unverified\n      <span class="tooltiptext">Account not yet verified.</span>\n    </a>\n    -->\n  </div>\n</section>\n';

angular.module('verifyAccount', []).directive('verifyAccount', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    // scope:{
    //   // dest : '=',
    //   // mdl:'=',
    //   // attr: '=',
    //   // altText: '='
    // },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.sendVerificationMail = function () {

        Notification.warning({ message: 'Attempting to send verification email...', delay: 2000 });

        sendRequest.postRequest('/user/send-verification-mail', $scope.userdetails.email).then(function (rsp) {
          if (rsp.status == 422 || rsp.status == 408) {
            Notification.error({ message: rsp.data.message, delay: 1500, replace: true });
          } else if (rsp.status == 200) {
            if (rsp.data.message) {
              // Notification.success('Verification mail sent to ' + $scope.userdetails.email);
              Notification.success({ message: rsp.data.message, replace: true });
            }
          }
        });
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/viewTopTenPlayers.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var url = '\n<div ng-click="showPlayers()">\n  <ng-transclude></ng-transclude>\n  <div class="ui modal players{{game}} transition hidden">\n      <div class="header">\n        Top Winners\n      </div>\n      <div class="content flex-center">\n        <div class="actions  flex-center">\n          <div class="ui black left deny button">\n            Close\n          </div>\n        </div>\n        <table class="ui red fixed single line striped celled table" style="text-align: center;">\n          <thead>\n            <tr>\n              <th colspan="2">Game ID: {{ top_ten[0].game.id }}</th>\n              <th colspan="3">Number of Players: {{ top_ten[0].game.num_of_players }}</th>\n            </tr>\n          </thead>\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Position</th>\n              <th>Score</th>\n              <th>Finish Time</th>\n              <th>Earning</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr ng-repeat="record in top_ten">\n              <th style="padding:5px 0;">{{ record.user.firstname }}</th>\n              <th style="padding:5px 0;">{{ record.position || \'N/A\' }}</th>\n              <th style="padding:5px 0;">{{ record.score }}</th>\n              <th style="padding:5px 0;">{{ record.ended_at }} </th>\n              <th style="padding:5px 0;">{{ record.earning }}</th>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class="actions  flex-center">\n        <div class="ui black left deny button">\n          Close\n        </div>\n      </div>\n    </div>\n</div>\n';

angular.module('viewTopTenPlayers', []).directive('viewTopTenPlayers', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'A',
    scope: {
      game: '='
    },
    template: url,
    replace: true,
    transclude: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.showPlayers = function () {
        $('.ui.modal.players' + $scope.game).modal({
          allowMultiple: false,
          centered: false,
          blurring: true,
          onDeny: function onDeny() {
            return true;
          },
          onHide: function onHide() {
            var remove = function remove() {};
            setTimeout(remove, 1000);
          },
          onApprove: function onApprove() {
            return true;
          }
        }).modal('show');
        sendRequest.request('user/get-exam-top-ten/' + $scope.game).then(function (data) {
          $scope.top_ten = data.top_ten;
        });
      };
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/filters/parseHTML.js":
/***/ (function(module, exports) {


// SAMPLE USAGE
// <td ng-bind-html="post.summary | trusted | truncate:200"></td>


angular.module('parseHTML', []).filter('trusted', ['$sce', function ($sce) {
	return function (stringToParse) {
		return $sce.trustAsHtml(stringToParse);
	};
}]);

// home.filter('trusted', ['$sce', function($sce) {
//     var div = document.createElement('div');
//     return function(text) {
//         div.innerHTML = text;
//         return $sce.trustAsHtml(div.textContent);
//     };
// }]);

/***/ }),

/***/ "./resources/assets/js/angular/filters/rangeFilter.js":
/***/ (function(module, exports) {

//n in _.range(1,16)
//n in [] | range:20

var app = angular.module('range', []);

app.filter('range', function () {
  return function (input, total) {
    console.log(total);
    total = parseInt(input);
    for (var i = 0; i < total; i++) {
      input.push(i);
    }return input;
  };
});

/***/ }),

/***/ "./resources/assets/js/angular/routes/dashboard-routes.js":
/***/ (function(module, exports) {

dashboard.config(['$routeProvider', '$locationProvider', '$compileProvider', '$localStorageProvider', 'NotificationProvider', 'timeAgoSettings', '$provide', function ($routeProvider, $locationProvider, $compileProvider, $localStorageProvider, NotificationProvider, timeAgoSettings, $provide) {

  $routeProvider.when('/dashboard', {
    templateUrl: 'angular/views/dashboard/index.html',
    controller: 'DashboardController'
  }).when('/register/success', {
    templateUrl: 'angular/views/dashboard/register-success.html',
    controller: 'DashboardController'
  }).when('/dashboard/withdrawal/success', {
    templateUrl: 'angular/views/dashboard/withdrawal-instructions.html',
    controller: 'WithdrawalController'
  }).when('/dashboard/profile', {
    templateUrl: 'angular/views/dashboard/profile.html',
    controller: 'ProfileController'
  }).when('/dashboard/messages', {
    templateUrl: 'angular/views/dashboard/messages.html',
    controller: 'MessageController'
  }).when('/dashboard/notices', {
    templateUrl: 'angular/views/dashboard/notices.html',
    controller: 'NoticeController'
  }).when('/dashboard/settings', {
    templateUrl: 'angular/views/dashboard/settings.html',
    controller: 'SettingsController'
  }).when('/dashboard/game-play', {
    templateUrl: 'angular/views/dashboard/game-play.html',
    controller: 'GamePlayController',
    resolve: {
      gameActive: ['$location', 'sendRequest', function ($location, sendRequest) {
        return sendRequest.getGameState().then(function (rsp) {
          if (rsp.game_state != 'active') {
            $location.path('/dashboard');
          } else {
            return rsp;
          }
        });
      }]
    }
  }).when('/dashboard/display-results', {
    templateUrl: 'angular/views/dashboard/display-results.html',
    controller: 'DisplayResultsController',
    resolve: {
      gameActive: ['$location', 'sendRequest', function ($location, sendRequest) {
        sendRequest.getGameState().then(function (rsp) {
          if (rsp.game_state != 'loading') {
            $location.path('/dashboard');
          }
        });
      }]
    }
  }).when('/dashboard/order-successful', {
    templateUrl: 'angular/views/dashboard/order-successful.html',
    //  controller: 'DisplayResultsController',
    resolve: {
      activeTransaction: ['$location', 'sendRequest', function ($location, sendRequest) {
        // if (!sendRequest.getData('activeTransaction')) {
        //   $location.path('/dashboard/profile');
        // }
      }]
    }
  }).when('/dashboard/fund-wallet', {
    templateUrl: 'angular/views/dashboard/fund-wallet.html',
    controller: 'FundWalletController'
  }).otherwise({
    redirectTo: '/dashboard'
  });

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
  $localStorageProvider.setKeyPrefix('game-');
  timeAgoSettings.allowFuture = true;
  NotificationProvider.setOptions({
    delay: 5000,
    replaceMessage: true,
    //  startTop: 20,
    //  startRight: 10,
    //  verticalSpacing: 20,
    //  horizontalSpacing: 20,
    positionX: 'center'
    //  positionY: 'bottom'
  });

  $provide.decorator('$locale', ['$delegate', function ($delegate) {
    $delegate.NUMBER_FORMATS = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PATTERNS: [{ // Decimal Pattern
        minInt: 1,
        minFrac: 0,
        maxFrac: 3,
        posPre: '',
        posSuf: '',
        negPre: '-',
        negSuf: '',
        gSize: 3,
        lgSize: 3
      }, { //Currency Pattern
        minInt: 1,
        minFrac: 0,
        maxFrac: 2,
        posPre: '\xA4',
        posSuf: '',
        negPre: '(\xA4',
        negSuf: ')',
        gSize: 3,
        lgSize: 3
      }],
      CURRENCY_SYM: '₦'
    };
    return $delegate;
  }]);

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|sms|tel|whatsapp):/);
}]);

/***/ }),

/***/ "./resources/assets/js/angular/services/services.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {angular.module('sendRequest', []).factory('sendRequest', ['$http', '$q', '$localStorage', function ($http, $q, $localStorage) {

  var data = {};
  return {
    storeData: function storeData(key, value) {
      data[key] = value;
    },

    getData: function getData(key) {
      return data[key];
    },

    getUserDetails: function getUserDetails(url) {
      var flushStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var deferred = $q.defer();

      if (flushStore || !this.getData('userdetails')) {
        var _this = this;
        return this.postRequest(url).then(function (rsp) {
          _this.storeData('userdetails', rsp.data);
          return _this.getData('userdetails');
        });
      }
      deferred.resolve(this.getData('userdetails'));
      return deferred.promise;
    },

    getTotalEarnings: function getTotalEarnings(url) {
      var flushStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var deferred = $q.defer();

      if (flushStore || !this.getData('total_earnings')) {
        var _this = this;
        return this.postRequest(url).then(function (rsp) {
          _this.storeData('total_earnings', rsp.data);
          return _this.getData('total_earnings');
        });
      }
      deferred.resolve(this.getData('total_earnings'));
      return deferred.promise;
    },

    getBanks: function getBanks(url) {
      var deferred = $q.defer();

      if (!this.getData('banks_list')) {
        var _this = this;
        return this.postRequest(url).then(function (rsp) {
          _this.storeData('banks_list', rsp.data);
          return _this.getData('banks_list');
        });
      }
      deferred.resolve(this.getData('banks_list'));
      return deferred.promise;
    },

    getGameState: function getGameState() {
      return this.postRequest('/user/get-game-state').then(function (rsp) {
        return rsp.data;
      });
    },

    getUserQuestions: function getUserQuestions(url) {
      var flushStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // using local storage so so that if he refreshes his browser during a game session, it will preserve his game state
      var deferred = $q.defer();

      if (flushStore) {
        delete $localStorage.user_questions;
        delete $localStorage.extra;
        delete $localStorage.options;
      }

      if (!$localStorage.user_questions) {
        var _this = this;
        return this.postRequest(url).then(function (rsp) {
          $localStorage.user_questions = rsp.data.user_questions;
          return $localStorage.user_questions;
        });
      }
      deferred.resolve($localStorage.user_questions);
      return deferred.promise;
    },

    getCountriesStates: function getCountriesStates() {
      var deferred = $q.defer();

      if (!this.getData('countries_states')) {
        var _this = this;
        return this.postRequest('/api/get-countries-state').then(function (rsp) {
          _this.storeData('countries_states', rsp.data);
          return _this.getData('countries_states');
        });
      }
      deferred.resolve(this.getData('countries_states'));
      return deferred.promise;
    },

    processImageUpload: function processImageUpload(url, data, foldername) {
      //Handle image changes
      NProgress.start();

      // send the image to the server as base64 data
      return $http.post(url, { image: data, fn: foldername }).then(function (response) {
        NProgress.done();
        return response.data;
      }, function (err) {
        console.log(err.statusText);
      });
    },

    postRequest: function postRequest(url, data) {

      return $http.post(url, { details: data }).then(function (response) {
        return response;
      }, function (err) {
        if (err.status == 419 || err.status == 401) {
          location.href = '/login';
        } else if (err.status == 403) {
          location.href = '/suspended';
        }
        console.log(err);
        return err;
      });
    },

    putRequest: function putRequest(url, data) {

      return $http.put(url, { details: data }).then(function (response) {
        return response;
      }, function (err) {
        if (err.status == 419 || err.status == 401) {
          location.href = '/login';
        } else if (err.status == 403) {
          location.href = '/suspended';
        }
        console.log(err);
        return err;
      });
    },

    request: function request(url) {
      var data = [];
      return $http.get(url).then(function (response) {
        return response.data;
      }, function (err) {
        if (err.status == 419 || err.status == 401) {
          location.href = '/login';
        }
        console.log(err.statusText);
      });
    }
  };
}]);

angular.module('bootstrapPage', []).factory('bootstrapPage', ['$timeout', '$location', 'Notification', 'sendRequest', function ($timeout, $location, Notification, sendRequest) {
  return {
    dashboard: function dashboard(scope) {

      sendRequest.postRequest('/user/get-dashboard-page-details');
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('#notice.ui.modal').modal({
            centered: false,
            blurring: true,
            onDeny: function onDeny() {
              return true;
            },
            onHide: function onHide() {
              var remove = function remove() {
                $('#notice.ui.modal').remove();
              };
              setTimeout(remove, 1000);
              // return false;
            },
            onApprove: function onApprove() {
              return true;
            }
          }).modal('show');

          Echo.channel('exam_member_count').listen('ExamJoined', function (e) {
            scope.total_examinees = e.total_examinees;
          });
        }, 1000);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {
          Echo.leave('exam_member_count');
        }, 0);
      });
    },
    profile: function profile(scope) {
      sendRequest.postRequest('/user/get-profile-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.user_transactions = rsp.data.page_details.transactions;
          scope.user_earnings = rsp.data.page_details.earnings;
          scope.user_games = rsp.data.page_details.games;
          scope.referrals = rsp.data.page_details.referrals;
        }
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('#profile-menu .item').tab();
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    },
    settings: function settings(scope) {
      sendRequest.getBanks('/api/get-banks-list').then(function (rsp) {
        scope.banks = rsp.banks;
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('#edit .item').tab();
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    },
    gameplay: function gameplay(scope) {
      sendRequest.getUserDetails('/user/get-user-details', true).then(function (rsp) {
        scope.userdetails = rsp.userdetails;
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.ui.accordion').accordion();

          Echo.channel('exam_member_count').listen('ExamJoined', function (e) {
            scope.total_examinees = e.total_examinees;
          });
        }, 500);
      });
      scope.$on('$locationChangeStart', function (e) {
        if (!sendRequest.getData('prevent')) {
          e.preventDefault();
        }
        $timeout(function () {
          sendRequest.postRequest('/user/pause-game');
        }, 0);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {
          Echo.leave('exam_member_count');
        }, 0);
      });
    },
    results: function results(scope) {
      sendRequest.postRequest('/user/get-exam-results').then(function (rsp) {
        if (rsp.status == 200) {
          if (rsp.data.results == false) {
            $location.path('/dashboard');
            Notification.error({ message: 'Error fetching results.', positionX: 'center' });
          }
          if (rsp.data != 'invalid') {
            scope.results = rsp.data.results;
            scope.user_questions = rsp.data.user_questions.user_questions;
            scope.user_earning = _.parseInt(rsp.data.user_earning);
            scope.max_winners = _.parseInt(rsp.data.max_winners);
            scope.total_players = _.parseInt(rsp.data.total_players);
            scope.total_prize_money = _.parseInt(rsp.data.total_prize_money);
          } else {
            $location.path('/dashboard');
            Notification.error({ message: 'Insufficient users for game session. Units reversed', positionX: 'center' });
          }
        }
      });

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    },
    messages: function messages(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.special.cards .image').dimmer({
            on: 'hover'
          });
        }, 500);
      });
    },
    notices: function notices(scope) {
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    }
  };
}]);

angular.module('bootstrapAdminPage', []).factory('bootstrapAdminPage', ['$timeout', '$location', 'Notification', 'sendRequest', function ($timeout, $location, Notification, sendRequest) {
  return {
    dashboard: function dashboard(scope) {

      sendRequest.postRequest(route_root + '/api/get-dashboard-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.details = rsp.data.details;
        }
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.shape').shape();
          $('#profile-menu .item').tab();
          NProgress.done();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    questions: function questions(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.shape').shape();
          NProgress.done();
        }, 500);
      });
    },

    admins: function admins(scope) {

      sendRequest.postRequest(route_root + '/api/get-admins-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.admins = rsp.data.admins;
          NProgress.done();
        }
      }, function (err) {
        Notification.error('Error retrieving admins from server');
      });

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    users: function users(scope) {
      sendRequest.getBanks('/api/get-banks-list').then(function (rsp) {
        scope.banks = rsp.banks;
      });
      sendRequest.postRequest(route_root + '/api/get-unverified-users-count').then(function (rsp) {
        scope.unverified_users = rsp.data.unverified_users;
      });

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    games: function games(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          // $('.ui.sticky')
          // .sticky({
          //   context: '#content-context'
          // });
          NProgress.done();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    transactions: function transactions(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.ui.sticky').sticky({
            context: '#content-context'
          });
        }, 500);
      });
      scope.$on('$destroy', function () {
        // $timeout(function () {
        // }, 0);
      });
    },

    messages: function messages(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    settings: function settings(scope) {
      sendRequest.getBanks('/api/get-banks-list').then(function (rsp) {
        scope.banks = rsp.banks;
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('#edit .item').tab();
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    }
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/dashboard-app.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/angular-utils-pagination/index.js");
__webpack_require__("./node_modules/angular-sweetalert/SweetAlert.js");

dashboard = angular.module('dashboard', ['ngRoute', 'ngAnimate', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest', 'parseHTML', 'customFileChange', 'customFileUpload', 'inputCountValidator', 'countdownTimer', 'miniGameState', 'gameState', 'gamePlay', 'userProfile', 'range', 'buyUnits', 'sendMessage', 'makeWithdrawal', 'bootstrapPage', 'verifyAccount', 'payWithPaystack', 'promptPassword', 'cacheBusting', 'angularUtils.directives.dirPagination', 'viewTopTenPlayers', 'oitozero.ngSweetAlert']);

dashboard.run(['$rootScope', '$window', 'Notification', 'sendRequest', function ($rootScope, $window, Notification, sendRequest) {

  $rootScope._ = _;
  $rootScope.logout = function () {
    delete localStorage['game-user_score'];
    sendRequest.postRequest('/logout').then(function (response) {
      if (response.status == 200) {
        Notification.success({ message: 'Logout successful', positionX: 'center' });
        $window.location.href = '/login';
      } else {
        Notification.error({ message: 'Logout failed! Reload page.', positionX: 'center' });
      }
    });
  };

  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    sendRequest.getTotalEarnings('/user/get-total-earnings').then(function (rsp) {
      $rootScope.total_earnings = rsp.total_earnings;
    });
    sendRequest.getUserDetails('/user/get-user-details').then(function (rsp) {
      $rootScope.userdetails = rsp.userdetails;
    });
  });

  // $rootScope.markAsRead = function(msg) {
  //  sendRequest.postRequest('api/user/mark-as-read', msg);
  // };
}]);

__webpack_require__("./resources/assets/js/angular/filters/parseHTML.js");
__webpack_require__("./resources/assets/js/angular/services/services.js");
//
__webpack_require__("./resources/assets/js/angular/filters/rangeFilter.js");
//
__webpack_require__("./resources/assets/js/angular/directives/customFileChange.js");
__webpack_require__("./resources/assets/js/angular/directives/customFileUpload.js");
__webpack_require__("./resources/assets/js/angular/directives/inputCountValidator.js");
__webpack_require__("./resources/assets/js/angular/directives/countdownTimer.js");
__webpack_require__("./resources/assets/js/angular/directives/miniGameState.js");
__webpack_require__("./resources/assets/js/angular/directives/gameState.js");
__webpack_require__("./resources/assets/js/angular/directives/gamePlay.js");
__webpack_require__("./resources/assets/js/angular/directives/buyUnits.js");
__webpack_require__("./resources/assets/js/angular/directives/sendMessage.js");
__webpack_require__("./resources/assets/js/angular/directives/makeWithdrawal.js");
__webpack_require__("./resources/assets/js/angular/directives/userProfile.js");
__webpack_require__("./resources/assets/js/angular/directives/verifyAccount.js");
__webpack_require__("./resources/assets/js/angular/directives/payWithPaystack.js");
__webpack_require__("./resources/assets/js/angular/directives/promptPassword.js");
__webpack_require__("./resources/assets/js/angular/directives/cacheBusting.js");
__webpack_require__("./resources/assets/js/angular/directives/viewTopTenPlayers.js");
//
//
// require('./angular/directives/ngRepeatFinishedCallback');
//


__webpack_require__("./resources/assets/js/angular/routes/dashboard-routes.js");

__webpack_require__("./resources/assets/js/angular/controllers/dashboard-controller.js");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/dashboard-app.js");


/***/ })

},[3]);
//# sourceMappingURL=dashboard-app.js.map