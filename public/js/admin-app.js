webpackJsonp([1],{

/***/ "./node_modules/angularjs-datepicker/dist/angular-datepicker.min.js":
/***/ (function(module, exports) {

/*!
 * Angular Datepicker v2.1.23
 *
 * Released by 720kb.net under the MIT license
 * www.opensource.org/licenses/MIT
 *
 * 2017-06-28
 */


!function(e,a){"use strict";var t=function(){if(a.userAgent&&(a.userAgent.match(/Android/i)||a.userAgent.match(/webOS/i)||a.userAgent.match(/iPhone/i)||a.userAgent.match(/iPad/i)||a.userAgent.match(/iPod/i)||a.userAgent.match(/BlackBerry/i)||a.userAgent.match(/Windows Phone/i)))return!0}(),n=function(e,a,n){return n&&(t=!1),t?['<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">','<select ng-model="month" title="{{ dateMonthTitle }}" ng-change="selectedMonthHandle(month)">','<option ng-repeat="item in months" ng-selected="item === month" ng-disabled=\'!isSelectableMaxDate(item + " " + day + ", " + year) || !isSelectableMinDate(item + " " + day + ", " + year)\' ng-value="$index + 1" value="$index + 1">',"{{ item }}","</option>","</select>","</div>","</div>",'<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">','<select ng-model="mobileYear" title="{{ dateYearTitle }}" ng-change="setNewYear(mobileYear)">','<option ng-repeat="item in paginationYears track by $index" ng-selected="year === item" ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)" ng-value="item" value="item">',"{{ item }}","</option>","</select>","</div>","</div>"]:['<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-left">','<a class="_720kb-datepicker-calendar-month-button" href="javascript:void(0)" ng-class="{\'_720kb-datepicker-item-hidden\': !willPrevMonthBeSelectable()}" ng-click="prevMonth()" title="{{ buttonPrevTitle }}">',e,"</a>","</div>",'<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-calendar-month">',"{{month}}&nbsp;",'<a href="javascript:void(0)" ng-click="paginateYears(year); showYearsPagination = !showYearsPagination;">',"<span>","{{year}}","<i ng-class=\"{'_720kb-datepicker-calendar-header-closed-pagination': !showYearsPagination, '_720kb-datepicker-calendar-header-opened-pagination': showYearsPagination}\"></i>","</span>","</a>","</div>",'<div class="_720kb-datepicker-calendar-header-right">','<a class="_720kb-datepicker-calendar-month-button" ng-class="{\'_720kb-datepicker-item-hidden\': !willNextMonthBeSelectable()}" href="javascript:void(0)" ng-click="nextMonth()" title="{{ buttonNextTitle }}">',a,"</a>","</div>","</div>"]},i=function(e,a){return['<div class="_720kb-datepicker-calendar-header" ng-show="showYearsPagination">','<div class="_720kb-datepicker-calendar-years-pagination">','<a ng-class="{\'_720kb-datepicker-active\': y === year, \'_720kb-datepicker-disabled\': !isSelectableMaxYear(y) || !isSelectableMinYear(y)}" href="javascript:void(0)" ng-click="setNewYear(y)" ng-repeat="y in paginationYears track by $index">',"{{y}}","</a>","</div>",'<div class="_720kb-datepicker-calendar-years-pagination-pages">','<a href="javascript:void(0)" ng-click="paginateYears(paginationYears[0])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsPrevDisabled}">',e,"</a>",'<a href="javascript:void(0)" ng-click="paginateYears(paginationYears[paginationYears.length -1 ])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsNextDisabled}">',a,"</a>","</div>","</div>"]},r=function(e,a,t){var r=['<div class="_720kb-datepicker-calendar {{datepickerClass}} {{datepickerID}}" ng-class="{\'_720kb-datepicker-forced-to-open\': checkVisibility()}" ng-blur="hideCalendar()">',"</div>"],d=n(e,a,t),l=i(e,a),c=['<div class="_720kb-datepicker-calendar-days-header">','<div ng-repeat="d in daysInString">',"{{d}}","</div>","</div>"],o=['<div class="_720kb-datepicker-calendar-body">','<a href="javascript:void(0)" ng-repeat="px in prevMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">',"{{px}}","</a>","<a href=\"javascript:void(0)\" ng-repeat=\"item in days\" ng-click=\"setDatepickerDay(item)\" ng-class=\"{'_720kb-datepicker-active': selectedDay === item && selectedMonth === monthNumber && selectedYear === year, '_720kb-datepicker-disabled': !isSelectableMinDate(year + '/' + monthNumber + '/' + item ) || !isSelectableMaxDate(year + '/' + monthNumber + '/' + item) || !isSelectableDate(monthNumber, year, item) || !isSelectableDay(monthNumber, year, item),'_720kb-datepicker-today': item === today.getDate() && monthNumber === (today.getMonth() + 1) && year === today.getFullYear() && !selectedDay}\" class=\"_720kb-datepicker-calendar-day\">","{{item}}","</a>",'<a href="javascript:void(0)" ng-repeat="nx in nextMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">',"{{nx}}","</a>","</div>"],s=function(e){r.splice(r.length-1,0,e)};return d.forEach(s),l.forEach(s),c.forEach(s),o.forEach(s),r.join("")},d=function(a,n,i,d,l,c){return{restrict:"AEC",scope:{dateSet:"@",dateMinLimit:"@",dateMaxLimit:"@",dateMonthTitle:"@",dateYearTitle:"@",buttonNextTitle:"@",buttonPrevTitle:"@",dateDisabledDates:"@",dateEnabledDates:"@",dateDisabledWeekdays:"@",dateSetHidden:"@",dateTyper:"@",dateWeekStartDay:"@",datepickerAppendTo:"@",datepickerToggle:"@",datepickerClass:"@",datepickerShow:"@"},link:function(o,s,m){var u,b,h,y=m.selector,p=e.element(y?s[0].querySelector("."+y):s[0].children[0]),g=m.buttonPrev||'<b class="_720kb-datepicker-default-button">&lang;</b>',M=m.buttonNext||'<b class="_720kb-datepicker-default-button">&rang;</b>',k=m.dateFormat,f=o.$eval(o.dateDisabledDates),D=o.$eval(o.dateEnabledDates),v=o.$eval(o.dateDisabledWeekdays),N=new Date,S=!1,w=!1,x=void 0!==m.datepickerMobile&&"false"!==m.datepickerMobile,Y=i.DATETIME_FORMATS,T=r(g,M,x),_=function(){S||w||!u||o.hideCalendar()},L=function(e,a){var t,n,i,r,d,l=new Date(a,e,0).getDate(),c=new Date(a+"/"+e+"/1").getDay(),s=new Date(a+"/"+e+"/"+l).getDay(),m=[],u=[];for(o.days=[],o.dateWeekStartDay=o.validateWeekDay(o.dateWeekStartDay),d=(o.dateWeekStartDay+6)%7,t=1;t<=l;t+=1)o.days.push(t);if(c===o.dateWeekStartDay)o.prevMonthDays=[];else{for(i=c-o.dateWeekStartDay,c<o.dateWeekStartDay&&(i+=7),r=1===Number(e)?12:e-1,t=1;t<=new Date(a,r,0).getDate();t+=1)m.push(t);o.prevMonthDays=m.slice(-i)}if(s===d)o.nextMonthDays=[];else{for(n=6-s+o.dateWeekStartDay,s<o.dateWeekStartDay&&(n-=7),t=1;t<=n;t+=1)u.push(t);o.nextMonthDays=u}},$=function(){o.month=d("date")(new Date(o.dateMinLimit),"MMMM"),o.monthNumber=Number(d("date")(new Date(o.dateMinLimit),"MM")),o.day=Number(d("date")(new Date(o.dateMinLimit),"dd")),o.year=Number(d("date")(new Date(o.dateMinLimit),"yyyy")),L(o.monthNumber,o.year)},A=function(){o.month=d("date")(new Date(o.dateMaxLimit),"MMMM"),o.monthNumber=Number(d("date")(new Date(o.dateMaxLimit),"MM")),o.day=Number(d("date")(new Date(o.dateMaxLimit),"dd")),o.year=Number(d("date")(new Date(o.dateMaxLimit),"yyyy")),L(o.monthNumber,o.year)},P=function(){o.year=Number(o.year)-1},W=function(){o.year=Number(o.year)+1},E=function(e,a){var t,n,i,r,d,l,c,o,s,m=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|MMMM|MMM|MM|M|dd?d?|yy?yy?y?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(l=0;l<Y.MONTH.length;l+=1){if(o=Y.MONTH[l],s=Y.SHORTMONTH[l],-1!==e.indexOf(o)){e=e.replace(o,l+1);break}if(-1!==e.indexOf(s)){e=e.replace(s,l+1);break}}for(n=e.split(/\D/).filter(function(e){return e.length>0}),t=a.match(m).filter(function(e){return null!==e.match(/^[a-zA-Z]+$/i)}),l=0;l<t.length;l+=1)switch(c=t[l],!0){case-1!==c.indexOf("d"):r=n[l-(t.length-n.length)];break;case-1!==c.indexOf("M"):i=n[l-(t.length-n.length)];break;case-1!==c.indexOf("y"):d=n[l-(t.length-n.length)]}return new Date(d+"/"+i+"/"+r)},H=function(){if(!o.isSelectableMinDate(o.year+"/"+o.monthNumber+"/"+o.day)||!o.isSelectableMaxDate(o.year+"/"+o.monthNumber+"/"+o.day))return!1;var e=new Date(o.year+"/"+o.monthNumber+"/"+o.day);m.dateFormat?p.val(d("date")(e,k)):p.val(e),p.triggerHandler("input"),p.triggerHandler("change")},O={add:function(e,a){var t;e.className.indexOf(a)>-1||((t=e.className.split(" ")).push(a),e.className=t.join(" "))},remove:function(e,a){var t,n;if(-1!==e.className.indexOf(a)){for(n=e.className.split(" "),t=0;t<n.length;t+=1)if(n[t]===a){n=n.slice(0,t).concat(n.slice(t+1));break}e.className=n.join(" ")}}},F=function(){b=a.document.getElementsByClassName("_720kb-datepicker-calendar"),e.forEach(b,function(e,a){b[a].classList?b[a].classList.remove("_720kb-datepicker-open"):O.remove(b[a],"_720kb-datepicker-open")}),u.classList?(u.classList.add("_720kb-datepicker-open"),N=k?E(p[0].value.toString(),k):new Date(p[0].value.toString()),o.selectedMonth=Number(d("date")(N,"MM")),o.selectedDay=Number(d("date")(N,"dd")),o.selectedYear=Number(d("date")(N,"yyyy"))):O.add(u,"_720kb-datepicker-open"),o.today=new Date,c(function(){o.selectedDay?(o.year=o.selectedYear,o.monthNumber=o.selectedMonth):(o.year=o.today.getFullYear(),o.monthNumber=o.today.getMonth()+1),o.month=d("date")(new Date(o.year,o.monthNumber-1),"MMMM"),L(o.monthNumber,o.year)},0)},j=function(){return!!o.datepickerShow&&(N=k?E(p[0].value.toString(),k):new Date(p[0].value.toString()),o.selectedMonth=Number(d("date")(N,"MM")),o.selectedDay=Number(d("date")(N,"dd")),o.selectedYear=Number(d("date")(N,"yyyy")),o.$eval(o.datepickerShow))},I=o.$watch("dateSet",function(e){e&&!isNaN(Date.parse(e))&&(N=new Date(e),o.month=d("date")(N,"MMMM"),o.monthNumber=Number(d("date")(N,"MM")),o.day=Number(d("date")(N,"dd")),o.year=Number(d("date")(N,"yyyy")),L(o.monthNumber,o.year),"true"!==o.dateSetHidden&&H())}),C=o.$watch("dateMinLimit",function(e){e&&$()}),B=o.$watch("dateMaxLimit",function(e){e&&A()}),G=o.$watch("dateFormat",function(e){e&&H()}),z=o.$watch("dateDisabledDates",function(e){e&&(f=o.$eval(e),o.isSelectableDate(o.monthNumber,o.year,o.day)||(p.val(""),p.triggerHandler("input"),p.triggerHandler("change")))}),R=o.$watch("dateEnabledDates",function(e){e&&(D=o.$eval(e),o.isSelectableDate(o.monthNumber,o.year,o.day)||(p.val(""),p.triggerHandler("input"),p.triggerHandler("change")))});for(o.nextMonth=function(){12===o.monthNumber?(o.monthNumber=1,W()):o.monthNumber+=1,o.dateMaxLimit&&(o.isSelectableMaxDate(o.year+"/"+o.monthNumber+"/"+o.days[0])||A()),o.month=d("date")(new Date(o.year,o.monthNumber-1),"MMMM"),L(o.monthNumber,o.year),o.day=void 0},o.willPrevMonthBeSelectable=function(){var e=o.monthNumber,a=o.year,t=d("date")(new Date(new Date(a+"/"+e+"/01").getTime()-864e5),"dd");return 1===e?(e=12,a-=1):e-=1,!(o.dateMinLimit&&!o.isSelectableMinDate(a+"/"+e+"/"+t))},o.willNextMonthBeSelectable=function(){var e=o.monthNumber,a=o.year;return 12===e?(e=1,a+=1):e+=1,!(o.dateMaxLimit&&!o.isSelectableMaxDate(a+"/"+e+"/01"))},o.prevMonth=function(){1===o.monthNumber?(o.monthNumber=12,P()):o.monthNumber-=1,o.dateMinLimit&&(o.isSelectableMinDate(o.year+"/"+o.monthNumber+"/"+o.days[o.days.length-1])||$()),o.month=d("date")(new Date(o.year,o.monthNumber-1),"MMMM"),L(o.monthNumber,o.year),o.day=void 0},o.selectedMonthHandle=function(e){o.monthNumber=Number(d("date")(new Date(e+"/01/2000"),"MM")),L(o.monthNumber,o.year),H()},o.setNewYear=function(e){if(t||(o.day=void 0),o.dateMaxLimit&&o.year<Number(e)){if(!o.isSelectableMaxYear(e))return}else if(o.dateMinLimit&&o.year>Number(e)&&!o.isSelectableMinYear(e))return;o.paginateYears(e),o.showYearsPagination=!1,c(function(){o.year=Number(e),L(o.monthNumber,o.year)},0)},o.hideCalendar=function(){u.classList?u.classList.remove("_720kb-datepicker-open"):O.remove(u,"_720kb-datepicker-open")},o.setDatepickerDay=function(e){o.isSelectableDay(o.monthNumber,o.year,e)&&o.isSelectableDate(o.monthNumber,o.year,e)&&o.isSelectableMaxDate(o.year+"/"+o.monthNumber+"/"+e)&&o.isSelectableMinDate(o.year+"/"+o.monthNumber+"/"+e)&&(o.day=Number(e),o.selectedDay=o.day,o.selectedMonth=o.monthNumber,o.selectedYear=o.year,H(),m.hasOwnProperty("dateRefocus")&&p[0].focus(),o.hideCalendar())},o.paginateYears=function(e){var a,n=[],i=10,r=10;for(o.paginationYears=[],t&&(i=50,r=50,o.dateMinLimit&&o.dateMaxLimit&&(i=(e=new Date(o.dateMaxLimit).getFullYear())-new Date(o.dateMinLimit).getFullYear(),r=1)),a=i;a>0;a-=1)n.push(Number(e)-a);for(a=0;a<r;a+=1)n.push(Number(e)+a);"true"===o.dateTyper&&p.on("keyup blur",function(){if(p[0].value&&p[0].value.length&&p[0].value.length>0)try{(N=k?E(p[0].value.toString(),k):new Date(p[0].value.toString())).getFullYear()&&!isNaN(N.getDay())&&!isNaN(N.getMonth())&&o.isSelectableDay(N.getMonth(),N.getFullYear(),N.getDay())&&o.isSelectableDate(N.getMonth(),N.getFullYear(),N.getDay())&&o.isSelectableMaxDate(N)&&o.isSelectableMinDate(N)&&o.$apply(function(){o.month=d("date")(N,"MMMM"),o.monthNumber=Number(d("date")(N,"MM")),o.day=Number(d("date")(N,"dd")),4===N.getFullYear().toString().length&&(o.year=Number(d("date")(N,"yyyy"))),L(o.monthNumber,o.year)})}catch(e){return e}}),o.dateMaxLimit&&n&&n.length&&!o.isSelectableMaxYear(Number(n[n.length-1])+1)?o.paginationYearsNextDisabled=!0:o.paginationYearsNextDisabled=!1,o.dateMinLimit&&n&&n.length&&!o.isSelectableMinYear(Number(n[0])-1)?o.paginationYearsPrevDisabled=!0:o.paginationYearsPrevDisabled=!1,o.paginationYears=n},o.isSelectableDay=function(e,a,t){var n=0;if(v&&v.length>0)for(n;n<=v.length;n+=1)if(v[n]===new Date(e+"/"+t+"/"+a).getDay())return!1;return!0},o.isSelectableDate=function(e,a,t){var n=0;if(f&&f.length>0)for(n;n<=f.length;n+=1)if(new Date(f[n]).getTime()===new Date(e+"/"+t+"/"+a).getTime())return!1;if(D){for(n;n<=D.length;n+=1)if(new Date(D[n]).getTime()===new Date(e+"/"+t+"/"+a).getTime())return!0;return!1}return!0},o.isSelectableMinDate=function(e){return!(o.dateMinLimit&&new Date(o.dateMinLimit)&&new Date(e).getTime()<new Date(o.dateMinLimit).getTime())},o.isSelectableMaxDate=function(e){return!(o.dateMaxLimit&&new Date(o.dateMaxLimit)&&new Date(e).getTime()>new Date(o.dateMaxLimit).getTime())},o.isSelectableMaxYear=function(e){return!(o.dateMaxLimit&&e>new Date(o.dateMaxLimit).getFullYear())},o.isSelectableMinYear=function(e){return!(o.dateMinLimit&&e<new Date(o.dateMinLimit).getFullYear())},o.validateWeekDay=function(e){var a=Number(e,10);return(!a||a<0||a>6)&&(a=0),a},T=T.replace(/{{/g,l.startSymbol()).replace(/}}/g,l.endSymbol()),o.dateMonthTitle=o.dateMonthTitle||"Select month",o.dateYearTitle=o.dateYearTitle||"Select year",o.buttonNextTitle=o.buttonNextTitle||"Next",o.buttonPrevTitle=o.buttonPrevTitle||"Prev",o.month=d("date")(N,"MMMM"),o.monthNumber=Number(d("date")(N,"MM")),o.day=Number(d("date")(N,"dd")),o.dateWeekStartDay=o.validateWeekDay(o.dateWeekStartDay),o.dateMaxLimit?o.year=Number(d("date")(new Date(o.dateMaxLimit),"yyyy")):o.year=Number(d("date")(N,"yyyy")),o.months=Y.MONTH,o.daysInString=[],h=o.dateWeekStartDay;h<=o.dateWeekStartDay+6;h+=1)o.daysInString.push(h%7);o.daysInString=o.daysInString.map(function(e){return d("date")(new Date(new Date("06/08/2014").valueOf()+864e5*e),"EEE")}),o.datepickerAppendTo&&-1!==o.datepickerAppendTo.indexOf(".")?(o.datepickerID="datepicker-id-"+(new Date).getTime()+(Math.floor(6*Math.random())+8),e.element(document.getElementsByClassName(o.datepickerAppendTo.replace(".",""))[0]).append(n(e.element(T))(o,function(a){u=e.element(a)[0]}))):o.datepickerAppendTo&&-1!==o.datepickerAppendTo.indexOf("#")?(o.datepickerID="datepicker-id-"+(new Date).getTime()+(Math.floor(6*Math.random())+8),e.element(document.getElementById(o.datepickerAppendTo.replace("#",""))).append(n(e.element(T))(o,function(a){u=e.element(a)[0]}))):o.datepickerAppendTo&&"body"===o.datepickerAppendTo?(o.datepickerID="datepicker-id-"+((new Date).getTime()+(Math.floor(6*Math.random())+8)),e.element(document).find("body").append(n(e.element(T))(o,function(a){u=e.element(a)[0]}))):(p.after(n(e.element(T))(o)),u=s[0].querySelector("._720kb-datepicker-calendar")),function(){return!o.datepickerToggle||o.$eval(o.datepickerToggle)}()&&p.on("focus click focusin",function(){w=!0,S||w||!u?F():o.hideCalendar()}),p.on("focusout blur",function(){w=!1}),e.element(u).on("mouseenter",function(){S=!0}),e.element(u).on("mouseleave",function(){S=!1}),e.element(u).on("focusin",function(){S=!0}),e.element(a).on("click focus focusin",_),(o.dateMinLimit&&!o.isSelectableMinYear(o.year)||!o.isSelectableMinDate(o.year+"/"+o.monthNumber+"/"+o.day))&&$(),(o.dateMaxLimit&&!o.isSelectableMaxYear(o.year)||!o.isSelectableMaxDate(o.year+"/"+o.monthNumber+"/"+o.day))&&A(),o.paginateYears(o.year),L(o.monthNumber,o.year),o.checkVisibility=j,o.$on("$destroy",function(){I(),C(),B(),G(),z(),R(),p.off("focus click focusout blur"),e.element(u).off("mouseenter mouseleave focusin"),e.element(a).off("click focus focusin",_)})}}};e.module("720kb.datepicker",[]).directive("datepicker",["$window","$compile","$locale","$filter","$interpolate","$timeout",d])}(angular,navigator);
//# sourceMappingURL=angular-datepicker.sourcemap.map

/***/ }),

/***/ "./resources/assets/js/admin-app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
__webpack_require__("./node_modules/angularjs-datepicker/dist/angular-datepicker.min.js");

admin = angular.module('admin', ['ngRoute', 'ngAnimate', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest', '720kb.datepicker', 'parseHTML', 'customFileChange', 'customFileUpload', 'countdownTimer', 'sendMessage', 'bootstrapAdminPage', 'liveGameSession', 'viewAllGames', 'dailyGameLog', 'dailyStatistics', 'monthlyStatistics', 'displayTransactions', 'displayMessages', 'userEarnings', 'allEarnings', 'adminEarnings', 'gameEarnings', 'confirmAction', 'withdrawAdminEarnings', 'cacheBusting']);

admin.run(['$rootScope', '$window', 'Notification', 'sendRequest', function ($rootScope, $window, Notification, sendRequest) {

  $rootScope._ = _;
  $rootScope.route_root = route_root;
  $rootScope.logout = function () {
    sendRequest.postRequest('/logout').then(function (response) {
      if (response.status == 200) {
        Notification.success({ message: 'Logout successful', positionX: 'center' });
        $window.location.href = '/login';
      } else {
        Notification.error({ message: 'Logout failed! Reload page.', positionX: 'center' });
      }
    });
  };

  $rootScope.closeModal = function () {
    $('.ui.modal').modal('hide');
  };

  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    // TODO: Merge this tow to one server cal;l. Eager load the total Earning on the get user details
    sendRequest.getTotalEarnings('/user/get-total-earnings').then(function (rsp) {
      $rootScope.total_earnings = rsp.total_earnings;
    });
    sendRequest.getUserDetails('/user/get-user-details').then(function (rsp) {
      $rootScope.userdetails = rsp.userdetails;
    });
  });
}]);

__webpack_require__("./resources/assets/js/angular/filters/parseHTML.js");

__webpack_require__("./resources/assets/js/angular/services/services.js");

__webpack_require__("./resources/assets/js/angular/directives/customFileChange.js");
__webpack_require__("./resources/assets/js/angular/directives/customFileUpload.js");
__webpack_require__("./resources/assets/js/angular/directives/countdownTimer.js");
__webpack_require__("./resources/assets/js/angular/directives/questionField.js");
__webpack_require__("./resources/assets/js/angular/directives/sendMessage.js");
__webpack_require__("./resources/assets/js/angular/directives/liveGameSession.js");
__webpack_require__("./resources/assets/js/angular/directives/viewAllGames.js");
__webpack_require__("./resources/assets/js/angular/directives/dailyGameLog.js");
__webpack_require__("./resources/assets/js/angular/directives/dailyStatistic.js");
__webpack_require__("./resources/assets/js/angular/directives/monthlyStatistic.js");
__webpack_require__("./resources/assets/js/angular/directives/viewAllTransactions.js");
__webpack_require__("./resources/assets/js/angular/directives/displayMessages.js");
__webpack_require__("./resources/assets/js/angular/directives/userEarnings.js");
__webpack_require__("./resources/assets/js/angular/directives/allEarnings.js");
__webpack_require__("./resources/assets/js/angular/directives/adminEarnings.js");
__webpack_require__("./resources/assets/js/angular/directives/gameEarnings.js");
__webpack_require__("./resources/assets/js/angular/directives/confirmAction.js");
__webpack_require__("./resources/assets/js/angular/directives/withdrawAdminEarnings.js");
__webpack_require__("./resources/assets/js/angular/directives/cacheBusting.js");

__webpack_require__("./resources/assets/js/angular/routes/admin-routes.js");

__webpack_require__("./resources/assets/js/angular/controllers/admin-controller.js");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/controllers/admin-controller.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {admin.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  $scope.flipLeft = function () {
    $('.shape').shape('flip left');
  };

  $scope.flipRight = function () {
    $('.shape').shape('flip right');
  };

  bootstrapAdminPage.dashboard($scope);
}]);

