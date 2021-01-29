(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(151)),c={title:"Quick development Tips"},i={unversionedId:"devDocs/QuickDevTips",id:"devDocs/QuickDevTips",isDocsHomePage:!1,title:"Quick development Tips",description:"\x3c!---",source:"@site/docs/devDocs/QuickDevTips.md",slug:"/devDocs/QuickDevTips",permalink:"/submarine/docs/devDocs/QuickDevTips",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/devDocs/QuickDevTips.md",version:"current",sidebar:"docs",previous:{title:"How to Run Integration Test",permalink:"/submarine/docs/devDocs/IntegrationTest"},next:{title:"Apache Submarine Community",permalink:"/submarine/docs/community/README"}},u=[{value:"1. Introduction",id:"1-introduction",children:[{value:"Run server outside of k8s",id:"run-server-outside-of-k8s",children:[]}]}],s={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(a.b)("p",null,"This document describes some useful tips that can accelerate your development efficiency."),Object(a.b)("h3",{id:"run-server-outside-of-k8s"},"Run server outside of k8s"),Object(a.b)("p",null,"If you are working on submarine-server, you do not need to bundle submarine-server into docker-image, and restart the helm-chart every time."),Object(a.b)("p",null,"You can run each module individually and only need to re-package the submarine-server, getting rid of other unnecessary process."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run db docker")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"docker run -it -p 3306:3306 -d --name submarine-database -e MYSQL_ROOT_PASSWORD=password apache/submarine:database-0.6.0-SNAPSHOT\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Run k8s")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"minikube start # or other alternatives, such as kind\nkubectl apply -f ./dev-support/k8s/tfjob/crd.yaml\nkubectl kustomize ./dev-support/k8s/tfjob/operator | kubectl apply -f -\nkubectl apply -f ./dev-support/k8s/pytorchjob/\nexport KUBECONFIG=/home/<user_name>/.kube/config # (in ~/.bashrc)\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Package server")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"mvn clean package -DskipTests\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Start server")),Object(a.b)("p",null,"cd submarine-dist/target/submarine-dist-0.6.0-SNAPSHOT-hadoop-2.9/submarine-dist-0.6.0-SNAPSHOT-hadoop-2.9/\n./bin/submarine-daemon.sh start getMysqlJar"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"")))}p.isMDXComponent=!0},151:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);