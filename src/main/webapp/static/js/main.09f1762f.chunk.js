(this.webpackJsonprouterdemo=this.webpackJsonprouterdemo||[]).push([[0],{164:function(e,t,n){e.exports=n(323)},169:function(e,t,n){},170:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(169),n(22)),u=n(23),i=n(25),s=n(24),m=(n(170),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"buyCar"),r.a.createElement("h2",null,"Select your role"),r.a.createElement("h3",null,"if you didn't login it will jump to login after your choice then back this page"),r.a.createElement("ul",{role:"nav"},r.a.createElement("li",null,r.a.createElement("a",{href:"/customer"},"customer")),r.a.createElement("li",null,r.a.createElement("a",{href:"/saler"},"salerman")),r.a.createElement("li",null,r.a.createElement("a",{href:"/admin"},"admin"))),r.a.createElement("h2",null,r.a.createElement("a",{href:"/logout"},"logout")),r.a.createElement("h2",null,"Or create new account"))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(109),d=n(41),f=n(39),p=n(66),y=n(325),E=n(49),v=n(327),b=(n(116),p.a.Option),g=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={myself:{},msg:[],user:[],targetId:{},textToSent:"",sent:!1},a.onSelectChange=a.onSelectChange.bind(Object(f.a)(a)),a.onTextChange=a.onTextChange.bind(Object(f.a)(a)),a.onSendClick=a.onSendClick.bind(Object(f.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.getUserBy),fetch("".concat("","/api/user/").concat(this.props.getUserBy)).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({myself:t}),e.setState({msg:t.messages})})),fetch("".concat("","/api/user")).then((function(e){return e.json()})).then((function(t){var n=e.props.toUser,a=[];t.map((function(e){e.role==n&&a.push(e)})),e.setState({user:a})}))}},{key:"onSelectChange",value:function(e){this.setState({targetId:e})}},{key:"onTextChange",value:function(e){var t=e.target.value;this.setState({textToSent:t})}},{key:"onSendClick",value:function(e){var t=this,n=this.state.myself,a=this.state.user[this.state.targetId],r={},c="".concat(n.name,"@").concat(a.name,": ").concat(this.state.textToSent);"Salesman"==this.props.toUser?r={text:c,customer:n,salesman:a}:"Customer"==this.props.toUser&&(r={text:c,customer:a,salesman:n}),console.log(r),console.log(r),fetch("".concat("","/api/message"),{body:JSON.stringify(r),cache:"no-cache",credentials:"same-origin",headers:{"user-agent":"Mozilla/4.0 MDN Example","content-type":"application/json"},method:"POST",mode:"cors",redirect:"follow",referrer:"no-referrer"}).then((function(e){return console.log(e.json())})),this.setState({sent:!0}),setTimeout((function(){t.setState({sent:!1})}),2e3)}},{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",null,r.a.createElement("h1",null,"Hi ",this.state.myself.name," you have message"),r.a.createElement("ul",null,this.state.msg.map((function(e){return r.a.createElement("li",{key:e.id},e.text)}))),r.a.createElement(p.a,{style:{width:120},onChange:this.onSelectChange},this.state.user.map((function(e,t){return r.a.createElement(b,{key:t},e.name)}))),r.a.createElement(y.a,{style:{width:520},placeholder:"massage",onChange:this.onTextChange}),r.a.createElement(E.a,{type:"primary",onClick:this.onSendClick},"Send"),e.state.sent?r.a.createElement(v.a,{message:"Send Plz refresh",type:"success"}):r.a.createElement("div",null))}}]),n}(a.Component),j=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Customer"),r.a.createElement(g,{toUser:"Salesman",getUserBy:"profile"}))}}]),n}(a.Component),O=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"saler"),r.a.createElement(g,{toUser:"Customer",getUserBy:"profile"}))}}]),n}(a.Component),k=n(324),S=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={data:[]},a.updateData=a.updateData.bind(Object(f.a)(a)),a}return Object(u.a)(n,[{key:"updateData",value:function(){var e=this;fetch("".concat("","/api/user")).then((function(e){return e.json()})).then((function(t){t.map((function(e){e.key=e.id})),e.setState({data:t})}))}},{key:"componentDidMount",value:function(){this.updateData()}},{key:"render",value:function(){var e=this.state.data,t=[{title:"id",dataIndex:"id",key:"id",render:function(e){return r.a.createElement("a",null,e)}},{title:"username",dataIndex:"username",key:"username",render:function(e){return r.a.createElement("a",null,e)}},{title:"password",dataIndex:"password",key:"password",render:function(e){return r.a.createElement("a",null,e)}},{title:"name",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("a",null,e)}},{title:"email",dataIndex:"email",key:"email",render:function(e){return r.a.createElement("a",null,e)}},{title:"phone",dataIndex:"phone",key:"phone",render:function(e){return r.a.createElement("a",null,e)}},{title:"role",dataIndex:"role",key:"role",render:function(e){return r.a.createElement("a",null,e)}}];return r.a.createElement("div",null,r.a.createElement(k.a,{rowSelection:{type:"radio"},columns:t,dataSource:e}))}}]),n}(a.Component),C=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"admin"),r.a.createElement(S,null))}}]),n}(a.Component),x=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:Object(d.f)(m)}),r.a.createElement(d.a,{exact:!0,path:"/customer",component:Object(d.f)(j)}),r.a.createElement(d.a,{exact:!0,path:"/saler",component:Object(d.f)(O)}),r.a.createElement(d.a,{exact:!0,path:"/admin",component:Object(d.f)(C)})))}}]),n}(a.Component);o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[164,1,2]]]);
//# sourceMappingURL=main.09f1762f.chunk.js.map