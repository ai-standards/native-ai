import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as X}from"./index-BwDkhjyp.js";import{c as h}from"./cn-BaF2GUMg.js";import{i as Y,a as ee}from"./Icon-DitzTbaY.js";import"./_commonjsHelpers-BosuxZz1.js";const ae={default:"bg-white border border-gray-200",outlined:"bg-transparent border-2 border-gray-300",filled:"bg-gray-50 border border-gray-200"},ne={sm:"text-sm",md:"text-base",lg:"text-lg"},n=({title:a,defaultCollapsed:Z=!1,collapsed:f,onCollapsedChange:x,collapsible:s=!0,variant:H="default",size:K="md",className:B,children:G,...J})=>{const[M,Q]=X.useState(Z),v=f!==void 0,l=v?f:M,b=()=>{if(!s)return;const t=!l;v||Q(t),x==null||x(t)},y=a||s;return e.jsxs("div",{className:h("rounded-lg overflow-hidden",ae[H],ne[K],B),...J,children:[y&&e.jsxs("div",{className:h("px-4 py-3 border-b border-gray-200",s&&"cursor-pointer hover:bg-gray-50","flex items-center justify-between"),onClick:b,role:s?"button":void 0,tabIndex:s?0:void 0,onKeyDown:t=>{s&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),b())},"aria-expanded":s?!l:void 0,"aria-controls":s?"panel-content":void 0,children:[a&&e.jsx("div",{className:"font-medium text-gray-900 flex-1",children:a}),s&&e.jsx("div",{className:"ml-2 text-gray-400",children:l?e.jsx(Y,{size:16}):e.jsx(ee,{size:16})})]}),e.jsx("div",{id:"panel-content",className:h("transition-all duration-200 ease-in-out",l?"max-h-0 overflow-hidden":"max-h-none",!y&&"rounded-lg"),children:e.jsx("div",{className:"p-4",children:G})})]})};try{n.displayName="Panel",n.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},onCollapsedChange:{defaultValue:null,description:"",name:"onCollapsedChange",required:!1,type:{name:"((collapsed: boolean) => void)"}},collapsible:{defaultValue:{value:"true"},description:"",name:"collapsible",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"filled"'},{value:'"outlined"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const oe={title:"Surface/Panel",component:n,parameters:{layout:"centered",docs:{description:{component:"A collapsible content panel with title, variants, and state management. Perfect for organizing content sections."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"The title displayed in the panel header"},defaultCollapsed:{control:"boolean",description:"Initial collapsed state (uncontrolled)"},collapsed:{control:"boolean",description:"Collapsed state (controlled)"},collapsible:{control:"boolean",description:"Whether the panel can be collapsed"},variant:{control:"select",options:["default","outlined","filled"],description:"Visual style variant"},size:{control:"select",options:["sm","md","lg"],description:"Text size variant"},children:{control:!1,description:"Panel content"}}},i={args:{title:"Panel Title",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This is the panel content. It can contain any React elements."}),e.jsx("p",{children:"Click the header to collapse or expand the panel."})]})}},r={args:{collapsible:!1,children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-semibold",children:"Content Only Panel"}),e.jsx("p",{children:"This panel has no title bar and is not collapsible."})]})}},o={args:{title:"Collapsed Panel",defaultCollapsed:!0,children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This panel starts in a collapsed state."}),e.jsx("p",{children:"Click the header to expand it."})]})}},d={args:{title:"Always Visible",collapsible:!1,children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This panel cannot be collapsed."}),e.jsx("p",{children:"The header is not clickable and shows no chevron."})]})}},c={render:()=>e.jsx("div",{className:"space-y-6 w-full max-w-2xl",children:["default","outlined","filled"].map(a=>e.jsx(n,{variant:a,title:`${a.charAt(0).toUpperCase()+a.slice(1)} Panel`,children:e.jsxs("p",{children:['This panel uses the "',a,'" variant style.']})},a))})},p={render:()=>e.jsx("div",{className:"space-y-6 w-full max-w-2xl",children:["sm","md","lg"].map(a=>e.jsx(n,{size:a,title:`${a.toUpperCase()} Size Panel`,children:e.jsxs("p",{children:['This panel uses the "',a,'" size variant.']})},a))})},m={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsx(n,{title:"Personal Information",variant:"outlined",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your email"})]})]})}),e.jsx(n,{title:"Preferences",variant:"outlined",defaultCollapsed:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"newsletter",className:"mr-2"}),e.jsx("label",{htmlFor:"newsletter",className:"text-sm",children:"Subscribe to newsletter"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"notifications",className:"mr-2"}),e.jsx("label",{htmlFor:"notifications",className:"text-sm",children:"Enable notifications"})]})]})}),e.jsx(n,{title:"Advanced Settings",variant:"outlined",defaultCollapsed:!0,children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Theme"}),e.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{children:"Light"}),e.jsx("option",{children:"Dark"}),e.jsx("option",{children:"Auto"})]})]})})})]}),parameters:{docs:{description:{story:"Example of using panels in a form layout with collapsible sections."}}}},u={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-6",children:[e.jsx(n,{title:"Account Settings",variant:"filled",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Two-Factor Authentication"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Add an extra layer of security"})]}),e.jsx("button",{className:"px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Enable"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Email Notifications"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Receive updates via email"})]}),e.jsx("button",{className:"px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Configure"})]})]})}),e.jsx(n,{title:"Privacy Settings",variant:"filled",defaultCollapsed:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Profile Visibility"}),e.jsxs("select",{className:"px-2 py-1 border rounded text-sm",children:[e.jsx("option",{children:"Public"}),e.jsx("option",{children:"Friends"}),e.jsx("option",{children:"Private"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Search Engine Indexing"}),e.jsx("input",{type:"checkbox"})]})]})}),e.jsx(n,{title:"Danger Zone",variant:"outlined",children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded",children:[e.jsx("h4",{className:"font-medium text-red-900",children:"Delete Account"}),e.jsx("p",{className:"text-sm text-red-700 mt-1",children:"This action cannot be undone. All your data will be permanently deleted."}),e.jsx("button",{className:"mt-3 px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700",children:"Delete Account"})]})})})]}),parameters:{docs:{description:{story:"Example of using panels for a settings page with different importance levels."}}}};var g,N,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Panel Title',
    children: <div className="space-y-3">
        <p>This is the panel content. It can contain any React elements.</p>
        <p>Click the header to collapse or expand the panel.</p>
      </div>
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,P,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    collapsible: false,
    children: <div className="space-y-3">
        <h3 className="font-semibold">Content Only Panel</h3>
        <p>This panel has no title bar and is not collapsible.</p>
      </div>
  }
}`,...(C=(P=r.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var T,S,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Collapsed Panel',
    defaultCollapsed: true,
    children: <div className="space-y-3">
        <p>This panel starts in a collapsed state.</p>
        <p>Click the header to expand it.</p>
      </div>
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var E,A,z;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Always Visible',
    collapsible: false,
    children: <div className="space-y-3">
        <p>This panel cannot be collapsed.</p>
        <p>The header is not clickable and shows no chevron.</p>
      </div>
  }
}`,...(z=(A=d.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var D,V,F;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-full max-w-2xl">
      {(['default', 'outlined', 'filled'] as const).map(variant => <Panel key={variant} variant={variant} title={\`\${variant.charAt(0).toUpperCase() + variant.slice(1)} Panel\`}>
          <p>This panel uses the "{variant}" variant style.</p>
        </Panel>)}
    </div>
}`,...(F=(V=c.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var I,_,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-full max-w-2xl">
      {(['sm', 'md', 'lg'] as const).map(size => <Panel key={size} size={size} title={\`\${size.toUpperCase()} Size Panel\`}>
          <p>This panel uses the "{size}" size variant.</p>
        </Panel>)}
    </div>
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var R,L,U;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-4">
      <Panel title="Personal Information" variant="outlined">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
        </div>
      </Panel>

      <Panel title="Preferences" variant="outlined" defaultCollapsed>
        <div className="space-y-4">
          <div className="flex items-center">
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-sm">Subscribe to newsletter</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="notifications" className="mr-2" />
            <label htmlFor="notifications" className="text-sm">Enable notifications</label>
          </div>
        </div>
      </Panel>

      <Panel title="Advanced Settings" variant="outlined" defaultCollapsed>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Theme
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>
        </div>
      </Panel>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using panels in a form layout with collapsible sections.'
      }
    }
  }
}`,...(U=(L=m.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var $,O,W;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-6">
      <Panel title="Account Settings" variant="filled">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
            </div>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Enable
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-gray-600">Receive updates via email</p>
            </div>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
              Configure
            </button>
          </div>
        </div>
      </Panel>

      <Panel title="Privacy Settings" variant="filled" defaultCollapsed>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Profile Visibility</span>
            <select className="px-2 py-1 border rounded text-sm">
              <option>Public</option>
              <option>Friends</option>
              <option>Private</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span>Search Engine Indexing</span>
            <input type="checkbox" />
          </div>
        </div>
      </Panel>

      <Panel title="Danger Zone" variant="outlined">
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="font-medium text-red-900">Delete Account</h4>
            <p className="text-sm text-red-700 mt-1">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
            <button className="mt-3 px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>
      </Panel>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using panels for a settings page with different importance levels.'
      }
    }
  }
}`,...(W=(O=u.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const de=["Default","WithoutTitle","DefaultCollapsed","NonCollapsible","Variants","Sizes","FormExample","SettingsPage"];export{i as Default,o as DefaultCollapsed,m as FormExample,d as NonCollapsible,u as SettingsPage,p as Sizes,c as Variants,r as WithoutTitle,de as __namedExportsOrder,oe as default};
