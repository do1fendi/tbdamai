_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}},A2So:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),a=n("Aiso"),o=n.n(a),s=n("20a2"),c=n.n(s),d=(n("YFqc"),n("gPam"),r.a.createElement);t.a=function(e){var t=e.data,n=Object(i.useState)(!1);return n[0],n[1],d(r.a.Fragment,null,t.map((function(e){return d("div",{key:e.id,className:"grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg border-2 border-blue-100 border-opacity-25"},d("div",{className:"col-span-3"},d(o.a,{src:e.url,height:"400",width:"400",layout:"responsive"})),d("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2"},e.prod_name),d("div",{className:""}),e.prod_weight>0?d("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2"},"Berat: ",e.prod_weight," ",e.prod_unit_weight):"",e.prod_height>0?d("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",e.prod_height," x ",e.prod_width," ",e.prod_unit_size):"",""!=e.prod_available_size?d("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",e.prod_available_size.substring(0,8),"..."):"",d("button",{onClick:function(){return function(e,t){var n=e.toString().replace(/ /g,"_");c.a.push("/detail/".concat(n,"/?id=").concat(t))}(e.prod_name,e.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8"},"Lihat"))})))}},Aiso:function(e,t,n){e.exports=n("dQHF")},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n("o0o1"),r=n.n(i),a=n("HaE+"),o=n("q1tI"),s=n.n(o),c=n("g4pe"),d=n.n(c),l=n("YFqc"),u=n.n(l),f=n("rePB"),p=s.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object(o.forwardRef)((function(e,t){Object(o.useImperativeHandle)(t,(function(){return{runApi:function(e){n(e)}}}));var n=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ipify.org/?format=json",{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:i(e.sent.ip,t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function i(e,t){Object(a.a)(r.a.mark((function n(){var i,a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=JSON.stringify({data:[b({action_source:"website",user_data:{client_ip_address:e,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")}},t)],test_event_code:"TEST8782"}),n.next=3,fetch("https://api.tbdamai.net/conversionApi/",{method:"POST",headers:{"Content-Type":"application/json"},body:i});case 3:return a=n.sent,n.next=6,a;case 6:n.sent;case 7:case"end":return n.stop()}}),n)})))()}return p("div",null)})),m=n("A2So"),v=s.a.createElement;function w(){var e=Object(o.useState)([]),t=e[0],n=e[1],i=Object(o.useRef)();return Object(o.useEffect)((function(){i.current&&i.current.runApi({event_name:"PageView"}),function(){var e=Object(a.a)(r.a.mark((function e(){var t,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tbdamai.net/frontend/random");case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,n(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),v("div",{className:"lg:container p-2"},v(h,{ref:i}),v(d.a,null,v("title",null,"TBDamai | Home"),v("link",{rel:"icon",href:"/tbdamai/favicon.ico"})),v("div",{className:"mt-5 mb-2 bg-red-500 text-white lg:text-xl text-lg w-auto inline-block p-1 px-2"},"Produk Spesial"),v("div",{className:"flex overflow-x-scroll pb-10 hide-scroll-bar"},v("div",{className:"flex flex-nowrap lg:flex-warp gap-2"},v("div",{className:"inline-block"},v("div",{className:"w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-tombak-pattern bg-contain bg-center bg-no-repeat"},v(u.a,{href:"/coran/tombak"},v("a",null,v("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl"},"Tombak"))))),v("div",{className:"inline-block"},v("div",{className:"w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-hewan-pattern bg-contain bg-center bg-no-repeat"},v(u.a,{href:"/coran/hewan"},v("a",null,v("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl"},"Hewan"))))),v("div",{className:"inline-block"},v("div",{className:"w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-lainnya-pattern bg-contain bg-center bg-no-repeat"},v(u.a,{href:"/coran/lainnya"},v("a",null,v("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl size-sm"},"Lainnya"))))))),v("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto"},v(m.a,{data:t})))}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var i=n("J4zp"),r=n("RIqP"),a=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,s=void 0!==a&&a,u=e.priority,p=void 0!==u&&u,g=e.loading,h=e.className,m=e.quality,v=e.width,_=e.height,j=e.objectFit,A=e.objectPosition,O=e.loader,k=void 0===O?y:O,S=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),z=n?"responsive":"intrinsic",N=!1;"unsized"in S?(N=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(z=S.layout),delete S.layout);0;var E=!p&&("lazy"===g||"undefined"===typeof g);t&&t.startsWith("data:")&&(s=!0,E=!1);var P,q,D,R=(0,f.useIntersection)({rootMargin:"200px",disabled:!E}),I=i(R,2),B=I[0],H=I[1],L=!E||H,T=x(v),F=x(_),U=x(m),W={visibility:L?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:A};if("undefined"!==typeof T&&"undefined"!==typeof F&&"fill"!==z){var M=F/T,V=isNaN(M)?"100%":"".concat(100*M,"%");"responsive"===z?(P={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={display:"block",boxSizing:"border-box",paddingTop:V}):"intrinsic"===z?(P={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={boxSizing:"border-box",display:"block",maxWidth:"100%"},D='<svg width="'.concat(T,'" height="').concat(F,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===z&&(P={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:T,height:F})}else"undefined"===typeof T&&"undefined"===typeof F&&"fill"===z&&(P={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var C={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};L&&(C=function(e){var t=e.src,n=e.unoptimized,i=e.layout,a=e.width,o=e.quality,s=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var d=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var i=r(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(i.length){var a=.01*Math.min.apply(Math,r(i));return{widths:w.filter((function(e){return e>=b[0]*a})),kind:"w"}}return{widths:w,kind:"w"}}if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:b,kind:"w"};return{widths:r(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(a,i,s),l=d.widths,u=d.kind,f=l.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:l.map((function(e,n){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:c({src:t,quality:o,width:l[f]})}}({src:t,unoptimized:s,layout:z,width:T,quality:U,sizes:n,loader:k}));N&&(P=void 0,q=void 0,W=void 0);return c.default.createElement("div",{style:P},q?c.default.createElement("div",{style:q},D?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(D))}):null):null,c.default.createElement("img",Object.assign({},S,C,{decoding:"async",className:h,ref:B,style:W})),p?c.default.createElement(d.default,null,c.default.createElement("link",{key:"__nimg-"+C.src+C.srcSet+C.sizes,rel:"preload",as:"image",href:C.srcSet?void 0:C.src,imagesrcset:C.srcSet,imagesizes:C.sizes})):null)};var o=a(n("8OQS")),s=a(n("pVnL")),c=a(n("q1tI")),d=a(n("8Kt/")),l=n("dEHY"),u=n("UWYU"),f=n("vNVm");var p=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,a=["auto=format","fit=max","w="+i],o="";r&&a.push("q="+r);a.length&&(o="?"+a.join("&"));return"".concat(t).concat(_(n)).concat(o)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(_(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(_(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}]]),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||u.imageConfigDefault,b=g.deviceSizes,h=g.imageSizes,m=g.loader,v=g.path,w=(g.domains,[].concat(r(b),r(h)));function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function y(e){var t=p.get(m);if(t)return t((0,s.default)({root:v},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(m))}function _(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n},rePB:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);