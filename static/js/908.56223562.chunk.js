"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[908],{908:function(t,r,n){n.r(r),n.d(r,{default:function(){return v}});var e=n(861),a=n(885),c=n(687),u=n.n(c),s=n(689),i=n(791),o=n(390),p=n(184),f=function(t){var r=t.cast;return(0,p.jsx)("ul",{children:r.map((function(t){var r=t.id,n=t.name,e=t.character,a=t.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:"actor"}),(0,p.jsx)("p",{children:n}),(0,p.jsxs)("p",{children:["Character: ",e," "]})]},r)}))})},v=function(){var t=(0,i.useState)(),r=(0,a.Z)(t,2),n=r[0],c=r[1],v=(0,s.UO)().movieId;return(0,i.useEffect)((function(){function t(){return(t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.M1)(Number(v));case 3:r=t.sent,c(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:return t.prev=10,console.log("cast2",r),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[v]),(0,p.jsx)("div",{children:n&&(0,p.jsx)(f,{cast:n})})}},390:function(t,r,n){n.d(r,{Df:function(){return i},M1:function(){return p},Pg:function(){return o},V0:function(){return v},tx:function(){return f}});var e=n(861),a=n(687),c=n.n(a),u=n(44);u.ZP.defaults.baseURL="https://api.themoviedb.org";var s="c3d65b3aa74525a580b5ea03f6c1f1d0",i=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/3/trending/movie/day?api_key=".concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/3/movie/".concat(r,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/3/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/3/movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/3/search/movie?api_key=".concat(s,"&query=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=908.56223562.chunk.js.map