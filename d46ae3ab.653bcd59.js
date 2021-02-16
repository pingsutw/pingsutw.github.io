(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return s}));var a=r(3),t=r(7),i=(r(0),r(135)),o={title:"Submarine Spark Security Plugin"},c={unversionedId:"userDocs/submarine-security/spark-security/README",id:"userDocs/submarine-security/spark-security/README",isDocsHomePage:!1,title:"Submarine Spark Security Plugin",description:"\x3c!--",source:"@site/docs/userDocs/submarine-security/spark-security/README.md",slug:"/userDocs/submarine-security/spark-security/README",permalink:"/docs/userDocs/submarine-security/spark-security/README",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/submarine-security/spark-security/README.md",version:"current",sidebar:"docs",previous:{title:"PySubmarine Tracking",permalink:"/docs/userDocs/submarine-sdk/pysubmarine/tracking"},next:{title:"Building Submarine Spark Security Plugin",permalink:"/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin"}},u=[{value:"Build",id:"build",children:[]},{value:"Quick Start",id:"quick-start",children:[{value:"Installation",id:"installation",children:[]},{value:"Configurations",id:"configurations",children:[]}]}],p={toc:u};function s(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ACL Management for Apache Spark SQL with Apache Ranger, enabling:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Table/Column level authorization"),Object(i.b)("li",{parentName:"ul"},"Row level filtering"),Object(i.b)("li",{parentName:"ul"},"Data masking")),Object(i.b)("p",null,"Security is one of fundamental features for enterprise adoption. ",Object(i.b)("a",{parentName:"p",href:"https://ranger.apache.org"},"Apache Ranger\u2122")," offers many security plugins for many Hadoop ecosystem components,\nsuch as HDFS, Hive, HBase, Solr and Sqoop2. However, ",Object(i.b)("a",{parentName:"p",href:"http://spark.apache.org"},"Apache Spark\u2122")," is not counted in yet.\nWhen a secured HDFS cluster is used as a data warehouse accessed by various users and groups via different applications wrote by Spark and Hive,\nit is very difficult to guarantee data management in a consistent way.  Apache Spark users visit data warehouse only\nwith Storage based access controls offered by HDFS. This library enables Spark with SQL Standard Based Authorization. "),Object(i.b)("h2",{id:"build"},"Build"),Object(i.b)("p",null,"Please refer to the online documentation - ",Object(i.b)("a",{parentName:"p",href:"/docs/userDocs/submarine-security/spark-security/build-submarine-spark-security-plugin"},"Building submarine spark security plguin")),Object(i.b)("h2",{id:"quick-start"},"Quick Start"),Object(i.b)("p",null,"Three steps to integrate Apache Spark and Apache Ranger."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"Place the submarine-spark-security-","<","version",">",".jar into ",Object(i.b)("inlineCode",{parentName:"p"},"$SPARK_HOME/jars"),"."),Object(i.b)("h3",{id:"configurations"},"Configurations"),Object(i.b)("h4",{id:"settings-for-apache-ranger"},"Settings for Apache Ranger"),Object(i.b)("p",null,"Create ",Object(i.b)("inlineCode",{parentName:"p"},"ranger-spark-security.xml")," in ",Object(i.b)("inlineCode",{parentName:"p"},"$SPARK_HOME/conf")," and add the following configurations\nfor pointing to the right Apache Ranger admin server."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"\n<configuration>\n\n    <property>\n        <name>ranger.plugin.spark.policy.rest.url</name>\n        <value>ranger admin address like http://ranger-admin.org:6080</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.spark.service.name</name>\n        <value>a ranger hive service name</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.spark.policy.cache.dir</name>\n        <value>./a ranger hive service name/policycache</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.spark.policy.pollIntervalMs</name>\n        <value>5000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.spark.policy.source.impl</name>\n        <value>org.apache.ranger.admin.client.RangerAdminRESTClient</value>\n    </property>\n\n</configuration>\n")),Object(i.b)("p",null,"Create ",Object(i.b)("inlineCode",{parentName:"p"},"ranger-spark-audit.xml")," in ",Object(i.b)("inlineCode",{parentName:"p"},"$SPARK_HOME/conf")," and add the following configurations\nto enable/disable auditing."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n\n    <property>\n        <name>xasecure.audit.is.enabled</name>\n        <value>true</value>\n    </property>\n\n    <property>\n        <name>xasecure.audit.destination.db</name>\n        <value>false</value>\n    </property>\n\n    <property>\n        <name>xasecure.audit.destination.db.jdbc.driver</name>\n        <value>com.mysql.jdbc.Driver</value>\n    </property>\n\n    <property>\n        <name>xasecure.audit.destination.db.jdbc.url</name>\n        <value>jdbc:mysql://10.171.161.78/ranger</value>\n    </property>\n\n    <property>\n        <name>xasecure.audit.destination.db.password</name>\n        <value>rangeradmin</value>\n    </property>\n\n    <property>\n        <name>xasecure.audit.destination.db.user</name>\n        <value>rangeradmin</value>\n    </property>\n\n</configuration>\n\n")),Object(i.b)("h4",{id:"settings-for-apache-spark"},"Settings for Apache Spark"),Object(i.b)("p",null,"You can configure ",Object(i.b)("inlineCode",{parentName:"p"},"spark.sql.extensions")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"*Extension")," we provided.\nFor example, ",Object(i.b)("inlineCode",{parentName:"p"},"spark.sql.extensions=org.apache.submarine.spark.security.api.RangerSparkAuthzExtension")),Object(i.b)("p",null,"Currently, you can set the following options to ",Object(i.b)("inlineCode",{parentName:"p"},"spark.sql.extensions")," to choose authorization w/ or w/o\nextra functions."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"option"),Object(i.b)("th",{parentName:"tr",align:null},"authorization"),Object(i.b)("th",{parentName:"tr",align:null},"row filtering"),Object(i.b)("th",{parentName:"tr",align:null},"data masking"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"org.apache.submarine.spark.security.api.RangerSparkAuthzExtension"),Object(i.b)("td",{parentName:"tr",align:null},"\u221a"),Object(i.b)("td",{parentName:"tr",align:null},"\xd7"),Object(i.b)("td",{parentName:"tr",align:null},"\xd7")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"org.apache.submarine.spark.security.api.RangerSparkSQLExtension"),Object(i.b)("td",{parentName:"tr",align:null},"\u221a"),Object(i.b)("td",{parentName:"tr",align:null},"\u221a"),Object(i.b)("td",{parentName:"tr",align:null},"\u221a")))))}s.isMDXComponent=!0},135:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return m}));var a=r(0),t=r.n(a);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=t.a.createContext({}),s=function(e){var n=t.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return t.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},d=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),d=a,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||i;return r?t.a.createElement(m,c(c({ref:n},p),{},{components:r})):t.a.createElement(m,c({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);