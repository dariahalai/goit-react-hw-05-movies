"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[798],{798:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,a,o,u,c=t(439),l=t(791),s=t(87),h=t(689),p=t(596),d=(t(462),t(820)),g=t(425),f=t(786),x=t(168),m=t(444),v=m.ZP.div(r||(r=(0,x.Z)(["\n  padding-top: 25px;\n"]))),Z=m.ZP.input(i||(i=(0,x.Z)(["\n  width: 300px;\n  height: 40px;\n  padding: 5px;\n  margin-right: 10px;\n"]))),y=m.ZP.button(a||(a=(0,x.Z)(["\n  @media screen and (max-width: 768px) {\n    margin-top: 10px;\n  }\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: transparent;\n  border: 2px solid green;\n  &:hover {\n    cursor: pointer;\n    background-color: green;\n  }\n"]))),_=m.ZP.ul(o||(o=(0,x.Z)(["\nmargin-top: 20px;\n"]))),w=(0,m.ZP)(s.rU)(u||(u=(0,x.Z)(["\n  color: black;\n  display: flex;\n  align-items: center;\n  &:hover {\n    color: green;\n    font-weight: 500;\n  }\n"]))),b=t(184),j=function(){var n=(0,l.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],i=(0,s.lr)(),a=(0,c.Z)(i,2),o=a[0],u=a[1],x=(0,l.useState)(!1),m=(0,c.Z)(x,2),j=m[0],k=m[1],q=o.get("query"),S=(0,h.TH)();(0,l.useEffect)((function(){""!==q&&null!==q&&(k(!0),fetch("https://api.themoviedb.org/3/search/movie?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US&query=".concat(q,"&page=1&include_adult=false")).then((function(n){return n.json()})).then((function(n){var e=n.results;e.length||p.Am.error("Try again with another search word");var t=e.map((function(n){return{id:n.id,original_title:n.original_title}}));r(t)})).catch((function(){p.Am.error("Something went wrong")})).finally((function(){return k(!1)})))}),[q]);return j?(0,b.jsx)(f.Z,{}):(0,b.jsxs)(v,{children:[(0,b.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;""!==e.query.value&&u({query:e.query.value})},children:[(0,b.jsx)(Z,{type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,b.jsx)(y,{type:"submit",children:(0,b.jsx)(d.RB5,{size:"20"})})]}),t.length>0&&(0,b.jsx)(_,{children:t.map((function(n){var e=n.id,t=n.original_title;return(0,b.jsx)("li",{children:(0,b.jsxs)(w,{state:{from:S},to:"/movies/".concat(e),children:[(0,b.jsx)(g.MGh,{style:{paddingRight:"2px"}}),t]})},e)}))})]})}}}]);
//# sourceMappingURL=798.d6f14f97.chunk.js.map