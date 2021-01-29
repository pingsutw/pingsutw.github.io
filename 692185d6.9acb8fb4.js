(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{151:function(e,r,n){"use strict";n.d(r,"a",(function(){return b})),n.d(r,"b",(function(){return d}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),o=function(e){var r=a.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},b=function(e){var r=o(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=o(n),m=t,d=b["".concat(c,".").concat(m)]||b[m]||l[m]||i;return n?a.a.createElement(d,u(u({ref:r},s),{},{components:n})):a.a.createElement(d,u({ref:r},s))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=m;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:t,c[1]=u;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return o}));var t=n(3),a=n(7),i=(n(0),n(151)),c={title:"Building Submarine Spark Security Plugin"},u={unversionedId:"userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",id:"userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",isDocsHomePage:!1,title:"Building Submarine Spark Security Plugin",description:"\x3c!--",source:"@site/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin.md",slug:"/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",permalink:"/submarine/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin.md",version:"current",sidebar:"docs",previous:{title:"Submarine Spark Security Plugin",permalink:"/submarine/docs/userDocs/submarine-security/spark-security/README"},next:{title:"Submarine on K8s",permalink:"/submarine/docs/adminDocs/k8s/README"}},p=[],s={toc:p};function o(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Submarine Spark Security Plugin is built using ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"http://maven.apache.org"}),"Apache Maven"),". To build it, ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," to the root direct of submarine project and run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"mvn clean package -Dmaven.javadoc.skip=true -DskipTests -pl :submarine-spark-security\n")),Object(i.b)("p",null,"By default, Submarine Spark Security Plugin is built against Apache Spark ",Object(i.b)("inlineCode",{parentName:"p"},"2.3.x")," and Apache Ranger ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.0"),", which may be incompatible with other Apache Spark or Apache Ranger releases."),Object(i.b)("p",null,"Currently, available profiles are:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Spark"),": ",Object(i.b)("inlineCode",{parentName:"p"},"-Pspark-2.3"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-Pspark-2.4"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-Pspark-3.0")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Ranger"),": ",Object(i.b)("inlineCode",{parentName:"p"},"-Pranger-1.0"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-Pranger-1.1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-Pranger-1.2"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-Pranger-2.0")))}o.isMDXComponent=!0}}]);