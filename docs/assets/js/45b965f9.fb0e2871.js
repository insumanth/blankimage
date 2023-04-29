"use strict";(self.webpackChunkblankimage_docs=self.webpackChunkblankimage_docs||[]).push([[653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:6},o="Size",l={unversionedId:"size",id:"size",title:"Size",description:"Size",source:"@site/docs/size.md",sourceDirName:".",slug:"/size",permalink:"/blankimage/size",draft:!1,editUrl:"https://github.com/insumanth/blankimage/docs/size.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Color",permalink:"/blankimage/color"},next:{title:"Info",permalink:"/blankimage/info"}},s={},p=[{value:"Examples",id:"examples",level:2},{value:"Size Limitations",id:"size-limitations",level:2},{value:"Default",id:"default",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"size"},"Size"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Size",src:n(1137).Z,width:"1920",height:"1280"})),(0,r.kt)("p",null,"You can specify the HEIGHT and WIDTH of the Image in Pixels."),(0,r.kt)("p",null,"It can be passed with short form option ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," or long form option ",(0,r.kt)("inlineCode",{parentName:"p"},"--size")," and passing 2 arguments which corresponds to the Height and Width of the Image respectively."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"blankimage --size 2000 4000\nblankimage -s 50 10\n")),(0,r.kt)("h2",{id:"size-limitations"},"Size Limitations"),(0,r.kt)("p",null,"Although there are no limitations on the Input, It should be a Positive Integer that should not be too big.\nIt might take longer to generate a image with too many pixel and the time depends on the machine specifications.\nTest your machine with smaller dimensions before moving to larger dimension images."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Too large image will increase load on the machine and might crash.")),(0,r.kt)("h2",{id:"default"},"Default"),(0,r.kt)("admonition",{title:"Default Color",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The default width and height is 1080 Pixels.\nie., 1080 x 1080 Image")))}u.isMDXComponent=!0},1137:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/size-faf3e6e24a5085ee43c0c6611ef92b34.jpg"}}]);