(function(t){function e(e){for(var n,a,r=e[0],c=e[1],u=e[2],d=0,h=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0910":function(t,e,i){},"15f1":function(t,e,i){"use strict";i("3077")},"16bf":function(t,e,i){},2395:function(t,e,i){},"256d":function(t,e,i){},"2aab":function(t,e,i){"use strict";i("b85f")},"2b94":function(t,e,i){},3077:function(t,e,i){},"48bf":function(t,e,i){"use strict";i("2b94")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=i("b970"),o=i("543e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:t.transitionName,mode:this.$router.back?"out-in":"in-out"}},[i("router-view",{staticClass:"view"})],1)],1)},r=[],c=(i("b0c0"),{created:function(){var t=JSON.parse(localStorage.getItem("goods"))||{};this.$store.commit("setCounterMap",t)},data:function(){return{transitionName:"left"}},watch:{$route:function(t,e){"classify"===t.name&&"search"===e.name&&(this.$router.back=!0),this.$router.back?this.transitionName="right":this.transitionName="left",this.$router.back=!1}}}),u=c,l=(i("7c55"),i("2877")),d=Object(l["a"])(u,a,r,!1,null,null,null),h=d.exports,p=i("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("router-view"),i("tab-bar")],1)},g=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-tabbar",{attrs:{fixed:"",route:""}},[i("van-tabbar-item",{attrs:{icon:"wap-home-o",to:"/"}},[t._v("首页")]),i("van-tabbar-item",{attrs:{icon:"apps-o",to:"/home/classify"}},[t._v("分类")]),i("van-tabbar-item",{attrs:{icon:"cart-o",to:"/home/shopping",badge:t.badge,id:"shop-cart"}},[t._v("购物车")]),i("van-tabbar-item",{attrs:{icon:"user-circle-o",to:"/my"}},[t._v("我的")])],1)},b=[],v=i("5530"),y=(i("13d5"),i("07ac"),i("2f62")),L={computed:Object(v["a"])(Object(v["a"])({},Object(y["d"])({counterMap:function(t){return t.counterMap}})),{},{badge:function(){var t=Object.values(this.counterMap).reduce((function(t,e){return t+e}),0);return t>99?"99+":t}})},j=L,k=Object(l["a"])(j,m,b,!1,null,null,null),w=k.exports,O={name:"Home",components:{TabBar:w}},_=O,x=Object(l["a"])(_,f,g,!1,null,null,null),C=x.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"classify-wrapper"},[i("router-link",{staticClass:"search-btn",attrs:{tag:"div",to:"/search"}},[i("van-icon",{attrs:{name:"search"}}),i("div",[t._v("Search content")])],1),i("top-tab"),t.showContent?[i("side-tab"),i("goods-list")]:i("van-loading",{attrs:{size:"2rem",vertical:""}})],2)},S=[],M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"oneTab",staticClass:"one-tab-wrapper"},t._l(t.menuList,(function(e,n){return i("div",{key:e.title,staticClass:"tab-item",class:{active:t.index==n},on:{touchend:function(e){return t.scrollTo(n,e)},touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0}}},[i("div",{staticClass:"img-wrapper"},[i("img",{attrs:{src:e.imgURL}})]),i("div",{staticClass:"tab-title"},[t._v(t._s(e.title))])])})),0)},T=[];function G(t,e,i,n){var s=0,o=3;e<0&&(o*=-1);var a=setInterval((function(){s+=o,i[n]=t+s,Math.abs(s)>Math.abs(e)&&(i[n]=t+e,clearInterval(a))}),2)}var $={moveTo:G},U={data:function(){return{index:0,move:!1,menuList:[{title:"时令水果",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg"},{title:"酒水冲调",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg"},{title:"安心乳品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg"},{title:"休闲零食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg"},{title:"肉蛋食材",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg"},{title:"新鲜蔬菜",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg"},{title:"熟食餐饮",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg"},{title:"海鲜水产",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg"},{title:"粮油调味",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg"},{title:"某手美食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg"},{title:"纸杯清洁",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg"},{title:"个人护理",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg"},{title:"美妆护肤",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg"},{title:"家居收纳",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg"},{title:"家用电器",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg"},{title:"3C数码",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg"},{title:"母婴用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg"},{title:"鲜花绿植",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg"},{title:"宠物用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg"},{title:"图书玩具",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg"},{title:"手表配饰",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg"}]}},methods:Object(v["a"])(Object(v["a"])({},Object(y["b"])(["getSideList"])),{},{scrollTo:function(t,e){if(!this.move){this.index=t;var i=e.target.offsetWidth,n=e.target.getBoundingClientRect().left,s=this.$refs.oneTab,o=s.offsetWidth;$.moveTo(s.scrollLeft,n+i/2-o/2,s,"scrollLeft"),this.getSideList(this.menuList[t].title)}}}),mounted:function(){this.getSideList(this.menuList[0].title)}},E=U,B=(i("48bf"),Object(l["a"])(E,M,T,!1,null,"83b032ce",null)),I=B.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"side",staticClass:"sidetap-wrapper"},t._l(t.sideList,(function(e,n){return i("div",{key:e,class:{active:t.index===n},on:{touchend:function(e){return t.scrollTo(n,e)},touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0}}},[t._v(" "+t._s(0===n?"全部":e)+" ")])})),0)},N=[],P={data:function(){return{index:0,move:!1}},computed:Object(v["a"])({},Object(y["d"])({sideList:function(t){return t.sideList}})),methods:Object(v["a"])(Object(v["a"])(Object(v["a"])({},Object(y["c"])(["resetGoodsList"])),Object(y["b"])(["getGoodsList"])),{},{scrollTo:function(t,e){this.move||(this.index=t);var i=this.$refs.side,n=e.target.offsetHeight,s=e.target.getBoundingClientRect().top,o=i.getBoundingClientRect().top,a=i.offsetHeight;$.moveTo(i.scrollTop,s+n/2-a/2-o,i,"scrollTop"),this.resetGoodsList(),this.getGoodsList({type:this.sideList[t],page:1,sortType:"all"})}})},z=P,X=(i("ba8c"),Object(l["a"])(z,H,N,!1,null,null,null)),Y=X.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-wrapper"},[i("div",{staticClass:"list-header van-hairline--top-bottom"},[i("div",{class:{active:"all"==t.type},on:{click:function(e){return t.changeType("all")}}},[t._v(" 综合 ")]),i("div",{class:{active:"sale"==t.type},on:{click:function(e){return t.changeType("sale")}}},[t._v(" 销量 ")]),i("div",{staticClass:"price",class:{"price-up":"price-up"==t.type,"price-down":"price-down"==t.type},on:{click:function(e){return t.changeType("price")}}},[t._v(" 价格 ")])]),i("div",{staticClass:"list-content"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsList,(function(e){return i("goods-card",t._b({key:e.id,attrs:{num:t.counterMap[e.id]}},"goods-card",e,!1))})),1)],1)],1)])},J=[],D=i("1da1"),W=(i("96cf"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-wrapper van-hairline--bottom"},[i("div",{staticClass:"card-img"},[i("img",{ref:"img",attrs:{src:t.images[0]}})]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"title overflow-hidden"},[t._v(t._s(t.title))]),i("div",{staticClass:"desc overflow-hidden"},[t._v(t._s(t.desc))]),i("div",{staticClass:"tags"},t._l(t.tags,(function(e){return i("div",{key:e},[t._v(t._s(e))])})),0),i("div",{staticClass:"price"},[t._v("￥"+t._s(t.price))]),i("div",{staticClass:"counter"},[t.num?i("div",{on:{touchend:function(e){return t.counter(t.id,-1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"}})]):t._e(),t.num?i("div",{staticClass:"price_num"},[t._v(t._s(t.num))]):t._e(),i("div",{on:{touchend:function(e){return t.counter(t.id,1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"}})])])])])}),V=[],q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.exist?i("div",{staticClass:"item",style:{width:t.width+"px",height:t.height+"px",opacity:t.opacity,transform:"translate("+t.moveX+"px, "+t.moveY+"px) scale("+t.sx+", "+t.sy+")"}},[i("img",{attrs:{src:t.src}})]):t._e()},F=[],K={},Q=K,Z=(i("eedd"),Object(l["a"])(Q,q,F,!1,null,"4f6f7af6",null)),tt=Z.exports,et=n["a"].extend(tt),it=function(t){var e=t.startX,i=t.startY,n=t.endX,s=t.endY,o=t.src,a=t.width,r=t.height,c=new et({el:document.createElement("div"),data:function(){return{moveX:e,moveY:i,sx:1,sy:1,opacity:1,exist:!0,src:o,width:a,height:r}}});document.body.appendChild(c.$el),setTimeout((function(){c.moveX=n,c.moveY=s,c.sx=.1,c.sy=.1,c.opacity=0}),0),setTimeout((function(){c.exist=!1}),1e3)},nt={props:["images","title","desc","tags","price","id","num","nofly"],methods:Object(v["a"])(Object(v["a"])({},Object(y["c"])(["storageChange"])),{},{counter:function(t,e){if(this.storageChange({id:t,value:e}),-1!==e&&!this.nofly){var i=this.$refs.img.getBoundingClientRect(),n=i.top,s=i.left,o=document.getElementById("shop-cart"),a=o.getBoundingClientRect(),r=a.top,c=a.left,u=this.$refs.img,l=u.offsetWidth,d=u.offsetHeight,h=o.offsetWidth,p=o.offsetHeight,f=c+h/2,g=r+p/2;it({startX:s,startY:n,endX:f,endY:g,src:this.$refs.img.src,width:l,height:d})}}})},st=nt,ot=(i("a6ed"),Object(l["a"])(st,W,V,!1,null,null,null)),at=ot.exports,rt={components:{GoodsCard:at},data:function(){return{type:"price-up",isLoading:!1,loading:!1,finished:!1}},methods:Object(v["a"])(Object(v["a"])(Object(v["a"])({},Object(y["c"])(["resetGoodsList"])),Object(y["b"])(["getGoodsList"])),{},{changeType:function(t){"all"===t?this.type="all":"sale"===t?this.type="sale":"price-up"===this.type?this.type="price-down":this.type="price-up",this.onRefresh()},onRefresh:function(){this.loading=!0,this.isLoading=!1,this.finished=!1,this.page=1,this.resetGoodsList(),this.getGoodsList({page:1,sortType:this.type}),this.loading=!1},onLoad:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.page+=1,e.next=4,t.getGoodsList({page:t.page,sortType:t.type});case 4:i=e.sent,i?t.loading=!1:t.finished=!0;case 6:case"end":return e.stop()}}),e)})))()}}),computed:Object(v["a"])({},Object(y["d"])({goodsList:function(t){return t.goodsList},counterMap:function(t){return t.counterMap}}))},ct=rt,ut=(i("2aab"),Object(l["a"])(ct,A,J,!1,null,null,null)),lt=ut.exports,dt={computed:Object(v["a"])({},Object(y["d"])({showContent:function(t){return t.showContent},sideList:function(t){return t.sideList}})),methods:Object(v["a"])(Object(v["a"])({},Object(y["c"])(["resetGoodsList"])),Object(y["b"])(["getGoodsList"])),components:{TopTab:I,SideTab:Y,GoodsList:lt},watch:{showContent:function(){this.showContent&&(this.resetGoodsList(),this.getGoodsList({type:this.sideList[0],page:1,sortType:"all"}))}}},ht=dt,pt=(i("5e5d"),Object(l["a"])(ht,R,S,!1,null,"7bf2aa88",null)),ft=pt.exports,gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shopping"},[i("div",{staticClass:"top-nav"},[i("van-nav-bar",{attrs:{title:"购物车","right-text":"删除"},on:{"click-right":t.del}})],1),i("div",{staticClass:"card-list"},[i("van-checkbox-group",{ref:"checkboxGroup",model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"card-box"},[i("van-checkbox",{staticClass:"check",attrs:{name:e.id}}),i("goods-card",t._b({attrs:{num:t.counterMap[e.id],nofly:!0}},"goods-card",e,!1))],1)})),0)],1),i("van-submit-bar",{attrs:{price:t.allMoney,"button-text":"结算(￥"+t.totalNum+")"},on:{submit:t.onSubmit}},[i("van-checkbox",{on:{click:t.checkAll},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)},mt=[],bt=(i("159b"),i("4de4"),i("caad"),i("2532"),i("b64b"),i("a15b"),i("d399")),vt=i("2241"),yt={components:{GoodsCard:at},data:function(){return{result:[],list:[],checked:!1}},methods:Object(v["a"])(Object(v["a"])({},Object(y["c"])(["storageChange"])),{},{del:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 0===t.result.length&&Object(bt["a"])("请选择想要删除的商品"),e.prev=1,e.next=4,vt["a"].confirm({message:"是否删除选中商品"});case 4:t.result.forEach((function(e){t.storageChange({id:e,value:-1/0}),t.list=t.list.filter((function(e){return!t.result.includes(e.id)}))})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),Object(bt["a"])("取消删除");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},checkAll:function(){this.checked?this.$refs.checkboxGroup.toggleAll(!0):this.$refs.checkboxGroup.toggleAll(!1)},getAllData:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=Object.keys(t.counterMap),e.next=3,t.$api.getGoodsByIds(i.join());case 3:n=e.sent,t.list=n.list;case 5:case"end":return e.stop()}}),e)})))()},onSubmit:function(){}}),created:function(){this.getAllData()},watch:{result:function(){this.result.length===this.list.length?this.checked=!0:this.checked=!1}},computed:Object(v["a"])(Object(v["a"])({},Object(y["d"])({counterMap:function(t){return t.counterMap}})),{},{allMoney:function(){var t=this,e=this.list.filter((function(e){return t.result.includes(e.id)}));return e.reduce((function(e,i){var n=t.counterMap[i.id]||0;return e+Math.round(n*i.price*100)}),0)},totalNum:function(){var t=this,e=this.list.filter((function(e){return t.result.includes(e.id)})),i=e.reduce((function(e,i){return e+(t.counterMap[i.id]||0)}),0);return i}})},Lt=yt,jt=(i("6525"),Object(l["a"])(Lt,gt,mt,!1,null,"fb3787ca",null)),kt=jt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-wrapper"},[i("div",{staticClass:"search-head"},[i("van-icon",{staticClass:"arrow-left",attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.goBack()}}}),i("van-search",{staticClass:"search-content",attrs:{placeholder:t.word,"show-action":"",autofocus:""},on:{search:t.onSearch,input:t.input,focus:t.focus},scopedSlots:t._u([t.showList?{key:"action",fn:function(){return[i("div",{on:{touchend:function(e){return t.onSearch(t.value)}}},[t._v("搜索")])]},proxy:!0}:{key:"action",fn:function(){return[i("div",{on:{touchend:function(e){return t.onSearch(t.value)}}},[i("van-icon",{staticClass:"shop-cart",attrs:{name:"cart-o",id:"shop-cart",badge:t.badge},on:{click:function(e){return t.$router.push("/home/shopping")}}})],1)]},proxy:!0}],null,!0),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t.likeList.length&&t.showList?i("div",{staticClass:"like-search"},[i("van-list",t._l(t.likeList,(function(e){return i("van-cell",{key:e,on:{click:function(i){return t.onSearch(e)}}},[[i("span",{staticClass:"custom-title",domProps:{innerHTML:t._s(t.formatHTML(e))}})]],2)})),1)],1):t._e(),t.showList?t._e():i("div",{staticClass:"goods-list"},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsList,(function(e){return i("goods-card",t._b({key:e.id,attrs:{num:t.counterMap[e.id]}},"goods-card",e,!1))})),1)],1),t.showList&&t.likeList.length<=0?i("div",{staticClass:"history"},[i("my-history",{attrs:{searchList:t.searchList},on:{search:t.onSearch}})],1):t._e()])},Ot=[],_t=i("2909"),xt=(i("841c"),i("ac1f"),i("99af"),i("7db0"),i("4d63"),i("25f0"),i("5319"),i("9767"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"history"},[i("h3",[t._v("History Record:")]),t._l(t.searchList,(function(e){return i("div",{key:e.time,staticClass:"history-item",on:{click:function(i){return t.search(e.value)}}},[t._v(" "+t._s(e.value)+" ")])}))],2)}),Ct=[],Rt={props:{searchList:{default:function(){return[]}}},methods:{search:function(t){this.$emit("search",t)}}},St=Rt,Mt=(i("15f1"),Object(l["a"])(St,xt,Ct,!1,null,"349d32b7",null)),Tt=Mt.exports,Gt={components:{GoodsCard:at,MyHistory:Tt},data:function(){return{value:this.word,word:"酒",likeList:[],timer:null,loading:!1,finished:!1,page:1,size:5,goodsList:[],showList:!0,total:0,searchList:[]}},created:function(){this.searchList=JSON.parse(localStorage.getItem("searchList"))||[]},computed:Object(v["a"])(Object(v["a"])({},Object(y["d"])({counterMap:function(t){return t.counterMap}})),{},{badge:function(){var t=Object.values(this.counterMap).reduce((function(t,e){return t+e}),0);return t>99?"99+":t}}),methods:{onLoad:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!1,e.next=3,t.$api.search(t.value,t.page,t.size);case 3:i=e.sent,t.goodsList=[].concat(Object(_t["a"])(t.goodsList),Object(_t["a"])(i.list)),t.total=i.total,t.goodsList.length>=t.total?t.finished=!0:t.page+=1;case 7:case"end":return e.stop()}}),e)})))()},onSearch:function(t){var e=this;this.value=t||this.word;var i=this.searchList.find((function(t){return t.value===e.value}));i?(i.time=(new Date).getTime(),this.searchList.sort((function(t,e){return e.time-t.time}))):(this.searchList.unshift({value:this.value,time:(new Date).getTime()}),this.searchList.length>10&&this.searchList.pop()),localStorage.setItem("searchList",JSON.stringify(this.searchList)),this.likeList=[],this.goodsList=[],this.page=1,this.finished=!1,this.onLoad(),this.showList=!1},input:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.value){e.next=3;break}return t.likeList=[],e.abrupt("return");case 3:t.timer?(clearTimeout(t.timer),t.timer=null):t.timer=setTimeout(Object(D["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.likeSearch(t.value);case 2:i=e.sent,t.likeList=i.result,clearTimeout(t.timer),t.timer=null;case 6:case"end":return e.stop()}}),e)}))),300);case 4:case"end":return e.stop()}}),e)})))()},focus:function(){this.showList=!0},formatHTML:function(t){var e=new RegExp(this.value,"g");return t.replace(e,this.value.fontcolor("red"))}}},$t=Gt,Ut=(i("e60d"),Object(l["a"])($t,wt,Ot,!1,null,"5c0e3b09",null)),Et=Ut.exports;p["a"].prototype.back=!1,p["a"].prototype.goBack=function(){this.back=!0,this.go(-1)},n["a"].use(p["a"]);var Bt=[{path:"*",redirect:"/home"},{path:"/home",component:C,children:[{path:"classify",name:"classify",component:ft},{path:"shopping",component:kt}]},{path:"/search",name:"search",component:Et}],It=new p["a"]({mode:"history",base:"",routes:Bt}),Ht=It,Nt=i("bc3a"),Pt=i.n(Nt),zt={getSide:"/getsidebar",getGoodsList:"/getGoodsList",likeSearch:"/likeSearch",search:"/search",getGoodsByIds:"/getGoodsByIds"},Xt="https://mallapi.duyiedu.com/goods/",Yt=Xt,At="alex_1614663726435",Jt=Pt.a.create({baseURL:Yt,params:{appkey:At}});Jt.interceptors.response.use((function(t){return t.data}));var Dt=function(t){return Jt.get(zt.getSide,{params:{type:t}})},Wt=function(t,e,i,n){return Jt.get(zt.getGoodsList,{params:{type:t,page:e,size:i,sort:n}})},Vt=function(t){return Jt.get(zt.likeSearch,{params:{likeValue:t}})},qt=function(t,e,i){return Jt.get(zt.search,{params:{type:t,page:e,size:i}})},Ft=function(t){return Jt.get(zt.getGoodsByIds,{params:{value:t}})},Kt={getSideList:Dt,getGoodsList:Wt,likeSearch:Vt,search:qt,getGoodsByIds:Ft};n["a"].use(y["a"]);var Qt=new y["a"].Store({state:{sideList:[],showContent:!1,size:5,goodsList:[],type:null,counterMap:{}},mutations:{storageChange:function(t,e){var i=e.id,s=e.value;t.counterMap[i]?-1===s&&1===t.counterMap[i]||s===-1/0?n["a"].delete(t.counterMap,i):n["a"].set(t.counterMap,i,t.counterMap[i]+s):n["a"].set(t.counterMap,i,1),localStorage.setItem("goods",JSON.stringify(t.counterMap))},setCounterMap:function(t,e){t.counterMap=e},setSideList:function(t,e){t.sideList=e},setShowContent:function(t,e){t.showContent=e},setGoodsList:function(t,e){t.goodsList=[].concat(Object(_t["a"])(t.goodsList),Object(_t["a"])(e))},resetGoodsList:function(t){t.goodsList=[]},setGoodsType:function(t,e){t.type=e}},actions:{getSideList:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function i(){var n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.commit,n("setShowContent",!1),i.next=4,Kt.getSideList(e);case 4:s=i.sent,n("setSideList",s),console.log(s),n("setShowContent",!0);case 8:case"end":return i.stop()}}),i)})))()},getGoodsList:function(t,e){var i=this;return Object(D["a"])(regeneratorRuntime.mark((function n(){var s,o,a,r,c,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=t.state,o=e.page,a=e.sortType,r=e.type||s.type,i.commit("setGoodsType",r),n.next=6,Kt.getGoodsList(r,o,s.size,a);case 6:if(c=n.sent,u=c.list,l=c.total,i.commit("setGoodsList",u),!(l>s.goodsList.length)){n.next=12;break}return n.abrupt("return",!0);case 12:return n.abrupt("return",!1);case 13:case"end":return n.stop()}}),n)})))()}},modules:{}});i("499a"),i("157a");n["a"].prototype.$api=Kt,n["a"].use(s["a"]),n["a"].use(o["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Ht,store:Qt,render:function(t){return t(h)}}).$mount("#app")},"5e5d":function(t,e,i){"use strict";i("9770")},6525:function(t,e,i){"use strict";i("0910")},"7c55":function(t,e,i){"use strict";i("2395")},9648:function(t,e,i){},9770:function(t,e,i){},a6ed:function(t,e,i){"use strict";i("f56c")},b85f:function(t,e,i){},ba8c:function(t,e,i){"use strict";i("9648")},e60d:function(t,e,i){"use strict";i("256d")},eedd:function(t,e,i){"use strict";i("16bf")},f56c:function(t,e,i){}});
//# sourceMappingURL=app.dc95e4a4.js.map