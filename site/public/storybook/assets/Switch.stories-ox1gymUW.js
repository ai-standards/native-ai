import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as J}from"./index-BwDkhjyp.js";import{S as a}from"./Switch-C3flAvlP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const Y={title:"Form/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},labelPosition:{control:{type:"radio"},options:["left","right"]},disabled:{control:{type:"boolean"}},checked:{control:{type:"boolean"}}}},s={args:{}},r={args:{defaultChecked:!0}},t={args:{label:"Enable notifications",id:"notifications"}},i={args:{label:"Dark mode",labelPosition:"left",id:"darkmode"}},c={args:{disabled:!0,label:"Disabled switch",id:"disabled"}},o={args:{disabled:!0,defaultChecked:!0,label:"Disabled checked",id:"disabled-checked"}},n={args:{size:"sm",label:"Small switch",id:"small"}},l={args:{size:"lg",label:"Large switch",id:"large"}},d={args:{label:"Toggle me",id:"interactive"},render:G=>{const[p,H]=J.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{...G,checked:p,onChange:H}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Switch is ",p?"ON":"OFF"]})]})}},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Email notifications",id:"email"}),e.jsx(a,{label:"Push notifications",id:"push",defaultChecked:!0}),e.jsx(a,{label:"SMS notifications",id:"sms"}),e.jsx(a,{label:"Marketing emails",id:"marketing",disabled:!0})]})};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,k,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var f,x,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    id: 'notifications'
  }
}`,...(w=(x=t.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var C,y,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    labelPosition: 'left',
    id: 'darkmode'
  }
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var j,v,L;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled switch',
    id: 'disabled'
  }
}`,...(L=(v=c.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var N,E,M;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled checked',
    id: 'disabled-checked'
  }
}`,...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var z,F,O;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small switch',
    id: 'small'
  }
}`,...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,R,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large switch',
    id: 'large'
  }
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var I,W,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,A,B;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch label="Email notifications" id="email" />
      <Switch label="Push notifications" id="push" defaultChecked />
      <Switch label="SMS notifications" id="sms" />
      <Switch label="Marketing emails" id="marketing" disabled />
    </div>
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Z=["Default","Checked","WithLabel","LabelLeft","Disabled","DisabledChecked","Small","Large","Interactive","Multiple"];export{r as Checked,s as Default,c as Disabled,o as DisabledChecked,d as Interactive,i as LabelLeft,l as Large,m as Multiple,n as Small,t as WithLabel,Z as __namedExportsOrder,Y as default};
