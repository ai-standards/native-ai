import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as Z}from"./index-BwDkhjyp.js";import{c as t}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const ee={default:"bg-gray-100 text-gray-800 border-gray-200",secondary:"bg-gray-600 text-white border-gray-600",success:"bg-green-100 text-green-800 border-green-200",warning:"bg-yellow-100 text-yellow-800 border-yellow-200",error:"bg-red-100 text-red-800 border-red-200",info:"bg-blue-100 text-blue-800 border-blue-200",outline:"bg-transparent text-gray-600 border-gray-300"},ae={xs:"px-1.5 py-0.5 text-xs",sm:"px-2 py-1 text-xs",md:"px-2.5 py-1 text-sm",lg:"px-3 py-1.5 text-sm"},ne={rounded:"rounded-md",pill:"rounded-full",square:"rounded-none"},re={"top-right":"top-0 right-0 translate-x-1/2 -translate-y-1/2","top-left":"top-0 left-0 -translate-x-1/2 -translate-y-1/2","bottom-right":"bottom-0 right-0 translate-x-1/2 translate-y-1/2","bottom-left":"bottom-0 left-0 -translate-x-1/2 translate-y-1/2"},a=({variant:n="default",size:r="sm",shape:d="rounded",children:i,dot:c=!1,dotPosition:s="top-right",icon:o,iconPosition:j="left",removable:Q=!1,onRemove:b,className:X,...y})=>c?e.jsxs("div",{className:"relative inline-flex",...y,children:[i,e.jsxs("span",{className:t("absolute flex h-2 w-2",re[s]),children:[e.jsx("span",{className:t("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",n==="success"?"bg-green-400":n==="warning"?"bg-yellow-400":n==="error"?"bg-red-400":n==="info"?"bg-blue-400":"bg-gray-400")}),e.jsx("span",{className:t("relative inline-flex rounded-full h-2 w-2",n==="success"?"bg-green-500":n==="warning"?"bg-yellow-500":n==="error"?"bg-red-500":n==="info"?"bg-blue-500":"bg-gray-500")})]})]}):e.jsxs("span",{className:t("inline-flex items-center font-medium border",ee[n],ae[r],ne[d],X),...y,children:[o&&j==="left"&&e.jsx("span",{className:t("mr-1",r==="xs"||r==="sm"?"w-3 h-3":"w-4 h-4"),children:o}),i,o&&j==="right"&&e.jsx("span",{className:t("ml-1",r==="xs"||r==="sm"?"w-3 h-3":"w-4 h-4"),children:o}),Q&&e.jsx("button",{onClick:Y=>{Y.stopPropagation(),b==null||b()},className:t("ml-1 rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",r==="xs"||r==="sm"?"w-3 h-3":"w-4 h-4"),"aria-label":"Remove badge",children:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),se={xs:"gap-1",sm:"gap-2",md:"gap-3",lg:"gap-4"},l=({children:n,spacing:r="sm",direction:d="row",wrap:i=!0,className:c,...s})=>e.jsx("div",{className:t("flex",d==="row"?"flex-row":"flex-col",i&&d==="row"&&"flex-wrap",se[r],c),...s,children:n});try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:{value:"default"},description:"Badge variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"secondary"'},{value:'"outline"'},{value:'"default"'}]}},size:{defaultValue:{value:"sm"},description:"Badge size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},children:{defaultValue:null,description:"Badge content",name:"children",required:!0,type:{name:"ReactNode"}},dot:{defaultValue:{value:"false"},description:"Show a dot indicator",name:"dot",required:!1,type:{name:"boolean"}},dotPosition:{defaultValue:{value:"top-right"},description:"Position for dot badge",name:"dotPosition",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},icon:{defaultValue:null,description:"Icon element to display",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"Icon position",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},removable:{defaultValue:{value:"false"},description:"Removable badge with close button",name:"removable",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"Callback when badge is removed",name:"onRemove",required:!1,type:{name:"(() => void)"}},shape:{defaultValue:{value:"rounded"},description:"Badge shape",name:"shape",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"rounded"'},{value:'"pill"'}]}}}}}catch{}try{l.displayName="BadgeGroup",l.__docgenInfo={description:"",displayName:"BadgeGroup",props:{spacing:{defaultValue:{value:"sm"},description:"Spacing between badges",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},direction:{defaultValue:{value:"row"},description:"Layout direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},wrap:{defaultValue:{value:"true"},description:"Wrap badges to new lines",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Media/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","success","warning","error","info","outline"]},size:{control:"select",options:["xs","sm","md","lg"]},shape:{control:"select",options:["rounded","pill","square"]}}},u={args:{children:"Badge"}},g={render:()=>e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"outline",children:"Outline"})]})},m={render:()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(a,{size:"xs",children:"Extra Small"}),e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},v={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{shape:"square",children:"Square"}),e.jsx(a,{shape:"rounded",children:"Rounded"}),e.jsx(a,{shape:"pill",children:"Pill"})]})},p={render:()=>e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(a,{variant:"success",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),children:"Success"}),e.jsx(a,{variant:"error",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),children:"Error"}),e.jsx(a,{variant:"info",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),iconPosition:"right",children:"Right Icon"})]})},h={render:()=>{const n=r=>{alert(`Removed ${r} badge`)};return e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(a,{variant:"default",removable:!0,onRemove:()=>n("Default"),children:"Default"}),e.jsx(a,{variant:"success",removable:!0,onRemove:()=>n("Success"),children:"Success"}),e.jsx(a,{variant:"warning",removable:!0,onRemove:()=>n("Warning"),children:"Warning"}),e.jsx(a,{variant:"error",removable:!0,onRemove:()=>n("Error"),children:"Error"})]})}},x={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Dot Position Variants"}),e.jsxs("div",{className:"grid grid-cols-2 gap-8",children:[e.jsx(a,{dot:!0,dotPosition:"top-right",variant:"success",children:e.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center",children:"TR"})}),e.jsx(a,{dot:!0,dotPosition:"top-left",variant:"error",children:e.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center",children:"TL"})}),e.jsx(a,{dot:!0,dotPosition:"bottom-right",variant:"warning",children:e.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center",children:"BR"})}),e.jsx(a,{dot:!0,dotPosition:"bottom-left",variant:"info",children:e.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center",children:"BL"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Dot Badge Examples"}),e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsx(a,{dot:!0,variant:"success",children:e.jsx("svg",{className:"w-6 h-6 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-5 5-5-5h5v-12h5v12z"})})}),e.jsx(a,{dot:!0,variant:"error",children:e.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-300"})}),e.jsx(a,{dot:!0,variant:"warning",children:e.jsx("span",{className:"text-lg"})})]})]})]}),parameters:{layout:"padded"}},f={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Default Group"}),e.jsxs(l,{children:[e.jsx(a,{variant:"default",children:"React"}),e.jsx(a,{variant:"info",children:"TypeScript"}),e.jsx(a,{variant:"success",children:"Tailwind"}),e.jsx(a,{variant:"warning",children:"Beta"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Column Layout"}),e.jsxs(l,{direction:"column",children:[e.jsx(a,{variant:"default",children:"Feature A"}),e.jsx(a,{variant:"success",children:"Feature B"}),e.jsx(a,{variant:"warning",children:"Feature C"}),e.jsx(a,{variant:"error",children:"Feature D"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Large Spacing"}),e.jsxs(l,{spacing:"lg",children:[e.jsx(a,{variant:"outline",size:"lg",children:"Design"}),e.jsx(a,{variant:"outline",size:"lg",children:"Development"}),e.jsx(a,{variant:"outline",size:"lg",children:"Testing"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Many Badges (Wrapping)"}),e.jsx("div",{className:"max-w-md",children:e.jsx(l,{children:["React","Vue","Angular","Svelte","TypeScript","JavaScript","CSS","HTML","Node.js","Python","Java","C++"].map(n=>e.jsx(a,{variant:"default",size:"sm",children:n},n))})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Status Indicators"}),e.jsxs(l,{spacing:"md",children:[e.jsx(a,{variant:"success",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),children:"Available"}),e.jsx(a,{variant:"warning",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),children:"Limited"}),e.jsx(a,{variant:"error",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),children:"Unavailable"})]})]})]}),parameters:{layout:"padded"}},B={render:()=>{const n=["React","TypeScript","CSS","HTML","Node.js"],[r,d]=Z.useState(n),i=s=>{d(r.filter(o=>o!==s))},c=s=>{r.includes(s)||d([...r,s])};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Active Tags"}),e.jsxs(l,{children:[r.map(s=>e.jsx(a,{variant:"info",removable:!0,onRemove:()=>i(s),children:s},s)),r.length===0&&e.jsx("span",{className:"text-gray-500 text-sm",children:"No tags selected"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Available Tags"}),e.jsx(l,{children:n.filter(s=>!r.includes(s)).map(s=>e.jsxs(a,{variant:"outline",className:"cursor-pointer hover:bg-gray-50",onClick:()=>c(s),children:["+ ",s]},s))})]})]})},parameters:{layout:"padded"}};var w,N,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var S,z,T;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(T=(z=g.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var C,L,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 items-center">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,D,P;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Badge shape="square">Square</Badge>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
    </div>
}`,...(P=(D=v.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var G,q,_;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap">
      <Badge variant="success" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>}>
        Success
      </Badge>
      
      <Badge variant="error" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>}>
        Error
      </Badge>
      
      <Badge variant="info" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>} iconPosition="right">
        Right Icon
      </Badge>
    </div>
}`,...(_=(q=p.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var k,A,E;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const handleRemove = (label: string) => {
      alert(\`Removed \${label} badge\`);
    };
    return <div className="flex gap-2 flex-wrap">
        <Badge variant="default" removable onRemove={() => handleRemove('Default')}>
          Default
        </Badge>
        <Badge variant="success" removable onRemove={() => handleRemove('Success')}>
          Success
        </Badge>
        <Badge variant="warning" removable onRemove={() => handleRemove('Warning')}>
          Warning
        </Badge>
        <Badge variant="error" removable onRemove={() => handleRemove('Error')}>
          Error
        </Badge>
      </div>;
  }
}`,...(E=(A=h.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var I,W,F;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Dot Position Variants</h3>
        <div className="grid grid-cols-2 gap-8">
          <Badge dot dotPosition="top-right" variant="success">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              TR
            </div>
          </Badge>
          
          <Badge dot dotPosition="top-left" variant="error">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              TL
            </div>
          </Badge>
          
          <Badge dot dotPosition="bottom-right" variant="warning">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              BR
            </div>
          </Badge>
          
          <Badge dot dotPosition="bottom-left" variant="info">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
              BL
            </div>
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Dot Badge Examples</h3>
        <div className="flex gap-6 items-center">
          <Badge dot variant="success">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12h5v12z" />
            </svg>
          </Badge>
          
          <Badge dot variant="error">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </Badge>
          
          <Badge dot variant="warning">
            <span className="text-lg"></span>
          </Badge>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(F=(W=x.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var H,J,O;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Default Group</h3>
        <BadgeGroup>
          <Badge variant="default">React</Badge>
          <Badge variant="info">TypeScript</Badge>
          <Badge variant="success">Tailwind</Badge>
          <Badge variant="warning">Beta</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Column Layout</h3>
        <BadgeGroup direction="column">
          <Badge variant="default">Feature A</Badge>
          <Badge variant="success">Feature B</Badge>
          <Badge variant="warning">Feature C</Badge>
          <Badge variant="error">Feature D</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Large Spacing</h3>
        <BadgeGroup spacing="lg">
          <Badge variant="outline" size="lg">Design</Badge>
          <Badge variant="outline" size="lg">Development</Badge>
          <Badge variant="outline" size="lg">Testing</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Many Badges (Wrapping)</h3>
        <div className="max-w-md">
          <BadgeGroup>
            {['React', 'Vue', 'Angular', 'Svelte', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python', 'Java', 'C++'].map(tech => <Badge key={tech} variant="default" size="sm">{tech}</Badge>)}
          </BadgeGroup>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Status Indicators</h3>
        <BadgeGroup spacing="md">
          <Badge variant="success" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>}>
            Available
          </Badge>
          
          <Badge variant="warning" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>}>
            Limited
          </Badge>
          
          <Badge variant="error" icon={<svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>}>
            Unavailable
          </Badge>
        </BadgeGroup>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(O=(J=f.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var U,$,K;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const tags = ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js'];
    const [activeTags, setActiveTags] = React.useState(tags);
    const removeTag = (tagToRemove: string) => {
      setActiveTags(activeTags.filter(tag => tag !== tagToRemove));
    };
    const addTag = (tag: string) => {
      if (!activeTags.includes(tag)) {
        setActiveTags([...activeTags, tag]);
      }
    };
    return <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Active Tags</h3>
          <BadgeGroup>
            {activeTags.map(tag => <Badge key={tag} variant="info" removable onRemove={() => removeTag(tag)}>
                {tag}
              </Badge>)}
            {activeTags.length === 0 && <span className="text-gray-500 text-sm">No tags selected</span>}
          </BadgeGroup>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Available Tags</h3>
          <BadgeGroup>
            {tags.filter(tag => !activeTags.includes(tag)).map(tag => <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-gray-50" onClick={() => addTag(tag)}>
                + {tag}
              </Badge>)}
          </BadgeGroup>
        </div>
      </div>;
  },
  parameters: {
    layout: 'padded'
  }
}`,...(K=($=B.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const ce=["Default","Variants","Sizes","Shapes","WithIcons","Removable","DotBadges","BadgeGroupStory","InteractiveBadges"];export{f as BadgeGroupStory,u as Default,x as DotBadges,B as InteractiveBadges,h as Removable,v as Shapes,m as Sizes,g as Variants,p as WithIcons,ce as __namedExportsOrder,oe as default};
