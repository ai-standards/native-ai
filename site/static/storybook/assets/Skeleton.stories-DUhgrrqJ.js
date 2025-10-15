import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{c as k}from"./cn-BaF2GUMg.js";import"./index-DHZDe_v1.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({width:t,height:n,variant:u="rectangular",animation:H="pulse",lines:p=1,className:f,...x})=>{const v=()=>{switch(H){case"pulse":return"animate-pulse";case"wave":return"animate-pulse";case"none":return"";default:return"animate-pulse"}},N=()=>{switch(u){case"circular":return"rounded-full";case"text":return"rounded";case"rectangular":default:return"rounded"}},a=(()=>{switch(u){case"circular":return{width:"2.5rem",height:"2.5rem"};case"text":return{width:"100%",height:"1rem"};case"rectangular":default:return{width:"100%",height:"1.25rem"}}})();return u==="text"&&p>1?e.jsxDEV("div",{className:k("space-y-2",f),...x,children:Array.from({length:p}).map((I,b)=>e.jsxDEV("div",{className:k("bg-gray-200",N(),v()),style:{width:b===p-1?"75%":t||a.width,height:n||a.height}},b,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.tsx",lineNumber:69,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.tsx",lineNumber:67,columnNumber:7},void 0):e.jsxDEV("div",{className:k("bg-gray-200",N(),v(),f),style:{width:t||a.width,height:n||a.height},...x},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.tsx",lineNumber:87,columnNumber:5},void 0)};try{s.displayName="Skeleton",s.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"Width of the skeleton",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"Height of the skeleton",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"rectangular"},description:"Shape variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"rectangular"'},{value:'"circular"'}]}},animation:{defaultValue:{value:"pulse"},description:"Animation type",name:"animation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"pulse"'},{value:'"wave"'}]}},lines:{defaultValue:{value:"1"},description:"Number of lines for text variant",name:"lines",required:!1,type:{name:"number"}}}}}catch{}const K={title:"Feedback/Skeleton",component:s,parameters:{layout:"centered",docs:{description:{component:"A placeholder component that mimics the layout of content while data is loading, improving perceived performance."}}},argTypes:{variant:{control:{type:"select"},options:["rectangular","circular","text"]},animation:{control:{type:"select"},options:["pulse","wave","none"]},width:{control:{type:"text"}},height:{control:{type:"text"}}}},i={args:{width:"200px",height:"20px"}},r={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"text-sm font-medium mb-2",children:"Rectangular"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:49,columnNumber:9},void 0),e.jsxDEV(s,{variant:"rectangular",width:"200px",height:"100px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:50,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:48,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"text-sm font-medium mb-2",children:"Circular"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:53,columnNumber:9},void 0),e.jsxDEV(s,{variant:"circular",width:"60px",height:"60px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:54,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:52,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"text-sm font-medium mb-2",children:"Text (Single Line)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:57,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",width:"300px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:58,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:56,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"text-sm font-medium mb-2",children:"Text (Multiple Lines)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:61,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",lines:3},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:62,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:60,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:47,columnNumber:5},void 0)},o={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"text-sm font-medium mb-2",children:"Pulse"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:73,columnNumber:9},void 0),e.jsxDEV(s,{animation:"pulse",width:"200px",height:"20px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:74,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:72,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"text-sm font-medium mb-2",children:"Wave"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV(s,{animation:"wave",width:"200px",height:"20px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:78,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:76,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"text-sm font-medium mb-2",children:"None"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:81,columnNumber:9},void 0),e.jsxDEV(s,{animation:"none",width:"200px",height:"20px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:82,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:80,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:71,columnNumber:5},void 0)},l={render:()=>e.jsxDEV("div",{className:"w-80 p-4 border rounded-lg space-y-3",children:[e.jsxDEV("div",{className:"flex items-center space-x-3",children:[e.jsxDEV(s,{variant:"circular",width:"40px",height:"40px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:93,columnNumber:9},void 0),e.jsxDEV("div",{className:"flex-1 space-y-2",children:[e.jsxDEV(s,{variant:"text",width:"60%"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:95,columnNumber:11},void 0),e.jsxDEV(s,{variant:"text",width:"40%"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:96,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:94,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:92,columnNumber:7},void 0),e.jsxDEV(s,{variant:"rectangular",width:"100%",height:"120px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:99,columnNumber:7},void 0),e.jsxDEV(s,{variant:"text",lines:2},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:100,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:91,columnNumber:5},void 0)},c={render:()=>e.jsxDEV("div",{className:"w-96 space-y-3",children:Array.from({length:4}).map((t,n)=>e.jsxDEV("div",{className:"flex items-center space-x-3 p-3 border rounded",children:[e.jsxDEV(s,{variant:"circular",width:"32px",height:"32px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:111,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex-1 space-y-2",children:[e.jsxDEV(s,{variant:"text",width:"70%"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:113,columnNumber:13},void 0),e.jsxDEV(s,{variant:"text",width:"50%"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:114,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:112,columnNumber:11},void 0),e.jsxDEV(s,{variant:"rectangular",width:"60px",height:"24px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:116,columnNumber:11},void 0)]},n,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:110,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:108,columnNumber:5},void 0)},m={render:()=>e.jsxDEV("div",{className:"w-full max-w-2xl",children:[e.jsxDEV("div",{className:"flex space-x-4 pb-2 border-b",children:[e.jsxDEV(s,{variant:"text",width:"120px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:129,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",width:"100px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:130,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",width:"80px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:131,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",width:"60px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:132,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:128,columnNumber:7},void 0),e.jsxDEV("div",{className:"space-y-3 pt-3",children:Array.from({length:5}).map((t,n)=>e.jsxDEV("div",{className:"flex space-x-4",children:[e.jsxDEV(s,{variant:"text",width:"120px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:139,columnNumber:13},void 0),e.jsxDEV(s,{variant:"text",width:"100px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:140,columnNumber:13},void 0),e.jsxDEV(s,{variant:"text",width:"80px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:141,columnNumber:13},void 0),e.jsxDEV(s,{variant:"text",width:"60px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:142,columnNumber:13},void 0)]},n,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:138,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:136,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:126,columnNumber:5},void 0)},d={render:()=>e.jsxDEV("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsxDEV(s,{variant:"text",width:"80%",height:"32px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:155,columnNumber:7},void 0),e.jsxDEV("div",{className:"flex items-center space-x-2",children:[e.jsxDEV(s,{variant:"circular",width:"24px",height:"24px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:159,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",width:"120px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:160,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",width:"80px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:161,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:158,columnNumber:7},void 0),e.jsxDEV(s,{variant:"rectangular",width:"100%",height:"200px"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:165,columnNumber:7},void 0),e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV(s,{variant:"text",lines:4},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:169,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",lines:3},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:170,columnNumber:9},void 0),e.jsxDEV(s,{variant:"text",lines:2},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:171,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:168,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/skeleton/Skeleton.stories.tsx",lineNumber:153,columnNumber:5},void 0)};var h,g,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    width: '200px',
    height: '20px'
  }
}`,...(D=(g=i.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var j,S,y;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,V,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(V=o.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var U,_,A;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var T,C,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var q,R,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(R=m.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var W,B,F;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Q=["Basic","Variants","Animations","CardSkeleton","ListSkeleton","TableSkeleton","ArticleSkeleton"];export{o as Animations,d as ArticleSkeleton,i as Basic,l as CardSkeleton,c as ListSkeleton,m as TableSkeleton,r as Variants,Q as __namedExportsOrder,K as default};
