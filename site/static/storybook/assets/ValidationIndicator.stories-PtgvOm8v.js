import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as v}from"./index-BwDkhjyp.js";import{V as s}from"./ValidationIndicator-Bug4K0iL.js";import"./_commonjsHelpers-BosuxZz1.js";const ee={title:"Form/ValidationIndicator",component:s,parameters:{layout:"padded",docs:{description:{component:"Visual validation status indicators for form fields with icons and optional status text."}}},argTypes:{status:{control:"select",options:["idle","validating","valid","invalid","warning"]},size:{control:"select",options:["sm","md","lg"]},position:{control:"select",options:["start","end"]}}},n={args:{status:"valid"}},i={args:{status:"valid",showText:!0}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-20 text-sm font-medium",children:"Idle:"}),e.jsx(s,{status:"idle",showText:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-20 text-sm font-medium",children:"Validating:"}),e.jsx(s,{status:"validating",showText:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-20 text-sm font-medium",children:"Valid:"}),e.jsx(s,{status:"valid",showText:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-20 text-sm font-medium",children:"Invalid:"}),e.jsx(s,{status:"invalid",showText:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-20 text-sm font-medium",children:"Warning:"}),e.jsx(s,{status:"warning",showText:!0})]})]})},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm font-medium",children:"Small:"}),e.jsx(s,{status:"valid",size:"sm",showText:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm font-medium",children:"Medium:"}),e.jsx(s,{status:"valid",size:"md",showText:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm font-medium",children:"Large:"}),e.jsx(s,{status:"valid",size:"lg",showText:!0})]})]})},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm font-medium",children:"Start:"}),e.jsx(s,{status:"valid",position:"start",showText:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm font-medium",children:"End:"}),e.jsx(s,{status:"valid",position:"end",showText:!0})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{status:"valid",showText:!0,icons:{valid:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}}),e.jsx(s,{status:"invalid",showText:!0,icons:{invalid:e.jsx("span",{className:"w-4 h-4 flex items-center justify-center text-red-600 font-bold text-xs bg-red-100 rounded-full",children:"!"})}})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{status:"valid",statusText:"Looks good!",showText:!0}),e.jsx(s,{status:"invalid",statusText:"Please check this field",showText:!0}),e.jsx(s,{status:"warning",statusText:"Consider reviewing",showText:!0})]})},m={render:()=>e.jsxs("div",{className:"max-w-md space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"email",className:"w-full px-3 py-2 pr-10 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"you@example.com",defaultValue:"user@example.com"}),e.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:e.jsx(s,{status:"valid"})})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"password",className:"w-full px-3 py-2 pr-10 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent",placeholder:"Enter password"}),e.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:e.jsx(s,{status:"invalid"})})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Username (checking availability...)"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",className:"w-full px-3 py-2 pr-10 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Choose username",defaultValue:"johndoe"}),e.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:e.jsx(s,{status:"validating"})})]})]})]})},u={render:()=>{const[G,H]=v.useState(""),[a,p]=v.useState("idle"),J=t=>{if(!t){p("idle");return}p("validating"),setTimeout(()=>{const K=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);p(K?"valid":"invalid")},1e3)};return e.jsxs("div",{className:"max-w-md",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"email",value:G,onChange:t=>{H(t.target.value),J(t.target.value)},className:`w-full px-3 py-2 pr-12 border rounded-md focus:ring-2 focus:border-transparent ${a==="valid"?"border-green-300 focus:ring-green-500":a==="invalid"?"border-red-300 focus:ring-red-500":a==="validating"?"border-blue-300 focus:ring-blue-500":"border-gray-300 focus:ring-blue-500"}`,placeholder:"Enter your email"}),e.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:e.jsx(s,{status:a})})]}),e.jsx("div",{className:"mt-1",children:e.jsx(s,{status:a,showText:!0})})]})}},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm font-medium",children:"With animation:"}),e.jsx(s,{status:"validating",showText:!0,animate:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm font-medium",children:"Without animation:"}),e.jsx(s,{status:"validating",showText:!0,animate:!1})]})]})};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'valid'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,w,j;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'valid',
    showText: true
  }
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var b,y,T;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Idle:</span>
        <ValidationIndicator status="idle" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Validating:</span>
        <ValidationIndicator status="validating" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Valid:</span>
        <ValidationIndicator status="valid" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Invalid:</span>
        <ValidationIndicator status="invalid" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm font-medium">Warning:</span>
        <ValidationIndicator status="warning" showText />
      </div>
    </div>
}`,...(T=(y=r.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var V,I,S;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">Small:</span>
        <ValidationIndicator status="valid" size="sm" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">Medium:</span>
        <ValidationIndicator status="valid" size="md" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">Large:</span>
        <ValidationIndicator status="valid" size="lg" showText />
      </div>
    </div>
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var k,E,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">Start:</span>
        <ValidationIndicator status="valid" position="start" showText />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm font-medium">End:</span>
        <ValidationIndicator status="valid" position="end" showText />
      </div>
    </div>
}`,...(C=(E=l.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var W,L,z;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <ValidationIndicator status="valid" showText icons={{
      valid: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
    }} />
      <ValidationIndicator status="invalid" showText icons={{
      invalid: <span className="w-4 h-4 flex items-center justify-center text-red-600 font-bold text-xs bg-red-100 rounded-full">
              !
            </span>
    }} />
    </div>
}`,...(z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var A,P,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <ValidationIndicator status="valid" statusText="Looks good!" showText />
      <ValidationIndicator status="invalid" statusText="Please check this field" showText />
      <ValidationIndicator status="warning" statusText="Consider reviewing" showText />
    </div>
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var M,$,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <input type="email" className="w-full px-3 py-2 pr-10 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="you@example.com" defaultValue="user@example.com" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ValidationIndicator status="valid" />
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input type="password" className="w-full px-3 py-2 pr-10 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter password" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ValidationIndicator status="invalid" />
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Username (checking availability...)
        </label>
        <div className="relative">
          <input type="text" className="w-full px-3 py-2 pr-10 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Choose username" defaultValue="johndoe" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ValidationIndicator status="validating" />
          </div>
        </div>
      </div>
    </div>
}`,...(B=($=m.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var D,U,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'validating' | 'valid' | 'invalid'>('idle');
    const validateEmail = (value: string) => {
      if (!value) {
        setStatus('idle');
        return;
      }
      setStatus('validating');

      // Simulate async validation
      setTimeout(() => {
        const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
        setStatus(isValid ? 'valid' : 'invalid');
      }, 1000);
    };
    return <div className="max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <input type="email" value={email} onChange={e => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }} className={\`w-full px-3 py-2 pr-12 border rounded-md focus:ring-2 focus:border-transparent \${status === 'valid' ? 'border-green-300 focus:ring-green-500' : status === 'invalid' ? 'border-red-300 focus:ring-red-500' : status === 'validating' ? 'border-blue-300 focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'}\`} placeholder="Enter your email" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <ValidationIndicator status={status} />
          </div>
        </div>
        <div className="mt-1">
          <ValidationIndicator status={status} showText />
        </div>
      </div>;
  }
}`,...(_=(U=u.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var O,R,q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">With animation:</span>
        <ValidationIndicator status="validating" showText animate />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Without animation:</span>
        <ValidationIndicator status="validating" showText animate={false} />
      </div>
    </div>
}`,...(q=(R=x.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const se=["Default","WithText","AllStatuses","Sizes","Positions","CustomIcons","CustomText","WithFormFields","InteractiveValidation","NoAnimation"];export{r as AllStatuses,o as CustomIcons,c as CustomText,n as Default,u as InteractiveValidation,x as NoAnimation,l as Positions,d as Sizes,m as WithFormFields,i as WithText,se as __namedExportsOrder,ee as default};
