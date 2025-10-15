import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as M,R as J}from"./index-BwDkhjyp.js";import{c as x}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const H=M.createContext(void 0),w=()=>{const t=M.useContext(H);if(!t)throw new Error("Menu components must be used within a Menu");return t},i=({open:t,onOpenChange:r,defaultOpen:o=!1,children:a,className:l,...s})=>{const[u,m]=M.useState(o),[f,_]=M.useState(null),p=t!==void 0?t:u,h=I=>{t===void 0&&m(I),r==null||r(I)};return M.useEffect(()=>{const I=O=>{O.key==="Escape"&&p&&h(!1)},C=O=>{p&&!O.defaultPrevented&&h(!1)};return p&&(document.addEventListener("keydown",I),document.addEventListener("mousedown",C)),()=>{document.removeEventListener("keydown",I),document.removeEventListener("mousedown",C)}},[p,h]),e.jsx(H.Provider,{value:{isOpen:p,setIsOpen:h,activeItem:f,setActiveItem:_},children:e.jsx("div",{className:x("relative inline-block",l),...s,children:a})})},c=({children:t,className:r,onClick:o,...a})=>{const{isOpen:l,setIsOpen:s}=w(),u=m=>{m.preventDefault(),s(!l),o==null||o(m)};return e.jsx("button",{className:x("inline-flex items-center justify-center px-3 py-2","border border-gray-300 rounded-md bg-white text-gray-700","hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500","transition-colors duration-200",r),onClick:u,"aria-expanded":l,"aria-haspopup":"true",...a,children:t})},d=({children:t,placement:r="bottom-start",offset:o=4,showArrow:a=!1,className:l,...s})=>{const{isOpen:u}=w(),m=M.useRef(null),f={"bottom-start":"top-full left-0","bottom-end":"top-full right-0","top-start":"bottom-full left-0","top-end":"bottom-full right-0"};return u?e.jsx("div",{ref:m,className:x("absolute z-50 min-w-48 rounded-md border border-gray-200","bg-white shadow-lg py-1",f[r],l),style:{marginTop:r.startsWith("bottom")?o:-o},role:"menu","aria-orientation":"vertical",...s,children:t}):null},n=({children:t,disabled:r=!1,value:o,onSelect:a,className:l,onClick:s,...u})=>{const{setIsOpen:m,setActiveItem:f}=w(),_=h=>{r||(s==null||s(h),a==null||a(o),m(!1))},p=()=>{!r&&o&&f(o)};return e.jsx("div",{className:x("px-3 py-2 text-sm text-gray-700 cursor-pointer","hover:bg-gray-100 hover:text-gray-900","focus:bg-gray-100 focus:text-gray-900 focus:outline-none",{"text-gray-400 cursor-not-allowed hover:bg-transparent hover:text-gray-400":r},l),role:"menuitem",tabIndex:r?-1:0,onClick:_,onMouseEnter:p,"aria-disabled":r,...u,children:t})},g=({className:t,...r})=>e.jsx("div",{className:x("h-px bg-gray-200 my-1",t),role:"separator",...r}),N=({trigger:t,children:r,defaultOpen:o=!1,className:a,...l})=>{const[s,u]=M.useState(o);return e.jsxs("div",{className:x("relative",a),...l,children:[e.jsxs(n,{onClick:()=>u(!s),className:"flex items-center justify-between",children:[t,e.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),s&&e.jsx("div",{className:"absolute left-full top-0 ml-1 min-w-48 rounded-md border border-gray-200 bg-white shadow-lg py-1 z-50",role:"menu",children:r})]})};try{i.displayName="Menu",i.__docgenInfo={description:"",displayName:"Menu",props:{open:{defaultValue:null,description:"Whether menu is open (controlled)",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback when menu open state changes",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},defaultOpen:{defaultValue:{value:"false"},description:"Initial open state (uncontrolled)",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="MenuTrigger",c.__docgenInfo={description:"",displayName:"MenuTrigger",props:{children:{defaultValue:null,description:"Custom trigger content",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{d.displayName="MenuContent",d.__docgenInfo={description:"",displayName:"MenuContent",props:{placement:{defaultValue:{value:"bottom-start"},description:"Placement relative to trigger",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'}]}},offset:{defaultValue:{value:"4"},description:"Offset from trigger",name:"offset",required:!1,type:{name:"number"}},showArrow:{defaultValue:{value:"false"},description:"Whether to show arrow",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}try{n.displayName="MenuItem",n.__docgenInfo={description:"",displayName:"MenuItem",props:{disabled:{defaultValue:{value:"false"},description:"Whether item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Item value for keyboard navigation",name:"value",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"Click handler",name:"onSelect",required:!1,type:{name:"((value?: string) => void)"}}}}}catch{}try{g.displayName="MenuSeparator",g.__docgenInfo={description:"",displayName:"MenuSeparator",props:{}}}catch{}try{N.displayName="MenuSub",N.__docgenInfo={description:"",displayName:"MenuSub",props:{trigger:{defaultValue:null,description:"Submenu trigger content",name:"trigger",required:!0,type:{name:"ReactNode"}},defaultOpen:{defaultValue:{value:"false"},description:"Initial open state",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const Y={title:"Navigation/Menu",component:i,parameters:{layout:"centered"},tags:["autodocs"]},j={render:()=>e.jsxs(i,{children:[e.jsxs(c,{children:["Open Menu",e.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),e.jsxs(d,{children:[e.jsx(n,{onSelect:()=>alert("Profile clicked"),children:"Profile"}),e.jsx(n,{onSelect:()=>alert("Settings clicked"),children:"Settings"}),e.jsx(g,{}),e.jsx(n,{onSelect:()=>alert("Logout clicked"),children:"Logout"})]})]})},y={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:"Actions"}),e.jsxs(d,{children:[e.jsx(n,{onSelect:()=>alert("Edit"),children:"Edit"}),e.jsx(n,{onSelect:()=>alert("Copy"),children:"Copy"}),e.jsx(n,{disabled:!0,children:"Delete (disabled)"}),e.jsx(g,{}),e.jsx(n,{onSelect:()=>alert("Share"),children:"Share"})]})]})},S={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:"File Menu"}),e.jsxs(d,{children:[e.jsx(n,{onSelect:()=>alert("New File"),children:"New File"}),e.jsx(n,{onSelect:()=>alert("Open"),children:"Open"}),e.jsx(g,{}),e.jsxs(N,{trigger:"Recent Files",children:[e.jsx(n,{onSelect:()=>alert("File 1"),children:"document.txt"}),e.jsx(n,{onSelect:()=>alert("File 2"),children:"spreadsheet.xlsx"}),e.jsx(n,{onSelect:()=>alert("File 3"),children:"presentation.pptx"})]}),e.jsx(g,{}),e.jsx(n,{onSelect:()=>alert("Exit"),children:"Exit"})]})]})},b={render:()=>e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs(i,{children:[e.jsx(c,{children:"Bottom Start"}),e.jsxs(d,{placement:"bottom-start",children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{children:"Option 2"}),e.jsx(n,{children:"Option 3"})]})]}),e.jsxs(i,{children:[e.jsx(c,{children:"Bottom End"}),e.jsxs(d,{placement:"bottom-end",children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{children:"Option 2"}),e.jsx(n,{children:"Option 3"})]})]}),e.jsxs(i,{children:[e.jsx(c,{children:"Top Start"}),e.jsxs(d,{placement:"top-start",children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{children:"Option 2"}),e.jsx(n,{children:"Option 3"})]})]})]})},v={render:()=>{const[t,r]=J.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!t),className:"px-3 py-1 bg-blue-500 text-white rounded",children:"Toggle Menu Externally"}),e.jsxs("span",{className:"ml-2",children:["Menu is ",t?"open":"closed"]})]}),e.jsxs(i,{open:t,onOpenChange:r,children:[e.jsx(c,{children:"Controlled Menu"}),e.jsxs(d,{children:[e.jsx(n,{onSelect:()=>alert("Item 1"),children:"Item 1"}),e.jsx(n,{onSelect:()=>alert("Item 2"),children:"Item 2"}),e.jsx(n,{onSelect:()=>alert("Item 3"),children:"Item 3"})]})]})]})}};var k,E,T;j.parameters={...j.parameters,docs:{...(k=j.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuTrigger>
        Open Menu
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </MenuTrigger>
      <MenuContent>
        <MenuItem onSelect={() => alert('Profile clicked')}>Profile</MenuItem>
        <MenuItem onSelect={() => alert('Settings clicked')}>Settings</MenuItem>
        <MenuSeparator />
        <MenuItem onSelect={() => alert('Logout clicked')}>Logout</MenuItem>
      </MenuContent>
    </Menu>
}`,...(T=(E=j.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var F,L,q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuTrigger>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem onSelect={() => alert('Edit')}>Edit</MenuItem>
        <MenuItem onSelect={() => alert('Copy')}>Copy</MenuItem>
        <MenuItem disabled>Delete (disabled)</MenuItem>
        <MenuSeparator />
        <MenuItem onSelect={() => alert('Share')}>Share</MenuItem>
      </MenuContent>
    </Menu>
}`,...(q=(L=y.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var V,W,R;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuTrigger>File Menu</MenuTrigger>
      <MenuContent>
        <MenuItem onSelect={() => alert('New File')}>New File</MenuItem>
        <MenuItem onSelect={() => alert('Open')}>Open</MenuItem>
        <MenuSeparator />
        <MenuSub trigger="Recent Files">
          <MenuItem onSelect={() => alert('File 1')}>document.txt</MenuItem>
          <MenuItem onSelect={() => alert('File 2')}>spreadsheet.xlsx</MenuItem>
          <MenuItem onSelect={() => alert('File 3')}>presentation.pptx</MenuItem>
        </MenuSub>
        <MenuSeparator />
        <MenuItem onSelect={() => alert('Exit')}>Exit</MenuItem>
      </MenuContent>
    </Menu>
}`,...(R=(W=S.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var D,P,A;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex space-x-4">
      <Menu>
        <MenuTrigger>Bottom Start</MenuTrigger>
        <MenuContent placement="bottom-start">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuContent>
      </Menu>

      <Menu>
        <MenuTrigger>Bottom End</MenuTrigger>
        <MenuContent placement="bottom-end">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuContent>
      </Menu>

      <Menu>
        <MenuTrigger>Top Start</MenuTrigger>
        <MenuContent placement="top-start">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuContent>
      </Menu>
    </div>
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var B,z,G;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="space-y-4">
        <div>
          <button onClick={() => setOpen(!open)} className="px-3 py-1 bg-blue-500 text-white rounded">
            Toggle Menu Externally
          </button>
          <span className="ml-2">Menu is {open ? 'open' : 'closed'}</span>
        </div>
        
        <Menu open={open} onOpenChange={setOpen}>
          <MenuTrigger>Controlled Menu</MenuTrigger>
          <MenuContent>
            <MenuItem onSelect={() => alert('Item 1')}>Item 1</MenuItem>
            <MenuItem onSelect={() => alert('Item 2')}>Item 2</MenuItem>
            <MenuItem onSelect={() => alert('Item 3')}>Item 3</MenuItem>
          </MenuContent>
        </Menu>
      </div>;
  }
}`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const Z=["Default","WithDisabledItems","WithSubmenu","DifferentPlacements","Controlled"];export{v as Controlled,j as Default,b as DifferentPlacements,y as WithDisabledItems,S as WithSubmenu,Z as __namedExportsOrder,Y as default};
