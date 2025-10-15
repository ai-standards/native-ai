import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as x,R as X}from"./index-DHZDe_v1.js";import{c as T}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const W=x.createContext(void 0),U=()=>{const s=x.useContext(W);if(!s)throw new Error("Tab components must be used within a TabGroup");return s},o=({children:s,defaultValue:t="",value:a,onValueChange:r,variant:u="default",size:h="md",className:D})=>{const[k,j]=x.useState(t),c=a!==void 0?a:k,y=x.useCallback(m=>{a===void 0&&j(m),r==null||r(m)},[a,r]),V={activeTab:c,setActiveTab:y,variant:u,size:h};return e.jsxDEV(W.Provider,{value:V,children:e.jsxDEV("div",{className:T("w-full h-full flex flex-col",D),children:s},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.tsx",lineNumber:62,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.tsx",lineNumber:61,columnNumber:5},void 0)},l=({children:s,className:t})=>{const{variant:a}=U(),r={default:"border-b border-gray-200",pills:"bg-gray-100 p-1 rounded-lg",underline:"border-b border-gray-200"};return e.jsxDEV("div",{className:T("flex flex-shrink-0",r[a],t),role:"tablist",children:s},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.tsx",lineNumber:85,columnNumber:5},void 0)},n=({value:s,children:t,disabled:a=!1,className:r,...u})=>{const{activeTab:h,setActiveTab:D,variant:k,size:j}=U(),c=h===s,y=()=>{a||D(s)},V="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",m={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},E={default:{base:"border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300",active:"text-blue-600 border-blue-600",inactive:"text-gray-500"},pills:{base:"rounded-md hover:bg-white hover:shadow-sm",active:"bg-white shadow-sm text-gray-900",inactive:"text-gray-600"},underline:{base:"border-b-2 border-transparent hover:border-gray-300",active:"border-blue-500 text-blue-600",inactive:"text-gray-700"}}[k];return e.jsxDEV("button",{role:"tab","aria-selected":c,"aria-controls":`tabpanel-${s}`,id:`tab-${s}`,tabIndex:c?0:-1,className:T(V,m[j],E.base,c?E.active:E.inactive,r),onClick:y,disabled:a,...u,children:t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.tsx",lineNumber:151,columnNumber:5},void 0)},i=({value:s,children:t,className:a})=>{const{activeTab:r}=U();return r===s?e.jsxDEV("div",{role:"tabpanel",id:`tabpanel-${s}`,"aria-labelledby":`tab-${s}`,tabIndex:0,className:T("mt-4 flex-1 overflow-auto focus:outline-none",a),children:t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.tsx",lineNumber:193,columnNumber:5},void 0):null};try{o.displayName="TabGroup",o.__docgenInfo={description:"",displayName:"TabGroup",props:{defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"underline"'},{value:'"pills"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="TabsList",l.__docgenInfo={description:"",displayName:"TabsList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="Tab",n.__docgenInfo={description:"",displayName:"Tab",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="TabPanel",i.__docgenInfo={description:"",displayName:"TabPanel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Navigation/Tabs",component:o,parameters:{layout:"centered",docs:{description:{component:"A flexible tabs component with tab groups, individual tabs, and content panels. Supports multiple variants and accessibility features."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pills","underline"],description:"The visual style variant of the tabs"},size:{control:"select",options:["sm","md","lg"],description:"The size of the tabs"},defaultValue:{control:"text",description:"The default active tab value"},onValueChange:{action:"valueChanged",description:"Callback when active tab changes"}},args:{defaultValue:"tab1"}},d={args:{variant:"default",size:"md",defaultValue:"tab1",children:null},render:s=>e.jsxDEV(o,{...s,children:[e.jsxDEV(l,{children:[e.jsxDEV(n,{value:"tab1",children:"Overview"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:56,columnNumber:9},void 0),e.jsxDEV(n,{value:"tab2",children:"Settings"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:57,columnNumber:9},void 0),e.jsxDEV(n,{value:"tab3",children:"Usage"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:58,columnNumber:9},void 0),e.jsxDEV(n,{value:"tab4",disabled:!0,children:"Disabled"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:59,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:55,columnNumber:7},void 0),e.jsxDEV(i,{value:"tab1",children:e.jsxDEV("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Overview"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:63,columnNumber:11},void 0),e.jsxDEV("p",{children:"This is the overview tab content. It provides a general introduction and key information."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:64,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:62,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:61,columnNumber:7},void 0),e.jsxDEV(i,{value:"tab2",children:e.jsxDEV("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Settings"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:69,columnNumber:11},void 0),e.jsxDEV("p",{children:"Configure your preferences and options here. All settings are saved automatically."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:70,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:68,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:67,columnNumber:7},void 0),e.jsxDEV(i,{value:"tab3",children:e.jsxDEV("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Usage"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:75,columnNumber:11},void 0),e.jsxDEV("p",{children:"Learn how to use this component effectively in your applications."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:76,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:74,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:73,columnNumber:7},void 0),e.jsxDEV(i,{value:"tab4",children:e.jsxDEV("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Disabled Tab"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:81,columnNumber:11},void 0),e.jsxDEV("p",{children:"This content is not accessible when the tab is disabled."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:82,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:80,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:79,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:54,columnNumber:5},void 0)},b={args:{variant:"pills",size:"md",defaultValue:"features",children:null},render:s=>e.jsxDEV(o,{...s,children:[e.jsxDEV(l,{children:[e.jsxDEV(n,{value:"features",children:"Features"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:100,columnNumber:9},void 0),e.jsxDEV(n,{value:"pricing",children:"Pricing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:101,columnNumber:9},void 0),e.jsxDEV(n,{value:"support",children:"Support"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:102,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:99,columnNumber:7},void 0),e.jsxDEV(i,{value:"features",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Features"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:106,columnNumber:11},void 0),e.jsxDEV("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxDEV("li",{children:"Accessible tab navigation"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:108,columnNumber:13},void 0),e.jsxDEV("li",{children:"Multiple visual variants"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:109,columnNumber:13},void 0),e.jsxDEV("li",{children:"Keyboard navigation support"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:110,columnNumber:13},void 0),e.jsxDEV("li",{children:"TypeScript support"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:111,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:107,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:105,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:104,columnNumber:7},void 0),e.jsxDEV(i,{value:"pricing",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Pricing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:117,columnNumber:11},void 0),e.jsxDEV("p",{children:"Our component library is free and open source. No hidden costs!"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:118,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:116,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:115,columnNumber:7},void 0),e.jsxDEV(i,{value:"support",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Support"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:123,columnNumber:11},void 0),e.jsxDEV("p",{children:"Get help through our documentation, GitHub issues, or community forums."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:124,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:122,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:121,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:98,columnNumber:5},void 0)},p={args:{variant:"underline",size:"md",defaultValue:"design",children:null},render:s=>e.jsxDEV(o,{...s,children:[e.jsxDEV(l,{children:[e.jsxDEV(n,{value:"design",children:"Design"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:141,columnNumber:9},void 0),e.jsxDEV(n,{value:"development",children:"Development"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:142,columnNumber:9},void 0),e.jsxDEV(n,{value:"testing",children:"Testing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:143,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:140,columnNumber:7},void 0),e.jsxDEV(i,{value:"design",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Design Guidelines"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:147,columnNumber:11},void 0),e.jsxDEV("p",{children:"Follow our design system principles for consistent user interfaces."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:148,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:146,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:145,columnNumber:7},void 0),e.jsxDEV(i,{value:"development",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Development Setup"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:153,columnNumber:11},void 0),e.jsxDEV("p",{children:"Instructions for setting up your development environment."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:154,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:152,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:151,columnNumber:7},void 0),e.jsxDEV(i,{value:"testing",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Testing Strategy"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:159,columnNumber:11},void 0),e.jsxDEV("p",{children:"Best practices for testing your components and applications."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:160,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:158,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:157,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:139,columnNumber:5},void 0)},f={args:{variant:"default",size:"sm",defaultValue:"home",children:null},render:s=>e.jsxDEV(o,{...s,children:[e.jsxDEV(l,{children:[e.jsxDEV(n,{value:"home",children:"Home"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:178,columnNumber:9},void 0),e.jsxDEV(n,{value:"profile",children:"Profile"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:179,columnNumber:9},void 0),e.jsxDEV(n,{value:"messages",children:"Messages"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:180,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:177,columnNumber:7},void 0),e.jsxDEV(i,{value:"home",children:e.jsxDEV("div",{className:"p-3 border rounded text-sm",children:e.jsxDEV("p",{children:"Small tabs are perfect for compact interfaces and sidebars."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:184,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:183,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:182,columnNumber:7},void 0),e.jsxDEV(i,{value:"profile",children:e.jsxDEV("div",{className:"p-3 border rounded text-sm",children:e.jsxDEV("p",{children:"User profile information and settings."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:189,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:188,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:187,columnNumber:7},void 0),e.jsxDEV(i,{value:"messages",children:e.jsxDEV("div",{className:"p-3 border rounded text-sm",children:e.jsxDEV("p",{children:"View and manage your messages here."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:194,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:193,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:192,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:176,columnNumber:5},void 0)},v={args:{variant:"default",size:"lg",defaultValue:"dashboard",children:null},render:s=>e.jsxDEV(o,{...s,children:[e.jsxDEV(l,{children:[e.jsxDEV(n,{value:"dashboard",children:"Dashboard"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:211,columnNumber:9},void 0),e.jsxDEV(n,{value:"analytics",children:"Analytics"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:212,columnNumber:9},void 0),e.jsxDEV(n,{value:"reports",children:"Reports"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:213,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:210,columnNumber:7},void 0),e.jsxDEV(i,{value:"dashboard",children:e.jsxDEV("div",{className:"p-6 border rounded-lg",children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Dashboard Overview"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:217,columnNumber:11},void 0),e.jsxDEV("p",{children:"Large tabs work well for primary navigation in applications."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:218,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:216,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:215,columnNumber:7},void 0),e.jsxDEV(i,{value:"analytics",children:e.jsxDEV("div",{className:"p-6 border rounded-lg",children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Analytics"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:223,columnNumber:11},void 0),e.jsxDEV("p",{children:"Detailed analytics and performance metrics."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:224,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:222,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:221,columnNumber:7},void 0),e.jsxDEV(i,{value:"reports",children:e.jsxDEV("div",{className:"p-6 border rounded-lg",children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-3",children:"Reports"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:229,columnNumber:11},void 0),e.jsxDEV("p",{children:"Generate and view various reports and summaries."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:230,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:228,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:227,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:209,columnNumber:5},void 0)},g={args:{variant:"pills",size:"md",children:null},render:s=>{const[t,a]=X.useState("tab1");return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"flex gap-2",children:[e.jsxDEV("button",{onClick:()=>a("tab1"),className:"px-3 py-1 text-sm bg-blue-100 rounded",children:"Switch to Tab 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:250,columnNumber:11},void 0),e.jsxDEV("button",{onClick:()=>a("tab2"),className:"px-3 py-1 text-sm bg-blue-100 rounded",children:"Switch to Tab 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:256,columnNumber:11},void 0),e.jsxDEV("button",{onClick:()=>a("tab3"),className:"px-3 py-1 text-sm bg-blue-100 rounded",children:"Switch to Tab 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:262,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:249,columnNumber:9},void 0),e.jsxDEV(o,{...s,value:t,onValueChange:a,children:[e.jsxDEV(l,{children:[e.jsxDEV(n,{value:"tab1",children:"Tab 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:272,columnNumber:13},void 0),e.jsxDEV(n,{value:"tab2",children:"Tab 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:273,columnNumber:13},void 0),e.jsxDEV(n,{value:"tab3",children:"Tab 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:274,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:271,columnNumber:11},void 0),e.jsxDEV(i,{value:"tab1",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:e.jsxDEV("p",{children:["Content for controlled Tab 1. Active tab: ",t]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:278,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:277,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:276,columnNumber:11},void 0),e.jsxDEV(i,{value:"tab2",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:e.jsxDEV("p",{children:["Content for controlled Tab 2. Active tab: ",t]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:283,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:282,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:281,columnNumber:11},void 0),e.jsxDEV(i,{value:"tab3",children:e.jsxDEV("div",{className:"p-4 border rounded-lg",children:e.jsxDEV("p",{children:["Content for controlled Tab 3. Active tab: ",t]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:288,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:287,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:286,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:270,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:248,columnNumber:7},void 0)}},N={args:{variant:"default",size:"md",defaultValue:"long-content",children:null},render:s=>e.jsxDEV("div",{className:"h-96 border rounded-lg p-4",children:[e.jsxDEV("h3",{className:"mb-4 text-lg font-semibold",children:"Fixed Height Container (384px)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:307,columnNumber:7},void 0),e.jsxDEV(o,{...s,children:[e.jsxDEV(l,{children:[e.jsxDEV(n,{value:"long-content",children:"Long Content"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:310,columnNumber:11},void 0),e.jsxDEV(n,{value:"data-table",children:"Data Table"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:311,columnNumber:11},void 0),e.jsxDEV(n,{value:"code-editor",children:"Code Editor"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:312,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:309,columnNumber:9},void 0),e.jsxDEV(i,{value:"long-content",children:e.jsxDEV("div",{className:"p-4 space-y-4",children:[e.jsxDEV("h3",{className:"font-semibold text-lg",children:"Long Scrollable Content"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:316,columnNumber:13},void 0),e.jsxDEV("p",{children:"This content is longer than the container and will scroll."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:317,columnNumber:13},void 0),Array.from({length:30},(t,a)=>e.jsxDEV("div",{className:"p-3 border rounded bg-gray-50",children:[e.jsxDEV("h4",{className:"font-medium",children:["Section ",a+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:320,columnNumber:17},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600 mt-1",children:["This is some content for section ",a+1,". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:321,columnNumber:17},void 0)]},a,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:319,columnNumber:15},void 0))]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:315,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:314,columnNumber:9},void 0),e.jsxDEV(i,{value:"data-table",children:e.jsxDEV("div",{className:"p-4",children:[e.jsxDEV("h3",{className:"font-semibold text-lg mb-4",children:"Scrollable Data Table"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:332,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-2",children:Array.from({length:100},(t,a)=>e.jsxDEV("div",{className:"grid grid-cols-4 gap-4 p-2 border-b text-sm",children:[e.jsxDEV("span",{children:["Item ",a+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:336,columnNumber:19},void 0),e.jsxDEV("span",{children:["Category ",a%5+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:337,columnNumber:19},void 0),e.jsxDEV("span",{children:["$",(Math.random()*100).toFixed(2)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:338,columnNumber:19},void 0),e.jsxDEV("span",{className:`px-2 py-1 rounded text-xs ${a%3===0?"bg-green-100 text-green-800":a%3===1?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:a%3===0?"Active":a%3===1?"Pending":"Inactive"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:339,columnNumber:19},void 0)]},a,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:335,columnNumber:17},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:333,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:331,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:330,columnNumber:9},void 0),e.jsxDEV(i,{value:"code-editor",children:e.jsxDEV("div",{className:"p-4",children:[e.jsxDEV("h3",{className:"font-semibold text-lg mb-4",children:"Code Editor Simulation"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:353,columnNumber:13},void 0),e.jsxDEV("pre",{className:"bg-gray-900 text-green-400 p-4 rounded text-sm font-mono overflow-x-auto",children:`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 30 fibonacci numbers
const fibNumbers = [];
for (let i = 0; i < 30; i++) {
  fibNumbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:', fibNumbers);

// Additional code to create scrollable content
class DataProcessor {
  constructor(data) {
    this.data = data;
    this.processed = false;
  }

  process() {
    if (this.processed) {
      console.log('Data already processed');
      return this.data;
    }

    console.log('Processing data...');
    const result = this.data.map((item, index) => ({
      id: index,
      value: item,
      processed: true,
      timestamp: new Date().toISOString()
    }));

    this.processed = true;
    return result;
  }

  reset() {
    this.processed = false;
    console.log('Data processor reset');
  }
}

// Example usage
const processor = new DataProcessor(fibNumbers);
const processedData = processor.process();

// More code to demonstrate scrolling...
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Test sorting algorithms
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', testArray);
console.log('Bubble sorted:', bubbleSort([...testArray]));
console.log('Quick sorted:', quickSort([...testArray]));`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:354,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:352,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:351,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:308,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tabs/Tabs.stories.tsx",lineNumber:306,columnNumber:5},void 0)};var S,P,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    defaultValue: 'tab1',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Settings</Tab>
        <Tab value="tab3">Usage</Tab>
        <Tab value="tab4" disabled>Disabled</Tab>
      </TabsList>
      <TabPanel value="tab1">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Overview</h3>
          <p>This is the overview tab content. It provides a general introduction and key information.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab2">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p>Configure your preferences and options here. All settings are saved automatically.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab3">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Usage</h3>
          <p>Learn how to use this component effectively in your applications.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab4">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Disabled Tab</h3>
          <p>This content is not accessible when the tab is disabled.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(w=(P=d.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var A,C,_;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'pills',
    size: 'md',
    defaultValue: 'features',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="features">Features</Tab>
        <Tab value="pricing">Pricing</Tab>
        <Tab value="support">Support</Tab>
      </TabsList>
      <TabPanel value="features">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Accessible tab navigation</li>
            <li>Multiple visual variants</li>
            <li>Keyboard navigation support</li>
            <li>TypeScript support</li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value="pricing">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Pricing</h3>
          <p>Our component library is free and open source. No hidden costs!</p>
        </div>
      </TabPanel>
      <TabPanel value="support">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Support</h3>
          <p>Get help through our documentation, GitHub issues, or community forums.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(_=(C=b.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var L,G,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    size: 'md',
    defaultValue: 'design',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="design">Design</Tab>
        <Tab value="development">Development</Tab>
        <Tab value="testing">Testing</Tab>
      </TabsList>
      <TabPanel value="design">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Design Guidelines</h3>
          <p>Follow our design system principles for consistent user interfaces.</p>
        </div>
      </TabPanel>
      <TabPanel value="development">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Development Setup</h3>
          <p>Instructions for setting up your development environment.</p>
        </div>
      </TabPanel>
      <TabPanel value="testing">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Testing Strategy</h3>
          <p>Best practices for testing your components and applications.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var z,I,O;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'sm',
    defaultValue: 'home',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="home">Home</Tab>
        <Tab value="profile">Profile</Tab>
        <Tab value="messages">Messages</Tab>
      </TabsList>
      <TabPanel value="home">
        <div className="p-3 border rounded text-sm">
          <p>Small tabs are perfect for compact interfaces and sidebars.</p>
        </div>
      </TabPanel>
      <TabPanel value="profile">
        <div className="p-3 border rounded text-sm">
          <p>User profile information and settings.</p>
        </div>
      </TabPanel>
      <TabPanel value="messages">
        <div className="p-3 border rounded text-sm">
          <p>View and manage your messages here.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(O=(I=f.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var F,M,R;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg',
    defaultValue: 'dashboard',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="dashboard">Dashboard</Tab>
        <Tab value="analytics">Analytics</Tab>
        <Tab value="reports">Reports</Tab>
      </TabsList>
      <TabPanel value="dashboard">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Dashboard Overview</h3>
          <p>Large tabs work well for primary navigation in applications.</p>
        </div>
      </TabPanel>
      <TabPanel value="analytics">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Analytics</h3>
          <p>Detailed analytics and performance metrics.</p>
        </div>
      </TabPanel>
      <TabPanel value="reports">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Reports</h3>
          <p>Generate and view various reports and summaries.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(R=(M=v.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var $,H,B;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'pills',
    size: 'md',
    children: null
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('tab1');
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('tab1')} className="px-3 py-1 text-sm bg-blue-100 rounded">
            Switch to Tab 1
          </button>
          <button onClick={() => setActiveTab('tab2')} className="px-3 py-1 text-sm bg-blue-100 rounded">
            Switch to Tab 2
          </button>
          <button onClick={() => setActiveTab('tab3')} className="px-3 py-1 text-sm bg-blue-100 rounded">
            Switch to Tab 3
          </button>
        </div>
        
        <TabGroup {...args} value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
            <Tab value="tab3">Tab 3</Tab>
          </TabsList>
          <TabPanel value="tab1">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 1. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
          <TabPanel value="tab2">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 2. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
          <TabPanel value="tab3">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 3. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
        </TabGroup>
      </div>;
  }
}`,...(B=(H=g.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var K,Q,J;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    defaultValue: 'long-content',
    children: null
  },
  render: args => <div className="h-96 border rounded-lg p-4">
      <h3 className="mb-4 text-lg font-semibold">Fixed Height Container (384px)</h3>
      <TabGroup {...args}>
        <TabsList>
          <Tab value="long-content">Long Content</Tab>
          <Tab value="data-table">Data Table</Tab>
          <Tab value="code-editor">Code Editor</Tab>
        </TabsList>
        <TabPanel value="long-content">
          <div className="p-4 space-y-4">
            <h3 className="font-semibold text-lg">Long Scrollable Content</h3>
            <p>This content is longer than the container and will scroll.</p>
            {Array.from({
            length: 30
          }, (_, i) => <div key={i} className="p-3 border rounded bg-gray-50">
                <h4 className="font-medium">Section {i + 1}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  This is some content for section {i + 1}. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>)}
          </div>
        </TabPanel>
        <TabPanel value="data-table">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-4">Scrollable Data Table</h3>
            <div className="space-y-2">
              {Array.from({
              length: 100
            }, (_, i) => <div key={i} className="grid grid-cols-4 gap-4 p-2 border-b text-sm">
                  <span>Item {i + 1}</span>
                  <span>Category {i % 5 + 1}</span>
                  <span>\${(Math.random() * 100).toFixed(2)}</span>
                  <span className={\`px-2 py-1 rounded text-xs \${i % 3 === 0 ? 'bg-green-100 text-green-800' : i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}\`}>
                    {i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive'}
                  </span>
                </div>)}
            </div>
          </div>
        </TabPanel>
        <TabPanel value="code-editor">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-4">Code Editor Simulation</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm font-mono overflow-x-auto">
            {\`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 30 fibonacci numbers
const fibNumbers = [];
for (let i = 0; i < 30; i++) {
  fibNumbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:', fibNumbers);

// Additional code to create scrollable content
class DataProcessor {
  constructor(data) {
    this.data = data;
    this.processed = false;
  }

  process() {
    if (this.processed) {
      console.log('Data already processed');
      return this.data;
    }

    console.log('Processing data...');
    const result = this.data.map((item, index) => ({
      id: index,
      value: item,
      processed: true,
      timestamp: new Date().toISOString()
    }));

    this.processed = true;
    return result;
  }

  reset() {
    this.processed = false;
    console.log('Data processor reset');
  }
}

// Example usage
const processor = new DataProcessor(fibNumbers);
const processedData = processor.process();

// More code to demonstrate scrolling...
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Test sorting algorithms
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', testArray);
console.log('Bubble sorted:', bubbleSort([...testArray]));
console.log('Quick sorted:', quickSort([...testArray]));\`}
            </pre>
          </div>
        </TabPanel>
      </TabGroup>
    </div>
}`,...(J=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};const ie=["Default","Pills","Underline","Small","Large","Controlled","ScrollableContent"];export{g as Controlled,d as Default,v as Large,b as Pills,N as ScrollableContent,f as Small,p as Underline,ie as __namedExportsOrder,ne as default};
