(function(e){function a(a){for(var c,n,u=a[0],d=a[1],o=a[2],i=0,f=[];i<u.length;i++)n=u[i],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);h&&h(a);while(f.length)f.shift()();return r.push.apply(r,o||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],c=!0,n=1;n<t.length;n++){var u=t[n];0!==s[u]&&(c=!1)}c&&(r.splice(a--,1),e=d(d.s=t[0]))}return e}var c={},n={app:0},s={app:0},r=[];function u(e){return d.p+"static/js/"+({}[e]||e)+"."+{"chunk-0d7ac1b6":"6d497b64","chunk-1239c8ca":"b490082b","chunk-137b18dc":"41d47c69","chunk-28ddfdaf":"76964b93","chunk-337e0842":"8c0da071","chunk-43858226":"7de4de14","chunk-4c781211":"2ee3eca4","chunk-4d174ac7":"1cc3a18e","chunk-4ee82c90":"fed19ace","chunk-50b7e7f5":"dfb550e7","chunk-5f9033aa":"419bf715","chunk-776aa5f8":"93940bc8","chunk-79f451db":"5bc521f8","chunk-8afe119e":"83a5d5bc","chunk-934d1fac":"c50f3eb1","chunk-9efbd488":"1c710328","chunk-a4379334":"8dd308d9","chunk-bea428aa":"52b92751","chunk-c9263cfe":"0fdad04d","chunk-cea5550a":"0e10d453","chunk-f6ff2308":"62ea3749","chunk-fec61064":"163b0eb5"}[e]+".js"}function d(a){if(c[a])return c[a].exports;var t=c[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var a=[],t={"chunk-0d7ac1b6":1,"chunk-1239c8ca":1,"chunk-137b18dc":1,"chunk-28ddfdaf":1,"chunk-337e0842":1,"chunk-43858226":1,"chunk-4c781211":1,"chunk-4d174ac7":1,"chunk-4ee82c90":1,"chunk-50b7e7f5":1,"chunk-5f9033aa":1,"chunk-776aa5f8":1,"chunk-79f451db":1,"chunk-8afe119e":1,"chunk-934d1fac":1,"chunk-9efbd488":1,"chunk-a4379334":1,"chunk-bea428aa":1,"chunk-c9263cfe":1,"chunk-cea5550a":1,"chunk-f6ff2308":1,"chunk-fec61064":1};n[e]?a.push(n[e]):0!==n[e]&&t[e]&&a.push(n[e]=new Promise((function(a,t){for(var c="static/css/"+({}[e]||e)+"."+{"chunk-0d7ac1b6":"d3acdb69","chunk-1239c8ca":"9ccf085f","chunk-137b18dc":"8da8d5e6","chunk-28ddfdaf":"d28f5042","chunk-337e0842":"4d15819b","chunk-43858226":"6fbe7333","chunk-4c781211":"6132a241","chunk-4d174ac7":"f86ba5ec","chunk-4ee82c90":"a2058db6","chunk-50b7e7f5":"5b01c83b","chunk-5f9033aa":"f94b5632","chunk-776aa5f8":"3fb95ad7","chunk-79f451db":"5892930c","chunk-8afe119e":"04e07bf3","chunk-934d1fac":"08ae32ad","chunk-9efbd488":"78c58e86","chunk-a4379334":"ca41b17e","chunk-bea428aa":"5fe256aa","chunk-c9263cfe":"7d8235e0","chunk-cea5550a":"c74e79f4","chunk-f6ff2308":"af92db6f","chunk-fec61064":"12ed2d43"}[e]+".css",s=d.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var o=r[u],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===c||i===s))return a()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){o=f[u],i=o.getAttribute("data-href");if(i===c||i===s)return a()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=a,h.onerror=function(a){var c=a&&a.target&&a.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete n[e],h.parentNode.removeChild(h),t(r)},h.href=s;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){n[e]=0})));var c=s[e];if(0!==c)if(c)a.push(c[2]);else{var r=new Promise((function(a,t){c=s[e]=[a,t]}));a.push(c[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=u(e);var f=new Error;o=function(a){i.onerror=i.onload=null,clearTimeout(h);var t=s[e];if(0!==t){if(t){var c=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",f.name="ChunkLoadError",f.type=c,f.request=n,t[1](f)}s[e]=void 0}};var h=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(a)},d.m=e,d.c=c,d.d=function(e,a,t){d.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,a){if(1&a&&(e=d(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var c in e)d.d(t,c,function(a){return e[a]}.bind(null,c));return t},d.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(a,"a",a),a},d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},d.p="/ouyou/",d.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=a,o=o.slice();for(var f=0;f<o.length;f++)a(o[f]);var h=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"30a4":function(e,a,t){"use strict";var c=t("a48a"),n=t.n(c);n.a},4678:function(e,a,t){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var a=s(e);return t(a)}function s(e){if(!t.o(c,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=s,e.exports=n,n.id="4678"},"56d7":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("a-layout",[t("a-layout-header",[t("m-header")],1),t("a-layout-content",[t("keep-alive",{attrs:{include:["home"]}},[t("router-view")],1)],1)],1)],1)},s=[],r=t("ade3"),u=(t("7f7f"),function(){var e=this,a=e.$createElement,c=e._self._c||a;return c("div",{staticClass:"hd-box"},[c("img",{directives:[{name:"show",rawName:"v-show",value:!e.isBack,expression:"!isBack"}],staticStyle:{height:"30px","margin-left":"-30px"},attrs:{src:t("cf05")}}),c("div",{directives:[{name:"show",rawName:"v-show",value:e.isBack,expression:"isBack"}],staticClass:"hd-back",on:{click:function(a){return a.stopPropagation(),e.onBack(a)}}},[c("a-icon",{attrs:{type:"left"}}),c("span",[e._v("返回")])],1),c("div",{staticClass:"hd-title"},[e._v(e._s(e.title))])])}),d=[],o={name:"m-header",data:function(){return{isBack:!1,title:""}},created:function(){"/"===this.$route.path?this.isBack=!1:this.isBack=!0},mounted:function(){},methods:{onBack:function(){1===window.history.length?this.$router.push("/"):this.$router.back()}},watch:{"$route.path":function(e,a){"/"===e?(this.isBack=!1,this.title=""):(this.isBack=!0,this.title=this.$store.state.title,""==this.title&&(this.title=document.title))}}},i=o,f=(t("99c8"),t("2877")),h=Object(f["a"])(i,u,d,!1,null,"74f76a88",null),l=h.exports,p={data:function(){return{}},components:Object(r["a"])({},l.name,l)},b=p,m=(t("30a4"),Object(f["a"])(b,n,s,!1,null,"2b02e911",null)),j=m.exports,k=t("2909"),v=(t("28a5"),t("ac6a"),t("8c4f")),g=t("aff7");c["a"].use(v["a"]);var y=function(e){var a=[];return e.forEach((function(e){var c=e.path.split("/")[1],n=c.charAt(0).toUpperCase()+c.substr(1,c.length-1);a.push({path:e.path,name:c,meta:{title:e.title},component:function(){return t("ea95")("./".concat(n,".vue"))}})})),a},_=new v["a"]({routes:[].concat(Object(k["a"])(y(g["a"])),[{path:"/",name:"home",meta:{keyAlive:!0},component:function(){return t.e("chunk-4c781211").then(t.bind(null,"bb51"))}},{path:"*",redirect:"/notfount"}])});_.beforeEach((function(e,a,t){e.meta.title?document.title=e.meta.title:document.title="欧呦Mask",t()}));var w=_,E=t("2f62");c["a"].use(E["a"]);var O={SET_TITLE:"SET_TITLE"},T=new E["a"].Store({state:{title:""},mutations:Object(r["a"])({},O.SET_TITLE,(function(e,a){e.title=a||""})),actions:{setTitle:function(e,a){var t=e.commit;new Promise((function(e){t(O.SET_TITLE,a),e()}))}}}),z=t("98c5"),x=t("cdeb"),B=t("5efb"),S=t("0c63"),C=t("f64c"),P=t("56cd");t("b059"),t("202f");c["a"].prototype.$message=C["a"],c["a"].prototype.$notification=P["a"],P["a"].config({placement:"bottomRight",top:"70px",bottom:"20px",duration:2}),c["a"].config.productionTip=!1,c["a"].use(z["a"]),c["a"].use(x["a"]),c["a"].use(B["a"]),c["a"].use(S["a"]),new c["a"]({router:w,store:T,render:function(e){return e(j)}}).$mount("#app")},"8d0c":function(e,a,t){},"99c8":function(e,a,t){"use strict";var c=t("8d0c"),n=t.n(c);n.a},a48a:function(e,a,t){},aff7:function(e,a,t){"use strict";function c(e){var a=this;this.list=[],this.add=function(e){return a.list.push(e),a}}var n=new c;n.add({pic:"http://static.gamemm.com/upload/avatar/201912/30/16201_1577688838.jpg",title:"圆环倒计时",desc:"svg css js",path:"/circle"}).add({pic:"http://static.gamemm.com/upload/avatar/202004/29/90730_1588098209.jpg",title:"聚光灯效果",desc:"css",path:"/spotlight"}).add({pic:"http://static.gamemm.com/upload/avatar/201909/16/124469_1568632555.jpg",title:"翻牌效果",desc:"css",path:"/turncard"}).add({pic:"http://static.gamemm.com/upload/avatar/202003/24/31496_1585013160.jpg",title:"滚动计数器",desc:"css js",path:"/counter"}).add({pic:"http://static.gamemm.com/upload/avatar/201908/22/87756_1566450714.jpg",title:"打勾效果",desc:"svg css",path:"/tick"}).add({pic:"http://static.gamemm.com/upload/avatar/201909/4/111789_1567573757.jpg",title:"食物卡片",desc:"css js",path:"/foodcard"}).add({pic:"http://static.gamemm.com/upload/avatar/201908/25/83815_1566712590.jpg",title:"折线动画",desc:"svg css js",path:"/brokenline"}).add({pic:"http://static.gamemm.com/upload/avatar/201908/22/113157_1566462721.jpg",title:"柴犬动画",desc:"css",path:"/dog"}).add({pic:"http://static.gamemm.com/upload/avatar/201905/16/78664_1557969786.jpg",title:"发光的404",desc:"css",path:"/notfount"}).add({pic:"http://static.gamemm.com/upload/avatar/202003/3/193807_1583172948.jpg",title:"伪3D研究员",desc:"canvas",path:"/researcher"}).add({pic:"http://static.gamemm.com/upload/avatar/202003/12/205351_1584022332.jpg",title:"关键词轮播效果",desc:"css js",path:"/rotateinput"}).add({pic:"http://static.gamemm.com/upload/avatar/201812/11/43606_1544501375.jpg",title:"平面头像[男]",desc:"css",path:"/man"}).add({pic:"http://static.gamemm.com/upload/avatar/201908/28/110667_1566991919.jpg",title:"水滴充电效果",desc:"css",path:"/drop"}).add({pic:"http://static.gamemm.com/upload/avatar/202007/13/275322_1594647296.jpg",title:"信封",desc:"css",path:"/envelope"}).add({pic:"http://static.gamemm.com/upload/avatar/201910/20/150593_1571567562.jpg",title:"小熊",desc:"css",path:"/bear"}).add({pic:"https://ucavatar2.tuwan.com/data/avatar/003/03/74/79_avatar_large.jpg",title:"太阳加载效果",desc:"css",path:"/sunload"}).add({pic:"http://static.gamemm.com/upload/avatar/202003/10/203822_1583825955.jpg",title:"像素大白",desc:"css",path:"/baymax"}).add({pic:"http://static.gamemm.com/upload/avatar/202003/27/201646_1585247588.jpg",title:"日系圆扇",desc:"css",path:"/fan"}).add({pic:"http://static.gamemm.com/upload/avatar/202004/13/26026_1586725021.jpg",title:"狮子",desc:"css",path:"/lion"}).add({pic:"http://static.gamemm.com/upload/avatar/201910/9/142582_1570632475.jpg",title:"眨眼密码框",desc:"svg css js",path:"/eyepassword"}).add({pic:"http://static.gamemm.com/upload/avatar/201908/29/116589_1567064613.jpg",title:"龙珠雷达",desc:"css",path:"/dragon-ball-radar"}),a["a"]=n.list},b059:function(e,a,t){},cf05:function(e,a,t){e.exports=t.p+"static/img/logo.ccc09f6a.png"},ea95:function(e,a,t){var c={"./Baymax.vue":["7bf8","chunk-c9263cfe"],"./Bear.vue":["10ed","chunk-934d1fac"],"./Brokenline.vue":["1c69","chunk-4d174ac7"],"./Circle.vue":["7672","chunk-43858226"],"./Counter.vue":["f071","chunk-79f451db"],"./Dog.vue":["2f4a","chunk-8afe119e"],"./Dragon-ball-radar.vue":["774d","chunk-f6ff2308"],"./Drop.vue":["1896","chunk-cea5550a"],"./Envelope.vue":["52f6","chunk-337e0842"],"./Eyepassword.vue":["92db","chunk-776aa5f8"],"./Fan.vue":["3544","chunk-4ee82c90"],"./Foodcard.vue":["7afb","chunk-137b18dc"],"./Lion.vue":["a6eb","chunk-0d7ac1b6"],"./Man.vue":["51ea","chunk-a4379334"],"./Notfount.vue":["339c","chunk-fec61064"],"./Researcher.vue":["2c13","chunk-50b7e7f5"],"./Rotateinput.vue":["f8bd","chunk-bea428aa"],"./Spotlight.vue":["f9a3","chunk-9efbd488"],"./Sunload.vue":["a1a2","chunk-5f9033aa"],"./Tick.vue":["8a2e","chunk-28ddfdaf"],"./Turncard.vue":["0fd8","chunk-1239c8ca"]};function n(e){if(!t.o(c,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=c[e],n=a[0];return t.e(a[1]).then((function(){return t(n)}))}n.keys=function(){return Object.keys(c)},n.id="ea95",e.exports=n}});
//# sourceMappingURL=app.e7a01211.js.map