admin.controller('QuestionsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  $scope.previewQuestion = function (q) {
    $scope.particular_q = q.question;
    $scope.particular_q_option1 = q.option_1;
    $scope.particular_q_option2 = q.option_2;
    $scope.particular_q_option3 = q.option_3;
    $scope.particular_q_option4 = q.option_4;
    $scope.particular_q_correct = q.correct_option;

    $('.ui.modal.showQuestion').modal({
      blurring: true
    }).modal('show');
  };

  $scope.openModal = function (q) {
    $scope.q = q;

    $('.ui.modal.editQuestion').modal({
      blurring: true
    }).modal('show');
  };

  $scope.editQuestion = function () {
    NProgress.start();

    sendRequest.postRequest(route_root + '/api/edit-question', $scope.q).then(function (rsp) {
      if (rsp.status == 200) {
        Notification.warning('Edited');
        $scope.correct = null;
        $scope.q = null;
        $('.ui.modal.editQuestion').modal('hide');
        NProgress.done();
      }
    });
  };

  $scope.newQuestion = function () {
    $('.ui.modal.createQuestion').modal({
      blurring: true
    }).modal('show');
  };

  $scope.createQuestion = function () {
    NProgress.start();

    sendRequest.postRequest(route_root + '/api/create-question', $scope.q).then(function (rsp) {
      if (rsp.status == 200) {
        $('.ui.modal.createQuestion').modal('hide');
        Notification.success('Created');
        $scope.correct = null;
        $scope.q = null;
        console.log($scope.questions);
        console.log(rsp.data.status);
        $scope.questions.push(rsp.data.status);
        NProgress.done();
      } else if (rsp.status == 422) {
        $scope.errs = rsp.data.errors;
      }
    });
  };

  $scope.deleteQuestion = function (q) {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/delete-question', q).then(function (rsp) {
      console.log(rsp);
      if (rsp.status == 200) {
        Notification.error('Deleted');
        $scope.correct = null;
        $('.ui.modal.editQuestion').modal('hide');
        var removed = $scope.questions.indexOf(q);
        $scope.questions.splice(removed, 1);
        NProgress.done();
      }
    });
  };

  bootstrapAdminPage.questions($scope);
}]);

