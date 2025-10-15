import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{c as Y}from"./cn-BaF2GUMg.js";import"./index-DHZDe_v1.js";import"./_commonjsHelpers-BosuxZz1.js";const Z={xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px","2xl":"48px","3xl":"64px","4xl":"96px"},s=({size:r="md",axis:i="both",flex:G=!1,className:J,style:K,...Q})=>{const N=Z[r],X={...i==="horizontal"||i==="both"?{width:N}:{},...i==="vertical"||i==="both"?{height:N}:{},...K};return e.jsxDEV("div",{className:Y("shrink-0",G&&"flex-1",J),style:X,...Q},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.tsx",lineNumber:38,columnNumber:5},void 0)};try{s.displayName="Spacer",s.__docgenInfo={description:"",displayName:"Spacer",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'}]}},axis:{defaultValue:{value:"both"},description:"",name:"axis",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},flex:{defaultValue:{value:"false"},description:"",name:"flex",required:!1,type:{name:"boolean"}}}}}catch{}const ne={title:"Surface/Spacer",component:s,parameters:{layout:"centered",docs:{description:{component:"A flexible spacing component that creates consistent whitespace between elements. Can be used for fixed spacing or flexible space distribution."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl"],description:"The size of the spacer"},axis:{control:"select",options:["horizontal","vertical","both"],description:"Which axis/axes to apply spacing to"},flex:{control:"boolean",description:"Whether the spacer should grow to fill available space"}}},n=({children:r,direction:i="row"})=>e.jsxDEV("div",{className:`flex ${i==="column"?"flex-col":"flex-row"} items-center p-4 border-2 border-dashed border-blue-300 bg-blue-50 rounded`,children:r},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:39,columnNumber:3},void 0),a=({children:r})=>e.jsxDEV("div",{className:"px-3 py-2 bg-gray-200 border border-gray-400 rounded text-sm font-medium",children:r},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:47,columnNumber:3},void 0),o={render:()=>e.jsxDEV(n,{children:[e.jsxDEV(a,{children:"Item 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:55,columnNumber:7},void 0),e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:56,columnNumber:7},void 0),e.jsxDEV(a,{children:"Item 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:57,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:54,columnNumber:5},void 0)},t={render:()=>e.jsxDEV("div",{className:"space-y-6",children:["xs","sm","md","lg","xl","2xl","3xl","4xl"].map(r=>e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("h4",{className:"text-sm font-medium text-gray-700",children:["Size: ",r]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:67,columnNumber:11},void 0),e.jsxDEV(n,{children:[e.jsxDEV(a,{children:"Left"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:69,columnNumber:13},void 0),e.jsxDEV(s,{size:r,axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:70,columnNumber:13},void 0),e.jsxDEV(a,{children:"Right"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:71,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:68,columnNumber:11},void 0)]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:66,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:64,columnNumber:5},void 0)},c={render:()=>e.jsxDEV(n,{direction:"column",children:[e.jsxDEV(a,{children:"Top Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:82,columnNumber:7},void 0),e.jsxDEV(s,{size:"lg",axis:"vertical"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:83,columnNumber:7},void 0),e.jsxDEV(a,{children:"Bottom Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:84,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:81,columnNumber:5},void 0)},m={render:()=>e.jsxDEV(n,{children:[e.jsxDEV(a,{children:"Left Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:92,columnNumber:7},void 0),e.jsxDEV(s,{size:"xl",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:93,columnNumber:7},void 0),e.jsxDEV(a,{children:"Right Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:94,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:91,columnNumber:5},void 0)},l={render:()=>e.jsxDEV(n,{children:[e.jsxDEV(a,{children:"Left"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:102,columnNumber:7},void 0),e.jsxDEV(s,{flex:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:103,columnNumber:7},void 0),e.jsxDEV(a,{children:"Right"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:104,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:101,columnNumber:5},void 0),parameters:{docs:{description:{story:"Use flex prop to create a spacer that grows to fill all available space, pushing items to opposite ends."}}}},p={render:()=>e.jsxDEV("div",{className:"w-full max-w-md bg-white border border-gray-200 rounded-lg p-4",children:e.jsxDEV("div",{className:"flex items-center",children:[e.jsxDEV("div",{className:"w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold",children:"L"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:120,columnNumber:9},void 0),e.jsxDEV(s,{size:"sm",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:123,columnNumber:9},void 0),e.jsxDEV("span",{className:"font-semibold text-gray-900",children:"Brand Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:124,columnNumber:9},void 0),e.jsxDEV(s,{flex:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:125,columnNumber:9},void 0),e.jsxDEV("button",{className:"px-3 py-1 text-sm text-gray-600 hover:text-gray-900",children:"Menu"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:126,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:119,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:118,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using spacers in a navigation bar - fixed spacing after logo, flexible spacing before menu."}}}},u={render:()=>e.jsxDEV("div",{className:"w-80 p-6 bg-white border border-gray-200 rounded-lg",children:e.jsxDEV("div",{className:"flex flex-col",children:[e.jsxDEV("label",{className:"text-sm font-medium text-gray-700",children:"Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:145,columnNumber:9},void 0),e.jsxDEV(s,{size:"xs",axis:"vertical"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:146,columnNumber:9},void 0),e.jsxDEV("input",{type:"text",className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:147,columnNumber:9},void 0),e.jsxDEV(s,{size:"lg",axis:"vertical"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:153,columnNumber:9},void 0),e.jsxDEV("label",{className:"text-sm font-medium text-gray-700",children:"Email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:155,columnNumber:9},void 0),e.jsxDEV(s,{size:"xs",axis:"vertical"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:156,columnNumber:9},void 0),e.jsxDEV("input",{type:"email",className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:157,columnNumber:9},void 0),e.jsxDEV(s,{size:"xl",axis:"vertical"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:163,columnNumber:9},void 0),e.jsxDEV("div",{className:"flex",children:[e.jsxDEV("button",{className:"px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:166,columnNumber:11},void 0),e.jsxDEV(s,{size:"sm",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:169,columnNumber:11},void 0),e.jsxDEV("button",{className:"px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Submit"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:170,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:165,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:144,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:143,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using spacers in a form for consistent vertical and horizontal spacing."}}}},d={render:()=>e.jsxDEV("div",{className:"w-72 bg-white border border-gray-200 rounded-lg shadow-sm",children:[e.jsxDEV("div",{className:"p-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold text-gray-900",children:"Product Card"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:190,columnNumber:9},void 0),e.jsxDEV(s,{size:"xs",axis:"vertical"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:191,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"Description of the product goes here."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:192,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:189,columnNumber:7},void 0),e.jsxDEV("div",{className:"px-4 pb-4",children:e.jsxDEV("div",{className:"flex items-center",children:[e.jsxDEV("span",{className:"text-xl font-bold text-green-600",children:"$29.99"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:197,columnNumber:11},void 0),e.jsxDEV(s,{flex:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:198,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex",children:[e.jsxDEV("button",{className:"px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Details"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:200,columnNumber:13},void 0),e.jsxDEV(s,{size:"sm",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:203,columnNumber:13},void 0),e.jsxDEV("button",{className:"px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Add to Cart"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:204,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:199,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:196,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:195,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:188,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using spacers in a card layout for price/actions alignment."}}}},f={render:()=>e.jsxDEV("div",{className:"w-full max-w-2xl bg-white border border-gray-200 rounded-lg p-3",children:e.jsxDEV("div",{className:"flex items-center",children:[e.jsxDEV("div",{className:"flex items-center",children:[e.jsxDEV("button",{className:"p-2 hover:bg-gray-100 rounded",children:e.jsxDEV("span",{className:"text-sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:227,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:226,columnNumber:11},void 0),e.jsxDEV(s,{size:"xs",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:229,columnNumber:11},void 0),e.jsxDEV("button",{className:"p-2 hover:bg-gray-100 rounded",children:e.jsxDEV("span",{className:"text-sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:231,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:230,columnNumber:11},void 0),e.jsxDEV(s,{size:"xs",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:233,columnNumber:11},void 0),e.jsxDEV("button",{className:"p-2 hover:bg-gray-100 rounded",children:e.jsxDEV("span",{className:"text-sm",children:"️"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:235,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:234,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:225,columnNumber:9},void 0),e.jsxDEV(s,{size:"md",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:239,columnNumber:9},void 0),e.jsxDEV("div",{className:"flex-1 flex items-center justify-center",children:e.jsxDEV("span",{className:"text-sm text-gray-600",children:"document.txt"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:242,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:241,columnNumber:9},void 0),e.jsxDEV(s,{size:"md",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:245,columnNumber:9},void 0),e.jsxDEV("div",{className:"flex items-center",children:[e.jsxDEV("span",{className:"text-xs text-gray-500",children:"100%"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:248,columnNumber:11},void 0),e.jsxDEV(s,{size:"sm",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:249,columnNumber:11},void 0),e.jsxDEV("button",{className:"px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50",children:"Settings"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:250,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:247,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:224,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:223,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using spacers in a toolbar layout with grouped actions and flexible center content."}}}},x={render:()=>e.jsxDEV("div",{className:"space-y-8",children:[e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("h4",{className:"text-sm font-medium text-gray-700",children:"Horizontal Axis (width only)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:270,columnNumber:9},void 0),e.jsxDEV(n,{children:[e.jsxDEV(a,{children:"A"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:272,columnNumber:11},void 0),e.jsxDEV(s,{size:"lg",axis:"horizontal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:273,columnNumber:11},void 0),e.jsxDEV(a,{children:"B"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:274,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:271,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:269,columnNumber:7},void 0),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("h4",{className:"text-sm font-medium text-gray-700",children:"Vertical Axis (height only)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:279,columnNumber:9},void 0),e.jsxDEV(n,{direction:"column",children:[e.jsxDEV(a,{children:"A"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:281,columnNumber:11},void 0),e.jsxDEV(s,{size:"lg",axis:"vertical"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:282,columnNumber:11},void 0),e.jsxDEV(a,{children:"B"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:283,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:280,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:278,columnNumber:7},void 0),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("h4",{className:"text-sm font-medium text-gray-700",children:"Both Axes (width and height)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:288,columnNumber:9},void 0),e.jsxDEV("div",{className:"flex items-start space-x-4",children:[e.jsxDEV(a,{children:"Before"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:290,columnNumber:11},void 0),e.jsxDEV(s,{size:"lg",axis:"both",className:"bg-yellow-100 border border-yellow-300 rounded"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:291,columnNumber:11},void 0),e.jsxDEV(a,{children:"After"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:292,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:289,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:287,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/spacer/Spacer.stories.tsx",lineNumber:268,columnNumber:5},void 0),parameters:{docs:{description:{story:"Comparison of different axis options showing how spacing is applied."}}}};var b,v,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <DemoBox>
      <DemoItem>Item 1</DemoItem>
      <Spacer />
      <DemoItem>Item 2</DemoItem>
    </DemoBox>
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var D,y,h;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => <div key={size} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Size: {size}</h4>
          <DemoBox>
            <DemoItem>Left</DemoItem>
            <Spacer size={size} axis="horizontal" />
            <DemoItem>Right</DemoItem>
          </DemoBox>
        </div>)}
    </div>
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var j,k,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <DemoBox direction="column">
      <DemoItem>Top Item</DemoItem>
      <Spacer size="lg" axis="vertical" />
      <DemoItem>Bottom Item</DemoItem>
    </DemoBox>
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var E,V,U;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <DemoBox>
      <DemoItem>Left Item</DemoItem>
      <Spacer size="xl" axis="horizontal" />
      <DemoItem>Right Item</DemoItem>
    </DemoBox>
}`,...(U=(V=m.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var z,w,I;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <DemoBox>
      <DemoItem>Left</DemoItem>
      <Spacer flex />
      <DemoItem>Right</DemoItem>
    </DemoBox>,
  parameters: {
    docs: {
      description: {
        story: 'Use flex prop to create a spacer that grows to fill all available space, pushing items to opposite ends.'
      }
    }
  }
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var B,A,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold">
          L
        </div>
        <Spacer size="sm" axis="horizontal" />
        <span className="font-semibold text-gray-900">Brand Name</span>
        <Spacer flex />
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
          Menu
        </button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a navigation bar - fixed spacing after logo, flexible spacing before menu.'
      }
    }
  }
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var L,_,R;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="w-80 p-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <Spacer size="xs" axis="vertical" />
        <input type="text" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter name" />
        
        <Spacer size="lg" axis="vertical" />
        
        <label className="text-sm font-medium text-gray-700">Email</label>
        <Spacer size="xs" axis="vertical" />
        <input type="email" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter email" />
        
        <Spacer size="xl" axis="vertical" />
        
        <div className="flex">
          <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
            Cancel
          </button>
          <Spacer size="sm" axis="horizontal" />
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a form for consistent vertical and horizontal spacing.'
      }
    }
  }
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var F,T,H;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">Product Card</h3>
        <Spacer size="xs" axis="vertical" />
        <p className="text-sm text-gray-600">Description of the product goes here.</p>
      </div>
      
      <div className="px-4 pb-4">
        <div className="flex items-center">
          <span className="text-xl font-bold text-green-600">$29.99</span>
          <Spacer flex />
          <div className="flex">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
              Details
            </button>
            <Spacer size="sm" axis="horizontal" />
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a card layout for price/actions alignment.'
      }
    }
  }
}`,...(H=(T=d.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var q,$,M;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg p-3">
      <div className="flex items-center">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm"></span>
          </button>
          <Spacer size="xs" axis="horizontal" />
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm"></span>
          </button>
          <Spacer size="xs" axis="horizontal" />
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm">️</span>
          </button>
        </div>
        
        <Spacer size="md" axis="horizontal" />
        
        <div className="flex-1 flex items-center justify-center">
          <span className="text-sm text-gray-600">document.txt</span>
        </div>
        
        <Spacer size="md" axis="horizontal" />
        
        <div className="flex items-center">
          <span className="text-xs text-gray-500">100%</span>
          <Spacer size="sm" axis="horizontal" />
          <button className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
            Settings
          </button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a toolbar layout with grouped actions and flexible center content.'
      }
    }
  }
}`,...(M=($=f.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var P,W,O;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Horizontal Axis (width only)</h4>
        <DemoBox>
          <DemoItem>A</DemoItem>
          <Spacer size="lg" axis="horizontal" />
          <DemoItem>B</DemoItem>
        </DemoBox>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Vertical Axis (height only)</h4>
        <DemoBox direction="column">
          <DemoItem>A</DemoItem>
          <Spacer size="lg" axis="vertical" />
          <DemoItem>B</DemoItem>
        </DemoBox>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Both Axes (width and height)</h4>
        <div className="flex items-start space-x-4">
          <DemoItem>Before</DemoItem>
          <Spacer size="lg" axis="both" className="bg-yellow-100 border border-yellow-300 rounded" />
          <DemoItem>After</DemoItem>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different axis options showing how spacing is applied.'
      }
    }
  }
}`,...(O=(W=x.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const ie=["Default","FixedSizes","VerticalSpacing","HorizontalSpacing","FlexSpacer","NavigationLayout","FormLayout","CardActions","ResponsiveToolbar","AxisComparison"];export{x as AxisComparison,d as CardActions,o as Default,t as FixedSizes,l as FlexSpacer,u as FormLayout,m as HorizontalSpacing,p as NavigationLayout,f as ResponsiveToolbar,c as VerticalSpacing,ie as __namedExportsOrder,ne as default};
