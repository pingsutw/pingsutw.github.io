(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),r=(t(0),t(135)),i={title:"YARN Runtime Quick Start Guide"},s={unversionedId:"userDocs/yarn/YARNRuntimeGuide",id:"userDocs/yarn/YARNRuntimeGuide",isDocsHomePage:!1,title:"YARN Runtime Quick Start Guide",description:"\x3c!--",source:"@site/docs/userDocs/yarn/YARNRuntimeGuide.md",slug:"/userDocs/yarn/YARNRuntimeGuide",permalink:"/docs/userDocs/yarn/YARNRuntimeGuide",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/yarn/YARNRuntimeGuide.md",version:"current",sidebar:"docs",previous:{title:"Run TensorFlow Experiment Guide (REST)",permalink:"/docs/userDocs/k8s/run-tensorflow-experiment-rest"},next:{title:"Test and Troubleshooting",permalink:"/docs/userDocs/yarn/TestAndTroubleshooting"}},c=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Build your own Docker image",id:"build-your-own-docker-image",children:[]},{value:"Launch TensorFlow Application:",id:"launch-tensorflow-application",children:[{value:"Without Docker",id:"without-docker",children:[]},{value:"Building a Python virtual environment with TensorFlow",id:"building-a-python-virtual-environment-with-tensorflow",children:[]},{value:"Get the training examples",id:"get-the-training-examples",children:[]},{value:"With Docker",id:"with-docker",children:[]}]},{value:"Launch PyTorch Application:",id:"launch-pytorch-application",children:[{value:"Without Docker",id:"without-docker-1",children:[]},{value:"Building a Python virtual environment with PyTorch",id:"building-a-python-virtual-environment-with-pytorch",children:[]},{value:"Get the training examples",id:"get-the-training-examples-1",children:[]},{value:"With Docker",id:"with-docker-1",children:[]}]},{value:"Launch MXNet Application:",id:"launch-mxnet-application",children:[{value:"Without Docker",id:"without-docker-2",children:[]},{value:"Building a Python virtual environment with MXNet",id:"building-a-python-virtual-environment-with-mxnet",children:[]},{value:"Get the training examples",id:"get-the-training-examples-2",children:[]},{value:"With Docker",id:"with-docker-2",children:[]}]},{value:"Use YARN Service to run Submarine: Deprecated",id:"use-yarn-service-to-run-submarine-deprecated",children:[]}],l={toc:c};function p(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(r.b)("p",null,"Check out the ",Object(r.b)("a",{parentName:"p",href:"../../adminDocs/yarn/README"},"Running Submarine on YARN")),Object(r.b)("h2",{id:"build-your-own-docker-image"},"Build your own Docker image"),Object(r.b)("p",null,"When you follow the documents below, and want to build your own Docker image for Tensorflow/PyTorch/MXNet? Please check out ",Object(r.b)("a",{parentName:"p",href:"Dockerfiles"},"Build your Docker image")," for more details."),Object(r.b)("h2",{id:"launch-tensorflow-application"},"Launch TensorFlow Application:"),Object(r.b)("h3",{id:"without-docker"},"Without Docker"),Object(r.b)("p",null,"You need:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Build a Python virtual environment with TensorFlow 1.13.1 installed"),Object(r.b)("li",{parentName:"ul"},"A cluster with Hadoop 2.9 or above.")),Object(r.b)("h3",{id:"building-a-python-virtual-environment-with-tensorflow"},"Building a Python virtual environment with TensorFlow"),Object(r.b)("p",null,"TonY requires a Python virtual environment zip with TensorFlow and any needed Python libraries already installed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"wget https://files.pythonhosted.org/packages/33/bc/fa0b5347139cd9564f0d44ebd2b147ac97c36b2403943dbee8a25fd74012/virtualenv-16.0.0.tar.gz\ntar xf virtualenv-16.0.0.tar.gz\n\n# Make sure to install using Python 3, as TensorFlow only provides Python 3 artifacts\npython virtualenv-16.0.0/virtualenv.py venv\n. venv/bin/activate\npip install tensorflow==1.13.1\nzip -r myvenv.zip venv\ndeactivate\n")),Object(r.b)("p",null,"The above commands will produced a myvenv.zip and it will be used in below example. There's no need to copy it to other nodes. And it is not needed when using Docker to run the job."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," If you require a version of TensorFlow and TensorBoard prior to ",Object(r.b)("inlineCode",{parentName:"p"},"1.13.1"),", take a look at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/TonY/issues/42"},"this")," issue."),Object(r.b)("h3",{id:"get-the-training-examples"},"Get the training examples"),Object(r.b)("p",null,"Get mnist_distributed.py from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/TonY/tree/master/tony-examples/mnist-tensorflow"},"https://github.com/linkedin/TonY/tree/master/tony-examples/mnist-tensorflow")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'SUBMARINE_VERSION=<REPLACE_VERSION>\nSUBMARINE_HADOOP_VERSION=3.1\nCLASSPATH=$(hadoop classpath --glob):path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar \\\njava org.apache.submarine.client.cli.Cli job run --name tf-job-001 \\\n --framework tensorflow \\\n --verbose \\\n --input_path "" \\\n --num_workers 2 \\\n --worker_resources memory=1G,vcores=1 \\\n --num_ps 1 \\\n --ps_resources memory=1G,vcores=1 \\\n --worker_launch_cmd "myvenv.zip/venv/bin/python mnist_distributed.py --steps 2 --data_dir /tmp/data --working_dir /tmp/mode" \\\n --ps_launch_cmd "myvenv.zip/venv/bin/python mnist_distributed.py --steps 2 --data_dir /tmp/data --working_dir /tmp/mode" \\\n --insecure \\\n --conf tony.containers.resources=path-to/myvenv.zip#archive,path-to/mnist_distributed.py,path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar\n')),Object(r.b)("p",null,"You should then be able to see links and status of the jobs from command line:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"2019-04-22 20:30:42,611 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: worker index: 0 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000003/pi status: RUNNING\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: worker index: 1 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000004/pi status: RUNNING\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: ps index: 0 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000002/pi status: RUNNING\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Logs for ps 0 at: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000002/pi\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Logs for worker 0 at: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000003/pi\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Logs for worker 1 at: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000004/pi\n2019-04-22 20:30:44,625 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: ps index: 0 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000002/pi status: FINISHED\n2019-04-22 20:30:44,625 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: worker index: 0 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000003/pi status: FINISHED\n2019-04-22 20:30:44,626 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: worker index: 1 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000004/pi status: FINISHED\n\n")),Object(r.b)("h3",{id:"with-docker"},"With Docker"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'SUBMARINE_VERSION=<REPLACE_VERSION>\nSUBMARINE_HADOOP_VERSION=3.1\nCLASSPATH=$(hadoop classpath --glob):path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar \\\njava org.apache.submarine.client.cli.Cli job run --name tf-job-001 \\\n --framework tensorflow \\\n --docker_image hadoopsubmarine/tf-1.8.0-cpu:0.0.1 \\\n --input_path hdfs://pi-aw:9000/dataset/cifar-10-data \\\n --worker_resources memory=3G,vcores=2 \\\n --worker_launch_cmd "export CLASSPATH=\\$(/hadoop-3.1.0/bin/hadoop classpath --glob) && cd /test/models/tutorials/image/cifar10_estimator && python cifar10_main.py --data-dir=%input_path% --job-dir=%checkpoint_path% --train-steps=10000 --eval-batch-size=16 --train-batch-size=16 --variable-strategy=CPU --num-gpus=0 --sync" \\\n --env JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64 \\\n --env DOCKER_HADOOP_HDFS_HOME=/hadoop-3.1.0 \\\n --env DOCKER_JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64 \\\n --env HADOOP_HOME=/hadoop-3.1.0 \\\n --env HADOOP_YARN_HOME=/hadoop-3.1.0 \\\n --env HADOOP_COMMON_HOME=/hadoop-3.1.0 \\\n --env HADOOP_HDFS_HOME=/hadoop-3.1.0 \\\n --env HADOOP_CONF_DIR=/hadoop-3.1.0/etc/hadoop \\\n --conf tony.containers.resources=path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar\n')),Object(r.b)("h4",{id:"notes"},"Notes:"),Object(r.b)("p",null,"1) ",Object(r.b)("inlineCode",{parentName:"p"},"DOCKER_JAVA_HOME")," points to JAVA_HOME inside Docker image."),Object(r.b)("p",null,"2) ",Object(r.b)("inlineCode",{parentName:"p"},"DOCKER_HADOOP_HDFS_HOME")," points to HADOOP_HDFS_HOME inside Docker image."),Object(r.b)("p",null,"We removed TonY submodule after applying ",Object(r.b)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/SUBMARINE-371"},"SUBMARINE-371")," and changed to use TonY dependency directly."),Object(r.b)("p",null,"After Submarine v0.2.0, there is a uber jar ",Object(r.b)("inlineCode",{parentName:"p"},"submarine-all-${SUBMARINE_VERSION}-hadoop-${HADOOP_VERSION}.jar")," released together with\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"submarine-core-${SUBMARINE_VERSION}.jar"),", ",Object(r.b)("inlineCode",{parentName:"p"},"submarine-yarnservice-runtime-${SUBMARINE_VERSION}.jar")," and ",Object(r.b)("inlineCode",{parentName:"p"},"submarine-tony-runtime-${SUBMARINE_VERSION}.jar"),"."),Object(r.b)("br",null),Object(r.b)("h2",{id:"launch-pytorch-application"},"Launch PyTorch Application:"),Object(r.b)("h3",{id:"without-docker-1"},"Without Docker"),Object(r.b)("p",null,"You need:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Build a Python virtual environment with PyTorch 0.4.0+ installed"),Object(r.b)("li",{parentName:"ul"},"A cluster with Hadoop 2.9 or above.")),Object(r.b)("h3",{id:"building-a-python-virtual-environment-with-pytorch"},"Building a Python virtual environment with PyTorch"),Object(r.b)("p",null,"TonY requires a Python virtual environment zip with PyTorch and any needed Python libraries already installed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"wget https://files.pythonhosted.org/packages/33/bc/fa0b5347139cd9564f0d44ebd2b147ac97c36b2403943dbee8a25fd74012/virtualenv-16.0.0.tar.gz\ntar xf virtualenv-16.0.0.tar.gz\n\npython virtualenv-16.0.0/virtualenv.py venv\n. venv/bin/activate\npip install pytorch==0.4.0\nzip -r myvenv.zip venv\ndeactivate\n")),Object(r.b)("h3",{id:"get-the-training-examples-1"},"Get the training examples"),Object(r.b)("p",null,"Get mnist_distributed.py from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/TonY/tree/master/tony-examples/mnist-pytorch"},"https://github.com/linkedin/TonY/tree/master/tony-examples/mnist-pytorch")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'SUBMARINE_VERSION=<REPLACE_VERSION>\nSUBMARINE_HADOOP_VERSION=3.1\nCLASSPATH=$(hadoop classpath --glob):path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar \\\njava org.apache.submarine.client.cli.Cli job run --name PyTorch-job-001 \\\n --framework pytorch\n --num_workers 2 \\\n --worker_resources memory=3G,vcores=2 \\\n --num_ps 2 \\\n --ps_resources memory=3G,vcores=2 \\\n --worker_launch_cmd "myvenv.zip/venv/bin/python mnist_distributed.py" \\\n --ps_launch_cmd "myvenv.zip/venv/bin/python mnist_distributed.py" \\\n --insecure \\\n --conf tony.containers.resources=path-to/myvenv.zip#archive,path-to/mnist_distributed.py, \\\npath-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar\n')),Object(r.b)("p",null,"You should then be able to see links and status of the jobs from command line:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"2019-04-22 20:30:42,611 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: worker index: 0 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000003/pi status: RUNNING\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: worker index: 1 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000004/pi status: RUNNING\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: ps index: 0 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000002/pi status: RUNNING\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Logs for ps 0 at: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000002/pi\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Logs for worker 0 at: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000003/pi\n2019-04-22 20:30:42,612 INFO tony.TonyClient: Logs for worker 1 at: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000004/pi\n2019-04-22 20:30:44,625 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: ps index: 0 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000002/pi status: FINISHED\n2019-04-22 20:30:44,625 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: worker index: 0 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000003/pi status: FINISHED\n2019-04-22 20:30:44,626 INFO tony.TonyClient: Tasks Status Updated: [TaskInfo] name: worker index: 1 url: http://pi-aw:8042/node/containerlogs/container_1555916523933_0030_01_000004/pi status: FINISHED\n\n")),Object(r.b)("h3",{id:"with-docker-1"},"With Docker"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'SUBMARINE_VERSION=<REPLACE_VERSION>\nSUBMARINE_HADOOP_VERSION=3.1\nCLASSPATH=$(hadoop classpath --glob):path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar \\\njava org.apache.submarine.client.cli.Cli job run --name PyTorch-job-001 \\\n --framework pytorch\n --docker_image pytorch-latest-gpu:0.0.1 \\\n --input_path "" \\\n --num_workers 1 \\\n --worker_resources memory=3G,vcores=2 \\\n --worker_launch_cmd "cd /test/ && python cifar10_tutorial.py" \\\n --env JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64 \\\n --env DOCKER_HADOOP_HDFS_HOME=/hadoop-3.1.2 \\\n --env DOCKER_JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64 \\\n --env HADOOP_HOME=/hadoop-3.1.2 \\\n --env HADOOP_YARN_HOME=/hadoop-3.1.2 \\\n --env HADOOP_COMMON_HOME=/hadoop-3.1.2 \\\n --env HADOOP_HDFS_HOME=/hadoop-3.1.2 \\\n --env HADOOP_CONF_DIR=/hadoop-3.1.2/etc/hadoop \\\n --conf tony.containers.resources=path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar\n')),Object(r.b)("h2",{id:"launch-mxnet-application"},"Launch MXNet Application:"),Object(r.b)("h3",{id:"without-docker-2"},"Without Docker"),Object(r.b)("p",null,"You need:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Build a Python virtual environment with MXNet installed"),Object(r.b)("li",{parentName:"ul"},"A cluster with Hadoop 2.9 or above.")),Object(r.b)("h3",{id:"building-a-python-virtual-environment-with-mxnet"},"Building a Python virtual environment with MXNet"),Object(r.b)("p",null,"TonY requires a Python virtual environment zip with MXNet and any needed Python libraries already installed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"wget https://files.pythonhosted.org/packages/33/bc/fa0b5347139cd9564f0d44ebd2b147ac97c36b2403943dbee8a25fd74012/virtualenv-16.0.0.tar.gz\ntar xf virtualenv-16.0.0.tar.gz\n\npython virtualenv-16.0.0/virtualenv.py venv\n. venv/bin/activate\npip install mxnet==1.5.1\nzip -r myvenv.zip venv\ndeactivate\n")),Object(r.b)("h3",{id:"get-the-training-examples-2"},"Get the training examples"),Object(r.b)("p",null,"Get image_classification.py from this ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/blob/master/dev-support/mini-submarine/submarine/image_classification.py"},"link")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'SUBMARINE_VERSION=<REPLACE_VERSION>\nSUBMARINE_HADOOP_VERSION=3.1\nCLASSPATH=$(hadoop classpath --glob):path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar \\\njava org.apache.submarine.client.cli.Cli job run --name MXNet-job-001 \\\n --framework mxnet\n --input_path "" \\\n --num_workers 2 \\\n --worker_resources memory=3G,vcores=2 \\\n --worker_launch_cmd "myvenv.zip/venv/bin/python image_classification.py --dataset cifar10 --model vgg11 --epochs 1 --kvstore dist_sync" \\\n --num_ps 2 \\\n --ps_resources memory=3G,vcores=2 \\\n --ps_launch_cmd "myvenv.zip/venv/bin/python image_classification.py --dataset cifar10 --model vgg11 --epochs 1 --kvstore dist_sync" \\\n --num_schedulers=1 \\\n --scheduler_resources memory=1G,vcores=1 \\\n --scheduler_launch_cmd="myvenv.zip/venv/bin/python image_classification.py --dataset cifar10 --model vgg11 --epochs 1 --kvstore dist_sync" \\\n --insecure \\\n --conf tony.containers.resources=path-to/myvenv.zip#archive,path-to/image_classification.py, \\\npath-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar\n')),Object(r.b)("p",null,"You should then be able to see links and status of the jobs from command line:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"2020-04-16 20:23:43,834 INFO tony.TonyClient: Task status updated: [TaskInfo] name: server, index: 1, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000004/pi status: RUNNING\n2020-04-16 20:23:43,834 INFO tony.TonyClient: Task status updated: [TaskInfo] name: server, index: 0, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000003/pi status: RUNNING\n2020-04-16 20:23:43,834 INFO tony.TonyClient: Task status updated: [TaskInfo] name: worker, index: 1, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000006/pi status: RUNNING\n2020-04-16 20:23:43,834 INFO tony.TonyClient: Task status updated: [TaskInfo] name: worker, index: 0, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000005/pi status: RUNNING\n2020-04-16 20:23:43,834 INFO tony.TonyClient: Task status updated: [TaskInfo] name: scheduler, index: 0, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000002/pi status: RUNNING\n2020-04-16 20:23:43,839 INFO tony.TonyClient: Logs for scheduler 0 at: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000002/pi\n2020-04-16 20:23:43,839 INFO tony.TonyClient: Logs for server 0 at: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000003/pi\n2020-04-16 20:23:43,840 INFO tony.TonyClient: Logs for server 1 at: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000004/pi\n2020-04-16 20:23:43,840 INFO tony.TonyClient: Logs for worker 0 at: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000005/pi\n2020-04-16 20:23:43,840 INFO tony.TonyClient: Logs for worker 1 at: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000006/pi\n2020-04-16 21:02:09,723 INFO tony.TonyClient: Task status updated: [TaskInfo] name: scheduler, index: 0, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000002/pi status: SUCCEEDED\n2020-04-16 21:02:09,736 INFO tony.TonyClient: Task status updated: [TaskInfo] name: worker, index: 0, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000005/pi status: SUCCEEDED\n2020-04-16 21:02:09,737 INFO tony.TonyClient: Task status updated: [TaskInfo] name: server, index: 1, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000004/pi status: SUCCEEDED\n2020-04-16 21:02:09,737 INFO tony.TonyClient: Task status updated: [TaskInfo] name: worker, index: 1, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000006/pi status: SUCCEEDED\n2020-04-16 21:02:09,737 INFO tony.TonyClient: Task status updated: [TaskInfo] name: server, index: 0, url: http://pi-aw:8042/node/containerlogs/container_1587037749540_0005_01_000003/pi status: SUCCEEDED\n")),Object(r.b)("h3",{id:"with-docker-2"},"With Docker"),Object(r.b)("p",null,"You could refer to this ",Object(r.b)("a",{target:"_blank",href:t(193).default},"sample Dockerfile")," for building your own Docker image."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'SUBMARINE_VERSION=<REPLACE_VERSION>\nSUBMARINE_HADOOP_VERSION=3.1\nCLASSPATH=$(hadoop classpath --glob):path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar \\\njava org.apache.submarine.client.cli.Cli job run --name MXNet-job-001 \\\n --framework mxnet\n --docker_image <your_docker_image> \\\n --input_path "" \\\n --num_schedulers 1 \\\n --scheduler_resources memory=1G,vcores=1 \\\n --scheduler_launch_cmd "/usr/bin/python image_classification.py --dataset cifar10 --model vgg11 --epochs 1 --kvstore dist_sync" \\\n --num_workers 2 \\\n --worker_resources memory=2G,vcores=1 \\\n --worker_launch_cmd "/usr/bin/python image_classification.py --dataset cifar10 --model vgg11 --epochs 1 --kvstore dist_sync" \\\n --num_ps 2 \\\n --ps_resources memory=2G,vcores=1 \\\n --ps_launch_cmd "/usr/bin/python image_classification.py --dataset cifar10 --model vgg11 --epochs 1 --kvstore dist_sync" \\\n --verbose \\\n --insecure \\\n --conf tony.containers.resources=path-to/image_classification.py,path-to/submarine-all-${SUBMARINE_VERSION}-hadoop-${SUBMARINE_HADOOP_VERSION}.jar\n')),Object(r.b)("h2",{id:"use-yarn-service-to-run-submarine-deprecated"},"Use YARN Service to run Submarine: Deprecated"),Object(r.b)("p",null,"Historically, Submarine supports to use ",Object(r.b)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/r3.1.0/hadoop-yarn/hadoop-yarn-site/yarn-service/Overview.html"},"YARN Service")," to submit deep learning jobs. Now we stop supporting it because YARN service is not actively developed by community, and extra dependencies such as RegistryDNS/ATS-v2 causes lots of issues for setup."),Object(r.b)("p",null,"As of now, you can still use YARN service to run Submarine, but code will be removed in the future release. We will only support use TonY when use Submarine on YARN."))}p.isMDXComponent=!0},135:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||r;return t?a.a.createElement(b,s(s({ref:n},l),{},{components:t})):a.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},193:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/files/Dockerfile.cifar10.mx_1.5-cff207e9070bfca947922e0977637093.1"}}]);