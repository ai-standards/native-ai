import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as v,R as n}from"./index-DHZDe_v1.js";import{c as se}from"./cn-BaF2GUMg.js";import{u as P}from"./useDebounce-B8GKbvrx.js";import{I as l}from"./Input-CQJ3C0w-.js";import{N as R}from"./NumberInput-C_bCx5U2.js";import{C as I}from"./Checkbox-BUYlpk7b.js";import{S as oe}from"./Select-D51Yllms.js";import{T as ne}from"./Textarea-CMbFjUcw.js";import{S as te}from"./Switch-17GmKhAQ.js";import{R as me}from"./Radio-CGpGOYSU.js";import{S as ie}from"./Slider-BK9MuES0.js";import{D as le}from"./DatePicker-CSxfcspL.js";import{B as S}from"./Button-CQ25bht0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ErrorMessage-DYjD2rVY.js";import"./HelperText-lEaK-uHm.js";import"./ValidationIndicator-D1EYnJxy.js";const ue=n.createContext(null),p=v.forwardRef(({onChange:t,onErrorChange:u,debounceMs:c=300,defaultValues:g={},values:d,validationMode:o="onChange",className:U,children:D,...x},C)=>{const[s,m]=n.useState(()=>({...g,...d})),[N,h]=n.useState({}),y=v.useRef(s),B=v.useRef(N);v.useEffect(()=>{d&&m(a=>({...a,...d}))},[d]);const J=P(a=>{JSON.stringify(y.current)!==JSON.stringify(a)&&t&&(t(a),y.current={...a})},c),O=P(a=>{JSON.stringify(B.current)!==JSON.stringify(a)&&u&&(u(a),B.current={...a})},c),w=v.useCallback((a,r)=>{m(b=>{const i={...b,[a]:r};return J(i),i})},[J]),q=v.useCallback((a,r)=>{h(b=>{const i={...b,[a]:r};return r===void 0&&delete i[a],O(i),i})},[O]),ee=a=>{a.preventDefault(),o==="onSubmit"&&console.log("Form submitted with data:",s),x.onSubmit&&x.onSubmit(a)},re=n.useMemo(()=>({formData:s,formErrors:N,updateField:w,updateError:q,validationMode:o}),[s,N,w,q,o]),A=a=>n.Children.map(a,r=>{if(!n.isValidElement(r))return r;if(r.props.name){const b=r.props.name,i=s[b],L=N[b],ae=r.type==="input"&&(r.props.type==="checkbox"||r.props.type==="radio")||r.props.type==="checkbox"||r.props.type==="radio";return n.cloneElement(r,{...ae?{checked:i!==void 0?i:r.props.checked}:{value:i!==void 0?i:r.props.value},onChange:f=>{let M=f;if(f&&typeof f=="object"&&f.target){const k=f.target;k.type==="checkbox"||k.type==="radio"?M=k.checked:M=k.value}r.props.onChange&&r.props.onChange(f),w(b,M)},error:L!==void 0?!0:r.props.error,errorMessage:L||r.props.errorMessage,onBlur:f=>{r.props.onBlur&&r.props.onBlur(f)}})}return r.props.children?n.cloneElement(r,{children:A(r.props.children)}):r});return e.jsxDEV(ue.Provider,{value:re,children:e.jsxDEV("form",{ref:C,className:se("space-y-6",U),onSubmit:ee,...x,children:A(D)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.tsx",lineNumber:263,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.tsx",lineNumber:262,columnNumber:7},void 0)});p.displayName="Form";try{p.displayName="Form",p.__docgenInfo={description:"",displayName:"Form",props:{onChange:{defaultValue:null,description:"Called when form data changes (debounced)",name:"onChange",required:!1,type:{name:"((data: FormData) => void)"}},onErrorChange:{defaultValue:null,description:"Called when form errors change (debounced)",name:"onErrorChange",required:!1,type:{name:"((errors: FormErrors) => void)"}},debounceMs:{defaultValue:{value:"300"},description:"Debounce delay in milliseconds",name:"debounceMs",required:!1,type:{name:"number"}},defaultValues:{defaultValue:{value:"{}"},description:"Default form values",name:"defaultValues",required:!1,type:{name:"FormData"}},values:{defaultValue:null,description:"Controlled form values",name:"values",required:!1,type:{name:"FormData"}},validationMode:{defaultValue:{value:"onChange"},description:"Validation mode",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"onBlur"'},{value:'"onChange"'},{value:'"onSubmit"'}]}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Form children",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ue={title:"Form/Form",component:p,parameters:{layout:"centered"},decorators:[t=>e.jsxDEV("div",{className:"w-full max-w-2xl p-8",children:e.jsxDEV(t,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:24,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:23,columnNumber:7},void 0)],tags:["autodocs"],argTypes:{debounceMs:{control:{type:"number",min:0,max:1e3,step:50}},validationMode:{control:{type:"radio"},options:["onChange","onBlur","onSubmit"]}}},E={args:{},render:t=>e.jsxDEV(p,{...t,children:[e.jsxDEV(l,{name:"firstName",label:"First Name",placeholder:"Enter your first name",id:"firstName"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:47,columnNumber:7},void 0),e.jsxDEV(l,{name:"lastName",label:"Last Name",placeholder:"Enter your last name",id:"lastName"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:53,columnNumber:7},void 0),e.jsxDEV(l,{name:"email",type:"email",label:"Email",placeholder:"Enter your email",id:"email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:59,columnNumber:7},void 0),e.jsxDEV(S,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:66,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:46,columnNumber:5},void 0)},F={render:t=>{const[u,c]=n.useState({}),[g,d]=n.useState({});return e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV(p,{...t,onChange:c,onErrorChange:d,children:[e.jsxDEV(l,{name:"firstName",label:"First Name",placeholder:"Enter your first name",id:"firstName"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:83,columnNumber:11},void 0),e.jsxDEV(l,{name:"lastName",label:"Last Name",placeholder:"Enter your last name",id:"lastName"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:89,columnNumber:11},void 0),e.jsxDEV(l,{name:"email",type:"email",label:"Email",placeholder:"Enter your email",id:"email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:95,columnNumber:11},void 0),e.jsxDEV(R,{name:"age",label:"Age",min:0,max:120,id:"age"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:102,columnNumber:11},void 0),e.jsxDEV(I,{name:"newsletter",label:"Subscribe to newsletter",id:"newsletter"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:109,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:78,columnNumber:9},void 0),e.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxDEV("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsxDEV("h3",{className:"font-semibold text-blue-900 mb-2",children:"Form Data"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:118,columnNumber:13},void 0),e.jsxDEV("pre",{className:"text-xs text-blue-800 overflow-auto",children:JSON.stringify(u,null,2)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:119,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:117,columnNumber:11},void 0),e.jsxDEV("div",{className:"p-4 bg-red-50 rounded",children:[e.jsxDEV("h3",{className:"font-semibold text-red-900 mb-2",children:"Form Errors"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:125,columnNumber:13},void 0),e.jsxDEV("pre",{className:"text-xs text-red-800 overflow-auto",children:JSON.stringify(g,null,2)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:126,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:124,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:116,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:77,columnNumber:7},void 0)}},j={render:t=>{const[u,c]=n.useState({});return e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV(p,{...t,onChange:c,defaultValues:{name:"John Doe",age:30,active:!0,country:"US",bio:"Software developer",theme:"dark",notifications:"email",volume:75,birthdate:new Date(1994,0,1)},children:[e.jsxDEV("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(l,{name:"name",label:"Full Name",placeholder:"Enter your name",id:"name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:159,columnNumber:15},void 0),e.jsxDEV(R,{name:"age",label:"Age",min:0,max:120,id:"age"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:166,columnNumber:15},void 0),e.jsxDEV(te,{name:"active",label:"Active Status",id:"active"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:174,columnNumber:15},void 0),e.jsxDEV(oe,{name:"country",label:"Country",options:[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"UK",label:"United Kingdom"},{value:"DE",label:"Germany"},{value:"FR",label:"France"}],id:"country"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:180,columnNumber:15},void 0),e.jsxDEV(ne,{name:"bio",label:"Biography",placeholder:"Tell us about yourself",id:"bio"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:193,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:158,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700",children:"Notification Preference"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:203,columnNumber:17},void 0),e.jsxDEV(me,{name:"notifications",options:[{value:"email",label:"Email"},{value:"sms",label:"SMS"},{value:"push",label:"Push"},{value:"none",label:"None"}]},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:206,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:202,columnNumber:15},void 0),e.jsxDEV(ie,{name:"volume",label:"Volume Level",min:0,max:100,showValue:!0,id:"volume"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:217,columnNumber:15},void 0),e.jsxDEV(le,{name:"birthdate",label:"Birth Date",id:"birthdate"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:226,columnNumber:15},void 0),e.jsxDEV(I,{name:"terms",label:"I agree to the terms and conditions",id:"terms"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:232,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:201,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:157,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex gap-4 pt-4 border-t",children:[e.jsxDEV(S,{type:"submit",variant:"primary",children:"Save Profile"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:241,columnNumber:13},void 0),e.jsxDEV(S,{type:"button",variant:"secondary",children:"Cancel"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:244,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:240,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:142,columnNumber:9},void 0),e.jsxDEV("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsxDEV("h3",{className:"font-semibold text-gray-900 mb-2",children:"Live Form Data"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:251,columnNumber:11},void 0),e.jsxDEV("pre",{className:"text-xs text-gray-700 overflow-auto max-h-64",children:JSON.stringify(u,null,2)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:252,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:250,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:141,columnNumber:7},void 0)}},V={render:t=>{const[u,c]=n.useState({}),[g,d]=n.useState({}),[o,U]=n.useState({}),D=s=>{var N,h,y;const m={};return(N=s.firstName)!=null&&N.trim()||(m.firstName="First name is required"),(h=s.lastName)!=null&&h.trim()||(m.lastName="Last name is required"),(y=s.email)!=null&&y.trim()?/\S+@\S+\.\S+/.test(s.email)||(m.email="Email is invalid"):m.email="Email is required",(!s.age||s.age<18)&&(m.age="Must be 18 or older"),s.terms||(m.terms="You must accept the terms"),U(m),m},x=s=>{c(s),D(s)},C=s=>{s.preventDefault();const m=D(u);Object.keys(m).length===0?alert("Form submitted successfully!"):alert("Please fix the validation errors")};return e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV(p,{...t,onChange:x,onErrorChange:d,onSubmit:C,children:[e.jsxDEV("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(l,{name:"firstName",label:"First Name *",placeholder:"Enter your first name",error:!!o.firstName,errorMessage:o.firstName,id:"firstName"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:323,columnNumber:15},void 0),e.jsxDEV(l,{name:"lastName",label:"Last Name *",placeholder:"Enter your last name",error:!!o.lastName,errorMessage:o.lastName,id:"lastName"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:332,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:322,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(l,{name:"email",type:"email",label:"Email *",placeholder:"Enter your email",error:!!o.email,errorMessage:o.email,id:"email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:343,columnNumber:15},void 0),e.jsxDEV(R,{name:"age",label:"Age *",min:0,max:120,error:!!o.age,errorMessage:o.age,helperText:"Must be 18 or older",id:"age"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:353,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:342,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:321,columnNumber:11},void 0),e.jsxDEV(I,{name:"terms",label:"I agree to the terms and conditions *",error:!!o.terms,errorMessage:o.terms,id:"terms"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:366,columnNumber:11},void 0),e.jsxDEV(S,{type:"submit",variant:"primary",className:"w-full",children:"Submit Form"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:374,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:315,columnNumber:9},void 0),e.jsxDEV("div",{className:"grid grid-cols-3 gap-4 text-xs",children:[e.jsxDEV("div",{className:"p-3 bg-blue-50 rounded",children:[e.jsxDEV("h4",{className:"font-semibold text-blue-900 mb-2",children:"Form Data"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:381,columnNumber:13},void 0),e.jsxDEV("pre",{className:"text-blue-800 overflow-auto max-h-32",children:JSON.stringify(u,null,2)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:382,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:380,columnNumber:11},void 0),e.jsxDEV("div",{className:"p-3 bg-red-50 rounded",children:[e.jsxDEV("h4",{className:"font-semibold text-red-900 mb-2",children:"Validation Errors"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:388,columnNumber:13},void 0),e.jsxDEV("pre",{className:"text-red-800 overflow-auto max-h-32",children:JSON.stringify(o,null,2)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:389,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:387,columnNumber:11},void 0),e.jsxDEV("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsxDEV("h4",{className:"font-semibold text-gray-900 mb-2",children:"Component Errors"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:395,columnNumber:13},void 0),e.jsxDEV("pre",{className:"text-gray-800 overflow-auto max-h-32",children:JSON.stringify(g,null,2)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:396,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:394,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:379,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/form/Form.stories.tsx",lineNumber:314,columnNumber:7},void 0)}};var _,T,K;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {},
  render: args => <Form {...args}>
      <Input name="firstName" label="First Name" placeholder="Enter your first name" id="firstName" />
      <Input name="lastName" label="Last Name" placeholder="Enter your last name" id="lastName" />
      <Input name="email" type="email" label="Email" placeholder="Enter your email" id="email" />
      <Button type="submit">Submit</Button>
    </Form>
}`,...(K=(T=E.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var W,G,Y;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = React.useState({});
    const [formErrors, setFormErrors] = React.useState({});
    return <div className="space-y-6">
        <Form {...args} onChange={setFormData} onErrorChange={setFormErrors}>
          <Input name="firstName" label="First Name" placeholder="Enter your first name" id="firstName" />
          <Input name="lastName" label="Last Name" placeholder="Enter your last name" id="lastName" />
          <Input name="email" type="email" label="Email" placeholder="Enter your email" id="email" />
          <NumberInput name="age" label="Age" min={0} max={120} id="age" />
          <Checkbox name="newsletter" label="Subscribe to newsletter" id="newsletter" />
        </Form>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <h3 className="font-semibold text-blue-900 mb-2">Form Data</h3>
            <pre className="text-xs text-blue-800 overflow-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
          
          <div className="p-4 bg-red-50 rounded">
            <h3 className="font-semibold text-red-900 mb-2">Form Errors</h3>
            <pre className="text-xs text-red-800 overflow-auto">
              {JSON.stringify(formErrors, null, 2)}
            </pre>
          </div>
        </div>
      </div>;
  }
}`,...(Y=(G=F.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var z,H,Q;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = React.useState({});
    return <div className="space-y-6">
        <Form {...args} onChange={setFormData} defaultValues={{
        name: 'John Doe',
        age: 30,
        active: true,
        country: 'US',
        bio: 'Software developer',
        theme: 'dark',
        notifications: 'email',
        volume: 75,
        birthdate: new Date(1994, 0, 1)
      }}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input name="name" label="Full Name" placeholder="Enter your name" id="name" />
              
              <NumberInput name="age" label="Age" min={0} max={120} id="age" />
              
              <Switch name="active" label="Active Status" id="active" />
              
              <Select name="country" label="Country" options={[{
              value: 'US',
              label: 'United States'
            }, {
              value: 'CA',
              label: 'Canada'
            }, {
              value: 'UK',
              label: 'United Kingdom'
            }, {
              value: 'DE',
              label: 'Germany'
            }, {
              value: 'FR',
              label: 'France'
            }]} id="country" />
              
              <Textarea name="bio" label="Biography" placeholder="Tell us about yourself" id="bio" />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Notification Preference
                </label>
                <Radio name="notifications" options={[{
                value: 'email',
                label: 'Email'
              }, {
                value: 'sms',
                label: 'SMS'
              }, {
                value: 'push',
                label: 'Push'
              }, {
                value: 'none',
                label: 'None'
              }]} />
              </div>
              
              <Slider name="volume" label="Volume Level" min={0} max={100} showValue id="volume" />
              
              <DatePicker name="birthdate" label="Birth Date" id="birthdate" />
              
              <Checkbox name="terms" label="I agree to the terms and conditions" id="terms" />
            </div>
          </div>
          
          <div className="flex gap-4 pt-4 border-t">
            <Button type="submit" variant="primary">
              Save Profile
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </Form>

        <div className="p-4 bg-gray-50 rounded">
          <h3 className="font-semibold text-gray-900 mb-2">Live Form Data</h3>
          <pre className="text-xs text-gray-700 overflow-auto max-h-64">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>;
  }
}`,...(Q=(H=j.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var X,Z,$;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = React.useState<any>({});
    const [formErrors, setFormErrors] = React.useState<any>({});
    const [validationErrors, setValidationErrors] = React.useState<any>({});

    // Simple validation rules
    const validateForm = (data: any) => {
      const errors: any = {};
      if (!data.firstName?.trim()) {
        errors.firstName = 'First name is required';
      }
      if (!data.lastName?.trim()) {
        errors.lastName = 'Last name is required';
      }
      if (!data.email?.trim()) {
        errors.email = 'Email is required';
      } else if (!/\\S+@\\S+\\.\\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
      }
      if (!data.age || data.age < 18) {
        errors.age = 'Must be 18 or older';
      }
      if (!data.terms) {
        errors.terms = 'You must accept the terms';
      }
      setValidationErrors(errors);
      return errors;
    };
    const handleFormChange = (data: any) => {
      setFormData(data);
      validateForm(data);
    };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const errors = validateForm(formData);
      if (Object.keys(errors).length === 0) {
        alert('Form submitted successfully!');
      } else {
        alert('Please fix the validation errors');
      }
    };
    return <div className="space-y-6">
        <Form {...args} onChange={handleFormChange} onErrorChange={setFormErrors} onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input name="firstName" label="First Name *" placeholder="Enter your first name" error={!!validationErrors.firstName} errorMessage={validationErrors.firstName} id="firstName" />
              
              <Input name="lastName" label="Last Name *" placeholder="Enter your last name" error={!!validationErrors.lastName} errorMessage={validationErrors.lastName} id="lastName" />
            </div>
            
            <div className="space-y-4">
              <Input name="email" type="email" label="Email *" placeholder="Enter your email" error={!!validationErrors.email} errorMessage={validationErrors.email} id="email" />
              
              <NumberInput name="age" label="Age *" min={0} max={120} error={!!validationErrors.age} errorMessage={validationErrors.age} helperText="Must be 18 or older" id="age" />
            </div>
          </div>
          
          <Checkbox name="terms" label="I agree to the terms and conditions *" error={!!validationErrors.terms} errorMessage={validationErrors.terms} id="terms" />
          
          <Button type="submit" variant="primary" className="w-full">
            Submit Form
          </Button>
        </Form>

        <div className="grid grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-blue-50 rounded">
            <h4 className="font-semibold text-blue-900 mb-2">Form Data</h4>
            <pre className="text-blue-800 overflow-auto max-h-32">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
          
          <div className="p-3 bg-red-50 rounded">
            <h4 className="font-semibold text-red-900 mb-2">Validation Errors</h4>
            <pre className="text-red-800 overflow-auto max-h-32">
              {JSON.stringify(validationErrors, null, 2)}
            </pre>
          </div>
          
          <div className="p-3 bg-gray-50 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Component Errors</h4>
            <pre className="text-gray-800 overflow-auto max-h-32">
              {JSON.stringify(formErrors, null, 2)}
            </pre>
          </div>
        </div>
      </div>;
  }
}`,...($=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Ce=["Default","WithFormData","AllComponents","WithValidation"];export{j as AllComponents,E as Default,F as WithFormData,V as WithValidation,Ce as __namedExportsOrder,Ue as default};
