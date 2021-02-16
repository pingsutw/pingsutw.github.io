(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?r.a.createElement(d,s(s({ref:t},b),{},{components:a})):r.a.createElement(d,s({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),i=(a(0),a(135)),o={title:"How to Run Integration Test"},s={unversionedId:"devDocs/IntegrationTest",id:"devDocs/IntegrationTest",isDocsHomePage:!1,title:"How to Run Integration Test",description:"\x3c!---",source:"@site/docs/devDocs/IntegrationTest.md",slug:"/devDocs/IntegrationTest",permalink:"/docs/devDocs/IntegrationTest",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/devDocs/IntegrationTest.md",version:"current",sidebar:"docs",previous:{title:"How to Build Submarine",permalink:"/docs/devDocs/BuildFromCode"},next:{title:"Quick development Tips",permalink:"/docs/devDocs/QuickDevTips"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"k8s test",id:"k8s-test",children:[{value:"Run k8s test in locally",id:"run-k8s-test-in-locally",children:[]},{value:"Run k8s test in travis",id:"run-k8s-test-in-travis",children:[]}]},{value:"E2E test",id:"e2e-test",children:[{value:"E2E tests can be executed both locally and in Travis (For workbench developer)",id:"e2e-tests-can-be-executed-both-locally-and-in-travis-for-workbench-developer",children:[]},{value:"Run the existing tests.",id:"run-the-existing-tests",children:[]},{value:"Add your own integration test",id:"add-your-own-integration-test",children:[]}]}],b={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now, Apache Submarine supports two kinds of integration test: ",Object(i.b)("inlineCode",{parentName:"p"},"test-e2e")," and ",Object(i.b)("inlineCode",{parentName:"p"},"test-k8s"),". These two modules can be found in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/submarine-test"},"submarine/submarine-test")," directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Currently, there are some differences between ",Object(i.b)("inlineCode",{parentName:"p"},"test-e2e")," and ",Object(i.b)("inlineCode",{parentName:"p"},"test-k8s")," in operation mode. To elaborate, ",Object(i.b)("inlineCode",{parentName:"p"},"test-e2e")," needs to deploy Apache Submarine locally, while ",Object(i.b)("inlineCode",{parentName:"p"},"test-k8s")," deploys Apache Submarine via k8s.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"These two test modules can be applied to different test scenarios. (In the future, these two test modules may be combined or adjusted)"))),Object(i.b)("h2",{id:"k8s-test"},"k8s test"),Object(i.b)("p",null,"k8s test: When the user submits the code to his/her repository or the ",Object(i.b)("inlineCode",{parentName:"p"},"apache/submarine")," git repository, the travis test task will automatically start."),Object(i.b)("p",null,"test-k8s runs test cases in travis. It will first create a k8s cluster by using the kind tool in travis,"),Object(i.b)("p",null,"and then compile and package the submarine project in ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-dist")," directory to build a docker image."),Object(i.b)("p",null,"Then use this latest code to build a docker image and deploy a submarine system in k8s. Then run test case in the ",Object(i.b)("inlineCode",{parentName:"p"},"test-k8s/..")," directory."),Object(i.b)("h3",{id:"run-k8s-test-in-locally"},"Run k8s test in locally"),Object(i.b)("p",null,"Executing the following command will perform the following actions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mvn -Phadoop-2.9 clean package install -DskipTests verify -DskipRat -am -pl submarine-test/test-k8s\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The submarine project will be compiled and packaged to generate ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-dist/target/submarine-<version>.tar.gz"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Call the ",Object(i.b)("inlineCode",{parentName:"p"},"submarine-cloud/hack/integration-test.sh")," script"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Call the ",Object(i.b)("inlineCode",{parentName:"li"},"build.sh")," script under ",Object(i.b)("inlineCode",{parentName:"li"},"submarine/dev-support/docker-images/")," to generate the latest ",Object(i.b)("inlineCode",{parentName:"li"},"submarine"),", ",Object(i.b)("inlineCode",{parentName:"li"},"database")," and ",Object(i.b)("inlineCode",{parentName:"li"},"operator")," docker images."),Object(i.b)("li",{parentName:"ul"},"Call ",Object(i.b)("inlineCode",{parentName:"li"},"submarine-cloud/hack/kind-cluster-build.sh")," to create a k8s cluster"),Object(i.b)("li",{parentName:"ul"},"Call ",Object(i.b)("inlineCode",{parentName:"li"},"submarine-cloud/hack/deploy-submarine.sh")," to deploy the submarine system in the k8s cluster using the latest ",Object(i.b)("inlineCode",{parentName:"li"},"submarine"),", ",Object(i.b)("inlineCode",{parentName:"li"},"database")," and ",Object(i.b)("inlineCode",{parentName:"li"},"operator")," docker images."),Object(i.b)("li",{parentName:"ul"},"Call the test cases in ",Object(i.b)("inlineCode",{parentName:"li"},"submarine-test/test-k8s/")," for testing.")))),Object(i.b)("h3",{id:"run-k8s-test-in-travis"},"Run k8s test in travis"),Object(i.b)("p",null,"Each time a code is submitted, travis is automatically triggered for testing."),Object(i.b)("h2",{id:"e2e-test"},"E2E test"),Object(i.b)("h3",{id:"e2e-tests-can-be-executed-both-locally-and-in-travis-for-workbench-developer"},"E2E tests can be executed both locally and in Travis (For workbench developer)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run E2E tests locally:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Step1: Follow ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/docs/workbench/HowToRun.md"},"HowToRun.md")," to launch the submarine-server and database."),Object(i.b)("li",{parentName:"ul"},"Step2: Run workbench (Angular version) locally")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"cd submarine/submarine-workbench/workbench-web\nnpm start\n// Check 127.0.0.1:4200\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Step3: Modify the port from 8080 to 4200",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/WebDriverManager.java"},"WebDriverManager.java"),": ",Object(i.b)("inlineCode",{parentName:"li"},'url = "http://localhost:8080";')," --\x3e ",Object(i.b)("inlineCode",{parentName:"li"},'url = "http://localhost:4200";')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/tree/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration"},"Your Unit test case"),": ",Object(i.b)("inlineCode",{parentName:"li"},"8080")," --\x3e ",Object(i.b)("inlineCode",{parentName:"li"},"4200")))),Object(i.b)("li",{parentName:"ul"},"Step4: Comment the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/ChromeWebDriverProvider.java"},"ChromeWebDriverProvider.java"),": ",Object(i.b)("inlineCode",{parentName:"li"},'chromeOptions.addArguments("--headless");')," --\x3e ",Object(i.b)("inlineCode",{parentName:"li"},'//chromeOptions.addArguments("--headless");')),Object(i.b)("li",{parentName:"ul"},"With the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option, the selenium will be executed in background."))),Object(i.b)("li",{parentName:"ul"},"Step5: Run E2E test cases (Please check the following section ",Object(i.b)("strong",{parentName:"li"},"Run the existing tests"),")"))),Object(i.b)("li",{parentName:"ul"},"Run E2E tests in Travis:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Step1: Make sure that the port must be 8080 rather than in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/WebDriverManager.java"},"WebDriverManager.java")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/tree/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration"},"all test cases"),"."),Object(i.b)("li",{parentName:"ul"},"Step2: Make sure that the ",Object(i.b)("inlineCode",{parentName:"li"},"headless")," option is not commented in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/ChromeWebDriverProvider.java"},"ChromeWebDriverProvider.java"),"."),Object(i.b)("li",{parentName:"ul"},"Step3: If you push the commit to Github, the Travis CI will execute automatically and you can check it in ",Object(i.b)("inlineCode",{parentName:"li"},"https://travis-ci.org/${your_github_account}/${your_repo_name}"),".")))),Object(i.b)("h3",{id:"run-the-existing-tests"},"Run the existing tests."),Object(i.b)("h5",{id:"move-to-the-working-directory"},"Move to the working directory."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cd submarine/submarine-test/test-e2e\n")),Object(i.b)("h5",{id:"compile--run"},"Compile & Run."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Following command will compile all files and run ",Object(i.b)("strong",{parentName:"p"},"all"),' files ending with "IT" in the ',Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration"},"directory"),"."),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"For linux",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"mvn verify\n"))),Object(i.b)("li",{parentName:"ul"},"For MacOS")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre"},"mvn clean install -U\n")),Object(i.b)("p",{parentName:"blockquote"},"Run a specific testcase"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre"},"mvn -Dtest=${your_test_case_file_name} test //ex: mvn -Dtest=loginIT test \n"))),Object(i.b)("h5",{id:"result"},"Result"),Object(i.b)("p",null,"If all of the function under test are succeeded, it will show."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"BUILD SUCCESS\n")),Object(i.b)("p",null,"Otherwise, it will show."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"BUILD FAILURE\n")),Object(i.b)("h3",{id:"add-your-own-integration-test"},"Add your own integration test"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Create a new file ending with "IT" under "submarine/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration/".'),Object(i.b)("li",{parentName:"ol"},"Your public class is recommended to extend AbstractSubmarineIT. The class AbstractSubmarineIT contains some commonly used functions.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"  WebElement pollingWait(final By locator, final long timeWait); // Find element on the website.\n  void clickAndWait(final By locator); // Click element and wait for 1 second.\n  void sleep(long millis, boolean logOutput); // Let system sleep a period of time.\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"There are also some commonly used functions except in AbstractSubmarineIT.java.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"  // In WebDriverManager.java:\n  public static WebDriver getWebDriver(); // This return a firefox webdriver which has been set to your workbench website.\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Add ",Object(i.b)("a",{parentName:"li",href:"https://junit.org/junit5/docs/current/user-guide/"},"JUnit")," annotation before your testing function, e.g., @Beforeclass, @Test, and @AfterClass. You can refer to ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration/loginIT.java"},"loginIT.java"),"."),Object(i.b)("li",{parentName:"ol"},"Use command mentioned above to compile and run to test whether it works as your anticipation.")))}c.isMDXComponent=!0}}]);