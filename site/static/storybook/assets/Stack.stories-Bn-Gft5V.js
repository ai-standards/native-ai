import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as x}from"./index-DHZDe_v1.js";import{c as ae}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const te={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-12"},ne={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},re={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},a=({direction:t="vertical",spacing:f="md",align:Q="stretch",justify:X="start",wrap:Y=!1,divider:k,className:Z,children:g,...ee})=>{const N=x.Children.toArray(g);return e.jsxDEV("div",{className:ae("flex",t==="vertical"?"flex-col":"flex-row",te[f],ne[Q],re[X],Y&&"flex-wrap",Z),...ee,children:k?N.map((se,b)=>e.jsxDEV(x.Fragment,{children:[se,b<N.length-1&&e.jsxDEV("div",{className:"flex-shrink-0",children:k},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.tsx",lineNumber:71,columnNumber:17},void 0)]},b,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.tsx",lineNumber:68,columnNumber:13},void 0)):g},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.tsx",lineNumber:54,columnNumber:5},void 0)};try{a.displayName="Stack",a.__docgenInfo={description:"",displayName:"Stack",props:{direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},spacing:{defaultValue:{value:"md"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},align:{defaultValue:{value:"stretch"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'}]}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"ReactNode"}}}}}catch{}const le={title:"Surface/Stack",component:a,parameters:{layout:"centered",docs:{description:{component:"A layout component for stacking elements vertically or horizontally with consistent spacing. Includes support for dividers between items."}}},tags:["autodocs"],argTypes:{direction:{control:"select",options:["vertical","horizontal"],description:"The stacking direction"},spacing:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"],description:"The spacing between stack items"},align:{control:"select",options:["start","center","end","stretch"],description:"Cross-axis alignment of items"},justify:{control:"select",options:["start","center","end","between","around","evenly"],description:"Main-axis distribution of items"},wrap:{control:"boolean",description:"Whether items should wrap to new lines"},divider:{control:!1,description:"Element to render between stack items"},children:{control:!1,description:"The items to stack"}}},s=({children:t,color:f="bg-purple-100"})=>e.jsxDEV("div",{className:`${f} border border-purple-300 rounded px-3 py-2 text-sm font-medium text-purple-800`,children:t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:57,columnNumber:3},void 0),n={args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"First Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:66,columnNumber:9},void 0),e.jsxDEV(s,{children:"Second Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:67,columnNumber:9},void 0),e.jsxDEV(s,{children:"Third Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:68,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:65,columnNumber:7},void 0)}},r={args:{direction:"horizontal",spacing:"md",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"Left"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:80,columnNumber:9},void 0),e.jsxDEV(s,{children:"Center"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:81,columnNumber:9},void 0),e.jsxDEV(s,{children:"Right"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:82,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:79,columnNumber:7},void 0)}},c={args:{direction:"vertical",spacing:"sm",divider:e.jsxDEV("hr",{className:"border-gray-300"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:92,columnNumber:14},void 0),children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"Section One"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:95,columnNumber:9},void 0),e.jsxDEV(s,{children:"Section Two"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:96,columnNumber:9},void 0),e.jsxDEV(s,{children:"Section Three"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:97,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:94,columnNumber:7},void 0)}},i={args:{direction:"horizontal",spacing:"md",divider:e.jsxDEV("div",{className:"w-px h-6 bg-gray-300"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:107,columnNumber:14},void 0),children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"Home"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:110,columnNumber:9},void 0),e.jsxDEV(s,{children:"About"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:111,columnNumber:9},void 0),e.jsxDEV(s,{children:"Contact"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:112,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:109,columnNumber:7},void 0)}},o={args:{align:"center",justify:"center",spacing:"lg",className:"h-64 border-2 border-dashed border-gray-300",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"Centered"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:126,columnNumber:9},void 0),e.jsxDEV(s,{children:"Content"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:127,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:125,columnNumber:7},void 0)}},m={render:()=>e.jsxDEV("div",{className:"space-y-8",children:["none","xs","sm","md","lg","xl","2xl"].map(t=>e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("h4",{className:"text-sm font-medium text-gray-700",children:["Spacing: ",t]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:138,columnNumber:11},void 0),e.jsxDEV(a,{spacing:t,className:"p-4 border border-gray-200 rounded",children:[e.jsxDEV(s,{children:"Item A"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:140,columnNumber:13},void 0),e.jsxDEV(s,{children:"Item B"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:141,columnNumber:13},void 0),e.jsxDEV(s,{children:"Item C"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:142,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:139,columnNumber:11},void 0)]},t,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:137,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:135,columnNumber:5},void 0)},l={render:()=>e.jsxDEV("div",{className:"space-y-8",children:["start","center","end","stretch"].map(t=>e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("h4",{className:"text-sm font-medium text-gray-700",children:["Align: ",t]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:155,columnNumber:11},void 0),e.jsxDEV(a,{align:t,spacing:"md",className:"w-64 p-4 border border-gray-200 rounded",children:[e.jsxDEV(s,{children:"Short"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:157,columnNumber:13},void 0),e.jsxDEV(s,{children:"Medium Length Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:158,columnNumber:13},void 0),e.jsxDEV(s,{children:"Very Long Content Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:159,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:156,columnNumber:11},void 0)]},t,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:154,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:152,columnNumber:5},void 0)},u={render:()=>e.jsxDEV(a,{spacing:"lg",className:"w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:[e.jsxDEV("div",{children:[e.jsxDEV("h2",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Contact Form"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:171,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"Fill out the form below to get in touch."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:172,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:170,columnNumber:7},void 0),e.jsxDEV(a,{spacing:"md",children:[e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:177,columnNumber:11},void 0),e.jsxDEV("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:178,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:176,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:186,columnNumber:11},void 0),e.jsxDEV("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:187,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:185,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:195,columnNumber:11},void 0),e.jsxDEV("textarea",{rows:4,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your message"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:196,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:194,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:175,columnNumber:7},void 0),e.jsxDEV(a,{direction:"horizontal",spacing:"sm",justify:"end",children:[e.jsxDEV("button",{className:"px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50",children:"Cancel"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:205,columnNumber:9},void 0),e.jsxDEV("button",{className:"px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"Send Message"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:208,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:204,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:169,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using Stack for a form layout with consistent vertical spacing between fields."}}}},d={render:()=>e.jsxDEV(a,{direction:"horizontal",spacing:"none",divider:e.jsxDEV("div",{className:"w-px h-6 bg-gray-300"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:228,columnNumber:16},void 0),className:"bg-white border border-gray-200 rounded-lg p-1",children:[e.jsxDEV("button",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Dashboard"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:231,columnNumber:7},void 0),e.jsxDEV("button",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Projects"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:234,columnNumber:7},void 0),e.jsxDEV("button",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Team"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:237,columnNumber:7},void 0),e.jsxDEV("button",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Settings"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:240,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:225,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using Stack with dividers for a horizontal navigation menu."}}}},p={render:()=>e.jsxDEV(a,{spacing:"xl",className:"w-96 p-8 bg-white",children:[e.jsxDEV(a,{spacing:"sm",children:[e.jsxDEV("h1",{className:"text-2xl font-bold text-gray-900",children:"Article Title"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:258,columnNumber:9},void 0),e.jsxDEV("div",{className:"text-sm text-gray-500",children:"Published on March 15, 2024"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:259,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:257,columnNumber:7},void 0),e.jsxDEV("div",{className:"prose text-gray-700",children:e.jsxDEV("p",{children:"This is the introduction paragraph of the article. It provides an overview of what the reader can expect to learn from this content."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:263,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:262,columnNumber:7},void 0),e.jsxDEV(a,{spacing:"md",divider:e.jsxDEV("div",{className:"h-px bg-gray-200"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:269,columnNumber:36},void 0),children:[e.jsxDEV("div",{children:[e.jsxDEV("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Section One"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:271,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-gray-700",children:"Content for the first section goes here."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:272,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:270,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Section Two"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:276,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-gray-700",children:"Content for the second section goes here."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:277,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:275,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Conclusion"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:281,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-gray-700",children:"Final thoughts and summary of the article."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:282,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:280,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:269,columnNumber:7},void 0),e.jsxDEV(a,{direction:"horizontal",spacing:"sm",className:"pt-4 border-t border-gray-200",children:[e.jsxDEV("span",{className:"text-sm text-gray-500",children:"Tags:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:287,columnNumber:9},void 0),e.jsxDEV("div",{className:"px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded",children:"React"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:288,columnNumber:9},void 0),e.jsxDEV("div",{className:"px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded",children:"Layout"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:289,columnNumber:9},void 0),e.jsxDEV("div",{className:"px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded",children:"Components"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:290,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:286,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/stack/Stack.stories.tsx",lineNumber:256,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using Stack for article layout with sections, dividers, and metadata."}}}};var v,y,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <>
        <StackItem>First Item</StackItem>
        <StackItem>Second Item</StackItem>
        <StackItem>Third Item</StackItem>
      </>
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,j,D;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    spacing: 'md',
    children: <>
        <StackItem>Left</StackItem>
        <StackItem>Center</StackItem>
        <StackItem>Right</StackItem>
      </>
  }
}`,...(D=(j=r.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,V,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    spacing: 'sm',
    divider: <hr className="border-gray-300" />,
    children: <>
        <StackItem>Section One</StackItem>
        <StackItem>Section Two</StackItem>
        <StackItem>Section Three</StackItem>
      </>
  }
}`,...(U=(V=c.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var I,w,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    spacing: 'md',
    divider: <div className="w-px h-6 bg-gray-300" />,
    children: <>
        <StackItem>Home</StackItem>
        <StackItem>About</StackItem>
        <StackItem>Contact</StackItem>
      </>
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var T,z,F;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    align: 'center',
    justify: 'center',
    spacing: 'lg',
    className: 'h-64 border-2 border-dashed border-gray-300',
    children: <>
        <StackItem>Centered</StackItem>
        <StackItem>Content</StackItem>
      </>
  }
}`,...(F=(z=o.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var A,M,L;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(spacing => <div key={spacing} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Spacing: {spacing}</h4>
          <Stack spacing={spacing} className="p-4 border border-gray-200 rounded">
            <StackItem>Item A</StackItem>
            <StackItem>Item B</StackItem>
            <StackItem>Item C</StackItem>
          </Stack>
        </div>)}
    </div>
}`,...(L=(M=m.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var _,R,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(['start', 'center', 'end', 'stretch'] as const).map(align => <div key={align} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Align: {align}</h4>
          <Stack align={align} spacing="md" className="w-64 p-4 border border-gray-200 rounded">
            <StackItem>Short</StackItem>
            <StackItem>Medium Length Item</StackItem>
            <StackItem>Very Long Content Item</StackItem>
          </Stack>
        </div>)}
    </div>
}`,...(O=(R=l.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var q,H,W;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Stack spacing="lg" className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Form</h2>
        <p className="text-sm text-gray-600">Fill out the form below to get in touch.</p>
      </div>
      
      <Stack spacing="md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message" />
        </div>
      </Stack>
      
      <Stack direction="horizontal" spacing="sm" justify="end">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack for a form layout with consistent vertical spacing between fields.'
      }
    }
  }
}`,...(W=(H=u.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var P,B,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="none" divider={<div className="w-px h-6 bg-gray-300" />} className="bg-white border border-gray-200 rounded-lg p-1">
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Dashboard
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Projects
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Team
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Settings
      </button>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack with dividers for a horizontal navigation menu.'
      }
    }
  }
}`,...($=(B=d.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Stack spacing="xl" className="w-96 p-8 bg-white">
      <Stack spacing="sm">
        <h1 className="text-2xl font-bold text-gray-900">Article Title</h1>
        <div className="text-sm text-gray-500">Published on March 15, 2024</div>
      </Stack>
      
      <div className="prose text-gray-700">
        <p>
          This is the introduction paragraph of the article. It provides an overview 
          of what the reader can expect to learn from this content.
        </p>
      </div>
      
      <Stack spacing="md" divider={<div className="h-px bg-gray-200" />}>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Section One</h2>
          <p className="text-gray-700">Content for the first section goes here.</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Section Two</h2>
          <p className="text-gray-700">Content for the second section goes here.</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-700">Final thoughts and summary of the article.</p>
        </div>
      </Stack>
      
      <Stack direction="horizontal" spacing="sm" className="pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-500">Tags:</span>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">React</div>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Layout</div>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Components</div>
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack for article layout with sections, dividers, and metadata.'
      }
    }
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ue=["Default","Horizontal","WithDivider","HorizontalWithDivider","CenteredContent","SpacingVariations","AlignmentOptions","FormLayout","NavigationMenu","ArticleContent"];export{l as AlignmentOptions,p as ArticleContent,o as CenteredContent,n as Default,u as FormLayout,r as Horizontal,i as HorizontalWithDivider,d as NavigationMenu,m as SpacingVariations,c as WithDivider,ue as __namedExportsOrder,le as default};
