(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{230:function(e,t,l){"use strict";l.r(t),l.d(t,"query",(function(){return m}));l(16);var n=l(0),a=l.n(n),o=l(219),r=l(100),c=(l(220),l(221));l(231),l(232);t.default=function(e){var t=e.data;return console.log(t),a.a.createElement("div",null,a.a.createElement(o.a,null,a.a.createElement("h2",{style:{textAlign:"center"}},"Coding Adventures"),a.a.createElement("p",{style:{textAlign:"center"}},"Welcome to the blog about my journey through coding universe. I hope you will enjoy reading and find some useful information"),a.a.createElement(c.a,null),a.a.createElement("h3",{style:{textAlign:"center"}},"ALL ARTICLES"),a.a.createElement("p",{style:{textAlign:"center",fontSize:"15px",color:"grey"}},t.allMarkdownRemark.totalCount," Posts"),a.a.createElement("table",{style:{textAlign:"justify",textJustify:"inter-word"}},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Date"),a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"Excerpt"))),a.a.createElement("tbody",null,t.allMarkdownRemark.edges.map((function(e,t){var l=e.node;return a.a.createElement("tr",{key:t},a.a.createElement("td",null,l.frontmatter.date),a.a.createElement(r.a,{to:l.fields.slug},a.a.createElement("td",{style:{color:"teal"}},l.frontmatter.title)),a.a.createElement("td",null,s(l.excerpt)))}))))))};var m="3227303729",s=function(e){return e.replace(/(Photo by .+ from Pexels)|(Photo from \b(\w*.com\w*)\b)|(Photo from \w+)/,"")};console.log(s("Photo by Mia XXX from Pexels sth sth")),console.log(s("Photo from Pexels sth2 sth2")),console.log(s("Photo from Pexels.com sth3 sth3"))}}]);
//# sourceMappingURL=component---src-pages-index-js-4defcd09191e232aa247.js.map