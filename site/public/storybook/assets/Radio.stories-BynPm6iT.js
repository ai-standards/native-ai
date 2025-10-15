import{R as Y}from"./Radio-CJQd-dsS.js";import"./jsx-runtime-Yb_4y5hn.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const q={title:"Form/Radio",component:Y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},size:{control:{type:"radio"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}}}},a=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],e={args:{options:a,name:"default-radio"}},o={args:{options:a,name:"default-value-radio",defaultValue:"option2"}},n={args:{options:a,name:"horizontal-radio",orientation:"horizontal"}},l={args:{options:a,name:"disabled-radio",disabled:!0,defaultValue:"option1"}},r={args:{options:[{label:"Available Option",value:"available"},{label:"Disabled Option",value:"disabled",disabled:!0},{label:"Another Available",value:"available2"}],name:"mixed-disabled-radio"}},s={args:{options:a,name:"small-radio",size:"sm"}},t={args:{options:a,name:"large-radio",size:"lg"}},i={args:{options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"},{label:"Yellow",value:"yellow"},{label:"Purple",value:"purple"},{label:"Orange",value:"orange"}],name:"many-options-radio",orientation:"horizontal"}},p={args:{options:[{label:"This is a very long option label that might wrap to multiple lines",value:"long1"},{label:"Another lengthy option with detailed description",value:"long2"},{label:"Short",value:"short"}],name:"long-labels-radio"}};var d,u,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    name: 'default-radio'
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,b,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    name: 'default-value-radio',
    defaultValue: 'option2'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,h,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    name: 'horizontal-radio',
    orientation: 'horizontal'
  }
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var y,f,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    name: 'disabled-radio',
    disabled: true,
    defaultValue: 'option1'
  }
}`,...(z=(f=l.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var S,D,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Available Option',
      value: 'available'
    }, {
      label: 'Disabled Option',
      value: 'disabled',
      disabled: true
    }, {
      label: 'Another Available',
      value: 'available2'
    }],
    name: 'mixed-disabled-radio'
  }
}`,...(w=(D=r.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var A,L,V;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    name: 'small-radio',
    size: 'sm'
  }
}`,...(V=(L=s.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var R,x,W;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    name: 'large-radio',
    size: 'lg'
  }
}`,...(W=(x=t.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var T,B,G;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Red',
      value: 'red'
    }, {
      label: 'Blue',
      value: 'blue'
    }, {
      label: 'Green',
      value: 'green'
    }, {
      label: 'Yellow',
      value: 'yellow'
    }, {
      label: 'Purple',
      value: 'purple'
    }, {
      label: 'Orange',
      value: 'orange'
    }],
    name: 'many-options-radio',
    orientation: 'horizontal'
  }
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,M,P;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'This is a very long option label that might wrap to multiple lines',
      value: 'long1'
    }, {
      label: 'Another lengthy option with detailed description',
      value: 'long2'
    }, {
      label: 'Short',
      value: 'short'
    }],
    name: 'long-labels-radio'
  }
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const C=["Default","WithDefaultValue","Horizontal","Disabled","WithDisabledOptions","Small","Large","ManyOptions","LongLabels"];export{e as Default,l as Disabled,n as Horizontal,t as Large,p as LongLabels,i as ManyOptions,s as Small,o as WithDefaultValue,r as WithDisabledOptions,C as __namedExportsOrder,q as default};
