import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as h,R as s}from"./index-BwDkhjyp.js";import{c as te}from"./cn-BaF2GUMg.js";import{u as U}from"./useDebounce-N2WsDTMR.js";import{I as m}from"./Input-pNZxzZhC.js";import{N as I}from"./NumberInput-nTFZ0eRg.js";import{C as B}from"./Checkbox-CxLVq6BC.js";import{S as ne}from"./Select-BL-muZbR.js";import{T as se}from"./Textarea-U38OKHc1.js";import{S as oe}from"./Switch-C3flAvlP.js";import{R as le}from"./Radio-CJQd-dsS.js";import{S as ie}from"./Slider-DyudkZ48.js";import{D as me}from"./DatePicker-DKiWnz29.js";import{B as w}from"./Button-LTpUiv5Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ErrorMessage-BhI4OYJy.js";import"./HelperText-CBAylTSp.js";import"./ValidationIndicator-Bug4K0iL.js";const de=s.createContext(null),f=h.forwardRef(({onChange:o,onErrorChange:d,debounceMs:c=300,defaultValues:v={},values:u,validationMode:n="onChange",className:V,children:y,...x},M)=>{const[t,l]=s.useState(()=>({...v,...u})),[b,S]=s.useState({}),N=h.useRef(t),J=h.useRef(b);h.useEffect(()=>{u&&l(r=>({...r,...u}))},[u]);const O=U(r=>{JSON.stringify(N.current)!==JSON.stringify(r)&&o&&(o(r),N.current={...r})},c),q=U(r=>{JSON.stringify(J.current)!==JSON.stringify(r)&&d&&(d(r),J.current={...r})},c),R=h.useCallback((r,a)=>{l(g=>{const i={...g,[r]:a};return O(i),i})},[O]),A=h.useCallback((r,a)=>{S(g=>{const i={...g,[r]:a};return a===void 0&&delete i[r],q(i),i})},[q]),ee=r=>{r.preventDefault(),n==="onSubmit"&&console.log("Form submitted with data:",t),x.onSubmit&&x.onSubmit(r)},ae=s.useMemo(()=>({formData:t,formErrors:b,updateField:R,updateError:A,validationMode:n}),[t,b,R,A,n]),L=r=>s.Children.map(r,a=>{if(!s.isValidElement(a))return a;if(a.props.name){const g=a.props.name,i=t[g],P=b[g],re=a.type==="input"&&(a.props.type==="checkbox"||a.props.type==="radio")||a.props.type==="checkbox"||a.props.type==="radio";return s.cloneElement(a,{...re?{checked:i!==void 0?i:a.props.checked}:{value:i!==void 0?i:a.props.value},onChange:p=>{let k=p;if(p&&typeof p=="object"&&p.target){const E=p.target;E.type==="checkbox"||E.type==="radio"?k=E.checked:k=E.value}a.props.onChange&&a.props.onChange(p),R(g,k)},error:P!==void 0?!0:a.props.error,errorMessage:P||a.props.errorMessage,onBlur:p=>{a.props.onBlur&&a.props.onBlur(p)}})}return a.props.children?s.cloneElement(a,{children:L(a.props.children)}):a});return e.jsx(de.Provider,{value:ae,children:e.jsx("form",{ref:M,className:te("space-y-6",V),onSubmit:ee,...x,children:L(y)})})});f.displayName="Form";try{f.displayName="Form",f.__docgenInfo={description:"",displayName:"Form",props:{onChange:{defaultValue:null,description:"Called when form data changes (debounced)",name:"onChange",required:!1,type:{name:"((data: FormData) => void)"}},onErrorChange:{defaultValue:null,description:"Called when form errors change (debounced)",name:"onErrorChange",required:!1,type:{name:"((errors: FormErrors) => void)"}},debounceMs:{defaultValue:{value:"300"},description:"Debounce delay in milliseconds",name:"debounceMs",required:!1,type:{name:"number"}},defaultValues:{defaultValue:{value:"{}"},description:"Default form values",name:"defaultValues",required:!1,type:{name:"FormData"}},values:{defaultValue:null,description:"Controlled form values",name:"values",required:!1,type:{name:"FormData"}},validationMode:{defaultValue:{value:"onChange"},description:"Validation mode",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"onBlur"'},{value:'"onChange"'},{value:'"onSubmit"'}]}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Form children",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ve={title:"Form/Form",component:f,parameters:{layout:"centered"},decorators:[o=>e.jsx("div",{className:"w-full max-w-2xl p-8",children:e.jsx(o,{})})],tags:["autodocs"],argTypes:{debounceMs:{control:{type:"number",min:0,max:1e3,step:50}},validationMode:{control:{type:"radio"},options:["onChange","onBlur","onSubmit"]}}},F={args:{},render:o=>e.jsxs(f,{...o,children:[e.jsx(m,{name:"firstName",label:"First Name",placeholder:"Enter your first name",id:"firstName"}),e.jsx(m,{name:"lastName",label:"Last Name",placeholder:"Enter your last name",id:"lastName"}),e.jsx(m,{name:"email",type:"email",label:"Email",placeholder:"Enter your email",id:"email"}),e.jsx(w,{type:"submit",children:"Submit"})]})},j={render:o=>{const[d,c]=s.useState({}),[v,u]=s.useState({});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs(f,{...o,onChange:c,onErrorChange:u,children:[e.jsx(m,{name:"firstName",label:"First Name",placeholder:"Enter your first name",id:"firstName"}),e.jsx(m,{name:"lastName",label:"Last Name",placeholder:"Enter your last name",id:"lastName"}),e.jsx(m,{name:"email",type:"email",label:"Email",placeholder:"Enter your email",id:"email"}),e.jsx(I,{name:"age",label:"Age",min:0,max:120,id:"age"}),e.jsx(B,{name:"newsletter",label:"Subscribe to newsletter",id:"newsletter"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-blue-900 mb-2",children:"Form Data"}),e.jsx("pre",{className:"text-xs text-blue-800 overflow-auto",children:JSON.stringify(d,null,2)})]}),e.jsxs("div",{className:"p-4 bg-red-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-red-900 mb-2",children:"Form Errors"}),e.jsx("pre",{className:"text-xs text-red-800 overflow-auto",children:JSON.stringify(v,null,2)})]})]})]})}},C={render:o=>{const[d,c]=s.useState({});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs(f,{...o,onChange:c,defaultValues:{name:"John Doe",age:30,active:!0,country:"US",bio:"Software developer",theme:"dark",notifications:"email",volume:75,birthdate:new Date(1994,0,1)},children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{name:"name",label:"Full Name",placeholder:"Enter your name",id:"name"}),e.jsx(I,{name:"age",label:"Age",min:0,max:120,id:"age"}),e.jsx(oe,{name:"active",label:"Active Status",id:"active"}),e.jsx(ne,{name:"country",label:"Country",options:[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"UK",label:"United Kingdom"},{value:"DE",label:"Germany"},{value:"FR",label:"France"}],id:"country"}),e.jsx(se,{name:"bio",label:"Biography",placeholder:"Tell us about yourself",id:"bio"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Notification Preference"}),e.jsx(le,{name:"notifications",options:[{value:"email",label:"Email"},{value:"sms",label:"SMS"},{value:"push",label:"Push"},{value:"none",label:"None"}]})]}),e.jsx(ie,{name:"volume",label:"Volume Level",min:0,max:100,showValue:!0,id:"volume"}),e.jsx(me,{name:"birthdate",label:"Birth Date",id:"birthdate"}),e.jsx(B,{name:"terms",label:"I agree to the terms and conditions",id:"terms"})]})]}),e.jsxs("div",{className:"flex gap-4 pt-4 border-t",children:[e.jsx(w,{type:"submit",variant:"primary",children:"Save Profile"}),e.jsx(w,{type:"button",variant:"secondary",children:"Cancel"})]})]}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Live Form Data"}),e.jsx("pre",{className:"text-xs text-gray-700 overflow-auto max-h-64",children:JSON.stringify(d,null,2)})]})]})}},D={render:o=>{const[d,c]=s.useState({}),[v,u]=s.useState({}),[n,V]=s.useState({}),y=t=>{var b,S,N;const l={};return(b=t.firstName)!=null&&b.trim()||(l.firstName="First name is required"),(S=t.lastName)!=null&&S.trim()||(l.lastName="Last name is required"),(N=t.email)!=null&&N.trim()?/\S+@\S+\.\S+/.test(t.email)||(l.email="Email is invalid"):l.email="Email is required",(!t.age||t.age<18)&&(l.age="Must be 18 or older"),t.terms||(l.terms="You must accept the terms"),V(l),l},x=t=>{c(t),y(t)},M=t=>{t.preventDefault();const l=y(d);Object.keys(l).length===0?alert("Form submitted successfully!"):alert("Please fix the validation errors")};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs(f,{...o,onChange:x,onErrorChange:u,onSubmit:M,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{name:"firstName",label:"First Name *",placeholder:"Enter your first name",error:!!n.firstName,errorMessage:n.firstName,id:"firstName"}),e.jsx(m,{name:"lastName",label:"Last Name *",placeholder:"Enter your last name",error:!!n.lastName,errorMessage:n.lastName,id:"lastName"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{name:"email",type:"email",label:"Email *",placeholder:"Enter your email",error:!!n.email,errorMessage:n.email,id:"email"}),e.jsx(I,{name:"age",label:"Age *",min:0,max:120,error:!!n.age,errorMessage:n.age,helperText:"Must be 18 or older",id:"age"})]})]}),e.jsx(B,{name:"terms",label:"I agree to the terms and conditions *",error:!!n.terms,errorMessage:n.terms,id:"terms"}),e.jsx(w,{type:"submit",variant:"primary",className:"w-full",children:"Submit Form"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded",children:[e.jsx("h4",{className:"font-semibold text-blue-900 mb-2",children:"Form Data"}),e.jsx("pre",{className:"text-blue-800 overflow-auto max-h-32",children:JSON.stringify(d,null,2)})]}),e.jsxs("div",{className:"p-3 bg-red-50 rounded",children:[e.jsx("h4",{className:"font-semibold text-red-900 mb-2",children:"Validation Errors"}),e.jsx("pre",{className:"text-red-800 overflow-auto max-h-32",children:JSON.stringify(n,null,2)})]}),e.jsxs("div",{className:"p-3 bg-gray-50 rounded",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Component Errors"}),e.jsx("pre",{className:"text-gray-800 overflow-auto max-h-32",children:JSON.stringify(v,null,2)})]})]})]})}};var _,T,K;F.parameters={...F.parameters,docs:{...(_=F.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {},
  render: args => <Form {...args}>
      <Input name="firstName" label="First Name" placeholder="Enter your first name" id="firstName" />
      <Input name="lastName" label="Last Name" placeholder="Enter your last name" id="lastName" />
      <Input name="email" type="email" label="Email" placeholder="Enter your email" id="email" />
      <Button type="submit">Submit</Button>
    </Form>
}`,...(K=(T=F.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var W,G,Y;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(G=j.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var z,H,Q;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(H=C.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var X,Z,$;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Me=["Default","WithFormData","AllComponents","WithValidation"];export{C as AllComponents,F as Default,j as WithFormData,D as WithValidation,Me as __namedExportsOrder,Ve as default};
