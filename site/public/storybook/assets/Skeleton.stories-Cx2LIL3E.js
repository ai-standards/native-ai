import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as p}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const t=({width:n,height:a,variant:m="rectangular",animation:P="pulse",lines:h=1,className:v,...u})=>{const g=()=>{switch(P){case"pulse":return"animate-pulse";case"wave":return"animate-pulse";case"none":return"";default:return"animate-pulse"}},w=()=>{switch(m){case"circular":return"rounded-full";case"text":return"rounded";case"rectangular":default:return"rounded"}},i=(()=>{switch(m){case"circular":return{width:"2.5rem",height:"2.5rem"};case"text":return{width:"100%",height:"1rem"};case"rectangular":default:return{width:"100%",height:"1.25rem"}}})();return m==="text"&&h>1?e.jsx("div",{className:p("space-y-2",v),...u,children:Array.from({length:h}).map((O,f)=>e.jsx("div",{className:p("bg-gray-200",w(),g()),style:{width:f===h-1?"75%":n||i.width,height:a||i.height}},f))}):e.jsx("div",{className:p("bg-gray-200",w(),g(),v),style:{width:n||i.width,height:a||i.height},...u})};try{t.displayName="Skeleton",t.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"Width of the skeleton",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"Height of the skeleton",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"rectangular"},description:"Shape variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"rectangular"'},{value:'"circular"'}]}},animation:{defaultValue:{value:"pulse"},description:"Animation type",name:"animation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"pulse"'},{value:'"wave"'}]}},lines:{defaultValue:{value:"1"},description:"Number of lines for text variant",name:"lines",required:!1,type:{name:"number"}}}}}catch{}const Q={title:"Feedback/Skeleton",component:t,parameters:{layout:"centered",docs:{description:{component:"A placeholder component that mimics the layout of content while data is loading, improving perceived performance."}}},argTypes:{variant:{control:{type:"select"},options:["rectangular","circular","text"]},animation:{control:{type:"select"},options:["pulse","wave","none"]},width:{control:{type:"text"}},height:{control:{type:"text"}}}},s={args:{width:"200px",height:"20px"}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Rectangular"}),e.jsx(t,{variant:"rectangular",width:"200px",height:"100px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Circular"}),e.jsx(t,{variant:"circular",width:"60px",height:"60px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Text (Single Line)"}),e.jsx(t,{variant:"text",width:"300px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Text (Multiple Lines)"}),e.jsx(t,{variant:"text",lines:3})]})]})},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Pulse"}),e.jsx(t,{animation:"pulse",width:"200px",height:"20px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Wave"}),e.jsx(t,{animation:"wave",width:"200px",height:"20px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"None"}),e.jsx(t,{animation:"none",width:"200px",height:"20px"})]})]})},d={render:()=>e.jsxs("div",{className:"w-80 p-4 border rounded-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(t,{variant:"circular",width:"40px",height:"40px"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(t,{variant:"text",width:"60%"}),e.jsx(t,{variant:"text",width:"40%"})]})]}),e.jsx(t,{variant:"rectangular",width:"100%",height:"120px"}),e.jsx(t,{variant:"text",lines:2})]})},c={render:()=>e.jsx("div",{className:"w-96 space-y-3",children:Array.from({length:4}).map((n,a)=>e.jsxs("div",{className:"flex items-center space-x-3 p-3 border rounded",children:[e.jsx(t,{variant:"circular",width:"32px",height:"32px"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(t,{variant:"text",width:"70%"}),e.jsx(t,{variant:"text",width:"50%"})]}),e.jsx(t,{variant:"rectangular",width:"60px",height:"24px"})]},a))})},x={render:()=>e.jsxs("div",{className:"w-full max-w-2xl",children:[e.jsxs("div",{className:"flex space-x-4 pb-2 border-b",children:[e.jsx(t,{variant:"text",width:"120px"}),e.jsx(t,{variant:"text",width:"100px"}),e.jsx(t,{variant:"text",width:"80px"}),e.jsx(t,{variant:"text",width:"60px"})]}),e.jsx("div",{className:"space-y-3 pt-3",children:Array.from({length:5}).map((n,a)=>e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(t,{variant:"text",width:"120px"}),e.jsx(t,{variant:"text",width:"100px"}),e.jsx(t,{variant:"text",width:"80px"}),e.jsx(t,{variant:"text",width:"60px"})]},a))})]})},o={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(t,{variant:"text",width:"80%",height:"32px"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{variant:"circular",width:"24px",height:"24px"}),e.jsx(t,{variant:"text",width:"120px"}),e.jsx(t,{variant:"text",width:"80px"})]}),e.jsx(t,{variant:"rectangular",width:"100%",height:"200px"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{variant:"text",lines:4}),e.jsx(t,{variant:"text",lines:3}),e.jsx(t,{variant:"text",lines:2})]})]})};var j,S,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    width: '200px',
    height: '20px'
  }
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var k,y,b;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Rectangular</h4>
        <Skeleton variant="rectangular" width="200px" height="100px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Circular</h4>
        <Skeleton variant="circular" width="60px" height="60px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Text (Single Line)</h4>
        <Skeleton variant="text" width="300px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Text (Multiple Lines)</h4>
        <Skeleton variant="text" lines={3} />
      </div>
    </div>
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var _,A,T;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Pulse</h4>
        <Skeleton animation="pulse" width="200px" height="20px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Wave</h4>
        <Skeleton animation="wave" width="200px" height="20px" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">None</h4>
        <Skeleton animation="none" width="200px" height="20px" />
      </div>
    </div>
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var V,C,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="w-80 p-4 border rounded-lg space-y-3">
      <div className="flex items-center space-x-3">
        <Skeleton variant="circular" width="40px" height="40px" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rectangular" width="100%" height="120px" />
      <Skeleton variant="text" lines={2} />
    </div>
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var q,D,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-3">
      {Array.from({
      length: 4
    }).map((_, i) => <div key={i} className="flex items-center space-x-3 p-3 border rounded">
          <Skeleton variant="circular" width="32px" height="32px" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="50%" />
          </div>
          <Skeleton variant="rectangular" width="60px" height="24px" />
        </div>)}
    </div>
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var M,W,B;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl">
      {/* Header */}
      <div className="flex space-x-4 pb-2 border-b">
        <Skeleton variant="text" width="120px" />
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="80px" />
        <Skeleton variant="text" width="60px" />
      </div>
      
      {/* Rows */}
      <div className="space-y-3 pt-3">
        {Array.from({
        length: 5
      }).map((_, i) => <div key={i} className="flex space-x-4">
            <Skeleton variant="text" width="120px" />
            <Skeleton variant="text" width="100px" />
            <Skeleton variant="text" width="80px" />
            <Skeleton variant="text" width="60px" />
          </div>)}
      </div>
    </div>
}`,...(B=(W=x.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,F,H;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-4">
      {/* Title */}
      <Skeleton variant="text" width="80%" height="32px" />
      
      {/* Meta info */}
      <div className="flex items-center space-x-2">
        <Skeleton variant="circular" width="24px" height="24px" />
        <Skeleton variant="text" width="120px" />
        <Skeleton variant="text" width="80px" />
      </div>
      
      {/* Featured image */}
      <Skeleton variant="rectangular" width="100%" height="200px" />
      
      {/* Content paragraphs */}
      <div className="space-y-3">
        <Skeleton variant="text" lines={4} />
        <Skeleton variant="text" lines={3} />
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
}`,...(H=(F=o.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const U=["Basic","Variants","Animations","CardSkeleton","ListSkeleton","TableSkeleton","ArticleSkeleton"];export{l as Animations,o as ArticleSkeleton,s as Basic,d as CardSkeleton,c as ListSkeleton,x as TableSkeleton,r as Variants,U as __namedExportsOrder,Q as default};
