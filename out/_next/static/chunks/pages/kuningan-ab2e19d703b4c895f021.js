_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"8OQS":function(t,e){t.exports=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}},A2So:function(t,e,i){"use strict";var n=i("q1tI"),o=i.n(n),r=i("Aiso"),a=i.n(r),d=i("20a2"),s=i.n(d),c=(i("YFqc"),i("gPam"),o.a.createElement);e.a=function(t){var e=t.data,i=Object(n.useState)(!1);return i[0],i[1],c(o.a.Fragment,null,e.map((function(t){return c("div",{key:t.id,className:"grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg border-2 border-blue-100 border-opacity-25"},c("div",{className:"col-span-3"},c(a.a,{src:t.url,height:"400",width:"400",layout:"responsive"})),c("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2"},t.prod_name),c("div",{className:""}),t.prod_weight>0?c("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2"},"Berat: ",t.prod_weight," ",t.prod_unit_weight):"",t.prod_height>0?c("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",t.prod_height," x ",t.prod_width," ",t.prod_unit_size):"",""!=t.prod_available_size?c("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",t.prod_available_size.substring(0,8),"..."):"",c("button",{onClick:function(){return function(t,e){var i=t.toString().replace(/ /g,"_");s.a.push("/detail/".concat(i,"/"))}(t.prod_name,t.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8"},"Lihat"))})))}},Aiso:function(t,e,i){t.exports=i("dQHF")},"HaE+":function(t,e,i){"use strict";function n(t,e,i,n,o,r,a){try{var d=t[r](a),s=d.value}catch(c){return void i(c)}d.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(o,r){var a=t.apply(e,i);function d(t){n(a,o,r,d,s,"next",t)}function s(t){n(a,o,r,d,s,"throw",t)}d(void 0)}))}}i.d(e,"a",(function(){return o}))},UWYU:function(t,e,i){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},"bSh/":function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kuningan",function(){return i("wvfG")}])},dEHY:function(t,e,i){"use strict";e.__esModule=!0,e.toBase64=function(t){return window.btoa(t)}},dQHF:function(t,e,i){"use strict";var n=i("J4zp"),o=i("RIqP"),r=i("TqRt");e.__esModule=!0,e.default=function(t){var e=t.src,i=t.sizes,r=t.unoptimized,d=void 0!==r&&r,l=t.priority,p=void 0!==l&&l,g=t.loading,m=t.className,v=t.quality,b=t.width,_=t.height,A=t.objectFit,z=t.objectPosition,S=t.loader,k=void 0===S?y:S,E=(0,a.default)(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),N=i?"responsive":"intrinsic",j=!1;"unsized"in E?(j=Boolean(E.unsized),delete E.unsized):"layout"in E&&(E.layout&&(N=E.layout),delete E.layout);0;var q=!p&&("lazy"===g||"undefined"===typeof g);e&&e.startsWith("data:")&&(d=!0,q=!1);var O,I,P,D=(0,f.useIntersection)({rootMargin:"200px",disabled:!q}),L=n(D,2),H=L[0],R=L[1],B=!q||R,U=x(b),W=x(_),F=x(v),M={visibility:B?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:z};if("undefined"!==typeof U&&"undefined"!==typeof W&&"fill"!==N){var V=W/U,C=isNaN(V)?"100%":"".concat(100*V,"%");"responsive"===N?(O={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={display:"block",boxSizing:"border-box",paddingTop:C}):"intrinsic"===N?(O={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={boxSizing:"border-box",display:"block",maxWidth:"100%"},P='<svg width="'.concat(U,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===N&&(O={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:U,height:W})}else"undefined"===typeof U&&"undefined"===typeof W&&"fill"===N&&(O={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Q={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};B&&(Q=function(t){var e=t.src,i=t.unoptimized,n=t.layout,r=t.width,a=t.quality,d=t.sizes,s=t.loader;if(i)return{src:e,srcSet:void 0,sizes:void 0};var c=function(t,e,i){if(i&&("fill"===e||"responsive"===e)){var n=o(i.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(t){return parseInt(t[2])}));if(n.length){var r=.01*Math.min.apply(Math,o(n));return{widths:w.filter((function(t){return t>=h[0]*r})),kind:"w"}}return{widths:w,kind:"w"}}if("number"!==typeof t||"fill"===e||"responsive"===e)return{widths:h,kind:"w"};return{widths:o(new Set([t,2*t].map((function(t){return w.find((function(e){return e>=t}))||w[w.length-1]})))),kind:"x"}}(r,n,d),u=c.widths,l=c.kind,f=u.length-1;return{sizes:d||"w"!==l?d:"100vw",srcSet:u.map((function(t,i){return"".concat(s({src:e,quality:a,width:t})," ").concat("w"===l?t:i+1).concat(l)})).join(", "),src:s({src:e,quality:a,width:u[f]})}}({src:e,unoptimized:d,layout:N,width:U,quality:F,sizes:i,loader:k}));j&&(O=void 0,I=void 0,M=void 0);return s.default.createElement("div",{style:O},I?s.default.createElement("div",{style:I},P?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(P))}):null):null,s.default.createElement("img",Object.assign({},E,Q,{decoding:"async",className:m,ref:H,style:M})),p?s.default.createElement(c.default,null,s.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imagesrcset:Q.srcSet,imagesizes:Q.sizes})):null)};var a=r(i("8OQS")),d=r(i("pVnL")),s=r(i("q1tI")),c=r(i("8Kt/")),u=i("dEHY"),l=i("UWYU"),f=i("vNVm");var p=new Map([["imgix",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality,r=["auto=format","fit=max","w="+n],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(e).concat(_(i)).concat(a)}],["cloudinary",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality,r=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(e).concat(r).concat(_(i))}],["akamai",function(t){var e=t.root,i=t.src,n=t.width;return"".concat(e).concat(_(i),"?imwidth=").concat(n)}],["default",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}]]),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||l.imageConfigDefault,h=g.deviceSizes,m=g.imageSizes,v=g.loader,b=g.path,w=(g.domains,[].concat(o(h),o(m)));function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function y(t){var e=p.get(v);if(e)return e((0,d.default)({root:b},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(v))}function _(t){return"/"===t[0]?t.slice(1):t}h.sort((function(t,e){return t-e})),w.sort((function(t,e){return t-e}))},pVnL:function(t,e){function i(){return t.exports=i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i.apply(this,arguments)}t.exports=i},wvfG:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return f}));var n=i("o0o1"),o=i.n(n),r=i("HaE+"),a=i("q1tI"),d=i.n(a),s=i("g4pe"),c=i.n(s),u=i("A2So"),l=d.a.createElement;function f(){var t=Object(a.useState)([]),e=t[0],i=t[1];return Object(a.useEffect)((function(){!function(){var t=Object(r.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.tbdamai.net/frontend/product/kuningan");case 2:return e=t.sent,t.next=5,e.json();case 5:e=t.sent,i(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),l("div",{className:"container mx-auto p-5"},l(c.a,null,l("title",null,"Kuningan")),l("div",{className:"text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5"},"Kuningan"),l("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto"},l(u.a,{data:e})))}}},[["bSh/",0,1,2,3]]]);