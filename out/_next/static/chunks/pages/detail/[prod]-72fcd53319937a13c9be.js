(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{17:function(e,n,r){"use strict";var a=r(5893),s=r(5675),t=r(1163),d=(r(1664),r(7294));r(1330);n.Z=function(e){var n=e.data,r=(0,d.useState)(!1);return r[0],r[1],(0,a.jsx)(a.Fragment,{children:n.map((function(e){return(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-2 shadow-lg p-1 rounded-lg border-2 border-blue-100 border-opacity-25",children:[(0,a.jsx)("div",{className:"col-span-3",children:(0,a.jsx)(s.default,{src:e.url,alt:e.prod_name+" "+e.prod_desc,height:"400",width:"400",layout:"responsive"})}),(0,a.jsx)("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2 uppercase",children:e.prod_name.replace(/-/g," ")}),(0,a.jsx)("div",{className:""}),e.prod_weight>0?(0,a.jsxs)("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2",children:["Berat: ",e.prod_weight," ",e.prod_unit_weight]}):"",e.prod_height>0?(0,a.jsxs)("div",{className:"col-span-3 textgray-900 rounded-2xl px-2",children:["Ukuran: ",e.prod_height," x ",e.prod_width," ",e.prod_unit_size]}):"",""!=e.prod_available_size?(0,a.jsxs)("div",{className:"col-span-3 textgray-900 rounded-2xl px-2",children:["Ukuran: ",e.prod_available_size.substring(0,8),"..."]}):"",(0,a.jsx)("button",{onClick:function(){return function(e,n){var r=e.toString().replace(/ /g,"_");t.default.push("/detail/".concat(r,"/"))}(e.prod_name,e.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8",children:"Lihat"})]},e.id)}))})}},3499:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return p}});var a=r(5893),s=r(7757),t=r.n(s),d=r(5861),i=r(9008),c=r(7294),o=r(1163),l=r(4730),u=r(17),p=!0;n.default=function(e){var n=e.data,r=e.prod,s=(0,c.useContext)(l.x),p=(0,c.useState)([]),h=p[0],x=p[1],_=(0,o.useRouter)();return(0,c.useEffect)((function(){!function(){var e=(0,d.Z)(t().mark((function e(){var a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getIp();case 2:a=e.sent,s.conversionApi({event_name:"ViewContent",action_source:"website",event_source_url:"https://tbdamai.net/detail/".concat(r),user_data:{client_ip_address:a,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")},content_ids:n[0].prod_name,content_type:"product"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),(0,d.Z)(t().mark((function e(){var r,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tbdamai.net/frontend/similar-product/".concat(n[0].prod_category,"/").concat(n[0].prod_name));case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,x(a);case 7:case"end":return e.stop()}}),e)})))()}),[_.query]),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)(i.default,{children:[(0,a.jsxs)("title",{children:["TBdamai | ",n[0].prod_name]}),(0,a.jsx)("meta",{name:"description",content:"Menjual berbagai macam model coran untuk bahan pagar"}),(0,a.jsx)("meta",{name:"keywords",content:n[0].prod_name})]}),(0,a.jsxs)("div",{className:"container p-5 grid grid-cols-1 md:grid-cols-2",children:[(0,a.jsx)("div",{className:"p-5 md:float-right flex md:justify-end",children:(0,a.jsx)("img",{src:n[0].url,height:"400",width:"400",layout:"responsive"})}),(0,a.jsxs)("div",{className:"p-5 uppercase",children:[(0,a.jsxs)("h1",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Nama Produk:"})," ",n[0].prod_name.replace(/-/g," ")]}),(0,a.jsxs)("h1",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Category Produk:"})," ",n[0].prod_category]}),(0,a.jsxs)("h1",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Ukuran:"})," ",""!=n[0].prod_available_size?(0,a.jsx)("span",{className:"",children:n[0].prod_available_size}):(0,a.jsxs)("span",{children:[n[0].prod_height," x ",n[0].prod_width]})," ",n[0].prod_unit_size]}),(0,a.jsxs)("h1",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Hash Tag:"})," #",n[0].prod_label1]}),(0,a.jsxs)("h1",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Deskripsi:"})," ",n[0].prod_desc]})]})]}),(0,a.jsx)("div",{className:"mt-5 ml-2 mb-2 bg-blue-500 text-white lg:text-xl text-lg w-auto inline-block p-1 px-2",children:"Produk Serupa"}),(0,a.jsx)("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",children:(0,a.jsx)(u.Z,{data:h})})]})}},1386:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[prod]",function(){return r(3499)}])}},function(e){e.O(0,[774,888,179],(function(){return n=1386,e(e.s=n);var n}));var n=e.O();_N_E=n}]);