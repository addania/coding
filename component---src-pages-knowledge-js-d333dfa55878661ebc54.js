(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"00L7":function(t,e,n){t.exports=n.p+"static/pic4-a4c83b40da9b8b17070e6fd42025f4a1.jpg"},"33Ii":function(t,e,n){t.exports=n.p+"static/pic7-81a5ff5bdd242896b9c7b7aec284eb4a.jpg"},"4BsA":function(t,e,n){t.exports=n.p+"static/pic11-43e5ccb4ff99b3f95a4e8029f049318d.jpg"},"9Xox":function(t,e,n){t.exports=n.p+"static/pic1-3fc24a8339b648bc4359433a5e8a5e4c.jpg"},"Dl+o":function(t,e,n){t.exports=n.p+"static/pic6-5616af8c531330913bc30a31f61df97c.jpg"},EDuE:function(t,e,n){},F14q:function(t,e,n){t.exports=n.p+"static/pic3-0c53c057217ff7ddaa04b012f79eefde.jpg"},Iu2N:function(t,e,n){t.exports=n.p+"static/pic13-3e9cb600d74f81de8edc5b166463834a.jpg"},J1kr:function(t,e,n){t.exports=n.p+"static/pic12-f00211058e83eb7929ed7ff89b29b963.jpg"},MwDT:function(t,e,n){t.exports=n.p+"static/pic10-88024c4280d8ac05fd9d4f8ec9f9454b.jpg"},OTM7:function(t,e,n){t.exports=n.p+"static/pic2-983e6cdcc8ee041012ac2548be723d9e.jpg"},XEZS:function(t,e,n){t.exports=n.p+"static/pic9-c4188f042238e7521738942177c2075b.jpg"},bg8b:function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var a=n("JX7q"),c=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("9Xox"),l=n.n(i),f=n("OTM7"),u=n.n(f),p=n("F14q"),s=n.n(p),d=n("00L7"),b=n.n(d),m=n("dgW1"),g=n.n(m),x=n("Dl+o"),h=n.n(x),E=n("33Ii"),y=n.n(E),j=n("iKiP"),v=n.n(j),w=n("XEZS"),P=n.n(w),I=n("MwDT"),M=n.n(I),k=n("4BsA"),A=n.n(k),D=n("J1kr"),J=n.n(D),q=n("Iu2N"),L=n.n(q),T=[l.a,u.a,s.a,b.a,g.a,h.a,y.a,v.a,P.a,M.a,A.a,J.a,L.a],S=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={currentPic:Math.floor(12*Math.random())},n.interval=null,n.nextPic=n.nextPic.bind(Object(a.a)(n)),n}Object(c.a)(e,t);var n=e.prototype;return n.nextPic=function(){var t=Math.floor(12*Math.random());this.setState({currentPic:t})},n.componentDidMount=function(){this.interval=setInterval(this.nextPic,5e3)},n.componentWillUnmount=function(){clearInterval(this.interval)},n.render=function(){var t=T[this.state.currentPic];return o.a.createElement("img",{src:t,alt:"",style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"100%"}})},e}(o.a.Component)},dgW1:function(t,e,n){t.exports=n.p+"static/pic5-433cf701caa7d9891c4ad78bca2b8929.jpg"},iKiP:function(t,e,n){t.exports=n.p+"static/pic8-ff92fc0a231dbd41fcd585446c1a17a1.jpg"},jJ5y:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),c=n.n(a),r=n("Bl7J"),o=n("Wbzz"),i=(n("vrFN"),n("bg8b"));n("q4sD"),n("EDuE");e.default=function(t){var e=t.data;return console.log(e),c.a.createElement("div",null,c.a.createElement(r.a,null,c.a.createElement("h2",{style:{textAlign:"center"}},"Coding Adventures"),c.a.createElement("p",{style:{textAlign:"center"}},"Welcome to the blog about my journey through coding universe. I hope you will enjoy reading and find some useful information"),c.a.createElement(i.a,null),c.a.createElement("h3",{style:{textAlign:"center"}},"ALL ARTICLES"),c.a.createElement("p",{style:{textAlign:"center",fontSize:"15px",color:"grey"}},e.allMarkdownRemark.totalCount," Posts"),c.a.createElement("table",{style:{textAlign:"justify",textJustify:"inter-word"}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Date"),c.a.createElement("th",null,"Title"),c.a.createElement("th",null,"Excerpt"))),c.a.createElement("tbody",null,e.allMarkdownRemark.edges.map((function(t,e){var n=t.node;return c.a.createElement("tr",{key:e},c.a.createElement("td",null,n.frontmatter.date),c.a.createElement(o.a,{to:n.fields.slug},c.a.createElement("td",{style:{color:"teal"}},n.frontmatter.title)),c.a.createElement("td",null,l(n.excerpt)))}))))))};var l=function(t){return t.replace(/(Photo by .+ from Pexels)|(Photo by .+ from Pixabay)|(Photo from \b(\w*.com\w*)\b)|(Photo from \w+)/,"")}},q4sD:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-knowledge-js-d333dfa55878661ebc54.js.map