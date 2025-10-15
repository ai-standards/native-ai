import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{E as s}from"./ErrorMessage-BhI4OYJy.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const J={title:"Form/ErrorMessage",component:s,parameters:{layout:"padded",docs:{description:{component:"Styled error message component for displaying validation errors and other error states."}}},argTypes:{size:{control:"select",options:["sm","md","lg"]},animation:{control:"select",options:["fade","slide","none"]}}},r={args:{message:"This field is required"}},a={args:{message:"Please enter a valid email address",showIcon:!1}},n={args:{message:"Password must be at least 8 characters",icon:e.jsx("span",{className:"w-4 h-4 flex items-center justify-center text-red-600 font-bold text-xs bg-red-100 rounded-full",children:"!"})}},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Small Error"}),e.jsx(s,{message:"Small error message",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Medium Error"}),e.jsx(s,{message:"Medium error message",size:"md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Large Error"}),e.jsx(s,{message:"Large error message",size:"lg"})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Fade Animation"}),e.jsx(s,{message:"Error with fade animation",animation:"fade"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Slide Animation"}),e.jsx(s,{message:"Error with slide animation",animation:"slide"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"No Animation"}),e.jsx(s,{message:"Error with no animation",animation:"none"})]})]})},d={args:{message:"This is a longer error message that demonstrates how the component handles multiple lines of text. The message will wrap appropriately and maintain proper spacing with the icon."}},t={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{message:"This field is required"}),e.jsx(s,{message:"Must be a valid email address"}),e.jsx(s,{message:"Password must contain at least one number"})]})},m={render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),e.jsx("input",{type:"email",id:"email",className:"w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent","aria-describedby":"email-error"}),e.jsx("div",{className:"mt-1",children:e.jsx(s,{message:"Please enter a valid email address",fieldId:"email"})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),e.jsx("input",{type:"password",id:"password",className:"w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent","aria-describedby":"password-error"}),e.jsx("div",{className:"mt-1",children:e.jsx(s,{message:"Password must be at least 8 characters and contain one number",fieldId:"password"})})]})]})},l={render:()=>{const _={none:void 0,required:"This field is required",invalid:"Please enter a valid value",tooShort:"Must be at least 3 characters"};return e.jsx("div",{className:"space-y-4",children:Object.entries(_).map(([c,p])=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2 capitalize",children:[c," Error:"]}),e.jsx(s,{message:p}),!p&&e.jsx("span",{className:"text-gray-500 text-sm",children:"No error to display"})]},c))})}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    message: 'This field is required'
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    message: 'Please enter a valid email address',
    showIcon: false
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,j,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    message: 'Password must be at least 8 characters',
    icon: <span className="w-4 h-4 flex items-center justify-center text-red-600 font-bold text-xs bg-red-100 rounded-full">
        !
      </span>
  }
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,w,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Small Error</label>
        <ErrorMessage message="Small error message" size="sm" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Medium Error</label>
        <ErrorMessage message="Medium error message" size="md" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large Error</label>
        <ErrorMessage message="Large error message" size="lg" />
      </div>
    </div>
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,S,P;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-2">Fade Animation</h4>
        <ErrorMessage message="Error with fade animation" animation="fade" />
      </div>
      <div>
        <h4 className="font-medium mb-2">Slide Animation</h4>
        <ErrorMessage message="Error with slide animation" animation="slide" />
      </div>
      <div>
        <h4 className="font-medium mb-2">No Animation</h4>
        <ErrorMessage message="Error with no animation" animation="none" />
      </div>
    </div>
}`,...(P=(S=o.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,z,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    message: 'This is a longer error message that demonstrates how the component handles multiple lines of text. The message will wrap appropriately and maintain proper spacing with the icon.'
  }
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var T,A,I;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <ErrorMessage message="This field is required" />
      <ErrorMessage message="Must be a valid email address" />
      <ErrorMessage message="Password must contain at least one number" />
    </div>
}`,...(I=(A=t.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var q,L,C;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input type="email" id="email" className="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" aria-describedby="email-error" />
        <div className="mt-1">
          <ErrorMessage message="Please enter a valid email address" fieldId="email" />
        </div>
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input type="password" id="password" className="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" aria-describedby="password-error" />
        <div className="mt-1">
          <ErrorMessage message="Password must be at least 8 characters and contain one number" fieldId="password" />
        </div>
      </div>
    </div>
}`,...(C=(L=m.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var D,W,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const errors = {
      none: undefined,
      required: 'This field is required',
      invalid: 'Please enter a valid value',
      tooShort: 'Must be at least 3 characters'
    };
    return <div className="space-y-4">
        {Object.entries(errors).map(([key, message]) => <div key={key}>
            <h4 className="font-medium mb-2 capitalize">{key} Error:</h4>
            <ErrorMessage message={message} />
            {!message && <span className="text-gray-500 text-sm">No error to display</span>}
          </div>)}
      </div>;
  }
}`,...(O=(W=l.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const K=["Default","WithoutIcon","CustomIcon","Sizes","Animations","LongMessage","MultipleErrors","WithFormField","ConditionalDisplay"];export{o as Animations,l as ConditionalDisplay,n as CustomIcon,r as Default,d as LongMessage,t as MultipleErrors,i as Sizes,m as WithFormField,a as WithoutIcon,K as __namedExportsOrder,J as default};
