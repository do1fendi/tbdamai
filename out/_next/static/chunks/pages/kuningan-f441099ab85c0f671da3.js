_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{A2So:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Aiso"),i=n.n(o),s=n("20a2"),c=n.n(s),u=(n("YFqc"),n("gPam"),r.a.createElement);t.a=function(e){var t=e.data,n=Object(a.useState)(!1);return n[0],n[1],u(r.a.Fragment,null,t.map((function(e){return u("div",{key:e.id,className:"grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg border-2 border-blue-100 border-opacity-25"},u("div",{className:"col-span-3"},u(i.a,{src:e.url,alt:e.prod_name+" "+e.prod_desc,height:"400",width:"400",layout:"responsive"})),u("div",{className:"col-span-3 bg-blue-400 text-white text-center px-2 uppercase"},e.prod_name.replace(/-/g," ")),u("div",{className:""}),e.prod_weight>0?u("div",{className:"col-span-3 text-gray-900 rounded-2xl px-2"},"Berat: ",e.prod_weight," ",e.prod_unit_weight):"",e.prod_height>0?u("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",e.prod_height," x ",e.prod_width," ",e.prod_unit_size):"",""!=e.prod_available_size?u("div",{className:"col-span-3 textgray-900 rounded-2xl px-2"},"Ukuran: ",e.prod_available_size.substring(0,8),"..."):"",u("button",{onClick:function(){return function(e,t){var n=e.toString().replace(/ /g,"_");c.a.push("/detail/".concat(n,"/"))}(e.prod_name,e.id)},className:"col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8"},"Lihat"))})))}},"bSh/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kuningan",function(){return n("wvfG")}])},wvfG:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("g4pe"),u=n.n(c),d=n("20a2"),l=n("A2So"),p=n("QqKt"),g=s.a.createElement;function m(){var e=Object(i.useState)([]),t=e[0],n=e[1],a=Object(i.useContext)(p.a),s=Object(d.useRouter)();return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tbdamai.net/frontend/product/kuningan");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,n(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(o.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getIp();case 2:t=e.sent,n={event_name:"PageView",action_source:"website",event_source_url:"https://tbdamai.net/kuningan/",user_data:{client_ip_address:t,client_user_agent:navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g,"$1")}},localStorage.getItem("tbEmail")&&(n.user_data.em=a.hash(localStorage.getItem("tbEmail"))),s.query.fbclid&&(n.user_data.fbc="fb.1.".concat(Date.now(),".").concat(s.query.fbclid)),a.conversionApi(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();var e=function(e){a.ga(e)};return s.events.on("routeChangeStart",e),function(){s.events.off("routeChangeStart",e)}}),[s.query]),g("div",{className:"container mx-auto p-5"},g(u.a,null,g("meta",{name:"description",content:"Menjual berbagai macam model kuningan untuk asesoris"}),g("meta",{name:"keywords",content:"kuningan, asesoris, r pion, pentol, belimbing"}),g("title",null,"TBdamai | Kuningan")),g("div",{className:"text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5"},"Kuningan"),g("div",{className:"grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto"},g(l.a,{data:t})))}}},[["bSh/",0,1,2,3,4]]]);