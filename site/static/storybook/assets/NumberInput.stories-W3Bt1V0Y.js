import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as l}from"./index-DHZDe_v1.js";import{N as k}from"./NumberInput-1unrRyrH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";import"./ErrorMessage-DYjD2rVY.js";import"./HelperText-DHPb2qyY.js";const ke={title:"Form/NumberInput",component:k,parameters:{layout:"centered"},decorators:[n=>e.jsxDEV("div",{className:"w-80 p-8",children:e.jsxDEV(n,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:14,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:13,columnNumber:7},void 0)],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},showControls:{control:{type:"boolean"}},allowDecimal:{control:{type:"boolean"}},allowNegative:{control:{type:"boolean"}},formatThousands:{control:{type:"boolean"}}}},i={args:{}},m={args:{label:"Quantity",id:"quantity"}},c={args:{label:"Age",min:0,max:120,defaultValue:25,helperText:"Age must be between 0 and 120",id:"age"}},d={args:{label:"Price",step:.01,precision:2,defaultValue:19.99,helperText:"Price in dollars",id:"price"}},p={args:{label:"Items Count",allowDecimal:!1,min:0,defaultValue:5,helperText:"Whole numbers only",id:"count"}},b={args:{label:"Distance",allowNegative:!1,min:0,step:.1,defaultValue:10.5,helperText:"Distance in kilometers (positive values only)",id:"distance"}},f={args:{label:"Salary",formatThousands:!0,min:0,step:1e3,defaultValue:75e3,helperText:"Annual salary with thousands separator",id:"salary"}},N={args:{label:"Disabled Input",disabled:!0,defaultValue:100,id:"disabled"}},g={args:{label:"Read Only Input",readOnly:!0,defaultValue:42,helperText:"This value cannot be edited",id:"readonly"}},v={args:{label:"Invalid Number",error:!0,errorMessage:"Please enter a valid number",id:"error"}},x={args:{size:"sm",label:"Small Number Input",defaultValue:10,id:"small"}},y={args:{size:"lg",label:"Large Number Input",defaultValue:100,id:"large"}},h={args:{label:"No Control Buttons",showControls:!1,defaultValue:50,helperText:"Use arrow keys or type to change value",id:"no-controls"}},D={args:{label:"Interactive Number Input",min:0,max:100,step:5,defaultValue:50,id:"interactive"},render:n=>{const[u,a]=l.useState(50),[s,t]=l.useState(!0),I=r=>{a(r||0),t(r!==void 0&&r>=0&&r<=100)};return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(k,{...n,value:u,onChange:I,error:!s,errorMessage:s?void 0:"Value must be between 0 and 100"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:195,columnNumber:9},void 0),e.jsxDEV("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsxDEV("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Current Value:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:204,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-lg font-mono",children:u},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:205,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600 mt-2",children:["Status: ",s?" Valid":" Invalid"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:206,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:203,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:194,columnNumber:7},void 0)}},V={render:()=>{const[n,u]=l.useState(10),[a,s]=l.useState(5),[t,I]=l.useState("+"),r=()=>{switch(t){case"+":return n+a;case"-":return n-a;case"*":return n*a;case"/":return a!==0?n/a:0;default:return 0}};return e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV("h3",{className:"text-lg font-semibold text-gray-900",children:"Simple Calculator"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:233,columnNumber:9},void 0),e.jsxDEV("div",{className:"grid grid-cols-3 gap-4 items-end",children:[e.jsxDEV(k,{label:"First Number",value:n,onChange:o=>u(o||0),allowDecimal:!0,id:"num1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:236,columnNumber:11},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Operation"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:245,columnNumber:13},void 0),e.jsxDEV("select",{value:t,onChange:o=>I(o.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsxDEV("option",{value:"+",children:"Add (+)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:253,columnNumber:15},void 0),e.jsxDEV("option",{value:"-",children:"Subtract (-)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:254,columnNumber:15},void 0),e.jsxDEV("option",{value:"*",children:"Multiply (×)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:255,columnNumber:15},void 0),e.jsxDEV("option",{value:"/",children:"Divide (÷)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:256,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:248,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:244,columnNumber:11},void 0),e.jsxDEV(k,{label:"Second Number",value:a,onChange:o=>s(o||0),allowDecimal:!0,id:"num2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:260,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:235,columnNumber:9},void 0),e.jsxDEV("div",{className:"p-6 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsxDEV("p",{className:"text-sm font-medium text-blue-700 mb-2",children:"Result:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:270,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-3xl font-bold text-blue-900",children:r().toLocaleString()},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:271,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-sm text-blue-600 mt-2",children:[n," ",t," ",a," = ",r()]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:274,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:269,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/numberinput/NumberInput.stories.tsx",lineNumber:232,columnNumber:7},void 0)}};var j,S,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {}
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var E,C,U;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Quantity',
    id: 'quantity'
  }
}`,...(U=(C=m.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var T,O,R;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    min: 0,
    max: 120,
    defaultValue: 25,
    helperText: 'Age must be between 0 and 120',
    id: 'age'
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,M,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    step: 0.01,
    precision: 2,
    defaultValue: 19.99,
    helperText: 'Price in dollars',
    id: 'price'
  }
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var L,P,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Items Count',
    allowDecimal: false,
    min: 0,
    defaultValue: 5,
    helperText: 'Whole numbers only',
    id: 'count'
  }
}`,...(z=(P=p.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var F,q,B;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Distance',
    allowNegative: false,
    min: 0,
    step: 0.1,
    defaultValue: 10.5,
    helperText: 'Distance in kilometers (positive values only)',
    id: 'distance'
  }
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var Q,_,G;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Salary',
    formatThousands: true,
    min: 0,
    step: 1000,
    defaultValue: 75000,
    helperText: 'Annual salary with thousands separator',
    id: 'salary'
  }
}`,...(G=(_=f.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var H,J,K;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    disabled: true,
    defaultValue: 100,
    id: 'disabled'
  }
}`,...(K=(J=N.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Input',
    readOnly: true,
    defaultValue: 42,
    helperText: 'This value cannot be edited',
    id: 'readonly'
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Invalid Number',
    error: true,
    errorMessage: 'Please enter a valid number',
    id: 'error'
  }
}`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,re,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Number Input',
    defaultValue: 10,
    id: 'small'
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Number Input',
    defaultValue: 100,
    id: 'large'
  }
}`,...(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ue,ie,me;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'No Control Buttons',
    showControls: false,
    defaultValue: 50,
    helperText: 'Use arrow keys or type to change value',
    id: 'no-controls'
  }
}`,...(me=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var ce,de,pe;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Interactive Number Input',
    min: 0,
    max: 100,
    step: 5,
    defaultValue: 50,
    id: 'interactive'
  },
  render: args => {
    const [value, setValue] = React.useState(50);
    const [isValid, setIsValid] = React.useState(true);
    const handleChange = (newValue: number | undefined) => {
      setValue(newValue || 0);
      setIsValid(newValue !== undefined && newValue >= 0 && newValue <= 100);
    };
    return <div className="space-y-4">
        <NumberInput {...args} value={value} onChange={handleChange} error={!isValid} errorMessage={!isValid ? 'Value must be between 0 and 100' : undefined} />
        
        <div className="p-4 bg-gray-50 rounded">
          <p className="text-sm font-medium text-gray-700 mb-2">Current Value:</p>
          <p className="text-lg font-mono">{value}</p>
          <p className="text-sm text-gray-600 mt-2">
            Status: {isValid ? ' Valid' : ' Invalid'}
          </p>
        </div>
      </div>;
  }
}`,...(pe=(de=D.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var be,fe,Ne;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [num1, setNum1] = React.useState<number>(10);
    const [num2, setNum2] = React.useState<number>(5);
    const [operation, setOperation] = React.useState<string>('+');
    const calculate = () => {
      switch (operation) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num2 !== 0 ? num1 / num2 : 0;
        default:
          return 0;
      }
    };
    return <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Simple Calculator</h3>
        
        <div className="grid grid-cols-3 gap-4 items-end">
          <NumberInput label="First Number" value={num1} onChange={val => setNum1(val || 0)} allowDecimal id="num1" />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Operation
            </label>
            <select value={operation} onChange={e => setOperation(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="+">Add (+)</option>
              <option value="-">Subtract (-)</option>
              <option value="*">Multiply (×)</option>
              <option value="/">Divide (÷)</option>
            </select>
          </div>
          
          <NumberInput label="Second Number" value={num2} onChange={val => setNum2(val || 0)} allowDecimal id="num2" />
        </div>
        
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-medium text-blue-700 mb-2">Result:</p>
          <p className="text-3xl font-bold text-blue-900">
            {calculate().toLocaleString()}
          </p>
          <p className="text-sm text-blue-600 mt-2">
            {num1} {operation} {num2} = {calculate()}
          </p>
        </div>
      </div>;
  }
}`,...(Ne=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:Ne.source}}};const Ie=["Default","WithLabel","WithMinMax","WithStep","IntegerOnly","PositiveOnly","WithThousandsSeparator","Disabled","ReadOnly","WithError","Small","Large","WithoutControls","Interactive","Calculator"];export{V as Calculator,i as Default,N as Disabled,p as IntegerOnly,D as Interactive,y as Large,b as PositiveOnly,g as ReadOnly,x as Small,v as WithError,m as WithLabel,c as WithMinMax,d as WithStep,f as WithThousandsSeparator,h as WithoutControls,Ie as __namedExportsOrder,ke as default};
