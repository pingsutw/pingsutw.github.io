(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=s(n),u=r,d=o["".concat(l,".").concat(u)]||o[u]||m[u]||i;return n?a.a.createElement(d,b(b({ref:t},p),{},{components:n})):a.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(135)),l={title:"Generic Expeiment Spec"},b={unversionedId:"designDocs/submarine-server/experimentSpec",id:"designDocs/submarine-server/experimentSpec",isDocsHomePage:!1,title:"Generic Expeiment Spec",description:"\x3c!--",source:"@site/docs/designDocs/submarine-server/experimentSpec.md",slug:"/designDocs/submarine-server/experimentSpec",permalink:"/docs/designDocs/submarine-server/experimentSpec",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/designDocs/submarine-server/experimentSpec.md",version:"current",sidebar:"docs",previous:{title:"Submarine Server Implementation",permalink:"/docs/designDocs/submarine-server/architecture"},next:{title:"Submarine Launcher",permalink:"/docs/designDocs/wip-designs/submarine-launcher"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Proposal",id:"proposal",children:[{value:"Library Spec",id:"library-spec",children:[]},{value:"Submitter Spec",id:"submitter-spec",children:[]},{value:"Task Spec",id:"task-spec",children:[]}]},{value:"Implements",id:"implements",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"As the machine learning platform, the submarine should support multiple machine learning frameworks, such as Tensorflow, Pytorch etc. But different framework has different distributed components for the training experiment. So that we designed a generic experiment spec to abstract the training experiment across different frameworks. In this way, the submarine-server can hide the complexity of underlying infrastructure differences and provide a cleaner interface to manager experiments"),Object(i.b)("h2",{id:"proposal"},"Proposal"),Object(i.b)("p",null,"Considering the Tensorflow and Pytorch framework, we propose one spec which consists of library spec, submitter spec and task specs etc. Such as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'name: "mnist"\nlibrarySpec:\n  name: "TensorFlow"\n  version: "2.1.0"\n  image: "apache/submarine:tf-mnist-with-summaries-1.0"\n  cmd: "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150"\n  envVars:\n    ENV_1: "ENV1"\nsubmitterSpec:\n  type: "k8s"\n  namespace: "submarine"\ntaskSpecs:\n  Ps:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n  Worker:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n')),Object(i.b)("h3",{id:"library-spec"},"Library Spec"),Object(i.b)("p",null,"The library spec describes the info about machine learning framework. All the fields as below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"field"),Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"optional"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"Machine Learning Framework name. Only ",Object(i.b)("inlineCode",{parentName:"td"},'"tensorflow"')," and ",Object(i.b)("inlineCode",{parentName:"td"},'"pytorch"')," is supported. It doesn't matter if the value is uppercase or lowercase.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"version"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"The version of ML framework. Such as: 2.1.0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"image"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"The public image used for each task if not specified. Such as: apache/submarine")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"cmd"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"The public entry cmd for the task if not specified.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"envVars"),Object(i.b)("td",{parentName:"tr",align:null},"key/value"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"The public env vars for the task if not specified.")))),Object(i.b)("h3",{id:"submitter-spec"},"Submitter Spec"),Object(i.b)("p",null,"It describes the info of submitter which the user specified, such as yarn, yarnservice or k8s. All the fields as below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"field"),Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"optional"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"type"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"The submitter type, supports ",Object(i.b)("inlineCode",{parentName:"td"},"k8s")," now")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"configPath"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"The config path of the specified resource manager. You can set it in submarine-site.xml if run submarine-server locally")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"namespace"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"It's known as queue in Apache Hadoop YARN and namespace in Kubernetes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"kind"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"It's used for k8s submitter, supports TFJob and PyTorchJob")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"apiVersion"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"It should pair with the kind, such as the TFJob's api version is ",Object(i.b)("inlineCode",{parentName:"td"},"kubeflow.org/v1"))))),Object(i.b)("h3",{id:"task-spec"},"Task Spec"),Object(i.b)("p",null,"It describes the task info, the tasks make up the experiment. So it must be specified when submit the experiment. All the tasks should putted into the key value collection. Such as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'taskSpecs:\n  Ps:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n  Worker:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n')),Object(i.b)("p",null,"All the fields as below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"field"),Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"optional"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"The experiment name, if not specify using the library name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"image"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"The experiment docker image")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"cmd"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"The entry command for running task")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"envVars"),Object(i.b)("td",{parentName:"tr",align:null},"key/value"),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"The environment variables for the task")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"resources"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"NO"),Object(i.b)("td",{parentName:"tr",align:null},"The limit resource for the task. Formatter: cpu=%s,memory=%s,nvidia.com/gpu=%s")))),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("p",null,"For more info see ",Object(i.b)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/SUBMARINE-321"},"SUBMARINE-321")))}s.isMDXComponent=!0}}]);