"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4624],{3905:(t,l,n)=>{n.d(l,{Zo:()=>i,kt:()=>f});var e=n(67294);function u(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function r(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){u(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function k(t,l){if(null==t)return{};var n,e,u=function(t,l){if(null==t)return{};var n,e,u={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||(u[n]=t[n]);return u}(t,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}var a=e.createContext({}),o=function(t){var l=e.useContext(a),n=l;return t&&(n="function"==typeof t?t(l):d(d({},l),t)),n},i=function(t){var l=o(t.components);return e.createElement(a.Provider,{value:l},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},m=e.forwardRef((function(t,l){var n=t.components,u=t.mdxType,r=t.originalType,a=t.parentName,i=k(t,["components","mdxType","originalType","parentName"]),s=o(n),m=u,f=s["".concat(a,".").concat(m)]||s[m]||c[m]||r;return n?e.createElement(f,d(d({ref:l},i),{},{components:n})):e.createElement(f,d({ref:l},i))}));function f(t,l){var n=arguments,u=l&&l.mdxType;if("string"==typeof t||u){var r=n.length,d=new Array(r);d[0]=m;var k={};for(var a in l)hasOwnProperty.call(l,a)&&(k[a]=l[a]);k.originalType=t,k[s]="string"==typeof t?t:u,d[1]=k;for(var o=2;o<r;o++)d[o]=n[o];return e.createElement.apply(null,d)}return e.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89096:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>k,toc:()=>o});var e=n(87462),u=(n(67294),n(3905));const r={},d=void 0,k={unversionedId:"test/core/source/source",id:"test/core/source/source",title:"source",description:"MODE_SOURCE",source:"@site/docs/test/core/source/source.md",sourceDirName:"test/core/source",slug:"/test/core/source/",permalink:"/my-website/docs/test/core/source/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/core/source/source.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"maxoptics_sdk.core.simulation.simu_task.interface module",permalink:"/my-website/docs/test/core/simulation/simu_task"},next:{title:"interface",permalink:"/my-website/docs/test/core/source/interface"}},a={},o=[{value:"MODE_SOURCE",id:"mode_source",level:2},{value:"GAUSSIAN_SOURCE",id:"gaussian_source",level:2}],i={toc:o},s="wrapper";function c(t){let{components:l,...n}=t;return(0,u.kt)(s,(0,e.Z)({},i,n,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"mode_source"},"MODE_SOURCE"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Parameter"),(0,u.kt)("th",null,"Default"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Notes")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.inject_axis"),(0,u.kt)("td",null,"x_axis"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'].")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.direction"),(0,u.kt)("td",null,"forward"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"Selections are ['forward', 'backward'].")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.amplitude"),(0,u.kt)("td",null,"1.0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.phase"),(0,u.kt)("td",null,"0.0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.mode_selection"),(0,u.kt)("td",null),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import'].")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.mode_removal.threshold"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.mode_index"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null,"integer"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.search"),(0,u.kt)("td",null,"max_index"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"Selections are ['near_n', 'max_index'].")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.n"),(0,u.kt)("td",null,"1.0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.number_of_trial_modes"),(0,u.kt)("td",null,"20"),(0,u.kt)("td",null,"integer"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.waveform.waveform_id_select"),(0,u.kt)("td",null),(0,u.kt)("td",null,"any"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.rotations.theta"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.rotations.phi"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.rotations.rotation_offset"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.x"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.x_span"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null,"Restrained by condition: >=0.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.x_min"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.x_max"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.y"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.y_span"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null,"Restrained by condition: >=0.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.y_min"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.y_max"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.z"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.z_span"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null,"Restrained by condition: >=0.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.z_min"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.z_max"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null))),(0,u.kt)("h2",{id:"gaussian_source"},"GAUSSIAN_SOURCE"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Parameter"),(0,u.kt)("th",null,"Default"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Notes")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.inject_axis"),(0,u.kt)("td",null,"x_axis"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'].")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.direction"),(0,u.kt)("td",null,"forward"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"Selections are ['forward', 'backward'].")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.amplitude"),(0,u.kt)("td",null,"1.0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.phase"),(0,u.kt)("td",null,"0.0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.waveform.waveform_id_select"),(0,u.kt)("td",null),(0,u.kt)("td",null,"waveform"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.angle_theta"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.angle_phi"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.rotation_offset"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.polarization_angle"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.beam_settings.calculation_method"),(0,u.kt)("td",null,"use_scalar_approximation"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"Selections are ['use_scalar_approximation', 'use_vector_approximation'].")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.beam_settings.beam_parameters"),(0,u.kt)("td",null,"waist_size_and_position"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"Selections are ['waist_size_and_position', 'beam_size_and_divergence'].")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.beam_settings.waist_radius"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.beam_settings.distance_from_waist"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.beam_settings.beam_radius"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"general.beam_settings.divergence_angle"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.x"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.x_span"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null,"Restrained by condition: >=0.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.x_min"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.x_max"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.y"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.y_span"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null,"Restrained by condition: >=0.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.y_min"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.y_max"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.z"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.z_span"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null,"Restrained by condition: >=0.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.z_min"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"geometry.z_max"),(0,u.kt)("td",null),(0,u.kt)("td",null,"float"),(0,u.kt)("td",null))))}c.isMDXComponent=!0}}]);