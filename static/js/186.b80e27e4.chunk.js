"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(439),c=n(791),u=n(689),a=n(243),s=n(184);t.default=function(){var e=(0,u.UO)(),t=(0,c.useState)([]),n=(0,r.Z)(t,2),o=n[0],i=n[1],f=e.movieId.slice(1);return(0,c.useEffect)((function(e){f&&(0,a.V)("/movie/".concat(f,"/reviews")).then((function(e){return i(e)})).catch((function(e){return console.log(e.message)}))}),[f]),(0,s.jsx)("ul",{children:o.results&&0!==o.total_pages?o.results.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("h3",{children:"We don't have any reviews for this movie."})})}},243:function(e,t,n){n.d(t,{V:function(){return c}});var r=n(924);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(e,t,n){return r.Z.get(e,{params:{api_key:"55c2c220c53d8c4fecff89ed1dddc5f1",page:n,query:t}}).then((function(e){return e.data}))}}}]);
//# sourceMappingURL=186.b80e27e4.chunk.js.map