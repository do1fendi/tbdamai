_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),c=n("q1tI"),i=n.n(c),s=n("g4pe"),l=n.n(s),u=n("YFqc"),f=n.n(u),d=n("rePB"),p=i.a.createElement;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=Object(c.forwardRef)((function(e,t){Object(c.useImperativeHandle)(t,(function(){return{runApi:function(e){n(e)}}}));var n=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ipify.org/?format=json",{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:r(e.sent.ip,t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function r(e,t){Object(o.a)(a.a.mark((function n(){var r,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=JSON.stringify({data:[h({action_source:"website",user_data:{client_ip_address:e,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")}},t)],test_event_code:"TEST8782"}),n.next=3,fetch("https://api.tbdamai.net/conversionApi/",{method:"POST",headers:{"Content-Type":"application/json"},body:r});case 3:return o=n.sent,n.next=6,o;case 6:n.sent;case 7:case"end":return n.stop()}}),n)})))()}return p("div",null)})),m=n("A2So"),w=i.a.createElement;function g(){var e=Object(c.useState)([]),t=e[0],n=e[1],r=Object(c.useRef)();return Object(c.useEffect)((function(){r.current&&r.current.runApi({event_name:"PageView"}),function(){var e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tbdamai.net/frontend/random");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),w("div",{className:"lg:container"},w(v,{ref:r}),w(l.a,null,w("title",null,"TBDamai | Home"),w("link",{rel:"icon",href:"/tbdamai/favicon.ico"})),w("div",{className:"mt-5 mb-2 bg-red-500 text-white lg:text-xl text-lg w-auto inline-block ml-5 p-1 px-2"},"Produk Spesial"),w("div",{className:"flex overflow-x-scroll pb-10 hide-scroll-bar"},w("div",{className:"flex flex-nowrap lg:flex-warp pl-2"},w("div",{className:"inline-block px-3"},w("div",{className:"w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-tombak-pattern bg-contain bg-center bg-no-repeat"},w(f.a,{href:"/coran/tombak"},w("a",null,w("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl"},"Tombak"))))),w("div",{className:"inline-block px-3"},w("div",{className:"w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-hewan-pattern bg-contain bg-center bg-no-repeat"},w(f.a,{href:"/coran/hewan"},w("a",null,w("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl"},"Hewan"))))),w("div",{className:"inline-block px-3"},w("div",{className:"w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-lainnya-pattern bg-contain bg-center bg-no-repeat"},w(f.a,{href:"/coran/lainnya"},w("a",null,w("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl size-sm"},"Lainnya"))))))),w("div",{className:"p-5 grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto"},w(m.a,{data:t})))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,b=e.children,h=e.replace,v=e.shallow,m=e.scroll,w=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var g=o.Children.only(b),x=g&&"object"===typeof g&&g.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),O=r(y,2),j=O[0],_=O[1],N=o.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);(0,o.useEffect)((function(){var e=_&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof w?w:n&&n.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(n,d,p,{locale:r})}),[p,d,_,w,t,n]);var E={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,h,v,m,w)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof w?w:n&&n.locale,P=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);E.href=P||(0,c.addBasePath)((0,c.addLocale)(p,k,n&&n.defaultLocale))}return o.default.cloneElement(g,E)};t.default=f},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,4]]]);