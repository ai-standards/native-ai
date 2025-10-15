import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as d,R as g}from"./index-DHZDe_v1.js";import{c as H}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const S=d.createContext(null),P=()=>{const o=d.useContext(S);if(!o)throw new Error("useTooltip must be used within a Tooltip component");return o},t=({defaultOpen:o=!1,open:i,onOpenChange:s,delayDuration:f=500,children:v})=>{const[N,b]=d.useState(o),l=d.useRef(),a=i!==void 0,q=a?i:N,x=y=>{a||b(y),s==null||s(y)},B=()=>{l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{x(!0)},f)},L=()=>{l.current&&clearTimeout(l.current),x(!1)};return e.jsxDEV(S.Provider,{value:{isOpen:q,setIsOpen:x},children:e.jsxDEV("div",{className:"relative inline-block",onMouseEnter:B,onMouseLeave:L,children:v},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:67,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:66,columnNumber:5},void 0)},n=({asChild:o=!1,children:i,...s})=>o&&g.isValidElement(i)?g.cloneElement(i,{...s,"aria-describedby":"tooltip-content"}):e.jsxDEV("span",{...s,"aria-describedby":"tooltip-content",children:i},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:97,columnNumber:5},void 0),R={top:"bottom-full mb-2",bottom:"top-full mt-2",left:"right-full mr-2",right:"left-full ml-2"},A={start:{top:"left-0",bottom:"left-0",left:"top-0",right:"top-0"},center:{top:"left-1/2 transform -translate-x-1/2",bottom:"left-1/2 transform -translate-x-1/2",left:"top-1/2 transform -translate-y-1/2",right:"top-1/2 transform -translate-y-1/2"},end:{top:"right-0",bottom:"right-0",left:"bottom-0",right:"bottom-0"}},r=({side:o="top",align:i="center",sideOffset:s=0,className:f,children:v,style:N,...b})=>{const{isOpen:l}=P();if(!l)return null;const a=s?{top:{marginBottom:`${s}px`},bottom:{marginTop:`${s}px`},left:{marginRight:`${s}px`},right:{marginLeft:`${s}px`}}[o]:{};return e.jsxDEV("div",{id:"tooltip-content",role:"tooltip",className:H("absolute z-50 px-3 py-1 text-sm text-white bg-gray-900 rounded shadow-lg","animate-in fade-in-0 zoom-in-95 duration-200","max-w-xs break-words",R[o],A[i][o],f),style:{...a,...N},...b,children:[v,o==="top"&&e.jsxDEV("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2",children:e.jsxDEV("div",{className:"w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:182,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:181,columnNumber:9},void 0),o==="bottom"&&e.jsxDEV("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2",children:e.jsxDEV("div",{className:"w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:187,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:186,columnNumber:9},void 0),o==="left"&&e.jsxDEV("div",{className:"absolute left-full top-1/2 transform -translate-y-1/2",children:e.jsxDEV("div",{className:"w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:192,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:191,columnNumber:9},void 0),o==="right"&&e.jsxDEV("div",{className:"absolute right-full top-1/2 transform -translate-y-1/2",children:e.jsxDEV("div",{className:"w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:197,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:196,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.tsx",lineNumber:163,columnNumber:5},void 0)};try{t.displayName="Tooltip",t.__docgenInfo={description:"",displayName:"Tooltip",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},delayDuration:{defaultValue:{value:"500"},description:"",name:"delayDuration",required:!1,type:{name:"number"}}}}}catch{}try{n.displayName="TooltipTrigger",n.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="TooltipContent",r.__docgenInfo={description:"",displayName:"TooltipContent",props:{side:{defaultValue:{value:"top"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},sideOffset:{defaultValue:{value:"0"},description:"",name:"sideOffset",required:!1,type:{name:"number"}}}}}catch{}const $={title:"Overlay/Tooltip",component:t,parameters:{layout:"centered",docs:{description:{component:"A lightweight tooltip component that displays helpful text on hover or focus. Perfect for providing contextual information and UI guidance."}}}},p={args:{children:null},render:()=>e.jsxDEV("div",{className:"min-h-[200px] flex items-center justify-center",children:e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Hover me"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:26,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:25,columnNumber:9},void 0),e.jsxDEV(r,{children:"This is a helpful tooltip"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:30,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:24,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:23,columnNumber:5},void 0)},m={args:{children:null},render:()=>e.jsxDEV("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxDEV("div",{className:"w-full max-w-md space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Email Address",e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("button",{type:"button",className:"ml-2 text-gray-400 hover:text-gray-600",children:e.jsxDEV("span",{className:"text-sm",children:"ℹ️"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:52,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:48,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:47,columnNumber:15},void 0),e.jsxDEV(r,{children:"We'll never share your email with anyone else."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:55,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:46,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:44,columnNumber:11},void 0),e.jsxDEV("input",{type:"email",className:"w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your@email.com"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:60,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:43,columnNumber:9},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Password",e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("button",{type:"button",className:"ml-2 text-gray-400 hover:text-gray-600",children:e.jsxDEV("span",{className:"text-sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:76,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:72,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:71,columnNumber:15},void 0),e.jsxDEV(r,{children:"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:79,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:70,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:68,columnNumber:11},void 0),e.jsxDEV("input",{type:"password",className:"w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"••••••••"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:84,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:42,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:41,columnNumber:5},void 0)},c={args:{children:null},render:()=>e.jsxDEV("div",{className:"min-h-[200px] flex items-center justify-center",children:e.jsxDEV("div",{className:"flex space-x-1 border border-gray-200 rounded p-1",children:[e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("button",{className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",children:e.jsxDEV("strong",{className:"text-sm",children:"B"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:103,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:102,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:101,columnNumber:11},void 0),e.jsxDEV(r,{children:"Bold (Ctrl+B)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:106,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:100,columnNumber:9},void 0),e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("button",{className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",children:e.jsxDEV("em",{className:"text-sm",children:"I"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:114,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:113,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:112,columnNumber:11},void 0),e.jsxDEV(r,{children:"Italic (Ctrl+I)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:117,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:111,columnNumber:9},void 0),e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("button",{className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",children:e.jsxDEV("u",{className:"text-sm",children:"U"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:125,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:124,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:123,columnNumber:11},void 0),e.jsxDEV(r,{children:"Underline (Ctrl+U)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:128,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:122,columnNumber:9},void 0),e.jsxDEV("div",{className:"w-px bg-gray-200 mx-1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:133,columnNumber:9},void 0),e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("button",{className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",children:e.jsxDEV("span",{className:"text-sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:138,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:137,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:136,columnNumber:11},void 0),e.jsxDEV(r,{children:"Insert Link (Ctrl+K)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:141,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:135,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:99,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:98,columnNumber:5},void 0)},u={args:{children:null},render:()=>e.jsxDEV("div",{className:"min-h-[200px] flex items-center justify-center space-x-4",children:[e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",children:[e.jsxDEV("span",{className:"mr-1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:157,columnNumber:13},void 0),"Success"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:156,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:155,columnNumber:9},void 0),e.jsxDEV(r,{children:"All systems operational. Last check: 2 minutes ago."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:161,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:154,columnNumber:7},void 0),e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",children:[e.jsxDEV("span",{className:"mr-1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:169,columnNumber:13},void 0),"Warning"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:168,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:167,columnNumber:9},void 0),e.jsxDEV(r,{children:"High memory usage detected. Consider restarting the service."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:173,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:166,columnNumber:7},void 0),e.jsxDEV(t,{children:[e.jsxDEV(n,{children:e.jsxDEV("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800",children:[e.jsxDEV("span",{className:"mr-1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:181,columnNumber:13},void 0),"Error"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:180,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:179,columnNumber:9},void 0),e.jsxDEV(r,{children:"Connection failed. Check network settings and try again."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:185,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:178,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/overlay/tooltip/Tooltip.stories.tsx",lineNumber:153,columnNumber:5},void 0)};var T,k,j;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="min-h-[200px] flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>
          This is a helpful tooltip
        </TooltipContent>
      </Tooltip>
    </div>
}`,...(j=(k=p.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var D,h,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="min-h-[300px] flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
            <Tooltip>
              <TooltipTrigger>
                <button type="button" className="ml-2 text-gray-400 hover:text-gray-600">
                  <span className="text-sm">ℹ️</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                We'll never share your email with anyone else.
              </TooltipContent>
            </Tooltip>
          </label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
            <Tooltip>
              <TooltipTrigger>
                <button type="button" className="ml-2 text-gray-400 hover:text-gray-600">
                  <span className="text-sm"></span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.
              </TooltipContent>
            </Tooltip>
          </label>
          <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
        </div>
      </div>
    </div>
}`,...(E=(h=m.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var V,U,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="min-h-[200px] flex items-center justify-center">
      <div className="flex space-x-1 border border-gray-200 rounded p-1">
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <strong className="text-sm">B</strong>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Bold (Ctrl+B)
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <em className="text-sm">I</em>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Italic (Ctrl+I)
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <u className="text-sm">U</u>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Underline (Ctrl+U)
          </TooltipContent>
        </Tooltip>
        
        <div className="w-px bg-gray-200 mx-1" />
        
        <Tooltip>
          <TooltipTrigger>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <span className="text-sm"></span>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Insert Link (Ctrl+K)
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
}`,...(C=(U=c.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var w,_,I;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="min-h-[200px] flex items-center justify-center space-x-4">
      <Tooltip>
        <TooltipTrigger>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="mr-1"></span>
            Success
          </span>
        </TooltipTrigger>
        <TooltipContent>
          All systems operational. Last check: 2 minutes ago.
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <span className="mr-1"></span>
            Warning
          </span>
        </TooltipTrigger>
        <TooltipContent>
          High memory usage detected. Consider restarting the service.
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <span className="mr-1"></span>
            Error
          </span>
        </TooltipTrigger>
        <TooltipContent>
          Connection failed. Check network settings and try again.
        </TooltipContent>
      </Tooltip>
    </div>
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const z=["Default","FormHelp","IconTooltips","StatusIndicators"];export{p as Default,m as FormHelp,c as IconTooltips,u as StatusIndicators,z as __namedExportsOrder,$ as default};
