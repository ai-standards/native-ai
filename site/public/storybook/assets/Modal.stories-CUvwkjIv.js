import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as a}from"./index-DHZDe_v1.js";import{c}from"./cn-BaF2GUMg.js";import{L as J}from"./Icon-D1EeTHi1.js";import"./_commonjsHelpers-BosuxZz1.js";const X=a.createContext(null),G={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl",full:"max-w-full m-4"},K={center:"items-center justify-center",top:"items-start justify-center pt-16"},l=({isOpen:s,onClose:o,size:n="md",position:B="center",closeOnOverlayClick:q=!0,closeOnEscape:x=!0,showCloseButton:L=!0,children:W,className:Y})=>{if(a.useEffect(()=>{if(!x||!s)return;const d=R=>{R.key==="Escape"&&o()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[x,s,o]),a.useEffect(()=>{if(s)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[s]),a.useEffect(()=>{if(s){const d=document.querySelector('[role="dialog"]');d&&d.focus()}},[s]),!s)return null;const y=d=>{q&&d.target===d.currentTarget&&o()};return e.jsxDEV(X.Provider,{value:{isOpen:s,onClose:o},children:e.jsxDEV("div",{className:"fixed inset-0 z-50",children:[e.jsxDEV("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity",onClick:y,"aria-hidden":"true"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:104,columnNumber:9},void 0),e.jsxDEV("div",{className:c("fixed inset-0 flex",K[B]),onClick:y,children:e.jsxDEV("div",{className:c("relative bg-white rounded-lg shadow-xl transform transition-all","w-full mx-4",G[n],Y),role:"dialog","aria-modal":"true",tabIndex:-1,children:[L&&e.jsxDEV("button",{className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:o,"aria-label":"Close modal",children:e.jsxDEV(J,{size:20,className:"text-gray-400"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:135,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:130,columnNumber:15},void 0),W]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:118,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:111,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:102,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:101,columnNumber:5},void 0)},t=({className:s,children:o,...n})=>e.jsxDEV("div",{className:c("px-6 py-4 border-b border-gray-200",s),...n,children:o},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:157,columnNumber:5},void 0),r=({className:s,children:o,...n})=>e.jsxDEV("div",{className:c("px-6 py-4 flex-1 overflow-y-auto",s),...n,children:o},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:180,columnNumber:5},void 0),i=({className:s,children:o,...n})=>e.jsxDEV("div",{className:c("px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3",s),...n,children:o},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.tsx",lineNumber:203,columnNumber:5},void 0);try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{t.displayName="ModalHeader",t.__docgenInfo={description:"",displayName:"ModalHeader",props:{}}}catch{}try{r.displayName="ModalContent",r.__docgenInfo={description:"",displayName:"ModalContent",props:{}}}catch{}try{i.displayName="ModalFooter",i.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const se={title:"Overlay/Modal",component:l,parameters:{layout:"centered",docs:{description:{component:"A modal dialog component with backdrop, focus management, and keyboard navigation. Perfect for confirmations, forms, and detailed content."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Whether the modal is open"},size:{control:"select",options:["sm","md","lg","xl","full"],description:"Size of the modal"},position:{control:"select",options:["center","top"],description:"Vertical positioning of the modal"},closeOnOverlayClick:{control:"boolean",description:"Whether clicking the backdrop closes the modal"},closeOnEscape:{control:"boolean",description:"Whether pressing Escape closes the modal"},showCloseButton:{control:"boolean",description:"Whether to show the close button"},onClose:{action:"closed",description:"Called when the modal should close"},children:{control:!1,description:"Modal content"}}},m={render:()=>{const[s,o]=a.useState(!1);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Open Modal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:65,columnNumber:9},void 0),e.jsxDEV(l,{isOpen:s,onClose:()=>o(!1),children:[e.jsxDEV(t,{children:e.jsxDEV("h2",{className:"text-xl font-semibold",children:"Modal Title"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:74,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:73,columnNumber:11},void 0),e.jsxDEV(r,{children:[e.jsxDEV("p",{children:"This is a basic modal with header and content sections."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:77,columnNumber:13},void 0),e.jsxDEV("p",{children:"Click the backdrop, press Escape, or use the close button to dismiss it."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:78,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:76,columnNumber:11},void 0),e.jsxDEV(i,{children:[e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:81,columnNumber:13},void 0),e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Confirm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:87,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:80,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:72,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:64,columnNumber:7},void 0)}},u={render:()=>{const[s,o]=a.useState(null);return e.jsxDEV("div",{className:"flex gap-4 flex-wrap",children:["sm","md","lg","xl"].map(n=>e.jsxDEV("div",{children:[e.jsxDEV("button",{onClick:()=>o(n),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:[n.toUpperCase()," Modal"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:108,columnNumber:13},void 0),e.jsxDEV(l,{isOpen:s===n,onClose:()=>o(null),size:n,children:[e.jsxDEV(t,{children:e.jsxDEV("h2",{className:"text-xl font-semibold",children:[n.toUpperCase()," Modal"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:121,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:120,columnNumber:15},void 0),e.jsxDEV(r,{children:[e.jsxDEV("p",{children:["This is a ",n," sized modal."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:124,columnNumber:17},void 0),e.jsxDEV("p",{children:"Different sizes help accommodate various content types."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:125,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:123,columnNumber:15},void 0),e.jsxDEV(i,{children:e.jsxDEV("button",{onClick:()=>o(null),className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:"Close"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:128,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:127,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:115,columnNumber:13},void 0)]},n,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:107,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:105,columnNumber:7},void 0)}},p={render:()=>{const[s,o]=a.useState(null);return e.jsxDEV("div",{className:"flex gap-4",children:[e.jsxDEV("button",{onClick:()=>o("center"),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Center Modal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:149,columnNumber:9},void 0),e.jsxDEV("button",{onClick:()=>o("top"),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Top Modal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:155,columnNumber:9},void 0),e.jsxDEV(l,{isOpen:s!==null,onClose:()=>o(null),position:s||"center",children:[e.jsxDEV(t,{children:e.jsxDEV("h2",{className:"text-xl font-semibold",children:[s," Position"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:168,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:167,columnNumber:11},void 0),e.jsxDEV(r,{children:e.jsxDEV("p",{children:["This modal is positioned at the ",s," of the screen."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:171,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:170,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("button",{onClick:()=>o(null),className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:"Close"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:174,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:173,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:162,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:148,columnNumber:7},void 0)}},f={render:()=>{const[s,o]=a.useState(!1);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"Delete Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:193,columnNumber:9},void 0),e.jsxDEV(l,{isOpen:s,onClose:()=>o(!1),size:"sm",children:[e.jsxDEV(t,{children:e.jsxDEV("h2",{className:"text-xl font-semibold text-red-900",children:"Confirm Deletion"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:202,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:201,columnNumber:11},void 0),e.jsxDEV(r,{children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("p",{children:"Are you sure you want to delete this item?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:206,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"This action cannot be undone. The item will be permanently removed."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:207,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:205,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:204,columnNumber:11},void 0),e.jsxDEV(i,{children:[e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:213,columnNumber:13},void 0),e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"Delete"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:219,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:212,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:200,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:192,columnNumber:7},void 0)},parameters:{docs:{description:{story:"Example of a confirmation dialog for destructive actions."}}}},b={render:()=>{const[s,o]=a.useState(!1);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Add User"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:245,columnNumber:9},void 0),e.jsxDEV(l,{isOpen:s,onClose:()=>o(!1),size:"lg",children:[e.jsxDEV(t,{children:e.jsxDEV("h2",{className:"text-xl font-semibold",children:"Add New User"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:254,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:253,columnNumber:11},void 0),e.jsxDEV(r,{children:e.jsxDEV("form",{className:"space-y-4",children:[e.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"First Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:260,columnNumber:19},void 0),e.jsxDEV("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"John"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:263,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:259,columnNumber:17},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Last Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:270,columnNumber:19},void 0),e.jsxDEV("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Doe"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:273,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:269,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:258,columnNumber:15},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:282,columnNumber:17},void 0),e.jsxDEV("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"john.doe@example.com"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:285,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:281,columnNumber:15},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Role"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:293,columnNumber:17},void 0),e.jsxDEV("select",{className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsxDEV("option",{children:"User"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:297,columnNumber:19},void 0),e.jsxDEV("option",{children:"Admin"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:298,columnNumber:19},void 0),e.jsxDEV("option",{children:"Manager"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:299,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:296,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:292,columnNumber:15},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Bio"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:304,columnNumber:17},void 0),e.jsxDEV("textarea",{rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Tell us about this user..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:307,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:303,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:257,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:256,columnNumber:11},void 0),e.jsxDEV(i,{children:[e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:316,columnNumber:13},void 0),e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Add User"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:322,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:315,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:252,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:244,columnNumber:7},void 0)},parameters:{docs:{description:{story:"Example of a form modal for creating new records."}}}},v={render:()=>{const[s,o]=a.useState(!1);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Open Modal (No Close Button)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:348,columnNumber:9},void 0),e.jsxDEV(l,{isOpen:s,onClose:()=>o(!1),showCloseButton:!1,children:[e.jsxDEV(t,{children:e.jsxDEV("h2",{className:"text-xl font-semibold",children:"Modal Without Close Button"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:361,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:360,columnNumber:11},void 0),e.jsxDEV(r,{children:[e.jsxDEV("p",{children:"This modal doesn't have a close button in the top-right corner."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:364,columnNumber:13},void 0),e.jsxDEV("p",{children:"You can still close it by clicking the backdrop or pressing Escape."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:365,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:363,columnNumber:11},void 0),e.jsxDEV(i,{children:e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Close Modal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:368,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:367,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:355,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:347,columnNumber:7},void 0)}},N={render:()=>{const[s,o]=a.useState(!1);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700",children:"Open Persistent Modal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:387,columnNumber:9},void 0),e.jsxDEV(l,{isOpen:s,onClose:()=>o(!1),closeOnOverlayClick:!1,closeOnEscape:!1,children:[e.jsxDEV(t,{children:e.jsxDEV("h2",{className:"text-xl font-semibold",children:"Persistent Modal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:401,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:400,columnNumber:11},void 0),e.jsxDEV(r,{children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("p",{children:"This modal cannot be closed by clicking the backdrop or pressing Escape."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:405,columnNumber:15},void 0),e.jsxDEV("p",{children:"You must use the explicit action buttons to close it."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:406,columnNumber:15},void 0),e.jsxDEV("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:e.jsxDEV("p",{className:"text-sm text-yellow-800",children:[e.jsxDEV("strong",{children:"Note:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:409,columnNumber:19},void 0)," Use this pattern carefully, as it can be frustrating for users."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:408,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:407,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:404,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:403,columnNumber:11},void 0),e.jsxDEV(i,{children:[e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:415,columnNumber:13},void 0),e.jsxDEV("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700",children:"Confirm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:421,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:414,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:394,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/modal/Modal.stories.tsx",lineNumber:386,columnNumber:7},void 0)},parameters:{docs:{description:{story:"Example of a modal that prevents accidental closure."}}}};var g,k,h;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Open Modal
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">Modal Title</h2>
          </ModalHeader>
          <ModalContent>
            <p>This is a basic modal with header and content sections.</p>
            <p>Click the backdrop, press Escape, or use the close button to dismiss it.</p>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Confirm
            </button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...(h=(k=m.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var D,j,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    return <div className="flex gap-4 flex-wrap">
        {(['sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size}>
            <button onClick={() => setActiveModal(size)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {size.toUpperCase()} Modal
            </button>
            
            <Modal isOpen={activeModal === size} onClose={() => setActiveModal(null)} size={size}>
              <ModalHeader>
                <h2 className="text-xl font-semibold">{size.toUpperCase()} Modal</h2>
              </ModalHeader>
              <ModalContent>
                <p>This is a {size} sized modal.</p>
                <p>Different sizes help accommodate various content types.</p>
              </ModalContent>
              <ModalFooter>
                <button onClick={() => setActiveModal(null)} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                  Close
                </button>
              </ModalFooter>
            </Modal>
          </div>)}
      </div>;
  }
}`,...(M=(j=u.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var E,C,U;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState<'center' | 'top' | null>(null);
    return <div className="flex gap-4">
        <button onClick={() => setPosition('center')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Center Modal
        </button>
        <button onClick={() => setPosition('top')} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Top Modal
        </button>
        
        <Modal isOpen={position !== null} onClose={() => setPosition(null)} position={position || 'center'}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">{position} Position</h2>
          </ModalHeader>
          <ModalContent>
            <p>This modal is positioned at the {position} of the screen.</p>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setPosition(null)} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}`,...(U=(C=p.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var V,w,O;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Delete Item
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader>
            <h2 className="text-xl font-semibold text-red-900">Confirm Deletion</h2>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-3">
              <p>Are you sure you want to delete this item?</p>
              <p className="text-sm text-gray-600">
                This action cannot be undone. The item will be permanently removed.
              </p>
            </div>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Delete
            </button>
          </ModalFooter>
        </Modal>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a confirmation dialog for destructive actions.'
      }
    }
  }
}`,...(O=(w=f.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var I,_,F;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Add User
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalHeader>
            <h2 className="text-xl font-semibold">Add New User</h2>
          </ModalHeader>
          <ModalContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john.doe@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>User</option>
                  <option>Admin</option>
                  <option>Manager</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about this user..." />
              </div>
            </form>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Add User
            </button>
          </ModalFooter>
        </Modal>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a form modal for creating new records.'
      }
    }
  }
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var S,T,z;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Open Modal (No Close Button)
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} showCloseButton={false}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">Modal Without Close Button</h2>
          </ModalHeader>
          <ModalContent>
            <p>This modal doesn't have a close button in the top-right corner.</p>
            <p>You can still close it by clicking the backdrop or pressing Escape.</p>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Close Modal
            </button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...(z=(T=v.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var P,H,A;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
          Open Persistent Modal
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnOverlayClick={false} closeOnEscape={false}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">Persistent Modal</h2>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-3">
              <p>This modal cannot be closed by clicking the backdrop or pressing Escape.</p>
              <p>You must use the explicit action buttons to close it.</p>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Use this pattern carefully, as it can be frustrating for users.
                </p>
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
              Confirm
            </button>
          </ModalFooter>
        </Modal>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a modal that prevents accidental closure.'
      }
    }
  }
}`,...(A=(H=N.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const ne=["Default","Sizes","Positions","ConfirmationDialog","FormModal","NoCloseButton","PreventClose"];export{f as ConfirmationDialog,m as Default,b as FormModal,v as NoCloseButton,p as Positions,N as PreventClose,u as Sizes,ne as __namedExportsOrder,se as default};
