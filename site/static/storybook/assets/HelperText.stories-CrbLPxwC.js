import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{H as s}from"./HelperText-CDRu1p88.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const U={title:"Form/HelperText",component:s,parameters:{layout:"padded",docs:{description:{component:"Helper text component for providing contextual information and guidance to users."}}},argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","info","warning","success"]},position:{control:"select",options:["below","inline"]}}},t={args:{text:"Enter your email address to receive notifications"}},r={args:{text:"This information helps us personalize your experience",showIcon:!0}},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Default Helper Text"}),e.jsx(s,{text:"Standard helper text for general guidance",showIcon:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Info Helper Text"}),e.jsx(s,{text:"Additional information about this field",variant:"info",showIcon:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Warning Helper Text"}),e.jsx(s,{text:"Please be careful with this setting",variant:"warning",showIcon:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Success Helper Text"}),e.jsx(s,{text:"This configuration is recommended",variant:"success",showIcon:!0})]})]})},a={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Small Helper Text"}),e.jsx(s,{text:"Small helper text",size:"sm",showIcon:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Medium Helper Text"}),e.jsx(s,{text:"Medium helper text",size:"md",showIcon:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Large Helper Text"}),e.jsx(s,{text:"Large helper text",size:"lg",showIcon:!0})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Below Position (Default)"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter text..."}),e.jsx(s,{text:"Helper text appears below the field",position:"below"})]}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("label",{className:"block text-sm font-medium mr-2",children:"Inline Position:"}),e.jsx("input",{type:"checkbox",className:"mr-2"}),e.jsx(s,{text:"Helper text appears inline",position:"inline",variant:"info"})]})})]})},i={args:{text:"Custom icon helper text",showIcon:!0,icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}},l={args:{text:"This is a longer helper text that demonstrates how the component handles multiple lines of content. It should wrap appropriately and maintain proper spacing with icons when present.",showIcon:!0,variant:"info"}},c={render:()=>e.jsxs("div",{className:"max-w-md space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),e.jsx("input",{type:"email",id:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"you@example.com","aria-describedby":"email-helper"}),e.jsx(s,{text:"We'll never share your email address with third parties",fieldId:"email",showIcon:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),e.jsx("input",{type:"password",id:"password",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent","aria-describedby":"password-helper"}),e.jsx(s,{text:"Must be at least 8 characters with one number and one special character",fieldId:"password",variant:"info",showIcon:!0})]}),e.jsx("div",{children:e.jsxs("label",{htmlFor:"notifications",className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"notifications",className:"mr-2","aria-describedby":"notifications-helper"}),e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Email notifications"}),e.jsx(s,{text:"You can change this later in settings",fieldId:"notifications",position:"inline",variant:"success"})]})})]})},d={render:()=>e.jsxs("div",{className:"max-w-lg space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"API Configuration"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"https://api.example.com"}),e.jsx(s,{text:"Enter the base URL for your API endpoint. Must include protocol (http/https).",variant:"info",showIcon:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Timeout Settings"}),e.jsx("input",{type:"number",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"30"}),e.jsx(s,{text:"Recommended: 30 seconds. Higher values may impact user experience.",variant:"warning",showIcon:!0})]})]})};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Enter your email address to receive notifications'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,h,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'This information helps us personalize your experience',
    showIcon: true
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,g,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Default Helper Text</label>
        <HelperText text="Standard helper text for general guidance" showIcon />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Info Helper Text</label>
        <HelperText text="Additional information about this field" variant="info" showIcon />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Warning Helper Text</label>
        <HelperText text="Please be careful with this setting" variant="warning" showIcon />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Success Helper Text</label>
        <HelperText text="This configuration is recommended" variant="success" showIcon />
      </div>
    </div>
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var w,y,j;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Small Helper Text</label>
        <HelperText text="Small helper text" size="sm" showIcon />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Medium Helper Text</label>
        <HelperText text="Medium helper text" size="md" showIcon />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large Helper Text</label>
        <HelperText text="Large helper text" size="lg" showIcon />
      </div>
    </div>
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var N,I,H;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Below Position (Default)</label>
        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter text..." />
        <HelperText text="Helper text appears below the field" position="below" />
      </div>
      <div>
        <div className="flex items-center">
          <label className="block text-sm font-medium mr-2">Inline Position:</label>
          <input type="checkbox" className="mr-2" />
          <HelperText text="Helper text appears inline" position="inline" variant="info" />
        </div>
      </div>
    </div>
}`,...(H=(I=o.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var T,k,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'Custom icon helper text',
    showIcon: true,
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
  }
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var M,P,z;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'This is a longer helper text that demonstrates how the component handles multiple lines of content. It should wrap appropriately and maintain proper spacing with icons when present.',
    showIcon: true,
    variant: 'info'
  }
}`,...(z=(P=l.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var E,L,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="you@example.com" aria-describedby="email-helper" />
        <HelperText text="We'll never share your email address with third parties" fieldId="email" showIcon />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" aria-describedby="password-helper" />
        <HelperText text="Must be at least 8 characters with one number and one special character" fieldId="password" variant="info" showIcon />
      </div>
      
      <div>
        <label htmlFor="notifications" className="flex items-center">
          <input type="checkbox" id="notifications" className="mr-2" aria-describedby="notifications-helper" />
          <span className="text-sm font-medium text-gray-700">Email notifications</span>
          <HelperText text="You can change this later in settings" fieldId="notifications" position="inline" variant="success" />
        </label>
      </div>
    </div>
}`,...(F=(L=c.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var A,C,W;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">API Configuration</label>
        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://api.example.com" />
        <HelperText text="Enter the base URL for your API endpoint. Must include protocol (http/https)." variant="info" showIcon />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Timeout Settings</label>
        <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="30" />
        <HelperText text="Recommended: 30 seconds. Higher values may impact user experience." variant="warning" showIcon />
      </div>
    </div>
}`,...(W=(C=d.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const Y=["Default","WithIcon","Variants","Sizes","Positions","CustomIcon","LongText","WithFormFields","ContextualHelp"];export{d as ContextualHelp,i as CustomIcon,t as Default,l as LongText,o as Positions,a as Sizes,n as Variants,c as WithFormFields,r as WithIcon,Y as __namedExportsOrder,U as default};
