import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as o}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const I={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-12 h-12"},L={primary:"text-blue-600",secondary:"text-gray-600",success:"text-green-600",warning:"text-yellow-600",error:"text-red-600"},V={inline:"inline-flex",block:"flex"},s=({size:c="md",variant:w="primary",display:k="inline",label:l="Loading...",className:C,..._})=>e.jsxs("div",{className:o("items-center justify-center",V[k],C),role:"status","aria-busy":"true","aria-label":l,..._,children:[e.jsxs("svg",{className:o("animate-spin",I[c],L[w]),fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),e.jsx("span",{className:"sr-only",children:l})]});try{s.displayName="Spinner",s.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"primary"},description:"Color variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},display:{defaultValue:{value:"inline"},description:"Display mode",name:"display",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"block"'}]}},label:{defaultValue:{value:"Loading..."},description:"Loading text for accessibility",name:"label",required:!1,type:{name:"string"}}}}}catch{}const E={title:"Feedback/Spinner",component:s,parameters:{layout:"centered",docs:{description:{component:"A lightweight loading indicator for ongoing background processes, async actions, or pending UI updates."}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},variant:{control:{type:"select"},options:["primary","secondary","success","warning","error"]},display:{control:{type:"select"},options:["inline","block"]}}},n={args:{}},a={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{size:"xs"}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"}),e.jsx(s,{size:"xl"})]})},r={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{variant:"primary"}),e.jsx(s,{variant:"secondary"}),e.jsx(s,{variant:"success"}),e.jsx(s,{variant:"warning"}),e.jsx(s,{variant:"error"})]})},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:["Inline spinner: ",e.jsx(s,{display:"inline",size:"sm"})," Loading content..."]}),e.jsxs("div",{children:["Block spinner:",e.jsx(s,{display:"block"})]})]})},t={render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md",children:[e.jsx(s,{size:"sm",variant:"secondary"}),"Saving..."]}),e.jsx("div",{className:"p-4 border rounded-lg",children:e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsxs("div",{className:"text-center",children:[e.jsx(s,{size:"lg"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Loading data..."})]})})}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Processing your request ",e.jsx(s,{size:"xs"})]})]})};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,u,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var y,g,j;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="success" />
      <Spinner variant="warning" />
      <Spinner variant="error" />
    </div>
}`,...(j=(g=r.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,h,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        Inline spinner: <Spinner display="inline" size="sm" /> Loading content...
      </div>
      <div>
        Block spinner:
        <Spinner display="block" />
      </div>
    </div>
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var z,N,b;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 max-w-md">
      {/* Button with spinner */}
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
        <Spinner size="sm" variant="secondary" />
        Saving...
      </button>

      {/* Card loading state */}
      <div className="p-4 border rounded-lg">
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <Spinner size="lg" />
            <p className="mt-2 text-sm text-gray-600">Loading data...</p>
          </div>
        </div>
      </div>

      {/* Inline loading text */}
      <p className="text-sm text-gray-600">
        Processing your request <Spinner size="xs" />
      </p>
    </div>
}`,...(b=(N=t.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const M=["Basic","Sizes","Variants","DisplayModes","InContext"];export{n as Basic,i as DisplayModes,t as InContext,a as Sizes,r as Variants,M as __namedExportsOrder,E as default};
