"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1313],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=o(a),s=r,g=d["".concat(m,".").concat(s)]||d[s]||k[s]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[d]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4581:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},i="EME",p={unversionedId:"tutorial/simulation/eme",id:"tutorial/simulation/eme",title:"EME",description:"definition",source:"@site/docs/tutorial/simulation/eme.md",sourceDirName:"tutorial/simulation",slug:"/tutorial/simulation/eme",permalink:"/my-website/docs/tutorial/simulation/eme",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/simulation/eme.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"FDE",permalink:"/my-website/docs/tutorial/simulation/fde"},next:{title:"FDTD Solver",permalink:"/my-website/docs/tutorial/simulation/fdtd"}},m={},o=[{value:"definition",id:"definition",level:2},{value:"<strong>Objectives:</strong>",id:"objectives",level:2},{value:"Works Flow:",id:"works-flow",level:2}],u={toc:o},d="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eme"},"EME"),(0,r.kt)("h2",{id:"definition"},"definition"),(0,r.kt)("p",null,"The bidirectional eigenmode expansion (EME) solver is ideal for simulating light propagation over long distances. The computational cost of the method scales exceptionally well with the device length, making it much more efficient for the design and optimization of long tapers and periodic devices compared to FDTD-based methods."),(0,r.kt)("h1",{id:"how-to-use-max-optics-v2300-local-passive-to-run-eme-and-view-the-simulation-result"},"How to use Max-Optics V2.3.0.0 Local Passive to run EME and view the simulation result"),(0,r.kt)("h2",{id:"objectives"},(0,r.kt)("strong",{parentName:"h2"},"Objectives:")),(0,r.kt)("p",null,"In this example, we show how to use Max-Optics to run EME and view the simulation result."),(0,r.kt)("h2",{id:"works-flow"},"Works Flow:"),(0,r.kt)("div",{class:"centered"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme1&#39;",src:a(4567).Z,width:"350",height:"641"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1) Modeling:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Material database settings:"),"\nPress on \u201cMaterial \u201c button, the material database window will bring out, and import new materials from standard material database or user material database into project material database according to user needs.( when import success a prompt information will pop out informs that \u201cImport Success. Success: 1/1, Fail: 0/1 (duplicated)\u201d.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Material work flows:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme2&#39;",src:a(4788).Z,width:"1114",height:"720"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add a rectangle :"),"\nPress arrow on the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u201cStructures\u201d"))," button, and select a Rectangle from the drop-down menu. Set the\nproperties of the substrate rectangle according to the following table.")),(0,r.kt)("p",null,"Menu bar->Structures->Rectangle->Geometry->Material"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tab"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"X(um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"X Span(um)"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Y(um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Y Span(um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Z(um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Z Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Material"),(0,r.kt)("td",{parentName:"tr",align:null},"Material"),(0,r.kt)("td",{parentName:"tr",align:null},"Si")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Material"),(0,r.kt)("td",{parentName:"tr",align:null},"Mesh Order"),(0,r.kt)("td",{parentName:"tr",align:null},"2")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2) Add EME:"),"\nPress arrow on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cSimulation\u201d"))," button, and select the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cEME\u201d"))," from the drop-down menu, and set\nthe properties according to the following table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tab"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"General"),(0,r.kt)("td",{parentName:"tr",align:null},"Background Material"),(0,r.kt)("td",{parentName:"tr",align:null},"Object Defined Dielectric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Wavelength (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use Wavelength Sweep"),(0,r.kt)("td",{parentName:"tr",align:null},"On")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EME Setup"),(0,r.kt)("td",{parentName:"tr",align:null},"X min (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"-5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Energy Conservation"),(0,r.kt)("td",{parentName:"tr",align:null},"Make passive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Cell group definition"),(0,r.kt)("td",{parentName:"tr",align:null},"Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y min (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y max (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z min (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z max (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transverse  mesh settings"),(0,r.kt)("td",{parentName:"tr",align:null},"Define Y mesh"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum mesh step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Define Z mesh"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum mesh step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Min Mesh step (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Grading Factor"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dy"),(0,r.kt)("td",{parentName:"tr",align:null},"0.02")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dz"),(0,r.kt)("td",{parentName:"tr",align:null},"0.02")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boundary conditions"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Material type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advanced options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tread setting"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"General Tab"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme3&#39;",src:a(4457).Z,width:"1077",height:"681"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EME Setup Tab"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme4&#39;",src:a(7397).Z,width:"1210",height:"720"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transverse Mesh Setting Tab"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme5&#39;",src:a(8822).Z,width:"1083",height:"684"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3) Add EME Port:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tab"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EME Port(left)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port location"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Left")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Y (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y min (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y max (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z min (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z max (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EME port"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EME Port(right)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port location"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Y (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y min (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y max (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z min (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z max (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EME port"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"default")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry Tab of EME Port 1(Left)"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme6&#39;",src:a(6963).Z,width:"1166",height:"720"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry Tab of EME Port 2(Right)"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme7&#39;",src:a(8221).Z,width:"1214",height:"720"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4) Add Monitor (EME Profile monitor):")),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cMonitor\u201d"))," button and select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cEME Profile Monitor\u201d"))," from drop-down manual.\nAnd set the properties according to the following table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tab"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor type"),(0,r.kt)("td",{parentName:"tr",align:null},"2D X-normal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X resolute"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Z Span (um)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry Tab of Profile Monitor"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme8&#39;",src:a(3302).Z,width:"1208",height:"720"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")," Before simulation, please press ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cFile\u201d"))," button, and select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cSave\u201d"))," from drop-down manual,\nmanually. (File -> Save)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5) Run & Result View")),(0,r.kt)("p",null,"Press arrow on the \u201cRun\u201d button and select \u201cRun EME\u201d from drop-down menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme9&#39;",src:a(8896).Z,width:"2071",height:"985"})),(0,r.kt)("p",null,"After running, the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cEME Analysis\u201d"))," window will pop out, in this window, you can run ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cEME Propagate\u201d")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cPropagation Sweep\u201d"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cWavelength Sweep\u201d"))," via press buttons respectively."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme10&#39;",src:a(4537).Z,width:"1147",height:"631"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme11&#39;",src:a(91).Z,width:"1144",height:"628"})),(0,r.kt)("p",null,"\u2460 ",(0,r.kt)("strong",{parentName:"p"},"EME propagate")),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cEME propagate\u201d"))," button, and you can view the EME propagate result via clicking EME result in Result View."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme12&#39;",src:a(8429).Z,width:"897",height:"641"})),(0,r.kt)("p",null,"You can view different plot types via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cScalar Operation\u201d"))," options, and in attributes list, you can\nchoose parameter which is interested in to view"),(0,r.kt)("div",{class:"centered"},(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"&#39;eme13&#39;",src:a(1807).Z,width:"339",height:"524"}))),(0,r.kt)("p",null,"\u2461 ",(0,r.kt)("strong",{parentName:"p"},"Run Propagation sweep")),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cPropagation Sweep\u201d"))," button, and after running, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cEME Propagation Sweep\u201d"))," window will pop out, you can view the result about Propagation Sweep. User can view different view via clicking options in S11, S12, S21 or S22 port box."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&#39;eme14&#39;",src:a(1125).Z,width:"889",height:"639"})),(0,r.kt)("p",null,"\u2462 ",(0,r.kt)("strong",{parentName:"p"},"Run Wavelength Sweep")),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cWavelength Sweep\u201d"))," button, and after running, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u201cEME Wavelength Sweep\u201d"))," window will pop out, you can view the result about Wavelength Sweep."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme15&#39;",src:a(6897).Z,width:"891",height:"638"})),(0,r.kt)("p",null,"You can view different results via the options in S11/S12/S21/S22 Port box."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme16&#39;",src:a(4422).Z,width:"893",height:"641"})),(0,r.kt)("p",null,"\u2463 ",(0,r.kt)("strong",{parentName:"p"},"Matrix Index Mapping")),(0,r.kt)("p",null,"Show the information about the mode corresponding to the port."),(0,r.kt)("p",null,"\u2464 ",(0,r.kt)("strong",{parentName:"p"},"zbf Export")),(0,r.kt)("p",null,"The EME port and EME cell results support exporting mode information in a zbf format file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Works flows: Result View->EME port/EME Cell->Mode Fields->Export ->OK"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme17&#39;",src:a(3646).Z,width:"1066",height:"691"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The simulation cases involved in the manual are only limited to guiding user how to use Max-Optics Studio silicon-based passive product running simulation, not for other purposes;"),(0,r.kt)("li",{parentName:"ol"},"The screenshot pictures are gained, under Hardware environment: Name: LAPTOP-MHBJS336 (MateB ook 14), Windows11, and software environment: Google browser, version:108.0.5359.125.")))}k.isMDXComponent=!0},4567:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme1-a39e66fbb1ab3149c30c43825f0f9bb2.png"},4537:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme10-42598a5c0a8497c8088d846db4bcbfcf.png"},91:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme11-6e4aeafec082a19c69461cf0fc328f16.png"},8429:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme12-bc3064285418ed5f4b36c4a2ea1348eb.png"},1807:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme13-f3dc45a4aa3301ff7d5e88d9e3878a57.png"},1125:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme14-ee3ae0b9542a5eb809623f9d1080547b.png"},6897:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme15-271628fdf4280bf0e3705fba7bfd8571.png"},4422:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme16-3bd3f0a11c1057310729047d0041470c.png"},3646:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme17-5f48161c42c42b04e3d80214a20f8dc0.png"},4788:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme2-3d427fee8de8d9e5394a4175482a55b7.png"},4457:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme3-13c3a6c962ee3c8f8010c07a94c10d1d.png"},7397:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme4-6ef08b20fe27e48acb474cb53ea45d2f.png"},8822:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme5-ef7d4d7546cefef60776e68145b2fcff.png"},6963:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme6-3fdff17d070a90459d68a176e2414fdd.png"},8221:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme7-5cbd6caff45451ef32202de18e0f072d.png"},3302:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme8-4c4a894d4afcbfeccd3be61f1f490b13.png"},8896:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/eme9-61865fde73e71b5225c50c6b778fa014.png"}}]);