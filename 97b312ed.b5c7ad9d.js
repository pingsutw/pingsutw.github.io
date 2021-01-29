(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(151)),i={title:"How to Build Submarine"},c={unversionedId:"devDocs/BuildFromCode",id:"devDocs/BuildFromCode",isDocsHomePage:!1,title:"How to Build Submarine",description:"\x3c!--",source:"@site/docs/devDocs/BuildFromCode.md",slug:"/devDocs/BuildFromCode",permalink:"/docs/devDocs/BuildFromCode",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/devDocs/BuildFromCode.md",version:"current",sidebar:"docs",previous:{title:"Development Guide",permalink:"/docs/devDocs/README"},next:{title:"How to Run Integration Test",permalink:"/docs/devDocs/IntegrationTest"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Quick Start",id:"quick-start",children:[{value:"Build Your Custom Submarine Docker Images",id:"build-your-custom-submarine-docker-images",children:[]},{value:"Building source code / binary distribution",id:"building-source-code--binary-distribution",children:[]}]},{value:"TonY code modification",id:"tony-code-modification",children:[]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"JDK 1.8"),Object(o.b)("li",{parentName:"ul"},"Maven 3.3 or later ( 3.6.2 is known to fail, see SUBMARINE-273 )"),Object(o.b)("li",{parentName:"ul"},"Docker")),Object(o.b)("h2",{id:"quick-start"},"Quick Start"),Object(o.b)("h3",{id:"build-your-custom-submarine-docker-images"},"Build Your Custom Submarine Docker Images"),Object(o.b)("p",null,"Submarine provides default Docker image in the release artifacts, sometimes you would like to do some modifications on the images. You can rebuild Docker image after you make changes. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that you need to make sure the images built above can be accessed in k8s\nUsually this needs a rename and push to a proper Docker registry.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mvn clean package -DskipTests\n")),Object(o.b)("p",null,"Build submarine server image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./dev-support/docker-images/submarine/build.sh\n")),Object(o.b)("p",null,"Build submarine database image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./dev-support/docker-images/database/build.sh\n")),Object(o.b)("h3",{id:"building-source-code--binary-distribution"},"Building source code / binary distribution"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Checking releases for licenses")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn clean org.apache.rat:apache-rat-plugin:check\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create binary distribution with default hadoop version")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn clean package -DskipTests\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create binary distribution with hadoop-2.9.x version")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn clean package -DskipTests -Phadoop-2.9\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create binary distribution with hadoop-2.10.x version")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn clean package -DskipTests -Phadoop-2.10\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create binary distribution with hadoop-3.1.x version")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn clean package -DskipTests -Phadoop-3.1\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create binary distribution with hadoop-3.2.x version")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn clean package -DskipTests -Phadoop-3.2\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create source code distribution")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn clean package -DskipTests -Psrc\n")),Object(o.b)("h2",{id:"tony-code-modification"},"TonY code modification"),Object(o.b)("p",null,"If it is needed to make modifications to TonY project, please make a PR\nto ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/linkedin/TonY"}),"Tony repository"),"."))}b.isMDXComponent=!0},151:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=b(r),p=n,m=s["".concat(i,".").concat(p)]||s[p]||d[p]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);