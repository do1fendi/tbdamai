_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"+kAY":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),r=s(a),i=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){var e,n,o;l(this,t);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o.state={fbLoaded:!1,shouldShowDialog:void 0},u(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.setFbAsyncInit(),this.reloadSDKAsynchronously()}},{key:"componentDidUpdate",value:function(e){e.pageId===this.props.pageId&&e.appId===this.props.appId&&e.shouldShowDialog===this.props.shouldShowDialog&&e.htmlRef===this.props.htmlRef&&e.minimized===this.props.minimized&&e.themeColor===this.props.themeColor&&e.loggedInGreeting===this.props.loggedInGreeting&&e.loggedOutGreeting===this.props.loggedOutGreeting&&e.greetingDialogDisplay===this.props.greetingDialogDisplay&&e.greetingDialogDelay===this.props.greetingDialogDelay&&e.autoLogAppEvents===this.props.autoLogAppEvents&&e.xfbml===this.props.xfbml&&e.version===this.props.version&&e.language===this.props.language||(this.setFbAsyncInit(),this.reloadSDKAsynchronously())}},{key:"componentWillUnmount",value:function(){void 0!==window.FB&&window.FB.CustomerChat.hide()}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,o=t.autoLogAppEvents,a=t.xfbml,r=t.version;window.fbAsyncInit=function(){window.FB.init({appId:n,autoLogAppEvents:o,xfbml:a,version:"v"+r}),e.setState({fbLoaded:!0})}}},{key:"loadSDKAsynchronously",value:function(){var e=this.props.language;!function(t,n,o){var a,r=t.getElementsByTagName(n)[0];t.getElementById(o)||((a=t.createElement(n)).id=o,a.src="https://connect.facebook.net/"+e+"/sdk/xfbml.customerchat.js",r.parentNode.insertBefore(a,r))}(document,"script","facebook-jssdk")}},{key:"removeFacebookSDK",value:function(){["facebook-jssdk","fb-root"].forEach((function(e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)})),delete window.FB}},{key:"reloadSDKAsynchronously",value:function(){this.removeFacebookSDK(),this.loadSDKAsynchronously()}},{key:"controlPlugin",value:function(){this.props.shouldShowDialog?window.FB.CustomerChat.showDialog():window.FB.CustomerChat.hideDialog()}},{key:"subscribeEvents",value:function(){var e=this.props,t=e.onCustomerChatDialogShow,n=e.onCustomerChatDialogHide;t&&window.FB.Event.subscribe("customerchat.dialogShow",t),n&&window.FB.Event.subscribe("customerchat.dialogHide",n)}},{key:"createMarkup",value:function(){var e=this.props,t=e.pageId,n=e.htmlRef,o=e.minimized,a=e.themeColor,r=e.loggedInGreeting,i=e.loggedOutGreeting,s=e.greetingDialogDisplay,l=e.greetingDialogDelay;return{__html:'<div\n        class="fb-customerchat"\n        page_id="'+t+'"\n        '+(void 0!==n?'ref="'+n+'"':"")+"\n        "+(void 0!==o?'minimized="'+o+'"':"")+"\n        "+(void 0!==a?'theme_color="'+a+'"':"")+"\n        "+(void 0!==r?'logged_in_greeting="'+r+'"':"")+"\n        "+(void 0!==i?'logged_out_greeting="'+i+'"':"")+"\n        "+(void 0!==s?'greeting_dialog_display="'+s+'"':"")+"\n        "+(void 0!==l?'greeting_dialog_delay="'+l+'"':"")+"\n      ></div>"}}},{key:"render",value:function(){var e=this,t=this.state,n=t.fbLoaded,o=t.shouldShowDialog;return n&&o!==this.props.shouldShowDialog&&(document.addEventListener("DOMNodeInserted",(function(t){var n=t.target;n.className&&"string"===typeof n.className&&n.className.includes("fb_dialog")&&e.controlPlugin()}),!1),this.subscribeEvents()),r.default.createElement("div",{key:Date(),dangerouslySetInnerHTML:this.createMarkup()})}}]),t}(a.Component);c.propTypes={pageId:i.default.string.isRequired,appId:i.default.string.isRequired,shouldShowDialog:i.default.bool,htmlRef:i.default.string,minimized:i.default.bool,themeColor:i.default.string,loggedInGreeting:i.default.string,loggedOutGreeting:i.default.string,greetingDialogDisplay:i.default.oneOf(["show","hide","fade"]),greetingDialogDelay:i.default.number,autoLogAppEvents:i.default.bool,xfbml:i.default.bool,version:i.default.string,language:i.default.string,onCustomerChatDialogShow:i.default.func,onCustomerChatDialogHide:i.default.func},c.defaultProps={shouldShowDialog:!1,htmlRef:void 0,minimized:void 0,themeColor:void 0,loggedInGreeting:void 0,loggedOutGreeting:void 0,greetingDialogDisplay:void 0,greetingDialogDelay:void 0,autoLogAppEvents:!0,xfbml:!0,version:"2.11",language:"en_US",onCustomerChatDialogShow:void 0,onCustomerChatDialogHide:void 0},t.default=c},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("o0o1"),i=n.n(r),s=n("HaE+"),l=a.a.createElement;function u(){return l("div",null,l("div",{className:"text-center text-5xl text-gray-400 bg-blue-400"},l("div",{className:"-mt-2 lg:-mt-22 xl:-mt-28"},l("svg",{viewBox:"0 0 1428 174",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},l("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l("g",{transform:"translate(-2.000000, 44.000000)",fill:"#FFFFFF",fillRule:"nonzero"},l("path",{d:"M0,50 C90.7283404,0.527527913 147.912752,80.187927 291.910178,70.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",opacity:"0.100000001"}),l("path",{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.100000001"}),l("path",{d:"M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",id:"Path-4",opacity:"0.200000003"})),l("g",{transform:"translate(-4.000000, 76.000000)",fill:"#FFFFFF",fillRule:"nonzero"},l("path",{d:"M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"})))))))}var c=a.a.createElement;function d(){return c("div",{className:"text-center text-white bg-gray-800 text-md font-bold p-8"},"All right reserve TBDamai 2001 - ",(new Date).getFullYear())}var p=n("gPam"),f=n("YFqc"),m=n.n(f),g=a.a.createElement;function b(){return g("div",{className:"flex items-center flex-shrink-0 text-white mr-6 "},g(m.a,{href:"/"},g("a",null,g("span",{className:"font-semibold text-xl tracking-tight"},"TBDamai"))))}var h=n("20a2"),y=n.n(h);var v=function(e){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},e),o.createElement("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}))};var w=n("QqKt"),x=n("rePB"),k=n("CojT"),O=n.n(k),C=a.a.createElement;function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=Object(o.useContext)(w.a),n=Object(o.useRef)(null),a=Object(o.useRef)(null),r=Object(o.useState)({username:"",password:""}),l=r[0],u=r[1];return C("div",null,C("input",{ref:n,value:l.username,onChange:function(e){return u(j(j({},l),{},{username:e.target.value}))},type:"text",className:"w-full border border-blue-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",placeholder:"Email"}),C("input",{ref:a,value:l.password,onChange:function(e){return u(j(j({},l),{},{password:e.target.value}))},type:"password",className:"w-full border border-blue-500 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",placeholder:"Password"}),C("button",{onClick:function(){l.username?l.password?Object(s.a)(i.a.mark((function n(){var o,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.tbdamai.net/frontend","/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)});case 2:return o=n.sent,n.next=5,o.json();case 5:a=n.sent,console.log(a),a.token&&(localStorage.setItem("token",a.token),localStorage.setItem("tbEmail",l.username),t.setLogged(!0),e.closeModal());case 8:case"end":return n.stop()}}),n)})))():a.current.focus():n.current.focus()},className:"mb-2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none"},"Login"),C(O.a,{appId:"329917598722443",autoLoad:!0,fields:"name,email,picture",scope:"public_profile",callback:function(n){var o={fbId:n.id,fbName:n.name,fbEmail:n.email,fbToken:n.accessToken,fbTokenExpiration:n.data_access_expiration_time,fbPicUrl:n.picture.data.url};n&&Object(s.a)(i.a.mark((function n(){var a,r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.tbdamai.net/frontend","/fbLogin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)});case 2:return a=n.sent,n.next=5,a.json();case 5:"Success"==(r=n.sent).status&&(localStorage.setItem("token",r.token),t.setLogged(!0),e.closeModal());case 7:case"end":return n.stop()}}),n)})))()},icon:"fa-facebook",size:"small"}),C("button",{onClick:function(t){e.closeModal(),y.a.push("/register")},className:"mb-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none"},"Register"))}var N=a.a.createElement;function E(){var e=Object(o.useContext)(w.a),t=Object(o.useState)(!1),n=t[0],a=t[1],r=function(){a(!1)};function l(){a(!0)}var u=function(){Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://api.tbdamai.net/frontend","/logout"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({token:"".concat(localStorage.getItem("token"))})});case 2:return n=t.sent,t.next=5,n.json();case 5:"Success"==t.sent.status&&(localStorage.removeItem("token"),e.setLogged(!1));case 7:case"end":return t.stop()}}),t)})))()};return N("div",null,N(p.b,{as:"div",className:"relative inline-block text-left mr-2"},N("div",null,N(p.b.Button,{className:"inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},N(v,{className:"w-5 h-5","aria-hidden":"true"}))),N(p.c,{as:o.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},N(p.b.Items,{className:"absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"},N("div",{className:"px-1 py-1 "},N(p.b.Item,{as:"div"},e.logged?function(e){var t=e.active;return N("button",{onClick:u,className:"".concat(t?"bg-sinbad-500 text-gray-900 font-semibold":"text-gray-900"," group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold")},"Logout")}:function(e){var t=e.active;return N("button",{onClick:l,className:"".concat(t?"bg-sinbad-500 text-gray-900 font-semibold":"text-gray-900"," group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold")},"Login")}))))),N(p.c,{appear:!0,show:n,as:o.Fragment},N(p.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:r},N("div",{className:"min-h-screen px-4 text-center"},N(p.c.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},N(p.a.Overlay,{className:"fixed inset-0"})),N("span",{className:"inline-block h-screen align-middle","aria-hidden":"true"},"\u200b"),N(p.c.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},N("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},N(p.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 mb-2"},"Login"),N(S,{closeModal:r})))))))}var P=a.a.createElement;function D(){var e=Object(o.useState)(!1),t=e[0],n=e[1],a=Object(h.useRouter)();return P("div",null,P("nav",{className:"bg-blue-400"},P("div",{className:"mx-auto px-4 sm:px-6 lg:px-8"},P("div",{className:"flex items-center justify-between h-16"},P("div",{className:"flex items-center"},P("div",{className:"flex-shrink-0"},P(b,null)),P("div",{className:"hidden md:block"},P("div",{className:"ml-10 flex items-baseline space-x-4"},P(m.a,{href:"/"},P("a",{className:"/"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"},"Home")),P(m.a,{href:"/coran"},P("a",{className:"/coran"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"},"Coran")),P(m.a,{href:"/kuningan"},P("a",{className:"/kuningan"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"},"Kuningan")),P(m.a,{href:"/sambungan"},P("a",{className:"/sambungan"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"},"Sambungan")),P(m.a,{href:"/about"},P("a",{className:"/about"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"},"About")),P(m.a,{href:"/policy"},P("a",{className:"/policy"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"},"Policy"))))),P("div",{className:"flex items-center"},P(E,null),P("div",{className:"-mr-2 flex md:hidden"},P("button",{onClick:function(){return n(!t)},type:"button",className:"bg-blue-500 inline-flex items-center justify-center p-1 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false"},P("span",{className:"sr-only"},"Open main menu"),P("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},P("path",t?{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}))))))),P(p.c,{show:t,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},P("div",{className:"md:hidden",id:"mobile-menu"},P("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},P(m.a,{href:"/"},P("a",{onClick:function(){return n(!t)},className:"/"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium"},"Home")),P(m.a,{href:"/coran"},P("a",{onClick:function(){return n(!t)},className:"/coran"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium"},"Coran")),P(m.a,{href:"/kuningan"},P("a",{onClick:function(){return n(!t)},className:"/kuningan"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium"},"Kuningan")),P(m.a,{href:"/sambungan"},P("a",{onClick:function(){return n(!t)},className:"/sambungan"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium"},"Sambungan")),P(m.a,{href:"/about"},P("a",{onClick:function(){return n(!t)},className:"/about"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium"},"About")),P(m.a,{href:"/policy"},P("a",{onClick:function(){return n(!t)},className:"/policy"==a.pathname?"selected bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium":"hover:bg-blue-500 text-white px-3 py-2 block rounded-md text-sm font-medium"},"Policy")))))))}var F=n("g4pe"),L=n.n(F),I=a.a.createElement;function T(e){var t=e.children,n=Object(o.useContext)(w.a);return Object(o.useEffect)((function(){localStorage.getItem("token")&&Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.tbdamai.net/frontend","/verifyToken"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return t=e.sent,e.next=5,t.json();case 5:"Success"==e.sent.status?n.setLogged(!0):n.setLogged(!1);case 7:case"end":return e.stop()}}),e)})))()}),[]),I(a.a.Fragment,null,I(L.a,null,I("meta",{name:"facebook-domain-verification",content:"z9wdsid8bezintv31nkcj8s6kf552r"})),I(D,null),I(u,null),t,I(d,null))}n("iOjB");var B=n("5BQM"),M=n.n(B),R=a.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps;return R(w.b,null,R(T,null,R(t,n),R(M.a,{pageId:"100258215401523",appId:"329917598722443"})))}},"5BQM":function(e,t,n){"use strict";var o,a=n("+kAY"),r=(o=a)&&o.__esModule?o:{default:o};e.exports=r.default},CojT:function(e,t,n){var o;e.exports=(o=n("q1tI"),function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(8)},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=o(n(2)),c=o(n(1)),d=o(n(5)),p=o(n(3)),f=function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e},m=function(e){function t(){var e,n,o;a(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={isSdkLoaded:!1,isProcessing:!1},o.responseApi=function(e){window.FB.api("/me",{locale:o.props.language,fields:o.props.fields},(function(t){s(t,e),o.props.callback(t)}))},o.checkLoginState=function(e){o.setStateIfMounted({isProcessing:!1}),e.authResponse?o.responseApi(e.authResponse):o.props.onFailure?o.props.onFailure({status:e.status}):o.props.callback({status:e.status})},o.checkLoginAfterRefresh=function(e){"connected"===e.status?o.checkLoginState(e):window.FB.login((function(e){return o.checkLoginState(e)}),!0)},o.click=function(e){if(o.state.isSdkLoaded&&!o.state.isProcessing&&!o.props.isDisabled){o.setState({isProcessing:!0});var t=o.props,n=t.scope,a=t.appId,r=t.onClick,i=t.returnScopes,s=t.responseType,l=t.redirectUri,u=t.disableMobileRedirect,c=t.authType,p=t.state;if("function"!=typeof r||(r(e),!e.defaultPrevented)){var f={client_id:a,redirect_uri:l,state:p,return_scopes:i,scope:n,response_type:s,auth_type:c};if(o.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,d.default)(f);else{if(!window.FB)return void(o.props.onFailure&&o.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(o.checkLoginState,{scope:n,return_scopes:i,auth_type:f.auth_type})}}}},r(o,n)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,o=t.xfbml,a=t.cookie,r=t.version,i=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+r,appId:n,xfbml:o,cookie:a}),e.setStateIfMounted({isSdkLoaded:!0}),(i||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,p.default)(e,"code")||(0,p.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,n,o){var a=t.getElementsByTagName(n)[0],r=a,i=a;t.getElementById(o)||((i=t.createElement(n)).id=o,i.src="https://connect.facebook.net/"+e+"/sdk.js",r.parentNode.insertBefore(i,r))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(u.default.Component);m.propTypes={isDisabled:c.default.bool,callback:c.default.func.isRequired,appId:c.default.string.isRequired,xfbml:c.default.bool,cookie:c.default.bool,authType:c.default.string,scope:c.default.string,state:c.default.string,responseType:c.default.string,returnScopes:c.default.bool,redirectUri:c.default.string,autoLoad:c.default.bool,disableMobileRedirect:c.default.bool,isMobile:c.default.bool,fields:c.default.string,version:c.default.string,language:c.default.string,onClick:c.default.func,onFailure:c.default.func,render:c.default.func.isRequired},m.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:f(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=m},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}},function(e,t,n){"use strict";function o(){}var a=n(7);e.exports=function(){function e(e,t,n,o,r,i){if(i!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=o(n(2)),c=o(n(1)),d=o(n(9)),p=o(n(4)),f=function(e){return["button","input","select","textarea","optgroup","option","fieldset"].indexOf((e+"").toLowerCase())>=0},m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"style",value:function(){var e=this.constructor.defaultProps.cssClass;return this.props.cssClass===e&&u.default.createElement("style",{dangerouslySetInnerHTML:{__html:d.default}})}},{key:"containerStyle",value:function(e){var t=e.isProcessing,n=e.isSdkLoaded,o=e.isDisabled,a={transition:"opacity 0.5s"};return(t||!n||o)&&(a.opacity=.6),s(a,this.props.containerStyle)}},{key:"renderOwnButton",value:function(e){var t=this.props,n=t.cssClass,o=t.size,a=t.icon,r=t.textButton,i=t.typeButton,l=t.buttonStyle,c=e.onClick,d="string"==typeof a,p={};return e.isDisabled&&f(this.props.tag)&&(p.disabled=!0),u.default.createElement("span",{style:this.containerStyle(e)},d&&u.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),u.default.createElement(this.props.tag,s({type:i,className:n+" "+o,style:l,onClick:c},p),a&&d&&u.default.createElement("i",{className:"fa "+a}),a&&!d&&a,r),this.style())}},{key:"render",value:function(){var e=this;return u.default.createElement(p.default,s({},this.props,{render:function(t){return e.renderOwnButton(t)}}))}}]),t}(u.default.Component);m.propTypes={textButton:c.default.string,typeButton:c.default.string,size:c.default.string,cssClass:c.default.string,icon:c.default.any,containerStyle:c.default.object,buttonStyle:c.default.object,tag:c.default.oneOfType([c.default.node,c.default.func])},m.defaultProps={textButton:"Login with Facebook",typeButton:"button",size:"metro",fields:"name",cssClass:"kep-login-facebook",tag:"button"},t.default=m},function(e,t,n){(t=e.exports=n(10)()).push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(o[r]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}}]))},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},iOjB:function(e,t,n){},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))}},[[0,0,1,2,3,4,5]]]);