(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{17:function(e,t,a){"use strict";var n=a(5893),r=a(5675),s=a(1163),i=(a(1664),a(7294));a(1330);t.Z=function(e){var t=e.data,a=(0,i.useState)(!1);return a[0],a[1],(0,n.jsx)(n.Fragment,{children:t.map((function(e){return(0,n.jsxs)("div",{className:"grid grid-cols-3 gap-2 shadow-lg p-1 rounded-lg border-2 border-blue-100 border-opacity-25",children:[(0,n.jsx)("div",{className:"col-span-3",children:(0,n.jsx)(r.default,{src:e.url,alt:e.prod_name+" "+e.prod_desc,height:"400",width:"400",layout:"responsive"})}),(0,n.jsx)("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2 uppercase",children:e.prod_name.replace(/-/g," ")}),(0,n.jsx)("div",{className:""}),e.prod_weight>0?(0,n.jsxs)("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2",children:["Berat: ",e.prod_weight," ",e.prod_unit_weight]}):"",e.prod_height>0?(0,n.jsxs)("div",{className:"col-span-3 textgray-900 rounded-2xl px-2",children:["Ukuran: ",e.prod_height," x ",e.prod_width," ",e.prod_unit_size]}):"",""!=e.prod_available_size?(0,n.jsxs)("div",{className:"col-span-3 textgray-900 rounded-2xl px-2",children:["Ukuran: ",e.prod_available_size.substring(0,8),"..."]}):"",(0,n.jsx)("button",{onClick:function(){return function(e,t){var a=e.toString().replace(/ /g,"_");s.default.push("/detail/".concat(a,"/"))}(e.prod_name,e.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8",children:"Lihat"})]},e.id)}))})}},6607:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(5893),r=a(7757),s=a.n(r),i=a(5861),c=a(9008),o=a(1163),d=a(17),u=a(7294),l=a(4730);function p(){var e=(0,u.useState)([]),t=e[0],a=e[1],r=(0,u.useContext)(l.x),p=(0,o.useRouter)();return(0,u.useEffect)((function(){!function(){var e=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tbdamai.net/frontend/product/besi");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,a(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=(0,i.Z)(s().mark((function e(){var t,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getIp();case 2:t=e.sent,a=r.getUrlParameter("fbclid"),n={event_name:"PageView",action_source:"website",event_source_url:"https://tbdamai.net/besi/",user_data:{client_ip_address:t,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")}},localStorage.getItem("tbEmail")&&(n.user_data.em=r.hash(localStorage.getItem("tbEmail"))),a&&(n.user_data.fbc="fb.1.".concat(Date.now(),".").concat(a)),r.conversionApi(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[p.query]),(0,n.jsxs)("div",{className:"container mx-auto p-5",children:[(0,n.jsxs)(c.default,{children:[(0,n.jsx)("meta",{name:"description",content:"Menjual berbagai macam model besi untuk pondasi, pagar, atap, rak"}),(0,n.jsx)("meta",{name:"keywords",content:"besi, rak, atap, pagar, railing, tiang, pondasi"}),(0,n.jsx)("title",{children:"TBdamai | Besi"})]}),(0,n.jsx)("div",{className:"text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5",children:"Besi"}),(0,n.jsx)("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",children:(0,n.jsx)(d.Z,{data:t})})]})}},7277:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/besi",function(){return a(6607)}])}},function(e){e.O(0,[774,888,179],(function(){return t=7277,e(e.s=t);var t}));var t=e.O();_N_E=t}]);