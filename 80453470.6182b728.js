(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{129:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),m=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=m(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=m(t),u=r,d=l["".concat(i,".").concat(u)]||l[u]||b[u]||s;return t?a.a.createElement(d,p(p({ref:n},c),{},{components:t})):a.a.createElement(d,p({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<s;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(7),s=(t(0),t(129)),i={title:"Experiment REST API"},p={unversionedId:"api/experiment",id:"api/experiment",isDocsHomePage:!1,title:"Experiment REST API",description:"\x3c!--",source:"@site/docs/api/experiment.md",slug:"/api/experiment",permalink:"/docs/api/experiment",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/api/experiment.md",version:"current",sidebar:"api",previous:{title:"Environment REST API",permalink:"/docs/api/environment"},next:{title:"Experiment Template REST API",permalink:"/docs/api/experiment-template"}},o=[{value:"Create Experiment (Using Anonymous/Embedded Environment)",id:"create-experiment-using-anonymousembedded-environment",children:[]},{value:"Create Experiment (Using Pre-defined/Stored Environment)",id:"create-experiment-using-pre-definedstored-environment",children:[{value:"List experiment",id:"list-experiment",children:[]},{value:"Get experiment",id:"get-experiment",children:[]},{value:"Patch experiment",id:"patch-experiment",children:[]},{value:"Delete experiment",id:"delete-experiment",children:[]},{value:"List experiment Log",id:"list-experiment-log",children:[]},{value:"Get experiment Log",id:"get-experiment-log",children:[]}]}],c={toc:o};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: The Experiment API is in the alpha stage which is subjected to incompatible changes in\nfuture releases.")),Object(s.b)("h2",{id:"create-experiment-using-anonymousembedded-environment"},"Create Experiment (Using Anonymous/Embedded Environment)"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"POST /api/v1/experiment")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=512M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=512M"\n    }\n  }\n}\n\' http://127.0.0.1:8080/api/v1/experiment\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Response:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": "OK",\n  "code": 200,\n  "result": {\n    "experimentId": "experiment_1586156073228_0001",\n    "name": "tf-mnist-json",\n    "uid": "28e39dcd-77d4-11ea-8dbb-0242ac110003",\n    "status": "Accepted",\n    "acceptedTime": "2020-06-13T22:59:29.000+08:00",\n    "spec": {\n      "meta": {\n        "name": "tf-mnist-json",\n        "namespace": "default",\n        "framework": "TensorFlow",\n        "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n        "envVars": {\n          "ENV_1": "ENV1"\n        }\n      },\n      "environment": {\n        "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec": {\n        "Ps": {\n          "replicas": 1,\n          "resources": "cpu=1,memory=512M"\n        },\n        "Worker": {\n          "replicas": 1,\n          "resources": "cpu=1,memory=512M"\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h2",{id:"create-experiment-using-pre-definedstored-environment"},"Create Experiment (Using Pre-defined/Stored Environment)"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"POST /api/v1/experiment")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "name": "my-submarine-env"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=512M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=512M"\n    }\n  }\n}\n\' http://127.0.0.1:8080/api/v1/experiment\n')),Object(s.b)("p",null,'Above example assume environment "my-submarine-env" already exists in Submarine. Please refer Environment API Reference doc to Create/Update/Delete/List Environment REST API\'s'),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Response:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": "OK",\n  "code": 200,\n  "result": {\n    "experimentId": "experiment_1586156073228_0001",\n    "name": "tf-mnist-json",\n    "uid": "28e39dcd-77d4-11ea-8dbb-0242ac110003",\n    "status": "Accepted",\n    "acceptedTime": "2020-06-13T22:59:29.000+08:00",\n    "spec": {\n      "meta": {\n        "name": "tf-mnist-json",\n        "namespace": "default",\n        "framework": "TensorFlow",\n        "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n        "envVars": {\n          "ENV_1": "ENV1"\n        }\n      },\n      "environment": {\n        "name": "my-submarine-env"\n      },\n      "spec": {\n        "Ps": {\n          "replicas": 1,\n          "resources": "cpu=1,memory=512M"\n        },\n        "Worker": {\n          "replicas": 1,\n          "resources": "cpu=1,memory=512M"\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h3",{id:"list-experiment"},"List experiment"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET /api/v1/experiment")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET http://127.0.0.1:8080/api/v1/experiment\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Response:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": "OK",\n    "code": 200,\n    "result": [\n        {\n            "experimentId": "experiment_1592057447228_0001",\n            "name": "tf-mnist-json",\n            "uid": "28e39dcd-77d4-11ea-8dbb-0242ac110003",\n            "status": "Accepted",\n            "acceptedTime": "2020-06-13T22:59:29.000+08:00",\n            "spec": {\n                "meta": {\n                    "name": "tf-mnist-json",\n                    "namespace": "default",\n                    "framework": "TensorFlow",\n                    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n                    "envVars": {\n                        "ENV_1": "ENV1"\n                    }\n                },\n                "environment": {\n                    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n                },\n                "spec": {\n                    "Ps": {\n                        "replicas": 1,\n                        "resources": "cpu=1,memory=512M"\n                    },\n                    "Worker": {\n                        "replicas": 1,\n                        "resources": "cpu=1,memory=512M"\n                    }\n                }\n            }\n        },\n        {\n            "experimentId": "experiment_1592057447228_0002",\n            "name": "mnist",\n            "uid": "38e39dcd-77d4-11ea-8dbb-0242ac110003",\n            "status": "Accepted",\n            "acceptedTime": "2020-06-13T22:19:29.000+08:00",\n            "spec": {\n                "meta": {\n                    "name": "pytorch-mnist-json",\n                    "namespace": "default",\n                    "framework": "PyTorch",\n                    "cmd": "python /var/mnist.py --backend gloo",\n                    "envVars": {\n                        "ENV_1": "ENV1"\n                    }\n                },\n                "environment": {\n                    "image": "apache/submarine:pytorch-dist-mnist-1.0"\n                },\n                "spec": {\n                    "Master": {\n                        "replicas": 1,\n                        "resources": "cpu=1,memory=1024M"\n                    },\n                    "Worker": {\n                        "replicas": 1,\n                        "resources": "cpu=1,memory=1024M"\n                    }\n                }\n            }\n        }\n    ]\n}\n')),Object(s.b)("h3",{id:"get-experiment"},"Get experiment"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET /api/v1/experiment/{id}")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET http://127.0.0.1:8080/api/v1/experiment/experiment_1592057447228_0001\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Response:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": "OK",\n    "code": 200,\n    "result": {\n        "experimentId": "experiment_1592057447228_0001",\n        "name": "tf-mnist-json",\n        "uid": "28e39dcd-77d4-11ea-8dbb-0242ac110003",\n        "status": "Accepted",\n        "acceptedTime": "2020-06-13T22:59:29.000+08:00",\n        "spec": {\n            "meta": {\n                "name": "tf-mnist-json",\n                "namespace": "default",\n                "framework": "TensorFlow",\n                "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n                "envVars": {\n                  "ENV_1": "ENV1"\n                }\n            },\n            "environment": {\n                "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n            },\n            "spec": {\n                "Ps": {\n                    "replicas": 1,\n                    "resources": "cpu=1,memory=512M"\n                },\n                "Worker": {\n                    "replicas": 1,\n                    "resources": "cpu=1,memory=512M"\n                }\n            }\n        }\n    }\n}\n')),Object(s.b)("h3",{id:"patch-experiment"},"Patch experiment"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"PATCH /api/v1/experiment/{id}")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'curl -X PATCH -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n      "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=512M"\n    },\n    "Worker": {\n      "replicas": 2,\n      "resources": "cpu=1,memory=512M"\n    }\n  }\n}\n\' http://127.0.0.1:8080/api/v1/experiment/experiment_1592057447228_0001\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Response:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": "OK",\n    "code": 200,\n    "success": true,\n    "result": {\n        "meta": {\n            "name": "tf-mnist-json",\n            "namespace": "default",\n            "framework": "TensorFlow",\n            "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n            "envVars": {\n                "ENV_1": "ENV1"\n            }\n        },\n        "environment": {\n            "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n        },\n        "spec": {\n            "Ps": {\n                "replicas": 1,\n                "resources": "cpu=1,memory=512M"\n            },\n            "Worker": {\n                "replicas": 2,\n                "resources": "cpu=1,memory=512M"\n            }\n        }\n    }\n}\n')),Object(s.b)("h3",{id:"delete-experiment"},"Delete experiment"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET /api/v1/experiment/{id}")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -X DELETE http://127.0.0.1:8080/api/v1/experiment/experiment_1592057447228_0001\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Response:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": "OK",\n    "code": 200,\n    "result": {\n        "experimentId": "experiment_1586156073228_0001",\n        "name": "tf-mnist-json",\n        "uid": "28e39dcd-77d4-11ea-8dbb-0242ac110003",\n        "status": "Accepted",\n        "acceptedTime": "2020-06-13T22:59:29.000+08:00",\n        "spec": {\n            "meta": {\n                "name": "tf-mnist-json",\n                "namespace": "default",\n                "framework": "TensorFlow",\n                "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n                "envVars": {\n                    "ENV_1": "ENV1"\n                }\n            },\n            "environment": {\n                "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n            },\n            "spec": {\n                "Ps": {\n                    "replicas": 1,\n                    "resources": "cpu=1,memory=512M"\n                },\n                "Worker": {\n                    "replicas": 2,\n                    "resources": "cpu=1,memory=512M"\n                }\n            }\n        }\n    }\n}\n')),Object(s.b)("h3",{id:"list-experiment-log"},"List experiment Log"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET /api/v1/experiment/logs")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET http://127.0.0.1:8080/api/v1/experiment/logs\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Response:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": "OK",\n    "code": 200,\n    "success": null,\n    "message": null,\n    "result": [\n        {\n            "experimentId": "experiment_1589199154923_0001",\n            "logContent": [\n                {\n                    "podName": "mnist-worker-0",\n                    "podLog": null\n                }\n            ]\n        },\n        {\n            "experimentId": "experiment_1589199154923_0002",\n            "logContent": [\n                {\n                    "podName": "pytorch-dist-mnist-gloo-master-0",\n                    "podLog": null\n                },\n                {\n                    "podName": "pytorch-dist-mnist-gloo-worker-0",\n                    "podLog": null\n                }\n            ]\n        }\n    ],\n    "attributes": {}\n}\n')),Object(s.b)("h3",{id:"get-experiment-log"},"Get experiment Log"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET /api/v1/experiment/logs/{id}")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET http://127.0.0.1:8080/api/v1/experiment/logs/experiment_1589199154923_0002\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Response:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status": "OK",\n    "code": 200,\n    "success": null,\n    "message": null,\n    "result": {\n        "experimentId": "experiment_1589199154923_0002",\n        "logContent": [\n            {\n                "podName": "pytorch-dist-mnist-gloo-master-0",\n                "podLog": "Using distributed PyTorch with gloo backend\\nDownloading http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz\\nDownloading http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz\\nDownloading http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz\\nDownloading http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz\\nProcessing...\\nDone!\\nTrain Epoch: 1 [0/60000 (0%)]\\tloss=2.3000\\nTrain Epoch: 1 [640/60000 (1%)]\\tloss=2.2135\\nTrain Epoch: 1 [1280/60000 (2%)]\\tloss=2.1704\\nTrain Epoch: 1 [1920/60000 (3%)]\\tloss=2.0766\\nTrain Epoch: 1 [2560/60000 (4%)]\\tloss=1.8679\\nTrain Epoch: 1 [3200/60000 (5%)]\\tloss=1.4135\\nTrain Epoch: 1 [3840/60000 (6%)]\\tloss=1.0003\\nTrain Epoch: 1 [4480/60000 (7%)]\\tloss=0.7762\\nTrain Epoch: 1 [5120/60000 (9%)]\\tloss=0.4598\\nTrain Epoch: 1 [5760/60000 (10%)]\\tloss=0.4860\\nTrain Epoch: 1 [6400/60000 (11%)]\\tloss=0.4389\\nTrain Epoch: 1 [7040/60000 (12%)]\\tloss=0.4084\\nTrain Epoch: 1 [7680/60000 (13%)]\\tloss=0.4602\\nTrain Epoch: 1 [8320/60000 (14%)]\\tloss=0.4289\\nTrain Epoch: 1 [8960/60000 (15%)]\\tloss=0.3990\\nTrain Epoch: 1 [9600/60000 (16%)]\\tloss=0.3852\\n"\n            },\n            {\n                "podName": "pytorch-dist-mnist-gloo-worker-0",\n                "podLog": "Using distributed PyTorch with gloo backend\\nDownloading http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz\\nDownloading http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz\\nDownloading http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz\\nDownloading http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz\\nProcessing...\\nDone!\\nTrain Epoch: 1 [0/60000 (0%)]\\tloss=2.3000\\nTrain Epoch: 1 [640/60000 (1%)]\\tloss=2.2135\\nTrain Epoch: 1 [1280/60000 (2%)]\\tloss=2.1704\\nTrain Epoch: 1 [1920/60000 (3%)]\\tloss=2.0766\\nTrain Epoch: 1 [2560/60000 (4%)]\\tloss=1.8679\\nTrain Epoch: 1 [3200/60000 (5%)]\\tloss=1.4135\\nTrain Epoch: 1 [3840/60000 (6%)]\\tloss=1.0003\\nTrain Epoch: 1 [4480/60000 (7%)]\\tloss=0.7762\\nTrain Epoch: 1 [5120/60000 (9%)]\\tloss=0.4598\\nTrain Epoch: 1 [5760/60000 (10%)]\\tloss=0.4860\\nTrain Epoch: 1 [6400/60000 (11%)]\\tloss=0.4389\\nTrain Epoch: 1 [7040/60000 (12%)]\\tloss=0.4084\\nTrain Epoch: 1 [7680/60000 (13%)]\\tloss=0.4602\\nTrain Epoch: 1 [8320/60000 (14%)]\\tloss=0.4289\\nTrain Epoch: 1 [8960/60000 (15%)]\\tloss=0.3990\\nTrain Epoch: 1 [9600/60000 (16%)]\\tloss=0.3852\\n"\n            }\n        ]\n    },\n    "attributes": {}\n}\n')))}m.isMDXComponent=!0}}]);