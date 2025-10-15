import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{B as r}from"./Button-LTpUiv5Y.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";const de={title:"Form/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible button component with multiple variants, sizes, and states. Built with Tailwind CSS and designed for accessibility."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","destructive"],description:"The visual style variant of the button"},size:{control:"select",options:["sm","md","lg"],description:"The size of the button"},loading:{control:"boolean",description:"Shows loading spinner and disables interaction"},disabled:{control:"boolean",description:"Disables the button"},children:{control:"text",description:"Button content"}},args:{children:"Button"}},n={args:{variant:"primary",children:"Primary Button"}},a={args:{variant:"secondary",children:"Secondary Button"}},t={args:{variant:"outline",children:"Outline Button"}},s={args:{variant:"ghost",children:"Ghost Button"}},o={args:{variant:"destructive",children:"Delete"}},i={args:{size:"sm",children:"Small Button"}},c={args:{size:"md",children:"Medium Button"}},d={args:{size:"lg",children:"Large Button"}},l={args:{loading:!0,children:"Loading..."}},u={args:{disabled:!0,children:"Disabled Button"}},m={args:{variant:"secondary",loading:!0,children:"Saving..."}},p={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"destructive",children:"Destructive"})]}),parameters:{docs:{description:{story:"All button variants displayed together for comparison."}}}},g={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]}),parameters:{docs:{description:{story:"All button sizes displayed together for comparison."}}}},h={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{onClick:()=>alert("Primary clicked!"),children:"Primary Action"}),e.jsx(r,{variant:"secondary",onClick:()=>alert("Secondary clicked!"),children:"Secondary Action"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{variant:"destructive",onClick:()=>alert("Delete clicked!"),children:"Delete Item"}),e.jsx(r,{variant:"ghost",onClick:()=>alert("Cancel clicked!"),children:"Cancel"})]})]}),parameters:{docs:{description:{story:"Interactive buttons with click handlers. Try clicking them!"}}}};var v,y,B;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var S,x,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,k,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var z,D,A;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var C,L,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Delete'
  }
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,w,O;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...(O=(w=i.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var G,I,M;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium Button'
  }
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,E,V;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var _,F,R;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading...'
  }
}`,...(R=(F=l.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var q,H,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    loading: true,
    children: 'Saving...'
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.'
      }
    }
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.'
      }
    }
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,ae;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex gap-4">
        <Button onClick={() => alert('Primary clicked!')}>
          Primary Action
        </Button>
        <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
          Secondary Action
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="destructive" onClick={() => alert('Delete clicked!')}>
          Delete Item
        </Button>
        <Button variant="ghost" onClick={() => alert('Cancel clicked!')}>
          Cancel
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive buttons with click handlers. Try clicking them!'
      }
    }
  }
}`,...(ae=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const le=["Primary","Secondary","Outline","Ghost","Destructive","Small","Medium","Large","Loading","Disabled","LoadingSecondary","AllVariants","AllSizes","Interactive"];export{g as AllSizes,p as AllVariants,o as Destructive,u as Disabled,s as Ghost,h as Interactive,d as Large,l as Loading,m as LoadingSecondary,c as Medium,t as Outline,n as Primary,a as Secondary,i as Small,le as __namedExportsOrder,de as default};
