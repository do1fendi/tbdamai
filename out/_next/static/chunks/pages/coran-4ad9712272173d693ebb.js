_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/WQY":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var i=n("o0o1"),r=n.n(i),o=n("HaE+"),a=n("q1tI"),s=n.n(a),c=n("g4pe"),d=n.n(c),u=n("A2So"),l=n("QqKt"),f=s.a.createElement;function p(){var t=Object(a.useState)([]),e=t[0],n=t[1],i=Object(a.useContext)(l.a);return Object(a.useEffect)((function(){!function(){var t=Object(o.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.tbdamai.net/frontend/product/coran");case 2:return e=t.sent,t.next=5,e.json();case 5:e=t.sent,n(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){var t=Object(o.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.getIp();case 2:e=t.sent,i.conversionApi({event_name:"PageView",action_source:"website",event_source_url:"https://tbdamai.net/coran/",user_data:{client_ip_address:e,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")}});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),f("div",{className:"container mx-auto p-5"},f(d.a,null,f("title",null,"Coran")),f("div",{className:"text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5"},"Tombak"),f("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto"},f(u.a,{data:e.filter((function(t){return"tombak"==t.prod_label1}))})),f("div",{className:"text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-10 mb-5"},"Hewan"),f("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto"},f(u.a,{data:e.filter((function(t){return"hewan"==t.prod_label1}))})),f("div",{className:"text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-10 mb-5"},"Lain-lain"),f("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto"},f(u.a,{data:e.filter((function(t){return"hewan"!=t.prod_label1&&"tombak"!=t.prod_label1}))})))}},"8OQS":function(t,e){t.exports=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}},A2So:function(t,e,n){"use strict";var i=n("q1tI"),r=n.n(i),o=n("Aiso"),a=n.n(o),s=n("20a2"),c=n.n(s),d=(n("YFqc"),n("gPam"),r.a.createElement);e.a=function(t){var e=t.data,n=Object(i.useState)(!1);return n[0],n[1],d(r.a.Fragment,null,e.map((function(t){return d("div",{key:t.id,className:"grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg border-2 border-blue-100 border-opacity-25"},d("div",{className:"col-span-3"},d(a.a,{src:t.url,height:"400",width:"400",layout:"responsive"})),d("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2"},t.prod_name),d("div",{className:""}),t.prod_weight>0?d("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2"},"Berat: ",t.prod_weight," ",t.prod_unit_weight):"",t.prod_height>0?d("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",t.prod_height," x ",t.prod_width," ",t.prod_unit_size):"",""!=t.prod_available_size?d("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",t.prod_available_size.substring(0,8),"..."):"",d("button",{onClick:function(){return function(t,e){var n=t.toString().replace(/ /g,"_");c.a.push("/detail/".concat(n,"/"))}(t.prod_name,t.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8"},"Lihat"))})))}},Aiso:function(t,e,n){t.exports=n("dQHF")},"HaE+":function(t,e,n){"use strict";function i(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(d){return void n(d)}s.done?e(c):Promise.resolve(c).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return r}))},QqKt:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("o0o1"),r=n.n(i),o=n("HaE+"),a=n("q1tI"),s=n.n(a).a.createElement,c=Object(a.createContext)();e.b=function(t){var e=Object(a.useState)(!1),n=e[0],i=e[1],d=function(){var t=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.ipify.org/?format=json",{method:"GET"});case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.ip);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(o.a)(r.a.mark((function t(e){var n,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify({data:[e],test_event_code:"TEST78447"}),t.next=3,fetch("https://api.tbdamai.net/conversionApi/",{method:"POST",headers:{"Content-Type":"application/json"},body:n});case 3:return i=t.sent,t.next=6,i;case 6:t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s(c.Provider,{value:{logged:n,setLogged:i,getIp:d,conversionApi:u}},t.children)}},UWYU:function(t,e,n){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},dEHY:function(t,e,n){"use strict";e.__esModule=!0,e.toBase64=function(t){return window.btoa(t)}},dQHF:function(t,e,n){"use strict";var i=n("J4zp"),r=n("RIqP"),o=n("TqRt");e.__esModule=!0,e.default=function(t){var e=t.src,n=t.sizes,o=t.unoptimized,s=void 0!==o&&o,l=t.priority,p=void 0!==l&&l,g=t.loading,h=t.className,v=t.quality,b=t.width,_=t.height,A=t.objectFit,z=t.objectPosition,S=t.loader,k=void 0===S?y:S,j=(0,a.default)(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),E=n?"responsive":"intrinsic",N=!1;"unsized"in j?(N=Boolean(j.unsized),delete j.unsized):"layout"in j&&(j.layout&&(E=j.layout),delete j.layout);0;var O=!p&&("lazy"===g||"undefined"===typeof g);e&&e.startsWith("data:")&&(s=!0,O=!1);var q,I,P,L=(0,f.useIntersection)({rootMargin:"200px",disabled:!O}),H=i(L,2),D=H[0],T=H[1],W=!O||T,C=x(b),Q=x(_),R=x(v),B={visibility:W?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:z};if("undefined"!==typeof C&&"undefined"!==typeof Q&&"fill"!==E){var U=Q/C,F=isNaN(U)?"100%":"".concat(100*U,"%");"responsive"===E?(q={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={display:"block",boxSizing:"border-box",paddingTop:F}):"intrinsic"===E?(q={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={boxSizing:"border-box",display:"block",maxWidth:"100%"},P='<svg width="'.concat(C,'" height="').concat(Q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===E&&(q={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:C,height:Q})}else"undefined"===typeof C&&"undefined"===typeof Q&&"fill"===E&&(q={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var M={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};W&&(M=function(t){var e=t.src,n=t.unoptimized,i=t.layout,o=t.width,a=t.quality,s=t.sizes,c=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var d=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){var i=r(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(t){return parseInt(t[2])}));if(i.length){var o=.01*Math.min.apply(Math,r(i));return{widths:w.filter((function(t){return t>=m[0]*o})),kind:"w"}}return{widths:w,kind:"w"}}if("number"!==typeof t||"fill"===e||"responsive"===e)return{widths:m,kind:"w"};return{widths:r(new Set([t,2*t].map((function(t){return w.find((function(e){return e>=t}))||w[w.length-1]})))),kind:"x"}}(o,i,s),u=d.widths,l=d.kind,f=u.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:u.map((function(t,n){return"".concat(c({src:e,quality:a,width:t})," ").concat("w"===l?t:n+1).concat(l)})).join(", "),src:c({src:e,quality:a,width:u[f]})}}({src:e,unoptimized:s,layout:E,width:C,quality:R,sizes:n,loader:k}));N&&(q=void 0,I=void 0,B=void 0);return c.default.createElement("div",{style:q},I?c.default.createElement("div",{style:I},P?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(P))}):null):null,c.default.createElement("img",Object.assign({},j,M,{decoding:"async",className:h,ref:D,style:B})),p?c.default.createElement(d.default,null,c.default.createElement("link",{key:"__nimg-"+M.src+M.srcSet+M.sizes,rel:"preload",as:"image",href:M.srcSet?void 0:M.src,imagesrcset:M.srcSet,imagesizes:M.sizes})):null)};var a=o(n("8OQS")),s=o(n("pVnL")),c=o(n("q1tI")),d=o(n("8Kt/")),u=n("dEHY"),l=n("UWYU"),f=n("vNVm");var p=new Map([["imgix",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality,o=["auto=format","fit=max","w="+i],a="";r&&o.push("q="+r);o.length&&(a="?"+o.join("&"));return"".concat(e).concat(_(n)).concat(a)}],["cloudinary",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(_(n))}],["akamai",function(t){var e=t.root,n=t.src,i=t.width;return"".concat(e).concat(_(n),"?imwidth=").concat(i)}],["default",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}]]),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||l.imageConfigDefault,m=g.deviceSizes,h=g.imageSizes,v=g.loader,b=g.path,w=(g.domains,[].concat(r(m),r(h)));function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function y(t){var e=p.get(v);if(e)return e((0,s.default)({root:b},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(v))}function _(t){return"/"===t[0]?t.slice(1):t}m.sort((function(t,e){return t-e})),w.sort((function(t,e){return t-e}))},pVnL:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n.apply(this,arguments)}t.exports=n},vNed:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coran",function(){return n("/WQY")}])}},[["vNed",0,1,2,3]]]);