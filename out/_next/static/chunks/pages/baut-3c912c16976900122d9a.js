_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"8OQS":function(t,e){t.exports=function(t,e){if(null==t)return{};var i,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}},"9zdx":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return m}));var n=i("o0o1"),a=i.n(n),o=i("HaE+"),r=i("q1tI"),s=i.n(r),c=i("g4pe"),d=i.n(c),u=i("20a2"),l=i("A2So"),p=i("QqKt"),f=s.a.createElement;function m(){var t=Object(r.useState)([]),e=t[0],i=t[1],n=Object(r.useContext)(p.a),s=Object(u.useRouter)();return Object(r.useEffect)((function(){!function(){var t=Object(o.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.tbdamai.net/frontend/product/baut");case 2:return e=t.sent,t.next=5,e.json();case 5:e=t.sent,i(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){var t=Object(o.a)(a.a.mark((function t(){var e,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getIp();case 2:e=t.sent,i={event_name:"PageView",action_source:"website",event_source_url:"https://tbdamai.net/baut/",user_data:{client_ip_address:e,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")}},localStorage.getItem("tbEmail")&&(i.user_data.em=n.hash(localStorage.getItem("tbEmail"))),s.query.fbclid&&(i.user_data.fbc="fb.1.".concat(Date.now(),".").concat(s.query.fbclid)),n.conversionApi(i);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[s.query]),f("div",{className:"container mx-auto p-5"},f(d.a,null,f("meta",{name:"description",content:"Menjual berbagai macam model baut untuk asesoris"}),f("meta",{name:"keywords",content:"baut, asesoris, r pion, pentol, belimbing"}),f("title",null,"TBdamai | Baut")),f("div",{className:"text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5"},"Baut"),f("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto"},f(l.a,{data:e})))}},A2So:function(t,e,i){"use strict";var n=i("q1tI"),a=i.n(n),o=i("Aiso"),r=i.n(o),s=i("20a2"),c=i.n(s),d=(i("YFqc"),i("gPam"),a.a.createElement);e.a=function(t){var e=t.data,i=Object(n.useState)(!1);return i[0],i[1],d(a.a.Fragment,null,e.map((function(t){return d("div",{key:t.id,className:"grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg border-2 border-blue-100 border-opacity-25"},d("div",{className:"col-span-3"},d(r.a,{src:t.url,alt:t.prod_name+" "+t.prod_desc,height:"400",width:"400",layout:"responsive"})),d("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2"},t.prod_name),d("div",{className:""}),t.prod_weight>0?d("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2"},"Berat: ",t.prod_weight," ",t.prod_unit_weight):"",t.prod_height>0?d("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",t.prod_height," x ",t.prod_width," ",t.prod_unit_size):"",""!=t.prod_available_size?d("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",t.prod_available_size.substring(0,8),"..."):"",d("button",{onClick:function(){return function(t,e){var i=t.toString().replace(/ /g,"_");c.a.push("/detail/".concat(i,"/"))}(t.prod_name,t.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8"},"Lihat"))})))}},Aiso:function(t,e,i){t.exports=i("dQHF")},UWYU:function(t,e,i){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},dEHY:function(t,e,i){"use strict";e.__esModule=!0,e.toBase64=function(t){return window.btoa(t)}},dQHF:function(t,e,i){"use strict";var n=i("J4zp"),a=i("RIqP"),o=i("TqRt");e.__esModule=!0,e.default=function(t){var e=t.src,i=t.sizes,o=t.unoptimized,s=void 0!==o&&o,l=t.priority,f=void 0!==l&&l,m=t.loading,b=t.className,h=t.quality,v=t.width,_=t.height,A=t.objectFit,z=t.objectPosition,S=t.loader,k=void 0===S?y:S,E=(0,r.default)(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),j=i?"responsive":"intrinsic",N=!1;"unsized"in E?(N=Boolean(E.unsized),delete E.unsized):"layout"in E&&(E.layout&&(j=E.layout),delete E.layout);0;var q=!f&&("lazy"===m||"undefined"===typeof m);e&&e.startsWith("data:")&&(s=!0,q=!1);var O,I,B,D=(0,p.useIntersection)({rootMargin:"200px",disabled:!q}),L=n(D,2),P=L[0],R=L[1],V=!q||R,H=x(v),M=x(_),U=x(h),W={visibility:V?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:z};if("undefined"!==typeof H&&"undefined"!==typeof M&&"fill"!==j){var F=M/H,C=isNaN(F)?"100%":"".concat(100*F,"%");"responsive"===j?(O={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={display:"block",boxSizing:"border-box",paddingTop:C}):"intrinsic"===j?(O={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={boxSizing:"border-box",display:"block",maxWidth:"100%"},B='<svg width="'.concat(H,'" height="').concat(M,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===j&&(O={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:H,height:M})}else"undefined"===typeof H&&"undefined"===typeof M&&"fill"===j&&(O={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Q={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};V&&(Q=function(t){var e=t.src,i=t.unoptimized,n=t.layout,o=t.width,r=t.quality,s=t.sizes,c=t.loader;if(i)return{src:e,srcSet:void 0,sizes:void 0};var d=function(t,e,i){if(i&&("fill"===e||"responsive"===e)){var n=a(i.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(t){return parseInt(t[2])}));if(n.length){var o=.01*Math.min.apply(Math,a(n));return{widths:w.filter((function(t){return t>=g[0]*o})),kind:"w"}}return{widths:w,kind:"w"}}if("number"!==typeof t||"fill"===e||"responsive"===e)return{widths:g,kind:"w"};return{widths:a(new Set([t,2*t].map((function(t){return w.find((function(e){return e>=t}))||w[w.length-1]})))),kind:"x"}}(o,n,s),u=d.widths,l=d.kind,p=u.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:u.map((function(t,i){return"".concat(c({src:e,quality:r,width:t})," ").concat("w"===l?t:i+1).concat(l)})).join(", "),src:c({src:e,quality:r,width:u[p]})}}({src:e,unoptimized:s,layout:j,width:H,quality:U,sizes:i,loader:k}));N&&(O=void 0,I=void 0,W=void 0);return c.default.createElement("div",{style:O},I?c.default.createElement("div",{style:I},B?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(B))}):null):null,c.default.createElement("img",Object.assign({},E,Q,{decoding:"async",className:b,ref:P,style:W})),f?c.default.createElement(d.default,null,c.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imagesrcset:Q.srcSet,imagesizes:Q.sizes})):null)};var r=o(i("8OQS")),s=o(i("pVnL")),c=o(i("q1tI")),d=o(i("8Kt/")),u=i("dEHY"),l=i("UWYU"),p=i("vNVm");var f=new Map([["imgix",function(t){var e=t.root,i=t.src,n=t.width,a=t.quality,o=["auto=format","fit=max","w="+n],r="";a&&o.push("q="+a);o.length&&(r="?"+o.join("&"));return"".concat(e).concat(_(i)).concat(r)}],["cloudinary",function(t){var e=t.root,i=t.src,n=t.width,a=t.quality,o=["f_auto","c_limit","w_"+n,"q_"+(a||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(_(i))}],["akamai",function(t){var e=t.root,i=t.src,n=t.width;return"".concat(e).concat(_(i),"?imwidth=").concat(n)}],["default",function(t){var e=t.root,i=t.src,n=t.width,a=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||l.imageConfigDefault,g=m.deviceSizes,b=m.imageSizes,h=m.loader,v=m.path,w=(m.domains,[].concat(a(g),a(b)));function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function y(t){var e=f.get(h);if(e)return e((0,s.default)({root:v},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(h))}function _(t){return"/"===t[0]?t.slice(1):t}g.sort((function(t,e){return t-e})),w.sort((function(t,e){return t-e}))},emVN:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/baut",function(){return i("9zdx")}])},pVnL:function(t,e){function i(){return t.exports=i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i.apply(this,arguments)}t.exports=i}},[["emVN",0,1,2,3,4,5]]]);