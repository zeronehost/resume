(function(t){function n(n){for(var i,c,r=n[0],a=n[1],l=n[2],f=0,p=[];f<r.length;f++)c=r[f],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);u&&u(n);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],i=!0,r=1;r<e.length;r++){var a=e[r];0!==s[a]&&(i=!1)}i&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var i={},s={app:0},o=[];function c(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=i,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)c.d(e,i,function(n){return t[n]}.bind(null,i));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var u=a;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0bf3":function(t,n,e){},"20be":function(t,n,e){"use strict";var i=e("0bf3"),s=e.n(i);s.a},"2c0c":function(t,n,e){"use strict";var i=e("9a0e"),s=e.n(i);s.a},"2e9d":function(t,n,e){"use strict";var i=e("3519"),s=e.n(i);s.a},3519:function(t,n,e){},"36e8":function(t){t.exports=JSON.parse('{"name":"XXX","info":[{"icon":"icon-email","label":"XXX@XXX.com"},{"icon":"icon-phone","label":"13012345678"},{"icon":"icon-job","label":"前端工程师"}],"lists":[{"title":"教育经历","icon":"icon-edu","lists":[{"title":"XXXX大学 - XX专业 （本科）","date":"2014.07~2018.06"}]},{"title":"工作经历","icon":"icon-work","lists":[{"title":"XXXX公司 - 前端开发工程师","date":"2018.07~至今","icon":"icon-project","projects":[{"title":"XX项目","date":"2019.12~2020.02","desc":"深度参与XX项目迭代XX的前端开发工作，独立承担并完成XX、XX、XXXX等功能点的开发","contents":["主要维护并修复XX、XX、XX等功能点bug若干","配合UI和后端，根据产品需求提供H5页面嵌入到后台模板","主要参与XXXXXXX的静态页面开发工作"]},{"title":"XX项目","date":"2019.08~2019.10","contents":["主要参与公司产品「XXXX」的前端开发工作，实现接入微博、微信、QQ等 第三方账号登录等功能。项目采用技术栈WordPress+NAMP","活动页面的开发（抽奖活动以及承接外包页面）"]}]}]},{"title":"技能清单","icon":"icon-skill","lists":["熟悉JavaScript，了解TypeScript，掌握ES6及以上常用语法","熟悉Vue.js开发项目","熟悉前端工程化，熟悉Webpack/Rollup.js等打包工具","了解Sass、Stylus等CSS预处理器","了解Flutter/小程序开发"]},{"title":"其他","icon":"icon-other","desc":"能快速上手新的框架"}]}')},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("x-title",{attrs:{title:t.name,info:t.info}}),t._l(t.lists,(function(t,n){return e("x-card",{key:n,attrs:{info:t}})}))],2)},o=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"header"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("div",{staticClass:"info"},t._l(t.info,(function(n,i){return e("span",{key:i,staticClass:"info-item",class:[t.infoClass(n.icon)]},[t._v(" "+t._s(n.label)+" ")])})),0)])},r=[],a={name:"x-title",props:{title:{type:String,required:!0},info:{type:Array,default:function(){return[]}}},computed:{infoClass:function(){return function(t){return t?"iconfont ".concat(t):"icon-1"}}}},l=a,u=(e("2c0c"),e("2877")),f=Object(u["a"])(l,c,r,!1,null,null,null),p=f.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-title",class:t.classes},[t._v(t._s(t.info.title))]),e("div",{staticClass:"card-content"},[e("div",[t._v(t._s(t.info.desc))]),t._l(t.info.lists,(function(t,n){return e("x-list",{key:n,attrs:{info:t}})}))],2)])},X=[],v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list"},[e("div",{staticClass:"list-title"},[e("span",{staticClass:"title",class:t.classes},[t._v(t._s(t.isString?t.info:t.info.title))]),e("span",{staticClass:"date"},[t._v(t._s(t.info.date))])]),t.isString?t._e():e("div",{staticClass:"list-content"},[t.info.desc?e("div",{staticClass:"list-desc"},[t._v(t._s(t.info.desc))]):t._e(),t.info.projects?t._l(t.info.projects,(function(n,i){return e("div",{key:i,staticClass:"sub-list"},[e("div",{staticClass:"sub-list-title"},[e("span",{staticClass:"title",class:[t.subClass(n.icon)]},[t._v(t._s(n.title))]),e("span",{staticClass:"date"},[t._v(t._s(n.date))])]),e("div",{staticClass:"sub-list-content"},[n.desc?e("div",{staticClass:"list-desc"},[t._v(t._s(n.desc))]):t._e(),n.contents?t._l(n.contents,(function(n,i){return e("p",{key:i,staticClass:"icon-3"},[t._v(t._s(n))])})):t._e()],2)])})):t._e()],2)])},b=[];e("d3b7"),e("25f0");function _(t){return"[object String]"===Object.prototype.toString.call(t)}var h={name:"x-list",props:{info:[Object,String]},computed:{classes:function(){return _(this.info)?"icon-1":this.info.icon?"iconfont ".concat(this.info.icon):"icon-1"},subClass:function(){return function(t){return t?"iconfont ".concat(t):"icon-2"}},isString:function(){return _(this.info)}}},y=h,C=(e("2e9d"),Object(u["a"])(y,v,b,!1,null,null,null)),m=C.exports,j={name:"x-card",components:{XList:m},props:{info:Object},computed:{classes:function(){return this.info.icon?"iconfont ".concat(this.info.icon):"icon-1"}}},g=j,S=(e("20be"),Object(u["a"])(g,d,X,!1,null,null,null)),O=S.exports,x=e("36e8"),w={name:"App",components:{XTitle:p,XCard:O},data:function(){return x}},k=w,P=(e("7faf"),Object(u["a"])(k,s,o,!1,null,null,null)),E=P.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)}}).$mount("#app")},"7faf":function(t,n,e){"use strict";var i=e("b8ff"),s=e.n(i);s.a},"9a0e":function(t,n,e){},b8ff:function(t,n,e){}});
//# sourceMappingURL=app.5ed804e9.js.map