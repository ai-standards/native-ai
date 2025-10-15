import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as c}from"./index-DHZDe_v1.js";import{c as D}from"./cn-BaF2GUMg.js";import{L as P}from"./Icon-D1EeTHi1.js";import"./_commonjsHelpers-BosuxZz1.js";const $=c.createContext(null),A={left:{container:"inset-y-0 left-0",translate:"translate-x-0",translateClosed:"-translate-x-full",width:!0},right:{container:"inset-y-0 right-0",translate:"translate-x-0",translateClosed:"translate-x-full",width:!0},top:{container:"inset-x-0 top-0",translate:"translate-y-0",translateClosed:"-translate-y-full",width:!1},bottom:{container:"inset-x-0 bottom-0",translate:"translate-y-0",translateClosed:"translate-y-full",width:!1}},J={sm:{width:"w-64",height:"h-48"},md:{width:"w-80",height:"h-64"},lg:{width:"w-96",height:"h-80"},xl:{width:"w-[28rem]",height:"h-96"}},b=({isOpen:s,onClose:a,side:r="right",size:i="md",closeOnOverlayClick:u=!0,closeOnEscape:v=!0,showCloseButton:F=!0,children:I,className:L})=>{const o=A[r],w=J[i];if(c.useEffect(()=>{if(!v||!s)return;const l=W=>{W.key==="Escape"&&a()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[v,s,a]),c.useEffect(()=>{if(s)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[s]),!s)return null;const B=l=>{u&&l.target===l.currentTarget&&a()};return e.jsxDEV($.Provider,{value:{isOpen:s,onClose:a,side:r},children:e.jsxDEV("div",{className:"fixed inset-0 z-50",children:[e.jsxDEV("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity",onClick:B,"aria-hidden":"true"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:119,columnNumber:9},void 0),e.jsxDEV("div",{className:D("fixed bg-white shadow-xl transform transition-transform duration-300 ease-in-out",o.container,o.width?w.width:w.height,o.width?"h-full":"w-full",s?o.translate:o.translateClosed,L),role:"dialog","aria-modal":"true",children:[F&&e.jsxDEV("button",{className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10",onClick:a,"aria-label":"Close drawer",children:e.jsxDEV(P,{size:20,className:"text-gray-400"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:144,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:139,columnNumber:13},void 0),e.jsxDEV("div",{className:"h-full overflow-y-auto",children:I},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:148,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:126,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:117,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:116,columnNumber:5},void 0)},n=({className:s,children:a,...r})=>e.jsxDEV("div",{className:D("px-6 py-4 border-b border-gray-200 bg-gray-50",s),...r,children:a},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:168,columnNumber:5},void 0),t=({className:s,children:a,...r})=>e.jsxDEV("div",{className:D("px-6 py-4 flex-1",s),...r,children:a},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:191,columnNumber:5},void 0),g=({className:s,children:a,...r})=>e.jsxDEV("div",{className:D("px-6 py-4 border-t border-gray-200 bg-gray-50",s),...r,children:a},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.tsx",lineNumber:214,columnNumber:5},void 0);try{b.displayName="Drawer",b.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},side:{defaultValue:{value:"right"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="DrawerHeader",n.__docgenInfo={description:"",displayName:"DrawerHeader",props:{}}}catch{}try{t.displayName="DrawerContent",t.__docgenInfo={description:"",displayName:"DrawerContent",props:{}}}catch{}try{g.displayName="DrawerFooter",g.__docgenInfo={description:"",displayName:"DrawerFooter",props:{}}}catch{}const M={title:"Surface/Drawer",component:b,parameters:{layout:"centered",docs:{description:{component:"A sliding panel component that appears from screen edges. Perfect for navigation menus, filters, and mobile-friendly interfaces."}}}},m=({side:s="right",size:a="md",children:r})=>{const[i,u]=c.useState(!1);return e.jsxDEV("div",{className:"min-h-[400px] flex items-center justify-center",children:[e.jsxDEV("button",{onClick:()=>u(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Open Drawer"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:26,columnNumber:7},void 0),e.jsxDEV(b,{isOpen:i,onClose:()=>u(!1),side:s,size:a,children:r},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:33,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:25,columnNumber:5},void 0)},d={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>e.jsxDEV(m,{side:"right",size:"md",children:[e.jsxDEV(n,{children:e.jsxDEV("h2",{className:"text-lg font-semibold",children:"Default Drawer"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:49,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:48,columnNumber:7},void 0),e.jsxDEV(t,{children:[e.jsxDEV("p",{className:"text-gray-600 mb-4",children:"This is the default drawer sliding from the right side."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:52,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-sm text-gray-500",children:"Click outside or press Escape to close."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:55,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:51,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:47,columnNumber:5},void 0)},p={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>e.jsxDEV(m,{side:"left",size:"sm",children:[e.jsxDEV(n,{children:e.jsxDEV("h2",{className:"text-lg font-semibold",children:"Left Navigation"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:68,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:67,columnNumber:7},void 0),e.jsxDEV(t,{children:e.jsxDEV("nav",{className:"space-y-1",children:[e.jsxDEV("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Dashboard"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:72,columnNumber:11},void 0),e.jsxDEV("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Products"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:75,columnNumber:11},void 0),e.jsxDEV("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Orders"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:78,columnNumber:11},void 0),e.jsxDEV("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Customers"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:81,columnNumber:11},void 0),e.jsxDEV("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Settings"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:84,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:71,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:70,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:66,columnNumber:5},void 0)},f={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>e.jsxDEV(m,{side:"bottom",size:"md",children:[e.jsxDEV(n,{children:e.jsxDEV("h2",{className:"text-lg font-semibold",children:"Share Options"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:98,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:97,columnNumber:7},void 0),e.jsxDEV(t,{children:e.jsxDEV("div",{className:"grid grid-cols-3 gap-4 text-center",children:[e.jsxDEV("button",{className:"p-4 hover:bg-gray-100 rounded",children:[e.jsxDEV("div",{className:"w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold",children:"T"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:103,columnNumber:13},void 0),e.jsxDEV("span",{className:"text-sm",children:"Twitter"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:106,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:102,columnNumber:11},void 0),e.jsxDEV("button",{className:"p-4 hover:bg-gray-100 rounded",children:[e.jsxDEV("div",{className:"w-10 h-10 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold",children:"F"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:109,columnNumber:13},void 0),e.jsxDEV("span",{className:"text-sm",children:"Facebook"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:112,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:108,columnNumber:11},void 0),e.jsxDEV("button",{className:"p-4 hover:bg-gray-100 rounded",children:[e.jsxDEV("div",{className:"w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold",children:"W"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:115,columnNumber:13},void 0),e.jsxDEV("span",{className:"text-sm",children:"WhatsApp"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:118,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:114,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:101,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:100,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:96,columnNumber:5},void 0)},N={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>e.jsxDEV(m,{side:"top",size:"md",children:[e.jsxDEV(n,{children:e.jsxDEV("h2",{className:"text-lg font-semibold",children:"Notifications"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:131,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:130,columnNumber:7},void 0),e.jsxDEV(t,{children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("div",{className:"flex items-start space-x-3 p-3 bg-blue-50 rounded",children:[e.jsxDEV("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:136,columnNumber:13},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"text-sm font-medium",children:"New message received"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:138,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-xs text-gray-600",children:"John sent you a message about the project"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:139,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-xs text-gray-400",children:"2 minutes ago"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:140,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:137,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:135,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex items-start space-x-3 p-3 bg-green-50 rounded",children:[e.jsxDEV("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:144,columnNumber:13},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"text-sm font-medium",children:"Task completed"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:146,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-xs text-gray-600",children:"Your export has finished processing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:147,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-xs text-gray-400",children:"5 minutes ago"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:148,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:145,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:143,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:134,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:133,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:129,columnNumber:5},void 0)},x={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[s]=c.useState([{id:1,name:"Wireless Headphones",price:99.99,quantity:1,image:""},{id:2,name:"Smartphone Case",price:24.99,quantity:2,image:""},{id:3,name:"USB Cable",price:12.99,quantity:1,image:""}]),a=s.reduce((r,i)=>r+i.price*i.quantity,0);return e.jsxDEV(m,{side:"right",size:"md",children:[e.jsxDEV(n,{children:e.jsxDEV("h2",{className:"text-lg font-semibold",children:["Shopping Cart (",s.length,")"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:171,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:170,columnNumber:9},void 0),e.jsxDEV(t,{children:e.jsxDEV("div",{className:"space-y-4",children:s.map(r=>e.jsxDEV("div",{className:"flex items-center space-x-3 border-b pb-3",children:[e.jsxDEV("div",{className:"w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl",children:r.image},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:178,columnNumber:17},void 0),e.jsxDEV("div",{className:"flex-1",children:[e.jsxDEV("h4",{className:"font-medium text-sm",children:r.name},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:182,columnNumber:19},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:["$",r.price]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:183,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:181,columnNumber:17},void 0),e.jsxDEV("div",{className:"flex items-center space-x-2",children:[e.jsxDEV("button",{className:"w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm",children:"-"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:186,columnNumber:19},void 0),e.jsxDEV("span",{className:"text-sm font-medium",children:r.quantity},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:189,columnNumber:19},void 0),e.jsxDEV("button",{className:"w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm",children:"+"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:190,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:185,columnNumber:17},void 0)]},r.id,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:177,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:175,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:174,columnNumber:9},void 0),e.jsxDEV(g,{children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("div",{className:"flex justify-between items-center text-lg font-semibold",children:[e.jsxDEV("span",{children:"Total:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:202,columnNumber:15},void 0),e.jsxDEV("span",{children:["$",a.toFixed(2)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:203,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:201,columnNumber:13},void 0),e.jsxDEV("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700",children:"Checkout"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:205,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:200,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:199,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/drawer/Drawer.stories.tsx",lineNumber:169,columnNumber:7},void 0)}};var h,y,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => <DrawerDemo side="right" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Default Drawer</h2>
      </DrawerHeader>
      <DrawerContent>
        <p className="text-gray-600 mb-4">
          This is the default drawer sliding from the right side.
        </p>
        <p className="text-sm text-gray-500">
          Click outside or press Escape to close.
        </p>
      </DrawerContent>
    </DrawerDemo>
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var j,E,V;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => <DrawerDemo side="left" size="sm">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Left Navigation</h2>
      </DrawerHeader>
      <DrawerContent>
        <nav className="space-y-1">
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Products
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Orders
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Customers
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Settings
          </a>
        </nav>
      </DrawerContent>
    </DrawerDemo>
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var U,C,_;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => <DrawerDemo side="bottom" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Share Options</h2>
      </DrawerHeader>
      <DrawerContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              T
            </div>
            <span className="text-sm">Twitter</span>
          </button>
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              F
            </div>
            <span className="text-sm">Facebook</span>
          </button>
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              W
            </div>
            <span className="text-sm">WhatsApp</span>
          </button>
        </div>
      </DrawerContent>
    </DrawerDemo>
}`,...(_=(C=f.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var S,O,q;N.parameters={...N.parameters,docs:{...(S=N.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => <DrawerDemo side="top" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Notifications</h2>
      </DrawerHeader>
      <DrawerContent>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">New message received</p>
              <p className="text-xs text-gray-600">John sent you a message about the project</p>
              <p className="text-xs text-gray-400">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Task completed</p>
              <p className="text-xs text-gray-600">Your export has finished processing</p>
              <p className="text-xs text-gray-400">5 minutes ago</p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </DrawerDemo>
}`,...(q=(O=N.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var z,H,T;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [cartItems] = useState([{
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      quantity: 1,
      image: ''
    }, {
      id: 2,
      name: 'Smartphone Case',
      price: 24.99,
      quantity: 2,
      image: ''
    }, {
      id: 3,
      name: 'USB Cable',
      price: 12.99,
      quantity: 1,
      image: ''
    }]);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return <DrawerDemo side="right" size="md">
        <DrawerHeader>
          <h2 className="text-lg font-semibold">Shopping Cart ({cartItems.length})</h2>
        </DrawerHeader>
        
        <DrawerContent>
          <div className="space-y-4">
            {cartItems.map(item => <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl">
                  {item.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-sm text-gray-600">\${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                    +
                  </button>
                </div>
              </div>)}
          </div>
        </DrawerContent>
        
        <DrawerFooter>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>\${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </DrawerFooter>
      </DrawerDemo>;
  }
}`,...(T=(H=x.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const Q=["Default","LeftSide","BottomSheet","TopDrawer","ShoppingCart"];export{f as BottomSheet,d as Default,p as LeftSide,x as ShoppingCart,N as TopDrawer,Q as __namedExportsOrder,M as default};
