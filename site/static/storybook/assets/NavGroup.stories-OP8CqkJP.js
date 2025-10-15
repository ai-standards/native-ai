import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as $,R as ee}from"./index-BwDkhjyp.js";import{c as j}from"./cn-BaF2GUMg.js";import{N as a}from"./NavItem-BXRdAaOH.js";import"./_commonjsHelpers-BosuxZz1.js";const ae={none:"space-y-0",sm:"space-y-1",md:"space-y-2",lg:"space-y-4"},te={default:"border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0",contained:"border border-gray-200 rounded-lg p-4 bg-gray-50",minimal:"mb-4 last:mb-0"},ne=({isOpen:n})=>e.jsx("svg",{className:j("w-4 h-4 transition-transform duration-200",n?"rotate-90":"rotate-0"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),t=({title:n,children:i,collapsible:g=!1,defaultCollapsed:z=!1,collapsed:N,onCollapsedChange:I,icon:r,action:x,variant:f="default",spacing:J="sm",className:K,...Q})=>{const[X,Y]=$.useState(z),o=N!==void 0?N:X,Z=()=>{const y=!o;N===void 0&&Y(y),I==null||I(y)},b=n||r||x||g;return e.jsxs("div",{className:j(te[f],K),...Q,children:[b&&e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("div",{className:"flex items-center min-w-0",children:g?e.jsxs("button",{className:"flex items-center min-w-0 text-left p-0 border-0 bg-transparent cursor-pointer hover:text-gray-600 focus:outline-none focus:text-gray-600",onClick:Z,"aria-expanded":!o,children:[e.jsx(ne,{isOpen:!o}),r&&e.jsx("div",{className:"flex-shrink-0 mx-2 text-gray-500",children:r}),n&&e.jsx("h3",{className:"text-sm font-semibold text-gray-900 truncate",children:n})]}):e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{className:"flex-shrink-0 mr-2 text-gray-500",children:r}),n&&e.jsx("h3",{className:"text-sm font-semibold text-gray-900 truncate",children:n})]})}),x&&e.jsx("div",{className:"flex-shrink-0 ml-2",children:x})]}),(!g||!o)&&e.jsx("div",{className:j("transition-all duration-200",ae[J],b&&f!=="contained"?"ml-0":""),children:i})]})};try{t.displayName="NavGroup",t.__docgenInfo={description:"",displayName:"NavGroup",props:{title:{defaultValue:null,description:"Group heading",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Group content",name:"children",required:!0,type:{name:"ReactNode"}},collapsible:{defaultValue:{value:"false"},description:"Whether group is collapsible",name:"collapsible",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:{value:"false"},description:"Initial collapsed state",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},collapsed:{defaultValue:null,description:"Controlled collapsed state",name:"collapsed",required:!1,type:{name:"boolean"}},onCollapsedChange:{defaultValue:null,description:"Callback when collapsed state changes",name:"onCollapsedChange",required:!1,type:{name:"((collapsed: boolean) => void)"}},icon:{defaultValue:null,description:"Optional icon for the group",name:"icon",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"Optional action button",name:"action",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"default"},description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"contained"'},{value:'"minimal"'}]}},spacing:{defaultValue:{value:"sm"},description:"Spacing between items",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}}}}}catch{}const ce={title:"Navigation/NavGroup",component:t,parameters:{layout:"centered"},tags:["autodocs"]},u=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),s=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),E=()=>e.jsx("button",{className:"text-gray-400 hover:text-gray-600 p-1",children:e.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),l={render:()=>e.jsx("div",{className:"w-64",children:e.jsxs(t,{title:"Main Navigation",children:[e.jsx(a,{icon:e.jsx(s,{}),variant:"ghost",children:"Dashboard"}),e.jsx(a,{icon:e.jsx(s,{}),variant:"ghost",children:"Projects"}),e.jsx(a,{icon:e.jsx(s,{}),variant:"ghost",isActive:!0,children:"Team"}),e.jsx(a,{icon:e.jsx(s,{}),variant:"ghost",children:"Settings"})]})})},c={render:()=>e.jsx("div",{className:"w-64",children:e.jsxs(t,{title:"Projects",icon:e.jsx(u,{}),collapsible:!0,action:e.jsx(E,{}),children:[e.jsx(a,{variant:"ghost",children:"Website Redesign"}),e.jsx(a,{variant:"ghost",children:"Mobile App"}),e.jsx(a,{variant:"ghost",isActive:!0,children:"API Integration"}),e.jsx(a,{variant:"ghost",children:"Documentation"})]})})},d={render:()=>e.jsxs("div",{className:"space-y-6 w-64",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Default"}),e.jsxs(t,{title:"Default Group",variant:"default",children:[e.jsx(a,{variant:"ghost",children:"Item 1"}),e.jsx(a,{variant:"ghost",children:"Item 2"}),e.jsx(a,{variant:"ghost",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Contained"}),e.jsxs(t,{title:"Contained Group",variant:"contained",icon:e.jsx(u,{}),children:[e.jsx(a,{variant:"ghost",children:"Item 1"}),e.jsx(a,{variant:"ghost",children:"Item 2"}),e.jsx(a,{variant:"ghost",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Minimal"}),e.jsxs(t,{title:"Minimal Group",variant:"minimal",children:[e.jsx(a,{variant:"ghost",children:"Item 1"}),e.jsx(a,{variant:"ghost",children:"Item 2"}),e.jsx(a,{variant:"ghost",children:"Item 3"})]})]})]})},m={render:()=>e.jsx("div",{className:"w-64",children:e.jsxs(t,{children:[e.jsx(a,{variant:"ghost",children:"Ungrouped Item 1"}),e.jsx(a,{variant:"ghost",children:"Ungrouped Item 2"}),e.jsx(a,{variant:"ghost",children:"Ungrouped Item 3"})]})})},v={render:()=>e.jsxs("div",{className:"space-y-6 w-64",children:[e.jsxs(t,{title:"No Spacing",spacing:"none",children:[e.jsx(a,{variant:"ghost",children:"Tight Item 1"}),e.jsx(a,{variant:"ghost",children:"Tight Item 2"}),e.jsx(a,{variant:"ghost",children:"Tight Item 3"})]}),e.jsxs(t,{title:"Large Spacing",spacing:"lg",children:[e.jsx(a,{variant:"ghost",children:"Spaced Item 1"}),e.jsx(a,{variant:"ghost",children:"Spaced Item 2"}),e.jsx(a,{variant:"ghost",children:"Spaced Item 3"})]})]})},h={render:()=>e.jsxs("nav",{className:"w-64 p-4 bg-gray-50 rounded-lg space-y-0",children:[e.jsxs(t,{title:"Overview",variant:"minimal",children:[e.jsx(a,{icon:e.jsx(s,{}),variant:"ghost",isActive:!0,children:"Dashboard"}),e.jsx(a,{icon:e.jsx(s,{}),variant:"ghost",children:"Analytics"})]}),e.jsxs(t,{title:"Projects",icon:e.jsx(u,{}),collapsible:!0,action:e.jsx(E,{}),variant:"minimal",children:[e.jsx(a,{variant:"ghost",children:"Website"}),e.jsx(a,{variant:"ghost",children:"Mobile App"}),e.jsx(a,{variant:"ghost",children:"API"})]}),e.jsxs(t,{title:"Team",variant:"minimal",collapsible:!0,defaultCollapsed:!0,children:[e.jsx(a,{variant:"ghost",children:"Members"}),e.jsx(a,{variant:"ghost",children:"Roles"}),e.jsx(a,{variant:"ghost",children:"Permissions"})]}),e.jsxs(t,{title:"Settings",variant:"minimal",children:[e.jsx(a,{variant:"ghost",children:"Profile"}),e.jsx(a,{variant:"ghost",children:"Preferences"}),e.jsx(a,{variant:"ghost",disabled:!0,children:"Billing"})]})]})},p={render:()=>{const[n,i]=ee.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsxs("button",{onClick:()=>i(!n),className:"px-3 py-1 bg-blue-500 text-white rounded text-sm",children:[n?"Expand":"Collapse"," Group"]})}),e.jsx("div",{className:"w-64",children:e.jsxs(t,{title:"Controlled Group",collapsible:!0,collapsed:n,onCollapsedChange:i,icon:e.jsx(u,{}),children:[e.jsx(a,{variant:"ghost",children:"Item 1"}),e.jsx(a,{variant:"ghost",children:"Item 2"}),e.jsx(a,{variant:"ghost",children:"Item 3"})]})})]})}};var G,C,w;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <NavGroup title="Main Navigation">
        <NavItem icon={<HomeIcon />} variant="ghost">Dashboard</NavItem>
        <NavItem icon={<HomeIcon />} variant="ghost">Projects</NavItem>
        <NavItem icon={<HomeIcon />} variant="ghost" isActive>Team</NavItem>
        <NavItem icon={<HomeIcon />} variant="ghost">Settings</NavItem>
      </NavGroup>
    </div>
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var S,k,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <NavGroup title="Projects" icon={<FolderIcon />} collapsible action={<AddButton />}>
        <NavItem variant="ghost">Website Redesign</NavItem>
        <NavItem variant="ghost">Mobile App</NavItem>
        <NavItem variant="ghost" isActive>API Integration</NavItem>
        <NavItem variant="ghost">Documentation</NavItem>
      </NavGroup>
    </div>
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var M,P,D;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-64">
      <div>
        <h3 className="mb-4 font-semibold">Default</h3>
        <NavGroup title="Default Group" variant="default">
          <NavItem variant="ghost">Item 1</NavItem>
          <NavItem variant="ghost">Item 2</NavItem>
          <NavItem variant="ghost">Item 3</NavItem>
        </NavGroup>
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Contained</h3>
        <NavGroup title="Contained Group" variant="contained" icon={<FolderIcon />}>
          <NavItem variant="ghost">Item 1</NavItem>
          <NavItem variant="ghost">Item 2</NavItem>
          <NavItem variant="ghost">Item 3</NavItem>
        </NavGroup>
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Minimal</h3>
        <NavGroup title="Minimal Group" variant="minimal">
          <NavItem variant="ghost">Item 1</NavItem>
          <NavItem variant="ghost">Item 2</NavItem>
          <NavItem variant="ghost">Item 3</NavItem>
        </NavGroup>
      </div>
    </div>
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var V,T,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <NavGroup>
        <NavItem variant="ghost">Ungrouped Item 1</NavItem>
        <NavItem variant="ghost">Ungrouped Item 2</NavItem>
        <NavItem variant="ghost">Ungrouped Item 3</NavItem>
      </NavGroup>
    </div>
}`,...(R=(T=m.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var W,q,H;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-64">
      <NavGroup title="No Spacing" spacing="none">
        <NavItem variant="ghost">Tight Item 1</NavItem>
        <NavItem variant="ghost">Tight Item 2</NavItem>
        <NavItem variant="ghost">Tight Item 3</NavItem>
      </NavGroup>
      
      <NavGroup title="Large Spacing" spacing="lg">
        <NavItem variant="ghost">Spaced Item 1</NavItem>
        <NavItem variant="ghost">Spaced Item 2</NavItem>
        <NavItem variant="ghost">Spaced Item 3</NavItem>
      </NavGroup>
    </div>
}`,...(H=(q=v.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var L,_,B;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <nav className="w-64 p-4 bg-gray-50 rounded-lg space-y-0">
      <NavGroup title="Overview" variant="minimal">
        <NavItem icon={<HomeIcon />} variant="ghost" isActive>Dashboard</NavItem>
        <NavItem icon={<HomeIcon />} variant="ghost">Analytics</NavItem>
      </NavGroup>
      
      <NavGroup title="Projects" icon={<FolderIcon />} collapsible action={<AddButton />} variant="minimal">
        <NavItem variant="ghost">Website</NavItem>
        <NavItem variant="ghost">Mobile App</NavItem>
        <NavItem variant="ghost">API</NavItem>
      </NavGroup>
      
      <NavGroup title="Team" variant="minimal" collapsible defaultCollapsed>
        <NavItem variant="ghost">Members</NavItem>
        <NavItem variant="ghost">Roles</NavItem>
        <NavItem variant="ghost">Permissions</NavItem>
      </NavGroup>
      
      <NavGroup title="Settings" variant="minimal">
        <NavItem variant="ghost">Profile</NavItem>
        <NavItem variant="ghost">Preferences</NavItem>
        <NavItem variant="ghost" disabled>Billing</NavItem>
      </NavGroup>
    </nav>
}`,...(B=(_=h.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var F,O,U;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return <div className="space-y-4">
        <div>
          <button onClick={() => setCollapsed(!collapsed)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
            {collapsed ? 'Expand' : 'Collapse'} Group
          </button>
        </div>
        
        <div className="w-64">
          <NavGroup title="Controlled Group" collapsible collapsed={collapsed} onCollapsedChange={setCollapsed} icon={<FolderIcon />}>
            <NavItem variant="ghost">Item 1</NavItem>
            <NavItem variant="ghost">Item 2</NavItem>
            <NavItem variant="ghost">Item 3</NavItem>
          </NavGroup>
        </div>
      </div>;
  }
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const de=["Default","Collapsible","Variants","WithoutTitle","DifferentSpacing","ComplexNavigation","Controlled"];export{c as Collapsible,h as ComplexNavigation,p as Controlled,l as Default,v as DifferentSpacing,d as Variants,m as WithoutTitle,de as __namedExportsOrder,ce as default};
