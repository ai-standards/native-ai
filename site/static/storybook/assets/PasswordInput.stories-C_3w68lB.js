import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as w,R as f}from"./index-BwDkhjyp.js";import{c as p}from"./cn-BaF2GUMg.js";import{E as je}from"./ErrorMessage-BhI4OYJy.js";import{H as ke}from"./HelperText-CDRu1p88.js";import"./_commonjsHelpers-BosuxZz1.js";const c=w.forwardRef(({label:a,error:s,helperText:V,size:n="md",showStrength:m=!1,validateStrength:h,showCount:I=!1,maxLength:l,className:t,id:me,value:L,defaultValue:he,onChange:z,onBlur:ge,...we},fe)=>{const[T,be]=w.useState(!1),[i,xe]=w.useState(L||he||""),[d,ye]=w.useState({score:0,feedback:""}),g=me||`password-${Math.random().toString(36).substr(2,9)}`,Pe=h||(r=>{let o=0,u="Too weak";switch(r.length>=8&&o++,/[a-z]/.test(r)&&/[A-Z]/.test(r)&&o++,/\d/.test(r)&&o++,/[^A-Za-z0-9]/.test(r)&&o++,o){case 0:case 1:u="Too weak";break;case 2:u="Weak";break;case 3:u="Good";break;case 4:u="Strong";break}return{score:o,feedback:u}}),Se=r=>{const o=r.target.value;xe(o),m&&ye(Pe(o)),z&&z(r)},ve=()=>{be(!T)},Ce={sm:"px-2 py-1 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},Ne=["bg-red-500","bg-red-400","bg-yellow-500","bg-blue-500","bg-green-500"];return e.jsxs("div",{className:"space-y-1",children:[a&&e.jsx("label",{htmlFor:g,className:p("block text-sm font-medium",s?"text-red-700":"text-gray-700"),children:a}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:fe,id:g,type:T?"text":"password",value:L!==void 0?L:i,onChange:Se,onBlur:ge,maxLength:l,className:p("w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-10",Ce[n],s?"border-red-500 focus:border-red-500 focus:ring-red-500":"border-gray-300",t),...we}),e.jsx("button",{type:"button",onClick:ve,className:"absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors",tabIndex:-1,children:T?e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878l4.242 4.242m0 0l1.414 1.414M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-.438-1.575m-6.838-1.692a4.502 4.502 0 013.831 2.807M14.828 14.828L16.243 16.243"})}):e.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]}),I&&l&&e.jsx("div",{className:"flex justify-end",children:e.jsxs("span",{className:p("text-xs",i.length>l*.9?"text-yellow-600":"text-gray-500",i.length>=l&&"text-red-600"),children:[i.length,"/",l]})}),m&&i&&e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex gap-1",children:[0,1,2,3,4].map(r=>e.jsx("div",{className:p("h-1 flex-1 rounded-full transition-colors",r<=d.score?Ne[d.score]:"bg-gray-200")},r))}),e.jsxs("p",{className:p("text-xs font-medium",d.score<=1&&"text-red-600",d.score===2&&"text-yellow-600",d.score===3&&"text-blue-600",d.score===4&&"text-green-600"),children:["Password strength: ",d.feedback]})]}),e.jsx(je,{message:s,fieldId:g}),e.jsx(ke,{text:s?void 0:V,fieldId:g})]})});c.displayName="PasswordInput";try{c.displayName="PasswordInput",c.__docgenInfo={description:"",displayName:"PasswordInput",props:{label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},showStrength:{defaultValue:{value:"false"},description:"Show password strength indicator",name:"showStrength",required:!1,type:{name:"boolean"}},validateStrength:{defaultValue:null,description:"Custom strength validation function",name:"validateStrength",required:!1,type:{name:"((password: string) => { score: number; feedback: string; })"}},showCount:{defaultValue:{value:"false"},description:"Show character count",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Maximum character length",name:"maxLength",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Input id",name:"id",required:!1,type:{name:"string"}}}}}catch{}const We={title:"Form/PasswordInput",component:c,parameters:{layout:"centered"},decorators:[a=>e.jsx("div",{className:"w-80 p-8",children:e.jsx(a,{})})],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},showStrength:{control:{type:"boolean"}},showCount:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},b={args:{placeholder:"Enter your password"}},x={args:{label:"Password",placeholder:"Enter your password",id:"password"}},y={args:{label:"Create Password",placeholder:"Enter a strong password",showStrength:!0,helperText:"Password should contain uppercase, lowercase, numbers, and symbols",id:"strength"}},P={args:{label:"Password",placeholder:"Enter password",showCount:!0,maxLength:20,helperText:"Maximum 20 characters",id:"count"}},S={args:{label:"New Password",placeholder:"Create a secure password",showStrength:!0,showCount:!0,maxLength:50,id:"full-featured"}},v={args:{label:"Password",placeholder:"Enter password",error:"Password must be at least 8 characters long",id:"error"}},C={args:{label:"Disabled Password",placeholder:"Cannot type here",disabled:!0,defaultValue:"disabled",id:"disabled"}},N={args:{size:"sm",label:"Small Password Input",placeholder:"Small size",id:"small"}},j={args:{size:"lg",label:"Large Password Input",placeholder:"Large size",id:"large"}},k={args:{label:"Custom Validation",placeholder:"Try different passwords",showStrength:!0,validateStrength:a=>a.length<6?{score:0,feedback:"Too short"}:a.length<10?{score:2,feedback:"Medium"}:{score:4,feedback:"Perfect length"},helperText:"This example only validates password length",id:"custom"}},E={render:a=>{const[s,V]=f.useState(""),[n,m]=f.useState(""),[h,I]=f.useState({}),l=()=>{const t={};s.length<8&&(t.password="Password must be at least 8 characters"),n&&s!==n&&(t.confirm="Passwords do not match"),I(t)};return f.useEffect(()=>{l()},[s,n]),e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{label:"New Password",placeholder:"Create a password",value:s,onChange:t=>V(t.target.value),showStrength:!0,showCount:!0,maxLength:50,error:h.password,id:"new-password"}),e.jsx(c,{label:"Confirm Password",placeholder:"Confirm your password",value:n,onChange:t=>m(t.target.value),error:h.confirm,id:"confirm-password"}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Validation Status"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("p",{className:s.length>=8?"text-green-600":"text-red-600",children:["At least 8 characters: ",s.length>=8?"Yes":"No"]}),e.jsxs("p",{className:s===n&&s?"text-green-600":"text-red-600",children:["Passwords match: ",s===n&&s?"Yes":"No"]})]})]})]})}};var M,W,q;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password'
  }
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,R,A;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    id: 'password'
  }
}`,...(A=(R=x.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,B,F;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Create Password',
    placeholder: 'Enter a strong password',
    showStrength: true,
    helperText: 'Password should contain uppercase, lowercase, numbers, and symbols',
    id: 'strength'
  }
}`,...(F=(B=y.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var Y,H,Z;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    showCount: true,
    maxLength: 20,
    helperText: 'Maximum 20 characters',
    id: 'count'
  }
}`,...(Z=(H=P.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var G,O,$;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'New Password',
    placeholder: 'Create a secure password',
    showStrength: true,
    showCount: true,
    maxLength: 50,
    id: 'full-featured'
  }
}`,...($=(O=S.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password must be at least 8 characters long',
    id: 'error'
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,ee;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Password',
    placeholder: 'Cannot type here',
    disabled: true,
    defaultValue: 'disabled',
    id: 'disabled'
  }
}`,...(ee=(X=C.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var se,re,ae;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Password Input',
    placeholder: 'Small size',
    id: 'small'
  }
}`,...(ae=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Password Input',
    placeholder: 'Large size',
    id: 'large'
  }
}`,...(ne=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,de,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Custom Validation',
    placeholder: 'Try different passwords',
    showStrength: true,
    validateStrength: (password: string) => {
      // Custom validation: only checks length
      if (password.length < 6) return {
        score: 0,
        feedback: 'Too short'
      };
      if (password.length < 10) return {
        score: 2,
        feedback: 'Medium'
      };
      return {
        score: 4,
        feedback: 'Perfect length'
      };
    },
    helperText: 'This example only validates password length',
    id: 'custom'
  }
}`,...(ce=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ie,ue,pe;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errors, setErrors] = React.useState<{
      password?: string;
      confirm?: string;
    }>({});
    const validatePasswords = () => {
      const newErrors: {
        password?: string;
        confirm?: string;
      } = {};
      if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      if (confirmPassword && password !== confirmPassword) {
        newErrors.confirm = 'Passwords do not match';
      }
      setErrors(newErrors);
    };
    React.useEffect(() => {
      validatePasswords();
    }, [password, confirmPassword]);
    return <div className="space-y-4">
        <PasswordInput label="New Password" placeholder="Create a password" value={password} onChange={e => setPassword(e.target.value)} showStrength showCount maxLength={50} error={errors.password} id="new-password" />
        
        <PasswordInput label="Confirm Password" placeholder="Confirm your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} error={errors.confirm} id="confirm-password" />
        
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold text-gray-900 mb-2">Validation Status</h3>
          <div className="space-y-1 text-sm">
            <p className={password.length >= 8 ? 'text-green-600' : 'text-red-600'}>
               At least 8 characters: {password.length >= 8 ? 'Yes' : 'No'}
            </p>
            <p className={password === confirmPassword && password ? 'text-green-600' : 'text-red-600'}>
               Passwords match: {password === confirmPassword && password ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>;
  }
}`,...(pe=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const qe=["Default","WithLabel","WithStrengthIndicator","WithCharacterCount","WithBothFeatures","WithError","Disabled","Small","Large","CustomStrengthValidation","Interactive"];export{k as CustomStrengthValidation,b as Default,C as Disabled,E as Interactive,j as Large,N as Small,S as WithBothFeatures,P as WithCharacterCount,v as WithError,x as WithLabel,y as WithStrengthIndicator,qe as __namedExportsOrder,We as default};
