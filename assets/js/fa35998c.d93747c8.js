"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4867],{3905:(t,l,a)=>{a.d(l,{Zo:()=>k,kt:()=>c});var e=a(67294);function n(t,l,a){return l in t?Object.defineProperty(t,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[l]=a,t}function r(t,l){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?r(Object(a),!0).forEach((function(l){n(t,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(a,l))}))}return t}function d(t,l){if(null==t)return{};var a,e,n=function(t,l){if(null==t)return{};var a,e,n={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],l.indexOf(a)>=0||(n[a]=t[a]);return n}(t,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=e.createContext({}),s=function(t){var l=e.useContext(u),a=l;return t&&(a="function"==typeof t?t(l):i(i({},l),t)),a},k=function(t){var l=s(t.components);return e.createElement(u.Provider,{value:l},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},p=e.forwardRef((function(t,l){var a=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=s(a),p=n,c=o["".concat(u,".").concat(p)]||o[p]||m[p]||r;return a?e.createElement(c,i(i({ref:l},k),{},{components:a})):e.createElement(c,i({ref:l},k))}));function c(t,l){var a=arguments,n=l&&l.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=p;var d={};for(var u in l)hasOwnProperty.call(l,u)&&(d[u]=l[u]);d.originalType=t,d[o]="string"==typeof t?t:n,i[1]=d;for(var s=2;s<r;s++)i[s]=a[s];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41326:(t,l,a)=>{a.r(l),a.d(l,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var e=a(87462),n=(a(67294),a(3905));const r={sidebar_position:1},i="Material",d={unversionedId:"tutorial/material",id:"tutorial/material",title:"Material",description:"Features Description:",source:"@site/docs/tutorial/material.md",sourceDirName:"tutorial",slug:"/tutorial/material",permalink:"/my-website/docs/tutorial/material",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/material.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Waveform",permalink:"/my-website/docs/tutorial/waveform"}},u={},s=[{value:"Features Description:",id:"features-description",level:3},{value:"Standard &amp; User &amp; Project Material Database:",id:"standard--user--project-material-database",level:3},{value:"Standard Material Database",id:"standard-material-database",level:2},{value:"Material List",id:"material-list",level:3},{value:"Materials in the Standard Material Database",id:"materials-in-the-standard-material-database",level:3},{value:"Material Properties:",id:"material-properties",level:3},{value:"1)\tMaterial Data &amp; Model Fitting",id:"1material-data--model-fitting",level:3},{value:"User Material Database",id:"user-material-database",level:2}],k={toc:s},o="wrapper";function m(t){let{components:l,...r}=t;return(0,n.kt)(o,(0,e.Z)({},k,r,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"material"},"Material"),(0,n.kt)("h3",{id:"features-description"},"Features Description:"),(0,n.kt)("p",null,"The Global Material Database allows for the definition of complex materials using experimental data or parameterized models. The Material Database stores the material data to be used in the simulation. It also provides an interface to change material properties like color, mesh order, and fit parameters. User could import materials from \u201cStandard\u201d database to \u201cUser\u201d and \u201cProject\u201d material database, and also from \u201cUser\u201d material database to \u201cProject\u201d material database."),(0,n.kt)("h3",{id:"standard--user--project-material-database"},"Standard & User & Project Material Database:"),(0,n.kt)("p",null,"Material database includes standard, user, and project material database."),(0,n.kt)("h2",{id:"standard-material-database"},"Standard Material Database"),(0,n.kt)("p",null,"The standard material database includes two parts, one is material list, and another is material property plot. The material list includes a number of common materials, when creating a new simulation, the standard database will be loaded. And the materials in the standard material database can be imported into \u201cUser\u201d and \u201cProject\u201d material database. The default materials cannot be edited directly. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&#39;figure 1&#39;",src:a(80753).Z,title:"figure 1",width:"1510",height:"1157"})),(0,n.kt)("h3",{id:"material-list"},"Material List"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&#39;figure 2&#39;",src:a(86895).Z,width:"965",height:"674"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"ID")," : ID"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Name")," : Material Name"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Mesh Oder"),": Decides how overlapping objects are meshed in the simulation."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Color")," : Material Color"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Type")," : Types of material, three types are included, there are Lossy material, Lossless material and List data as follows.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Lossy Material")," : Lossy Material"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Lossless Material")," : Lossless Material (insulating material)"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"List Data")," : Materials whose dielectric permittivity changes with wavelength settings, displayed in tabular form."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Last Modified")," :Last modified time"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Import"),": Import materials to user or project database."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Export"),": Export materials according to user needs.")),(0,n.kt)("h3",{id:"materials-in-the-standard-material-database"},"Materials in the Standard Material Database"),(0,n.kt)("p",null,"The following materials are included in the standard material database."),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"ID"),(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Mesh Order"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"1"),(0,n.kt)("td",null,"Air"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"Lossless Material")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"Al (Aluminium) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"3"),(0,n.kt)("td",null,"Al (Aluminium) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"4"),(0,n.kt)("td",null,"Au (Gold) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"5"),(0,n.kt)("td",null,"Au (Gold) - Johnson and Christy"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"6"),(0,n.kt)("td",null,"Au (Gold) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"7"),(0,n.kt)("td",null,"Ge (Germanium) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"8"),(0,n.kt)("td",null,"Ge (Germanium) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"9"),(0,n.kt)("td",null,"Si (Silicon) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"10"),(0,n.kt)("td",null,"SiO2 (Glass) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"11"),(0,n.kt)("td",null,"Si3N4 (Silicon Nitride) - Kischkat"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"12"),(0,n.kt)("td",null,"Si3N4 (Silicon Nitride) - Phillip"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"13"),(0,n.kt)("td",null,"Ag (Silver) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"14"),(0,n.kt)("td",null,"Pt (Platinum) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"15"),(0,n.kt)("td",null,"Ta (Tantalum) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"16"),(0,n.kt)("td",null,"TiN - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"17"),(0,n.kt)("td",null,"Cu (Copper) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"18"),(0,n.kt)("td",null,"Fe (Iron) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"19"),(0,n.kt)("td",null,"W (Tungsten) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"20"),(0,n.kt)("td",null,"Ti (Titanium) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"21"),(0,n.kt)("td",null,"Ti (Titanium) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"22"),(0,n.kt)("td",null,"Sn (Tin) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"23"),(0,n.kt)("td",null,"H2O (Water) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"24"),(0,n.kt)("td",null,"Cr (Chromium) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"25"),(0,n.kt)("td",null,"Pd (Palladium) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"26"),(0,n.kt)("td",null,"InAs - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"27"),(0,n.kt)("td",null,"Ag (Silver) - Palik (1-10um)"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"28"),(0,n.kt)("td",null,"Ag (Silver) - Johnson and Christy"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"29"),(0,n.kt)("td",null,"W (Tungsten) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"30"),(0,n.kt)("td",null,"Fe (Iron) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"31"),(0,n.kt)("td",null,"Cr (Chromium) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"32"),(0,n.kt)("td",null,"Al2O3 - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"33"),(0,n.kt)("td",null,"In (Indium) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"34"),(0,n.kt)("td",null,"Cu (Copper) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"35"),(0,n.kt)("td",null,"Ni (Nickel) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"36"),(0,n.kt)("td",null,"V (Vanadium) - CRC"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"37"),(0,n.kt)("td",null,"InP - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"38"),(0,n.kt)("td",null,"GaAs - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"39"),(0,n.kt)("td",null,"Ni (Nickel) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"40"),(0,n.kt)("td",null,"Rh (Rhodium) - Palik"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"41"),(0,n.kt)("td",null,"Ag (Silver) - Palik (0-2um)"),(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"List Data")))),(0,n.kt)("h3",{id:"material-properties"},"Material Properties:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(82039).Z,width:"1524",height:"1161"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Plot")," : User can view each material property in this plot area via clicking a certain material in material list, also can view properties they are interested in via two options in the bottom of plot. Material properties include \u201cColor\u201d, \u201cName\u201d, \u201cMesh Order\u201d, \u201cWavelength\u201d, \u201cFrequency\u201d, \u201cn,k\u201d-Re(refractive index)&Im(refractive index), \u201c\u03b5r\u2032,\u03b5r\u2033\u201d-Re(relative permittivity)&Im(relative permittivity), \u03b5\u2019,\u03c3-Re(relative permittivity)&Im(relative permittivity)."),(0,n.kt)("h3",{id:"1material-data--model-fitting"},"1)\tMaterial Data & Model Fitting"),(0,n.kt)("p",null,"Material Data tab: User can view each material property in this list via double clicking a certain material in material list. Material properties include \u201cColor\u201d, \u201cName\u201d, \u201cMesh Order\u201d, \u201cWavelength\u201d, \u201cFrequency\u201d, \u201cn,k\u201d-Re(refractive index)&Im(refractive index), and \u201c\u03b5r\u2032,\u03b5r\u2033\u201d-Re(relative permittivity)&Im(relative permittivity)."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(26674).Z,width:"1525",height:"1185"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Model Fitting: (Currently, the model fitting feature is not available and is still in the development process.)"))),(0,n.kt)("h2",{id:"user-material-database"},"User Material Database"),(0,n.kt)("p",null,"The User material database, a database that stores materials used by user. The user material database includes two parts, one is material list, and another is material property plot. User can copy or delete a selected material, The materials in the \u201cUser\u201d material database can be imported to the \u201cProject\u201d material database. And users also can export materials according to their needs."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(45276).Z,width:"1519",height:"1156"})))}m.isMDXComponent=!0},80753:(t,l,a)=>{a.d(l,{Z:()=>e});const e=a.p+"assets/images/fig1-4bc2809a8c3d9c9d4da5f4dcd25f348b.png"},86895:(t,l,a)=>{a.d(l,{Z:()=>e});const e=a.p+"assets/images/materialList-cf70d312156e85c737c7ad709a1a93ee.png"},26674:(t,l,a)=>{a.d(l,{Z:()=>e});const e=a.p+"assets/images/materialdataAndModelFitting-bc0519202002b628bbd32995895ffee0.png"},82039:(t,l,a)=>{a.d(l,{Z:()=>e});const e=a.p+"assets/images/materialproperties-85b0244add4a69526dc038d9a54bd173.png"},45276:(t,l,a)=>{a.d(l,{Z:()=>e});const e=a.p+"assets/images/userDataBase-75e8348763cbfd83c74de6bcee9617ef.png"}}]);