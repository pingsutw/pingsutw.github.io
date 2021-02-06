(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(133)),i={title:"Apache Submarine Release 0.5.0"},c={unversionedId:"releases/submarine-release-0.5.0",id:"releases/submarine-release-0.5.0",isDocsHomePage:!1,title:"Apache Submarine Release 0.5.0",description:"\x3c!--",source:"@site/docs/releases/submarine-release-0.5.0.md",slug:"/releases/submarine-release-0.5.0",permalink:"/docs/releases/submarine-release-0.5.0",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/releases/submarine-release-0.5.0.md",version:"current",sidebar:"docs",previous:{title:"Apache Submarine Release 0.4.0",permalink:"/docs/releases/submarine-release-0.4.0"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Apache Submarine Community is pleased to announce the availability of the ",Object(o.b)("inlineCode",{parentName:"p"},"0.5.0")," release."),Object(o.b)("p",null,"The community put significant effort into improving Apache Submarine since the last release.\n99 patches for improvements and bug fixes. The highlighted features are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Submarine Experiments: Redefined the experiment spec, sync up code from Git, it could be HTTP and ssh"),Object(o.b)("li",{parentName:"ul"},"Predefined experiment template: Register A experiment template and submit the related parameter to run an experiment using Rest API"),Object(o.b)("li",{parentName:"ul"},"Environment profile: Users could easily manage their docker image and conda environment"),Object(o.b)("li",{parentName:"ul"},"Jupyter Notebook: Spawn a jupyter notebook using Rest API, and execute ML code on K8s, or submit an experiment to submarine server"),Object(o.b)("li",{parentName:"ul"},"Submarine Workbench UI: CRUD Experiment, Environment, Notebook through the UI "),Object(o.b)("li",{parentName:"ul"},"Disable interpreter module")),Object(o.b)("p",null,"We encourage to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../download"}),"download")," the latest release. Feedback through the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../community/README"}),"mailing lists")," is very welcome."),Object(o.b)("p",null,"You can visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12348041&projectId=12322824"}),"issue tracker")," for full list of issues that are resolved."))}u.isMDXComponent=!0},133:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);