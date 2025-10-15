import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as f}from"./index-DHZDe_v1.js";import{D as g}from"./DatePicker-CSxfcspL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const te={title:"Form/DatePicker",component:g,parameters:{layout:"centered"},decorators:[a=>e.jsxDEV("div",{className:"min-h-96 p-8",children:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:14,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:13,columnNumber:7},void 0)],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}}}},s={args:{}},n={args:{label:"Birth Date",id:"birthdate"}},i={args:{label:"Event Date",defaultValue:new Date(2024,5,15),id:"eventdate"}},o={args:{placeholder:"Pick your date",label:"Custom Placeholder",id:"custom"}},c={args:{label:"Disabled Date",disabled:!0,defaultValue:new Date(2024,0,1),id:"disabled"}},l={args:{label:"Date with Error",error:!0,errorMessage:"Please select a valid date",id:"error"}},d={args:{size:"sm",label:"Small DatePicker",id:"small"}},m={args:{size:"lg",label:"Large DatePicker",id:"large"}},u={args:{label:"Date Range",minDate:new Date(2024,0,1),maxDate:new Date(2024,11,31),id:"range"}},p={args:{label:"Interactive DatePicker",id:"interactive"},render:a=>{const[r,t]=f.useState(null);return e.jsxDEV("div",{className:"w-80 space-y-4",children:[e.jsxDEV(g,{...a,value:r||void 0,onChange:t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:116,columnNumber:9},void 0),e.jsxDEV("div",{className:"text-sm text-gray-600",children:r?e.jsxDEV("p",{children:["Selected: ",r.toLocaleDateString()]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:123,columnNumber:13},void 0):e.jsxDEV("p",{children:"No date selected"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:125,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:121,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:115,columnNumber:7},void 0)}},D={render:()=>{const[a,r]=f.useState(null),[t,X]=f.useState(null);return e.jsxDEV("div",{className:"w-80 space-y-6",children:[e.jsxDEV(g,{label:"Start Date",value:a||void 0,onChange:r,maxDate:t||void 0,id:"start"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:140,columnNumber:9},void 0),e.jsxDEV(g,{label:"End Date",value:t||void 0,onChange:X,minDate:a||void 0,id:"end"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:147,columnNumber:9},void 0),e.jsxDEV("div",{className:"p-4 bg-gray-50 rounded text-sm",children:[e.jsxDEV("p",{className:"font-medium mb-2",children:"Selected Range:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:155,columnNumber:11},void 0),e.jsxDEV("p",{children:["Start: ",(a==null?void 0:a.toLocaleDateString())||"Not selected"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:156,columnNumber:11},void 0),e.jsxDEV("p",{children:["End: ",(t==null?void 0:t.toLocaleDateString())||"Not selected"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:157,columnNumber:11},void 0),a&&t&&e.jsxDEV("p",{className:"mt-2 text-blue-600",children:["Duration: ",Math.ceil((t.getTime()-a.getTime())/(1e3*60*60*24))," days"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:159,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:154,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/datepicker/DatePicker.stories.tsx",lineNumber:139,columnNumber:7},void 0)}};var k,b,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var N,x,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Birth Date',
    id: 'birthdate'
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var h,P,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    defaultValue: new Date(2024, 5, 15),
    id: 'eventdate'
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var y,E,V;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Pick your date',
    label: 'Custom Placeholder',
    id: 'custom'
  }
}`,...(V=(E=o.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var U,w,L;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Date',
    disabled: true,
    defaultValue: new Date(2024, 0, 1),
    id: 'disabled'
  }
}`,...(L=(w=c.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var C,M,R;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Date with Error',
    error: true,
    errorMessage: 'Please select a valid date',
    id: 'error'
  }
}`,...(R=(M=l.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var W,z,T;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small DatePicker',
    id: 'small'
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var I,B,_;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large DatePicker',
    id: 'large'
  }
}`,...(_=(B=m.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var F,O,q;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Date Range',
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
    id: 'range'
  }
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var A,G,H;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Interactive DatePicker',
    id: 'interactive'
  },
  render: args => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    return <div className="w-80 space-y-4">
        <DatePicker {...args} value={selectedDate || undefined} onChange={setSelectedDate} />
        <div className="text-sm text-gray-600">
          {selectedDate ? <p>Selected: {selectedDate.toLocaleDateString()}</p> : <p>No date selected</p>}
        </div>
      </div>;
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);
    return <div className="w-80 space-y-6">
        <DatePicker label="Start Date" value={startDate || undefined} onChange={setStartDate} maxDate={endDate || undefined} id="start" />
        <DatePicker label="End Date" value={endDate || undefined} onChange={setEndDate} minDate={startDate || undefined} id="end" />
        <div className="p-4 bg-gray-50 rounded text-sm">
          <p className="font-medium mb-2">Selected Range:</p>
          <p>Start: {startDate?.toLocaleDateString() || 'Not selected'}</p>
          <p>End: {endDate?.toLocaleDateString() || 'Not selected'}</p>
          {startDate && endDate && <p className="mt-2 text-blue-600">
              Duration: {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days
            </p>}
        </div>
      </div>;
  }
}`,...(Q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const re=["Default","WithLabel","WithDefaultValue","CustomPlaceholder","Disabled","WithError","Small","Large","WithMinMaxDate","Interactive","MultipleDatePickers"];export{o as CustomPlaceholder,s as Default,c as Disabled,p as Interactive,m as Large,D as MultipleDatePickers,d as Small,i as WithDefaultValue,l as WithError,n as WithLabel,u as WithMinMaxDate,re as __namedExportsOrder,te as default};
