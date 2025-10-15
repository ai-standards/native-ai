import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as G}from"./index-DHZDe_v1.js";import{c as P}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const t=({variant:n="unordered",marker:p,spacing:i="sm",nested:f=!1,className:N,children:R,...F})=>{const O=n==="ordered"?"ol":"ul",r=p||(n==="ordered"?"decimal":"disc"),A=P("list-inside",{"list-disc":r==="disc","list-decimal":r==="decimal","list-none":r==="none","space-y-0":i==="none","space-y-1":i==="sm","space-y-2":i==="md","space-y-3":i==="lg","ml-6":f},N),B=G.useMemo(()=>({circle:{listStyleType:"circle"},square:{listStyleType:"square"},"decimal-leading-zero":{listStyleType:"decimal-leading-zero"},"lower-roman":{listStyleType:"lower-roman"},"upper-roman":{listStyleType:"upper-roman"},"lower-alpha":{listStyleType:"lower-alpha"},"upper-alpha":{listStyleType:"upper-alpha"}})[r]||{},[r]);return e.jsxDEV(O,{className:A,style:B,...F,children:R},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.tsx",lineNumber:67,columnNumber:5},void 0)},s=({marker:n,className:p,children:i,...f})=>{const N=P("leading-relaxed",{"flex items-start gap-2 list-none":n},p);return e.jsxDEV("li",{className:N,...f,children:[n&&e.jsxDEV("span",{className:"flex-shrink-0 mt-0.5",children:n},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.tsx",lineNumber:100,columnNumber:9},void 0),e.jsxDEV("span",{className:n?"flex-1":void 0,children:i},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.tsx",lineNumber:104,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.tsx",lineNumber:98,columnNumber:5},void 0)};try{t.displayName="List",t.__docgenInfo={description:"",displayName:"List",props:{variant:{defaultValue:{value:"unordered"},description:"List type",name:"variant",required:!1,type:{name:"enum",value:[{value:'"unordered"'},{value:'"ordered"'}]}},marker:{defaultValue:null,description:"List marker style",name:"marker",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"decimal"'},{value:'"circle"'},{value:'"square"'},{value:'"disc"'},{value:'"decimal-leading-zero"'},{value:'"lower-roman"'},{value:'"upper-roman"'},{value:'"lower-alpha"'},{value:'"upper-alpha"'}]}},spacing:{defaultValue:{value:"sm"},description:"Spacing between items",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},nested:{defaultValue:{value:"false"},description:"Nested level (affects indentation)",name:"nested",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="ListItem",s.__docgenInfo={description:"",displayName:"ListItem",props:{marker:{defaultValue:null,description:"Custom marker or icon",name:"marker",required:!1,type:{name:"ReactNode"}}}}}catch{}const X={title:"Content/List",component:t,parameters:{layout:"centered",docs:{description:{component:"Semantic list components with support for ordered, unordered, and custom marker styles."}}}},a={args:{children:null},render:()=>e.jsxDEV("div",{className:"max-w-md",children:e.jsxDEV(t,{children:[e.jsxDEV(s,{children:"First list item with some content"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:25,columnNumber:9},void 0),e.jsxDEV(s,{children:"Second list item with more text"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:26,columnNumber:9},void 0),e.jsxDEV(s,{children:"Third list item to demonstrate spacing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:27,columnNumber:9},void 0),e.jsxDEV(s,{children:"Fourth item showing consistent styling"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:28,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:24,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:23,columnNumber:5},void 0)},o={args:{children:null},render:()=>e.jsxDEV("div",{className:"max-w-md",children:e.jsxDEV(t,{variant:"ordered",children:[e.jsxDEV(s,{children:"Install the required dependencies"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:39,columnNumber:9},void 0),e.jsxDEV(s,{children:"Configure your development environment"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:40,columnNumber:9},void 0),e.jsxDEV(s,{children:"Run the build process"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:41,columnNumber:9},void 0),e.jsxDEV(s,{children:"Deploy to your hosting platform"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:42,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:38,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:37,columnNumber:5},void 0)},m={args:{children:null},render:()=>e.jsxDEV("div",{className:"space-y-6 max-w-md",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Disc (default)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:53,columnNumber:9},void 0),e.jsxDEV(t,{marker:"disc",children:[e.jsxDEV(s,{children:"Default disc marker"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:55,columnNumber:11},void 0),e.jsxDEV(s,{children:"Standard bullet point"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:56,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:54,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:52,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Circle"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:61,columnNumber:9},void 0),e.jsxDEV(t,{marker:"circle",children:[e.jsxDEV(s,{children:"Circle marker style"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:63,columnNumber:11},void 0),e.jsxDEV(s,{children:"Hollow bullet point"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:64,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:62,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:60,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Square"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:69,columnNumber:9},void 0),e.jsxDEV(t,{marker:"square",children:[e.jsxDEV(s,{children:"Square marker style"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:71,columnNumber:11},void 0),e.jsxDEV(s,{children:"Box-shaped bullet"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:72,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:70,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:68,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Roman Numerals"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV(t,{variant:"ordered",marker:"lower-roman",children:[e.jsxDEV(s,{children:"First item in roman numerals"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:79,columnNumber:11},void 0),e.jsxDEV(s,{children:"Second item in roman numerals"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:80,columnNumber:11},void 0),e.jsxDEV(s,{children:"Third item in roman numerals"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:81,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:78,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:76,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:51,columnNumber:5},void 0)},l={args:{children:null},render:()=>e.jsxDEV("div",{className:"space-y-6 max-w-md",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"No Spacing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:93,columnNumber:9},void 0),e.jsxDEV(t,{spacing:"none",children:[e.jsxDEV(s,{children:"Tightly packed item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:95,columnNumber:11},void 0),e.jsxDEV(s,{children:"No space between items"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:96,columnNumber:11},void 0),e.jsxDEV(s,{children:"Compact layout"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:97,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:94,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:92,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Small Spacing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:102,columnNumber:9},void 0),e.jsxDEV(t,{spacing:"sm",children:[e.jsxDEV(s,{children:"Small spacing item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:104,columnNumber:11},void 0),e.jsxDEV(s,{children:"Minimal gaps"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:105,columnNumber:11},void 0),e.jsxDEV(s,{children:"Subtle separation"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:106,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:103,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:101,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Large Spacing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:111,columnNumber:9},void 0),e.jsxDEV(t,{spacing:"lg",children:[e.jsxDEV(s,{children:"Large spacing item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:113,columnNumber:11},void 0),e.jsxDEV(s,{children:"Generous gaps"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:114,columnNumber:11},void 0),e.jsxDEV(s,{children:"Clear separation"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:115,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:112,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:110,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:91,columnNumber:5},void 0)},c={args:{children:null},render:()=>e.jsxDEV("div",{className:"max-w-md",children:e.jsxDEV(t,{children:[e.jsxDEV(s,{children:"Main topic one"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:127,columnNumber:9},void 0),e.jsxDEV(s,{children:["Main topic two",e.jsxDEV(t,{nested:!0,spacing:"sm",children:[e.jsxDEV(s,{children:"Subtopic A"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:131,columnNumber:13},void 0),e.jsxDEV(s,{children:"Subtopic B"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:132,columnNumber:13},void 0),e.jsxDEV(s,{children:["Subtopic C",e.jsxDEV(t,{nested:!0,spacing:"sm",children:[e.jsxDEV(s,{children:"Sub-subtopic 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:136,columnNumber:17},void 0),e.jsxDEV(s,{children:"Sub-subtopic 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:137,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:135,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:133,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:130,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:128,columnNumber:9},void 0),e.jsxDEV(s,{children:"Main topic three"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:142,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:126,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:125,columnNumber:5},void 0)},u={args:{children:null},render:()=>e.jsxDEV("div",{className:"space-y-6 max-w-md",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Emoji Markers"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:153,columnNumber:9},void 0),e.jsxDEV(t,{marker:"none",children:[e.jsxDEV(s,{marker:"",children:"Goal-oriented task"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:155,columnNumber:11},void 0),e.jsxDEV(s,{marker:"",children:"High priority item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:156,columnNumber:11},void 0),e.jsxDEV(s,{marker:"",children:"Creative idea"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:157,columnNumber:11},void 0),e.jsxDEV(s,{marker:"",children:"Technical requirement"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:158,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:154,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:152,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Icon Markers"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:163,columnNumber:9},void 0),e.jsxDEV(t,{marker:"none",children:[e.jsxDEV(s,{marker:e.jsxDEV("span",{className:"text-green-500"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:165,columnNumber:29},void 0),children:"Completed task"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:165,columnNumber:11},void 0),e.jsxDEV(s,{marker:e.jsxDEV("span",{className:"text-yellow-500",children:"⏳"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:166,columnNumber:29},void 0),children:"In progress task"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:166,columnNumber:11},void 0),e.jsxDEV(s,{marker:e.jsxDEV("span",{className:"text-red-500"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:167,columnNumber:29},void 0),children:"Failed task"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:167,columnNumber:11},void 0),e.jsxDEV(s,{marker:e.jsxDEV("span",{className:"text-blue-500",children:"→"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:168,columnNumber:29},void 0),children:"Next action"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:168,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:164,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:162,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Status Indicators"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:173,columnNumber:9},void 0),e.jsxDEV(t,{marker:"none",children:[e.jsxDEV(s,{marker:e.jsxDEV("span",{className:"inline-block w-2 h-2 bg-green-500 rounded-full"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:175,columnNumber:29},void 0),children:"System operational"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:175,columnNumber:11},void 0),e.jsxDEV(s,{marker:e.jsxDEV("span",{className:"inline-block w-2 h-2 bg-yellow-500 rounded-full"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:178,columnNumber:29},void 0),children:"System degraded"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:178,columnNumber:11},void 0),e.jsxDEV(s,{marker:e.jsxDEV("span",{className:"inline-block w-2 h-2 bg-red-500 rounded-full"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:181,columnNumber:29},void 0),children:"System down"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:181,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:174,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:172,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:151,columnNumber:5},void 0)},d={args:{children:null},render:()=>e.jsxDEV("div",{className:"max-w-lg",children:[e.jsxDEV("h2",{className:"text-lg font-semibold mb-4",children:"Project Requirements"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:194,columnNumber:7},void 0),e.jsxDEV(t,{variant:"ordered",spacing:"md",children:[e.jsxDEV(s,{children:[e.jsxDEV("strong",{children:"Setup Phase"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:198,columnNumber:11},void 0),e.jsxDEV(t,{nested:!0,spacing:"sm",children:[e.jsxDEV(s,{children:"Install dependencies"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:200,columnNumber:13},void 0),e.jsxDEV(s,{children:"Configure environment variables"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:201,columnNumber:13},void 0),e.jsxDEV(s,{children:"Setup database connections"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:202,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:199,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:197,columnNumber:9},void 0),e.jsxDEV(s,{children:[e.jsxDEV("strong",{children:"Development Phase"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:207,columnNumber:11},void 0),e.jsxDEV(t,{nested:!0,spacing:"sm",children:[e.jsxDEV(s,{children:"Implement core features"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:209,columnNumber:13},void 0),e.jsxDEV(s,{children:"Write comprehensive tests"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:210,columnNumber:13},void 0),e.jsxDEV(s,{children:["Code review process",e.jsxDEV(t,{nested:!0,marker:"none",spacing:"sm",children:[e.jsxDEV(s,{marker:"",children:"Peer review"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:214,columnNumber:17},void 0),e.jsxDEV(s,{marker:"",children:"Automated testing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:215,columnNumber:17},void 0),e.jsxDEV(s,{marker:"",children:"Security audit"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:216,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:213,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:211,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:208,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:206,columnNumber:9},void 0),e.jsxDEV(s,{children:[e.jsxDEV("strong",{children:"Deployment Phase"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:223,columnNumber:11},void 0),e.jsxDEV(t,{nested:!0,spacing:"sm",children:[e.jsxDEV(s,{children:"Staging deployment"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:225,columnNumber:13},void 0),e.jsxDEV(s,{children:"Performance testing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:226,columnNumber:13},void 0),e.jsxDEV(s,{children:"Production release"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:227,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:224,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:222,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:196,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/list/List.stories.tsx",lineNumber:193,columnNumber:5},void 0)};var v,k,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="max-w-md">
      <List>
        <ListItem>First list item with some content</ListItem>
        <ListItem>Second list item with more text</ListItem>
        <ListItem>Third list item to demonstrate spacing</ListItem>
        <ListItem>Fourth item showing consistent styling</ListItem>
      </List>
    </div>
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var x,L,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="max-w-md">
      <List variant="ordered">
        <ListItem>Install the required dependencies</ListItem>
        <ListItem>Configure your development environment</ListItem>
        <ListItem>Run the build process</ListItem>
        <ListItem>Deploy to your hosting platform</ListItem>
      </List>
    </div>
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var j,g,h;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">Disc (default)</h3>
        <List marker="disc">
          <ListItem>Default disc marker</ListItem>
          <ListItem>Standard bullet point</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Circle</h3>
        <List marker="circle">
          <ListItem>Circle marker style</ListItem>
          <ListItem>Hollow bullet point</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Square</h3>
        <List marker="square">
          <ListItem>Square marker style</ListItem>
          <ListItem>Box-shaped bullet</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Roman Numerals</h3>
        <List variant="ordered" marker="lower-roman">
          <ListItem>First item in roman numerals</ListItem>
          <ListItem>Second item in roman numerals</ListItem>
          <ListItem>Third item in roman numerals</ListItem>
        </List>
      </div>
    </div>
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,I,V;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">No Spacing</h3>
        <List spacing="none">
          <ListItem>Tightly packed item</ListItem>
          <ListItem>No space between items</ListItem>
          <ListItem>Compact layout</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Small Spacing</h3>
        <List spacing="sm">
          <ListItem>Small spacing item</ListItem>
          <ListItem>Minimal gaps</ListItem>
          <ListItem>Subtle separation</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Large Spacing</h3>
        <List spacing="lg">
          <ListItem>Large spacing item</ListItem>
          <ListItem>Generous gaps</ListItem>
          <ListItem>Clear separation</ListItem>
        </List>
      </div>
    </div>
}`,...(V=(I=l.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var E,U,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="max-w-md">
      <List>
        <ListItem>Main topic one</ListItem>
        <ListItem>
          Main topic two
          <List nested spacing="sm">
            <ListItem>Subtopic A</ListItem>
            <ListItem>Subtopic B</ListItem>
            <ListItem>
              Subtopic C
              <List nested spacing="sm">
                <ListItem>Sub-subtopic 1</ListItem>
                <ListItem>Sub-subtopic 2</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>Main topic three</ListItem>
      </List>
    </div>
}`,...(S=(U=c.parameters)==null?void 0:U.docs)==null?void 0:S.source}}};var w,C,M;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">Emoji Markers</h3>
        <List marker="none">
          <ListItem marker="">Goal-oriented task</ListItem>
          <ListItem marker="">High priority item</ListItem>
          <ListItem marker="">Creative idea</ListItem>
          <ListItem marker="">Technical requirement</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Icon Markers</h3>
        <List marker="none">
          <ListItem marker={<span className="text-green-500"></span>}>Completed task</ListItem>
          <ListItem marker={<span className="text-yellow-500">⏳</span>}>In progress task</ListItem>
          <ListItem marker={<span className="text-red-500"></span>}>Failed task</ListItem>
          <ListItem marker={<span className="text-blue-500">→</span>}>Next action</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Status Indicators</h3>
        <List marker="none">
          <ListItem marker={<span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>}>
            System operational
          </ListItem>
          <ListItem marker={<span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>}>
            System degraded
          </ListItem>
          <ListItem marker={<span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>}>
            System down
          </ListItem>
        </List>
      </div>
    </div>
}`,...(M=(C=u.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var q,_,T;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Project Requirements</h2>
      
      <List variant="ordered" spacing="md">
        <ListItem>
          <strong>Setup Phase</strong>
          <List nested spacing="sm">
            <ListItem>Install dependencies</ListItem>
            <ListItem>Configure environment variables</ListItem>
            <ListItem>Setup database connections</ListItem>
          </List>
        </ListItem>
        
        <ListItem>
          <strong>Development Phase</strong>
          <List nested spacing="sm">
            <ListItem>Implement core features</ListItem>
            <ListItem>Write comprehensive tests</ListItem>
            <ListItem>
              Code review process
              <List nested marker="none" spacing="sm">
                <ListItem marker="">Peer review</ListItem>
                <ListItem marker="">Automated testing</ListItem>
                <ListItem marker="">Security audit</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        
        <ListItem>
          <strong>Deployment Phase</strong>
          <List nested spacing="sm">
            <ListItem>Staging deployment</ListItem>
            <ListItem>Performance testing</ListItem>
            <ListItem>Production release</ListItem>
          </List>
        </ListItem>
      </List>
    </div>
}`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const Y=["UnorderedList","OrderedList","MarkerVariants","SpacingOptions","NestedLists","CustomMarkers","MixedContent"];export{u as CustomMarkers,m as MarkerVariants,d as MixedContent,c as NestedLists,o as OrderedList,l as SpacingOptions,a as UnorderedList,Y as __namedExportsOrder,X as default};
