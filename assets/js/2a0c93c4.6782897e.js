"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:3},o="FDTD Solver",s={unversionedId:"tutorial/simulation/fdtd",id:"tutorial/simulation/fdtd",title:"FDTD Solver",description:"Solver Physics:",source:"@site/docs/tutorial/simulation/fdtd.md",sourceDirName:"tutorial/simulation",slug:"/tutorial/simulation/fdtd",permalink:"/my-website/docs/tutorial/simulation/fdtd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/simulation/fdtd.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EME",permalink:"/my-website/docs/tutorial/simulation/eme"},next:{title:"Run",permalink:"/my-website/docs/tutorial/run"}},l={},m=[{value:"Solver Physics:",id:"solver-physics",level:2},{value:"<strong>General tab:</strong>",id:"general-tab",level:3},{value:"Geometry tab:",id:"geometry-tab",level:3},{value:"Mesh Settings tab:",id:"mesh-settings-tab",level:3},{value:"Boundary Conditions tab:",id:"boundary-conditions-tab",level:3},{value:"Advanced Options tab:",id:"advanced-options-tab",level:3},{value:"Thread Settings tab:",id:"thread-settings-tab",level:3}],p={toc:m},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fdtd-solver"},"FDTD Solver"),(0,i.kt)("h2",{id:"solver-physics"},"Solver Physics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Finite-difference time-domain (FDTD) or Yee's method")," (named after the Chinese American applied mathematician Kane S. Yee, born in1934) is a numerical analysis technique used for modeling computational electrodynamics (finding approximate solutions to the associated system of differential equations). Since it is a time-domain method, FDTD solutions can cover a wide frequency range with a single simulation run, and treat nonlinear material properties in a natural way.\nFor more details about FDTD can search on Wikipedia.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Features Description:")," Adds or sets FDTD simulation region and boundary conditions."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes :")," When FDTD solver is selected, user cannot add FDE solver and EME solver at the same time. "),(0,i.kt)("h3",{id:"general-tab"},(0,i.kt)("strong",{parentName:"h3"},"General tab:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5769).Z,width:"1080",height:"747"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dimension:")," The dimension of the simulation region, the default set is 3D.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using Optical Path Estimate Time:")," It is the switch button that the estimation of simulation time based on optical path.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Estimate Time:")," Estimated simulation time. (when \u201cUsing Optical Path Estimate Time\u201d is enabled, it is displayed and non-editable.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simulation Time:")," The maximum duration of the simulation to be performed. The actual simulation may be shorter if the auto-shutoff criteria are satisfied before this maximum simulation time is exceeded. The default set is 1000 fs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Background Material:")," The combo box allows user to set the background material from drop down menu. \u201cProject\u201d, \u201cObject Defined Dielectric\u201d, and \u201cGo to Material Library\u201d can be operated.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Project:")," The \u201cBackground Material\u201d can be selected from the \u201cProject\u201d sublist in the \u201cMaterial Database\u201d based upon the needs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Object Defined Dielectric:")," The object-defined dielectric material, a default setting if user forgets to set background material, is defined for the current object background material setting, and once the user chooses this option, he does not need to set any material from the standard, user, or project material database. And the object-defined dielectric will not be loaded into any material database.  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Go to Material Library:")," If selected, user can go to standard material database to set background material according to needs. And the selected material relative property from standard material database will be displayed in the material data list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Index:")," The refractive index of the surrounding, background medium in the simulation region.\uff08Default: 1)"))),(0,i.kt)("h3",{id:"geometry-tab"},"Geometry tab:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7892).Z,width:"954",height:"647"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"X, Y, Z:")," The center position of the simulation region."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"X Min, X Max:")," X min, X max position."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Y Min, Y Max:")," Y min, Y max position."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Z Min, Z Max:")," Z min, Z max position."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"X Span, Y Span, Z Span:")," X, Y, Z span of the simulation region.")),(0,i.kt)("h3",{id:"mesh-settings-tab"},"Mesh Settings tab:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7060).Z,width:"1330",height:"824"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mesh Type:"),"\nTwo types of mesh generation algorithms are available, as described below;\n",(0,i.kt)("strong",{parentName:"p"},"1. Auto non-uniform (Default)"),"\nA non-uniform mesh is automatically generated based on the mesh accuracy slider bar.\n",(0,i.kt)("strong",{parentName:"p"},"Uniform"),"\nA uniform mesh is applied to the entire simulation volume, regardless of any material properties. If a mesh override region is used in conjunction with this option, the override region will force the mesh size everywhere, not just within the override region (the mesh is uniform).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mesh Accuracy:")," Sets cells per wavelength. The default set is 15.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Minimum Mesh Step Settings:")," Set the absolute minimum mesh size for the entire solver region. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mesh Refinement:")," Mesh refinement can give sub-cell accuracy for a simulation."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Staircase:"),' The material at each position of the Yee cell is evaluated to determine which material it is in, and the E field at that location uses only that single material property. The resulting discretized structure is unable to account for structure variations that occur within any single Yee cell, resulting in a "staircase" permittivity mesh that coincides with the Cartesian mesh furthermore, any layers are effectively moved to the nearest E field position on the Yee cell, meaning that layer thickness cannot be resolved to better than dx.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Curve Mesh:")," Effective permittivities are derived using a contour path approach that accounts for the boundary conditions of the electromagnetic field at dielectric interfaces.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Grading:")," Grading factor, determines the maximum ratio of the neighboring spatial steps."))),(0,i.kt)("h3",{id:"boundary-conditions-tab"},"Boundary Conditions tab:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1287).Z,width:"953",height:"810"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"PML:")," Perfectly matched layer (PML) boundaries absorb electromagnetic waves incident upon them. They essentially model open (or reflectionless) boundaries."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"PEC:")," PEC boundary conditions are used to specify boundaries that behave as a Perfect Electric Conductor (PEC). Metal boundaries are perfectly reflecting, allowing no energy to escape the simulation volume along that boundary."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"PML settings:")," When the state of the Same Settings on All Boundary Conditions is on, all PML boundaries share the same profile based on the properties listed in the table, including \u201cLayers\u201d, \u201cKappa\u201d, \u201cSigma\u201d, \u201cPolynomial\u201d, \u201cAlpha\u201d, \u201cAlpha Polynomial\u201d, \u201cMin Layers\u201d, and \u201cMax Layers\u201d; otherwise, each PML boundary can be set individually."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"X/Y/Z min/ max PML:")," These fields describe the boundary conditions to be applied along the perimeter of the simulation region.")),(0,i.kt)("h3",{id:"advanced-options-tab"},"Advanced Options tab:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4959).Z,width:"1087",height:"598"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Auto Shutoff :")," Stops the simulation when the energy in the simulation goes below the \u201cAuto Shutoff Min\u201d when the \u201cUse Early Shutoff \u201d state is on , you can set min auto shutoff (Default: 1e-4) and down sample time (Default: 200)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Down sample time:")," The time step down sampling. (It is default: 200, and 10 <= it <= 1000)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Live Slice Field Display Settings"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Show Field:")," Real-time filed slice display switch. (Default: on)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Select Field Section:")," Combo box allows you to choose from a list of 2D planes normal to the axes for field display. ( 2D Z Normal by default\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Select Component"),"\uff1aCombo box allows you to choose from a list of the existing field components ( Ex by default)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Time Interval:")," The time step down sampling (200 fs by default)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Position:")," The position of slice (0 \u03bcm by default)")))),(0,i.kt)("h3",{id:"thread-settings-tab"},"Thread Settings tab:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4274).Z,width:"953",height:"642"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Thread\uff1aThrough thread setting can improve running effects, which makes simulation significantly faster than prior. (Default: 4)")))}c.isMDXComponent=!0},4959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/advancedOptionsTab-6d44b42304e89b1ed448830f383a0e5e.png"},1287:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boundaryConditionTab-89e1ee4603825c8e5a22a75615175e05.png"},5769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/generalTab-b1dd98365fcd0ffabdad555f879865ed.png"},7892:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/geometryTab-d453b4655e1e358671f523fe06059ad5.png"},7060:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/meshSetting-9abd096bb683725308301c8909c82570.png"},4274:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/threadSettingsTab-9842f206dc0ee30236427cb3919c2a4e.png"}}]);