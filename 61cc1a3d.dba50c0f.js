(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),h=r,m=b["".concat(a,".").concat(h)]||b[h]||p[h]||o;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(135)),a={title:"Guide for Apache Submarine Contributor"},c={unversionedId:"community/contributing",id:"community/contributing",isDocsHomePage:!1,title:"Guide for Apache Submarine Contributor",description:"\x3c!--",source:"@site/docs/community/contributing.md",slug:"/community/contributing",permalink:"/docs/community/contributing",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/community/contributing.md",version:"current",sidebar:"docs",previous:{title:"Guide for Apache Submarine Committers",permalink:"/docs/community/HowToCommit"},next:{title:"Architecture and Requirment",permalink:"/docs/designDocs/architecture-and-requirements"}},l=[{value:"Creating a Pull Request",id:"creating-a-pull-request",children:[]},{value:"Source Control Workflow",id:"source-control-workflow",children:[]},{value:"The Review Process",id:"the-review-process",children:[]},{value:"Setting up",id:"setting-up",children:[{value:"Software Configuration Management (SCM)",id:"software-configuration-management-scm",children:[]},{value:"Integrated Development Environment (IDE)",id:"integrated-development-environment-ide",children:[]},{value:"Code convention",id:"code-convention",children:[]}]},{value:"Getting the source code",id:"getting-the-source-code",children:[{value:"Step 1: Fork in the cloud",id:"step-1-fork-in-the-cloud",children:[]},{value:"Step 2: Clone fork to local storage",id:"step-2-clone-fork-to-local-storage",children:[]},{value:"Step 3: Branch",id:"step-3-branch",children:[]},{value:"Step 4: Develop",id:"step-4-develop",children:[]},{value:"Step 5: Keep your branch in sync",id:"step-5-keep-your-branch-in-sync",children:[]},{value:"Step 6: Commit",id:"step-6-commit",children:[]},{value:"Step 7: Push",id:"step-7-push",children:[]},{value:"Step 8: Create a pull request",id:"step-8-create-a-pull-request",children:[]}]},{value:"Build",id:"build",children:[]},{value:"Continuous Integration",id:"continuous-integration",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Apache Submarine")," is an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/blob/master/LICENSE"},"Apache 2.0 License")," Software."),Object(o.b)("p",null,"Contributing to Submarine (Source code, Documents, Image, Website) means you agree to the Apache 2.0 License."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure your issue is not already in the ",Object(o.b)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/SUBMARINE"},"Jira issue tracker")),Object(o.b)("li",{parentName:"ol"},"If not, create a ticket describing the change you're proposing in the ",Object(o.b)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/SUBMARINE"},"Jira issue tracker")),Object(o.b)("li",{parentName:"ol"},"Setup Travis ",Object(o.b)("a",{parentName:"li",href:"#continuous-integration"},"Continuous Integration")),Object(o.b)("li",{parentName:"ol"},"Contribute your patch via Pull Request on our ",Object(o.b)("a",{parentName:"li",href:"https://github.com/apache/submarine"},"Github Mirror"),".")),Object(o.b)("p",null,"Before you start, please read the ",Object(o.b)("a",{parentName:"p",href:"http://www.apache.org/foundation/policies/conduct.html"},"Code of Conduct")," carefully, familiarize yourself with it and refer to it whenever you need it."),Object(o.b)("p",null,"For those of you who are not familiar with the Apache project, understanding ",Object(o.b)("a",{parentName:"p",href:"http://www.apache.org/foundation/how-it-works.html"},"How it works")," would be quite helpful."),Object(o.b)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),Object(o.b)("p",null,"When creating a Pull Request, you will automatically get the template below."),Object(o.b)("p",null,"Filling it thoroughly can improve the speed of the review process."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"### What is this PR for?\nA few sentences describing the overall goals of the pull request's commits.\nFirst time? Check out the contribution guidelines -\nhttps://github.com/apache/submarine/tree/master/docs/community/contributing.md\n\n### What type of PR is it?\n[Bug Fix | Improvement | Feature | Documentation | Hot Fix | Refactoring]\n\n### Todos\n* [ ] - Task\n\n### What is the Jira issue?\n* Open an issue on Jira https://issues.apache.org/jira/browse/SUBMARINE/\n* Put link here, and add [SUBMARINE-${jira_number}] in PR title, e.g. [SUBMARINE-323]\n\n### How should this be tested?\nOutline the steps to test the PR here.\n\n### Screenshots (if appropriate)\n\n### Questions:\n* Do the licenses files require updates?\n* Are there breaking changes for older versions?\n* Does this need documentation?\n")),Object(o.b)("h2",{id:"source-control-workflow"},"Source Control Workflow"),Object(o.b)("p",null,"Submarine follows ",Object(o.b)("a",{parentName:"p",href:"https://github.com/sevntu-checkstyle/sevntu.checkstyle/wiki/Development-workflow-with-Git:-Fork,-Branching,-Commits,-and-Pull-Request"},"Fork & Pull")," model."),Object(o.b)("h2",{id:"the-review-process"},"The Review Process"),Object(o.b)("p",null,"When a Pull Request is submitted, it is being merged or rejected by the following review process."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Anybody can be a reviewer and may comment on the change or suggest modifications."),Object(o.b)("li",{parentName:"ul"},'Reviewer can indicate that a patch looks suitable for merging with a comment such as: "Looks good", "LGTM", "+1".'),Object(o.b)("li",{parentName:"ul"},'At least one indication of suitability (e.g. "LGTM") from a committer is required to be merged.'),Object(o.b)("li",{parentName:"ul"},"Pull request is open for 1 or 2 days for potential additional review unless it's got enough indication of suitability."),Object(o.b)("li",{parentName:"ul"},'A committer can then initiate lazy consensus ("Merge if there is no more discussion") after which the code can be merged after a particular time (usually 24 hours) if there are no more reviews.'),Object(o.b)("li",{parentName:"ul"},"Contributors can ping reviewers (including committers) by commenting 'Ready to review' or suitable indication.")),Object(o.b)("h2",{id:"setting-up"},"Setting up"),Object(o.b)("p",null,"Here are some things you will need to build and test the Submarine."),Object(o.b)("h3",{id:"software-configuration-management-scm"},"Software Configuration Management (SCM)"),Object(o.b)("p",null,"Submarine uses Git for its SCM system. So you'll need a git client installed on your development machine."),Object(o.b)("h3",{id:"integrated-development-environment-ide"},"Integrated Development Environment (IDE)"),Object(o.b)("p",null,"You are free to use whatever IDE you prefer, or your favorite command-line editor."),Object(o.b)("h3",{id:"code-convention"},"Code convention"),Object(o.b)("p",null,"We are following Google Code style:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://google.github.io/styleguide/javaguide.html"},"Java style")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://google.github.io/styleguide/shell.xml"},"Shell style"))),Object(o.b)("p",null,"There are some plugins to format, lint your code in IDE (use ",Object(o.b)("a",{parentName:"p",href:"hhttps://github.com/apache/submarine/blob/master/dev-support/maven-config/checkstyle.xml"},"dev-support/maven-config/checkstyle.xml")," as rules)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/1065"},"Checkstyle plugin for Intellij")," (",Object(o.b)("a",{parentName:"li",href:"http://stackoverflow.com/questions/26955766/intellij-idea-checkstyle"},"Setting Guide"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://eclipse-cs.sourceforge.net/#!/"},"Checkstyle plugin for Eclipse")," (",Object(o.b)("a",{parentName:"li",href:"http://eclipse-cs.sourceforge.net/#!/project-setup"},"Setting Guide"),")")),Object(o.b)("h2",{id:"getting-the-source-code"},"Getting the source code"),Object(o.b)("h3",{id:"step-1-fork-in-the-cloud"},"Step 1: Fork in the cloud"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Visit ",Object(o.b)("a",{parentName:"li",href:"https://github.com/apache/submarine"},"https://github.com/apache/submarine")),Object(o.b)("li",{parentName:"ol"},"On the top right of the page, click the ",Object(o.b)("inlineCode",{parentName:"li"},"Fork")," button (top right) to create a cloud-based fork of the repository.")),Object(o.b)("h3",{id:"step-2-clone-fork-to-local-storage"},"Step 2: Clone fork to local storage"),Object(o.b)("p",null,"Create your clone:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"${user} is your github user name")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"mkdir -p ${working_dir}\ncd ${working_dir}\n\ngit clone https://github.com/${user}/submarine.git\n# or: git clone git@github.com:${user}/submarine.git\n\ncd ${working_dir}/submarine\ngit remote add upstream https://github.com/apache/submarine.git\n# or: git remote add upstream git@github.com:apache/submarine.git\n\n# Never push to the upstream master.\ngit remote set-url --push upstream no_push\n\n# Confirm that your remotes make sense:\n# It should look like:\n# origin    git@github.com:${user}/submarine.git (fetch)\n# origin    git@github.com:${user}/submarine.git (push)\n# upstream  https://github.com/apache/submarine (fetch)\n# upstream  no_push (push)\ngit remote -v\n")),Object(o.b)("h3",{id:"step-3-branch"},"Step 3: Branch"),Object(o.b)("p",null,"Get your local master up to date:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"cd ${working_dir}/submarine\ngit fetch upstream\ngit checkout master\ngit rebase upstream/master\n")),Object(o.b)("p",null,"Branch from master:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git checkout -b SUBMARINE-${jira_number}\n")),Object(o.b)("h3",{id:"step-4-develop"},"Step 4: Develop"),Object(o.b)("h4",{id:"edit-the-code"},"Edit the code"),Object(o.b)("p",null,"You can now edit the code on the ",Object(o.b)("inlineCode",{parentName:"p"},"SUBMARINE-${jira_number}")," branch."),Object(o.b)("h4",{id:"test"},"Test"),Object(o.b)("p",null,"Build and run all tests:"),Object(o.b)("h3",{id:"step-5-keep-your-branch-in-sync"},"Step 5: Keep your branch in sync"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# While on your SUBMARINE-${jira_number} branch.\ngit fetch upstream\ngit rebase upstream/master\n")),Object(o.b)("p",null,"Please don't use ",Object(o.b)("inlineCode",{parentName:"p"},"git pull")," instead of the above ",Object(o.b)("inlineCode",{parentName:"p"},"fetch"),"/",Object(o.b)("inlineCode",{parentName:"p"},"rebase"),". ",Object(o.b)("inlineCode",{parentName:"p"},"git pull")," does a merge, which leaves merge commits. These make the commit history messy and violate the principle that commits ought to be individually understandable and useful (see below). You can also consider changing your ",Object(o.b)("inlineCode",{parentName:"p"},".git/config")," file via ",Object(o.b)("inlineCode",{parentName:"p"},"git config branch.autoSetupRebase")," always to change the behavior of ",Object(o.b)("inlineCode",{parentName:"p"},"git pull"),"."),Object(o.b)("h3",{id:"step-6-commit"},"Step 6: Commit"),Object(o.b)("p",null,"Commit your changes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git commit\n")),Object(o.b)("p",null,"Likely you'll go back and edit/build/test further and then ",Object(o.b)("inlineCode",{parentName:"p"},"commit --amend")," in a few cycles."),Object(o.b)("h3",{id:"step-7-push"},"Step 7: Push"),Object(o.b)("p",null,"When the changes are ready to review (or you just want to create an offsite backup of your work), push your branch to your fork on ",Object(o.b)("inlineCode",{parentName:"p"},"github.com"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git push --set-upstream ${your_remote_name} SUBMARINE-${jira_number}\n")),Object(o.b)("h3",{id:"step-8-create-a-pull-request"},"Step 8: Create a pull request"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Visit your fork at ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/${user}/submarine"),"."),Object(o.b)("li",{parentName:"ol"},"Click the ",Object(o.b)("inlineCode",{parentName:"li"},"Compare & Pull Request")," button next to your ",Object(o.b)("inlineCode",{parentName:"li"},"SUBMARINE-${jira_number}")," branch."),Object(o.b)("li",{parentName:"ol"},"Fill in the required information in the PR template.")),Object(o.b)("h4",{id:"get-a-code-review"},"Get a code review"),Object(o.b)("p",null,"If your pull request (PR) is opened, it will be assigned to one or more reviewers. Those reviewers will do a thorough code review, looking at correctness, bugs, opportunities for improvement, documentation comments, and style."),Object(o.b)("p",null,"To address review comments, you should commit the changes to the same branch of the PR on your fork."),Object(o.b)("h4",{id:"revert-a-commit"},"Revert a commit"),Object(o.b)("p",null,"In case you wish to revert a commit, follow the instructions below:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: If you have upstream write access, please refrain from using the Revert\nbutton in the GitHub UI for creating the PR, because GitHub will create the\nPR branch inside the main repository rather than inside your fork.")),Object(o.b)("p",null,"Create a branch and synchronize it with the upstream:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# create a branch\ngit checkout -b myrevert\n\n# sync the branch with upstream\ngit fetch upstream\ngit rebase upstream/master\n\n# SHA is the hash of the commit you wish to revert\ngit revert SHA\n")),Object(o.b)("p",null,"This creates a new commit reverting the change. Push this new commit to your remote:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git push ${your_remote_name} myrevert\n")),Object(o.b)("p",null,"Create a PR based on this branch."),Object(o.b)("h4",{id:"cherry-pick-a-commit-to-a-release-branch"},"Cherry pick a commit to a release branch"),Object(o.b)("p",null,"In case you wish to cherry pick a commit to a release branch, follow the instructions below:"),Object(o.b)("p",null,"Create a branch and synchronize it with the upstream:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# sync the branch with upstream.\ngit fetch upstream\n\n# checkout the release branch.\n# ${release_branch_name} is the release branch you wish to cherry pick to.\ngit checkout upstream/${release_branch_name}\ngit checkout -b my-cherry-pick\n\n# cherry pick the commit to my-cherry-pick branch.\n# ${SHA} is the hash of the commit you wish to revert.\ngit cherry-pick ${SHA}\n\n# push this branch to your repo, file an PR based on this branch.\ngit push --set-upstream ${your_remote_name} my-cherry-pick\n")),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"../devDocs/BuildFromCode"},"Build From Code")),Object(o.b)("h2",{id:"continuous-integration"},"Continuous Integration"),Object(o.b)("p",null,"Submarine project's CI system will collect information from pull request author's Travis-ci and display status in the pull request."),Object(o.b)("p",null,"Each individual contributor should setup Travis-ci for the fork before making a pull-request. Go to ",Object(o.b)("a",{parentName:"p",href:"https://travis-ci.org/profile"},"https://travis-ci.org/profile")," and switch on 'submarine' repository."))}s.isMDXComponent=!0}}]);