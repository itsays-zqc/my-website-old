"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=l.createContext({}),s=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return a?l.createElement(k,i(i({ref:t},p),{},{components:a})):l.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18821:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=a(87462),n=(a(67294),a(3905));const r={},i="maxoptics_sdk.core.material.interface module",o={unversionedId:"howdoi/MaterialInterface",id:"howdoi/MaterialInterface",title:"maxoptics_sdk.core.material.interface module",description:"- Bases: Protocol",source:"@site/docs/howdoi/MaterialInterface.md",sourceDirName:"howdoi",slug:"/howdoi/MaterialInterface",permalink:"/my-website/docs/howdoi/MaterialInterface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/howdoi/MaterialInterface.md",tags:[],version:"current",frontMatter:{},sidebar:"howdoiSidebar",next:{title:"MonitorInterface",permalink:"/my-website/docs/howdoi/MonitorInterface"}},d={},s=[{value:"1. add_anisotropy",id:"1-add_anisotropy",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Usage",id:"usage",level:3},{value:"Parameters and Returns",id:"parameters-and-returns",level:3},{value:"Example",id:"example",level:3},{value:"2. add_dispersion",id:"2-add_dispersion",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Parameters and Returns",id:"parameters-and-returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"3. add_lib",id:"3-add_lib",level:2},{value:"Syntax",id:"syntax-2",level:3},{value:"Usage",id:"usage-2",level:3},{value:"Parameters and Returns",id:"parameters-and-returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"4. add_nondispersion",id:"4-add_nondispersion",level:2},{value:"Syntax",id:"syntax-3",level:3},{value:"Usage",id:"usage-3",level:3},{value:"Parameters and Returns",id:"parameters-and-returns-3",level:3},{value:"Example",id:"example-3",level:3}],p={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"maxoptics_sdkcorematerialinterface-module"},"maxoptics_sdk.core.material.interface module"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.material.interface.MaterialInterface(*args, **kwargs)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bases: ",(0,n.kt)("strong",{parentName:"li"},"Protocol"))),(0,n.kt)("h2",{id:"1-add_anisotropy"},"1. add_anisotropy"),(0,n.kt)("h3",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"abstract add_anisotropy(*, ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),": List[Tuple","[float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float]","], ",(0,n.kt)("inlineCode",{parentName:"p"},"color"),": str | None = None, alpha: float | None = None, ",(0,n.kt)("inlineCode",{parentName:"p"},"fitting"),": Literal","[None, 'linear']",", ",(0,n.kt)("inlineCode",{parentName:"p"},"order"),": int = 2)"),(0,n.kt)("p",null,"abstract add_anisotropy(*, ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),": List[Tuple","[float, float, float, float, float, float, float]","], ",(0,n.kt)("inlineCode",{parentName:"p"},"color"),": str | None = None, alpha: float | None = None, ",(0,n.kt)("inlineCode",{parentName:"p"},"fitting"),": Literal","[None, 'linear']",", ",(0,n.kt)("inlineCode",{parentName:"p"},"order"),": int = 2)"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Add a project anisotropy material.")),(0,n.kt)("h3",{id:"parameters-and-returns"},"Parameters and Returns"),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Parameters"),(0,n.kt)("td",{class:"typeface"},"Explanation")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"name"),(0,n.kt)("td",null,"material name")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",null,"Material data. Format is [(wavelength, xx index real, xx index imag, yy index real, yy index imag, zz index real, zz index imag), \u2026] or [(wavelength, xx index real, xx index imag, xy index real, xy index imag, \u2026), \u2026].")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"color"),(0,n.kt)("td",null,"Material color. If not filled, color will be calculated from index parameters.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fitting"),(0,n.kt)("td",null,"Material fitting mode.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"order"),(0,n.kt)("td",null,"Material mesh order.")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Returns: \xa0\xa0\xa0\xa0"),(0,n.kt)("td",{class:"typeface"},"No return."))),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Returns:"),(0,n.kt)("td",{class:"typeface"},"No return."))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'mt = pj.Material()\nmt.add_anisotropy(name="LN", fitting=None,\n      data=[(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)], order=2\n      )\n')),(0,n.kt)("h2",{id:"2-add_dispersion"},"2. add_dispersion"),(0,n.kt)("h3",{id:"syntax-1"},"Syntax"),(0,n.kt)("p",null,"abstract add_dispersion(*, ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),": List[Tuple","[float, float, float]","], ",(0,n.kt)("inlineCode",{parentName:"p"},"color"),": str | None = None, alpha: float | None = None, ",(0,n.kt)("inlineCode",{parentName:"p"},"fitting"),": Literal","[None, 'linear']",", ",(0,n.kt)("inlineCode",{parentName:"p"},"order"),": int = 2)"),(0,n.kt)("h3",{id:"usage-1"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Add a project dispersion material.")),(0,n.kt)("h3",{id:"parameters-and-returns-1"},"Parameters and Returns"),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Parameters"),(0,n.kt)("td",{class:"typeface"},"Explanation")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"name"),(0,n.kt)("td",null,"material name")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",{style:{width:"50rem"}},"Material data. Format is [(wavelength, index real, index imag), \u2026].")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"color"),(0,n.kt)("td",null,"Material color. If not filled, color will be calculated from index parameters.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fitting"),(0,n.kt)("td",null,"Material fitting mode.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"order"),(0,n.kt)("td",null,"Material mesh order."))),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Returns:&nbsp \xa0\xa0\xa0"),(0,n.kt)("td",{class:"typeface"},"No return."))),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'mt = pj.Material()\nmt.add_nondispersion(name="SiO2",\n    data=[(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)], order=1\n    )\n')),(0,n.kt)("h2",{id:"3-add_lib"},"3. add_lib"),(0,n.kt)("h3",{id:"syntax-2"},"Syntax"),(0,n.kt)("p",null,"abstract add_lib(*, ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),": Any, ",(0,n.kt)("inlineCode",{parentName:"p"},"override"),": dict | None = None, ",(0,n.kt)("inlineCode",{parentName:"p"},"color"),": str | None = None, alpha: float | None = None, ",(0,n.kt)("inlineCode",{parentName:"p"},"order"),": int = 2)"),(0,n.kt)("h3",{id:"usage-2"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Add a project material with existing material in library.")),(0,n.kt)("h3",{id:"parameters-and-returns-2"},"Parameters and Returns"),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Parameters"),(0,n.kt)("td",{class:"typeface"},"Explanation")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"name"),(0,n.kt)("td",null,"material name")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",{style:{width:"50rem"}},"A existing material in library.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"override"),(0,n.kt)("td",{style:{width:"50rem"}},"override.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"color"),(0,n.kt)("td",null,"Material color. If not filled, color will be calculated from index parameters.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"order"),(0,n.kt)("td",null,"Material mesh order."))),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Returns:&nbsp \xa0\xa0\xa0"),(0,n.kt)("td",{class:"typeface"},"No return."))),(0,n.kt)("h3",{id:"example-2"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'mt = pj.Material()\nmt.add_lib(name="Air", data=mo.Material.Air, order=2)\n')),(0,n.kt)("h2",{id:"4-add_nondispersion"},"4. add_nondispersion"),(0,n.kt)("h3",{id:"syntax-3"},"Syntax"),(0,n.kt)("p",null,"abstract add_nondispersion(*, ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),": List[Tuple","[float, float]","], ",(0,n.kt)("inlineCode",{parentName:"p"},"color"),": str | None = None, alpha: float | None = None, ",(0,n.kt)("inlineCode",{parentName:"p"},"order"),": int = 2)"),(0,n.kt)("h3",{id:"usage-3"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Add a project non-dispersion material.")),(0,n.kt)("h3",{id:"parameters-and-returns-3"},"Parameters and Returns"),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Parameters"),(0,n.kt)("td",{class:"typeface"},"Explanation")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"name"),(0,n.kt)("td",null,"material name")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",{style:{width:"50rem"}},"Material data. Format is [(index real, index imag)].")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"color"),(0,n.kt)("td",null,"Material color. If not filled, color will be calculated from index parameters.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"order"),(0,n.kt)("td",null,"Material mesh order."))),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Returns:&nbsp \xa0\xa0\xa0"),(0,n.kt)("td",{class:"typeface"},"No return."))),(0,n.kt)("h3",{id:"example-3"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'mt = pj.Material()\n    mt.add_nondispersion(name="SiO2", data=[(1.444, 0)], order=1)\n')))}c.isMDXComponent=!0}}]);