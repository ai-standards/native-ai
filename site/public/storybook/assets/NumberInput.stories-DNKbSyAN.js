import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as o}from"./index-BwDkhjyp.js";import{N as I}from"./NumberInput-nTFZ0eRg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";import"./ErrorMessage-BhI4OYJy.js";import"./HelperText-CBAylTSp.js";const Ie={title:"Form/NumberInput",component:I,parameters:{layout:"centered"},decorators:[a=>e.jsx("div",{className:"w-80 p-8",children:e.jsx(a,{})})],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},showControls:{control:{type:"boolean"}},allowDecimal:{control:{type:"boolean"}},allowNegative:{control:{type:"boolean"}},formatThousands:{control:{type:"boolean"}}}},i={args:{}},c={args:{label:"Quantity",id:"quantity"}},d={args:{label:"Age",min:0,max:120,defaultValue:25,helperText:"Age must be between 0 and 120",id:"age"}},m={args:{label:"Price",step:.01,precision:2,defaultValue:19.99,helperText:"Price in dollars",id:"price"}},p={args:{label:"Items Count",allowDecimal:!1,min:0,defaultValue:5,helperText:"Whole numbers only",id:"count"}},b={args:{label:"Distance",allowNegative:!1,min:0,step:.1,defaultValue:10.5,helperText:"Distance in kilometers (positive values only)",id:"distance"}},g={args:{label:"Salary",formatThousands:!0,min:0,step:1e3,defaultValue:75e3,helperText:"Annual salary with thousands separator",id:"salary"}},x={args:{label:"Disabled Input",disabled:!0,defaultValue:100,id:"disabled"}},h={args:{label:"Read Only Input",readOnly:!0,defaultValue:42,helperText:"This value cannot be edited",id:"readonly"}},v={args:{label:"Invalid Number",error:!0,errorMessage:"Please enter a valid number",id:"error"}},f={args:{size:"sm",label:"Small Number Input",defaultValue:10,id:"small"}},y={args:{size:"lg",label:"Large Number Input",defaultValue:100,id:"large"}},N={args:{label:"No Control Buttons",showControls:!1,defaultValue:50,helperText:"Use arrow keys or type to change value",id:"no-controls"}},S={args:{label:"Interactive Number Input",min:0,max:100,step:5,defaultValue:50,id:"interactive"},render:a=>{const[u,r]=o.useState(50),[t,s]=o.useState(!0),w=n=>{r(n||0),s(n!==void 0&&n>=0&&n<=100)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(I,{...a,value:u,onChange:w,error:!t,errorMessage:t?void 0:"Value must be between 0 and 100"}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Current Value:"}),e.jsx("p",{className:"text-lg font-mono",children:u}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Status: ",t?" Valid":" Invalid"]})]})]})}},V={render:()=>{const[a,u]=o.useState(10),[r,t]=o.useState(5),[s,w]=o.useState("+"),n=()=>{switch(s){case"+":return a+r;case"-":return a-r;case"*":return a*r;case"/":return r!==0?a/r:0;default:return 0}};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Simple Calculator"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 items-end",children:[e.jsx(I,{label:"First Number",value:a,onChange:l=>u(l||0),allowDecimal:!0,id:"num1"}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Operation"}),e.jsxs("select",{value:s,onChange:l=>w(l.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"+",children:"Add (+)"}),e.jsx("option",{value:"-",children:"Subtract (-)"}),e.jsx("option",{value:"*",children:"Multiply (×)"}),e.jsx("option",{value:"/",children:"Divide (÷)"})]})]}),e.jsx(I,{label:"Second Number",value:r,onChange:l=>t(l||0),allowDecimal:!0,id:"num2"})]}),e.jsxs("div",{className:"p-6 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("p",{className:"text-sm font-medium text-blue-700 mb-2",children:"Result:"}),e.jsx("p",{className:"text-3xl font-bold text-blue-900",children:n().toLocaleString()}),e.jsxs("p",{className:"text-sm text-blue-600 mt-2",children:[a," ",s," ",r," = ",n()]})]})]})}};var j,C,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {}
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var D,O,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Quantity',
    id: 'quantity'
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,M,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    min: 0,
    max: 120,
    defaultValue: 25,
    helperText: 'Age must be between 0 and 120',
    id: 'age'
  }
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var L,P,k;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    step: 0.01,
    precision: 2,
    defaultValue: 19.99,
    helperText: 'Price in dollars',
    id: 'price'
  }
}`,...(k=(P=m.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var z,E,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Items Count',
    allowDecimal: false,
    min: 0,
    defaultValue: 5,
    helperText: 'Whole numbers only',
    id: 'count'
  }
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var q,B,Q;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Distance',
    allowNegative: false,
    min: 0,
    step: 0.1,
    defaultValue: 10.5,
    helperText: 'Distance in kilometers (positive values only)',
    id: 'distance'
  }
}`,...(Q=(B=b.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var U,_,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Salary',
    formatThousands: true,
    min: 0,
    step: 1000,
    defaultValue: 75000,
    helperText: 'Annual salary with thousands separator',
    id: 'salary'
  }
}`,...(G=(_=g.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    disabled: true,
    defaultValue: 100,
    id: 'disabled'
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Input',
    readOnly: true,
    defaultValue: 42,
    helperText: 'This value cannot be edited',
    id: 'readonly'
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Invalid Number',
    error: true,
    errorMessage: 'Please enter a valid number',
    id: 'error'
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,ne,te;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Number Input',
    defaultValue: 10,
    id: 'small'
  }
}`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,le,oe;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Number Input',
    defaultValue: 100,
    id: 'large'
  }
}`,...(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ue,ie,ce;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'No Control Buttons',
    showControls: false,
    defaultValue: 50,
    helperText: 'Use arrow keys or type to change value',
    id: 'no-controls'
  }
}`,...(ce=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,me,pe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,ge,xe;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};const we=["Default","WithLabel","WithMinMax","WithStep","IntegerOnly","PositiveOnly","WithThousandsSeparator","Disabled","ReadOnly","WithError","Small","Large","WithoutControls","Interactive","Calculator"];export{V as Calculator,i as Default,x as Disabled,p as IntegerOnly,S as Interactive,y as Large,b as PositiveOnly,h as ReadOnly,f as Small,v as WithError,c as WithLabel,d as WithMinMax,m as WithStep,g as WithThousandsSeparator,N as WithoutControls,we as __namedExportsOrder,Ie as default};
