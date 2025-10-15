import{T as ae}from"./Textarea-CMbFjUcw.js";import"./jsx-dev-runtime-YqEzVWbi.js";import"./index-DHZDe_v1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";import"./ErrorMessage-DYjD2rVY.js";import"./HelperText-lEaK-uHm.js";const de={title:"Form/Textarea",component:ae,parameters:{layout:"centered",docs:{description:{component:"A flexible textarea component with labels, validation, and multiple variants. Built with accessibility in mind and supports different resize behaviors."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the textarea"},placeholder:{control:"text",description:"Placeholder text shown when textarea is empty"},error:{control:"text",description:"Error message to display below the textarea"},helperText:{control:"text",description:"Helper text to display below the textarea"},variant:{control:"select",options:["default","filled"],description:"The visual style variant of the textarea"},resize:{control:"select",options:["none","vertical","horizontal","both"],description:"How the textarea can be resized by the user"},rows:{control:"number",description:"Number of visible text lines"},disabled:{control:"boolean",description:"Whether the textarea is disabled"}}},e={args:{placeholder:"Enter your text here..."}},r={args:{label:"Message",placeholder:"Type your message..."}},a={args:{label:"Description",placeholder:"Describe your project...",helperText:"Provide a detailed description of your project goals and requirements."}},t={args:{label:"Comments",placeholder:"Add your comments...",error:"This field is required.",defaultValue:""}},o={args:{label:"Bio",placeholder:"Tell us about yourself...",variant:"filled"}},s={args:{label:"Quick Note",placeholder:"Add a quick note...",rows:2}},i={args:{label:"Detailed Description",placeholder:"Provide detailed information...",rows:6}},l={args:{label:"Fixed Size",placeholder:"This textarea cannot be resized...",resize:"none",rows:4}},n={args:{label:"Horizontal Resize",placeholder:"This textarea can be resized horizontally...",resize:"horizontal",rows:3}},c={args:{label:"Full Resize",placeholder:"This textarea can be resized in both directions...",resize:"both",rows:4}},d={args:{label:"Disabled Textarea",placeholder:"This textarea is disabled...",disabled:!0,defaultValue:"Some existing content that cannot be edited"}},u={args:{label:"Article Content",defaultValue:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,rows:8}},p={args:{label:"Feedback",variant:"filled",placeholder:"Share your feedback...",error:"Feedback must be at least 10 characters long.",defaultValue:"Too short"}},m={args:{label:"Project Requirements",placeholder:"List all your project requirements...",helperText:"Be as specific as possible. Include technical requirements, timeline, and budget constraints.",rows:5,resize:"vertical"}};var h,b,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your text here...'
  }
}`,...(g=(b=e.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,z,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Type your message...'
  }
}`,...(f=(z=r.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var v,q,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Describe your project...',
    helperText: 'Provide a detailed description of your project goals and requirements.'
  }
}`,...(S=(q=a.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var T,y,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    placeholder: 'Add your comments...',
    error: 'This field is required.',
    defaultValue: ''
  }
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var D,F,E;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    variant: 'filled'
  }
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var R,L,W;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Quick Note',
    placeholder: 'Add a quick note...',
    rows: 2
  }
}`,...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var k,V,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Detailed Description',
    placeholder: 'Provide detailed information...',
    rows: 6
  }
}`,...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var C,H,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Fixed Size',
    placeholder: 'This textarea cannot be resized...',
    resize: 'none',
    rows: 4
  }
}`,...(A=(H=l.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var B,P,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Horizontal Resize',
    placeholder: 'This textarea can be resized horizontally...',
    resize: 'horizontal',
    rows: 3
  }
}`,...(N=(P=n.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var I,M,Q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Full Resize',
    placeholder: 'This textarea can be resized in both directions...',
    resize: 'both',
    rows: 4
  }
}`,...(Q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,_,O;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This textarea is disabled...',
    disabled: true,
    defaultValue: 'Some existing content that cannot be edited'
  }
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Article Content',
    defaultValue: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\`,
    rows: 8
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Feedback',
    variant: 'filled',
    placeholder: 'Share your feedback...',
    error: 'Feedback must be at least 10 characters long.',
    defaultValue: 'Too short'
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Project Requirements',
    placeholder: 'List all your project requirements...',
    helperText: 'Be as specific as possible. Include technical requirements, timeline, and budget constraints.',
    rows: 5,
    resize: 'vertical'
  }
}`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ue=["Default","WithLabel","WithHelperText","WithError","FilledVariant","SmallSize","LargeSize","NoResize","HorizontalResize","BothResize","Disabled","WithLongContent","FilledWithError","ComplexExample"];export{c as BothResize,m as ComplexExample,e as Default,d as Disabled,o as FilledVariant,p as FilledWithError,n as HorizontalResize,i as LargeSize,l as NoResize,s as SmallSize,t as WithError,a as WithHelperText,r as WithLabel,u as WithLongContent,ue as __namedExportsOrder,de as default};
