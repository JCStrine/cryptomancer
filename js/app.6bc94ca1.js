(function(e){function t(t){for(var r,o,a=t[0],u=t[1],s=t[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/cryptomancer/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d86":function(e,t,n){},"33ce":function(e,t,n){"use strict";n("485f")},"3ee3":function(e,t,n){},"485f":function(e,t,n){},"4cb2":function(e,t,n){"use strict";n("5dfb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0"),n("a434");var r=n("7a23"),i=n("5502"),c=Object(r["f"])("div",{id:"title",class:"navbar"},[Object(r["f"])("h1",null,"CRYPTOMANCER")],-1),o=Object(r["f"])("div",null,null,-1);function a(e,t,n,i,a,u){var s=Object(r["p"])("Login"),l=Object(r["p"])("Register"),f=Object(r["p"])("Content");return Object(r["k"])(),Object(r["e"])(r["a"],null,[c,o,a.login?(Object(r["k"])(),Object(r["c"])(s,{key:0,onCloseModal:u.toggleLogin,onOpenRegister:u.toggleRegister},null,8,["onCloseModal","onOpenRegister"])):Object(r["d"])("",!0),a.register?(Object(r["k"])(),Object(r["c"])(l,{key:1,onCloseModal:u.toggleRegister,onOpenLogin:u.toggleLogin},null,8,["onCloseModal","onOpenLogin"])):Object(r["d"])("",!0),Object(r["g"])(f)],64)}var u=n("ea7b"),s={id:"lastUpdate"},l={class:"table-container"},f=Object(r["f"])("tr",null,[Object(r["f"])("th",null,"User Amount"),Object(r["f"])("th",null,"Rank"),Object(r["f"])("th",{id:"img-column"}),Object(r["f"])("th",null,"Name"),Object(r["f"])("th",null,"Price"),Object(r["f"])("th",null,"Price Change 24h"),Object(r["f"])("th",null,"Price Change % 24h"),Object(r["f"])("th",null,"Price Change % 7d"),Object(r["f"])("th",null,"Price Change % 30d"),Object(r["f"])("th",null,"Market Cap")],-1);function d(e,t,n,i,c,o){var a=this,u=Object(r["p"])("Coin");return Object(r["k"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h6",s,"Table updated at: "+Object(r["q"])(c.lastUpdate),1),Object(r["f"])("div",l,[Object(r["f"])("table",null,[f,Object(r["f"])("tbody",null,[(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["o"])(c.favorites,(function(e){return Object(r["k"])(),Object(r["c"])(u,{key:e,coin:e,isFavorite:!0,onFormatData:t[0]||(t[0]=function(e){return o.formatData(a.coinData)})},null,8,["coin"])})),128)),(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["o"])(c.nonFavorites,(function(e){return Object(r["k"])(),Object(r["c"])(u,{key:e,coin:e,isFavorite:!1,onFormatData:t[1]||(t[1]=function(e){return o.formatData(a.coinData)})},null,8,["coin"])})),128))])])])],64)}var p=n("1da1"),b=n("2909"),h=(n("96cf"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),{class:"row"}),g=["src"];function O(e,t,n,i,c,o){return Object(r["k"])(),Object(r["e"])("tr",h,[Object(r["f"])("td",null,[Object(r["u"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.userAmount=e})},null,512),[[r["r"],c.userAmount]])]),Object(r["f"])("td",null,Object(r["q"])(n.coin.market_cap_rank),1),Object(r["f"])("td",null,[Object(r["f"])("img",{src:o.image,alt:""},null,8,g)]),Object(r["f"])("td",null,Object(r["q"])(n.coin.name),1),Object(r["f"])("td",null,"$"+Object(r["q"])(o.coinPrice),1),Object(r["f"])("td",{style:Object(r["j"])(o.dayClass)},Object(r["q"])(o.dayPriceChange),5),Object(r["f"])("td",{style:Object(r["j"])(o.dayPercentClass)},Object(r["q"])(o.dayPercentChange),5),Object(r["f"])("td",{style:Object(r["j"])(o.weekPercentClass)},Object(r["q"])(o.weekPercentChange),5),Object(r["f"])("td",{style:Object(r["j"])(o.monthPercentClass)},Object(r["q"])(o.monthPercentChange),5),Object(r["f"])("td",null,"$"+Object(r["q"])(o.marketCap),1),Object(r["f"])("td",null,[Object(r["f"])("i",{class:Object(r["i"])(o.favorite),onClick:t[1]||(t[1]=function(){return o.toggleFavorite&&o.toggleFavorite.apply(o,arguments)})},null,2)])])}n("b680"),n("a9e3");var j={name:"Coin",data:function(){return{positiveChange:{color:"green"},negativeChange:{color:"red"},userAmount:null}},props:{coin:Object,isFavorite:Boolean},computed:{favorite:function(){return this.isFavorite?"icon-star":"icon-star-empty"},image:function(){return null!=this.coin.image?this.coin.image:"N/A"},coinPrice:function(){return null!=this.coin.current_price?this.coin.current_price.toFixed(2):"N/A"},dayPriceChange:function(){if(null!==this.coin.price_change_24h){if(null!==this.userAmount&&this.userAmount>0){var e=this.coin.price_change_24h*this.userAmount;return Number(e.toFixed(8))}return Number(this.coin.price_change_24h.toFixed(8))}return"N/A"},dayPercentChange:function(){return null!==this.coin.price_change_percentage_24h?this.coin.price_change_percentage_24h.toFixed(2):"N/A"},weekPercentChange:function(){return null!==this.coin.price_change_percentage_7d_in_currency?this.coin.price_change_percentage_7d_in_currency.toFixed(2):"N/A"},monthPercentChange:function(){return null!==this.coin.price_change_percentage_30d_in_currency?this.coin.price_change_percentage_30d_in_currency.toFixed(2):"N/A"},marketCap:function(){if(null!=this.coin.market_cap){var e=Number(this.coin.market_cap.toFixed(2));return e.toLocaleString()}return"N/A"},dayClass:function(){return this.dayPriceChange>0?this.positiveChange:this.negativeChange},dayPercentClass:function(){return this.dayPercentChange>0?this.positiveChange:this.negativeChange},weekPercentClass:function(){return this.weekPercentChange>0?this.positiveChange:this.negativeChange},monthPercentClass:function(){return this.monthPercentChange>0?this.positiveChange:this.negativeChange}},methods:{toggleFavorite:function(){this.isFavorite?this.isFavorite&&this.$store.commit("removeFavorite",this.coin.name):this.$store.commit("addFavorite",this.coin),this.$emit("format-data")}}},m=(n("a5dc"),n("6b0d")),v=n.n(m),C=v()(j,[["render",O],["__scopeId","data-v-01d00e0c"]]),y={name:"Content",data:function(){return{coinData:[],lastUpdate:null,favorites:[],nonFavorites:[]}},computed:{favoriteStore:function(){return this.$store.state.favorites}},methods:{formatData:function(e){for(var t=Object(b["a"])(new Set(e)),n=this.favoriteStore,r=0;r<t.length;r++)for(var i=0;i<n.length;i++)t[r].name==n[i].name&&(n[i]=t[r],t.splice(r,1));this.favorites=n,this.nonFavorites=t},update:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),n=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();this.lastUpdate=n+", "+t},getData:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24%2C7d%2C30d");case 2:return n=t.sent,t.next=5,n.json();case 5:e.coinData=t.sent,e.update(),e.formatData(e.coinData);case 8:case"end":return t.stop()}}),t)})))()}},created:function(){this.getData(),setInterval(this.getData,6e4)},components:{Coin:C}},_=(n("8815"),v()(y,[["render",d]])),k=function(e){return Object(r["m"])("data-v-287816d9"),e=e(),Object(r["l"])(),e},w={id:"popUpBox"},P={id:"box"},x={id:"close-modal"},F=k((function(){return Object(r["f"])("h1",null,"Login",-1)})),R={action:""},D=k((function(){return Object(r["f"])("br",null,null,-1)})),A=k((function(){return Object(r["f"])("br",null,null,-1)}));function L(e,t,n,i,c,o){return Object(r["k"])(),Object(r["e"])("div",w,[Object(r["f"])("div",P,[Object(r["f"])("div",x,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return o.emitClose&&o.emitClose.apply(o,arguments)})},"X")]),F,Object(r["f"])("form",R,[Object(r["u"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.email=e}),placeholder:"Email"},null,512),[[r["r"],c.email]]),D,Object(r["u"])(Object(r["f"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),placeholder:"Password"},null,512),[[r["r"],c.password]]),A,Object(r["f"])("button",{onClick:t[3]||(t[3]=Object(r["v"])((function(){return o.login&&o.login.apply(o,arguments)}),["prevent"]))},"Login"),Object(r["f"])("button",{onClick:t[4]||(t[4]=Object(r["v"])((function(){return o.emitOpenRegister&&o.emitOpenRegister.apply(o,arguments)}),["prevent"])),id:"register"}," Register ")])])])}var M={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(u["b"])(),Object(u["c"])(n,e.email,e.password).then((function(e){var t=e.user;console.log(t)})).catch((function(e){var t=e.code,n=e.message;console.log(n,t)}));case 2:case"end":return t.stop()}}),t)})))()},emitOpenRegister:function(){this.$emit("open-register")},emitClose:function(){this.$emit("close-modal")}}},N=(n("4cb2"),v()(M,[["render",L],["__scopeId","data-v-287816d9"]])),U=function(e){return Object(r["m"])("data-v-7d851564"),e=e(),Object(r["l"])(),e},S={id:"popUpBox"},$={id:"box"},q={id:"close-modal"},I=U((function(){return Object(r["f"])("h1",null,"Register",-1)})),E={action:""},V=U((function(){return Object(r["f"])("br",null,null,-1)})),B=U((function(){return Object(r["f"])("br",null,null,-1)}));function J(e,t,n,i,c,o){return Object(r["k"])(),Object(r["e"])("div",S,[Object(r["f"])("div",$,[Object(r["f"])("div",q,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return o.emitEvent&&o.emitEvent.apply(o,arguments)})},"X")]),I,Object(r["u"])(Object(r["f"])("div",{class:"error"},Object(r["q"])(this.errorMsg),513),[[r["s"],c.error]]),Object(r["f"])("form",E,[Object(r["u"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.email=e}),placeholder:"Email"},null,512),[[r["r"],c.email]]),V,Object(r["u"])(Object(r["f"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),placeholder:"Password"},null,512),[[r["r"],c.password]]),B,Object(r["f"])("button",{onClick:t[3]||(t[3]=Object(r["v"])((function(){return o.emitOpenLogin&&o.emitOpenLogin.apply(o,arguments)}),["prevent"])),id:"register"},"Login"),Object(r["f"])("button",{onClick:t[4]||(t[4]=Object(r["v"])((function(){return o.register&&o.register.apply(o,arguments)}),["prevent"]))},"Register")])])])}var T=n("66ce"),Y={name:"Register",data:function(){return{email:"",password:"",error:null,errorMsg:""}},computed:{selectedFavorites:function(){for(var e=[],t=this.$store.state.favorites,n=0;n<t.length;n++)e.push(t[n].name);return e}},methods:{emitOpenLogin:function(){this.$emit("open-login")},register:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===e.email&&""===e.password){t.next=12;break}return t.next=3,Object(u["b"])();case 3:return n=t.sent,t.next=6,Object(T["a"])();case 6:return r=t.sent,t.next=9,Object(u["a"])(n,e.email,e.password).then((function(e){var t=e.user;console.log(t),i=t.uid})).catch((function(e){console.log(e)}));case 9:console.log(i),Object(T["c"])(Object(T["b"])(r,"users/"+i),{email:e.email,favorites:e.selectedFavorites,coinAmounts:{}}),e.$emit("close-modal");case 12:case"end":return t.stop()}}),t)})))()},emitEvent:function(){this.$emit("close-modal")}}},K=(n("33ce"),v()(Y,[["render",J],["__scopeId","data-v-7d851564"]])),X={name:"App",data:function(){return{login:!1,register:!1,displayName:""}},components:{Content:_,Login:N,Register:K},created:function(){var e=Object(u["b"])(),t=e.currentUser;null!==t&&(this.displayName=t.email)},methods:{toggleLogin:function(){this.login=!this.login,!0===this.login&&(this.register=!1)},toggleRegister:function(){this.register=!this.register,!0===this.register&&(this.login=!1)}}},z=(n("83b2"),v()(X,[["render",a]])),G=n("4f60"),H={apiKey:"AIzaSyAiJQEU9WaijGb_Ve7R2L-ev14DsbnXn1Y",authDomain:"cryptomancer-21240.firebaseapp.com",projectId:"cryptomancer-21240",storageBucket:"cryptomancer-21240.appspot.com",messagingSenderId:"1089908404375",appId:"1:1089908404375:web:f8ef4833c314752a23b9d2",measurementId:"G-PVKYC68MKJ"},Q=Object(i["a"])({state:function(){return{favorites:[],coinData:[]}},mutations:{removeFavorite:function(e,t){for(var n=0;n<e.favorites.length;n++)e.favorites[n].name==t&&e.favorites.splice(n,1)},addFavorite:function(e,t){e.favorites.push(t)},setCoinData:function(e,t){e.coinData=t}}});G["a"].initializeApp(H),Object(r["b"])(z).use(Q).mount("#app")},"5dfb":function(e,t,n){},"7edc":function(e,t,n){},"83b2":function(e,t,n){"use strict";n("3ee3")},8815:function(e,t,n){"use strict";n("7edc")},a5dc:function(e,t,n){"use strict";n("2d86")}});
//# sourceMappingURL=app.6bc94ca1.js.map