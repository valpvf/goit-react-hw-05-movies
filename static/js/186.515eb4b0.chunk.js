"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(689),u=n(243),s=n(184);t.default=function(){var e=(0,a.UO)(),t=(0,c.useState)([]),n=(0,r.Z)(t,2),o=n[0],i=n[1],f=e.movieId;return(0,c.useEffect)((function(e){f&&(0,u.V)("/movie/".concat(f,"/reviews")).then((function(e){return i(e)})).catch((function(e){return console.log(e.message)}))}),[f]),(0,s.jsx)("ul",{children:o.results&&0!==o.total_pages?o.results.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("h3",{children:"We don't have any reviews for this movie."})})}},243:function(e,t,n){n.d(t,{V:function(){return s}});var r=n(861),c=n(757),a=n.n(c),u=n(924);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(a().mark((function e(t,n,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,!e.t0){e.next=5;break}return e.next=4,u.Z.get(t,{params:{api_key:"55c2c220c53d8c4fecff89ed1dddc5f1",page:r,query:n}}).then((function(e){return e.data}));case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.515eb4b0.chunk.js.map