"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l="maxoptics_sdk.core.material.interface module",i={unversionedId:"howdoi/template",id:"howdoi/template",title:"maxoptics_sdk.core.material.interface module",description:"- Bases: Protocol",source:"@site/docs/howdoi/template.md",sourceDirName:"howdoi",slug:"/howdoi/template",permalink:"/my-website/docs/howdoi/template",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/howdoi/template.md",tags:[],version:"current",frontMatter:{},sidebar:"howdoiSidebar",previous:{title:"this is How do I",permalink:"/my-website/docs/howdoi/howdoiintro"}},d={},s=[{value:"1. add_anisotropy",id:"1-add_anisotropy",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Usage",id:"usage",level:3},{value:"Parameters and Returns",id:"parameters-and-returns",level:3},{value:"Example",id:"example",level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"maxoptics_sdkcorematerialinterface-module"},"maxoptics_sdk.core.material.interface module"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"class maxoptics_sdk.core.material.interface.MaterialInterface(*args, **kwargs)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bases: ",(0,n.kt)("strong",{parentName:"li"},"Protocol"))),(0,n.kt)("h2",{id:"1-add_anisotropy"},"1. add_anisotropy"),(0,n.kt)("h3",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"abstract add_anisotropy(*, ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),": List[Tuple","[float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float]","], ",(0,n.kt)("inlineCode",{parentName:"p"},"color"),": str | None = None, alpha: float | None = None, ",(0,n.kt)("inlineCode",{parentName:"p"},"fitting"),": Literal","[None, 'linear']",", ",(0,n.kt)("inlineCode",{parentName:"p"},"order"),": int = 2)"),(0,n.kt)("p",null,"abstract add_anisotropy(*, ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),": List[Tuple","[float, float, float, float, float, float, float]","], ",(0,n.kt)("inlineCode",{parentName:"p"},"color"),": str | None = None, alpha: float | None = None, ",(0,n.kt)("inlineCode",{parentName:"p"},"fitting"),": Literal","[None, 'linear']",", ",(0,n.kt)("inlineCode",{parentName:"p"},"order"),": int = 2)"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Add a project anisotropy material.")),(0,n.kt)("h3",{id:"parameters-and-returns"},"Parameters and Returns"),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Parameters"),(0,n.kt)("td",{class:"typeface"},"Explanation")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"name"),(0,n.kt)("td",null,"material name")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"first-coluumn"},"data"),(0,n.kt)("td",{class:"second-column"},"Material data. Format is [(wavelength, xx index real, xx index imag, yy index real, yy index imag, zz index real, zz index imag), \u2026] or [(wavelength, xx index real, xx index imag, xy index real, xy index imag, \u2026), \u2026].")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"color"),(0,n.kt)("td",null,"Material color. If not filled, color will be calculated from index parameters.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fitting"),(0,n.kt)("td",null,"Material fitting mode.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"order"),(0,n.kt)("td",null,"Material mesh order."))),(0,n.kt)("br",null),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"third-column"},"Returns:"),(0,n.kt)("td",{class:"fourth-column"},"No return."))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'mt = pj.Material()\nmt.add_anisotropy(name="LN", fitting=None,\n      data=[(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)], order=2\n      )\n')))}u.isMDXComponent=!0}}]);