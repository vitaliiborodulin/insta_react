(this.webpackJsonpinsta_react=this.webpackJsonpinsta_react||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.9e8a2b39.svg"},21:function(e,t,a){e.exports=a.p+"static/media/error.3b8ad90a.png"},22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=(a(27),a(3)),l=a(7),i=a(9),u=a(8),m=a(10),p=a(18),h=a.n(p),f=a(5),d=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container h-flex"},r.a.createElement(f.b,{to:"/",className:"logo"},r.a.createElement("img",{src:h.a,alt:"logo"})),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/",className:"menu__links"},"\u041b\u0435\u043d\u0442\u0430")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/profile",className:"menu__links"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"))))))}}]),t}(n.Component),b=a(6),v=a.n(b),E=a(12),w=function e(){var t=this;Object(o.a)(this,e),this.getResource=function(){var e=Object(E.a)(v.a.mark((function e(a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a,"; received ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPosts=Object(E.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/posts/");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getAllPhotos=Object(E.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/posts/");case 2:return a=e.sent,e.abrupt("return",a.map(t._transformPosts));case 4:case"end":return e.stop()}}),e)}))),this._transformPosts=function(e){return{src:e.src,alt:e.alt}},this._apiBase="http://localhost:3000"},y=function(e){var t=e.min,a=e.src,n=e.alt,c=e.name;return r.a.createElement("a",{href:"/",className:t?"user min":"user"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("div",null,c))},g=a(21),j=a.n(g),k=function(){return r.a.createElement("img",{src:j.a,alt:"error"})},C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).InstaService=new w,a.state={posts:[],error:!1},a.onPostLoaded=function(e){a.setState({posts:e,error:!1}),console.log(a.state.posts)},a.onError=function(){a.setState({error:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updatePosts()}},{key:"updatePosts",value:function(){this.InstaService.getAllPosts().then(this.onPostLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map((function(e){var t=e.name,a=e.altname,n=e.photo,c=e.src,s=e.alt,o=e.descr,l=e.id;return r.a.createElement("div",{key:l,className:"post"},r.a.createElement(y,{src:n,alt:a,name:t,min:!0}),r.a.createElement("img",{src:c,alt:s}),r.a.createElement("div",{className:"post__name"},t),r.a.createElement("div",{className:"post__descr"},o))}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.posts;if(t)return r.a.createElement(k,null);var n=this.renderItems(a);return r.a.createElement("div",{className:"left"},n)}}]),t}(n.Component);function P(){return r.a.createElement("div",{className:"right"},r.a.createElement(y,{src:"https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg",alt:"man",name:"Jack"}),r.a.createElement("div",{className:"users__block"},r.a.createElement(y,{src:"https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg",alt:"woman",name:"Rachel",min:!0}),r.a.createElement(y,{src:"https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg",alt:"man",name:"Daniel",min:!0}),r.a.createElement(y,{src:"https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg",alt:"woman",name:"Rachel",min:!0}),r.a.createElement(y,{src:"https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg",alt:"man",name:"Daniel",min:!0})))}function O(){return r.a.createElement("div",{className:"container feed"},r.a.createElement(C,null),r.a.createElement(P,null))}var J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).InstaService=new w,a.state={error:!1,photos:[]},a.onError=function(){a.setState({error:!0})},a.onPhotosLoaded=function(e){a.setState({error:!1,photos:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updatePhotos()}},{key:"updatePhotos",value:function(){this.InstaService.getAllPhotos().then(this.onPhotosLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map((function(e){var t=e.src,a=e.alt;return r.a.createElement("img",{src:t,alt:a})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.photos;if(t)return r.a.createElement(k,null);var n=this.renderItems(a);return r.a.createElement("div",{className:"palette"},n)}}]),t}(n.Component),N=function(){return r.a.createElement("div",{className:"container profile"},r.a.createElement(y,{src:"https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg",alt:"man",name:"Jack"}),r.a.createElement(J,null))},_=a(4);var x=function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(f.a,{basename:"/insta"}),r.a.createElement(_.a,{path:"/",component:O,exact:!0}),r.a.createElement(_.a,{path:"/profile",component:N,exact:!0})))};s.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6f75d212.chunk.js.map