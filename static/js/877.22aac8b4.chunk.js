"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[877],{877:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var s=n(439),c=n(689),i=n(791),a="ReviewsPage_reviewsList__GD9rp",r="ReviewsPage_reviewsListItem__8PHZw",o=n(184),u=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],u=t[1],f=(0,c.UO)().movieId;return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(f,"/reviews?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){var t=e.results;u(t),console.log(e)})).catch((function(e){console.log(e)}))}),[f]),(0,o.jsx)("ul",{className:a,children:n.map((function(e){var t=e.author,n=e.content;return(0,o.jsxs)("li",{className:r,children:[(0,o.jsx)("h4",{children:t}),(0,o.jsx)("p",{children:n})]},t)}))})}}}]);
//# sourceMappingURL=877.22aac8b4.chunk.js.map