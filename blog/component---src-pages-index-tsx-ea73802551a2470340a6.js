(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(149),r=n(154),o=n(155),l=n(150),c=i.b.div.withConfig({componentId:"sc-1l9x650-0"})(["h1,h2{display:inline;line-height:",";}"],l.b.lineHeight.hero),s=i.b.div.withConfig({componentId:"sc-1l9x650-1"})(["margin-top:100px;"]);t.default=function(){return a.createElement(r.a,null,a.createElement(o.a,null,a.createElement(c,null,a.createElement("h1",null,"Hi There.")," ",a.createElement("h2",null,"I'm Alexsey Ramzaev. Frontend developer.")),a.createElement(s,null,a.createElement("h3",null,"Work"),a.createElement("p",null,"Search 🎯"),a.createElement("h3",null,"Extra Curricular"),a.createElement("p",null,"On my own time, I contribute to open-source projects like"," ",a.createElement("a",{href:"https://github.com/go-martini/martini"},"Martini")," "))))}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return l});var a={brand:"#2963ff",brandLight:"#608cff",brandDark:"#0942ff",lilac:"#9d7cbf",accent:"#cfa5ff",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000",ink:"rgba(0, 0, 0, .7)",linkInk:"#4100ba"},i={sansSerif:'"Avenir",-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},r={sm:600,md:720,lg:960,xl:1140},o={fontSize:{base:10,regular:16,large:18},headingSizes:{h1:4,h2:3,h3:2,h4:1},lineHeight:{regular:1.5,heading:1,hero:1.2},containerPadding:1.5,gridUnit:10},l={header:40}},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexsey Ramzaev",description:"Pain, python and javascript"}}}}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(54),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149),o=n(150),l=n(152),c=n(156),s=n.n(c),d=(n(157),n(158)),u=n(32),m=n.n(u),f=r.b.header.withConfig({componentId:"e614b6-0"})(["height:","px;color:",";background:",";"],o.d.header,Object(d.a)(.5,o.a.white),o.a.ui.light),h=r.b.div.withConfig({componentId:"e614b6-1"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:100%;border-bottom:1px solid ",";margin:0 ","rem;"],o.a.black,o.b.containerPadding),p=r.b.div.withConfig({componentId:"e614b6-2"})(["a{color:",";padding-left:","px;}"],o.a.black,o.b.gridUnit),g=r.b.div.withConfig({componentId:"e614b6-3"})(["a{color:",";}"],o.a.black),b=function(e){var t=e.title;return a.createElement(f,null,a.createElement(h,null,a.createElement(g,null,a.createElement(m.a,{to:"/blog/"},t)),a.createElement(p,null,a.createElement(m.a,{to:"/blog/posts/my-library/"},"Library"),a.createElement(m.a,{to:"/blog/articles"},"Articles"),a.createElement(m.a,{to:"/blog/portfolio"},"Portfolio"))))},v=r.b.div.withConfig({componentId:"sc-1u7yc7c-0"})(["display:flex;flex-direction:column;min-height:100vh;"]),E=function(e){var t=e.children,n=e.className;return a.createElement(v,{className:n},t)},y=r.b.main.withConfig({componentId:"sc-14voxok-0"})(["display:flex;flex-direction:column;flex:1;background:",";"],o.a.ui.light),w=function(e){var t=e.children,n=e.className;return a.createElement(y,{className:n},t)},x=n(4),k=n.n(x),C=(n(151),i.a.createContext({})),I=function(e){return i.a.createElement(C.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};I.propTypes={data:k.a.object,query:k.a.string.isRequired,render:k.a.func,children:k.a.func};var N=function(e){var t=e.children;return a.createElement(I,{query:"991718019",render:function(e){return a.createElement(E,null,a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"gatsbyjs, gatsby, javascript, sample, something"}]}),a.createElement(b,{title:e.site.siteMetadata.title}),a.createElement(w,null,t))},data:l})},S=r.b.div.withConfig({componentId:"sc-1pdsugb-0"})(["display:block;flex:1;position:relative;padding:","rem;margin-bottom:3rem;"],o.b.containerPadding);t.a=function(e){var t=e.children,n=e.className;return a.createElement(N,null,a.createElement(S,{className:n},t))}},155:function(e,t,n){"use strict";var a=n(0),i=n(149),r=n(150),o=function(e){return e/r.b.fontSize.regular},l=i.b.div.withConfig({componentId:"sc-1em4mie-0"})(["position:relative;width:auto;max-width:","em;"],o(r.e.md));t.a=function(e){var t=e.children,n=e.className;return a.createElement(l,{className:n},t)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ea73802551a2470340a6.js.map