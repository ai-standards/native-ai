import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as a,R as U}from"./index-DHZDe_v1.js";import{c as X}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const K=a.createContext(null),Q=()=>{const s=a.useContext(K);if(!s)throw new Error("usePopover must be used within a Popover component");return s},Y={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2",left:"right-full top-1/2 transform -translate-y-1/2 mr-2",right:"left-full top-1/2 transform -translate-y-1/2 ml-2","top-start":"bottom-full left-0 mb-2","top-end":"bottom-full right-0 mb-2","bottom-start":"top-full left-0 mt-2","bottom-end":"top-full right-0 mt-2"},l=({defaultOpen:s=!1,open:o,onOpenChange:n,trigger:r="click",placement:t="bottom",offset:f=0,closeOnClickOutside:c=!0,closeOnEscape:m=!0,children:b})=>{const[x,N]=a.useState(s),u=a.useRef(null),i=a.useRef(null),E=o!==void 0,d=E?o:x,v=p=>{E||N(p),n==null||n(p)};return a.useEffect(()=>{if(!c||!d)return;const p=P=>{const V=P.target;i.current&&!i.current.contains(V)&&u.current&&!u.current.contains(V)&&v(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[d,c,v]),a.useEffect(()=>{if(!m||!d)return;const p=P=>{P.key==="Escape"&&v(!1)};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[d,m,v]),e.jsxDEV(K.Provider,{value:{isOpen:d,setIsOpen:v,triggerRef:u,contentRef:i},children:e.jsxDEV("div",{className:"relative inline-block",children:b},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:107,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:106,columnNumber:5},void 0)},O=({asChild:s=!1,children:o,onClick:n,onMouseEnter:r,onMouseLeave:t,...f})=>{const{isOpen:c,setIsOpen:m,triggerRef:b}=Q(),x=i=>{m(!c),n==null||n(i)},N=i=>{m(!0),r==null||r(i)},u=i=>{m(!1),t==null||t(i)};return s&&U.isValidElement(o)?U.cloneElement(o,{ref:b,onClick:x,onMouseEnter:N,onMouseLeave:u,"aria-expanded":c,"aria-haspopup":"dialog"}):e.jsxDEV("button",{ref:b,onClick:x,onMouseEnter:N,onMouseLeave:u,"aria-expanded":c,"aria-haspopup":"dialog",...f,children:o},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:157,columnNumber:5},void 0)},w=({placement:s="bottom",className:o,children:n,...r})=>{const{isOpen:t,contentRef:f}=Q();return t?e.jsxDEV("div",{ref:f,className:X("absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg","animate-in fade-in-0 zoom-in-95 duration-200",Y[s],o),role:"dialog","aria-modal":"true",...r,children:[e.jsxDEV("div",{className:"absolute w-0 h-0 border-4 border-transparent",children:[s.startsWith("bottom")&&e.jsxDEV("div",{className:"absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:203,columnNumber:11},void 0),s.startsWith("top")&&e.jsxDEV("div",{className:"absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:206,columnNumber:11},void 0),s.startsWith("right")&&e.jsxDEV("div",{className:"absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:209,columnNumber:11},void 0),s.startsWith("left")&&e.jsxDEV("div",{className:"absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:212,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:201,columnNumber:7},void 0),e.jsxDEV("div",{className:"p-4",children:n},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:216,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.tsx",lineNumber:188,columnNumber:5},void 0):null};try{l.displayName="Popover",l.__docgenInfo={description:"",displayName:"Popover",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},trigger:{defaultValue:{value:"click"},description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'}]}},offset:{defaultValue:{value:"0"},description:"",name:"offset",required:!1,type:{name:"number"}},closeOnClickOutside:{defaultValue:{value:"true"},description:"",name:"closeOnClickOutside",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}}}}}catch{}try{O.displayName="PopoverTrigger",O.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="PopoverContent",w.__docgenInfo={description:"",displayName:"PopoverContent",props:{placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'}]}}}}}catch{}const ne={title:"Overlay/Popover",component:l,parameters:{layout:"centered",docs:{description:{component:"A floating overlay component that displays contextual content relative to a trigger element. Perfect for menus, tooltips, and additional information."}}}},y={args:{open:!1,onOpenChange:()=>{},children:null},render:()=>{const[s,o]=a.useState(!1);return e.jsxDEV("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxDEV(l,{open:s,onOpenChange:o,children:[e.jsxDEV("button",{onClick:()=>o(!s),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Click me"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:29,columnNumber:11},void 0),e.jsxDEV("div",{className:"p-3 min-w-[200px]",children:[e.jsxDEV("p",{className:"text-sm",children:"This is a popover with some content!"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:36,columnNumber:13},void 0),e.jsxDEV("p",{className:"text-xs text-gray-500 mt-2",children:"Click outside to close."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:37,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:35,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:28,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:27,columnNumber:7},void 0)}},g={args:{open:!1,onOpenChange:()=>{},children:null},render:()=>{const[s,o]=a.useState(!1);return e.jsxDEV("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxDEV(l,{open:s,onOpenChange:o,trigger:"hover",children:[e.jsxDEV("span",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"text-blue-600 underline cursor-pointer",children:"Hover over me"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:57,columnNumber:11},void 0),e.jsxDEV("div",{className:"p-3 min-w-[180px]",children:e.jsxDEV("p",{className:"text-sm",children:"This appears on hover!"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:65,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:64,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:52,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:51,columnNumber:7},void 0)}},h={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[s,o]=a.useState(!1),n=[{label:"Edit",icon:"️"},{label:"Duplicate",icon:""},{label:"Share",icon:""},{type:"divider"},{label:"Delete",icon:"️",danger:!0}];return e.jsxDEV("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxDEV(l,{isOpen:s,onClose:()=>o(!1),placement:"bottom-start",children:[e.jsxDEV("button",{onClick:()=>o(!s),className:"px-3 py-2 border border-gray-300 rounded text-sm flex items-center space-x-1",children:[e.jsxDEV("span",{children:"Actions"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:93,columnNumber:13},void 0),e.jsxDEV("span",{className:"text-xs",children:"▼"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:94,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:89,columnNumber:11},void 0),e.jsxDEV("div",{className:"min-w-[150px] py-1",children:n.map((r,t)=>e.jsxDEV("div",{children:r.type==="divider"?e.jsxDEV("hr",{className:"my-1 border-gray-200"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:100,columnNumber:19},void 0):e.jsxDEV("button",{onClick:()=>o(!1),className:`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${r.danger?"text-red-600 hover:bg-red-50":""}`,children:[e.jsxDEV("span",{children:r.icon},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:108,columnNumber:21},void 0),e.jsxDEV("span",{children:r.label},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:109,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:102,columnNumber:19},void 0)},t,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:98,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:96,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:88,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:87,columnNumber:7},void 0)}},k={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[s,o]=a.useState(!1),n={name:"John Doe",username:"johndoe",avatar:"",bio:"Frontend developer passionate about creating great user experiences.",followers:1234,following:567};return e.jsxDEV("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxDEV(l,{isOpen:s,onClose:()=>o(!1),trigger:"hover",placement:"top",children:[e.jsxDEV("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer text-lg",children:n.avatar},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:143,columnNumber:11},void 0),e.jsxDEV("div",{className:"p-4 max-w-xs",children:[e.jsxDEV("div",{className:"flex items-center space-x-3 mb-3",children:[e.jsxDEV("div",{className:"w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl",children:n.avatar},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:152,columnNumber:15},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"font-medium text-gray-900",children:n.name},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:156,columnNumber:17},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:["@",n.username]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:157,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:155,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:151,columnNumber:13},void 0),e.jsxDEV("p",{className:"text-sm text-gray-700 mb-3",children:n.bio},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:161,columnNumber:13},void 0),e.jsxDEV("div",{className:"flex space-x-4 text-sm text-gray-600",children:[e.jsxDEV("div",{children:[e.jsxDEV("span",{className:"font-medium text-gray-900",children:n.followers},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:165,columnNumber:17},void 0),e.jsxDEV("span",{className:"ml-1",children:"followers"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:166,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:164,columnNumber:15},void 0),e.jsxDEV("div",{children:[e.jsxDEV("span",{className:"font-medium text-gray-900",children:n.following},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:169,columnNumber:17},void 0),e.jsxDEV("span",{className:"ml-1",children:"following"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:170,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:168,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:163,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:150,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:137,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:136,columnNumber:7},void 0)}},j={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[s,o]=a.useState(!1),[n,r]=a.useState({status:"",category:"",featured:!1});return e.jsxDEV("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxDEV(l,{isOpen:s,onClose:()=>o(!1),placement:"bottom-end",children:[e.jsxDEV("button",{onClick:()=>o(!s),className:"px-3 py-2 border border-gray-300 rounded-md text-sm flex items-center space-x-2",children:[e.jsxDEV("span",{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:197,columnNumber:13},void 0),e.jsxDEV("span",{children:"Filter"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:198,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:193,columnNumber:11},void 0),e.jsxDEV("div",{className:"p-4 min-w-[250px]",children:[e.jsxDEV("h3",{className:"font-medium mb-3 text-sm",children:"Filter Options"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:201,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-xs font-medium mb-1",children:"Status"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:205,columnNumber:17},void 0),e.jsxDEV("select",{value:n.status,onChange:t=>r({...n,status:t.target.value}),className:"w-full border border-gray-300 rounded px-2 py-1 text-sm",children:[e.jsxDEV("option",{value:"",children:"All Statuses"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:211,columnNumber:19},void 0),e.jsxDEV("option",{value:"active",children:"Active"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:212,columnNumber:19},void 0),e.jsxDEV("option",{value:"inactive",children:"Inactive"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:213,columnNumber:19},void 0),e.jsxDEV("option",{value:"pending",children:"Pending"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:214,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:206,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:204,columnNumber:15},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-xs font-medium mb-1",children:"Category"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:219,columnNumber:17},void 0),e.jsxDEV("select",{value:n.category,onChange:t=>r({...n,category:t.target.value}),className:"w-full border border-gray-300 rounded px-2 py-1 text-sm",children:[e.jsxDEV("option",{value:"",children:"All Categories"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:225,columnNumber:19},void 0),e.jsxDEV("option",{value:"design",children:"Design"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:226,columnNumber:19},void 0),e.jsxDEV("option",{value:"development",children:"Development"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:227,columnNumber:19},void 0),e.jsxDEV("option",{value:"marketing",children:"Marketing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:228,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:220,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:218,columnNumber:15},void 0),e.jsxDEV("div",{children:e.jsxDEV("label",{className:"flex items-center space-x-2 text-xs",children:[e.jsxDEV("input",{type:"checkbox",checked:n.featured,onChange:t=>r({...n,featured:t.target.checked}),className:"w-3 h-3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:234,columnNumber:19},void 0),e.jsxDEV("span",{children:"Featured only"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:240,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:233,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:232,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:203,columnNumber:13},void 0),e.jsxDEV("div",{className:"flex space-x-2 mt-4",children:[e.jsxDEV("button",{onClick:()=>r({status:"",category:"",featured:!1}),className:"flex-1 px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50",children:"Clear"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:246,columnNumber:15},void 0),e.jsxDEV("button",{onClick:()=>o(!1),className:"flex-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700",children:"Apply"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:252,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:245,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:200,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:192,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:191,columnNumber:7},void 0)}},D={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[s,o]=a.useState(null),n=[{id:"top",label:"Top",placement:"top"},{id:"right",label:"Right",placement:"right"},{id:"bottom",label:"Bottom",placement:"bottom"},{id:"left",label:"Left",placement:"left"}];return e.jsxDEV("div",{className:"min-h-[400px] flex items-center justify-center",children:e.jsxDEV("div",{className:"grid grid-cols-2 gap-8",children:n.map(r=>e.jsxDEV(l,{isOpen:s===r.id,onClose:()=>o(null),placement:r.placement,children:[e.jsxDEV("button",{onClick:()=>o(r.id),className:"px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50",children:r.label},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:288,columnNumber:15},void 0),e.jsxDEV("div",{className:"p-3 text-sm",children:e.jsxDEV("p",{children:["Popover positioned to the ",r.label.toLowerCase()]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:295,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:294,columnNumber:15},void 0)]},r.id,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:282,columnNumber:13},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:280,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/popover/Popover.stories.tsx",lineNumber:279,columnNumber:7},void 0)}};var C,I,S;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    children: null
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="min-h-[300px] flex items-center justify-center">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Click me
          </button>
          <div className="p-3 min-w-[200px]">
            <p className="text-sm">This is a popover with some content!</p>
            <p className="text-xs text-gray-500 mt-2">Click outside to close.</p>
          </div>
        </Popover>
      </div>;
  }
}`,...(S=(I=y.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,F,A;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    children: null
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="min-h-[300px] flex items-center justify-center">
        <Popover open={isOpen} onOpenChange={setIsOpen} trigger="hover">
          <span onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="text-blue-600 underline cursor-pointer">
            Hover over me
          </span>
          <div className="p-3 min-w-[180px]">
            <p className="text-sm">This appears on hover!</p>
          </div>
        </Popover>
      </div>;
  }
}`,...(A=(F=g.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var L,R,q;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [{
      label: 'Edit',
      icon: '️'
    }, {
      label: 'Duplicate',
      icon: ''
    }, {
      label: 'Share',
      icon: ''
    }, {
      type: 'divider'
    }, {
      label: 'Delete',
      icon: '️',
      danger: true
    }];
    return <div className="min-h-[300px] flex items-center justify-center">
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="bottom-start">
          <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-2 border border-gray-300 rounded text-sm flex items-center space-x-1">
            <span>Actions</span>
            <span className="text-xs">▼</span>
          </button>
          <div className="min-w-[150px] py-1">
            {menuItems.map((item, index) => <div key={index}>
                {item.type === 'divider' ? <hr className="my-1 border-gray-200" /> : <button onClick={() => setIsOpen(false)} className={\`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 \${item.danger ? 'text-red-600 hover:bg-red-50' : ''}\`}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>}
              </div>)}
          </div>
        </Popover>
      </div>;
  }
}`,...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var M,T,H;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = {
      name: 'John Doe',
      username: 'johndoe',
      avatar: '',
      bio: 'Frontend developer passionate about creating great user experiences.',
      followers: 1234,
      following: 567
    };
    return <div className="min-h-[300px] flex items-center justify-center">
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} trigger="hover" placement="top">
          <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer text-lg">
            {user.avatar}
          </div>
          <div className="p-4 max-w-xs">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                {user.avatar}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">@{user.username}</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-3">{user.bio}</p>
            
            <div className="flex space-x-4 text-sm text-gray-600">
              <div>
                <span className="font-medium text-gray-900">{user.followers}</span>
                <span className="ml-1">followers</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">{user.following}</span>
                <span className="ml-1">following</span>
              </div>
            </div>
          </div>
        </Popover>
      </div>;
  }
}`,...(H=(T=k.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var W,B,z;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
      status: '',
      category: '',
      featured: false
    });
    return <div className="min-h-[300px] flex items-center justify-center">
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="bottom-end">
          <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-2 border border-gray-300 rounded-md text-sm flex items-center space-x-2">
            <span></span>
            <span>Filter</span>
          </button>
          <div className="p-4 min-w-[250px]">
            <h3 className="font-medium mb-3 text-sm">Filter Options</h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Status</label>
                <select value={filters.status} onChange={e => setFilters({
                ...filters,
                status: e.target.value
              })} className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                  <option value="">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium mb-1">Category</label>
                <select value={filters.category} onChange={e => setFilters({
                ...filters,
                category: e.target.value
              })} className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                  <option value="">All Categories</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center space-x-2 text-xs">
                  <input type="checkbox" checked={filters.featured} onChange={e => setFilters({
                  ...filters,
                  featured: e.target.checked
                })} className="w-3 h-3" />
                  <span>Featured only</span>
                </label>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4">
              <button onClick={() => setFilters({
              status: '',
              category: '',
              featured: false
            })} className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
                Clear
              </button>
              <button onClick={() => setIsOpen(false)} className="flex-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>
        </Popover>
      </div>;
  }
}`,...(z=(B=j.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var J,$,G;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [activePopover, setActivePopover] = useState<string | null>(null);
    const placements = [{
      id: 'top',
      label: 'Top',
      placement: 'top' as const
    }, {
      id: 'right',
      label: 'Right',
      placement: 'right' as const
    }, {
      id: 'bottom',
      label: 'Bottom',
      placement: 'bottom' as const
    }, {
      id: 'left',
      label: 'Left',
      placement: 'left' as const
    }];
    return <div className="min-h-[400px] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          {placements.map(item => <Popover key={item.id} isOpen={activePopover === item.id} onClose={() => setActivePopover(null)} placement={item.placement}>
              <button onClick={() => setActivePopover(item.id)} className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                {item.label}
              </button>
              <div className="p-3 text-sm">
                <p>Popover positioned to the {item.label.toLowerCase()}</p>
              </div>
            </Popover>)}
        </div>
      </div>;
  }
}`,...(G=($=D.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const re=["Default","Hover","Menu","UserProfile","FilterDropdown","Placements"];export{y as Default,j as FilterDropdown,g as Hover,h as Menu,D as Placements,k as UserProfile,re as __namedExportsOrder,ne as default};
