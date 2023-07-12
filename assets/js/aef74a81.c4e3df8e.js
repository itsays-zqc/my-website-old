"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(a),N=r,u=d["".concat(o,".").concat(N)]||d[N]||k[N]||i;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=N;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},59823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={},p="maxoptics_sdk.core.simulation.simu_res.interface module",l={unversionedId:"test/core/simulation/interface",id:"test/core/simulation/interface",title:"maxoptics_sdk.core.simulation.simu_res.interface module",description:"- Bases: Protocol",source:"@site/docs/test/core/simulation/interface.md",sourceDirName:"test/core/simulation",slug:"/test/core/simulation/interface",permalink:"/my-website/docs/test/core/simulation/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/core/simulation/interface.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"interface",permalink:"/my-website/docs/test/core/project/interface"},next:{title:"maxoptics_sdk.core.simulation.interface module",permalink:"/my-website/docs/test/core/simulation/simu_res"}},o={},m=[{value:"1. calculate",id:"1-calculate",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Usage",id:"usage",level:3},{value:"Parameters and Returns",id:"parameters-and-returns",level:3},{value:"Example",id:"example",level:3},{value:"2. extract",id:"2-extract",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Parameters and Returns",id:"parameters-and-returns-1",level:3},{value:"Example",id:"example-1",level:3}],s={toc:m},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maxoptics_sdkcoresimulationsimu_resinterface-module"},"maxoptics_sdk.core.simulation.simu_res.interface module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class maxoptics_sdk.core.simulation.simu_res.interface.SimulationResultInterface(*args, **kwargs)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bases: ",(0,r.kt)("strong",{parentName:"li"},"Protocol"))),(0,r.kt)("h2",{id:"1-calculate"},"1. calculate"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"abstract calculate(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"simulation_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"property"),": FdtdCalculateMethodPropertyProcess, ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp_f"),": Callable | None = None)"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Calculate basing on the simulation result.")),(0,r.kt)("h3",{id:"parameters-and-returns"},"Parameters and Returns"),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"typeface"},"Parameters"),(0,r.kt)("td",{class:"typeface"},"Explanation")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"monitor_name"),(0,r.kt)("td",null,"monitor name")),(0,r.kt)("tr",null,(0,r.kt)("td",{class:"first-coluumn"},"property"),(0,r.kt)("td",{class:"second-column"},"properties for calculation")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"simulation_name"),(0,r.kt)("td",null,"simulation name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cmp_f"),(0,r.kt)("td",null,"compare function, defaults to None"))),(0,r.kt)("br",null),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"third-column"},"Returns:"),(0,r.kt)("td",{class:"fourth-column"},"No return."))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"None\n")),(0,r.kt)("h2",{id:"2-extract"},"2. extract"),(0,r.kt)("h3",{id:"syntax-1"},"Syntax"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['calculate_modes']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['TEratio', 'neff_real', 'neff_imag', 'ng_real', 'ng_imag', 'wavelength_nm', 'loss_dBpcm', None]"," = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": int | None = None) \u2192 DataFrame"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['farfield_fde']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": int) \u2192 DataFrame"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['calculate_modes']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, export_zbf=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": int) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['mesh_structure']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity']"," = 'intensity', ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['line']"," = 'line', data: Literal","['frequency_analysis']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['neff', 'group_index', 'loss', 'polarization']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, export_zbf=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:facet_data']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a') \u2192 None"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:monitor', 'propagation_sweep:monitor', 'wavelength_sweep:monitor']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:smatrix']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity']"," = 'intensity', ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['propagation_sweep:sweep', ",(0,r.kt)("inlineCode",{parentName:"p"},"wavelength_sweep"),":sweep']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:port_mode_info']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity']"," = 'intensity', ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'H']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"port_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": Any = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:port_mesh_structure']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"port_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['line', 'intensity']"," = 'intensity', ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:port_effective_index', 'eme_propagate:port_ng']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"port_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a') \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:port_overlap']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['line']"," = 'line', ",(0,r.kt)("inlineCode",{parentName:"p"},"port_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:cell_mesh_structure']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity', 'line']",", cell_params: str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity']"," = 'intensity', ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:cell_mode_info']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'H']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_params"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": Any = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:prop_field']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_params"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:internal_s']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity']"," = 'intensity', ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['eme_propagate:cell_p_matrix', 'eme_propagate:cell_overlap', 'eme_propagate:cell_s', 'eme_propagate:prop_s']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity']"," = 'intensity', ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_params"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['fdtd:power_monitor', 'fdtd:time_monitor']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity', 'line']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density']"," | Literal","['T']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"wavelength"),": Any | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['fdtd:mode_expansion']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity', 'line']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['a', 'b', 'n', 'p', 'N', 'P', 't_forward', 't_backward', 'T_forward', 'T_backward']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None, mode: Any | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"wavelength"),": Any | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"mode_expansion_name"),": str) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['fdtd:port_mode_info']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity', 'line']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"port_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": Any = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['fdtd:mode_source_mode_info']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity', 'line']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"source_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": Any = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['fdtd:mode_expansion_mode_info']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity', 'line']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"mode_expansion_name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_y"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": Any = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"wavelength"),": Any = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['smatrix_sweep']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity', 'line']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None) \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['sweep']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['intensity', 'line']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, **",(0,r.kt)("inlineCode",{parentName:"p"},"kwargs"),") \u2192 List","[DataFrame]"),(0,r.kt)("p",null,"abstract extract(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": Literal","['mode_expansion']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": Literal","['line']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),": Literal","['a', 'b', 'n', 'p', 'N', 'P', 't_forward', 't_backward', 'T_forward', 'T_backward']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name"),": str | None = None, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_csv"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_mat"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"export_zbf"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"=False, ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"imag"),"=True, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath"),": Any = 'a', ",(0,r.kt)("inlineCode",{parentName:"p"},"wavelength"),"=None, ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_x"),": str | None = None, **",(0,r.kt)("inlineCode",{parentName:"p"},"kwargs"),") \u2192 List","[DataFrame]"),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Extract a result from completed simulation.")),(0,r.kt)("h3",{id:"parameters-and-returns-1"},"Parameters and Returns"),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"typeface"},"Parameters"),(0,r.kt)("td",{class:"typeface"},"Explanation")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"Which type/field data will be extracted.")),(0,r.kt)("tr",null,(0,r.kt)("td",{class:"first-coluumn"},"export_csv"),(0,r.kt)("td",{class:"second-column"},"Whether to export a csv. Default as False.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"show"),(0,r.kt)("td",null,"Whether to show the picture. If set to False, the picture will be saved instead. Default as False.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"savepath"),(0,r.kt)("td",null,"Picture save path. Default as \u2018a\u2019.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"target"),(0,r.kt)("td",null,"How the data is organized/displayed. Default as None.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"attribute"),(0,r.kt)("td",null,"Which attribute will extracted, in few cases this parameter is not needed. Default as None.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"real"),(0,r.kt)("td",null,"Whether to add real part of data. Default as True.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"imag"),(0,r.kt)("td",null,"Whether to add imag part of data. If both real and imag is activate, \u2018ABS\u2019 data will be extracted. Default as True.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"plot_x"),(0,r.kt)("td",null,"selection of x axis of heatmap or line plot.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"plot_y"),(0,r.kt)("td",null,"selection of y axis of heatmap.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"kwargs"),(0,r.kt)("td",null,"Other visualization parameters. \u2018monitor_name\u2019 and \u2018mode_expansion_name\u2019 for \u2018fdtd:mode_expansion\u2019 for example."))),(0,r.kt)("br",null),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"third-column"},"Returns:"),(0,r.kt)("td",{class:"fourth-column"},"No return."))),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"For detailed usage instruction, please view examples\n")))}k.isMDXComponent=!0}}]);