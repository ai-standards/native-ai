import{j as r}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as Q}from"./index-DHZDe_v1.js";import{S as l}from"./Slider-BK9MuES0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const se={title:"Form/Slider",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},disabled:{control:{type:"boolean"}},showValue:{control:{type:"boolean"}}}},t={args:{}},o={args:{label:"Volume",id:"volume"}},i={args:{label:"Brightness",showValue:!0,id:"brightness"}},u={args:{label:"Temperature",min:-10,max:40,defaultValue:20,showValue:!0,formatValue:e=>`${e}°C`,id:"temperature"}},m={args:{label:"Rating",min:0,max:10,step:.5,defaultValue:7.5,showValue:!0,id:"rating"}},d={args:{label:"Disabled slider",disabled:!0,defaultValue:30,showValue:!0,id:"disabled"}},c={args:{size:"sm",label:"Small slider",showValue:!0,id:"small"}},p={args:{size:"lg",label:"Large slider",showValue:!0,id:"large"}},g={args:{label:"Progress",min:0,max:100,defaultValue:65,showValue:!0,formatValue:e=>`${e}%`,id:"percentage"}},b={args:{label:"Interactive slider",showValue:!0,id:"interactive"},render:e=>{const[s,a]=Q.useState(50);return r.jsxDEV("div",{className:"w-80 space-y-4",children:[r.jsxDEV(l,{...e,value:s,onChange:a},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:132,columnNumber:9},void 0),r.jsxDEV("div",{className:"text-sm text-gray-600",children:[r.jsxDEV("p",{children:["Current value: ",s]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:138,columnNumber:11},void 0),r.jsxDEV("p",{children:["Double the value: ",s*2]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:139,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:137,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:131,columnNumber:7},void 0)}},v={render:()=>{const[e,s]=Q.useState({r:255,g:128,b:0});return r.jsxDEV("div",{className:"w-80 space-y-6",children:[r.jsxDEV("div",{className:"space-y-4",children:[r.jsxDEV(l,{label:"Red",min:0,max:255,value:e.r,onChange:a=>s(n=>({...n,r:a})),showValue:!0,id:"red"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:153,columnNumber:11},void 0),r.jsxDEV(l,{label:"Green",min:0,max:255,value:e.g,onChange:a=>s(n=>({...n,g:a})),showValue:!0,id:"green"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:162,columnNumber:11},void 0),r.jsxDEV(l,{label:"Blue",min:0,max:255,value:e.b,onChange:a=>s(n=>({...n,b:a})),showValue:!0,id:"blue"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:171,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:152,columnNumber:9},void 0),r.jsxDEV("div",{className:"p-4 rounded border",children:[r.jsxDEV("div",{className:"w-full h-16 rounded mb-2",style:{backgroundColor:`rgb(${e.r}, ${e.g}, ${e.b})`}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:182,columnNumber:11},void 0),r.jsxDEV("p",{className:"text-sm text-gray-600",children:["RGB: (",e.r,", ",e.g,", ",e.b,")"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:186,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:181,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/slider/Slider.stories.tsx",lineNumber:151,columnNumber:7},void 0)}};var f,V,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(h=(V=t.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var N,x,S;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    id: 'volume'
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var D,y,w;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Brightness',
    showValue: true,
    id: 'brightness'
  }
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var j,k,R;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Temperature',
    min: -10,
    max: 40,
    defaultValue: 20,
    showValue: true,
    formatValue: val => \`\${val}°C\`,
    id: 'temperature'
  }
}`,...(R=(k=u.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var C,E,U;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Rating',
    min: 0,
    max: 10,
    step: 0.5,
    defaultValue: 7.5,
    showValue: true,
    id: 'rating'
  }
}`,...(U=(E=m.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var $,B,L;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Disabled slider',
    disabled: true,
    defaultValue: 30,
    showValue: true,
    id: 'disabled'
  }
}`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var W,z,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small slider',
    showValue: true,
    id: 'small'
  }
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var I,P,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large slider',
    showValue: true,
    id: 'large'
  }
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var M,_,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Progress',
    min: 0,
    max: 100,
    defaultValue: 65,
    showValue: true,
    formatValue: val => \`\${val}%\`,
    id: 'percentage'
  }
}`,...(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,q,A;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(q=b.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ae=["Default","WithLabel","WithValue","CustomRange","WithSteps","Disabled","Small","Large","Percentage","Interactive","MultipleSliders"];export{u as CustomRange,t as Default,d as Disabled,b as Interactive,p as Large,v as MultipleSliders,g as Percentage,c as Small,o as WithLabel,m as WithSteps,i as WithValue,ae as __namedExportsOrder,se as default};
