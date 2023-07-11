"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2608],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},20726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},i="interface",s={unversionedId:"test/core/monitors/interface",id:"test/core/monitors/interface",title:"interface",description:"- Bases: Protocol",source:"@site/docs/test/core/monitors/interface.md",sourceDirName:"test/core/monitors",slug:"/test/core/monitors/interface",permalink:"/my-website/docs/test/core/monitors/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/core/monitors/interface.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"testSidebar",previous:{title:"interface",permalink:"/my-website/docs/test/core/material/interface"},next:{title:"post_process_mode_expansion_typing",permalink:"/my-website/docs/test/core/monitors/post_process_mode_expansion_typing"}},l={},p=[{value:"1. add a monitor",id:"1-add-a-monitor",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Usage",id:"usage",level:3},{value:"Parameters and Returns",id:"parameters-and-returns",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface"},"interface"),(0,o.kt)("h1",{id:"maxoptics_sdkcoremonitorsinterface-module"},"maxoptics_sdk.core.monitors.interface module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.monitors.interface.MonitorInterface(*args, **kwargs)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bases: ",(0,o.kt)("strong",{parentName:"li"},"Protocol"))),(0,o.kt)("h2",{id:"1-add-a-monitor"},"1. add a monitor"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['electric_monitor']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessElectricMonitor)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['current_monitor']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessCurrentMonitor)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['charge_monitor']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessChargeMonitor)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['band_monitor']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessBandMonitor)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['profile_monitor']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessProfileMonitor)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['global_monitor', 'global_option']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessGlobalMonitor)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['time_monitor']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessTimeMonitor)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['power_monitor']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessPowerMonitor)"),(0,o.kt)("p",null,"abstract add(*, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['mode_expansion']",", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessModeExpansion)"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Add a monitor to current project.")),(0,o.kt)("h3",{id:"parameters-and-returns"},"Parameters and Returns"),(0,o.kt)("table",{class:"custom-table"},(0,o.kt)("tr",null,(0,o.kt)("td",{class:"typeface"},"Parameters"),(0,o.kt)("td",{class:"typeface"},"Explanation")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"name"),(0,o.kt)("td",null,"Monitor name")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"type"),(0,o.kt)("td",{style:{width:"50rem"}},"Monitor type.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"property"),(0,o.kt)("td",null,"Monitor property"))),(0,o.kt)("br",null),(0,o.kt)("table",{class:"custom-table"},(0,o.kt)("tr",null,(0,o.kt)("td",{class:"third-column"},"Returns:"),(0,o.kt)("td",{class:"fourth-column"},"No return."))))}m.isMDXComponent=!0}}]);