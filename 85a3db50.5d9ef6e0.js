(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(151)),c={},i={unversionedId:"adminDocs/k8s/tensorflow",id:"adminDocs/k8s/tensorflow",isDocsHomePage:!1,title:"tensorflow",description:"\x3c!--",source:"@site/docs/adminDocs/k8s/tensorflow.md",slug:"/adminDocs/k8s/tensorflow",permalink:"/submarine/docs/adminDocs/k8s/tensorflow",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/adminDocs/k8s/tensorflow.md",version:"current"},s=[{value:"TFJob",id:"tfjob",children:[{value:"Deploy tf-operator",id:"deploy-tf-operator",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"deploy-tensorflow-operator-on-kubernetes"},"Deploy Tensorflow Operator on Kubernetes"),Object(a.b)("h2",{id:"tfjob"},"TFJob"),Object(a.b)("p",null,"We support Tensorflow job on kubernetes by using the tf-operator as a runtime. For more info about tf-operator see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/kubeflow/tf-operator"}),"here"),"."),Object(a.b)("h3",{id:"deploy-tf-operator"},"Deploy tf-operator"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you don't have the ",Object(a.b)("inlineCode",{parentName:"p"},"submarine")," namespace on your K8s cluster, you should create it first. Run command: ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl create namespace submarine"))),Object(a.b)("p",null,"Running the follow commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl apply -f ./dev-support/k8s/tfjob/crd.yaml\nkubectl kustomize ./dev-support/k8s/tfjob/operator | kubectl apply -f -\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Since K8s 1.14, Kubectl also supports the management of Kubernetes objects using a kustomization file. For more info see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/"}),"kustomization"))),Object(a.b)("p",null,"Default namespace is ",Object(a.b)("inlineCode",{parentName:"p"},"submarine"),", if you want to modify the namespace, please modify ",Object(a.b)("inlineCode",{parentName:"p"},"./dev-support/k8s/tfjob/operator/kustomization.yaml"),", such as modify ",Object(a.b)("inlineCode",{parentName:"p"},"${NAMESPACE}")," as below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nnamespace: ${NAMESPACE}\nresources:\n- cluster-role-binding.yaml\n- cluster-role.yaml\n- deployment.yaml\n- service-account.yaml\n- service.yaml\ncommonLabels:\n  kustomize.component: tf-job-operator\nimages:\n- name: apache/submarine\n  newName: apache/submarine\n  newTag: tf_operator-v1.1.0-g92389064\n")))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,f=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return n?r.a.createElement(f,i(i({ref:t},p),{},{components:n})):r.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);