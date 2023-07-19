"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5},i="Source",s={unversionedId:"tutorial/Source",id:"tutorial/Source",title:"Source",description:"Mode Source:",source:"@site/docs/tutorial/Source.md",sourceDirName:"tutorial",slug:"/tutorial/Source",permalink:"/my-website/docs/tutorial/Source",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/Source.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"mesh",permalink:"/my-website/docs/tutorial/simulation/mesh"},next:{title:"Monitor",permalink:"/my-website/docs/tutorial/monitor"}},l={},p=[{value:"Mode Source:",id:"mode-source",level:2},{value:"Gaussian source\uff1a",id:"gaussian-source",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"source"},"Source"),(0,r.kt)("h2",{id:"mode-source"},"Mode Source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Feature Description:"),"\nThe mode source is used to inject a guided mode into the simulation region in FDTD. You could add and set mode source here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"General tab"),(0,r.kt)("img",{alt:"&#39;Source1&#39;",src:a(3526).Z,width:"926",height:"544"}))),(0,r.kt)("p",null,"1 ) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Injection Axis:"))," This field specifies the axis for the mode source propagation. Three options are available: \u201c",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"X-Axis")),"\u201d, \u201c",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Y-Axis")),"\u201d, and \u201c",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Z-Axis")),"\u201d."),(0,r.kt)("p",null,"2 )\t",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Direction:"))," This field indicates the direction of mode source propagation. Two options are available: \u201cForward\u201d means the propagation is along a positive direction, while \u201cBackward\u201d means the propagation is along a negative direction."),(0,r.kt)("p",null,"3 )\t",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amplitude:"))," This field specifies the amplitude of the mode source. See the section ``Units and normalization section''. (Default value: 1)"),(0,r.kt)("p",null,"4 ) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Phase:"))," This field refers to the phase value (in units of degrees) of the mode source. It makes sense only when there exist relative phase differences among multiple sources of radiation."),(0,r.kt)("p",null,"5 ) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Rotations:"))),(0,r.kt)("p",null,"-> ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Theta:"))," This refers to the angle of propagation measured by degrees, with respect to the incident axis of the source in a 3D simulation. In a 2D simulation, it is the angle of propagation measured by degrees revolved around the global Z-axis in compliance with the right-hand rule, that is, the angle of propagation in the XY plane."),(0,r.kt)("p",null,"-> ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Phi:"))," This refers to the angle of propagation measured by degrees revolved around the incident axis of the source in compliance with the right-hand rule in a 3D simulation. In a 2D simulation, this value does not take effect."),(0,r.kt)("p",null,"-> ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Rotation Offset:"))," A rotation offset can be endowed to the plane upon which the mode is computed. This guarantees that mode sources at an angle do not interfere with structures not belonging to the waveguide/fiber."),(0,r.kt)("p",null,"6 ) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Mode selection:")),' Defines whether to inject fundamental mode or other user-selected modes chosen via the "Select Mode" button. Currently, mode selection options are \u201cFundamental Mode\u201d, \u201cFundamental TE Mode\u201d, \u201cFundamental TM Mode\u201d, \u201cUser Select\u201d and \u201cUser Import\u201d.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Works flow: User Select -> \u201cSelect Mode\u201d")," window:\n",(0,r.kt)("img",{alt:"&#39;Source2&#39;",src:a(7091).Z,width:"926",height:"566"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modal analysis tab:"))),(0,r.kt)("p",null,"In this section you can set \u201cFrequency\u201d, \u201cWavelength\u201d, \u201cNumber of Trial Modes\u201d, \u201cSearch\u201d, and also can set bent waveguide via selecting \u201cCalculate Group Index\u201d and \u201cBent Wave guide\u201d."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;Source3&#39;",src:a(3380).Z,width:"925",height:"634"})),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},"Number of Trial Modes:")," This specifies the number of modes to search for a fundamental mode. The modes eventually found by the solver may depend on that. If one uses a too small number, the expected modes could be missing. Usually, setting this number to 100 suffices to guarantee no physical modes would have been missed. However, users who are interested in higher order modes should set an even larger value, since in such cases more than 100 modes may be present."),(0,r.kt)("p",null,"2) ",(0,r.kt)("strong",{parentName:"p"},"Search:")," The user can specify an index to search around or a range of indices to sweep for finding modes of interest. The specified value indicates the magnitude of the index (which is complex) rather than just its real part."),(0,r.kt)("p",null,"-> ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Max index:"))," By checking this option, the FDTD calculation automatically admits the maximum index mode (Default: 1)."),(0,r.kt)("p",null,"-> ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Near N:"))," If unchecked, the user can set the value of N in the following box according to the need. "),(0,r.kt)("p",null,"If the selected value is not within the range of the mode index value, the nearest value from the user\u2019s setting will be adopted instead for selecting the FDTD mode."),(0,r.kt)("p",null,"3) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Mesh Structure:"))," User can view structure and material information about mesh. When click the button, result view will be shown, and attribute drop-down list includes: Index X, Index Y, Index Z."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;Source4&#39;",src:a(5923).Z,width:"912",height:"384"})),(0,r.kt)("p",null,"4) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Plot area:"))," The plot area where the simulation data is plotted."),(0,r.kt)("p",null,"5) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Mode list:"))," Mode list where the \u201cID\u201d, \u201cEffective Index\u201d, \u201cGroup Index\u201d, \u201cWavelength\u201d, \u201cLoss\u201d, and \u201cTE Polarization Fraction\u201d are shown. How many modes will be shown, will according to the \u201cNumber of Trail Modes\u201d setting."),(0,r.kt)("p",null,"6) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Mode Plot options:"))," The mode plot options are used to specify which data to plot in the plot window, also can be used to modify the current mode plot options."),(0,r.kt)("p",null,"7) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Export:"))," The export button supports users exporting the data file they are interested in."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Notes:"))," For detailed information please refer to Chapter 2.7.6.1.2.Mode Plot Window"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Boundary conditions tab:")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;Source5&#39;",src:a(2880).Z,width:"243",height:"274"})),(0,r.kt)("p",null,"In this section, you can set mode source simulation region\u2019s boundary conditions and six types can be chosen: PEC, PML, PMC, Symmetric, Periodic and Anti-Symmetric. (Default: PEC)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry tab:")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;Source6&#39;",src:a(1509).Z,width:"617",height:"419"})),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"X\uff0cX Span/ Y, Y Span, Z/ Z span:"))," The geometry tab contains options to change the size and location of the sources."),(0,r.kt)("h2",{id:"gaussian-source"},"Gaussian source\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Feature Description:")," The gaussian source is used to inject a gaussian source into the simulation region in FDTD. You could add and set gaussian source here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General tab:"),"\n",(0,r.kt)("img",{alt:"&#39;Source7&#39;",src:a(9135).Z,width:"868",height:"537"})))),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Injection Axis:"))," This field specifies the axis for the gaussian source propagation. Three options are available: \u201cX-Axis\u201d, \u201cY-Axis\u201d, and \u201cZ-Axis\u201d."),(0,r.kt)("p",null,"2) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Direction:"))," This field indicates the direction of gaussian source propagation. Two options are available: \u201cForward\u201d means the propagation is along a positive direction, while \u201cBackward\u201d means the propagation is along a negative direction."),(0,r.kt)("p",null,"3)\t",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Angle Theta:"))," This refers to the angle of propagation measured by degrees, with respect to the incident axis of the source in a 3D simulation. In a 2D simulation, it is the angle of propagation in degrees revolved around the global Z-axis in compliance with the right-hand rule, that is, the angle of propagation in the XY plane."),(0,r.kt)("p",null,"4)\t",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Angle Phi:"))," For 3D simulations, Phi corresponds to the angle of propagation (measured by degrees) revolved around the axis of source injection in compliance with the right-hand rule. This value has no meaning for 2D simulations."),(0,r.kt)("p",null,"5)\t",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amplitude:"))," This field specifies the source amplitude. (Default value: 1)"),(0,r.kt)("p",null,"6) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Phase:"))," This field refers to the phase value (in units of degrees) of the point source. It makes sense only when there exist relative phase differences among multiple sources of radiation."),(0,r.kt)("p",null,"7) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Polarization Angle:"))," For an injective electric field, the polarization angle is meant to be its orientation, measured with respect to the plane formed by the vector of propagating direction and the normal of the injection plane. Radiation with a vanishing polarization angle is P-polarized regardless of the direction of propagation, while radiation with a polarization angle of 90 degrees is S-polarized."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Waveform Tab:"),"\n1) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Waveform ID select:"))," Allows you to choose the waveform id from a list of the existing waveforms. Three types options of for waveforms provided by default, which include Waveform_1550, Waveform_1310, and Visible_Light.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Waveform List:"),"\nThe waveform information of \u201cID\u201d, \u201cName\u201d, \u201cCenter\u201d, \u201cSpan\u201d, \u201cStart\u201d and \u201cStop\u201d are included in waveform list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Beam Settings Tab:"),"\n1) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Calculation Method:"))," You can select \u201cUse Scalar Approximation\u201d or \u201cUse Vector Approximation\u201d for calculation. (Default: Use Scalar Approximation)"))),(0,r.kt)("p",null,"2) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Beam Parameters:"))," The user can choose either \u201cWaist Size and Position\u201d or \u201cBeam Size and Divergence\u201d to define a scalar beam. (Default: Waist Size and Position)"),(0,r.kt)("p",null,"3) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Waist Radius W0:"))," The user can input the value of waist radius (measured by \u03bcm; Default: 1.01818) within the range ","[1e-30,1e30]",". The setting Beam Parameters=\u201dWaist Size and Position\u201d enables the user to modify the value."),(0,r.kt)("p",null,"4) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Distance From Waist:"))," This distance is positive if the beam is divergent, or negative provided the beam is convergent. The setting Beam Parameters=\u201dWaist Size and Position\u201d enables the user to modify the value."),(0,r.kt)("p",null,"5) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Beam Radius Wz:"))," The user can input the value (measured by \u03bcm; Default: calculated value) within the range ","[1e-30,1e30]",". The setting Beam Parameters=\u201dBeam Size and Divergence\u201d enables the user to modify the value."),(0,r.kt)("p",null,"6) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Divergence Angle:"))," This refers to the angle of radiation spreading into the far field as measured. Positive/Negative angles correspond to diverging/converging beams, respectively. The user can input the value within the range of (-90,90). The value can be editted if Beam Parameters=\u201dBeam Size and Divergence\u201d."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry tab"),(0,r.kt)("img",{alt:"&#39;Source8&#39;",src:a(3656).Z,width:"893",height:"724"}))),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"X\uff0cX Span/ Y, Y Span, Z/ Z span:"))," The geometry tab contains options to change the size and location of the sources."))}c.isMDXComponent=!0},3526:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Source1-f6ffb7844160b55e46c610a9486e5627.png"},7091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Source2-693af40cb4ca47aadd3c04ec68a4c105.png"},3380:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Source3-da4b210f98ca6d7741f538546a6e6435.png"},5923:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Source4-cb60c8198948cec26165f0c841076a65.png"},2880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Source5-dd13d31ad93c3ddef523150f2cae1f03.png"},1509:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Source6-14c8d630935024b7fca3d665a2c7aa33.png"},9135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Source7-5dc9d6d5a658d295c78df309ed9b397a.png"},3656:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Source8-6b00c9d6312412173eaca0f7c127181b.png"}}]);