admin.controller('AdminsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  $scope.previewAdmin = function (q) {
    $scope.particular_q = q.admin;
    $scope.particular_q_option1 = q.option_1;
    $scope.particular_q_option2 = q.option_2;
    $scope.particular_q_option3 = q.option_3;
    $scope.particular_q_option4 = q.option_4;
    $scope.particular_q_correct = q.correct_option;

    $('.ui.modal.showAdmin').modal({
      blurring: true
    }).modal('show');
  };

  $scope.openModal = function (q) {
    $scope.q = q;

    $('.ui.modal.editAdmin').modal({
      blurring: true
    }).modal('show');
  };

  $scope.editAdmin = function () {
    NProgress.start();

    sendRequest.postRequest(route_root + '/api/edit-admin', $scope.q).then(function (rsp) {
      if (rsp.status == 200) {
        Notification.warning('Edited');
        $scope.correct = null;
        $scope.q = null;
        $('.ui.modal.editAdmin').modal('hide');
        NProgress.done();
      }
    });
  };

  $scope.newAdmin = function () {
    $('.ui.modal.createAdmin').modal({
      blurring: true
    }).modal('show');
  };

  //
  // $scope.createAdmin = () => {
  //   NProgress.start();
  //
  //   sendRequest.postRequest(route_root + '/api/create-admin', $scope.q)
  //               .then(rsp => {
  //                 if (rsp.status == 200) {
  //                   $('.ui.modal.createAdmin').modal('hide');
  //                   Notification.success('Created');
  //                   $scope.correct = null;
  //                   $scope.q = null;
  //                   console.log($scope.admins);
  //                   console.log(rsp.data.status);
  //                   $scope.admins.push(rsp.data.status);
  //                   NProgress.done();
  //
  //                 }
  //               });
  // };

  $scope.deleteAdmin = function (q) {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/delete-admin', q).then(function (rsp) {
      if (rsp.status == 200) {
        Notification.warning('Deleted');
        var removed = $scope.admins.indexOf(q);
        $scope.admins.splice(removed, 1);
      } else if (rsp.status == 410) {
        Notification.error(rsp.data.message);
      }
      NProgress.done();
    });
  };

  $scope.removeAdmin = function (q) {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/remove-admin', q).then(function (rsp) {
      if (rsp.status == 200) {
        Notification.success('Removed');
        var removed = $scope.admins.indexOf(q);
        $scope.admins.splice(removed, 1);
      } else if (rsp.status == 410) {
        Notification.error(rsp.data.message);
      }
      NProgress.done();
    });
  };

  bootstrapAdminPage.admins($scope);
}]);

