(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)s=o[u],r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cfb":function(t,e,n){},"23de":function(t,e,n){},"28c7":function(t,e,n){"use strict";var a=n("d208"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("ce5b"),i=n.n(r),s=n("998c"),o=n.n(s),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app",dark:""}},[n("v-content",{attrs:{id:"v-content"}},[n("v-card",{staticClass:"shake-animation",attrs:{id:"window",color:"primary"}},[n("div",{attrs:{id:"nav"}},[n("v-toolbar",{attrs:{flat:"",color:"success"}},[n("v-toolbar-title",{staticClass:"font-weight-bold"},[t._v("\n                        $: "+t._s(t.headerTextCurrent)+"\n                        "),n("transition",{attrs:{name:"cursor-fade"}},[t.typingText?n("span",[t._v("_")]):t._e()])],1),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Home")])],1),n("v-menu",{attrs:{id:"burger-menu",left:"","nudge-bottom":"5","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"hidden-md-and-up",attrs:{dark:"",icon:""}},a),[n("v-icon",[t._v("menu")])],1)]}}])},[n("v-list",{attrs:{id:"burger-menu-list"}},[n("v-list-tile",[n("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Home")])],1)],1)],1),n("v-btn",{attrs:{flat:"",icon:"",color:"error"},on:{click:t.shakeAnimationF}},[n("v-icon",[t._v("close")])],1)],1)],1),n("router-view"),n("v-footer",{staticClass:"pa-2 caption",attrs:{height:"23"}},[n("v-spacer"),n("div",[t._v("\n                    last updated: "+t._s(t.lastModified)+" ©\n                    "+t._s((new Date).getFullYear())+"\n                ")])],1)],1)],1)],1)},c=[],d=(n("7f7f"),n("5118")),u=n("bc3a"),f=n.n(u),v=f.a.create({baseURL:"https://re-krass.github.io/"}),h={name:"App",data:function(){return{headerText:this.$route.name,headerTextCurrent:"",intervallID:null,typingText:!0,lastModified:""}},watch:{$route:function(){this.displayTitle()}},mounted:function(){this.displayTitle(),this.getLastModified()},methods:{shakeAnimationF:function(){for(var t=[document.getElementById("window")],e=function(){var t=a[n];t.classList.toggle("shake-animation-active"),Object(d["setTimeout"])(function(){t.classList.remove("shake-animation-active")},400)},n=0,a=t;n<a.length;n++)e()},getLastModified:function(){console.log(this);var t=this;v.head("index.html").then(function(e){console.log(t),console.log(e.headers["last-modified"]),t.lastModified=e.headers["last-modified"]}).catch(function(t){return console.log(t)})},displayTitle:function(){Object(d["clearInterval"])(this.intervallID),this.typingText=!0,this.headerTextCurrent="",this.headerText=this.$route.name;var t=this.headerText.length,e=200/t,n=this;this.intervallID=Object(d["setInterval"])(function(){var e=n.headerTextCurrent.length;n.headerTextCurrent+=n.headerText[e],n.headerTextCurrent.length>=t&&(Object(d["clearInterval"])(n.intervallID),Object(d["setTimeout"])(function(){n.typingText=!1},500))},e)}}},p=h,m=(n("cf25"),n("2877")),g=Object(m["a"])(p,l,c,!1,null,null,null),b=g.exports,x=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-container",{attrs:{"grid-list-md":"",fluid:""}},[n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("Section",{attrs:{icon:"info",title:"Informations"}},[n("div",{staticClass:"text-container"},[t._v("\n                        On this site you can discover my University projects and private\n                        projects.\n                    ")])])],1)],1),n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("Section",{attrs:{icon:"code",title:"Private projects"}},[n("v-layout",{attrs:{id:"text-cards-container",wrap:""}},[n("v-flex",{attrs:{id:"text-card",xs12:"",sm6:"",md4:""}},[n("ThemeCard",{attrs:{headline:"Dark Theme for TUB sites",content:"Dark theme for ISIS-TUB and MOSES-TUB site.",link:"https://github.com/dark-theme-styles/Dark-Theme-TUB","button-text":"Go to project"}})],1)],1)],1)],1)],1),n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("Section",{attrs:{icon:"code",title:"University projects"}},[n("v-layout",{attrs:{id:"text-cards-container",wrap:""}},[n("v-flex",{attrs:{id:"text-card",xs12:"",sm6:"",md4:""}},[n("ThemeCard",{attrs:{headline:"Y&D Learning Website",content:"Website for Y&D Learning.",link:"https://ydlearning.com","button-text":"Visit page"}})],1),n("v-flex",{attrs:{id:"text-card",xs12:"",sm6:"",md4:""}},[n("ThemeCard",{attrs:{headline:"Y&D Learning V2 Frontend",content:"Frontend for Y&D Learning V2 made in Vue.",link:"https://github.com/ydlearning/ydl-v2-front","button-text":"Go to project"}})],1),n("v-flex",{attrs:{id:"text-card",xs12:"",sm6:"",md4:""}},[n("ThemeCard",{attrs:{headline:"Y&D Learning V2 Backend / API",content:"Backend for Y&D Learning V2 made in Django REST framework. ",link:"https://github.com/ydlearning/ydl-v2-api","button-text":"Go to project"}})],1)],1)],1)],1)],1),n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("Section",{attrs:{icon:"code",title:"Author"}},[n("div",{staticClass:"window__content"},[n("v-layout",{attrs:{id:"users-card",wrap:"","justify-content-center":""}},[n("v-layout",{attrs:{"justify-content-center":""}},[n("v-flex",{attrs:{xs12:"","offset-xs2":"",sm12:"","offset-sm4":"","offset-md5":""}},[n("ImageCard",{attrs:{"image-src":"https://avatars1.githubusercontent.com/u/38668040","title-name":"Re-Krass","link-href":"https://github.com/Re-Krass"}})],1)],1)],1)],1)])],1)],1)],1)],1)},_=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{id:"theme-card",color:"accent",height:"100%",tile:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0",attrs:{id:"theme-card-headline"}},[t._v(t._s(t.headline))]),n("div",{staticClass:"mt-4"},[t._v(t._s(t.content))])])]),n("v-card-actions",{attrs:{id:"v-card-actions"}},[t.showTooltip?n("v-tooltip",{attrs:{bottom:"",color:"#424242"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{block:"",raised:"",color:"success",href:t.link,target:"_blank"}},a),[t._v(t._s(t.buttonText))])]}}],null,!1,1410541119)},[n("span",[t._v("coming soon™")])]):n("v-btn",{attrs:{block:"",raised:"",color:"success",href:t.link,target:"_blank"}},[t._v(t._s(t.buttonText))])],1)],1)},k=[],w={name:"ThemeCard",props:{headline:{type:String,default:""},content:{type:String,default:""},buttonText:{type:String,default:""},link:{type:String,default:""},showTooltip:Boolean}},S=w,j=(n("962c"),Object(m["a"])(S,T,k,!1,null,"4351a0e6",null)),C=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{id:"image-cards",color:"accent"}},[n("v-img",{attrs:{src:t.imageSrc,width:"200px",height:"200px",alt:t.titleName+" profile picture"}}),n("v-card-title",{attrs:{id:"v-card-title","primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("\n                "+t._s(t.titleName)+"\n                "),n("a",{attrs:{href:t.linkHref,target:"_blank"}},[n("v-icon",{attrs:{id:"user-link"}},[t._v("link")])],1)])])])],1)},D=[],I={name:"ImageCard",props:{imageSrc:{type:String,default:""},titleName:{type:String,default:""},linkHref:{type:String,default:""}}},L=I,M=(n("ea36"),Object(m["a"])(L,O,D,!1,null,"4bf6f94a",null)),$=M.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[n("v-list-tile",{staticClass:"pb-2"},[n("v-list-tile-avatar",{attrs:{id:"v-list-tile-avatar"}},[n("v-icon",[t._v(t._s(t.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.title))])],1)],1),t._t("default")],2)},E=[],P={name:"Section",props:{icon:{type:String,default:""},title:{type:String,default:""}}},U=P,Y=Object(m["a"])(U,B,E,!1,null,null,null),H=Y.exports,V={name:"Home",components:{ThemeCard:C,ImageCard:$,Section:H}},A=V,F=(n("28c7"),Object(m["a"])(A,y,_,!1,null,"aaafb28c",null)),R=F.exports;a["default"].use(x["a"]);var G=new x["a"]({routes:[{path:"/",name:"Re-Krass Homepage",component:R}]});n("bf40");a["default"].config.productionTip=!1,a["default"].use(i.a,{theme:{primary:"#1e1e1e",secondary:"#f5f5f5",accent:"#2d2d2d",error:"#ff3c4e",info:"#c8c8c8",success:"#39b54a",warning:"#319ae3"}}),a["default"].use(o.a),new a["default"]({router:G,render:function(t){return t(b)}}).$mount("#app")},7619:function(t,e,n){},"962c":function(t,e,n){"use strict";var a=n("7619"),r=n.n(a);r.a},cf25:function(t,e,n){"use strict";var a=n("0cfb"),r=n.n(a);r.a},d208:function(t,e,n){},ea36:function(t,e,n){"use strict";var a=n("23de"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a88ee419.js.map