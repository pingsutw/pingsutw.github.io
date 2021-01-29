(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(151)),s={title:"Cluster Server Design - High-Availability"},o={unversionedId:"designDocs/wip-designs/submarine-clusterServer",id:"designDocs/wip-designs/submarine-clusterServer",isDocsHomePage:!1,title:"Cluster Server Design - High-Availability",description:"\x3c!--",source:"@site/docs/designDocs/wip-designs/submarine-clusterServer.md",slug:"/designDocs/wip-designs/submarine-clusterServer",permalink:"/submarine/docs/designDocs/wip-designs/submarine-clusterServer",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/designDocs/wip-designs/submarine-clusterServer.md",version:"current",sidebar:"docs",previous:{title:"Submarine Launcher",permalink:"/submarine/docs/designDocs/wip-designs/submarine-launcher"},next:{title:"Security Implementation",permalink:"/submarine/docs/designDocs/wip-designs/security-implementation"}},l=[{value:"Below is existing proposal:",id:"below-is-existing-proposal",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Requirement",id:"requirement",children:[{value:"Cluster Metadata Center",id:"cluster-metadata-center",children:[]},{value:"Service discovery",id:"service-discovery",children:[]},{value:"Cluster event",id:"cluster-event",children:[]},{value:"Independence",id:"independence",children:[]},{value:"Disadvantages",id:"disadvantages",children:[]}]},{value:"System design",id:"system-design",children:[{value:"Universal design",id:"universal-design",children:[]},{value:"ClusterConfigure",id:"clusterconfigure",children:[]},{value:"ClusterServer",id:"clusterserver",children:[]},{value:"ClusterClient",id:"clusterclient",children:[]},{value:"ClusterMetadata",id:"clustermetadata",children:[]},{value:"Network fault tolerance",id:"network-fault-tolerance",children:[]},{value:"Cluster monitoring",id:"cluster-monitoring",children:[]},{value:"Atomix Raft algorithm library",id:"atomix-raft-algorithm-library",children:[]},{value:"Synchronize workbench notes",id:"synchronize-workbench-notes",children:[]},{value:"Listen for note update events",id:"listen-for-note-update-events",children:[]},{value:"Broadcast note update event",id:"broadcast-note-update-event",children:[]}]}],c={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please note that this design doc is working-in-progress and need more works to complete. "))),Object(i.b)("h2",{id:"below-is-existing-proposal"},"Below is existing proposal:"),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The Submarine system contains a total of two daemon services, Submarine Server and Workbench Server."),Object(i.b)("p",null,"Submarine Server mainly provides job submission, job scheduling, job status monitoring, and model online service for Submarine."),Object(i.b)("p",null,"Workbench Server is mainly for algorithm users to provide algorithm development, Python/Spark interpreter operation, and other services through Notebook."),Object(i.b)("p",null,"The goal of the Submarine project is to provide high availability and high-reliability services for big data processing,\nalgorithm development, job scheduling, model online services, model batch, and incremental updates. "),Object(i.b)("p",null,"In addition to the high availability of big data and machine learning frameworks,\nthe high availability of Submarine Server and Workbench Server itself is a key consideration."),Object(i.b)("h2",{id:"requirement"},"Requirement"),Object(i.b)("h3",{id:"cluster-metadata-center"},"Cluster Metadata Center"),Object(i.b)("p",null,"Multiple Submarine (or Workbench) Server processes create a Submarine Cluster through the RAFT algorithm library. "),Object(i.b)("p",null,"The cluster internally maintains a metadata center. All servers can operate the metadata. "),Object(i.b)("p",null,"The RAFT algorithm ensures that multiple processes are simultaneously co-located. "),Object(i.b)("p",null,"A data modification will not cause problems such as mutual coverage and dirty data."),Object(i.b)("p",null,"This metadata center stores data by means of key-value pairs. it can store/support a variety of data,\nbut it should be noted that metadata is only suitable for storing small amounts of data and cannot be used to replace data storage."),Object(i.b)("h3",{id:"service-discovery"},"Service discovery"),Object(i.b)("p",null,"By storing the information of the service or process in the metadata center, we can easily find the information of the service or process we need in any place,\nfor example, the IP address and port where the Python interpreter will be the process. Information is stored in metadata,\nand other services can easily find process information through process IDs and connect to provide service discovery capabilities."),Object(i.b)("h3",{id:"cluster-event"},"Cluster event"),Object(i.b)("p",null,"In the entire Submarine cluster, the servers can communicate with each other and other child processes to send cluster events to each other. "),Object(i.b)("p",null,"The service or process processes the corresponding programs according to the cluster events. For example,\nthe Workbench Server can be managed to Python. The interpreter process sends a shutdown event that controls the operation of the services and individual subprocesses throughout the cluster."),Object(i.b)("p",null,"Cluster events support both broadcast and separate delivery capabilities."),Object(i.b)("h3",{id:"independence"},"Independence"),Object(i.b)("p",null,"We implement Submarine's clustering capabilities through the RAFT algorithm library, without relying on any external services (e.g. Zookeeper, Etcd, etc.)"),Object(i.b)("h3",{id:"disadvantages"},"Disadvantages"),Object(i.b)("p",null,"Because the RAFT algorithm requires more than half of the servers available to ensure the normality of the RAFT algorithm,\nif we need to turn on the clustering capabilities of Submarine (Workbench) Server, when more than half of the servers are unavailable,\nsome programs may appear abnormal. Of course, we also detected this in the system, downgrading the system or refusing to provide service status."),Object(i.b)("h2",{id:"system-design"},"System design"),Object(i.b)("h3",{id:"universal-design"},"Universal design"),Object(i.b)("p",null,"Modular design, Submarine (Workbench) Server exists in the Submarine system, these two services need to provide clustering capabilities,\nso we abstract the cluster function into a separate module for development so that Submarine (Workbench) Server can reuse the cluster function module."),Object(i.b)("h3",{id:"clusterconfigure"},"ClusterConfigure"),Object(i.b)("p",null,"Add a ",Object(i.b)("inlineCode",{parentName:"p"},"submarine.server.addr")," and ",Object(i.b)("inlineCode",{parentName:"p"},"workbench.server.addr")," configuration items in ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-site.xml"),", ",Object(i.b)("inlineCode",{parentName:"p"},"submarine.server.addr=ip1, ip2, ip3"),",\nthrough the IP list, the RAFT algorithm module in the server process can Cluster with other server processes."),Object(i.b)("h3",{id:"clusterserver"},"ClusterServer"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ClusterServer module encapsulates the RAFT algorithm module, which can create a service cluster and read and write metadata based on the two configuration items submarine.server.addr or workbench.server.addr.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The cluster management service runs in each submarine server;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The cluster management service establishes a cluster by using the atomix RaftServer class of the Raft algorithm library, maintains the ClusterStateMachine,\nand manages the service state metadata of each submarine server through the PutCommand, GetQuery, and DeleteCommand operation commands."))),Object(i.b)("h3",{id:"clusterclient"},"ClusterClient"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ClusterClient module encapsulates the RAFT algorithm client module, which can communicate with the cluster according to the two configuration items ",Object(i.b)("inlineCode",{parentName:"p"},"submarine.server.addr")," or ",Object(i.b)("inlineCode",{parentName:"p"},"workbench.server.addr"),",\nread and write metadata, and write the IP and port information of the client process. Into the cluster's metadata center.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The cluster management client runs in each submarine server and submarine Interpreter process;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The cluster management client manages the submarine server and submarine Interpreter process state (metadata information)\nin the ClusterStateMachine by using the atomix RaftClient class of the Raft library to connect to the atomix RaftServer. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When the submarine server and Submarine Interpreter processes are started, they are added to the ClusterStateMachine and are removed from the ClusterStateMachine ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"when the Submarine Server and Submarine Interpreter processes are closed."))),Object(i.b)("h3",{id:"clustermetadata"},"ClusterMetadata"),Object(i.b)("p",null,"Metadata stores metadata information in a KV key-value pair\u3002\nServerMeta\uff1akey='host:port'\uff0cvalue= {SERVER_HOST=...\uff0cSERVER_PORT=...\uff0c...}"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SUBMARINE_SERVER_HOST"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submarine server IP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SUBMARINE_SERVER_PORT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submarine server port")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WORKBENCH_SERVER_HOST"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submarine workbench server IP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WORKBENCH_SERVER_PORT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submarine workbench server port")))),Object(i.b)("p",null,"InterpreterMeta\uff1akey=InterpreterGroupId\uff0cvalue={INTP_TSERVER_HOST=...\uff0c...}"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTP_TSERVER_HOST"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submarine Interpreter Thrift IP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTP_TSERVER_PORT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submarine Interpreter Thrift port")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTP_START_TIME"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submarine Interpreter start time")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HEARTBEAT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submarine Interpreter heartbeat time")))),Object(i.b)("h3",{id:"network-fault-tolerance"},"Network fault tolerance"),Object(i.b)("p",null,"In a distributed environment, there may be network anomalies, network delays, or service exceptions. After submitting metadata to the cluster,\ncheck whether the submission is successful. After the submission fails, save the metadata in the local message queue. A separate commit thread to retry;"),Object(i.b)("h3",{id:"cluster-monitoring"},"Cluster monitoring"),Object(i.b)("p",null,"The cluster needs to monitor whether the Submarine Server and Submarine-Interpreter processes are working properly."),Object(i.b)("p",null,"The Submarine Server and Submarine Interpreter processes periodically send heartbeats to update their own timestamps in the cluster metadata. "),Object(i.b)("p",null,"The Submarine Server with Leader identity periodically checks the timestamps of the Submarine Server and Submarine Interpreter processes to clear the timeout services and processes."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The cluster monitoring module runs in each Submarine Server and Submarine Interpreter process,\nperiodically sending heartbeat data of the service or process to the cluster;")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When the cluster monitoring module runs in Submarine Server, it sends the heartbeat to the cluster's ClusterStateMachine.\nIf the cluster does not receive heartbeat information for a long time, Indicates that the service or process is abnormal and unavailable.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Resource usage statistics strategy, in order to avoid the instantaneous high peak and low peak of the server,\nthe cluster monitoring will collect the average resource usage in the most recent period for reporting, and improve the reasonable line and effectiveness of the server resources as much as possible;")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When the cluster monitoring module runs in the Submarine Server, it checks the heartbeat data of each Submarine Server and Submarine Interpreter process.\nIf it times out, it considers that the service or process is abnormally unavailable and removes it from the cluster."))),Object(i.b)("h3",{id:"atomix-raft-algorithm-library"},"Atomix Raft algorithm library"),Object(i.b)("p",null,"In order to reduce the deployment complexity of distributed mode, submarine server does not use Zookeeper to build a distributed cluster.\nMultiple submarine server groups are built into distributed clusters by using the Raft algorithm in submarine server.\nThe Raft algorithm is involved by atomix lib of atomix that has passed Jepsen consistency verification."),Object(i.b)("h3",{id:"synchronize-workbench-notes"},"Synchronize workbench notes"),Object(i.b)("p",null,"In cluster mode, the user creates, modifies, and deletes the note on any of the servers.\nAll need to be notified to all the servers in the cluster to synchronize the update of Notebook.\nFailure to do so will result in the user not being able to continue while switching to another server."),Object(i.b)("h3",{id:"listen-for-note-update-events"},"Listen for note update events"),Object(i.b)("p",null,"Listen for the NEW_NOTE, DEL_NOTE, REMOVE_NOTE_TO_TRASH ... event of the notebook in the NotebookServer#onMessage() function."),Object(i.b)("h3",{id:"broadcast-note-update-event"},"Broadcast note update event"),Object(i.b)("p",null,"The note is refreshed by notifying the event to all Submarine servers in the cluster via messaging Service."))}b.isMDXComponent=!0},151:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,p=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?a.a.createElement(p,o(o({ref:t},c),{},{components:r})):a.a.createElement(p,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);