admin.controller('UsersController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  $scope.previewUser = function (u) {
    $scope.u = u;
    console.log('hhh');

    $('.ui.modal.showUser').modal({
      blurring: true
    }).modal('show');
  };

  $scope.creditUser = function (u) {
    $scope.u = u;
    $('.ui.modal.creditUser').modal({
      blurring: true
    }).modal('show');
  };

  $scope.openEditModal = function (u) {
    $scope.u = u;
    $scope.earnings = _.sumBy(u.earnings, function (o) {
      return o.amount;
    });

    console.log($scope.earnings);

    $('.ui.modal.editUser').modal({
      blurring: true
    }).modal('show');
  };

  $scope.editUser = function () {
    NProgress.start();

    sendRequest.postRequest(route_root + '/api/edit-user', $scope.u).then(function (rsp) {
      if (rsp.status == 200) {
        Notification.warning('Edited');
        $scope.correct = null;
        $scope.u = null;
        $('.ui.modal.editUser').modal('hide');
        NProgress.done();
      }
    });
  };

  $scope.newUser = function () {
    $('.ui.modal.createUser').modal({
      blurring: true
    }).modal('show');
  };

  $scope.openReferralsModal = function (u) {

    sendRequest.postRequest(route_root + '/api/get-user-referrals', u.id).then(function (rsp) {
      if (rsp.status == 200) {
        $scope.u = u;
        $scope.referrals = rsp.data.referrals;
      } else if (rsp.status == 403) {
        Notification.error(rsp.data.status);
      }
      NProgress.done();
    });

    $('.ui.modal.userReferrals').modal({
      blurring: true
    }).modal('show');
  };

  $scope.deleteUser = function (u) {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/delete-user', u).then(function (rsp) {
      if (rsp.status == 200) {
        Notification.warning('Deleted');
        var removed = $scope.users.indexOf(u);
        $scope.users.splice(removed, 1);
      } else if (rsp.status == 403) {
        Notification.error(rsp.data.status);
      }
      NProgress.done();
    });
  };

  $scope.suspendUser = function (u) {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/suspend-user', u).then(function (rsp) {
      console.log(rsp);
      if (rsp.status == 200) {
        Notification.warning('Suspended');
        u.useraccstatus = 'suspended';
      } else if (rsp.status == 403) {
        Notification.error(rsp.data.status);
      }
      NProgress.done();
    });
  };

  $scope.activateUser = function (u) {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/activate-user', u).then(function (rsp) {
      console.log(rsp);
      if (rsp.status == 200) {
        Notification.primary('Activated');
        u.useraccstatus = 'active';
      } else if (rsp.status == 403) {
        Notification.error(rsp.data.status);
      }
      NProgress.done();
    });
  };

  $scope.verifyUser = function (u) {
    $scope.verifying = true;
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/verify-user', u).then(function (rsp) {
      if (rsp.status == 200) {
        Notification.success('Verified');
        u.verified = true;
      } else if (rsp.status == 403) {
        Notification.error(rsp.data.status);
      }
      NProgress.done();
      $scope.verifying = false;
    });
  };

  $scope.processCreditAddition = function (u) {
    $scope.loading = true;
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/create-transaction', u).then(function (rsp) {
      if (rsp.status == 200) {
        Notification.success('Completed');
        $('.ui.modal.creditUser').modal('hide');
        u.units = null;
      } else if (rsp.status == 403) {
        Notification.error(rsp.data.status);
      }
      NProgress.done();
      $scope.loading = false;
    });
  };

  $scope.makeAdmin = function (u) {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/create-admin', u).then(function (rsp) {
      if (rsp.status == 200) {
        Notification('User made an admin');
        var removed = $scope.users.indexOf(u);
        $scope.users.splice(removed, 1);
      } else if (rsp.status == 410) {
        Notification.error(rsp.data.message);
      }
      NProgress.done();
    });
  };

  bootstrapAdminPage.users($scope);
}]);

admin.controller('GamesController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  $scope.active = 'liveSession';

  bootstrapAdminPage.games($scope);
}]);

admin.controller('TransactionsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  bootstrapAdminPage.transactions($scope);
}]);

admin.controller('MessagesController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  bootstrapAdminPage.messages($scope);
}]);

admin.controller('EarningsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  $scope.active = 'allEarnings';

  bootstrapAdminPage.games($scope);
}]);

