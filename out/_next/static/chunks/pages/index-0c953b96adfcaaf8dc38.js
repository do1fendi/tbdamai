_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"+kAY":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=u(r),i=u(n("17x9"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){var e,n,o;s(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.state={fbLoaded:!1,shouldShowDialog:void 0},l(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.setFbAsyncInit(),this.reloadSDKAsynchronously()}},{key:"componentDidUpdate",value:function(e){e.pageId===this.props.pageId&&e.appId===this.props.appId&&e.shouldShowDialog===this.props.shouldShowDialog&&e.htmlRef===this.props.htmlRef&&e.minimized===this.props.minimized&&e.themeColor===this.props.themeColor&&e.loggedInGreeting===this.props.loggedInGreeting&&e.loggedOutGreeting===this.props.loggedOutGreeting&&e.greetingDialogDisplay===this.props.greetingDialogDisplay&&e.greetingDialogDelay===this.props.greetingDialogDelay&&e.autoLogAppEvents===this.props.autoLogAppEvents&&e.xfbml===this.props.xfbml&&e.version===this.props.version&&e.language===this.props.language||(this.setFbAsyncInit(),this.reloadSDKAsynchronously())}},{key:"componentWillUnmount",value:function(){void 0!==window.FB&&window.FB.CustomerChat.hide()}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,o=t.autoLogAppEvents,r=t.xfbml,a=t.version;window.fbAsyncInit=function(){window.FB.init({appId:n,autoLogAppEvents:o,xfbml:r,version:"v"+a}),e.setState({fbLoaded:!0})}}},{key:"loadSDKAsynchronously",value:function(){var e=this.props.language;!function(t,n,o){var r,a=t.getElementsByTagName(n)[0];t.getElementById(o)||((r=t.createElement(n)).id=o,r.src="https://connect.facebook.net/"+e+"/sdk/xfbml.customerchat.js",a.parentNode.insertBefore(r,a))}(document,"script","facebook-jssdk")}},{key:"removeFacebookSDK",value:function(){["facebook-jssdk","fb-root"].forEach((function(e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)})),delete window.FB}},{key:"reloadSDKAsynchronously",value:function(){this.removeFacebookSDK(),this.loadSDKAsynchronously()}},{key:"controlPlugin",value:function(){this.props.shouldShowDialog?window.FB.CustomerChat.showDialog():window.FB.CustomerChat.hideDialog()}},{key:"subscribeEvents",value:function(){var e=this.props,t=e.onCustomerChatDialogShow,n=e.onCustomerChatDialogHide;t&&window.FB.Event.subscribe("customerchat.dialogShow",t),n&&window.FB.Event.subscribe("customerchat.dialogHide",n)}},{key:"createMarkup",value:function(){var e=this.props,t=e.pageId,n=e.htmlRef,o=e.minimized,r=e.themeColor,a=e.loggedInGreeting,i=e.loggedOutGreeting,u=e.greetingDialogDisplay,s=e.greetingDialogDelay;return{__html:'<div\n        class="fb-customerchat"\n        page_id="'+t+'"\n        '+(void 0!==n?'ref="'+n+'"':"")+"\n        "+(void 0!==o?'minimized="'+o+'"':"")+"\n        "+(void 0!==r?'theme_color="'+r+'"':"")+"\n        "+(void 0!==a?'logged_in_greeting="'+a+'"':"")+"\n        "+(void 0!==i?'logged_out_greeting="'+i+'"':"")+"\n        "+(void 0!==u?'greeting_dialog_display="'+u+'"':"")+"\n        "+(void 0!==s?'greeting_dialog_delay="'+s+'"':"")+"\n      ></div>"}}},{key:"render",value:function(){var e=this,t=this.state,n=t.fbLoaded,o=t.shouldShowDialog;return n&&o!==this.props.shouldShowDialog&&(document.addEventListener("DOMNodeInserted",(function(t){var n=t.target;n.className&&"string"===typeof n.className&&n.className.includes("fb_dialog")&&e.controlPlugin()}),!1),this.subscribeEvents()),a.default.createElement("div",{key:Date(),dangerouslySetInnerHTML:this.createMarkup()})}}]),t}(r.Component);c.propTypes={pageId:i.default.string.isRequired,appId:i.default.string.isRequired,shouldShowDialog:i.default.bool,htmlRef:i.default.string,minimized:i.default.bool,themeColor:i.default.string,loggedInGreeting:i.default.string,loggedOutGreeting:i.default.string,greetingDialogDisplay:i.default.oneOf(["show","hide","fade"]),greetingDialogDelay:i.default.number,autoLogAppEvents:i.default.bool,xfbml:i.default.bool,version:i.default.string,language:i.default.string,onCustomerChatDialogShow:i.default.func,onCustomerChatDialogHide:i.default.func},c.defaultProps={shouldShowDialog:!1,htmlRef:void 0,minimized:void 0,themeColor:void 0,loggedInGreeting:void 0,loggedOutGreeting:void 0,greetingDialogDisplay:void 0,greetingDialogDelay:void 0,autoLogAppEvents:!0,xfbml:!0,version:"2.11",language:"en_US",onCustomerChatDialogShow:void 0,onCustomerChatDialogHide:void 0},t.default=c},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery,i=void 0!==a&&a;return n||r&&i}},"5BQM":function(e,t,n){"use strict";var o,r=n("+kAY"),a=(o=r)&&o.__esModule?o:{default:o};e.exports=a.default},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=c,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),u=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var u=r.key.slice(r.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var c=f[s];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var d=r.props[c],p=o[c]||new Set;"name"===c&&i||!p.has(d)?(p.add(d),o[c]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function g(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),o=(0,r.useContext)(u.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:p,headManager:o,inAmpMode:(0,s.isInAmpMode)(n)},t)}g.rewind=function(){};var h=g;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},"HaE+":function(e,t,n){"use strict";function o(e,t,n,o,r,a,i){try{var u=e[a](i),s=u.value}catch(l){return void n(l)}u.done?t(s):Promise.resolve(s).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function u(e){o(i,r,a,u,s,"next",e)}function s(e){o(i,r,a,u,s,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return r}))},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QqKt:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("q1tI"),r=n.n(o).a.createElement,a=Object(o.createContext)();t.b=function(e){var t=Object(o.useState)(!1),n=t[0],i=t[1];return r(a.Provider,{value:{logged:n,setLogged:i}},e.children)}},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return o(e)||r(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var o=n("o0o1"),r=n.n(o),a=n("HaE+"),i=n("q1tI"),u=n.n(i),s=n("g4pe"),l=n.n(s),c=n("5BQM"),d=n.n(c),f=n("QqKt"),p=u.a.createElement;function g(){var e=Object(i.useContext)(f.a);return Object(i.useEffect)((function(){localStorage.getItem("token")?Object(a.a)(r.a.mark((function t(){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://localhost:3005/frontend","/verifyToken"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,console.log(o),"Success"==o.status&&e.setLogged(!0);case 8:case"end":return t.stop()}}),t)})))():alert("no")})),p("div",{className:"container mx-auto px-4"},p(l.a,null,p("title",null,"TBDamai | Home"),p("link",{rel:"icon",href:"/favicon.ico"})),p("h1",null,"Welcome to Tb Damai"),p(d.a,{pageId:"100258215401523",appId:"329917598722443"}))}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var c=n("q1tI"),d=function(e){i(n,e);var t=l(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);t.default=d},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);