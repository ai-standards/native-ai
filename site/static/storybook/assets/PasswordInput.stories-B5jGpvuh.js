import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as g,R as h}from"./index-DHZDe_v1.js";import{c as p}from"./cn-BaF2GUMg.js";import{E as je}from"./ErrorMessage-DYjD2rVY.js";import{H as Se}from"./HelperText-lEaK-uHm.js";import"./_commonjsHelpers-BosuxZz1.js";const l=g.forwardRef(({label:a,error:s,helperText:V,size:n="md",showStrength:m=!1,validateStrength:f,showCount:I=!1,maxLength:i,className:t,id:me,value:C,defaultValue:fe,onChange:L,onBlur:we,...ge},he)=>{const[U,be]=g.useState(!1),[c,xe]=g.useState(C||fe||""),[d,Ne]=g.useState({score:0,feedback:""}),w=me||`password-${Math.random().toString(36).substr(2,9)}`,ve=f||(r=>{let o=0,u="Too weak";switch(r.length>=8&&o++,/[a-z]/.test(r)&&/[A-Z]/.test(r)&&o++,/\d/.test(r)&&o++,/[^A-Za-z0-9]/.test(r)&&o++,o){case 0:case 1:u="Too weak";break;case 2:u="Weak";break;case 3:u="Good";break;case 4:u="Strong";break}return{score:o,feedback:u}}),ye=r=>{const o=r.target.value;xe(o),m&&Ne(ve(o)),L&&L(r)},ke=()=>{be(!U)},Pe={sm:"px-2 py-1 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},De=["bg-red-500","bg-red-400","bg-yellow-500","bg-blue-500","bg-green-500"];return e.jsxDEV("div",{className:"space-y-1",children:[a&&e.jsxDEV("label",{htmlFor:w,className:p("block text-sm font-medium",s?"text-red-700":"text-gray-700"),children:a},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:130,columnNumber:11},void 0),e.jsxDEV("div",{className:"relative",children:[e.jsxDEV("input",{ref:he,id:w,type:U?"text":"password",value:C!==void 0?C:c,onChange:ye,onBlur:we,maxLength:i,className:p("w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-10",Pe[n],s?"border-red-500 focus:border-red-500 focus:ring-red-500":"border-gray-300",t),...ge},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:142,columnNumber:11},void 0),e.jsxDEV("button",{type:"button",onClick:ke,className:"absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors",tabIndex:-1,children:U?e.jsxDEV("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878l4.242 4.242m0 0l1.414 1.414M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-.438-1.575m-6.838-1.692a4.502 4.502 0 013.831 2.807M14.828 14.828L16.243 16.243"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:169,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:168,columnNumber:15},void 0):e.jsxDEV("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:173,columnNumber:17},void 0),e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:174,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:172,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:161,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:141,columnNumber:9},void 0),I&&i&&e.jsxDEV("div",{className:"flex justify-end",children:e.jsxDEV("span",{className:p("text-xs",c.length>i*.9?"text-yellow-600":"text-gray-500",c.length>=i&&"text-red-600"),children:[c.length,"/",i]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:183,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:182,columnNumber:11},void 0),m&&c&&e.jsxDEV("div",{className:"space-y-1",children:[e.jsxDEV("div",{className:"flex gap-1",children:[0,1,2,3,4].map(r=>e.jsxDEV("div",{className:p("h-1 flex-1 rounded-full transition-colors",r<=d.score?De[d.score]:"bg-gray-200")},r,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:198,columnNumber:17},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:196,columnNumber:13},void 0),e.jsxDEV("p",{className:p("text-xs font-medium",d.score<=1&&"text-red-600",d.score===2&&"text-yellow-600",d.score===3&&"text-blue-600",d.score===4&&"text-green-600"),children:["Password strength: ",d.feedback]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:207,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:195,columnNumber:11},void 0),e.jsxDEV(je,{message:s,fieldId:w},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:219,columnNumber:9},void 0),e.jsxDEV(Se,{text:s?void 0:V,fieldId:w},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:220,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.tsx",lineNumber:128,columnNumber:7},void 0)});l.displayName="PasswordInput";try{l.displayName="PasswordInput",l.__docgenInfo={description:"",displayName:"PasswordInput",props:{label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},showStrength:{defaultValue:{value:"false"},description:"Show password strength indicator",name:"showStrength",required:!1,type:{name:"boolean"}},validateStrength:{defaultValue:null,description:"Custom strength validation function",name:"validateStrength",required:!1,type:{name:"((password: string) => { score: number; feedback: string; })"}},showCount:{defaultValue:{value:"false"},description:"Show character count",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Maximum character length",name:"maxLength",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Input id",name:"id",required:!1,type:{name:"string"}}}}}catch{}const ze={title:"Form/PasswordInput",component:l,parameters:{layout:"centered"},decorators:[a=>e.jsxDEV("div",{className:"w-80 p-8",children:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:14,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:13,columnNumber:7},void 0)],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},showStrength:{control:{type:"boolean"}},showCount:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},b={args:{placeholder:"Enter your password"}},x={args:{label:"Password",placeholder:"Enter your password",id:"password"}},N={args:{label:"Create Password",placeholder:"Enter a strong password",showStrength:!0,helperText:"Password should contain uppercase, lowercase, numbers, and symbols",id:"strength"}},v={args:{label:"Password",placeholder:"Enter password",showCount:!0,maxLength:20,helperText:"Maximum 20 characters",id:"count"}},y={args:{label:"New Password",placeholder:"Create a secure password",showStrength:!0,showCount:!0,maxLength:50,id:"full-featured"}},k={args:{label:"Password",placeholder:"Enter password",error:"Password must be at least 8 characters long",id:"error"}},P={args:{label:"Disabled Password",placeholder:"Cannot type here",disabled:!0,defaultValue:"disabled",id:"disabled"}},D={args:{size:"sm",label:"Small Password Input",placeholder:"Small size",id:"small"}},j={args:{size:"lg",label:"Large Password Input",placeholder:"Large size",id:"large"}},S={args:{label:"Custom Validation",placeholder:"Try different passwords",showStrength:!0,validateStrength:a=>a.length<6?{score:0,feedback:"Too short"}:a.length<10?{score:2,feedback:"Medium"}:{score:4,feedback:"Perfect length"},helperText:"This example only validates password length",id:"custom"}},E={render:a=>{const[s,V]=h.useState(""),[n,m]=h.useState(""),[f,I]=h.useState({}),i=()=>{const t={};s.length<8&&(t.password="Password must be at least 8 characters"),n&&s!==n&&(t.confirm="Passwords do not match"),I(t)};return h.useEffect(()=>{i()},[s,n]),e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(l,{label:"New Password",placeholder:"Create a password",value:s,onChange:t=>V(t.target.value),showStrength:!0,showCount:!0,maxLength:50,error:f.password,id:"new-password"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:164,columnNumber:9},void 0),e.jsxDEV(l,{label:"Confirm Password",placeholder:"Confirm your password",value:n,onChange:t=>m(t.target.value),error:f.confirm,id:"confirm-password"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:176,columnNumber:9},void 0),e.jsxDEV("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsxDEV("h3",{className:"font-semibold text-gray-900 mb-2",children:"Validation Status"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:186,columnNumber:11},void 0),e.jsxDEV("div",{className:"space-y-1 text-sm",children:[e.jsxDEV("p",{className:s.length>=8?"text-green-600":"text-red-600",children:["At least 8 characters: ",s.length>=8?"Yes":"No"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:188,columnNumber:13},void 0),e.jsxDEV("p",{className:s===n&&s?"text-green-600":"text-red-600",children:["Passwords match: ",s===n&&s?"Yes":"No"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:191,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:187,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:185,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/passwordinput/PasswordInput.stories.tsx",lineNumber:163,columnNumber:7},void 0)}};var T,z,M;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password'
  }
}`,...(M=(z=b.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var W,q,_;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    id: 'password'
  }
}`,...(_=(q=x.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var R,A,B;N.parameters={...N.parameters,docs:{...(R=N.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Create Password',
    placeholder: 'Enter a strong password',
    showStrength: true,
    helperText: 'Password should contain uppercase, lowercase, numbers, and symbols',
    id: 'strength'
  }
}`,...(B=(A=N.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,Y,H;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    showCount: true,
    maxLength: 20,
    helperText: 'Maximum 20 characters',
    id: 'count'
  }
}`,...(H=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var Z,G,O;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'New Password',
    placeholder: 'Create a secure password',
    showStrength: true,
    showCount: true,
    maxLength: 50,
    id: 'full-featured'
  }
}`,...(O=(G=y.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var $,J,K;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password must be at least 8 characters long',
    id: 'error'
  }
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,ee;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Password',
    placeholder: 'Cannot type here',
    disabled: true,
    defaultValue: 'disabled',
    id: 'disabled'
  }
}`,...(ee=(X=P.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var se,re,ae;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Password Input',
    placeholder: 'Small size',
    id: 'small'
  }
}`,...(ae=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Password Input',
    placeholder: 'Large size',
    id: 'large'
  }
}`,...(ne=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,de,le;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(de=S.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,ue,pe;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const Me=["Default","WithLabel","WithStrengthIndicator","WithCharacterCount","WithBothFeatures","WithError","Disabled","Small","Large","CustomStrengthValidation","Interactive"];export{S as CustomStrengthValidation,b as Default,P as Disabled,E as Interactive,j as Large,D as Small,y as WithBothFeatures,v as WithCharacterCount,k as WithError,x as WithLabel,N as WithStrengthIndicator,Me as __namedExportsOrder,ze as default};