admin.controller('SettingsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage) {
  NProgress.start();

  $scope.updateDetails = function () {
    $scope.loading = true;
    sendRequest.postRequest('/user/update-user-details', $scope.userdetails).then(function (rsp) {
      Notification.success({ message: 'Updated', positionX: 'center' });
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
          console.log('here');
          $scope.updateDetails();
        }
      }
    });
  };

  bootstrapAdminPage.settings($scope);

  NProgress.done();
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/adminEarnings.js":
/***/ (function(module, exports) {

// EXAMPLE
// <earning-play></earning-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n\n      <withdraw-admin-earnings class="right floated"></withdraw-admin-earnings>\n      <div class="ui labeled button" tabindex="-1">\n        <div class="ui button">\n          <i class="heart icon"></i> Total Transferred\n        </div>\n        <a class="ui basic label">\n          {{ total_transferred | currency }}\n        </a>\n      </div>\n      <div class="ui left labeled button" tabindex="-1">\n        <a class="ui basic right pointing label">\n          {{ total_untransferred | currency }}\n        </a>\n        <div class="ui button">\n          <i class="heart icon"></i> Total Untransferred\n        </div>\n      </div>\n\n      <div ng-show="!earningrecord">\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>User</th>\n              <th>Amount</th>\n              <th>Session</th>\n              <th>Status</th>\n              <th>Date</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="earning in earnings">\n              <td>{{ $index + 1 }}</td>\n              <td ng-click="viewGameRecord(earning)" style="cursor:pointer;"> Admin </td>\n              <td>{{ earning.amount }}</td>\n              <td ng-if="earning.game_id">{{ earning.game_id }}</td>\n              <td ng-if="!earning.game_id"> Withdrawal Fee </td>\n              <td>\n                  <span ng-if="earning.transferred">Transferred</span>\n                  <span ng-if="!earning.transferred">Untransferred</span>\n              </td>\n              <td>{{ earning.created_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n      <div ng-show="earningrecord">\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Status</th>\n              <th>Session</th>\n              <th>Player Name</th>\n              <th>Payment Status</th>\n              <th>Score</th>\n              <th>Earning</th>\n              <th>Position</th>\n              <th>Started At</th>\n              <th>Finished At</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="earning in earnings_records">\n              <td>{{ $index + 1 }}</td>\n              <td>{{ earning.status }}</td>\n              <td>{{ earning.earning_id }}</td>\n              <td>{{ earning.user.firstname }} {{ earning.user.lastname }}</td>\n              <td>{{ earning.payment_status }}</td>\n              <td>{{ earning.score }}</td>\n              <td>{{ earning.earning }}</td>\n              <td>{{ earning.position }}</td>\n              <td>{{ earning.created_at }}</td>\n              <td>{{ earning.ended_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n</section>\n\n';

angular.module('adminEarnings', []).directive('adminEarnings', ['$location', 'Notification', 'sendRequest', function ($location, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/earningPlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      NProgress.start();

      $scope.earningrecord = false;
      $scope.viewGameRecord = function (earning) {
        console.log(earning);
        sendRequest.postRequest(route_root + '/api/get-earning-records', earning).then(function (rsp) {
          if (rsp.status == 200) {
            $scope.earningrecord = true;
            $scope.$parent.active = 'earningRecord';
            $scope.earnings_records = rsp.data.earnings_records;
          }
        });
      };

      $scope.goBack = function () {
        $scope.earningrecord = false;
        $scope.$parent.active = 'allGames';
      };

      sendRequest.postRequest(route_root + '/api/get-all-admin-earnings').then(function (rsp) {
        if (rsp.status == 200) {
          $scope.earnings = rsp.data.earnings;
          $scope.total_transferred = rsp.data.total_transferred;
          $scope.total_untransferred = rsp.data.total_untransferred;
          NProgress.done();
        }
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/allEarnings.js":
/***/ (function(module, exports) {

// EXAMPLE
// <earning-play></earning-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n      <div ng-show="!earningrecord">\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>User</th>\n              <th>Amount</th>\n              <th>Session</th>\n              <th>Status</th>\n              <th>Date</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="earning in earnings">\n              <td>{{ $index + 1 }}</td>\n              <td ng-click="viewGameRecord(earning)" style="cursor:pointer;">{{ earning.user.firstname }} {{ earning.user.lastname }}</td>\n              <td>{{ earning.amount }}</td>\n              <td ng-if="earning.game_id">{{ earning.game_id }}</td>\n              <td ng-if="!earning.game_id">REFERRAL BONUS</td>\n              <td>\n                  <span ng-if="earning.transferred">Transferred</span>\n                  <span ng-if="!earning.transferred">Untransferred</span>\n              </td>\n              <td>{{ earning.created_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n      <div ng-show="earningrecord">\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Status</th>\n              <th>Session</th>\n              <th>Player Name</th>\n              <th>Payment Status</th>\n              <th>Score</th>\n              <th>Earning</th>\n              <th>Position</th>\n              <th>Started At</th>\n              <th>Finished At</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="earning in earnings_records">\n              <td>{{ $index + 1 }}</td>\n              <td>{{ earning.status }}</td>\n              <td>{{ earning.earning_id }}</td>\n              <td>{{ earning.user.firstname }} {{ earning.user.lastname }}</td>\n              <td>{{ earning.payment_status }}</td>\n              <td>{{ earning.score }}</td>\n              <td>{{ earning.earning }}</td>\n              <td>{{ earning.position }}</td>\n              <td>{{ earning.created_at }}</td>\n              <td>{{ earning.ended_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n</section>\n\n';

angular.module('allEarnings', []).directive('allEarnings', ['$location', 'Notification', 'sendRequest', function ($location, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/earningPlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {
      NProgress.start();

      $scope.earningrecord = false;
      $scope.viewGameRecord = function (earning) {
        console.log(earning);
        sendRequest.postRequest(route_root + '/api/get-earning-records', earning).then(function (rsp) {
          if (rsp.status == 200) {
            $scope.earningrecord = true;
            $scope.$parent.active = 'earningRecord';
            $scope.earnings_records = rsp.data.earnings_records;
          }
        });
      };

      $scope.goBack = function () {
        $scope.earningrecord = false;
        $scope.$parent.active = 'allGames';
      };

      sendRequest.postRequest(route_root + '/api/get-all-users-earnings').then(function (rsp) {
        if (rsp.status == 200) {
          $scope.earnings = rsp.data.earnings;
          NProgress.done();
        }
      });
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

      console.log(config.url);
      console.log(version_number);
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

/***/ "./resources/assets/js/angular/directives/confirmAction.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-play></game-play>
// <button ng-class="['ui purple button', {'loading':verifying}]" confirm-action="verifyUser(u)" ng-hide="u.verified">Verify</button>


angular.module('confirmAction', []).directive('confirmAction', ['Notification', 'sendRequest', function (Notification, sendRequest) {
    return {
        restrict: 'A',
        transclude: true,
        template: "<div ng-transclude></div>",
        link: function link(scope, el, attrs) {

            var msg = "Are you sure?";
            var clickAction = attrs.confirmAction;
            el.bind('click', function (event) {
                if (window.confirm(msg)) {
                    scope.$eval(clickAction);
                }
            });
        }
    };
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

/***/ "./resources/assets/js/angular/directives/dailyGameLog.js":
/***/ (function(module, exports) {

// EXAMPLE
// <game-play></game-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n  <style>\n    ._720kb-datepicker-calendar{\n      left:105%;\n      top:-40%;\n      visibility:visible;\n    }\n  </style>\n      <div ng-show="!daily_log">\n        <div class="ui piled segment" style="min-height:400px;">\n          <div class="grid-30 push-20">\n            <h4 class="ui header dash_header">Choose a date</h4>\n               <form class="ui form attached fluid segment">\n                 <div class="field">\n\n\n                   <datepicker date-format="MMMM d, y" date-max-limit="{{ today }}" datepicker-show="true" datepicker-toggle="false">\n                     <input type="text" ng-model="date1">\n                   </datepicker>\n\n\n                 </div>\n                  <div class="ui blue submit button push-30" style="margin-top:10px;" ng-click="getDailyLog()">Retrieve Data</div>\n                </form>\n                <div class="ui bottom attached warning message">\n                  <i class="icon help"></i>\n                  Choose a date to retrieve the logs\n                </div>\n          </div>\n        </div>\n      </div>\n\n      <div ng-show="daily_log">\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th colspan="10">\n                <div class="ui right floated pagination menu">\n                  <a class="icon item positive">CHOOSE A GAME SESSION TO VIEW DETAILS</a>\n                  <a class="item" ng-repeat="(key, value) in daily_log" ng-click="setKey(key)">{{ key }}</a>\n                </div>\n              </th>\n            </tr>\n            <tr>\n              <th>S/N</th>\n              <th>Status</th>\n              <th>Session</th>\n              <th>Player Name</th>\n              <th>Payment Status</th>\n              <th>Score</th>\n              <th>Earning</th>\n              <th>Position</th>\n              <th>Started At</th>\n              <th>Finished At</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="game in daily_log[cur]">\n              <td>{{ $index + 1 }}</td>\n              <td>{{ game.status }}</td>\n              <td>{{ game.game_id }}</td>\n              <td>{{ game.user.firstname }} {{ game.user.lastname }}</td>\n              <td>{{ game.payment_status }}</td>\n              <td>{{ game.score }}</td>\n              <td>{{ game.earning }}</td>\n              <td>{{ game.position }}</td>\n              <td>{{ game.created_at }}</td>\n              <td>{{ game.ended_at }}</td>\n            </tr>\n\n          </tbody>\n          <tfoot>\n            <tr>\n              <th colspan="10">\n                <div class="ui right floated pagination menu">\n                  <a class="icon item">CHOOSE A GAME SESSION TO VIEW DETAILS</a>\n\n                  <a class="item" ng-repeat="(key, value) in daily_log" ng-click="setKey(key)">{{ key }}</a>\n                </div>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n\n\n\n</section>\n\n';

angular.module('dailyGameLog', []).directive('dailyGameLog', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.today = Date();

      $scope.getDailyLog = function () {
        console.log($scope.date1);
        if (undefined == $scope.date1) {
          Notification.error('Pick a date');
        } else {
          sendRequest.postRequest(route_root + '/api/get-logs-by-day', $scope.date1).then(function (rsp) {
            if (rsp.status == 200) {
              $scope.daily_log = true;
              $scope.daily_log = rsp.data.daily_log;

              //set the current log displayed
              $scope.cur = Object.keys(rsp.data.daily_log)[0];
            }
          });
        }
      };

      $scope.setKey = function (key) {
        $scope.cur = key;
      };

      $scope.goBack = function () {
        $scope.daily_log = false;
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/dailyStatistic.js":
/***/ (function(module, exports) {

// EXAMPLE
// <game-play></game-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n  <style>\n    ._720kb-datepicker-calendar{\n      left:105%;\n      top:-40%;\n      visibility:visible;\n    }\n  </style>\n      <div ng-show="!statistics">\n        <div class="ui piled segment" style="min-height:400px;">\n          <div class="grid-30 push-20">\n            <h4 class="ui header dash_header">Choose a date</h4>\n               <form class="ui form attached fluid segment">\n                 <div class="field">\n\n\n                   <datepicker date-format="MMMM d, y" date-max-limit="{{ today }}" datepicker-show="true" datepicker-toggle="false">\n                     <input type="text" ng-model="date1">\n                   </datepicker>\n\n\n                 </div>\n                  <div class="ui blue submit button push-30" style="margin-top:10px;" ng-click="getStatistics()">Retrieve Statistics</div>\n                </form>\n                <div class="ui bottom attached warning message">\n                  <i class="icon help"></i>\n                  Choose a date to retrieve the statistics\n                </div>\n          </div>\n        </div>\n      </div>\n\n      <div ng-show="statistics" class="grid-50 prefix-25">\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <table class="ui  table ">\n        <h4 class="ui header dash_header">Date: </h4>\n\n          <thead>\n            <tr>\n              <th>Section</th>\n              <th>Value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>New Users</td>\n              <td>{{stats.new_users}}</td>\n            </tr>\n            <tr>\n              <td>New Referrals</td>\n              <td>{{ stats.new_referrals }} </td>\n            </tr>\n            <tr>\n              <td>Top Gamer</td>\n              <td>{{ stats.top_ganer.user.firstname }} {{ stats.top_ganer.user.lastname }} </td>\n            </tr>\n            <tr>\n              <td>Online Payments</td>\n              <td>{{ stats.online_payments }} </td>\n            </tr>\n            <tr>\n              <td>Offline Payments</td>\n              <td>{{ stats.offline_payments }} </td>\n            </tr>\n            <tr>\n              <td>Number of Games</td>\n              <td>{{ stats.number_of_games }} </td>\n            </tr>\n            <tr>\n              <td>Number of Players</td>\n              <td>{{ stats.total_num_of_players }} </td>\n            </tr>\n            <tr>\n              <td>Online Payment Amount</td>\n              <td>{{ stats.online_payments_amount }} </td>\n            </tr>\n            <tr>\n              <td>Offline Payment Amount</td>\n              <td>{{ stats.offline_payments_amount }} </td>\n            </tr>\n            <tr>\n              <td>Payments by Earnings</td>\n              <td>{{ stats.payments_by_earnings }} </td>\n            </tr>\n            <tr>\n              <td>Admin Payment by Earning</td>\n              <td>{{ stats.admin_payments_by_earnings }} </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n\n\n</section>\n\n';

angular.module('dailyStatistics', []).directive('dailyStatistics', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.today = Date();

      $scope.getStatistics = function () {
        console.log($scope.date1);
        if (undefined == $scope.date1) {
          Notification.error('Pick a date');
        } else {
          sendRequest.postRequest(route_root + '/api/get-daily-statistics', $scope.date1).then(function (rsp) {
            if (rsp.status == 200) {
              $scope.statistics = true;
              $scope.stats = rsp.data.stats;
            }
          });
        }
      };

      $scope.setKey = function (key) {
        $scope.cur = key;
      };

      $scope.goBack = function () {
        $scope.statistics = false;
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/displayMessages.js":
/***/ (function(module, exports) {

// EXAMPLE
// <message-play></message-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n      <div ng-show="!messagerecord">\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Sender</th>\n              <th>Subject</th>\n              <th>Status</th>\n              <th>Date</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="msg in messages">\n              <td>{{ $index + 1 }}</td>\n              <td>{{ msg.senderusername }}</td>\n              <td  ng-click="viewMessage(msg)">{{ msg.subject }}</td>\n              <td>{{ msg.read }}</td>\n              <td>{{ msg.created_at | timeAgo }}</td>\n              <td>\n                <div class="ui mini labeled button" tabindex="-1">\n                  <div class="ui mini red button" ng-click="deleteMessage(msg)">\n                    Delete\n                  </div>\n                </div>\n                <div class="ui mini labeled button" tabindex="-1" ng-if="!msg.read">\n                  <div class="ui mini basic orange button" ng-click="markAsRead(msg)">\n                    Mark as Read\n                  </div>\n                </div>\n              </td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n      <div ng-show="messagerecord" class="grid-80 prefix-10">\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <div class="ui attached message">\n          <div class="header">\n            Message Details\n          </div>\n        </div>\n        <form class="ui form attached fluid segment">\n\n        <div class="ui info message">\n          <i class="close icon"></i>\n          <div class="header">\n            {{ msg_record.message }}\n          </div>\n        </div>\n\n          <div class="field" ng-if="msg_record.user_id == 8888888">\n            <label>Subject</label>\n            <input type="text" ng-model="msg_record.reply_subject">\n          </div>\n\n          <div class="field" ng-if="msg_record.user_id == 8888888">\n            <label>Message</label>\n            <textarea placeholder="Message" type="text" ng-model="msg_record.reply_message"></textarea>\n          </div>\n\n          <button class="ui blue submit button" ng-click="sendBroadcast()" ng-disabled="!msg_record.reply_message || !msg_record.reply_subject" ng-if="msg_record.user_id == 8888888">Submit</button>\n        </form>\n      </div>\n\n</section>\n\n';

angular.module('displayMessages', []).directive('displayMessages', ['$route', 'Notification', 'sendRequest', function ($route, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/messagePlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.messagerecord = false;

      $scope.markAsRead = function (message) {
        sendRequest.postRequest(route_root + '/api/mark-message-as-read', message).then(function (rsp) {
          if (rsp.status == 200) {
            message.read = true;
          }
        });
      };

      $scope.deleteMessage = function (message) {
        sendRequest.postRequest(route_root + '/api/delete-message', message).then(function (rsp) {
          if (rsp.status == 200) {
            var removed = $scope.messages.indexOf(message);
            $scope.messages.splice(removed, 1);
          } else if (rsp.status == 409) {
            Notification.error('Can\'t delete system message.');
          }
        });
      };

      $scope.viewMessage = function (message) {
        $scope.msg_record = message;
        $scope.messagerecord = true;
      };

      $scope.sendMessage = function () {
        NProgress.start();
        $scope.reply = {};
        $scope.reply.user_id = $scope.msg_record.sender_id;
        $scope.reply.sender_id = $scope.msg_record.user_id;
        $scope.reply.subject = $scope.msg_record.reply_subject;
        $scope.reply.message = $scope.msg_record.reply_message;

        sendRequest.postRequest(route_root + '/api/reply-message', $scope.reply).then(function (rsp) {
          if (rsp.status == 200) {
            Notification.success('Sent');
            console.log('hey');
            $scope.msg_record = null;
            NProgress.done();
            $route.reload();
          }
        });
      };

      $scope.sendBroadcast = function () {
        NProgress.start();
        $scope.reply = {};
        $scope.reply.subject = $scope.msg_record.reply_subject;
        $scope.reply.message = $scope.msg_record.reply_message;

        sendRequest.postRequest(route_root + '/api/send-broadcast', $scope.reply).then(function (rsp) {
          if (rsp.status == 200) {
            Notification.success('Sent');
            $scope.msg_record = null;
            $route.reload();
            NProgress.done();
          }
        });
      };

      $scope.goBack = function () {
        $scope.messagerecord = false;
      };

      sendRequest.postRequest(route_root + '/api/get-all-messages').then(function (rsp) {
        if (rsp.status == 200) {
          $scope.messages = rsp.data.messages;
          NProgress.done();
        }
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/gameEarnings.js":
/***/ (function(module, exports) {

// EXAMPLE
// <earning-play></earning-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n      <div ng-show="!earningrecord">\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Status</th>\n              <th>Session</th>\n              <th>Number of Players</th>\n              <th>Max Winners</th>\n              <th>Total Winners</th>\n              <th>Total Prize</th>\n              <th>Amount Won</th>\n              <th>Started At</th>\n              <th>Finished At</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="game in games">\n              <td>{{ $index + 1 }}</td>\n              <td ng-click="viewEarnings(game)">{{ game.status }}</td>\n              <td>{{ game.id }}</td>\n              <td>{{ game.num_of_players }}</td>\n              <td>{{ game.max_winners }}</td>\n              <td>{{ game.total_prize }}</td>\n              <td>{{ game.total_winners }}</td>\n              <td>{{ game.amount_won }}</td>\n              <td>{{ game.created_at }}</td>\n              <td>{{ game.ended_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </table>\n      </div>\n\n      <div ng-show="earningrecord">\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>User</th>\n              <th>Amount</th>\n              <th>Session</th>\n              <th>Status</th>\n              <th>Date</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="earning in earnings">\n              <td>{{ $index + 1 }}</td>\n              <td ng-click="viewGameRecord(earning)" style="cursor:pointer;"> {{ earning.user.firstname }} {{ earning.user.lastname }} </td>\n              <td>{{ earning.amount }}</td>\n              <td>{{ earning.game_id }}</td>\n              <td>\n                  <span ng-if="earning.transferred">Transferred</span>\n                  <span ng-if="!earning.transferred">Untransferred</span>\n              </td>\n              <td>{{ earning.created_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n</section>\n\n';

angular.module('gameEarnings', []).directive('gameEarnings', ['$location', 'Notification', 'sendRequest', function ($location, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/earningPlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      NProgress.start();

      $scope.earningrecord = false;

      $scope.viewEarnings = function (game) {
        // $scope.username = u.firstname + ' ' + u.lastname;
        sendRequest.postRequest(route_root + '/api/get-all-game-earnings', game).then(function (rsp) {
          if (rsp.status == 200) {
            $scope.earningrecord = true;
            $scope.earnings = rsp.data.earnings;
          }
        });
      };

      $scope.goBack = function () {
        $scope.earningrecord = false;
      };

      sendRequest.postRequest(route_root + '/api/get-all-games').then(function (rsp) {
        if (rsp.status == 200) {
          $scope.games = rsp.data.games;
          NProgress.done();
        }
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/liveGameSession.js":
/***/ (function(module, exports) {

// EXAMPLE
// <game-play></game-play>


var url = '\n<section class="ui segment red"  id="content-context" style="  max-height: 60vh; overflow: auto;">\n      <div >\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Name</th>\n              <th>Session</th>\n              <th>Joined At</th>\n              <th>Finished At</th>\n              <th>Score</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="gamer in live_session">\n              <td>{{ $index + 1 }}</td>\n              <td>{{ gamer.user.firstname }} {{ gamer.user.lastname }}</td>\n              <td>{{ gamer.game_id }}</td>\n              <td>{{ gamer.created_at }}</td>\n              <td>{{ gamer.ended_at }}</td>\n              <td>{{ gamer.score }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n</section>\n\n';

angular.module('liveGameSession', []).directive('liveGameSession', ['$location', 'Notification', 'sendRequest', function ($location, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope: {},
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', '$timeout', function ($scope, $timeout) {

      sendRequest.postRequest(route_root + '/api/get-live-game-session').then(function (rsp) {
        if (rsp.status == 200) {
          $scope.live_session = rsp.data.live_session;
        }
      });

      $timeout(function () {
        Echo.leave('new_member_joined');
        Echo.channel('new_member_joined').listen('NewMemberJoined', function (e) {
          new_session = e.new_session;
          new_session.user = e.new_member;
          $scope.live_session.push(new_session);
          $scope.$apply();
          //  $scope.total_examinees = e.total_examinees;
        });
      }, 0);
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/monthlyStatistic.js":
/***/ (function(module, exports) {

// EXAMPLE
// <game-play></game-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n  <style>\n    ._720kb-datepicker-calendar{\n      left:105%;\n      top:-40%;\n      visibility:visible;\n    }\n  </style>\n      <div ng-show="!statistics">\n        <div class="ui piled segment" style="min-height:400px;">\n          <div class="grid-30 push-20">\n            <h4 class="ui header dash_header">Choose a date</h4>\n               <form class="ui form attached fluid segment">\n                 <div class="field">\n\n\n                   <datepicker date-format="MMMM d, y" date-max-limit="{{ today }}" datepicker-show="true" datepicker-toggle="false">\n                     <input type="text" ng-model="date1">\n                   </datepicker>\n\n\n                 </div>\n                  <div class="ui purple submit button push-30" style="margin-top:10px;" ng-click="getStatistics()">Retrieve Statistics</div>\n                </form>\n                <div class="ui bottom attached success message">\n                  <i class="icon help"></i>\n                  Choose a month to retrieve the statistics\n                </div>\n          </div>\n        </div>\n      </div>\n\n      <div ng-show="statistics" class="grid-50 prefix-25">\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <table class="ui  table ">\n        <h4 class="ui header dash_header">Date: </h4>\n\n          <thead>\n            <tr>\n              <th>Section</th>\n              <th>Value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>New Users</td>\n              <td>{{stats.new_users}}</td>\n            </tr>\n            <tr>\n              <td>New Referrals</td>\n              <td>{{ stats.new_referrals }} </td>\n            </tr>\n            <tr>\n              <td>Top Gamer</td>\n              <td>{{ stats.top_ganer.user.firstname }} {{ stats.top_ganer.user.lastname }} </td>\n            </tr>\n            <tr>\n              <td>Online Payments</td>\n              <td>{{ stats.online_payments }} </td>\n            </tr>\n            <tr>\n              <td>Offline Payments</td>\n              <td>{{ stats.offline_payments }} </td>\n            </tr>\n            <tr>\n              <td>Number of Games</td>\n              <td>{{ stats.number_of_games }} </td>\n            </tr>\n            <tr>\n              <td>Number of Players</td>\n              <td>{{ stats.total_num_of_players }} </td>\n            </tr>\n            <tr>\n              <td>Online Payment Amount</td>\n              <td>{{ stats.online_payments_amount }} </td>\n            </tr>\n            <tr>\n              <td>Offline Payment Amount</td>\n              <td>{{ stats.offline_payments_amount }} </td>\n            </tr>\n            <tr>\n              <td>Payments by Earnings</td>\n              <td>{{ stats.payments_by_earnings }} </td>\n            </tr>\n            <tr>\n              <td>Admin Payment by Earning</td>\n              <td>{{ stats.admin_payments_by_earnings }} </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n\n\n</section>\n\n';

angular.module('monthlyStatistics', []).directive('monthlyStatistics', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.today = Date();

      $scope.getStatistics = function () {
        console.log($scope.date1);
        if (undefined == $scope.date1) {
          Notification.error('Pick a date');
        } else {
          sendRequest.postRequest(route_root + '/api/get-monthly-statistics', $scope.date1).then(function (rsp) {
            if (rsp.status == 200) {
              $scope.statistics = true;
              $scope.stats = rsp.data.stats;
            }
          });
        }
      };

      $scope.setKey = function (key) {
        $scope.cur = key;
      };

      $scope.goBack = function () {
        $scope.statistics = false;
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/questionField.js":
/***/ (function(module, exports) {

// EXAMPLE
// <game-play></game-play>


var url = '\n<tr>\n  <td>{{ $index + 1 }}</td>\n  <td>{{ transaction.created_at | timeAgo}}</td>\n  <td>{{ transaction.trans_type }}</td>\n  <td>{{ transaction.amount | currency }}</td>\n</tr>\n\n';

angular.module('questionField', []).directive('questionField', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    template: url,
    replace: true,
    scope: {},
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {}]
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

/***/ "./resources/assets/js/angular/directives/userEarnings.js":
/***/ (function(module, exports) {

// EXAMPLE
// <earning-play></earning-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n      <div ng-show="!earningrecord">\n      <table class="ui  striped celled table">\n        <thead>\n          <tr>\n            <th>S/N</th>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n\n          <tr ng-repeat="u in users">\n            <td>{{ $index + 1 }}</td>\n            <td>{{ u.firstname }} {{ u.lastname }}</td>\n            <td>{{ u.email }}</td>\n            <td>\n              <div class="ui mini buttons">\n                <button class="ui purple button" ng-click="viewEarnings(u)">View Earnings</button>\n              </div>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n      </div>\n\n      <div ng-show="earningrecord">\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>User</th>\n              <th>Amount</th>\n              <th>Session</th>\n              <th>Status</th>\n              <th>Date</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="earning in earnings">\n              <td>{{ $index + 1 }}</td>\n              <td ng-click="viewGameRecord(earning)" style="cursor:pointer;"> {{ username }} </td>\n              <td>{{ earning.amount }}</td>\n              <td ng-if="earning.game_id">{{ earning.game_id }}</td>\n              <td ng-if="!earning.game_id">REFERRAL BONUS</td>\n              <td>\n                  <span ng-if="earning.transferred">Transferred</span>\n                  <span ng-if="!earning.transferred">Untransferred</span>\n              </td>\n              <td>{{ earning.created_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n</section>\n\n';

angular.module('userEarnings', []).directive('userEarnings', ['sendRequest', function (sendRequest) {
  return {
    restrict: 'E',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      NProgress.start();

      $scope.earningrecord = false;

      $scope.viewEarnings = function (u) {
        $scope.username = u.firstname + ' ' + u.lastname;
        sendRequest.postRequest(route_root + '/api/get-all-user-earnings', u).then(function (rsp) {
          console.log(rsp);
          if (rsp.status == 200) {
            $scope.earningrecord = true;
            $scope.earnings = rsp.data.earnings;
          }
        });
      };

      $scope.goBack = function () {
        $scope.earningrecord = false;
      };

      sendRequest.postRequest(route_root + '/api/get-users-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          $scope.users = rsp.data.users;
          NProgress.done();
        }
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/viewAllGames.js":
/***/ (function(module, exports) {

// EXAMPLE
// <game-play></game-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n      <div ng-show="!gamerecord">\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Status</th>\n              <th>Session</th>\n              <th>Number of Players</th>\n              <th>Max Winners</th>\n              <th>Total Winners</th>\n              <th>Total Prize</th>\n              <th>Amount Won</th>\n              <th>Started At</th>\n              <th>Finished At</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="game in games">\n              <td ng-click="viewGameRecord(game)" style="cursor:pointer;">{{ $index + 1 }}</td>\n              <td ng-click="viewGameRecord(game)" style="cursor:pointer;">{{ game.status ? \'active\' : \'ended\' }}</td>\n              <td ng-click="viewGameRecord(game)" style="cursor:pointer;">{{ game.id }}</td>\n              <td ng-click="viewGameRecord(game)" style="cursor:pointer;">{{ game.num_of_players }}</td>\n              <td>{{ game.max_winners }}</td>\n              <td>{{ game.total_winners }}</td>\n              <td>{{ game.total_prize }}</td>\n              <td>{{ game.amount_won }}</td>\n              <td ng-click="viewGameRecord(game)" style="cursor:pointer;">{{ game.created_at }}</td>\n              <td ng-click="viewGameRecord(game)" style="cursor:pointer;">{{ game.ended_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n      <div ng-show="gamerecord">\n      <div class="ui teal buttons">\n        <button class="ui labeled icon button" ng-click="goBack()">\n          <i class="left chevron icon"></i>\n          Go Back\n        </button>\n      </div>\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Status</th>\n              <th>Session</th>\n              <th>Player Name</th>\n              <th>Payment Status</th>\n              <th>Score</th>\n              <th>Earning</th>\n              <th>Position</th>\n              <th>Started At</th>\n              <th>Finished At</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="game in games_records">\n              <td>{{ $index + 1 }}</td>\n              <td>{{ game.status }}</td>\n              <td>{{ game.game_id }}</td>\n              <td>{{ game.user.firstname }} {{ game.user.lastname }}</td>\n              <td>{{ game.payment_status }}</td>\n              <td>{{ game.score }}</td>\n              <td>{{ game.earning }}</td>\n              <td>{{ game.position }}</td>\n              <td>{{ game.created_at }}</td>\n              <td>{{ game.ended_at }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n</section>\n\n';

angular.module('viewAllGames', []).directive('viewAllGames', ['sendRequest', function (sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {
      $scope.gamerecord = false;
      $scope.viewGameRecord = function (game) {
        console.log(game);
        sendRequest.postRequest(route_root + '/api/get-game-records', game).then(function (rsp) {
          if (rsp.status == 200) {
            $scope.gamerecord = true;
            $scope.$parent.active = 'gameRecord';
            $scope.games_records = rsp.data.games_records;
          }
        });
      };

      $scope.goBack = function () {
        $scope.gamerecord = false;
        $scope.$parent.active = 'allGames';
      };

      sendRequest.postRequest(route_root + '/api/get-all-games').then(function (rsp) {
        if (rsp.status == 200) {
          $scope.games = rsp.data.games;
        }
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/viewAllTransactions.js":
/***/ (function(module, exports) {

// EXAMPLE
// <transaction-play></transaction-play>


var url = '\n<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">\n      <div class="ui search flex-center" style="justify-content:flex-end; margin-bottom: 15px;">\n        <div class="ui icon input">\n          <input class="prompt" type="text" placeholder="Search transactions..." ng-model="search">\n          <i class="search icon"></i>\n        </div>\n        <div class="results"></div>\n      </div>\n      <div ng-show="!transactionrecord">\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Type</th>\n              <th>User</th>\n              <th>Amount</th>\n              <th>Charges</th>\n              <th>Channel</th>\n              <th>Status</th>\n              <th>Request Date</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr ng-repeat="trans in transactions | filter : search" ng-class="{\'negative\' : trans.trans_type == \'Admin Correction\'}">\n              <td ng-click="viewTransactionRecord(trans)">{{ $index + 1 }}</td>\n              <td ng-click="viewTransactionRecord(trans)" title="click to view details">{{ trans.trans_type }}</td>\n              <td ng-click="viewTransactionRecord(trans)" title="click to view details">{{ trans.user.firstname }} {{ trans.user.lastname }}</td>\n              <td>{{ trans.amount | currency }}</td>\n              <td>{{ trans.charges | currency }}</td>\n              <td>{{ trans.channel }}</td>\n              <td>\n                <div class="ui mini labeled button" tabindex="-1" ng-if="trans.trans_type == \'withdrawal\' && trans.status == \'pending\'"">\n                  <div ng-class="[\'ui mini red button\', {\'loading\':loading}]" ng-click="markAsPaid(trans)">\n                    <i class="tags icon"></i> Mark as Paid\n                  </div>\n                  <a class="ui basic red left pointing label">\n                    {{ trans.status }}\n                  </a>\n                </div>\n                <div class="ui mini labeled button" tabindex="-1" ng-if="trans.trans_type == \'withdrawal\' && trans.status != \'pending\'"">\n                  <div class="ui mini basic blue button">\n                    <i class="thumbs up outline icon"></i>\n                  </div>\n                  <a class="ui basic left pointing blue label">\n                    {{ trans.status }}\n                  </a>\n                </div>\n              </td>\n              <td>{{ trans.created_at | timeAgo }}</td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n      <div ng-show="transactionrecord" class="grid-80 prefix-10">\n\n        <div class="ui teal buttons">\n          <button class="ui labeled icon button" ng-click="goBack()">\n            <i class="left chevron icon"></i>\n            Go Back\n          </button>\n        </div>\n        <table class="ui  striped celled table">\n          <thead>\n            <tr>\n              <th>Detail</th>\n              <th>Value</th>\n\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr>\n              <td>User Name</td>\n              <td>{{ trans_record.user.firstname }} {{ trans_record.user.lastname }} </td>\n            </tr>\n\n            <tr>\n              <td>Email</td>\n              <td>{{ trans_record.user.email }} </td>\n            </tr>\n\n            <tr>\n              <td>Phone Number</td>\n              <td>{{ trans_record.user.phone1 }} </td>\n            </tr>\n\n            <tr>\n              <td>Bank</td>\n              <td>{{ trans_record.user.bank }} </td>\n            </tr>\n\n            <tr>\n              <td>Account Number</td>\n              <td>{{ trans_record.user.acct_no }} </td>\n            </tr>\n\n            <tr>\n              <td>Account Type</td>\n              <td>{{ trans_record.user.acct_type }} </td>\n            </tr>\n\n            <tr>\n              <td>Requested Amount</td>\n              <td>{{ trans_record.amount }} </td>\n            </tr>\n\n            <tr>\n              <td>Request Type</td>\n              <td>\n                <span ng-if="trans_record.amount > 1000 "> Cash </span>\n                <span ng-if="trans_record.amount < 1000 "> Recharge Card </span>\n              </td>\n            </tr>\n\n            <tr>\n              <td>Balance Units</td>\n              <td>{{ trans_record.user.available_units }} </td>\n            </tr>\n\n            <tr>\n              <td>Total Purchsaed Units</td>\n              <td>{{ trans_record.user.units_purchased }} </td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n\n</section>\n\n';

angular.module('displayTransactions', []).directive('displayTransactions', ['sendRequest', function (sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/transactionPlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.transactionrecord = false;

      $scope.markAsPaid = function (transaction) {
        $scope.loading = true;
        sendRequest.postRequest(route_root + '/api/mark-transaction-as-paid', transaction).then(function (rsp) {
          if (rsp.status == 200) {
            transaction.status = 'Completed';
            $scope.transactions_records = rsp.data.transactions_records;
            $scope.loading = false;
          }
        });
      };

      $scope.viewTransactionRecord = function (transaction) {
        if (transaction.trans_type != 'withdrawal') {
          return;
        }
        $scope.trans_record = transaction;
        $scope.transactionrecord = true;
        // $scope.$parent.active = 'transactionRecord';
      };

      $scope.goBack = function () {
        $scope.transactionrecord = false;
        // $scope.$parent.active = 'allTransactions';
      };

      sendRequest.postRequest(route_root + '/api/get-all-transactions').then(function (rsp) {
        if (rsp.status == 200) {
          $scope.transactions = rsp.data.transactions;
          NProgress.done();
        }
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/withdrawAdminEarnings.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<section id="withdrawAdminEarnings" class="ui left floated horizontal  list" style="margin-bottom: 45px;">\n\n  <button class="ui compact right floated violet button" ng-click="transferEarnings()">\n    <i class="icon credit card amazon pay"></i>\n    Withdraw Admin Earnings\n  </button>\n\n\n</section>\n';

angular.module('withdrawAdminEarnings', []).directive('withdrawAdminEarnings', ['$route', 'Notification', 'sendRequest', function ($route, Notification, sendRequest) {
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

      $scope.transferEarnings = function () {
        sendRequest.postRequest(route_root + '/api/withdraw-admin-earnings').then(function (rsp) {
          if (rsp.status == 200) {
            if (rsp.data.status) {
              Notification.success({ message: 'All Earnings marked as withdrawn', positionX: 'center' });
              $route.reload();
            }
          }
        });
      };
    }]
  };
}]);

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

/***/ "./resources/assets/js/angular/routes/admin-routes.js":
/***/ (function(module, exports) {

admin.config(['$routeProvider', '$locationProvider', '$localStorageProvider', '$provide', 'NotificationProvider', 'timeAgoSettings', function ($routeProvider, $locationProvider, $localStorageProvider, $provide, NotificationProvider, timeAgoSettings) {

  $routeProvider.when(route_root, {
    templateUrl: 'angular/views/admin/users.html',
    controller: 'UsersController'
  }).when(route_root + '/settings', {
    templateUrl: 'angular/views/admin/settings.html',
    controller: 'SettingsController'
  }).when(route_root + '/questions', {
    templateUrl: 'angular/views/admin/questions.html',
    controller: 'QuestionsController'
  }).when(route_root + '/admins', {
    templateUrl: 'angular/views/admin/admins.html',
    controller: 'AdminsController'
  }).when(route_root + '/users', {
    templateUrl: 'angular/views/admin/users.html',
    controller: 'UsersController'
  }).when(route_root + '/earnings', {
    templateUrl: 'angular/views/admin/earnings.html',
    controller: 'EarningsController'
  }).when(route_root + '/games', {
    templateUrl: 'angular/views/admin/games.html',
    controller: 'GamesController'
  }).when(route_root + '/transactions', {
    templateUrl: 'angular/views/admin/transactions.html',
    controller: 'TransactionsController'
  }).when(route_root + '/messages', {
    templateUrl: 'angular/views/admin/messages.html',
    controller: 'MessagesController'
  }).otherwise({
    redirectTo: route_root
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
  $localStorageProvider.setKeyPrefix('game-');
  timeAgoSettings.allowFuture = true;
  NotificationProvider.setOptions({
    delay: 5000,
    replaceMessage: true,
    positionX: 'center'
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

    request: function request(url) {
      var data = [];
      return $http.get(url).then(function (response) {
        return response.data;
      }, function (err) {
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
      scope.$on('$destroy', function () {
        $timeout(function () {
          sendRequest.postRequest('/user/pause-game');
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
        if (rsp.status == 200) {}
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.shape').shape();
          NProgress.done();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    questions: function questions(scope) {

      sendRequest.postRequest(route_root + '/api/get-questions-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.questions = rsp.data.questions;
        }
      }, function (err) {
        Notification.error('Error retrieving questions from server');
      });

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.shape').shape();
          NProgress.done();
        }, 500);
      });
      // scope.$on('$destroy', function() {
      //   $timeout(function () {
      //   }, 0);
      // });
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

      sendRequest.postRequest(route_root + '/api/get-users-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.users = rsp.data.users;
          NProgress.done();
        }
      }, function (err) {
        Notification.error('Error retrieving users from server');
      });

      sendRequest.getBanks('/api/get-banks-list').then(function (rsp) {
        scope.banks = rsp.banks;
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/admin-app.js");


/***/ })

},[3]);
//# sourceMappingURL=admin-app.js.map