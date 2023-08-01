"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6626],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var l=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,l,n=function(t,e){if(null==t)return{};var r,l,n={},a=Object.keys(t);for(l=0;l<a.length;l++)r=a[l],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)r=a[l],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=l.createContext({}),s=function(t){var e=l.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return l.createElement(c.Provider,{value:e},t.children)},i="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),i=s(r),k=n,m=i["".concat(c,".").concat(k)]||i[k]||d[k]||a;return r?l.createElement(m,o(o({ref:e},p),{},{components:r})):l.createElement(m,o({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,o=new Array(a);o[0]=k;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u[i]="string"==typeof t?t:n,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6649:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var l=r(7462),n=(r(7294),r(3905));const a={},o=void 0,u={unversionedId:"test/core/project/interface",id:"test/core/project/interface",title:"interface",description:"StructureProperty",source:"@site/docs/test/core/project/interface.md",sourceDirName:"test/core/project",slug:"/test/core/project/interface",permalink:"/my-website/docs/test/core/project/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/core/project/interface.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"PostProcessPortGroupProperty",permalink:"/my-website/docs/test/core/ports/post_process_port_group_property_typing"},next:{title:"maxoptics_sdk.core.simulation.simu_res.interface module",permalink:"/my-website/docs/test/core/simulation/interface"}},c={},s=[{value:"StructureProperty",id:"structureproperty",level:2},{value:"ProjectInterface",id:"projectinterface",level:2},{value:"Common Use",id:"common-use",level:2},{value:"Structure",id:"structure",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Usage",id:"usage",level:3},{value:"Parameters and Returns",id:"parameters-and-returns",level:3},{value:"PortGroupProperty",id:"portgroupproperty",level:2},{value:"StructureProperty",id:"structureproperty-1",level:2}],p={toc:s},i="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(i,(0,l.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"structureproperty"},"StructureProperty"),(0,n.kt)("h1",{id:"maxoptics_sdkcoreprojectinterface-module"},"maxoptics_sdk.core.project.interface module"),(0,n.kt)("h2",{id:"projectinterface"},"ProjectInterface"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"class maxoptics_sdk.core.project.interface.ProjectInterface(*args, **kwargs)\n")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("strong",{parentName:"p"},"Protocol")),(0,n.kt)("h2",{id:"common-use"},"Common Use"),(0,n.kt)("br",null),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Method"),(0,n.kt)("td",{class:"typeface"},"Explanation"),(0,n.kt)("td",{class:"typeface"},"Returns")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Material() \u2192 MaterialInterface"),(0,n.kt)("td",null,"Get material manager for current project"),(0,n.kt)("td",null,"Material manager")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Monitor() \u2192 MonitorInterface"),(0,n.kt)("td",null,"Get monitor manager for current project."),(0,n.kt)("td",null,"Monitor manager")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Port(*, property: PostProcessPortGroupProperty | None = None) \u2192 PortInterface"),(0,n.kt)("td",null,"Get port manager for current project."),(0,n.kt)("td",null,"Port manager.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Simulation() \u2192 SimulationInterface"),(0,n.kt)("td",null,"Get simulation manager for current project."),(0,n.kt)("td",null,"Simulation manager.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Source() \u2192 SourceInterface"),(0,n.kt)("td",null,"Get source manager for current project."),(0,n.kt)("td",null,"Source manager")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Waveform() \u2192 WaveformInterface"),(0,n.kt)("td",null,"Get waveform manager for current project."),(0,n.kt)("td",null,"Waveform manager"))),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"structure"},"Structure"),(0,n.kt)("h3",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Structure"),"(*, ",(0,n.kt)("inlineCode",{parentName:"p"},"mesh_type:")," Literal","['curve_mesh', 'staircase']"," = 'curve_mesh', ",(0,n.kt)("inlineCode",{parentName:"p"},"mesh_factor:")," float = 1.2, ",(0,n.kt)("inlineCode",{parentName:"p"},"background_material:")," MaterialType | None = None) \u2192 StructureInterface"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Get structure manager for current project."),(0,n.kt)("h3",{id:"parameters-and-returns"},"Parameters and Returns"),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"},"Parameters"),(0,n.kt)("td",{class:"typeface"},"Explanation")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"mesh_type"),(0,n.kt)("td",null," Mesh type of structures. Default as curve_mesh.")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"first-column"},"mesh_factor"),(0,n.kt)("td",{class:"second-column"},"Mesh factor. Default as 1.2.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"background_material"),(0,n.kt)("td",null," Background material. If not filled, program will create a material with Air in lib."))),(0,n.kt)("br",null),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"third-column"},"Returns:"),(0,n.kt)("td",{class:"fourth-column"},"Structure manager"))),(0,n.kt)("h2",{id:"portgroupproperty"},"PortGroupProperty"),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"}),(0,n.kt)("td",{class:"typeface"},"default"),(0,n.kt)("td",{class:"typeface"},"type"),(0,n.kt)("td",{class:"typeface"},"notes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"source_port"),(0,n.kt)("td",null),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"waveform_id"),(0,n.kt)("td",null),(0,n.kt)("td",null,"waveform"),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,"calculate_group_delay"),(0,n.kt)("td",null,"false"),(0,n.kt)("td",null,"bool"),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fractional_offset_for_group_delay"),(0,n.kt)("td",null,"0.0001"),(0,n.kt)("td",null,"float"),(0,n.kt)("td",null))),(0,n.kt)("h2",{id:"structureproperty-1"},"StructureProperty"),(0,n.kt)("table",{class:"custom-table"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"typeface"}),(0,n.kt)("td",{class:"typeface"},"default"),(0,n.kt)("td",{class:"typeface"},"type"),(0,n.kt)("td",{class:"typeface"},"notes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"mesh_type"),(0,n.kt)("td",null,"curve_mesh"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Selections are ['curve_mesh', 'staircase'].\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"mesh_factor"),(0,n.kt)("td",null,"1.2"),(0,n.kt)("td",null,"float"),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,"background_material"),(0,n.kt)("td",null,"mt['Air']"),(0,n.kt)("td",null,"material"),(0,n.kt)("td",null))))}d.isMDXComponent=!0}}]);