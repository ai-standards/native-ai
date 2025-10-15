import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as G}from"./index-DHZDe_v1.js";import{S as s}from"./Switch-17GmKhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const Y={title:"Form/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},labelPosition:{control:{type:"radio"},options:["left","right"]},disabled:{control:{type:"boolean"}},checked:{control:{type:"boolean"}}}},a={args:{}},r={args:{defaultChecked:!0}},t={args:{label:"Enable notifications",id:"notifications"}},i={args:{label:"Dark mode",labelPosition:"left",id:"darkmode"}},o={args:{disabled:!0,label:"Disabled switch",id:"disabled"}},c={args:{disabled:!0,defaultChecked:!0,label:"Disabled checked",id:"disabled-checked"}},n={args:{size:"sm",label:"Small switch",id:"small"}},l={args:{size:"lg",label:"Large switch",id:"large"}},d={args:{label:"Toggle me",id:"interactive"},render:A=>{const[u,B]=G.useState(!1);return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{...A,checked:u,onChange:B},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/switch/Switch.stories.tsx",lineNumber:101,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:["Switch is ",u?"ON":"OFF"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/switch/Switch.stories.tsx",lineNumber:106,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/switch/Switch.stories.tsx",lineNumber:100,columnNumber:7},void 0)}},m={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"Email notifications",id:"email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/switch/Switch.stories.tsx",lineNumber:117,columnNumber:7},void 0),e.jsxDEV(s,{label:"Push notifications",id:"push",defaultChecked:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/switch/Switch.stories.tsx",lineNumber:118,columnNumber:7},void 0),e.jsxDEV(s,{label:"SMS notifications",id:"sms"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/switch/Switch.stories.tsx",lineNumber:119,columnNumber:7},void 0),e.jsxDEV(s,{label:"Marketing emails",id:"marketing",disabled:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/switch/Switch.stories.tsx",lineNumber:120,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/switch/Switch.stories.tsx",lineNumber:116,columnNumber:5},void 0)};var p,b,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,g,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var S,N,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    id: 'notifications'
  }
}`,...(w=(N=t.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var D,v,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    labelPosition: 'left',
    id: 'darkmode'
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,j,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled switch',
    id: 'disabled'
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var E,L,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled checked',
    id: 'disabled-checked'
  }
}`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var V,M,z;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small switch',
    id: 'small'
  }
}`,...(z=(M=n.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var F,O,P;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large switch',
    id: 'large'
  }
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,T,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Toggle me',
    id: 'interactive'
  },
  render: args => {
    const [checked, setChecked] = React.useState(false);
    return <div className="space-y-4">
        <Switch {...args} checked={checked} onChange={setChecked} />
        <p className="text-sm text-gray-600">
          Switch is {checked ? 'ON' : 'OFF'}
        </p>
      </div>;
  }
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var W,_,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch label="Email notifications" id="email" />
      <Switch label="Push notifications" id="push" defaultChecked />
      <Switch label="SMS notifications" id="sms" />
      <Switch label="Marketing emails" id="marketing" disabled />
    </div>
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const Z=["Default","Checked","WithLabel","LabelLeft","Disabled","DisabledChecked","Small","Large","Interactive","Multiple"];export{r as Checked,a as Default,o as Disabled,c as DisabledChecked,d as Interactive,i as LabelLeft,l as Large,m as Multiple,n as Small,t as WithLabel,Z as __namedExportsOrder,Y as default};
