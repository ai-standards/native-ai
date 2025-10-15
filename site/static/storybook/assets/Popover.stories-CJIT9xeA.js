import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as l,R as I}from"./index-BwDkhjyp.js";import{c as X}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const K=l.createContext(null),Q=()=>{const n=l.useContext(K);if(!n)throw new Error("usePopover must be used within a Popover component");return n},Y={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2",left:"right-full top-1/2 transform -translate-y-1/2 mr-2",right:"left-full top-1/2 transform -translate-y-1/2 ml-2","top-start":"bottom-full left-0 mb-2","top-end":"bottom-full right-0 mb-2","bottom-start":"top-full left-0 mt-2","bottom-end":"top-full right-0 mt-2"},i=({defaultOpen:n=!1,open:t,onOpenChange:s,trigger:a="click",placement:r="bottom",offset:v=0,closeOnClickOutside:d=!0,closeOnEscape:p=!0,children:f})=>{const[h,b]=l.useState(n),m=l.useRef(null),o=l.useRef(null),P=t!==void 0,u=P?t:h,x=c=>{P||b(c),s==null||s(c)};return l.useEffect(()=>{if(!d||!u)return;const c=C=>{const k=C.target;o.current&&!o.current.contains(k)&&m.current&&!m.current.contains(k)&&x(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[u,d,x]),l.useEffect(()=>{if(!p||!u)return;const c=C=>{C.key==="Escape"&&x(!1)};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[u,p,x]),e.jsx(K.Provider,{value:{isOpen:u,setIsOpen:x,triggerRef:m,contentRef:o},children:e.jsx("div",{className:"relative inline-block",children:f})})},S=({asChild:n=!1,children:t,onClick:s,onMouseEnter:a,onMouseLeave:r,...v})=>{const{isOpen:d,setIsOpen:p,triggerRef:f}=Q(),h=o=>{p(!d),s==null||s(o)},b=o=>{p(!0),a==null||a(o)},m=o=>{p(!1),r==null||r(o)};return n&&I.isValidElement(t)?I.cloneElement(t,{ref:f,onClick:h,onMouseEnter:b,onMouseLeave:m,"aria-expanded":d,"aria-haspopup":"dialog"}):e.jsx("button",{ref:f,onClick:h,onMouseEnter:b,onMouseLeave:m,"aria-expanded":d,"aria-haspopup":"dialog",...v,children:t})},_=({placement:n="bottom",className:t,children:s,...a})=>{const{isOpen:r,contentRef:v}=Q();return r?e.jsxs("div",{ref:v,className:X("absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg","animate-in fade-in-0 zoom-in-95 duration-200",Y[n],t),role:"dialog","aria-modal":"true",...a,children:[e.jsxs("div",{className:"absolute w-0 h-0 border-4 border-transparent",children:[n.startsWith("bottom")&&e.jsx("div",{className:"absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"}),n.startsWith("top")&&e.jsx("div",{className:"absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"}),n.startsWith("right")&&e.jsx("div",{className:"absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"}),n.startsWith("left")&&e.jsx("div",{className:"absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white"})]}),e.jsx("div",{className:"p-4",children:s})]}):null};try{i.displayName="Popover",i.__docgenInfo={description:"",displayName:"Popover",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},trigger:{defaultValue:{value:"click"},description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},offset:{defaultValue:{value:"0"},description:"",name:"offset",required:!1,type:{name:"number"}},closeOnClickOutside:{defaultValue:{value:"true"},description:"",name:"closeOnClickOutside",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="PopoverTrigger",S.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="PopoverContent",_.__docgenInfo={description:"",displayName:"PopoverContent",props:{placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}}}}}catch{}const se={title:"Overlay/Popover",component:i,parameters:{layout:"centered",docs:{description:{component:"A floating overlay component that displays contextual content relative to a trigger element. Perfect for menus, tooltips, and additional information."}}}},g={args:{open:!1,onOpenChange:()=>{},children:null},render:()=>{const[n,t]=l.useState(!1);return e.jsx("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxs(i,{open:n,onOpenChange:t,children:[e.jsx("button",{onClick:()=>t(!n),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Click me"}),e.jsxs("div",{className:"p-3 min-w-[200px]",children:[e.jsx("p",{className:"text-sm",children:"This is a popover with some content!"}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Click outside to close."})]})]})})}},y={args:{open:!1,onOpenChange:()=>{},children:null},render:()=>{const[n,t]=l.useState(!1);return e.jsx("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxs(i,{open:n,onOpenChange:t,trigger:"hover",children:[e.jsx("span",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"text-blue-600 underline cursor-pointer",children:"Hover over me"}),e.jsx("div",{className:"p-3 min-w-[180px]",children:e.jsx("p",{className:"text-sm",children:"This appears on hover!"})})]})})}},N={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[n,t]=l.useState(!1),s=[{label:"Edit",icon:"️"},{label:"Duplicate",icon:""},{label:"Share",icon:""},{type:"divider"},{label:"Delete",icon:"️",danger:!0}];return e.jsx("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxs(i,{isOpen:n,onClose:()=>t(!1),placement:"bottom-start",children:[e.jsxs("button",{onClick:()=>t(!n),className:"px-3 py-2 border border-gray-300 rounded text-sm flex items-center space-x-1",children:[e.jsx("span",{children:"Actions"}),e.jsx("span",{className:"text-xs",children:"▼"})]}),e.jsx("div",{className:"min-w-[150px] py-1",children:s.map((a,r)=>e.jsx("div",{children:a.type==="divider"?e.jsx("hr",{className:"my-1 border-gray-200"}):e.jsxs("button",{onClick:()=>t(!1),className:`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${a.danger?"text-red-600 hover:bg-red-50":""}`,children:[e.jsx("span",{children:a.icon}),e.jsx("span",{children:a.label})]})},r))})]})})}},j={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[n,t]=l.useState(!1),s={name:"John Doe",username:"johndoe",avatar:"",bio:"Frontend developer passionate about creating great user experiences.",followers:1234,following:567};return e.jsx("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxs(i,{isOpen:n,onClose:()=>t(!1),trigger:"hover",placement:"top",children:[e.jsx("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer text-lg",children:s.avatar}),e.jsxs("div",{className:"p-4 max-w-xs",children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl",children:s.avatar}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-gray-900",children:s.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["@",s.username]})]})]}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:s.bio}),e.jsxs("div",{className:"flex space-x-4 text-sm text-gray-600",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-gray-900",children:s.followers}),e.jsx("span",{className:"ml-1",children:"followers"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-gray-900",children:s.following}),e.jsx("span",{className:"ml-1",children:"following"})]})]})]})]})})}},O={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[n,t]=l.useState(!1),[s,a]=l.useState({status:"",category:"",featured:!1});return e.jsx("div",{className:"min-h-[300px] flex items-center justify-center",children:e.jsxs(i,{isOpen:n,onClose:()=>t(!1),placement:"bottom-end",children:[e.jsxs("button",{onClick:()=>t(!n),className:"px-3 py-2 border border-gray-300 rounded-md text-sm flex items-center space-x-2",children:[e.jsx("span",{}),e.jsx("span",{children:"Filter"})]}),e.jsxs("div",{className:"p-4 min-w-[250px]",children:[e.jsx("h3",{className:"font-medium mb-3 text-sm",children:"Filter Options"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium mb-1",children:"Status"}),e.jsxs("select",{value:s.status,onChange:r=>a({...s,status:r.target.value}),className:"w-full border border-gray-300 rounded px-2 py-1 text-sm",children:[e.jsx("option",{value:"",children:"All Statuses"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"pending",children:"Pending"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium mb-1",children:"Category"}),e.jsxs("select",{value:s.category,onChange:r=>a({...s,category:r.target.value}),className:"w-full border border-gray-300 rounded px-2 py-1 text-sm",children:[e.jsx("option",{value:"",children:"All Categories"}),e.jsx("option",{value:"design",children:"Design"}),e.jsx("option",{value:"development",children:"Development"}),e.jsx("option",{value:"marketing",children:"Marketing"})]})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center space-x-2 text-xs",children:[e.jsx("input",{type:"checkbox",checked:s.featured,onChange:r=>a({...s,featured:r.target.checked}),className:"w-3 h-3"}),e.jsx("span",{children:"Featured only"})]})})]}),e.jsxs("div",{className:"flex space-x-2 mt-4",children:[e.jsx("button",{onClick:()=>a({status:"",category:"",featured:!1}),className:"flex-1 px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50",children:"Clear"}),e.jsx("button",{onClick:()=>t(!1),className:"flex-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700",children:"Apply"})]})]})]})})}},w={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[n,t]=l.useState(null),s=[{id:"top",label:"Top",placement:"top"},{id:"right",label:"Right",placement:"right"},{id:"bottom",label:"Bottom",placement:"bottom"},{id:"left",label:"Left",placement:"left"}];return e.jsx("div",{className:"min-h-[400px] flex items-center justify-center",children:e.jsx("div",{className:"grid grid-cols-2 gap-8",children:s.map(a=>e.jsxs(i,{isOpen:n===a.id,onClose:()=>t(null),placement:a.placement,children:[e.jsx("button",{onClick:()=>t(a.id),className:"px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50",children:a.label}),e.jsx("div",{className:"p-3 text-sm",children:e.jsxs("p",{children:["Popover positioned to the ",a.label.toLowerCase()]})})]},a.id))})})}};var E,F,A;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(F=g.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var D,L,R;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(L=y.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var V,q,M;N.parameters={...N.parameters,docs:{...(V=N.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(q=N.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var T,H,W;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(H=j.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var B,z,J;O.parameters={...O.parameters,docs:{...(B=O.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(z=O.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var U,$,G;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=($=w.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const ae=["Default","Hover","Menu","UserProfile","FilterDropdown","Placements"];export{g as Default,O as FilterDropdown,y as Hover,N as Menu,w as Placements,j as UserProfile,ae as __namedExportsOrder,se as default};
