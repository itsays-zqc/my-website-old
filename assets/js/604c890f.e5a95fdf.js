"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s="PortInterface",l={unversionedId:"test/core/ports/interface",id:"test/core/ports/interface",title:"PortInterface",description:"- Bases: Protocol",source:"@site/docs/test/core/ports/interface.md",sourceDirName:"test/core/ports",slug:"/test/core/ports/interface",permalink:"/my-website/docs/test/core/ports/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/core/ports/interface.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"maxoptics_sdk.core.monitors.post_process_time_monitor_typing module",permalink:"/my-website/docs/test/core/monitors/post_process_time_monitor_typing"},next:{title:"maxoptics_sdk.core.ports.post_process_eme_port_typing module",permalink:"/my-website/docs/test/core/ports/post_process_eme_port_typing"}},p={},c=[{value:"add a port",id:"add-a-port",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Usage",id:"usage",level:3},{value:"Parameters and Returns",id:"parameters-and-returns",level:3}],i={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"portinterface"},"PortInterface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.ports.interface.PortInterface(*args, **kwargs)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bases: ",(0,o.kt)("strong",{parentName:"li"},"Protocol"))),(0,o.kt)("h2",{id:"add-a-port"},"add a port"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['eme_port']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessEmePort)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['fdtd_port']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessFdtdPort)"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Add a port to current project.")),(0,o.kt)("h3",{id:"parameters-and-returns"},"Parameters and Returns"),(0,o.kt)("table",{class:"custom-table"},(0,o.kt)("tr",null,(0,o.kt)("td",{class:"typeface"},"Parameters"),(0,o.kt)("td",{class:"typeface"},"Explanation")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"name"),(0,o.kt)("td",null," Port name")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"type"),(0,o.kt)("td",{style:{width:"50rem"}},"Port type.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"property"),(0,o.kt)("td",null," Port property"))),(0,o.kt)("br",null),(0,o.kt)("table",{class:"custom-table"},(0,o.kt)("tr",null,(0,o.kt)("td",{class:"third-column"},"Returns:"),(0,o.kt)("td",{class:"fourth-column"},"No return."))))}d.isMDXComponent=!0}}]);