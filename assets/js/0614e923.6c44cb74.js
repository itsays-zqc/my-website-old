"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,p=d["".concat(l,".").concat(u)]||d[u]||f[u]||n;return r?a.createElement(p,i(i({ref:t},c),{},{components:r})):a.createElement(p,i({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<n;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2},i="Waveform",s={unversionedId:"tutorial/waveform",id:"tutorial/waveform",title:"Waveform",description:"Features Description: Global waveforms settings include two parts, one is standard waveform list, and another is project waveform list. There are three default materials in the standard waveform list, includes Waveform1550, Waveform1310 and Visible_Light. The default waveforms in the standard waveform list cannot be edited directly, user can add, or copy one of waveforms from the standard waveform list. User only can delete newly added or copied waveforms in the standard waveform list. The waveforms in the project waveform list inherit form projects built by user, user can add new waveform or delete selected waveforms in the project waveform list.",source:"@site/docs/tutorial/waveform.md",sourceDirName:"tutorial",slug:"/tutorial/waveform",permalink:"/my-website/docs/tutorial/waveform",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/waveform.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Material",permalink:"/my-website/docs/tutorial/material"},next:{title:"Structure",permalink:"/my-website/docs/tutorial/structure"}},l={},m=[],c={toc:m},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"waveform"},"Waveform"),(0,o.kt)("p",null,"Features Description: Global waveforms settings include two parts, one is standard waveform list, and another is project waveform list. There are three default materials in the standard waveform list, includes Waveform_1550, Waveform_1310 and Visible_Light. The default waveforms in the standard waveform list cannot be edited directly, user can add, or copy one of waveforms from the standard waveform list. User only can delete newly added or copied waveforms in the standard waveform list. The waveforms in the project waveform list inherit form projects built by user, user can add new waveform or delete selected waveforms in the project waveform list."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select one Waveform (e.g., Waveform1) in Waveform list, then edit the selected waveform in the left-down Waveforms window, at the same time, signal vs time image will display in the right-down window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Signal Vs Time: The range of time can be zoom in via dragging the two ends of bottom bar."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can add, delete, or copy a certain waveform in the list."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"You can set Frequency/wavelength or Time domain in the drop-down menu, at the same time, signal and time image will be changed as well.\n"))),(0,o.kt)("li",{parentName:"ol"},"If the \u201cset frequency/wavelength\u201d option was chosen, \u201cset time domain\u201d option will be disabled, this section makes it possible to either set the frequency or the wavelength and choose to either set the center and span or the minimum and maximum frequencies of the source."),(0,o.kt)("li",{parentName:"ol"},"For single frequency simulations, simply sets both the min and max wavelengths to the same value."),(0,o.kt)("li",{parentName:"ol"},"If the \u201cset time domain \u201d option was chosen, \u201cset frequency/wavelength\u201d option will be disabled."),(0,o.kt)("li",{parentName:"ol"},"Broadband: The broadband source, which contains a much wider spectrum, consists of a chirped optical carrier with a Gaussian envelope. "),(0,o.kt)("li",{parentName:"ol"},"Frequency: The center frequency of the optical carrier. The value currently is default."),(0,o.kt)("li",{parentName:"ol"},"Pulse Length: The half-width at -109 dB power temporal duration of the pulse. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Offset: The time dealy form the start of simulation to the peak of the waveform. The value currently is default.\n"))),(0,o.kt)("li",{parentName:"ol"},"Bandwidth\uff1asource band width setting."),(0,o.kt)("li",{parentName:"ol"},"Optimize for short pulse: Enabled, this is the default setting for FDTD, meaning a very short pulse will be used in most simulations.")))}f.isMDXComponent=!0}}]);