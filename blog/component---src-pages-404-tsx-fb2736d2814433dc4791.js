(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(32),r=n.n(i),o=n(154),c=n(155);t.default=function(){return a.createElement(o.a,null,a.createElement(c.a,null,a.createElement("h1",null,"404: Page not found."),a.createElement("p",null,"You've hit the void. ",a.createElement(r.a,{to:"/"},"Go back."))))}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return c});var a={brand:"#2963ff",brandLight:"#608cff",brandDark:"#0942ff",lilac:"#9d7cbf",accent:"#cfa5ff",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000",ink:"rgba(0, 0, 0, .7)",linkInk:"#4100ba"},i={sansSerif:'"Avenir",-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},r={sm:600,md:720,lg:960,xl:1140},o={fontSize:{base:10,regular:16,large:18},headingSizes:{h1:4,h2:3,h3:2,h4:1},lineHeight:{regular:1.5,heading:1,hero:1.2},containerPadding:1.5,gridUnit:10},c={header:40}},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexsey Ramzaev",description:"Pain, python and javascript"}}}}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(54),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(149),o=n(150),c=n(152),l=n(156),s=n.n(l),d=(n(157),n(158)),u=n(32),m=n.n(u),f=r.b.header.withConfig({componentId:"e614b6-0"})(["height:","px;color:",";background:",";"],o.d.header,Object(d.a)(.5,o.a.white),o.a.ui.light),b=r.b.div.withConfig({componentId:"e614b6-1"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:100%;border-bottom:1px solid ",";margin:0 ","rem;"],o.a.black,o.b.containerPadding),g=r.b.div.withConfig({componentId:"e614b6-2"})(["a{color:",";padding-left:","px;}"],o.a.black,o.b.gridUnit),h=r.b.div.withConfig({componentId:"e614b6-3"})(["a{color:",";}"],o.a.black),p=function(e){var t=e.title;return a.createElement(f,null,a.createElement(b,null,a.createElement(h,null,a.createElement(m.a,{to:"/blog/"},t)),a.createElement(g,null,a.createElement(m.a,{to:"/blog/posts/my-library/"},"Library"),a.createElement(m.a,{to:"/blog/articles"},"Articles"),a.createElement(m.a,{to:"/blog/portfolio"},"Portfolio"))))},v=r.b.div.withConfig({componentId:"sc-1u7yc7c-0"})(["display:flex;flex-direction:column;min-height:100vh;"]),y=function(e){var t=e.children,n=e.className;return a.createElement(v,{className:n},t)},E=r.b.main.withConfig({componentId:"sc-14voxok-0"})(["display:flex;flex-direction:column;flex:1;background:",";"],o.a.ui.light),w=function(e){var t=e.children,n=e.className;return a.createElement(E,{className:n},t)},x=n(4),k=n.n(x),C=(n(151),i.a.createContext({})),N=function(e){return i.a.createElement(C.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};N.propTypes={data:k.a.object,query:k.a.string.isRequired,render:k.a.func,children:k.a.func};var I=function(e){var t=e.children;return a.createElement(N,{query:"991718019",render:function(e){return a.createElement(y,null,a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"gatsbyjs, gatsby, javascript, sample, something"}]}),a.createElement(p,{title:e.site.siteMetadata.title}),a.createElement(w,null,t))},data:c})},S=r.b.div.withConfig({componentId:"sc-1pdsugb-0"})(["display:block;flex:1;position:relative;padding:","rem;margin-bottom:3rem;"],o.b.containerPadding);t.a=function(e){var t=e.children,n=e.className;return a.createElement(I,null,a.createElement(S,{className:n},t))}},155:function(e,t,n){"use strict";var a=n(0),i=n(149),r=n(150),o=function(e){return e/r.b.fontSize.regular},c=i.b.div.withConfig({componentId:"sc-1em4mie-0"})(["position:relative;width:auto;max-width:","em;"],o(r.e.md));t.a=function(e){var t=e.children,n=e.className;return a.createElement(c,{className:n},t)}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-fb2736d2814433dc4791.js.map