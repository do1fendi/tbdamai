(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{17:function(e,t,n){"use strict";var r=n(5893),a=n(5675),s=n(1163),i=(n(1664),n(7294));n(1330);t.Z=function(e){var t=e.data,n=(0,i.useState)(!1);return n[0],n[1],(0,r.jsx)(r.Fragment,{children:t.map((function(e){return(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-2 shadow-lg p-1 rounded-lg border-2 border-blue-100 border-opacity-25",children:[(0,r.jsx)("div",{className:"col-span-3",children:(0,r.jsx)(a.default,{src:e.url,alt:e.prod_name+" "+e.prod_desc,height:"400",width:"400",layout:"responsive"})}),(0,r.jsx)("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2 uppercase",children:e.prod_name.replace(/-/g," ")}),(0,r.jsx)("div",{className:""}),e.prod_weight>0?(0,r.jsxs)("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2",children:["Berat: ",e.prod_weight," ",e.prod_unit_weight]}):"",e.prod_height>0?(0,r.jsxs)("div",{className:"col-span-3 textgray-900 rounded-2xl px-2",children:["Ukuran: ",e.prod_height," x ",e.prod_width," ",e.prod_unit_size]}):"",""!=e.prod_available_size?(0,r.jsxs)("div",{className:"col-span-3 textgray-900 rounded-2xl px-2",children:["Ukuran: ",e.prod_available_size.substring(0,8),"..."]}):"",(0,r.jsx)("button",{onClick:function(){return function(e,t){var n=e.toString().replace(/ /g,"_");s.default.push("/detail/".concat(n,"/"))}(e.prod_name,e.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8",children:"Lihat"})]},e.id)}))})}},2330:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),a=n(7757),s=n.n(a),i=n(5861),c=n(9008),o=n(1163),d=n(17),u=n(7294),l=n(4730);function p(){var e=(0,u.useState)([]),t=e[0],n=e[1],a=(0,u.useContext)(l.x),p=(0,o.useRouter)();return(0,u.useEffect)((function(){!function(){var e=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tbdamai.net/frontend/product/kuningan");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,n(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=(0,i.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getIp();case 2:t=e.sent,n=a.getUrlParameter("fbclid"),r={event_name:"PageView",action_source:"website",event_source_url:"https://tbdamai.net/kuningan/",user_data:{client_ip_address:t,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")}},localStorage.getItem("tbEmail")&&(r.user_data.em=a.hash(localStorage.getItem("tbEmail"))),n&&(r.user_data.fbc="fb.1.".concat(Date.now(),".").concat(n)),a.conversionApi(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[p.query]),(0,r.jsxs)("div",{className:"container mx-auto p-5",children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Menjual berbagai macam model kuningan untuk asesoris"}),(0,r.jsx)("meta",{name:"keywords",content:"kuningan, asesoris, r pion, pentol, belimbing"}),(0,r.jsx)("title",{children:"TBdamai | Kuningan"})]}),(0,r.jsx)("div",{className:"text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5",children:"Kuningan"}),(0,r.jsx)("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",children:(0,r.jsx)(d.Z,{data:t})})]})}},359:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kuningan",function(){return n(2330)}])}},function(e){e.O(0,[774,888,179],(function(){return t=359,e(e.s=t);var t}));var t=e.O();_N_E=t}]);