(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),o=s(n),u=a,O=o["".concat(c,".").concat(u)]||o[u]||m[u]||b;return n?r.a.createElement(O,i(i({ref:t},p),{},{components:n})):r.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<b;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),b=(n(0),n(151)),c={title:"Generic Expeiment Spec"},i={unversionedId:"designDocs/submarine-server/experimentSpec",id:"designDocs/submarine-server/experimentSpec",isDocsHomePage:!1,title:"Generic Expeiment Spec",description:"\x3c!--",source:"@site/docs/designDocs/submarine-server/experimentSpec.md",slug:"/designDocs/submarine-server/experimentSpec",permalink:"/submarine/docs/designDocs/submarine-server/experimentSpec",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/designDocs/submarine-server/experimentSpec.md",version:"current",sidebar:"docs",previous:{title:"Submarine Server Implementation",permalink:"/submarine/docs/designDocs/submarine-server/architecture"},next:{title:"Submarine Launcher",permalink:"/submarine/docs/designDocs/wip-designs/submarine-launcher"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"Proposal",id:"proposal",children:[{value:"Library Spec",id:"library-spec",children:[]},{value:"Submitter Spec",id:"submitter-spec",children:[]},{value:"Task Spec",id:"task-spec",children:[]}]},{value:"Implements",id:"implements",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"motivation"},"Motivation"),Object(b.b)("p",null,"As the machine learning platform, the submarine should support multiple machine learning frameworks, such as Tensorflow, Pytorch etc. But different framework has different distributed components for the training experiment. So that we designed a generic experiment spec to abstract the training experiment across different frameworks. In this way, the submarine-server can hide the complexity of underlying infrastructure differences and provide a cleaner interface to manager experiments"),Object(b.b)("h2",{id:"proposal"},"Proposal"),Object(b.b)("p",null,"Considering the Tensorflow and Pytorch framework, we propose one spec which consists of library spec, submitter spec and task specs etc. Such as:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'name: "mnist"\nlibrarySpec:\n  name: "TensorFlow"\n  version: "2.1.0"\n  image: "apache/submarine:tf-mnist-with-summaries-1.0"\n  cmd: "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150"\n  envVars:\n    ENV_1: "ENV1"\nsubmitterSpec:\n  type: "k8s"\n  namespace: "submarine"\ntaskSpecs:\n  Ps:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n  Worker:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n')),Object(b.b)("h3",{id:"library-spec"},"Library Spec"),Object(b.b)("p",null,"The library spec describes the info about machine learning framework. All the fields as below:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"field"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Machine Learning Framework name. Only ",Object(b.b)("inlineCode",{parentName:"td"},'"tensorflow"')," and ",Object(b.b)("inlineCode",{parentName:"td"},'"pytorch"')," is supported. It doesn't matter if the value is uppercase or lowercase.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"version"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The version of ML framework. Such as: 2.1.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The public image used for each task if not specified. Such as: apache/submarine")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cmd"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The public entry cmd for the task if not specified.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"envVars"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"key/value"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The public env vars for the task if not specified.")))),Object(b.b)("h3",{id:"submitter-spec"},"Submitter Spec"),Object(b.b)("p",null,"It describes the info of submitter which the user specified, such as yarn, yarnservice or k8s. All the fields as below:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"field"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The submitter type, supports ",Object(b.b)("inlineCode",{parentName:"td"},"k8s")," now")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"configPath"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The config path of the specified resource manager. You can set it in submarine-site.xml if run submarine-server locally")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"namespace"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It's known as queue in Apache Hadoop YARN and namespace in Kubernetes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kind"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It's used for k8s submitter, supports TFJob and PyTorchJob")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"apiVersion"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It should pair with the kind, such as the TFJob's api version is ",Object(b.b)("inlineCode",{parentName:"td"},"kubeflow.org/v1"))))),Object(b.b)("h3",{id:"task-spec"},"Task Spec"),Object(b.b)("p",null,"It describes the task info, the tasks make up the experiment. So it must be specified when submit the experiment. All the tasks should putted into the key value collection. Such as:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'taskSpecs:\n  Ps:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n  Worker:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n')),Object(b.b)("p",null,"All the fields as below:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"field"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The experiment name, if not specify using the library name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The experiment docker image")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cmd"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The entry command for running task")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"envVars"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"key/value"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The environment variables for the task")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resources"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The limit resource for the task. Formatter: cpu=%s,memory=%s,nvidia.com/gpu=%s")))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("p",null,"For more info see ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://issues.apache.org/jira/browse/SUBMARINE-321"}),"SUBMARINE-321")))}s.isMDXComponent=!0}}]);