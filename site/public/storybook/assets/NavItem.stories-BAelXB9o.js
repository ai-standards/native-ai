import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{N as a}from"./NavItem-BXRdAaOH.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const J={title:"Navigation/NavItem",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),v=({count:T})=>e.jsx("span",{className:"bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center",children:T}),t={args:{children:"Navigation Item"}},n={args:{children:"Home",icon:e.jsx(s,{})}},r={args:{children:"Current Page",icon:e.jsx(s,{}),isActive:!0}},i={args:{children:"Messages",badge:e.jsx(v,{count:5})}},c={args:{children:"Disabled Item",icon:e.jsx(s,{}),disabled:!0}},o={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 font-semibold",children:"Default"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(a,{variant:"default",children:"Regular Item"}),e.jsx(a,{variant:"default",isActive:!0,children:"Active Item"}),e.jsx(a,{variant:"default",disabled:!0,children:"Disabled Item"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 font-semibold",children:"Ghost"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(a,{variant:"ghost",children:"Regular Item"}),e.jsx(a,{variant:"ghost",isActive:!0,children:"Active Item"}),e.jsx(a,{variant:"ghost",disabled:!0,children:"Disabled Item"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 font-semibold",children:"Subtle"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(a,{variant:"subtle",children:"Regular Item"}),e.jsx(a,{variant:"subtle",isActive:!0,children:"Active Item"}),e.jsx(a,{variant:"subtle",disabled:!0,children:"Disabled Item"})]})]})]})},d={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{size:"sm",icon:e.jsx(s,{}),children:"Small Item"}),e.jsx(a,{size:"md",icon:e.jsx(s,{}),children:"Medium Item"}),e.jsx(a,{size:"lg",icon:e.jsx(s,{}),children:"Large Item"})]})},m={render:()=>e.jsxs("div",{className:"space-y-2 w-64",children:[e.jsx(a,{href:"/dashboard",icon:e.jsx(s,{}),badge:e.jsx(v,{count:3}),children:"Dashboard (Link)"}),e.jsx(a,{onClick:()=>alert("Settings clicked!"),icon:e.jsx(s,{}),children:"Settings (Button)"}),e.jsx(a,{onClick:()=>alert("Profile clicked!"),icon:e.jsx(s,{}),isActive:!0,children:"Profile (Active)"})]})},l={render:()=>e.jsx("nav",{className:"w-64 p-4 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx(a,{href:"/dashboard",icon:e.jsx(s,{}),variant:"ghost",isActive:!0,children:"Dashboard"}),e.jsx(a,{href:"/projects",icon:e.jsx(s,{}),variant:"ghost",badge:e.jsx(v,{count:12}),children:"Projects"}),e.jsx(a,{href:"/team",icon:e.jsx(s,{}),variant:"ghost",children:"Team"}),e.jsx(a,{href:"/settings",icon:e.jsx(s,{}),variant:"ghost",disabled:!0,children:"Settings"})]})})};var h,u,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Navigation Item'
  }
}`,...(I=(u=t.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var g,N,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Home',
    icon: <HomeIcon />
  }
}`,...(p=(N=n.parameters)==null?void 0:N.docs)==null?void 0:p.source}}};var x,j,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Current Page',
    icon: <HomeIcon />,
    isActive: true
  }
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var f,A,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Messages',
    badge: <Badge count={5} />
  }
}`,...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var y,D,H;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Item',
    icon: <HomeIcon />,
    disabled: true
  }
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var k,w,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <div>
        <h3 className="mb-2 font-semibold">Default</h3>
        <div className="space-y-1">
          <NavItem variant="default">Regular Item</NavItem>
          <NavItem variant="default" isActive>Active Item</NavItem>
          <NavItem variant="default" disabled>Disabled Item</NavItem>
        </div>
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Ghost</h3>
        <div className="space-y-1">
          <NavItem variant="ghost">Regular Item</NavItem>
          <NavItem variant="ghost" isActive>Active Item</NavItem>
          <NavItem variant="ghost" disabled>Disabled Item</NavItem>
        </div>
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Subtle</h3>
        <div className="space-y-1">
          <NavItem variant="subtle">Regular Item</NavItem>
          <NavItem variant="subtle" isActive>Active Item</NavItem>
          <NavItem variant="subtle" disabled>Disabled Item</NavItem>
        </div>
      </div>
    </div>
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var z,L,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <NavItem size="sm" icon={<HomeIcon />}>Small Item</NavItem>
      <NavItem size="md" icon={<HomeIcon />}>Medium Item</NavItem>
      <NavItem size="lg" icon={<HomeIcon />}>Large Item</NavItem>
    </div>
}`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var C,R,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-64">
      <NavItem href="/dashboard" icon={<HomeIcon />} badge={<Badge count={3} />}>
        Dashboard (Link)
      </NavItem>
      
      <NavItem onClick={() => alert('Settings clicked!')} icon={<HomeIcon />}>
        Settings (Button)
      </NavItem>
      
      <NavItem onClick={() => alert('Profile clicked!')} icon={<HomeIcon />} isActive>
        Profile (Active)
      </NavItem>
    </div>
}`,...(M=(R=m.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var W,E,G;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <nav className="w-64 p-4 bg-gray-50 rounded-lg">
      <div className="space-y-1">
        <NavItem href="/dashboard" icon={<HomeIcon />} variant="ghost" isActive>
          Dashboard
        </NavItem>
        <NavItem href="/projects" icon={<HomeIcon />} variant="ghost" badge={<Badge count={12} />}>
          Projects
        </NavItem>
        <NavItem href="/team" icon={<HomeIcon />} variant="ghost">
          Team
        </NavItem>
        <NavItem href="/settings" icon={<HomeIcon />} variant="ghost" disabled>
          Settings
        </NavItem>
      </div>
    </nav>
}`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const K=["Default","WithIcon","Active","WithBadge","Disabled","Variants","Sizes","Interactive","NavigationList"];export{r as Active,t as Default,c as Disabled,m as Interactive,l as NavigationList,d as Sizes,o as Variants,i as WithBadge,n as WithIcon,K as __namedExportsOrder,J as default};
