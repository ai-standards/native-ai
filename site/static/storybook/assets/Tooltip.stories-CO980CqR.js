import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as u,R as T}from"./index-BwDkhjyp.js";import{c as P}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const B=u.createContext(null),R=()=>{const t=u.useContext(B);if(!t)throw new Error("useTooltip must be used within a Tooltip component");return t},n=({defaultOpen:t=!1,open:l,onOpenChange:r,delayDuration:x=500,children:g})=>{const[h,b]=u.useState(t),a=u.useRef(),i=l!==void 0,L=i?l:h,f=y=>{i||b(y),r==null||r(y)},U=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{f(!0)},x)},H=()=>{a.current&&clearTimeout(a.current),f(!1)};return e.jsx(B.Provider,{value:{isOpen:L,setIsOpen:f},children:e.jsx("div",{className:"relative inline-block",onMouseEnter:U,onMouseLeave:H,children:g})})},o=({asChild:t=!1,children:l,...r})=>t&&T.isValidElement(l)?T.cloneElement(l,{...r,"aria-describedby":"tooltip-content"}):e.jsx("span",{...r,"aria-describedby":"tooltip-content",children:l}),A={top:"bottom-full mb-2",bottom:"top-full mt-2",left:"right-full mr-2",right:"left-full ml-2"},D={start:{top:"left-0",bottom:"left-0",left:"top-0",right:"top-0"},center:{top:"left-1/2 transform -translate-x-1/2",bottom:"left-1/2 transform -translate-x-1/2",left:"top-1/2 transform -translate-y-1/2",right:"top-1/2 transform -translate-y-1/2"},end:{top:"right-0",bottom:"right-0",left:"bottom-0",right:"bottom-0"}},s=({side:t="top",align:l="center",sideOffset:r=0,className:x,children:g,style:h,...b})=>{const{isOpen:a}=R();if(!a)return null;const i=r?{top:{marginBottom:`${r}px`},bottom:{marginTop:`${r}px`},left:{marginRight:`${r}px`},right:{marginLeft:`${r}px`}}[t]:{};return e.jsxs("div",{id:"tooltip-content",role:"tooltip",className:P("absolute z-50 px-3 py-1 text-sm text-white bg-gray-900 rounded shadow-lg","animate-in fade-in-0 zoom-in-95 duration-200","max-w-xs break-words",A[t],D[l][t],x),style:{...i,...h},...b,children:[g,t==="top"&&e.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2",children:e.jsx("div",{className:"w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"})}),t==="bottom"&&e.jsx("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2",children:e.jsx("div",{className:"w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"})}),t==="left"&&e.jsx("div",{className:"absolute left-full top-1/2 transform -translate-y-1/2",children:e.jsx("div",{className:"w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"})}),t==="right"&&e.jsx("div",{className:"absolute right-full top-1/2 transform -translate-y-1/2",children:e.jsx("div",{className:"w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"})})]})};try{n.displayName="Tooltip",n.__docgenInfo={description:"",displayName:"Tooltip",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},delayDuration:{defaultValue:{value:"500"},description:"",name:"delayDuration",required:!1,type:{name:"number"}}}}}catch{}try{o.displayName="TooltipTrigger",o.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="TooltipContent",s.__docgenInfo={description:"",displayName:"TooltipContent",props:{side:{defaultValue:{value:"top"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},sideOffset:{defaultValue:{value:"0"},description:"",name:"sideOffset",required:!1,type:{name:"number"}}}}}catch{}const $={title:"Overlay/Tooltip",component:n,parameters:{layout:"centered",docs:{description:{component:"A lightweight tooltip component that displays helpful text on hover or focus. Perfect for providing contextual information and UI guidance."}}}},c={args:{children:null},render:()=>e.jsx("div",{className:"min-h-[200px] flex items-center justify-center",children:e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Hover me"})}),e.jsx(s,{children:"This is a helpful tooltip"})]})})},d={args:{children:null},render:()=>e.jsx("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Email Address",e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("button",{type:"button",className:"ml-2 text-gray-400 hover:text-gray-600",children:e.jsx("span",{className:"text-sm",children:"ℹ️"})})}),e.jsx(s,{children:"We'll never share your email with anyone else."})]})]}),e.jsx("input",{type:"email",className:"w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your@email.com"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Password",e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("button",{type:"button",className:"ml-2 text-gray-400 hover:text-gray-600",children:e.jsx("span",{className:"text-sm"})})}),e.jsx(s,{children:"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."})]})]}),e.jsx("input",{type:"password",className:"w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"••••••••"})]})]})})},p={args:{children:null},render:()=>e.jsx("div",{className:"min-h-[200px] flex items-center justify-center",children:e.jsxs("div",{className:"flex space-x-1 border border-gray-200 rounded p-1",children:[e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",children:e.jsx("strong",{className:"text-sm",children:"B"})})}),e.jsx(s,{children:"Bold (Ctrl+B)"})]}),e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",children:e.jsx("em",{className:"text-sm",children:"I"})})}),e.jsx(s,{children:"Italic (Ctrl+I)"})]}),e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",children:e.jsx("u",{className:"text-sm",children:"U"})})}),e.jsx(s,{children:"Underline (Ctrl+U)"})]}),e.jsx("div",{className:"w-px bg-gray-200 mx-1"}),e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",children:e.jsx("span",{className:"text-sm"})})}),e.jsx(s,{children:"Insert Link (Ctrl+K)"})]})]})})},m={args:{children:null},render:()=>e.jsxs("div",{className:"min-h-[200px] flex items-center justify-center space-x-4",children:[e.jsxs(n,{children:[e.jsx(o,{children:e.jsxs("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",children:[e.jsx("span",{className:"mr-1"}),"Success"]})}),e.jsx(s,{children:"All systems operational. Last check: 2 minutes ago."})]}),e.jsxs(n,{children:[e.jsx(o,{children:e.jsxs("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",children:[e.jsx("span",{className:"mr-1"}),"Warning"]})}),e.jsx(s,{children:"High memory usage detected. Consider restarting the service."})]}),e.jsxs(n,{children:[e.jsx(o,{children:e.jsxs("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800",children:[e.jsx("span",{className:"mr-1"}),"Error"]})}),e.jsx(s,{children:"Connection failed. Check network settings and try again."})]})]})};var v,j,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var C,w,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var I,k,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var S,V,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const z=["Default","FormHelp","IconTooltips","StatusIndicators"];export{c as Default,d as FormHelp,p as IconTooltips,m as StatusIndicators,z as __namedExportsOrder,$ as default};
