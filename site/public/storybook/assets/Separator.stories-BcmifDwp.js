import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as m}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({orientation:o="horizontal",level:E=2,spacing:p="md",decorative:I=!1,className:x,children:d,...v})=>{const a=o==="horizontal",h={none:"",sm:a?"my-2":"mx-2",md:a?"my-4":"mx-4",lg:a?"my-6":"mx-6",xl:a?"my-8":"mx-8"},q={1:"border-gray-400",2:"border-gray-300",3:"border-gray-200",4:"border-gray-100"},D=e.jsx("div",{className:m("border-0",q[E],{"w-full border-t":a,"h-full min-h-[2rem] border-l":!a}),role:I?"presentation":"separator","aria-orientation":o});return d?e.jsx("div",{className:m("flex items-center",h[p],{"w-full":a,"flex-col h-full":!a},x),...v,children:a?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-1 border-t border-gray-300"}),e.jsx("div",{className:"px-4 text-sm text-gray-600 font-medium",children:d}),e.jsx("div",{className:"flex-1 border-t border-gray-300"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-1 border-l border-gray-300"}),e.jsx("div",{className:"py-4 text-sm text-gray-600 font-medium writing-mode-vertical-rl",children:d}),e.jsx("div",{className:"flex-1 border-l border-gray-300"})]})}):e.jsx("div",{className:m(h[p],{"w-full":a,"h-full":!a},x),...v,children:D})};try{s.displayName="Separator",s.__docgenInfo={description:"",displayName:"Separator",props:{orientation:{defaultValue:{value:"horizontal"},description:"Orientation of the separator",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},level:{defaultValue:{value:"2"},description:"Semantic level for content hierarchy",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},spacing:{defaultValue:{value:"md"},description:"Spacing around the separator",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"xl"'}]}},decorative:{defaultValue:{value:"false"},description:"Whether to include decorative elements",name:"decorative",required:!1,type:{name:"boolean"}}}}}catch{}const B={title:"Surface/Separator",component:s,parameters:{layout:"centered",docs:{description:{component:"Semantic content divisions for organizing interface sections with proper accessibility."}}}},t={render:()=>e.jsxs("div",{className:"w-80",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold",children:"First Section"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Some content in the first section."})]}),e.jsx(s,{}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold",children:"Second Section"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Content in the second section."})]})]})},n={render:()=>e.jsxs("div",{className:"w-80",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold",children:"User Information"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Basic user details and preferences."})]}),e.jsx(s,{children:"Account Settings"}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold",children:"Security Options"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Password and authentication settings."})]})]})},r={render:()=>e.jsxs("div",{className:"w-80 space-y-0",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{className:"font-bold text-lg",children:"Main Section"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Primary content area."})]}),e.jsx(s,{level:1}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold",children:"Subsection"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Secondary content."})]}),e.jsx(s,{level:2}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"font-medium",children:"Sub-subsection"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Tertiary content."})]}),e.jsx(s,{level:3}),e.jsxs("div",{className:"p-4",children:[e.jsx("h5",{className:"text-sm font-medium",children:"Minor Section"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Minor details."})]}),e.jsx(s,{level:4}),e.jsx("div",{className:"p-4 text-xs text-gray-500",children:"Fine print or footnotes."})]})},i={render:()=>e.jsxs("div",{className:"w-80",children:[e.jsx("div",{className:"p-2 text-sm",children:"No spacing"}),e.jsx(s,{spacing:"none"}),e.jsx("div",{className:"p-2 text-sm",children:"Small spacing"}),e.jsx(s,{spacing:"sm"}),e.jsx("div",{className:"p-2 text-sm",children:"Medium spacing"}),e.jsx(s,{spacing:"md"}),e.jsx("div",{className:"p-2 text-sm",children:"Large spacing"}),e.jsx(s,{spacing:"lg"}),e.jsx("div",{className:"p-2 text-sm",children:"Extra large spacing"}),e.jsx(s,{spacing:"xl"}),e.jsx("div",{className:"p-2 text-sm",children:"Content after"})]})},l={render:()=>e.jsxs("div",{className:"flex h-64 w-96",children:[e.jsxs("div",{className:"flex-1 p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Left Panel"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Content on the left side of the separator."})]}),e.jsx(s,{orientation:"vertical"}),e.jsxs("div",{className:"flex-1 p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Right Panel"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Content on the right side of the separator."})]})]})},c={render:()=>e.jsxs("div",{className:"w-80",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold",children:"Important Content"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This content needs semantic separation."})]}),e.jsx(s,{decorative:!0}),e.jsx("div",{className:"p-4 text-xs text-gray-400",children:"This is just visual decoration, not semantically important."})]})};var N,u,g;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <div className="p-4">
        <h3 className="font-semibold">First Section</h3>
        <p className="text-sm text-gray-600">Some content in the first section.</p>
      </div>
      <Separator />
      <div className="p-4">
        <h3 className="font-semibold">Second Section</h3>
        <p className="text-sm text-gray-600">Content in the second section.</p>
      </div>
    </div>
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,j,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <div className="p-4">
        <h3 className="font-semibold">User Information</h3>
        <p className="text-sm text-gray-600">Basic user details and preferences.</p>
      </div>
      <Separator>Account Settings</Separator>
      <div className="p-4">
        <h3 className="font-semibold">Security Options</h3>
        <p className="text-sm text-gray-600">Password and authentication settings.</p>
      </div>
    </div>
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var S,b,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-0">
      <div className="p-4">
        <h2 className="font-bold text-lg">Main Section</h2>
        <p className="text-sm text-gray-600">Primary content area.</p>
      </div>
      
      <Separator level={1} />
      
      <div className="p-4">
        <h3 className="font-semibold">Subsection</h3>
        <p className="text-sm text-gray-600">Secondary content.</p>
      </div>
      
      <Separator level={2} />
      
      <div className="p-4">
        <h4 className="font-medium">Sub-subsection</h4>
        <p className="text-sm text-gray-600">Tertiary content.</p>
      </div>
      
      <Separator level={3} />
      
      <div className="p-4">
        <h5 className="text-sm font-medium">Minor Section</h5>
        <p className="text-sm text-gray-600">Minor details.</p>
      </div>
      
      <Separator level={4} />
      
      <div className="p-4 text-xs text-gray-500">
        Fine print or footnotes.
      </div>
    </div>
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var C,_,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <div className="p-2 text-sm">No spacing</div>
      <Separator spacing="none" />
      <div className="p-2 text-sm">Small spacing</div>
      <Separator spacing="sm" />
      <div className="p-2 text-sm">Medium spacing</div>
      <Separator spacing="md" />
      <div className="p-2 text-sm">Large spacing</div>
      <Separator spacing="lg" />
      <div className="p-2 text-sm">Extra large spacing</div>
      <Separator spacing="xl" />
      <div className="p-2 text-sm">Content after</div>
    </div>
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var M,P,z;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex h-64 w-96">
      <div className="flex-1 p-4">
        <h3 className="font-semibold mb-2">Left Panel</h3>
        <p className="text-sm text-gray-600">Content on the left side of the separator.</p>
      </div>
      
      <Separator orientation="vertical" />
      
      <div className="flex-1 p-4">
        <h3 className="font-semibold mb-2">Right Panel</h3>
        <p className="text-sm text-gray-600">Content on the right side of the separator.</p>
      </div>
    </div>
}`,...(z=(P=l.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var F,T,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <div className="p-4">
        <h3 className="font-semibold">Important Content</h3>
        <p className="text-sm text-gray-600">This content needs semantic separation.</p>
      </div>
      
      <Separator decorative />
      
      <div className="p-4 text-xs text-gray-400">
        This is just visual decoration, not semantically important.
      </div>
    </div>
}`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const U=["Default","WithLabel","Levels","Spacing","Vertical","Decorative"];export{c as Decorative,t as Default,r as Levels,i as Spacing,l as Vertical,n as WithLabel,U as __namedExportsOrder,B as default};
