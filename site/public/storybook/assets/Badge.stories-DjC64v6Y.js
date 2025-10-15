import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as Z}from"./index-DHZDe_v1.js";import{c as t}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const ee={default:"bg-gray-100 text-gray-800 border-gray-200",secondary:"bg-gray-600 text-white border-gray-600",success:"bg-green-100 text-green-800 border-green-200",warning:"bg-yellow-100 text-yellow-800 border-yellow-200",error:"bg-red-100 text-red-800 border-red-200",info:"bg-blue-100 text-blue-800 border-blue-200",outline:"bg-transparent text-gray-600 border-gray-300"},ae={xs:"px-1.5 py-0.5 text-xs",sm:"px-2 py-1 text-xs",md:"px-2.5 py-1 text-sm",lg:"px-3 py-1.5 text-sm"},se={rounded:"rounded-md",pill:"rounded-full",square:"rounded-none"},ne={"top-right":"top-0 right-0 translate-x-1/2 -translate-y-1/2","top-left":"top-0 left-0 -translate-x-1/2 -translate-y-1/2","bottom-right":"bottom-0 right-0 translate-x-1/2 translate-y-1/2","bottom-left":"bottom-0 left-0 -translate-x-1/2 translate-y-1/2"},a=({variant:s="default",size:n="sm",shape:o="rounded",children:d,dot:m=!1,dotPosition:i="top-right",icon:l,iconPosition:h="left",removable:Q=!1,onRemove:B,className:X,...D})=>m?e.jsxDEV("div",{className:"relative inline-flex",...D,children:[d,e.jsxDEV("span",{className:t("absolute flex h-2 w-2",ne[i]),children:[e.jsxDEV("span",{className:t("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",s==="success"?"bg-green-400":s==="warning"?"bg-yellow-400":s==="error"?"bg-red-400":s==="info"?"bg-blue-400":"bg-gray-400")},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:81,columnNumber:11},void 0),e.jsxDEV("span",{className:t("relative inline-flex rounded-full h-2 w-2",s==="success"?"bg-green-500":s==="warning"?"bg-yellow-500":s==="error"?"bg-red-500":s==="info"?"bg-blue-500":"bg-gray-500")},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:91,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:75,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:73,columnNumber:7},void 0):e.jsxDEV("span",{className:t("inline-flex items-center font-medium border",ee[s],ae[n],se[o],X),...D,children:[l&&h==="left"&&e.jsxDEV("span",{className:t("mr-1",n==="xs"||n==="sm"?"w-3 h-3":"w-4 h-4"),children:l},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:118,columnNumber:9},void 0),d,l&&h==="right"&&e.jsxDEV("span",{className:t("ml-1",n==="xs"||n==="sm"?"w-3 h-3":"w-4 h-4"),children:l},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:132,columnNumber:9},void 0),Q&&e.jsxDEV("button",{onClick:Y=>{Y.stopPropagation(),B==null||B()},className:t("ml-1 rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",n==="xs"||n==="sm"?"w-3 h-3":"w-4 h-4"),"aria-label":"Remove badge",children:e.jsxDEV("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:159,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:158,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:144,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:107,columnNumber:5},void 0),ie={xs:"gap-1",sm:"gap-2",md:"gap-3",lg:"gap-4"},r=({children:s,spacing:n="sm",direction:o="row",wrap:d=!0,className:m,...i})=>e.jsxDEV("div",{className:t("flex",o==="row"?"flex-row":"flex-col",d&&o==="row"&&"flex-wrap",ie[n],m),...i,children:s},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.tsx",lineNumber:193,columnNumber:5},void 0);try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:{value:"default"},description:"Badge variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"default"'},{value:'"secondary"'},{value:'"outline"'}]}},size:{defaultValue:{value:"sm"},description:"Badge size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},children:{defaultValue:null,description:"Badge content",name:"children",required:!0,type:{name:"ReactNode"}},dot:{defaultValue:{value:"false"},description:"Show a dot indicator",name:"dot",required:!1,type:{name:"boolean"}},dotPosition:{defaultValue:{value:"top-right"},description:"Position for dot badge",name:"dotPosition",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},icon:{defaultValue:null,description:"Icon element to display",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"Icon position",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},removable:{defaultValue:{value:"false"},description:"Removable badge with close button",name:"removable",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"Callback when badge is removed",name:"onRemove",required:!1,type:{name:"(() => void)"}},shape:{defaultValue:{value:"rounded"},description:"Badge shape",name:"shape",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"rounded"'},{value:'"pill"'}]}}}}}catch{}try{r.displayName="BadgeGroup",r.__docgenInfo={description:"",displayName:"BadgeGroup",props:{spacing:{defaultValue:{value:"sm"},description:"Spacing between badges",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},direction:{defaultValue:{value:"row"},description:"Layout direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},wrap:{defaultValue:{value:"true"},description:"Wrap badges to new lines",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const le={title:"Media/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","success","warning","error","info","outline"]},size:{control:"select",options:["xs","sm","md","lg"]},shape:{control:"select",options:["rounded","pill","square"]}}},c={args:{children:"Badge"}},u={render:()=>e.jsxDEV("div",{className:"flex gap-2 flex-wrap",children:[e.jsxDEV(a,{variant:"default",children:"Default"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:40,columnNumber:7},void 0),e.jsxDEV(a,{variant:"secondary",children:"Secondary"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:41,columnNumber:7},void 0),e.jsxDEV(a,{variant:"success",children:"Success"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:42,columnNumber:7},void 0),e.jsxDEV(a,{variant:"warning",children:"Warning"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:43,columnNumber:7},void 0),e.jsxDEV(a,{variant:"error",children:"Error"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:44,columnNumber:7},void 0),e.jsxDEV(a,{variant:"info",children:"Info"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:45,columnNumber:7},void 0),e.jsxDEV(a,{variant:"outline",children:"Outline"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:46,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:39,columnNumber:5},void 0)},g={render:()=>e.jsxDEV("div",{className:"flex gap-2 items-center",children:[e.jsxDEV(a,{size:"xs",children:"Extra Small"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:54,columnNumber:7},void 0),e.jsxDEV(a,{size:"sm",children:"Small"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:55,columnNumber:7},void 0),e.jsxDEV(a,{size:"md",children:"Medium"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:56,columnNumber:7},void 0),e.jsxDEV(a,{size:"lg",children:"Large"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:57,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:53,columnNumber:5},void 0)},p={render:()=>e.jsxDEV("div",{className:"flex gap-2",children:[e.jsxDEV(a,{shape:"square",children:"Square"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:65,columnNumber:7},void 0),e.jsxDEV(a,{shape:"rounded",children:"Rounded"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:66,columnNumber:7},void 0),e.jsxDEV(a,{shape:"pill",children:"Pill"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:67,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:64,columnNumber:5},void 0)},f={render:()=>e.jsxDEV("div",{className:"flex gap-2 flex-wrap",children:[e.jsxDEV(a,{variant:"success",icon:e.jsxDEV("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:79,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:78,columnNumber:11},void 0),children:"Success"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:75,columnNumber:7},void 0),e.jsxDEV(a,{variant:"error",icon:e.jsxDEV("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:90,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:89,columnNumber:11},void 0),children:"Error"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:86,columnNumber:7},void 0),e.jsxDEV(a,{variant:"info",icon:e.jsxDEV("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:101,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:100,columnNumber:11},void 0),iconPosition:"right",children:"Right Icon"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:97,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:74,columnNumber:5},void 0)},v={render:()=>{const s=n=>{alert(`Removed ${n} badge`)};return e.jsxDEV("div",{className:"flex gap-2 flex-wrap",children:[e.jsxDEV(a,{variant:"default",removable:!0,onRemove:()=>s("Default"),children:"Default"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:120,columnNumber:9},void 0),e.jsxDEV(a,{variant:"success",removable:!0,onRemove:()=>s("Success"),children:"Success"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:127,columnNumber:9},void 0),e.jsxDEV(a,{variant:"warning",removable:!0,onRemove:()=>s("Warning"),children:"Warning"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:134,columnNumber:9},void 0),e.jsxDEV(a,{variant:"error",removable:!0,onRemove:()=>s("Error"),children:"Error"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:141,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:119,columnNumber:7},void 0)}},b={render:()=>e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Dot Position Variants"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:157,columnNumber:9},void 0),e.jsxDEV("div",{className:"grid grid-cols-2 gap-8",children:[e.jsxDEV(a,{dot:!0,dotPosition:"top-right",variant:"success",children:e.jsxDEV("div",{className:"w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center",children:"TR"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:160,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:159,columnNumber:11},void 0),e.jsxDEV(a,{dot:!0,dotPosition:"top-left",variant:"error",children:e.jsxDEV("div",{className:"w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center",children:"TL"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:166,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:165,columnNumber:11},void 0),e.jsxDEV(a,{dot:!0,dotPosition:"bottom-right",variant:"warning",children:e.jsxDEV("div",{className:"w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center",children:"BR"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:172,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:171,columnNumber:11},void 0),e.jsxDEV(a,{dot:!0,dotPosition:"bottom-left",variant:"info",children:e.jsxDEV("div",{className:"w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center",children:"BL"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:178,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:177,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:158,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:156,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Dot Badge Examples"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:186,columnNumber:9},void 0),e.jsxDEV("div",{className:"flex gap-6 items-center",children:[e.jsxDEV(a,{dot:!0,variant:"success",children:e.jsxDEV("svg",{className:"w-6 h-6 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-5 5-5-5h5v-12h5v12z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:190,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:189,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:188,columnNumber:11},void 0),e.jsxDEV(a,{dot:!0,variant:"error",children:e.jsxDEV("div",{className:"w-8 h-8 rounded-full bg-gray-300"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:195,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:194,columnNumber:11},void 0),e.jsxDEV(a,{dot:!0,variant:"warning",children:e.jsxDEV("span",{className:"text-lg"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:199,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:198,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:187,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:185,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:155,columnNumber:5},void 0),parameters:{layout:"padded"}},N={render:()=>e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Default Group"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:214,columnNumber:9},void 0),e.jsxDEV(r,{children:[e.jsxDEV(a,{variant:"default",children:"React"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:216,columnNumber:11},void 0),e.jsxDEV(a,{variant:"info",children:"TypeScript"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:217,columnNumber:11},void 0),e.jsxDEV(a,{variant:"success",children:"Tailwind"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:218,columnNumber:11},void 0),e.jsxDEV(a,{variant:"warning",children:"Beta"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:219,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:215,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:213,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Column Layout"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:224,columnNumber:9},void 0),e.jsxDEV(r,{direction:"column",children:[e.jsxDEV(a,{variant:"default",children:"Feature A"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:226,columnNumber:11},void 0),e.jsxDEV(a,{variant:"success",children:"Feature B"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:227,columnNumber:11},void 0),e.jsxDEV(a,{variant:"warning",children:"Feature C"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:228,columnNumber:11},void 0),e.jsxDEV(a,{variant:"error",children:"Feature D"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:229,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:225,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:223,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Large Spacing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:234,columnNumber:9},void 0),e.jsxDEV(r,{spacing:"lg",children:[e.jsxDEV(a,{variant:"outline",size:"lg",children:"Design"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:236,columnNumber:11},void 0),e.jsxDEV(a,{variant:"outline",size:"lg",children:"Development"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:237,columnNumber:11},void 0),e.jsxDEV(a,{variant:"outline",size:"lg",children:"Testing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:238,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:235,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:233,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Many Badges (Wrapping)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:243,columnNumber:9},void 0),e.jsxDEV("div",{className:"max-w-md",children:e.jsxDEV(r,{children:["React","Vue","Angular","Svelte","TypeScript","JavaScript","CSS","HTML","Node.js","Python","Java","C++"].map(s=>e.jsxDEV(a,{variant:"default",size:"sm",children:s},s,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:247,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:245,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:244,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:242,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Status Indicators"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:254,columnNumber:9},void 0),e.jsxDEV(r,{spacing:"md",children:[e.jsxDEV(a,{variant:"success",icon:e.jsxDEV("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:258,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:257,columnNumber:13},void 0),children:"Available"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:256,columnNumber:11},void 0),e.jsxDEV(a,{variant:"warning",icon:e.jsxDEV("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:266,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:265,columnNumber:13},void 0),children:"Limited"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:264,columnNumber:11},void 0),e.jsxDEV(a,{variant:"error",icon:e.jsxDEV("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:274,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:273,columnNumber:13},void 0),children:"Unavailable"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:272,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:255,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:253,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:212,columnNumber:5},void 0),parameters:{layout:"padded"}},x={render:()=>{const s=["React","TypeScript","CSS","HTML","Node.js"],[n,o]=Z.useState(s),d=i=>{o(n.filter(l=>l!==i))},m=i=>{n.includes(i)||o([...n,i])};return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-2",children:"Active Tags"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:306,columnNumber:11},void 0),e.jsxDEV(r,{children:[n.map(i=>e.jsxDEV(a,{variant:"info",removable:!0,onRemove:()=>d(i),children:i},i,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:309,columnNumber:15},void 0)),n.length===0&&e.jsxDEV("span",{className:"text-gray-500 text-sm",children:"No tags selected"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:319,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:307,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:305,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-2",children:"Available Tags"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:325,columnNumber:11},void 0),e.jsxDEV(r,{children:s.filter(i=>!n.includes(i)).map(i=>e.jsxDEV(a,{variant:"outline",className:"cursor-pointer hover:bg-gray-50",onClick:()=>m(i),children:["+ ",i]},i,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:328,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:326,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:324,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/badge/Badge.stories.tsx",lineNumber:304,columnNumber:7},void 0)},parameters:{layout:"padded"}};var j,k,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var V,E,U;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(U=(E=u.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var w,R,S;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 items-center">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(S=(R=g.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var z,T,C;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Badge shape="square">Square</Badge>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
    </div>
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var L,M,P;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap">
      <Badge variant="success" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>}>
        Success
      </Badge>
      
      <Badge variant="error" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>}>
        Error
      </Badge>
      
      <Badge variant="info" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>} iconPosition="right">
        Right Icon
      </Badge>
    </div>
}`,...(P=(M=f.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var G,q,_;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const handleRemove = (label: string) => {
      alert(\`Removed \${label} badge\`);
    };
    return <div className="flex gap-2 flex-wrap">
        <Badge variant="default" removable onRemove={() => handleRemove('Default')}>
          Default
        </Badge>
        <Badge variant="success" removable onRemove={() => handleRemove('Success')}>
          Success
        </Badge>
        <Badge variant="warning" removable onRemove={() => handleRemove('Warning')}>
          Warning
        </Badge>
        <Badge variant="error" removable onRemove={() => handleRemove('Error')}>
          Error
        </Badge>
      </div>;
  }
}`,...(_=(q=v.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var A,I,W;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Dot Position Variants</h3>
        <div className="grid grid-cols-2 gap-8">
          <Badge dot dotPosition="top-right" variant="success">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              TR
            </div>
          </Badge>
          
          <Badge dot dotPosition="top-left" variant="error">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              TL
            </div>
          </Badge>
          
          <Badge dot dotPosition="bottom-right" variant="warning">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              BR
            </div>
          </Badge>
          
          <Badge dot dotPosition="bottom-left" variant="info">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              BL
            </div>
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Dot Badge Examples</h3>
        <div className="flex gap-6 items-center">
          <Badge dot variant="success">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12h5v12z" />
            </svg>
          </Badge>
          
          <Badge dot variant="error">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </Badge>
          
          <Badge dot variant="warning">
            <span className="text-lg"></span>
          </Badge>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(W=(I=b.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var F,H,J;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Default Group</h3>
        <BadgeGroup>
          <Badge variant="default">React</Badge>
          <Badge variant="info">TypeScript</Badge>
          <Badge variant="success">Tailwind</Badge>
          <Badge variant="warning">Beta</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Column Layout</h3>
        <BadgeGroup direction="column">
          <Badge variant="default">Feature A</Badge>
          <Badge variant="success">Feature B</Badge>
          <Badge variant="warning">Feature C</Badge>
          <Badge variant="error">Feature D</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Large Spacing</h3>
        <BadgeGroup spacing="lg">
          <Badge variant="outline" size="lg">Design</Badge>
          <Badge variant="outline" size="lg">Development</Badge>
          <Badge variant="outline" size="lg">Testing</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Many Badges (Wrapping)</h3>
        <div className="max-w-md">
          <BadgeGroup>
            {['React', 'Vue', 'Angular', 'Svelte', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python', 'Java', 'C++'].map(tech => <Badge key={tech} variant="default" size="sm">{tech}</Badge>)}
          </BadgeGroup>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Status Indicators</h3>
        <BadgeGroup spacing="md">
          <Badge variant="success" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>}>
            Available
          </Badge>
          
          <Badge variant="warning" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>}>
            Limited
          </Badge>
          
          <Badge variant="error" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>}>
            Unavailable
          </Badge>
        </BadgeGroup>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(J=(H=N.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var O,$,K;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const tags = ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js'];
    const [activeTags, setActiveTags] = React.useState(tags);
    const removeTag = (tagToRemove: string) => {
      setActiveTags(activeTags.filter(tag => tag !== tagToRemove));
    };
    const addTag = (tag: string) => {
      if (!activeTags.includes(tag)) {
        setActiveTags([...activeTags, tag]);
      }
    };
    return <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Active Tags</h3>
          <BadgeGroup>
            {activeTags.map(tag => <Badge key={tag} variant="info" removable onRemove={() => removeTag(tag)}>
                {tag}
              </Badge>)}
            {activeTags.length === 0 && <span className="text-gray-500 text-sm">No tags selected</span>}
          </BadgeGroup>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Available Tags</h3>
          <BadgeGroup>
            {tags.filter(tag => !activeTags.includes(tag)).map(tag => <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-gray-50" onClick={() => addTag(tag)}>
                + {tag}
              </Badge>)}
          </BadgeGroup>
        </div>
      </div>;
  },
  parameters: {
    layout: 'padded'
  }
}`,...(K=($=x.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const me=["Default","Variants","Sizes","Shapes","WithIcons","Removable","DotBadges","BadgeGroupStory","InteractiveBadges"];export{N as BadgeGroupStory,c as Default,b as DotBadges,x as InteractiveBadges,v as Removable,p as Shapes,g as Sizes,u as Variants,f as WithIcons,me as __namedExportsOrder,le as default};
