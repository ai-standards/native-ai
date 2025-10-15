import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{F as r}from"./FormField-B6XmMuQd.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ErrorMessage-BhI4OYJy.js";import"./HelperText-CDRu1p88.js";const G={title:"Form/FormField",component:r,parameters:{layout:"padded",docs:{description:{component:"Field wrapper component that provides consistent labeling, error handling, and layout for form controls."}}},argTypes:{labelPosition:{control:"select",options:["top","left","floating"]},size:{control:"select",options:["sm","md","lg"]}}},a=()=>e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Enter text..."}),s={args:{label:"Username",children:e.jsx(a,{})}},o={args:{label:"Email Address",required:!0,children:e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"you@example.com"})}},d={args:{label:"Password",required:!0,error:"Password must be at least 8 characters",children:e.jsx("input",{type:"password",className:"w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-red-600 dark:text-white"})}},n={args:{label:"Full Name",helperText:"Enter your first and last name",children:e.jsx(a,{})}},l={args:{label:"Company",labelPosition:"left",children:e.jsx(a,{})}},t={args:{label:"Description",labelPosition:"floating",children:e.jsx("textarea",{className:"w-full px-3 py-2 pt-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none",rows:4,placeholder:" "})}},i={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{label:"Small Size",size:"sm",children:e.jsx(a,{})}),e.jsx(r,{label:"Medium Size",size:"md",children:e.jsx(a,{})}),e.jsx(r,{label:"Large Size",size:"lg",children:e.jsx(a,{})})]})},c={args:{label:"Optional Field",required:!0,showRequiredIndicator:!1,helperText:"This field is required but indicator is hidden",children:e.jsx(a,{})}},u={render:()=>e.jsxs("form",{className:"space-y-4 max-w-md",children:[e.jsx(r,{label:"First Name",required:!0,children:e.jsx(a,{})}),e.jsx(r,{label:"Last Name",required:!0,children:e.jsx(a,{})}),e.jsx(r,{label:"Email",required:!0,helperText:"We'll never share your email",children:e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"})}),e.jsx(r,{label:"Phone",error:"Please enter a valid phone number",children:e.jsx("input",{type:"tel",className:"w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-red-600 dark:text-white"})}),e.jsx(r,{label:"Bio",labelPosition:"left",children:e.jsx("textarea",{className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none",rows:3})})]})};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    children: <SampleInput />
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,f,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    required: true,
    children: <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="you@example.com" />
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,y,F;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    required: true,
    error: 'Password must be at least 8 characters',
    children: <input type="password" className="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-red-600 dark:text-white" />
  }
}`,...(F=(y=d.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var w,k,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    helperText: 'Enter your first and last name',
    children: <SampleInput />
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,N,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Company',
    labelPosition: 'left',
    children: <SampleInput />
  }
}`,...(q=(N=l.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var z,P,I;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    labelPosition: 'floating',
    children: <textarea className="w-full px-3 py-2 pt-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none" rows={4} placeholder=" " />
  }
}`,...(I=(P=t.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var E,T,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <FormField label="Small Size" size="sm">
        <SampleInput />
      </FormField>
      <FormField label="Medium Size" size="md">
        <SampleInput />
      </FormField>
      <FormField label="Large Size" size="lg">
        <SampleInput />
      </FormField>
    </div>
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var v,W,R;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Optional Field',
    required: true,
    showRequiredIndicator: false,
    helperText: 'This field is required but indicator is hidden',
    children: <SampleInput />
  }
}`,...(R=(W=c.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var D,O,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <form className="space-y-4 max-w-md">
      <FormField label="First Name" required>
        <SampleInput />
      </FormField>
      
      <FormField label="Last Name" required>
        <SampleInput />
      </FormField>
      
      <FormField label="Email" required helperText="We'll never share your email">
        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </FormField>
      
      <FormField label="Phone" error="Please enter a valid phone number">
        <input type="tel" className="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-red-600 dark:text-white" />
      </FormField>
      
      <FormField label="Bio" labelPosition="left">
        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none" rows={3} />
      </FormField>
    </form>
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const J=["Default","Required","WithError","WithHelperText","LeftLabel","FloatingLabel","Sizes","WithoutRequiredIndicator","FormExample"];export{s as Default,t as FloatingLabel,u as FormExample,l as LeftLabel,o as Required,i as Sizes,d as WithError,n as WithHelperText,c as WithoutRequiredIndicator,J as __namedExportsOrder,G as default};
