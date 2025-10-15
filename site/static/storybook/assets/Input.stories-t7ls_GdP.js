import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{I as r}from"./Input-DTcHSAPF.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";import"./ErrorMessage-BhI4OYJy.js";import"./HelperText-DV78KzMO.js";import"./ValidationIndicator-Bug4K0iL.js";const ge={title:"Form/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible input field component with labels, validation, icons, and multiple variants. Built with accessibility in mind."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the input"},placeholder:{control:"text",description:"Placeholder text shown when input is empty"},error:{control:"text",description:"Error message to display below the input"},helperText:{control:"text",description:"Helper text displayed below the input when no error"},variant:{control:"select",options:["default","filled"],description:"Visual style variant of the input"},type:{control:"select",options:["text","email","password","tel","url","search"],description:"HTML input type"},disabled:{control:"boolean",description:"Disables the input field"},validateEmail:{control:"boolean",description:'Enable automatic email validation when type="email"'}},args:{placeholder:"Enter text..."}},a={args:{placeholder:"Enter your name"}},o={args:{label:"Full Name",placeholder:"Enter your full name"}},s={args:{label:"Username",placeholder:"Choose a username",helperText:"Must be 3-20 characters long and unique"}},l={args:{label:"Email Address",placeholder:"Enter your email",error:"Please enter a valid email address"}},t={args:{variant:"filled",label:"Search",placeholder:"Search for items..."}},n={args:{type:"email",label:"Email",placeholder:"name@example.com"}},i={args:{type:"password",label:"Password",placeholder:"Enter your password",helperText:"Must be at least 8 characters"}},d={args:{type:"search",placeholder:"Search...",variant:"filled"}},c={args:{label:"Disabled Field",placeholder:"This field is disabled",disabled:!0}},p={args:{label:"Search",placeholder:"Search products...",leftIcon:e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}},m={args:{label:"Verified Email",placeholder:"Enter email",rightIcon:e.jsx("svg",{className:"h-4 w-4 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}},h={args:{placeholder:"Search with filters...",leftIcon:e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),rightIcon:e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"})})}},u={render:()=>e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsx(r,{label:"Email",type:"email",placeholder:"Enter your email",leftIcon:e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})})}),e.jsx(r,{label:"Password",type:"password",placeholder:"Enter your password",leftIcon:e.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})})]}),parameters:{docs:{description:{story:"Example of a login form using multiple input components with icons."}}}},v={render:()=>e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsx(r,{label:"Valid Field",placeholder:"This is valid",helperText:"This field is correctly filled out",rightIcon:e.jsx("svg",{className:"h-4 w-4 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx(r,{label:"Invalid Field",placeholder:"This has an error",error:"This field is required"}),e.jsx(r,{label:"Neutral Field",placeholder:"No validation applied",helperText:"Optional field with helper text"})]}),parameters:{docs:{description:{story:"Different validation states showing success, error, and neutral states."}}}},g={render:()=>e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsx(r,{type:"email",label:"Email Address",placeholder:"Enter your email",helperText:"Type an invalid email and click outside to see validation"}),e.jsx(r,{type:"email",label:"Email with Manual Validation Disabled",placeholder:"Enter your email",validateEmail:!1,helperText:"This email field won't auto-validate"}),e.jsx(r,{type:"email",label:"Pre-filled Invalid Email",defaultValue:"invalid-email",helperText:"This will show an error when you click outside"})]}),parameters:{docs:{description:{story:'Email inputs with automatic validation. The component validates email format on blur when type="email".'}}}};var x,w,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your name'
  }
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var b,y,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name'
  }
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var E,j,L;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Must be 3-20 characters long and unique'
  }
}`,...(L=(j=s.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var T,I,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address'
  }
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var N,W,V;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: 'Search',
    placeholder: 'Search for items...'
  }
}`,...(V=(W=t.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var M,B,C;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'name@example.com'
  }
}`,...(C=(B=n.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var F,D,P;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters'
  }
}`,...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var z,H,A;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'search',
    placeholder: 'Search...',
    variant: 'filled'
  }
}`,...(A=(H=d.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var q,O,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var U,_,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search products...',
    leftIcon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
  }
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Verified Email',
    placeholder: 'Enter email',
    rightIcon: <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search with filters...',
    leftIcon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>,
    rightIcon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">
      <Input label="Email" type="email" placeholder="Enter your email" leftIcon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>} />
      <Input label="Password" type="password" placeholder="Enter your password" leftIcon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of a login form using multiple input components with icons.'
      }
    }
  }
}`,...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,se;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">
      <Input label="Valid Field" placeholder="This is valid" helperText="This field is correctly filled out" rightIcon={<svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>} />
      <Input label="Invalid Field" placeholder="This has an error" error="This field is required" />
      <Input label="Neutral Field" placeholder="No validation applied" helperText="Optional field with helper text" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different validation states showing success, error, and neutral states.'
      }
    }
  }
}`,...(se=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,te,ne;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">
      <Input type="email" label="Email Address" placeholder="Enter your email" helperText="Type an invalid email and click outside to see validation" />
      <Input type="email" label="Email with Manual Validation Disabled" placeholder="Enter your email" validateEmail={false} helperText="This email field won't auto-validate" />
      <Input type="email" label="Pre-filled Invalid Email" defaultValue="invalid-email" helperText="This will show an error when you click outside" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Email inputs with automatic validation. The component validates email format on blur when type="email".'
      }
    }
  }
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const xe=["Default","WithLabel","WithHelperText","WithError","Filled","Email","Password","Search","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","LoginForm","ValidationStates","EmailValidation"];export{a as Default,c as Disabled,n as Email,g as EmailValidation,t as Filled,u as LoginForm,i as Password,d as Search,v as ValidationStates,h as WithBothIcons,l as WithError,s as WithHelperText,o as WithLabel,p as WithLeftIcon,m as WithRightIcon,xe as __namedExportsOrder,ge as default};
