_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),c=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,s=l.length;i<s;i++){var f=l[i];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var d=o.props[f],p=r[f]||new Set;"name"===f&&u||!p.has(d)?(p.add(d),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},Dsvi:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("o0o1"),a=n.n(o),u=n("HaE+"),c=n("q1tI"),i=n.n(c),s=n("QqKt"),f=n("20a2"),d=n.n(f),l=n("g4pe"),p=n.n(l),m=i.a.createElement;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useContext)(s.a),o=Object(c.useState)({name:"",email:"",password:""}),i=o[0],f=o[1];Object(c.useEffect)((function(){console.log(r.logged),r.logged&&d.a.push("/")}));var l=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};return m("div",{className:"flex justify-center items-center h-screen "},m(p.a,null,m("title",null,"TBDamai | Register")),m("div",{className:"text-center -mt-40"},m("div",{className:"text-red-600 text-4xl mb-20 "},"Register"),m("input",{ref:e,value:i.name,onChange:function(e){return f(v(v({},i),{},{name:e.target.value}))},type:"text",className:"w-full border border-red-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500",placeholder:"Name"}),m("input",{ref:t,value:i.email,onChange:function(e){return f(v(v({},i),{},{email:e.target.value}))},type:"email",className:"w-full border border-red-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500",placeholder:"Email"}),m("input",{ref:n,value:i.password,onChange:function(e){return f(v(v({},i),{},{password:e.target.value}))},type:"password",className:"w-full border border-red-500 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500",placeholder:"Password"}),m("button",{onClick:function(){i.name?i.email&&l(i.email)?i.password?Object(u.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.tbdamai.net/frontend","/register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),"Success"==n.status&&(localStorage.setItem("token",n.token),r.setLogged(!0));case 8:case"end":return e.stop()}}),e)})))():n.current.focus():t.current.focus():e.current.focus()},className:"mb-2 bg-red-700 hover:bg-red-900 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none"},"Register")))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,u){try{var c=e[a](u),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var u=e.apply(t,n);function c(e){r(u,o,a,c,i,"next",e)}function i(e){r(u,o,a,c,i,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return o}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},QqKt:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),o=n.n(r).a.createElement,a=Object(r.createContext)();t.b=function(e){var t=Object(r.useState)(!1),n=t[0],u=t[1];return o(a.Provider,{value:{logged:n,setLogged:u}},e.children)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),c=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=function(e){u(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},"c05+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n("Dsvi")}])},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["c05+",0,1,2,3]]]);