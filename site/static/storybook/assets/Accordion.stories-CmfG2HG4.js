import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as h}from"./index-DHZDe_v1.js";import{c as y}from"./cn-BaF2GUMg.js";import{a as G}from"./Icon-D1EeTHi1.js";import"./_commonjsHelpers-BosuxZz1.js";const Q=h.createContext(null),H=()=>{const o=h.useContext(Q);if(!o)throw new Error("useAccordion must be used within an Accordion component");return o},a=({type:o="single",defaultValue:r,value:c,onValueChange:t,collapsible:l=!0,variant:d="default",size:u="md",className:m,children:v,...L})=>{const j=o==="multiple",[z,J]=h.useState(()=>r?Array.isArray(r)?r:[r]:[]),E=c!==void 0,p=E?Array.isArray(c)?c:[c]:z,Y=f=>{let N;if(j?N=p.includes(f)?p.filter(A=>A!==f):[...p,f]:N=p.includes(f)&&l?[]:[f],E||J(N),t){const A=j?N:N[0]||"";t(A)}},B={default:"border border-gray-200 rounded-lg overflow-hidden",outlined:"border-2 border-gray-300 rounded-lg overflow-hidden",separated:"space-y-2"};return e.jsxDEV(Q.Provider,{value:{openItems:p,toggleItem:Y,multiple:j},children:e.jsxDEV("div",{className:y(B[d],m),...L,children:v},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.tsx",lineNumber:88,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.tsx",lineNumber:87,columnNumber:5},void 0)},n=({value:o,disabled:r=!1,className:c,children:t,...l})=>{const{openItems:d}=H(),u=d.includes(o);return e.jsxDEV("div",{className:y("accordion-item",r&&"opacity-50 pointer-events-none",c),"data-state":u?"open":"closed","data-disabled":r,"data-value":o,...l,children:t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.tsx",lineNumber:119,columnNumber:5},void 0)},s=({className:o,children:r,onClick:c,...t})=>{const{toggleItem:l}=H(),d=u=>{const m=u.currentTarget.closest("[data-value]"),v=m==null?void 0:m.getAttribute("data-value");v&&l(v),c==null||c(u)};return e.jsxDEV("button",{className:y("flex w-full items-center justify-between py-3 px-4 text-left","hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset","font-medium text-gray-900 transition-colors","border-b border-gray-200 last:border-b-0",o),onClick:d,...t,children:[e.jsxDEV("span",{className:"flex-1",children:r},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.tsx",lineNumber:169,columnNumber:7},void 0),e.jsxDEV(G,{size:16,className:"text-gray-400 transition-transform duration-200 accordion-chevron"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.tsx",lineNumber:170,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.tsx",lineNumber:158,columnNumber:5},void 0)},i=({className:o,children:r,...c})=>e.jsxDEV("div",{className:y("overflow-hidden transition-all duration-200 ease-in-out","accordion-content",o),...c,children:e.jsxDEV("div",{className:"p-4 pt-0",children:r},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.tsx",lineNumber:197,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.tsx",lineNumber:189,columnNumber:5},void 0);try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{type:{defaultValue:{value:"single"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"single"'}]}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | string[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string | string[]) => void)"}},collapsible:{defaultValue:{value:"true"},description:"",name:"collapsible",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"separated"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}try{n.displayName="AccordionItem",n.__docgenInfo={description:"",displayName:"AccordionItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="AccordionTrigger",s.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{}}}catch{}try{i.displayName="AccordionContent",i.__docgenInfo={description:"",displayName:"AccordionContent",props:{}}}catch{}const ne={title:"Surface/Accordion",component:a,parameters:{layout:"centered",docs:{description:{component:"Expandable content sections with single or multiple selection modes. Perfect for FAQs, settings panels, and progressive disclosure."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"],description:"Selection mode - single or multiple items can be open"},variant:{control:"select",options:["default","outlined","separated"],description:"Visual style variant"},collapsible:{control:"boolean",description:"Whether items can be collapsed in single mode"}}},b={args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{value:"item-1",children:[e.jsxDEV(s,{children:"What is React?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:42,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("p",{children:"React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:44,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:43,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:41,columnNumber:9},void 0),e.jsxDEV(n,{value:"item-2",children:[e.jsxDEV(s,{children:"How do I get started?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:49,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{children:"To get started with React:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:52,columnNumber:15},void 0),e.jsxDEV("ol",{className:"list-decimal list-inside space-y-1",children:[e.jsxDEV("li",{children:"Install Node.js"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:54,columnNumber:17},void 0),e.jsxDEV("li",{children:["Create a new React app with ",e.jsxDEV("code",{className:"bg-gray-100 px-1 rounded",children:"create-react-app"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:55,columnNumber:49},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:55,columnNumber:17},void 0),e.jsxDEV("li",{children:"Start building components"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:56,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:53,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:51,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:50,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:48,columnNumber:9},void 0),e.jsxDEV(n,{value:"item-3",children:[e.jsxDEV(s,{children:"What are components?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:63,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("p",{children:"Components are independent, reusable pieces of UI. They accept inputs (called props) and return React elements that describe what should appear on the screen."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:65,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:64,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:62,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:40,columnNumber:7},void 0)}},x={args:{type:"multiple",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{value:"features",children:[e.jsxDEV(s,{children:"Features"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:79,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("ul",{className:"space-y-1",children:[e.jsxDEV("li",{children:"• Component-based architecture"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:82,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Virtual DOM for performance"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:83,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Declarative programming model"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:84,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Large ecosystem"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:85,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:81,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:80,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:78,columnNumber:9},void 0),e.jsxDEV(n,{value:"benefits",children:[e.jsxDEV(s,{children:"Benefits"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:91,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("ul",{className:"space-y-1",children:[e.jsxDEV("li",{children:"• Reusable components"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:94,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Easy to test"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:95,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Strong community"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:96,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Excellent tooling"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:97,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:93,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:92,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:90,columnNumber:9},void 0),e.jsxDEV(n,{value:"use-cases",children:[e.jsxDEV(s,{children:"Use Cases"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:103,columnNumber:11},void 0),e.jsxDEV(i,{children:[e.jsxDEV("p",{children:"React is great for building:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:105,columnNumber:13},void 0),e.jsxDEV("ul",{className:"mt-2 space-y-1",children:[e.jsxDEV("li",{children:"• Single Page Applications (SPAs)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:107,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Mobile apps with React Native"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:108,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Desktop apps with Electron"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:109,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Static sites with Next.js"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:110,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:106,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:104,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:102,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:77,columnNumber:7},void 0)}},g={render:()=>e.jsxDEV("div",{className:"w-full max-w-2xl space-y-8",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Default Variant"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:123,columnNumber:9},void 0),e.jsxDEV(a,{variant:"default",children:e.jsxDEV(n,{value:"item-1",children:[e.jsxDEV(s,{children:"Default Styling"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:126,columnNumber:13},void 0),e.jsxDEV(i,{children:e.jsxDEV("p",{children:"This accordion uses the default variant with bordered container."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:128,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:127,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:125,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:124,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:122,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Outlined Variant"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:135,columnNumber:9},void 0),e.jsxDEV(a,{variant:"outlined",children:e.jsxDEV(n,{value:"item-1",children:[e.jsxDEV(s,{children:"Outlined Styling"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:138,columnNumber:13},void 0),e.jsxDEV(i,{children:e.jsxDEV("p",{children:"This accordion uses the outlined variant with thicker borders."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:140,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:139,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:137,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:136,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:134,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Separated Variant"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:147,columnNumber:9},void 0),e.jsxDEV(a,{variant:"separated",children:[e.jsxDEV(n,{value:"item-1",children:[e.jsxDEV(s,{children:"Separated Item 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:150,columnNumber:13},void 0),e.jsxDEV(i,{children:e.jsxDEV("p",{children:"This accordion uses the separated variant."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:152,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:151,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:149,columnNumber:11},void 0),e.jsxDEV(n,{value:"item-2",children:[e.jsxDEV(s,{children:"Separated Item 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:156,columnNumber:13},void 0),e.jsxDEV(i,{children:e.jsxDEV("p",{children:"Each item is visually separated with spacing."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:158,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:157,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:155,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:148,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:146,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:121,columnNumber:5},void 0)},k={render:()=>e.jsxDEV("div",{className:"w-full max-w-2xl",children:[e.jsxDEV("h2",{className:"text-2xl font-bold mb-6",children:"Frequently Asked Questions"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:170,columnNumber:7},void 0),e.jsxDEV(a,{children:[e.jsxDEV(n,{value:"shipping",children:[e.jsxDEV(s,{children:"How long does shipping take?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:173,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{children:"Shipping times vary by location and shipping method:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:176,columnNumber:15},void 0),e.jsxDEV("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsxDEV("li",{children:[e.jsxDEV("strong",{children:"Standard:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:178,columnNumber:21},void 0)," 5-7 business days"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:178,columnNumber:17},void 0),e.jsxDEV("li",{children:[e.jsxDEV("strong",{children:"Express:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:179,columnNumber:21},void 0)," 2-3 business days"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:179,columnNumber:17},void 0),e.jsxDEV("li",{children:[e.jsxDEV("strong",{children:"Overnight:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:180,columnNumber:21},void 0)," 1 business day"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:180,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:177,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:175,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:174,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:172,columnNumber:9},void 0),e.jsxDEV(n,{value:"returns",children:[e.jsxDEV(s,{children:"What is your return policy?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:187,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("p",{children:"We offer a 30-day return policy for all items in original condition. Items must be unused and in original packaging. Return shipping is free for defective items."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:189,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:188,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:186,columnNumber:9},void 0),e.jsxDEV(n,{value:"warranty",children:[e.jsxDEV(s,{children:"Do you offer warranty?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:194,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{children:"Yes, all our products come with warranty coverage:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:197,columnNumber:15},void 0),e.jsxDEV("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsxDEV("li",{children:"Electronics: 1 year manufacturer warranty"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:199,columnNumber:17},void 0),e.jsxDEV("li",{children:"Clothing: 90 days against defects"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:200,columnNumber:17},void 0),e.jsxDEV("li",{children:"Accessories: 6 months limited warranty"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:201,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:198,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:196,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:195,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:193,columnNumber:9},void 0),e.jsxDEV(n,{value:"contact",children:[e.jsxDEV(s,{children:"How can I contact customer service?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:208,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{children:"You can reach us through multiple channels:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:211,columnNumber:15},void 0),e.jsxDEV("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsxDEV("li",{children:"Email: support@example.com"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:213,columnNumber:17},void 0),e.jsxDEV("li",{children:"Phone: 1-800-123-4567 (Mon-Fri 9AM-5PM)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:214,columnNumber:17},void 0),e.jsxDEV("li",{children:"Live chat: Available on our website"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:215,columnNumber:17},void 0),e.jsxDEV("li",{children:"Social media: @example on Twitter and Facebook"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:216,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:212,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:210,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:209,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:207,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:171,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:169,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using accordion for a FAQ section."}}}},D={render:()=>e.jsxDEV("div",{className:"w-full max-w-md",children:[e.jsxDEV("h2",{className:"text-xl font-semibold mb-4",children:"Account Settings"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:236,columnNumber:7},void 0),e.jsxDEV(a,{type:"multiple",variant:"separated",children:[e.jsxDEV(n,{value:"profile",children:[e.jsxDEV(s,{children:"Profile Information"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:239,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium mb-1",children:"Display Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:243,columnNumber:17},void 0),e.jsxDEV("input",{type:"text",className:"w-full px-3 py-2 border rounded",defaultValue:"John Doe"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:244,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:242,columnNumber:15},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium mb-1",children:"Email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:247,columnNumber:17},void 0),e.jsxDEV("input",{type:"email",className:"w-full px-3 py-2 border rounded",defaultValue:"john@example.com"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:248,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:246,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:241,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:240,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:238,columnNumber:9},void 0),e.jsxDEV(n,{value:"notifications",children:[e.jsxDEV(s,{children:"Notification Preferences"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:255,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("label",{className:"flex items-center",children:[e.jsxDEV("input",{type:"checkbox",className:"mr-2",defaultChecked:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:259,columnNumber:17},void 0),"Email notifications"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:258,columnNumber:15},void 0),e.jsxDEV("label",{className:"flex items-center",children:[e.jsxDEV("input",{type:"checkbox",className:"mr-2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:263,columnNumber:17},void 0),"SMS notifications"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:262,columnNumber:15},void 0),e.jsxDEV("label",{className:"flex items-center",children:[e.jsxDEV("input",{type:"checkbox",className:"mr-2",defaultChecked:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:267,columnNumber:17},void 0),"Push notifications"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:266,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:257,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:256,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:254,columnNumber:9},void 0),e.jsxDEV(n,{value:"privacy",children:[e.jsxDEV(s,{children:"Privacy Settings"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:275,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium mb-1",children:"Profile Visibility"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:279,columnNumber:17},void 0),e.jsxDEV("select",{className:"w-full px-3 py-2 border rounded",children:[e.jsxDEV("option",{children:"Public"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:281,columnNumber:19},void 0),e.jsxDEV("option",{children:"Friends Only"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:282,columnNumber:19},void 0),e.jsxDEV("option",{children:"Private"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:283,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:280,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:278,columnNumber:15},void 0),e.jsxDEV("label",{className:"flex items-center",children:[e.jsxDEV("input",{type:"checkbox",className:"mr-2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:287,columnNumber:17},void 0),"Allow search engines to index my profile"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:286,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:277,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:276,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:274,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:237,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/accordion/Accordion.stories.tsx",lineNumber:235,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using accordion for settings with multiple sections open."}}}};var V,U,w;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: <>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            <p>React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>To get started with React:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Install Node.js</li>
                <li>Create a new React app with <code className="bg-gray-100 px-1 rounded">create-react-app</code></li>
                <li>Start building components</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>What are components?</AccordionTrigger>
          <AccordionContent>
            <p>Components are independent, reusable pieces of UI. They accept inputs (called props) and return React elements that describe what should appear on the screen.</p>
          </AccordionContent>
        </AccordionItem>
      </>
  }
}`,...(w=(U=b.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var I,C,T;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    children: <>
        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>• Component-based architecture</li>
              <li>• Virtual DOM for performance</li>
              <li>• Declarative programming model</li>
              <li>• Large ecosystem</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="benefits">
          <AccordionTrigger>Benefits</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>• Reusable components</li>
              <li>• Easy to test</li>
              <li>• Strong community</li>
              <li>• Excellent tooling</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="use-cases">
          <AccordionTrigger>Use Cases</AccordionTrigger>
          <AccordionContent>
            <p>React is great for building:</p>
            <ul className="mt-2 space-y-1">
              <li>• Single Page Applications (SPAs)</li>
              <li>• Mobile apps with React Native</li>
              <li>• Desktop apps with Electron</li>
              <li>• Static sites with Next.js</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </>
  }
}`,...(T=(C=x.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,_,P;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
        <Accordion variant="default">
          <AccordionItem value="item-1">
            <AccordionTrigger>Default Styling</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the default variant with bordered container.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Outlined Variant</h3>
        <Accordion variant="outlined">
          <AccordionItem value="item-1">
            <AccordionTrigger>Outlined Styling</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the outlined variant with thicker borders.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Separated Variant</h3>
        <Accordion variant="separated">
          <AccordionItem value="item-1">
            <AccordionTrigger>Separated Item 1</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the separated variant.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Separated Item 2</AccordionTrigger>
            <AccordionContent>
              <p>Each item is visually separated with spacing.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
}`,...(P=(_=g.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var R,F,M;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion>
        <AccordionItem value="shipping">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>Shipping times vary by location and shipping method:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Standard:</strong> 5-7 business days</li>
                <li><strong>Express:</strong> 2-3 business days</li>
                <li><strong>Overnight:</strong> 1 business day</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            <p>We offer a 30-day return policy for all items in original condition. Items must be unused and in original packaging. Return shipping is free for defective items.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="warranty">
          <AccordionTrigger>Do you offer warranty?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>Yes, all our products come with warranty coverage:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Electronics: 1 year manufacturer warranty</li>
                <li>Clothing: 90 days against defects</li>
                <li>Accessories: 6 months limited warranty</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="contact">
          <AccordionTrigger>How can I contact customer service?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>You can reach us through multiple channels:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email: support@example.com</li>
                <li>Phone: 1-800-123-4567 (Mon-Fri 9AM-5PM)</li>
                <li>Live chat: Available on our website</li>
                <li>Social media: @example on Twitter and Facebook</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using accordion for a FAQ section.'
      }
    }
  }
}`,...(M=(F=k.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var O,q,W;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <Accordion type="multiple" variant="separated">
        <AccordionItem value="profile">
          <AccordionTrigger>Profile Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Display Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded" defaultValue="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded" defaultValue="john@example.com" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="notifications">
          <AccordionTrigger>Notification Preferences</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Email notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                SMS notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Push notifications
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="privacy">
          <AccordionTrigger>Privacy Settings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Profile Visibility</label>
                <select className="w-full px-3 py-2 border rounded">
                  <option>Public</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Allow search engines to index my profile
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using accordion for settings with multiple sections open.'
      }
    }
  }
}`,...(W=(q=D.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const se=["Default","Multiple","Variants","FAQ","SettingsPanel"];export{b as Default,k as FAQ,x as Multiple,D as SettingsPanel,g as Variants,se as __namedExportsOrder,ne as default};
