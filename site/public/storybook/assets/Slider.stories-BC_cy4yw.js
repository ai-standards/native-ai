import{j as a}from"./jsx-runtime-Yb_4y5hn.js";import{R as U}from"./index-BwDkhjyp.js";import{S as l}from"./Slider-DyudkZ48.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const re={title:"Form/Slider",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},disabled:{control:{type:"boolean"}},showValue:{control:{type:"boolean"}}}},t={args:{}},o={args:{label:"Volume",id:"volume"}},u={args:{label:"Brightness",showValue:!0,id:"brightness"}},d={args:{label:"Temperature",min:-10,max:40,defaultValue:20,showValue:!0,formatValue:e=>`${e}°C`,id:"temperature"}},i={args:{label:"Rating",min:0,max:10,step:.5,defaultValue:7.5,showValue:!0,id:"rating"}},c={args:{label:"Disabled slider",disabled:!0,defaultValue:30,showValue:!0,id:"disabled"}},m={args:{size:"sm",label:"Small slider",showValue:!0,id:"small"}},g={args:{size:"lg",label:"Large slider",showValue:!0,id:"large"}},p={args:{label:"Progress",min:0,max:100,defaultValue:65,showValue:!0,formatValue:e=>`${e}%`,id:"percentage"}},b={args:{label:"Interactive slider",showValue:!0,id:"interactive"},render:e=>{const[r,s]=U.useState(50);return a.jsxs("div",{className:"w-80 space-y-4",children:[a.jsx(l,{...e,value:r,onChange:s}),a.jsxs("div",{className:"text-sm text-gray-600",children:[a.jsxs("p",{children:["Current value: ",r]}),a.jsxs("p",{children:["Double the value: ",r*2]})]})]})}},h={render:()=>{const[e,r]=U.useState({r:255,g:128,b:0});return a.jsxs("div",{className:"w-80 space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(l,{label:"Red",min:0,max:255,value:e.r,onChange:s=>r(n=>({...n,r:s})),showValue:!0,id:"red"}),a.jsx(l,{label:"Green",min:0,max:255,value:e.g,onChange:s=>r(n=>({...n,g:s})),showValue:!0,id:"green"}),a.jsx(l,{label:"Blue",min:0,max:255,value:e.b,onChange:s=>r(n=>({...n,b:s})),showValue:!0,id:"blue"})]}),a.jsxs("div",{className:"p-4 rounded border",children:[a.jsx("div",{className:"w-full h-16 rounded mb-2",style:{backgroundColor:`rgb(${e.r}, ${e.g}, ${e.b})`}}),a.jsxs("p",{className:"text-sm text-gray-600",children:["RGB: (",e.r,", ",e.g,", ",e.b,")"]})]})]})}};var v,V,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(x=(V=t.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var S,w,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    id: 'volume'
  }
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var y,R,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Brightness',
    showValue: true,
    id: 'brightness'
  }
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var j,N,$;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Temperature',
    min: -10,
    max: 40,
    defaultValue: 20,
    showValue: true,
    formatValue: val => \`\${val}°C\`,
    id: 'temperature'
  }
}`,...($=(N=d.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var D,B,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Rating',
    min: 0,
    max: 10,
    step: 0.5,
    defaultValue: 7.5,
    showValue: true,
    id: 'rating'
  }
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var W,z,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Disabled slider',
    disabled: true,
    defaultValue: 30,
    showValue: true,
    id: 'disabled'
  }
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var I,P,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small slider',
    showValue: true,
    id: 'small'
  }
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var k,E,M;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large slider',
    showValue: true,
    id: 'large'
  }
}`,...(M=(E=g.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var _,F,O;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Progress',
    min: 0,
    max: 100,
    defaultValue: 65,
    showValue: true,
    formatValue: val => \`\${val}%\`,
    id: 'percentage'
  }
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var q,A,H;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Interactive slider',
    showValue: true,
    id: 'interactive'
  },
  render: args => {
    const [value, setValue] = React.useState(50);
    return <div className="w-80 space-y-4">
        <Slider {...args} value={value} onChange={setValue} />
        <div className="text-sm text-gray-600">
          <p>Current value: {value}</p>
          <p>Double the value: {value * 2}</p>
        </div>
      </div>;
  }
}`,...(H=(A=b.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [rgb, setRgb] = React.useState({
      r: 255,
      g: 128,
      b: 0
    });
    return <div className="w-80 space-y-6">
        <div className="space-y-4">
          <Slider label="Red" min={0} max={255} value={rgb.r} onChange={r => setRgb(prev => ({
          ...prev,
          r
        }))} showValue id="red" />
          <Slider label="Green" min={0} max={255} value={rgb.g} onChange={g => setRgb(prev => ({
          ...prev,
          g
        }))} showValue id="green" />
          <Slider label="Blue" min={0} max={255} value={rgb.b} onChange={b => setRgb(prev => ({
          ...prev,
          b
        }))} showValue id="blue" />
        </div>
        <div className="p-4 rounded border">
          <div className="w-full h-16 rounded mb-2" style={{
          backgroundColor: \`rgb(\${rgb.r}, \${rgb.g}, \${rgb.b})\`
        }} />
          <p className="text-sm text-gray-600">
            RGB: ({rgb.r}, {rgb.g}, {rgb.b})
          </p>
        </div>
      </div>;
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const se=["Default","WithLabel","WithValue","CustomRange","WithSteps","Disabled","Small","Large","Percentage","Interactive","MultipleSliders"];export{d as CustomRange,t as Default,c as Disabled,b as Interactive,g as Large,h as MultipleSliders,p as Percentage,m as Small,o as WithLabel,i as WithSteps,u as WithValue,se as __namedExportsOrder,re as default};
