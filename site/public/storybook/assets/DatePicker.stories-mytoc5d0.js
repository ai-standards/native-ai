import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as b}from"./index-BwDkhjyp.js";import{D as g}from"./DatePicker-DKiWnz29.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const te={title:"Form/DatePicker",component:g,parameters:{layout:"centered"},decorators:[a=>e.jsx("div",{className:"min-h-96 p-8",children:e.jsx(a,{})})],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}}}},s={args:{}},n={args:{label:"Birth Date",id:"birthdate"}},l={args:{label:"Event Date",defaultValue:new Date(2024,5,15),id:"eventdate"}},o={args:{placeholder:"Pick your date",label:"Custom Placeholder",id:"custom"}},d={args:{label:"Disabled Date",disabled:!0,defaultValue:new Date(2024,0,1),id:"disabled"}},c={args:{label:"Date with Error",error:!0,errorMessage:"Please select a valid date",id:"error"}},i={args:{size:"sm",label:"Small DatePicker",id:"small"}},m={args:{size:"lg",label:"Large DatePicker",id:"large"}},u={args:{label:"Date Range",minDate:new Date(2024,0,1),maxDate:new Date(2024,11,31),id:"range"}},D={args:{label:"Interactive DatePicker",id:"interactive"},render:a=>{const[r,t]=b.useState(null);return e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsx(g,{...a,value:r||void 0,onChange:t}),e.jsx("div",{className:"text-sm text-gray-600",children:r?e.jsxs("p",{children:["Selected: ",r.toLocaleDateString()]}):e.jsx("p",{children:"No date selected"})})]})}},p={render:()=>{const[a,r]=b.useState(null),[t,X]=b.useState(null);return e.jsxs("div",{className:"w-80 space-y-6",children:[e.jsx(g,{label:"Start Date",value:a||void 0,onChange:r,maxDate:t||void 0,id:"start"}),e.jsx(g,{label:"End Date",value:t||void 0,onChange:X,minDate:a||void 0,id:"end"}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded text-sm",children:[e.jsx("p",{className:"font-medium mb-2",children:"Selected Range:"}),e.jsxs("p",{children:["Start: ",(a==null?void 0:a.toLocaleDateString())||"Not selected"]}),e.jsxs("p",{children:["End: ",(t==null?void 0:t.toLocaleDateString())||"Not selected"]}),a&&t&&e.jsxs("p",{className:"mt-2 text-blue-600",children:["Duration: ",Math.ceil((t.getTime()-a.getTime())/(1e3*60*60*24))," days"]})]})]})}};var S,h,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {}
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,P,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Birth Date',
    id: 'birthdate'
  }
}`,...(f=(P=n.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var N,j,y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    defaultValue: new Date(2024, 5, 15),
    id: 'eventdate'
  }
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var k,E,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Pick your date',
    label: 'Custom Placeholder',
    id: 'custom'
  }
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var L,C,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Date',
    disabled: true,
    defaultValue: new Date(2024, 0, 1),
    id: 'disabled'
  }
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var R,W,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Date with Error',
    error: true,
    errorMessage: 'Please select a valid date',
    id: 'error'
  }
}`,...(V=(W=c.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var z,T,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small DatePicker',
    id: 'small'
  }
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var B,_,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large DatePicker',
    id: 'large'
  }
}`,...(F=(_=m.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,q,A;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Date Range',
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
    id: 'range'
  }
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,H,J;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=D.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const re=["Default","WithLabel","WithDefaultValue","CustomPlaceholder","Disabled","WithError","Small","Large","WithMinMaxDate","Interactive","MultipleDatePickers"];export{o as CustomPlaceholder,s as Default,d as Disabled,D as Interactive,m as Large,p as MultipleDatePickers,i as Small,l as WithDefaultValue,c as WithError,n as WithLabel,u as WithMinMaxDate,re as __namedExportsOrder,te as default};
