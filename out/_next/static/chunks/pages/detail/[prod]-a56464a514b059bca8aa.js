(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{17:function(e,r,a){"use strict";var s=a(5893),n=a(5675),t=a(1163),d=(a(1664),a(7294));a(1330);r.Z=function(e){var r=e.data,a=(0,d.useState)(!1);return a[0],a[1],(0,s.jsx)(s.Fragment,{children:r.map((function(e){return(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg border-2 border-blue-100 border-opacity-25",children:[(0,s.jsx)("div",{className:"col-span-3",children:(0,s.jsx)(n.default,{src:e.url,alt:e.prod_name+" "+e.prod_desc,height:"400",width:"400",layout:"responsive"})}),(0,s.jsx)("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2 uppercase",children:e.prod_name.replace(/-/g," ")}),(0,s.jsx)("div",{className:""}),e.prod_weight>0?(0,s.jsxs)("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2",children:["Berat: ",e.prod_weight," ",e.prod_unit_weight]}):"",e.prod_height>0?(0,s.jsxs)("div",{className:"col-span-3 textgray-900 rounded-2xl px-2",children:["Ukuran: ",e.prod_height," x ",e.prod_width," ",e.prod_unit_size]}):"",""!=e.prod_available_size?(0,s.jsxs)("div",{className:"col-span-3 textgray-900 rounded-2xl px-2",children:["Ukuran: ",e.prod_available_size.substring(0,8),"..."]}):"",(0,s.jsx)("button",{onClick:function(){return function(e,r){var a=e.toString().replace(/ /g,"_");t.default.push("/detail/".concat(a,"/"))}(e.prod_name,e.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8",children:"Lihat"})]},e.id)}))})}},3499:function(e,r,a){"use strict";a.r(r),a.d(r,{__N_SSG:function(){return p}});var s=a(5893),n=a(7757),t=a.n(n),d=a(5861),i=a(9008),c=a(7294),o=a(4730),l=a(17),p=!0;r.default=function(e){var r=e.data,a=e.prod,n=e.similarProd,p=(0,c.useContext)(o.x);return(0,c.useEffect)((function(){!function(){var e=(0,d.Z)(t().mark((function e(){var s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getIp();case 2:s=e.sent,p.conversionApi({event_name:"ViewContent",action_source:"website",event_source_url:"https://tbdamai.net/detail/".concat(a),user_data:{client_ip_address:s,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")},content_ids:r[0].prod_name,content_type:"product"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)(i.default,{children:[(0,s.jsxs)("title",{children:["TBdamai | ",r[0].prod_name]}),(0,s.jsx)("meta",{name:"description",content:"Menjual berbagai macam model coran untuk bahan pagar"}),(0,s.jsx)("meta",{name:"keywords",content:r[0].prod_name})]}),(0,s.jsxs)("div",{className:"container p-5 grid grid-cols-1 md:grid-cols-2",children:[(0,s.jsx)("div",{className:"p-5 md:float-right flex md:justify-end",children:(0,s.jsx)("img",{src:r[0].url,height:"400",width:"400",layout:"responsive"})}),(0,s.jsxs)("div",{className:"p-5 uppercase",children:[(0,s.jsxs)("h1",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Nama Produk:"})," ",r[0].prod_name.replace(/-/g," ")]}),(0,s.jsxs)("h1",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Category Produk:"})," ",r[0].prod_category]}),(0,s.jsxs)("h1",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Ukuran:"})," ",""!=r[0].prod_available_size?(0,s.jsx)("span",{className:"",children:r[0].prod_available_size}):(0,s.jsxs)("span",{children:[r[0].prod_height," x ",r[0].prod_width]})," ",r[0].prod_unit_size]}),(0,s.jsxs)("h1",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Hash Tag:"})," #",r[0].prod_label1]}),(0,s.jsxs)("h1",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Deskripsi:"})," ",r[0].prod_desc]})]})]}),(0,s.jsx)("div",{className:"mt-5 mb-2 bg-blue-500 text-white lg:text-xl text-lg w-auto inline-block p-1 px-2",children:"Produk Serupa"}),(0,s.jsx)("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",children:(0,s.jsx)(l.Z,{data:n})})]})}},1386:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[prod]",function(){return a(3499)}])}},function(e){e.O(0,[774,888,179],(function(){return r=1386,e(e.s=r);var r}));var r=e.O();_N_E=r}]);