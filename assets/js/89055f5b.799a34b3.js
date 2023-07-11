"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[138],{3905:(t,e,r)=>{r.d(e,{Zo:()=>i,kt:()=>k});var o=r(67294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e){if(null==t)return{};var r,o,s=function(t,e){if(null==t)return{};var r,o,s={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var p=o.createContext({}),d=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},i=function(t){var e=d(t.components);return o.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,s=t.mdxType,a=t.originalType,p=t.parentName,i=n(t,["components","mdxType","originalType","parentName"]),c=d(r),m=s,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return r?o.createElement(k,l(l({ref:e},i),{},{components:r})):o.createElement(k,l({ref:e},i))}));function k(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=r.length,l=new Array(a);l[0]=m;var n={};for(var p in e)hasOwnProperty.call(e,p)&&(n[p]=e[p]);n.originalType=t,n[c]="string"==typeof t?t:s,l[1]=n;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33229:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>d});var o=r(87462),s=(r(67294),r(3905));const a={},l=void 0,n={unversionedId:"maxoptics_sdk/core/ports/post_process_fdtd_port_typing/PostProcessFdtdPortGeometry",id:"maxoptics_sdk/core/ports/post_process_fdtd_port_typing/PostProcessFdtdPortGeometry",title:"PostProcessFdtdPortGeometry",description:"PostProcessFdtdPort",source:"@site/docs/maxoptics_sdk/core/ports/post_process_fdtd_port_typing/PostProcessFdtdPortGeometry.md",sourceDirName:"maxoptics_sdk/core/ports/post_process_fdtd_port_typing",slug:"/maxoptics_sdk/core/ports/post_process_fdtd_port_typing/PostProcessFdtdPortGeometry",permalink:"/my-website/docs/maxoptics_sdk/core/ports/post_process_fdtd_port_typing/PostProcessFdtdPortGeometry",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/maxoptics_sdk/core/ports/post_process_fdtd_port_typing/PostProcessFdtdPortGeometry.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"maxoptics_sdk.core.ports.post_process_fdtd_port_typing module",permalink:"/my-website/docs/maxoptics_sdk/core/ports/post_process_fdtd_port_typing/PostProcessFdtdPort"},next:{title:"PostProcessFdtdPortModalProperties",permalink:"/my-website/docs/maxoptics_sdk/core/ports/post_process_fdtd_port_typing/PostProcessFdtdPortModalProperties"}},p={},d=[{value:"PostProcessFdtdPort",id:"postprocessfdtdport",level:2},{value:"PostProcessFdtdPortGeometry",id:"postprocessfdtdportgeometry",level:2},{value:"PostProcessFdtdPortModalProperties",id:"postprocessfdtdportmodalproperties",level:2},{value:"PostProcessFdtdPortModalPropertiesBentWaveguide",id:"postprocessfdtdportmodalpropertiesbentwaveguide",level:2},{value:"PostProcessFdtdPortModalPropertiesGeneral",id:"postprocessfdtdportmodalpropertiesgeneral",level:2},{value:"PostProcessFdtdPortModalPropertiesGeneralModeRemoval",id:"postprocessfdtdportmodalpropertiesgeneralmoderemoval",level:2}],i={toc:d},c="wrapper";function u(t){let{components:e,...r}=t;return(0,s.kt)(c,(0,o.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"postprocessfdtdport"},"PostProcessFdtdPort"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPort(*args, **kwargs)\n")),(0,s.kt)("p",null,"Bases: ",(0,s.kt)("strong",{parentName:"p"},"dict")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"geometry:")," ",(0,s.kt)("em",{parentName:"p"},"PostProcessFdtdPortGeometry")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"modal_properties:")," ",(0,s.kt)("em",{parentName:"p"},"PostProcessFdtdPortModalProperties")),(0,s.kt)("h2",{id:"postprocessfdtdportgeometry"},"PostProcessFdtdPortGeometry"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortGeometry(*args, **kwargs)\n")),(0,s.kt)("p",null,"Bases: ",(0,s.kt)("strong",{parentName:"p"},"dict")),(0,s.kt)("table",{class:"custom-table"},(0,s.kt)("tr",null,(0,s.kt)("td",{class:"typeface"},"Parameters"),(0,s.kt)("td",{class:"typeface"},"Explanation")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"x"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"x_max"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"x_min"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"x_span"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"y"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"y_max"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"y_min"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"y_span"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"z"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"z_max"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"z_min"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"z_span"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"postprocessfdtdportmodalproperties"},"PostProcessFdtdPortModalProperties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalProperties(*args, **kwargs)\n")),(0,s.kt)("p",null,"Bases: ",(0,s.kt)("strong",{parentName:"p"},"dict")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"bent_waveguide:")," ",(0,s.kt)("em",{parentName:"p"},"PostProcessFdtdPortModalPropertiesBentWaveguide")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"general:")," ",(0,s.kt)("em",{parentName:"p"},"PostProcessFdtdPortModalPropertiesGeneral")),(0,s.kt)("h2",{id:"postprocessfdtdportmodalpropertiesbentwaveguide"},"PostProcessFdtdPortModalPropertiesBentWaveguide"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesBentWaveguide(*args, **kwargs)\n")),(0,s.kt)("p",null,"Bases: ",(0,s.kt)("strong",{parentName:"p"},"dict")),(0,s.kt)("table",{class:"custom-table"},(0,s.kt)("tr",null,(0,s.kt)("td",{class:"typeface"},"Parameters"),(0,s.kt)("td",{class:"typeface"},"Explanation")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"bent_waveguide"),(0,s.kt)("td",null,"bool")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"location"),(0,s.kt)("td",null,"Literal['simulation_center']")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"orientation"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"radius"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"postprocessfdtdportmodalpropertiesgeneral"},"PostProcessFdtdPortModalPropertiesGeneral"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesGeneral(*args, **kwargs)\n")),(0,s.kt)("p",null,"Bases: ",(0,s.kt)("strong",{parentName:"p"},"dict")),(0,s.kt)("table",{class:"custom-table"},(0,s.kt)("tr",null,(0,s.kt)("td",{class:"typeface"},"Parameters"),(0,s.kt)("td",{class:"typeface"},"Explanation")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"amplitude"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"direction"),(0,s.kt)("td",null,"Literal['forward', 'backward']")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"inject_axis"),(0,s.kt)("td",null,"Literal['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"mode_index"),(0,s.kt)("td",null,"int")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"mode_removal"),(0,s.kt)("td",null,"PostProcessFdtdPortModalPropertiesGeneralModeRemoval")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"mode_selection"),(0,s.kt)("td",null,"Literal['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"n"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"number_of_trial_modes"),(0,s.kt)("td",null,"int")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"phase"),(0,s.kt)("td",null,"float | int | FloatParameter | FloatParameterExpression")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"search"),(0,s.kt)("td",null,"Literal['near_n', 'max_index']"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"postprocessfdtdportmodalpropertiesgeneralmoderemoval"},"PostProcessFdtdPortModalPropertiesGeneralModeRemoval"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class \nmaxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesGeneralModeRemoval(*args, **kwargs)\n")),(0,s.kt)("p",null,"Bases: ",(0,s.kt)("strong",{parentName:"p"},"dict")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"threshold:")," ",(0,s.kt)("em",{parentName:"p"},"float | int | FloatParameter | FloatParameterExpression")))}u.isMDXComponent=!0}}]);