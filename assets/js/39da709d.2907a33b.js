"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,d=p["".concat(i,".").concat(u)]||p[u]||f[u]||o;return r?n.createElement(d,c(c({ref:t},m),{},{components:r})):n.createElement(d,c({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},c="interface",l={unversionedId:"test/core/waveform/interface",id:"test/core/waveform/interface",title:"interface",description:"WaveformInterface",source:"@site/docs/test/core/waveform/interface.md",sourceDirName:"test/core/waveform",slug:"/test/core/waveform/interface",permalink:"/my-website/docs/test/core/waveform/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/core/waveform/interface.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"typed_dicts",permalink:"/my-website/docs/test/core/typed_dicts"},next:{title:"maxoptics_sdk.helper",permalink:"/my-website/docs/test/helper/"}},i={},s=[{value:"WaveformInterface",id:"waveforminterface",level:2}],m={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface"},"interface"),(0,a.kt)("h2",{id:"waveforminterface"},"WaveformInterface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class maxoptics_sdk.core.waveform.interface.WaveformInterface(*args, **kwargs)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bases"),": Protocol"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"add"),"(",(0,a.kt)("em",{parentName:"p"},", name: str, wavelength_center: float, wavelength_span: float, unit: Literal","['um', 'nm']"," = 'um')\n",(0,a.kt)("strong",{parentName:"em"},"add"),"("),", name: str, wavelength_min: float, wavelength_max: float, unit: Literal","['um', 'nm']"," = 'um')\n",(0,a.kt)("strong",{parentName:"p"},"add"),"(",(0,a.kt)("em",{parentName:"p"},", name: str, frequency_center: float, frequency_span: float)\n",(0,a.kt)("strong",{parentName:"em"},"add"),"("),", name: str, frequency_min: float, frequency_max: float)"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Add a project waveform."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"name"),(0,a.kt)("td",null,"Waveform name")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"kwargs"),(0,a.kt)("td",null,"Waveform data"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wv = pj.Waveform()\nwv.add(name=waveform_name, wavelength_center=wavelength, wavelength_span=0.1)\n")))}f.isMDXComponent=!0}}]);