<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

  <head>
    <title>Agent Dashboard | {{ env('APP_NAME') }}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <meta name="robots" content="noindex,nofollow">
      <meta name="theme-color" content="{{ env('APP_THEME_COLOR') }}">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="description" content="">
      <meta name="author" content="">

  		<link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" sizes="192x192"/>
  		<link id="stylesheet" href="{{ mix('/css/app.css') }}">
  		<noscript><link  rel="stylesheet" href="{{ mix('/css/app.css') }}"></noscript>
      <style media="screen">
        .flex-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;}
        body,div,span,h1,img,i,footer,header,nav,section{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}
        body{line-height:1;}
        footer,header,nav,section{display:block;}
        a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;}
        *,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit;}
        body{margin:0;}
        footer,header,nav,section{display:block;}
        h1{font-size:2em;margin:0.67em 0;}
        a{background-color:transparent;-webkit-text-decoration-skip:objects;}
        img{border-style:none;}
        body{height:100%;}
        body{margin:0px;padding:0px;overflow-x:hidden;min-width:320px;background:#FFFFFF;font-family:'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;font-size:14px;line-height:1.4285em;color:rgba(0, 0, 0, 0.87);font-smoothing:antialiased;}
        h1{font-family:'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;line-height:1.28571429em;margin:calc(2rem - 0.14286em) 0em 1rem;font-weight:bold;padding:0em;}
        h1{min-height:14px;min-height:1rem;font-size:28px;font-size:2rem;}
        h1:first-child{margin-top:0em;}
        h1:last-child{margin-bottom:0em;}
        a{color:#4183C4;text-decoration:none;}
        a:hover{color:#1e70bf;text-decoration:none;}
        ::-webkit-selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
        ::-moz-selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
        ::selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
        body ::-webkit-scrollbar{-webkit-appearance:none;width:10px;height:10px;}
        body ::-webkit-scrollbar-track{background:rgba(0, 0, 0, 0.1);border-radius:0px;}
        body ::-webkit-scrollbar-thumb{cursor:pointer;border-radius:5px;background:rgba(0, 0, 0, 0.25);-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}
        body ::-webkit-scrollbar-thumb:hover{background:rgba(128, 135, 139, 0.8);}
        body .ui.inverted::-webkit-scrollbar-track{background:rgba(255, 255, 255, 0.1);}
        body .ui.inverted::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.25);}
        body .ui.inverted::-webkit-scrollbar-thumb:hover{background:rgba(255, 255, 255, 0.35);}
        .ui.button{cursor:pointer;display:inline-block;min-height:1em;outline:none;border:none;vertical-align:baseline;background:#E0E1E2 none;color:rgba(0, 0, 0, 0.6);font-family:'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;margin:0em 0.25em 0em 0em;padding:0.78571429em 1.5em 0.78571429em;text-transform:none;text-shadow:none;font-weight:bold;line-height:1em;font-style:normal;text-align:center;text-decoration:none;border-radius:0.28571429rem;-webkit-box-shadow:0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;box-shadow:0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;transition:opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;transition:opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;transition:opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;will-change:'';-webkit-tap-highlight-color:transparent;}
        .ui.button:hover{background-color:#CACBCD;background-image:none;-webkit-box-shadow:0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;box-shadow:0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;color:rgba(0, 0, 0, 0.8);}
        .ui.button:hover .icon{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";opacity:0.85;}
        .ui.button:focus{background-color:#CACBCD;color:rgba(0, 0, 0, 0.8);background-image:''!important;-webkit-box-shadow:''!important;box-shadow:''!important;}
        .ui.button:focus .icon{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";opacity:0.85;}
        .ui.button:active{background-color:#BABBBC;background-image:'';color:rgba(0, 0, 0, 0.9);-webkit-box-shadow:0px 0px 0px 1px transparent inset, none;box-shadow:0px 0px 0px 1px transparent inset, none;}
        .ui.button:disabled{cursor:default;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=45)"!important;opacity:0.45!important;background-image:none!important;-webkit-box-shadow:none!important;box-shadow:none!important;pointer-events:none!important;}
        .ui.labeled.button:not(.icon){display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:none!important;padding:0px!important;border:none!important;-webkit-box-shadow:none!important;box-shadow:none!important;}
        .ui.labeled.button > .button{margin:0px;}
        .ui.labeled.button > .label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px 0px 0px -1px!important;padding:'';font-size:1em;border-color:rgba(34, 36, 38, 0.15);}
        .ui.labeled.button:not([class*="left labeled"]) > .button{border-top-right-radius:0px;border-bottom-right-radius:0px;}
        .ui.labeled.button:not([class*="left labeled"]) > .label{border-top-left-radius:0px;border-bottom-left-radius:0px;}
        .ui.button > .icon:not(.button){height:0.85714286em;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";opacity:0.8;margin:0em 0.42857143em 0em -0.21428571em;-webkit-transition:opacity 0.1s ease;transition:opacity 0.1s ease;vertical-align:'';color:'';}
        .ui.button:not(.icon) > .icon:not(.button):not(.dropdown){margin:0em 0.42857143em 0em -0.21428571em;}
        .ui.button{font-size:14px;font-size:1rem;}
        .ui.purple.button{background-color:#A333C8;color:#FFFFFF;text-shadow:none;background-image:none;}
        .ui.purple.button{-webkit-box-shadow:0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;box-shadow:0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;}
        .ui.purple.button:hover{background-color:#9627ba;color:#FFFFFF;text-shadow:none;}
        .ui.purple.button:focus{background-color:#8f1eb4;color:#FFFFFF;text-shadow:none;}
        .ui.purple.button:active{background-color:#82299f;color:#FFFFFF;text-shadow:none;}
        i.icon{display:inline-block;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";opacity:1;margin:0em 3.5px 0em 0em;margin:0em 0.25rem 0em 0em;width:1.18em;height:1em;font-family:'Icons';font-style:normal;font-weight:normal;text-decoration:inherit;text-align:center;speak:none;font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-backface-visibility:hidden;backface-visibility:hidden;}
        i.icon:before{background:none!important;}
        i.icon{font-size:1em;}
        i.icon.sign.out:before{content:"\F2F5";}
        i.icon.file:before{content:"\F15B";}
        i.icon.file.alternate:before{content:"\F15C";}
        i.icon.folder:before{content:"\F07B";}
        i.icon.folder.open:before{content:"\F07C";}
        i.icon.gamepad:before{content:"\F11B";}
        i.icon.mars:before{content:"\F222";}
        i.icon.money.bill.alternate:before{content:"\F3D1";}
        i.icon.tasks:before{content:"\F0AE";}
        i.icon.users:before{content:"\F0C0";}
        i.icon.venus:before{content:"\F221";}
        i.icon.venus.mars:before{content:"\F228";}
        i.icon.money:before{content:"\F3D1";}
        i.icon.outline{font-family:'outline-icons';}
        i.icon.file.outline:before{content:"\F15B";}
        i.icon.file.alternate.outline:before{content:"\F15C";}
        i.icon.folder.outline:before{content:"\F07B";}
        i.icon.folder.open.outline:before{content:"\F07C";}
        i.icon.money.bill.alternate.outline:before{content:"\F3D1";}
        .ui.label{display:inline-block;line-height:1;vertical-align:baseline;margin:0em 0.14285714em;background-color:#E8E8E8;background-image:none;padding:0.5833em 0.833em;color:rgba(0, 0, 0, 0.6);text-transform:none;font-weight:bold;border:0px solid transparent;border-radius:0.28571429rem;-webkit-transition:background 0.1s ease;transition:background 0.1s ease;}
        .ui.label:first-child{margin-left:0em;}
        .ui.label:last-child{margin-right:0em;}
        a.ui.label{cursor:pointer;}
        a.ui.label:hover{background-color:#E0E0E0;border-color:#E0E0E0;background-image:none;color:rgba(0, 0, 0, 0.8);}
        a.ui.label:hover:before{color:rgba(0, 0, 0, 0.8);}
        .ui.purple.label{background-color:#A333C8!important;border-color:#A333C8!important;color:#FFFFFF!important;}
        a.ui.purple.label:hover{background-color:#9627ba!important;border-color:#9627ba!important;color:#FFFFFF!important;}
        .ui.basic.purple.label{background:none #FFFFFF!important;color:#A333C8!important;border-color:#A333C8!important;}
        a.ui.basic.purple.label:hover{background-color:#FFFFFF!important;color:#9627ba!important;border-color:#9627ba!important;}
        .ui.basic.label{background:none #FFFFFF;border:1px solid rgba(34, 36, 38, 0.15);color:rgba(0, 0, 0, 0.87);-webkit-box-shadow:none;box-shadow:none;}
        a.ui.basic.label:hover{text-decoration:none;background:none #FFFFFF;color:#1e70bf;-webkit-box-shadow:1px solid rgba(34, 36, 38, 0.15);box-shadow:1px solid rgba(34, 36, 38, 0.15);-webkit-box-shadow:none;box-shadow:none;}
        .ui.basic.pointing.label:before{border-color:inherit;}
        .ui.pointing.label{position:relative;}
        .ui.pointing.label:before{background-color:inherit;background-image:inherit;border-width:none;border-style:solid;border-color:inherit;}
        .ui.pointing.label:before{position:absolute;content:'';-webkit-transform:rotate(45deg);transform:rotate(45deg);background-image:none;z-index:2;width:0.6666em;height:0.6666em;-webkit-transition:background 0.1s ease;transition:background 0.1s ease;}
        .ui.pointing.label{margin-top:1em;}
        .ui.pointing.label:before{border-width:1px 0px 0px 1px;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);top:0%;left:50%;}
        .ui[class*="left pointing"].label{margin-top:0em;margin-left:0.6666em;}
        .ui[class*="left pointing"].label:before{border-width:0px 0px 1px 1px;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);bottom:auto;right:auto;top:50%;left:0em;}
        .ui[class*="right pointing"].label{margin-top:0em;margin-right:0.6666em;}
        .ui[class*="right pointing"].label:before{border-width:1px 1px 0px 0px;-webkit-transform:translateX(50%) translateY(-50%) rotate(45deg);transform:translateX(50%) translateY(-50%) rotate(45deg);top:50%;right:0%;bottom:auto;left:auto;}
        .ui.basic.pointing.label:before{margin-top:-1px;}
        .ui.basic[class*="left pointing"].label:before{top:50%;left:-1px;}
        .ui.label{font-size:12px;font-size:0.85714286rem;}
        .ui.list{list-style-type:none;margin:1em 0em;padding:0em 0em;}
        .ui.list:first-child{margin-top:0em;padding-top:0em;}
        .ui.list:last-child{margin-bottom:0em;padding-bottom:0em;}
        .ui.list > .item{display:list-item;table-layout:fixed;list-style-type:none;list-style-position:outside;padding:0.21428571em 0em;line-height:1.14285714em;}
        .ui.list > .item:after{content:'';display:block;height:0;clear:both;visibility:hidden;}
        .ui.list > .item:first-child{padding-top:0em;}
        .ui.list > .item:last-child{padding-bottom:0em;}
        .ui.list > .item > i.icon{display:table-cell;margin:0em;padding-top:0em;padding-right:0.28571429em;vertical-align:top;-webkit-transition:color 0.1s ease;transition:color 0.1s ease;}
        .ui.list > .item > i.icon:only-child{display:inline-block;vertical-align:top;}
        .ui.list > a.item{cursor:pointer;color:#4183C4;}
        .ui.list > a.item:hover{color:#1e70bf;}
        .ui.list > a.item i.icon{color:rgba(0, 0, 0, 0.4);}
        .ui[class*="right floated"].list{float:right;}
        .ui.horizontal.list{display:inline-block;font-size:0em;}
        .ui.horizontal.list > .item{display:inline-block;margin-left:1em;font-size:14px;font-size:1rem;}
        .ui.horizontal.list:not(.celled) > .item:first-child{margin-left:0em!important;padding-left:0em!important;}
        .ui.horizontal.list > .item > .icon{vertical-align:middle;}
        .ui.horizontal.list > .item:first-child,.ui.horizontal.list > .item:last-child{padding-top:0.21428571em;padding-bottom:0.21428571em;}
        .ui.horizontal.list > .item > i.icon{margin:0em;padding:0em 0.25em 0em 0em;}
        .ui.horizontal.list > .item > .icon{float:none;display:inline-block;}
        .ui.list > a.item:hover .icon{color:rgba(0, 0, 0, 0.87);}
        .ui.celled.list > .item{border-top:1px solid rgba(34, 36, 38, 0.15);padding-left:0.5em;padding-right:0.5em;}
        .ui.celled.list > .item:last-child{border-bottom:1px solid rgba(34, 36, 38, 0.15);}
        .ui.celled.list > .item:first-child,.ui.celled.list > .item:last-child{padding-top:0.21428571em;padding-bottom:0.21428571em;}
        .ui.horizontal.celled.list{margin-left:0em;}
        .ui.horizontal.celled.list > .item{border-top:none;border-left:1px solid rgba(34, 36, 38, 0.15);margin:0em;padding-left:0.5em;padding-right:0.5em;line-height:0.6;}
        .ui.horizontal.celled.list > .item:last-child{border-bottom:none;border-right:1px solid rgba(34, 36, 38, 0.15);}
        .ui.list{font-size:1em;}
        .ui.horizontal.list > .item{font-size:14px;font-size:1rem;}
        .ui.menu{display:-webkit-box;display:-ms-flexbox;display:flex;margin:14px 0em;margin:1rem 0em;font-family:'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;background:#FFFFFF;font-weight:normal;border:1px solid rgba(34, 36, 38, 0.15);-webkit-box-shadow:0px 1px 2px 0 rgba(34, 36, 38, 0.15);box-shadow:0px 1px 2px 0 rgba(34, 36, 38, 0.15);border-radius:0.28571429rem;min-height:2.85714286em;}
        .ui.menu:after{content:'';display:block;height:0px;clear:both;visibility:hidden;}
        .ui.menu:first-child{margin-top:0px;margin-top:0rem;}
        .ui.menu:last-child{margin-bottom:0px;margin-bottom:0rem;}
        .ui.menu:not(.vertical) .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
        .ui.menu .item{position:relative;vertical-align:middle;line-height:1;text-decoration:none;-webkit-tap-highlight-color:transparent;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:none;padding:0.92857143em 1.14285714em;text-transform:none;color:rgba(0, 0, 0, 0.87);font-weight:normal;-webkit-transition:background 0.1s ease, color 0.1s ease, -webkit-box-shadow 0.1s ease;transition:background 0.1s ease, color 0.1s ease, -webkit-box-shadow 0.1s ease;transition:background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease;transition:background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease, -webkit-box-shadow 0.1s ease;}
        .ui.menu > .item:first-child{border-radius:0.28571429rem 0px 0px 0.28571429rem;}
        .ui.menu .item:before{position:absolute;content:'';top:0%;right:0px;height:100%;width:1px;background:rgba(34, 36, 38, 0.1);}
        .ui.menu .item > i.icon{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";opacity:0.9;float:none;margin:0em 0.35714286em 0em 0em;}
        .ui.menu a.item:hover{cursor:pointer;background:rgba(0, 0, 0, 0.03);color:rgba(0, 0, 0, 0.95);}
        .ui.menu a.item:active{background:rgba(0, 0, 0, 0.03);color:rgba(0, 0, 0, 0.95);}
        .ui.menu .active.item{background:rgba(0, 0, 0, 0.05);color:rgba(0, 0, 0, 0.95);font-weight:normal;-webkit-box-shadow:none;box-shadow:none;}
        .ui.menu .active.item > i.icon{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";opacity:1;}
        .ui.menu .active.item:hover{background-color:rgba(0, 0, 0, 0.05);color:rgba(0, 0, 0, 0.95);}
        .ui.compact.menu .item:last-child{border-radius:0em 0.28571429rem 0.28571429rem 0em;}
        .ui.menu .red.active.item{border-color:#DB2828!important;color:#DB2828!important;}
        .ui.inverted.menu{border:0px solid transparent;background:#1B1C1D;-webkit-box-shadow:none;box-shadow:none;}
        .ui.inverted.menu .item{background:transparent;color:rgba(255, 255, 255, 0.9);}
        .ui.inverted.menu .item:before{background:rgba(255, 255, 255, 0.08);}
        .ui.inverted.menu a.item:hover{background:rgba(255, 255, 255, 0.08);color:#ffffff;}
        .ui.inverted.menu a.item:active{background:rgba(255, 255, 255, 0.08);color:#ffffff;}
        .ui.inverted.menu .active.item{background:rgba(255, 255, 255, 0.15);color:#ffffff!important;}
        .ui.inverted.menu .active.item:hover{background:rgba(255, 255, 255, 0.15);color:#FFFFFF!important;}
        .ui.inverted.menu .red.active.item{background-color:#DB2828;}
        .ui.compact.menu{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:0em;vertical-align:middle;}
        .ui.compact.menu .item:last-child{border-radius:0em 0.28571429rem 0.28571429rem 0em;}
        .ui.compact.menu .item:last-child:before{display:none;}
        .ui.menu{font-size:14px;font-size:1rem;}
        .grid-container:before,.grid-20:before,.grid-35:before,.grid-45:before,.grid-80:before,.grid-100:before,.grid-container:after,.grid-20:after,.grid-35:after,.grid-45:after,.grid-80:after,.grid-100:after{content:".";display:block;overflow:hidden;visibility:hidden;font-size:0;line-height:0;width:0;height:0;}
        .grid-container:after,.grid-20:after,.grid-35:after,.grid-45:after,.grid-80:after,.grid-100:after{clear:both;}
        .grid-container,.grid-20,.grid-35,.grid-45,.grid-80,.grid-100{*zoom:1;}
        .grid-container{margin-left:auto;margin-right:auto;max-width:1200px;padding-left:10px;padding-right:10px;}
        .grid-20,.grid-35,.grid-45,.grid-80,.grid-100{-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:10px;padding-right:10px;*padding-left:0;*padding-right:0;}
        .grid-20 > *,.grid-35 > *,.grid-45 > *,.grid-80 > *,.grid-100 > *{*margin-left:expression((!this.className.match(/grid-[1-9]/) && this.currentStyle.display === 'block' && this.currentStyle.width === 'auto') && '10px');*margin-right:expression((!this.className.match(/grid-[1-9]/) && this.currentStyle.display === 'block' && this.currentStyle.width === 'auto') && '10px');}
        @media (min-width: 1025px){
        .push-10{position:relative;}
        .push-10{left:10%;*left:expression(Math.floor(0.1 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
        .grid-20{float:left;width:20%;*width:expression(Math.floor(0.2 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
        .grid-35{float:left;width:35%;*width:expression(Math.floor(0.35 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
        .grid-45{float:left;width:45%;*width:expression(Math.floor(0.45 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
        .grid-80{float:left;width:80%;*width:expression(Math.floor(0.8 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
        .grid-100{clear:both;width:100%;}
        }
        div#main-controller header#alpha{background-color:#fff;border-bottom:1px solid rgba(160, 205, 240, 0.55);padding:15px 0px;}
        div#main-controller header#alpha img{height:50px;}
        div#main-controller header#alpha nav{padding-top:15px;}
        div#main-controller header#alpha nav a.item:not(.notif){color:#999;}
        div#main-controller header#alpha nav a.item:not(.notif):hover{text-decoration:underline;}
        div#main-controller #dashboard{padding:80px 0px 100px 0px;min-height:calc(100vh - 210px);}
        div#main-controller section#u_details{padding:20px 0px;background-color:rgba(0, 0, 0, 0.05);border-bottom:2px solid grey;}
        div#main-controller footer{padding:20px 0px;background-color:#03A9F4;border-top:4px solid rgba(160, 205, 240, 0.55)!important;}
        div#main-controller footer a{color:#8b909b;}
        div#main-controller footer a:hover{text-decoration:underline;}
        div#main-controller footer .ui.horizontal.celled.list > .item{border:none!important;}
        div#main-controller footer span.deg{font-size:21px;font-size:1.5rem;color:white;position:relative;top:2px;}
        .ui.button{border-radius:20px;}
        #mini-game{float:left;margin-right:5%;}
        #mini-game h1{font-size:1em;margin:0;padding:0;}
        @media only screen and (max-width: 767px){
        #mini-game .ui.button{font-size:0.78571429rem!important;padding-right:1.2rem!important;}
        #mini-game .ui.button.labeled{margin-top:5px;}
        }
        @media only screen and (min-width: 768px) and (max-width: 1169px){
        div#main-controller .ui.menu{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;}
        }
        @media only screen and (max-width: 767px){
        div#main-controller #dashboard{padding-bottom:120px;}
        div#main-controller header .ui.button{font-size:0.78571429rem!important;}
        div#main-controller nav .right.floated{float:left!important;}
        div#main-controller .ui.menu{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;}
        }
        div#main-controller footer{width:100%;background:#fff;border-top:2px solid #8b909b;}
      </style>

      @section('customCSS') @show

  </head>

  <body>
      <div id="app">
          @yield('contents')
      </div>

      <script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
      <script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
      <script src="{{ asset(mix('js/admin-supplementary-app.js'))}}" charset="utf-8"></script>
      <script>
        document.querySelector('#stylesheet').setAttribute('rel','stylesheet');
      </script>

      @section('customJS') @show

  </body>

</html>
