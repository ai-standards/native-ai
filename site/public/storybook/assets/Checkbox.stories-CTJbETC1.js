import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{C as r}from"./Checkbox-CxLVq6BC.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const Se={title:"Form/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible checkbox component with labels, validation, and multiple sizes. Built with accessibility in mind."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed next to the checkbox"},error:{control:"text",description:"Error message to display below the checkbox"},helperText:{control:"text",description:"Helper text to display below the checkbox"},size:{control:"select",options:["sm","md","lg"],description:"Size of the checkbox"},variant:{control:"select",options:["default","filled"],description:"The visual style variant of the checkbox"},checked:{control:"boolean",description:"Whether the checkbox is checked"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"},indeterminate:{control:"boolean",description:"Whether the checkbox is in an indeterminate state"}}},a={args:{label:"Accept terms and conditions"}},s={args:{}},t={args:{label:"Send me notifications",helperText:"You can change this preference in your settings at any time."}},o={args:{label:"I agree to the terms",error:"You must accept the terms to continue."}},i={args:{label:"Small checkbox",size:"sm"}},c={args:{label:"Medium checkbox",size:"md"}},l={args:{label:"Large checkbox",size:"lg"}},n={args:{label:"Filled variant",variant:"filled"}},d={args:{label:"Already checked",defaultChecked:!0}},m={args:{label:"Disabled checkbox",disabled:!0}},p={args:{label:"Disabled and checked",disabled:!0,defaultChecked:!0}},u={args:{label:"Indeterminate checkbox",indeterminate:!0}},b={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"Option 1",name:"options",value:"1"}),e.jsx(r,{label:"Option 2",name:"options",value:"2",defaultChecked:!0}),e.jsx(r,{label:"Option 3",name:"options",value:"3"}),e.jsx(r,{label:"Disabled option",name:"options",value:"4",disabled:!0})]})},h={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"I have read and agree to the Privacy Policy",error:"You must accept the privacy policy"}),e.jsx(r,{label:"Subscribe to newsletter",helperText:"Optional - you can unsubscribe at any time",defaultChecked:!0}),e.jsx(r,{label:"Enable two-factor authentication",helperText:"Recommended for better security"})]})},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"Small size",size:"sm"}),e.jsx(r,{label:"Medium size",size:"md"}),e.jsx(r,{label:"Large size",size:"lg"})]})},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"Default variant",variant:"default"}),e.jsx(r,{label:"Filled variant",variant:"filled"})]})},k={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"Small with error",size:"sm",error:"This field is required"}),e.jsx(r,{label:"Medium with error",size:"md",error:"This field is required"}),e.jsx(r,{label:"Large with error",size:"lg",error:"This field is required"})]})};var v,f,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,z,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var j,T,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Send me notifications',
    helperText: 'You can change this preference in your settings at any time.'
  }
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,L,O;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    error: 'You must accept the terms to continue.'
  }
}`,...(O=(L=o.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var W,M,N;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Small checkbox',
    size: 'sm'
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var E,F,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Medium checkbox',
    size: 'md'
  }
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var q,V,Y;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Large checkbox',
    size: 'lg'
  }
}`,...(Y=(V=l.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var A,P,H;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Filled variant',
    variant: 'filled'
  }
}`,...(H=(P=n.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var R,_,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Already checked',
    defaultChecked: true
  }
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox',
    disabled: true
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Option 1" name="options" value="1" />
      <Checkbox label="Option 2" name="options" value="2" defaultChecked />
      <Checkbox label="Option 3" name="options" value="3" />
      <Checkbox label="Disabled option" name="options" value="4" disabled />
    </div>
}`,...(se=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,oe,ie;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="I have read and agree to the Privacy Policy" error="You must accept the privacy policy" />
      <Checkbox label="Subscribe to newsletter" helperText="Optional - you can unsubscribe at any time" defaultChecked />
      <Checkbox label="Enable two-factor authentication" helperText="Recommended for better security" />
    </div>
}`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,ne;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Small size" size="sm" />
      <Checkbox label="Medium size" size="md" />
      <Checkbox label="Large size" size="lg" />
    </div>
}`,...(ne=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var de,me,pe;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Default variant" variant="default" />
      <Checkbox label="Filled variant" variant="filled" />
    </div>
}`,...(pe=(me=g.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,be,he;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Small with error" size="sm" error="This field is required" />
      <Checkbox label="Medium with error" size="md" error="This field is required" />
      <Checkbox label="Large with error" size="lg" error="This field is required" />
    </div>
}`,...(he=(be=k.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const ye=["Default","WithoutLabel","WithHelperText","WithError","SmallSize","MediumSize","LargeSize","FilledVariant","Checked","Disabled","DisabledChecked","Indeterminate","MultipleOptions","FormValidation","SizeComparison","VariantComparison","ErrorWithSizes"];export{d as Checked,a as Default,m as Disabled,p as DisabledChecked,k as ErrorWithSizes,n as FilledVariant,h as FormValidation,u as Indeterminate,l as LargeSize,c as MediumSize,b as MultipleOptions,x as SizeComparison,i as SmallSize,g as VariantComparison,o as WithError,t as WithHelperText,s as WithoutLabel,ye as __namedExportsOrder,Se as default};
