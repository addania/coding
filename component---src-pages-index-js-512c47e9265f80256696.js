(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{217:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(206),c=n(101),o=(n(207),n(218)),i=n.n(o),u=n(219),s=n.n(u),m=n(220),p=n.n(m);var d=[i.a,s.a,p.a],f=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={currentPic:0},n.interval=null,n.nextPic=n.nextPic.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=a.prototype;return l.nextPic=function(){var e=this.state.currentPic,t=++e%d.length;this.setState({currentPic:t})},l.componentDidMount=function(){this.interval=setInterval(this.nextPic,5e3)},l.componentWillUnmount=function(){clearInterval(this.interval)},l.render=function(){var e=d[this.state.currentPic];return r.a.createElement("img",{src:e,alt:"",style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"100%"}})},a}(r.a.Component);n(213);n.d(t,"query",(function(){return h}));t.default=function(e){var t=e.data;return console.log(t),r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("h1",null,"Coding Adventure"),r.a.createElement("p",null,"Welcome to the blog about my journey through coding universe. I hope you will enjoy reading and find some useful information"),r.a.createElement(f,null),r.a.createElement("img",{src:"https://source.unsplash.com/random/400x200",alt:""}),r.a.createElement("h1",null,"ALL BLOGS"),r.a.createElement("p",null,t.allMarkdownRemark.totalCount," Posts"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Excerpt"))),r.a.createElement("tbody",null,t.allMarkdownRemark.edges.map((function(e,t){var n=e.node;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n.frontmatter.date),r.a.createElement(c.a,{to:n.fields.slug},r.a.createElement("td",{style:{color:"teal"}},n.frontmatter.title)),r.a.createElement("td",null,n.excerpt))}))))))};var h="3227303729"},218:function(e,t,n){e.exports=n.p+"static/car1-df4fa4f598eba83a4ea38a731f87bf07.jpg"},219:function(e,t,n){e.exports=n.p+"static/car2-43c91f713976f4a7f49e7d7807e21842.jpg"},220:function(e,t,n){e.exports=n.p+"static/car3-b4656185b7b57e18e6c76fb7be54bd45.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-512c47e9265f80256696.js.map