(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(26),n(27),n(5)),s=n(4),u=n(14),i=n(10),d=n(18),m=n(3),p="display",f="load_items",h="remove_item",b="sort_table",v="clear_all";function E(){return function(e){e({type:f}),Promise.all([j("https://jsonplaceholder.typicode.com/todos"),j("https://jsonplaceholder.typicode.com/users")]).then(function(t){return e({type:p,data:t})})}}function j(e){return fetch(e).then(function(e){return e.json()})}var O={data:null,selectedTodo:null,requested:!1};var y=n(15),w=n(16),k=n(19),g=n(17),C=n(20);var N=Object(s.b)(function(e,t){return{title:t.todo.title,user:t.todo.user.name,email:t.todo.user.email,status:t.todo.completed,index:t.index}},function(e){return{removeTodo:function(t){return e(function(e){return{type:h,id:e}}(t))}}})(function(e){var t=e.title,n=e.user,a=e.email,o=e.status,c=e.index;return console.log(o),r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",{className:"userInfo"},r.a.createElement("a",{className:"email",href:"mailto: ".concat(a)},r.a.createElement("span",{className:"noselect"},"\u2709")),n),r.a.createElement("td",{className:o?"completed":"notCompleted"},o?"completed":"not completed"),r.a.createElement("td",{onClick:function(){return e.removeTodo(c)},className:"deleted"},"\xd7"))}),T=function(e){function t(){return Object(y.a)(this,t),Object(k.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;return this.props.request?this.props.request&&null!==this.props.listTodos?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"noselect",onClick:function(){return e.props.sort("title")}},"Title"),r.a.createElement("th",{className:"noselect",onClick:function(){return e.props.sort("author")}},"User"),r.a.createElement("th",{className:"noselect",onClick:function(){return e.props.sort("completed")}},"Completed"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.props.listTodos.map(function(e){return console.log(e),r.a.createElement(N,{todo:e,index:e.id,key:e.id})}))):r.a.createElement("div",{className:"loading"},"loading"):r.a.createElement("button",{className:"loadButton",onClick:this.props.loadTodos},"load")}}]),t}(a.Component);var q=Object(s.b)(function(e){return{request:e.requested,listTodos:e.data}},function(e){return{loadTodos:function(){return e(E())},sort:function(t){return e(function(e){return{type:b,value:e}}(t))},clearAll:function(){return e({type:v})}}})(T),x=Object(l.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)({},e,{requested:!0});case p:var n=Object(d.a)(t.data,2),a=n[0],r=n[1];return Object(m.a)({},e,{data:a.map(function(e){return Object(m.a)({},e,{user:r.find(function(t){return t.id===e.userId})})})});case b:var o=Object(i.a)(e.data);switch(t.value){case"author":o.sort(function(e,t){return e.user.name.localeCompare(t.user.name)});break;case"title":o.sort(function(e,t){return e.title.localeCompare(t.title)});break;case"completed":o.sort(function(e,t){return t.completed-e.completed})}return Object(m.a)({},e,{data:o});case h:return Object(m.a)({},e,{data:e.data.filter(function(e){return e.id!==t.id})});case v:var c=Object(i.a)(e.data);return c.length=0,Object(m.a)({},e,{data:c});default:return e}},Object(l.a)(u.a));var _=function(){return r.a.createElement(s.a,{store:x},r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.6512f2b7.chunk.js.map