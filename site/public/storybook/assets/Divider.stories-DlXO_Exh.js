import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as n}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({orientation:N="horizontal",variant:d="solid",size:i="md",color:r="default",label:a,labelPosition:l="center",className:j,...f})=>{const t=N==="horizontal",h=n("border-0",{"w-full":t,"h-full min-h-[1rem]":!t,"border-t":t&&i==="sm","border-t-2":t&&i==="md","border-t-4":t&&i==="lg","border-l":!t&&i==="sm","border-l-2":!t&&i==="md","border-l-4":!t&&i==="lg","border-solid":d==="solid","border-dashed":d==="dashed","border-dotted":d==="dotted","border-double":d==="double","border-gray-300":r==="default","border-gray-200":r==="muted","border-blue-300":r==="accent","border-red-300":r==="destructive"});return a?e.jsxs("div",{className:n("flex items-center gap-3",t?"w-full":"flex-col h-full",j),role:"separator","aria-label":typeof a=="string"?a:void 0,...f,children:[l==="left"&&e.jsx("span",{className:"text-sm text-gray-600 whitespace-nowrap",children:a}),e.jsx("div",{className:n(h,"flex-1")}),l==="center"&&e.jsx("span",{className:"text-sm text-gray-600 whitespace-nowrap px-2",children:a}),l==="center"&&e.jsx("div",{className:n(h,"flex-1")}),l==="right"&&e.jsx("span",{className:"text-sm text-gray-600 whitespace-nowrap",children:a})]}):e.jsx("div",{className:n(h,j),role:"separator",...f})};try{s.displayName="Divider",s.__docgenInfo={description:"",displayName:"Divider",props:{orientation:{defaultValue:{value:"horizontal"},description:"Orientation of the divider",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},variant:{defaultValue:{value:"solid"},description:"Visual style variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'},{value:'"double"'}]}},size:{defaultValue:{value:"md"},description:"Size/thickness of the divider",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"default"},description:"Color variant",name:"color",required:!1,type:{name:"enum",value:[{value:'"destructive"'},{value:'"default"'},{value:'"muted"'},{value:'"accent"'}]}},label:{defaultValue:null,description:"Text label for the divider",name:"label",required:!1,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"center"},description:"Position of the label",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}}}catch{}const G={title:"Surface/Divider",component:s,parameters:{layout:"centered",docs:{description:{component:"Visual content separators for organizing interface elements."}}}},c={render:()=>e.jsxs("div",{className:"w-64",children:[e.jsx("div",{className:"p-4 text-sm",children:"Content above"}),e.jsx(s,{}),e.jsx("div",{className:"p-4 text-sm",children:"Content below"})]})},o={render:()=>e.jsxs("div",{className:"w-64",children:[e.jsx("div",{className:"p-4 text-sm",children:"Section 1"}),e.jsx(s,{label:"Section Break"}),e.jsx("div",{className:"p-4 text-sm",children:"Section 2"})]})},m={render:()=>e.jsxs("div",{className:"w-64 space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"p-4 text-sm",children:"Content"}),e.jsx(s,{label:"Left",labelPosition:"left"}),e.jsx("div",{className:"p-4 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-4 text-sm",children:"Content"}),e.jsx(s,{label:"Center",labelPosition:"center"}),e.jsx("div",{className:"p-4 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-4 text-sm",children:"Content"}),e.jsx(s,{label:"Right",labelPosition:"right"}),e.jsx("div",{className:"p-4 text-sm",children:"Content"})]})]})},v={render:()=>e.jsxs("div",{className:"w-64 space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Solid"}),e.jsx(s,{variant:"solid"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Dashed"}),e.jsx(s,{variant:"dashed"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Dotted"}),e.jsx(s,{variant:"dotted"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Double"}),e.jsx(s,{variant:"double"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]})]})},x={render:()=>e.jsxs("div",{className:"w-64 space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Small"}),e.jsx(s,{size:"sm"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Medium"}),e.jsx(s,{size:"md"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Large"}),e.jsx(s,{size:"lg"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]})]})},p={render:()=>e.jsxs("div",{className:"w-64 space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Default"}),e.jsx(s,{color:"default"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Muted"}),e.jsx(s,{color:"muted"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Accent"}),e.jsx(s,{color:"accent"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"p-2 text-sm",children:"Destructive"}),e.jsx(s,{color:"destructive"}),e.jsx("div",{className:"p-2 text-sm",children:"Content"})]})]})},u={render:()=>e.jsxs("div",{className:"flex h-32 w-64",children:[e.jsx("div",{className:"flex-1 flex items-center justify-center text-sm",children:"Left"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{className:"flex-1 flex items-center justify-center text-sm",children:"Center"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{className:"flex-1 flex items-center justify-center text-sm",children:"Right"})]})};var C,b,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <div className="p-4 text-sm">Content above</div>
      <Divider />
      <div className="p-4 text-sm">Content below</div>
    </div>
}`,...(D=(b=c.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var g,y,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <div className="p-4 text-sm">Section 1</div>
      <Divider label="Section Break" />
      <div className="p-4 text-sm">Section 2</div>
    </div>
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,z,V;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-6">
      <div>
        <div className="p-4 text-sm">Content</div>
        <Divider label="Left" labelPosition="left" />
        <div className="p-4 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-4 text-sm">Content</div>
        <Divider label="Center" labelPosition="center" />
        <div className="p-4 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-4 text-sm">Content</div>
        <Divider label="Right" labelPosition="right" />
        <div className="p-4 text-sm">Content</div>
      </div>
    </div>
}`,...(V=(z=m.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var L,_,P;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-6">
      <div>
        <div className="p-2 text-sm">Solid</div>
        <Divider variant="solid" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Dashed</div>
        <Divider variant="dashed" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Dotted</div>
        <Divider variant="dotted" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Double</div>
        <Divider variant="double" />
        <div className="p-2 text-sm">Content</div>
      </div>
    </div>
}`,...(P=(_=v.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var q,R,M;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-6">
      <div>
        <div className="p-2 text-sm">Small</div>
        <Divider size="sm" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Medium</div>
        <Divider size="md" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Large</div>
        <Divider size="lg" />
        <div className="p-2 text-sm">Content</div>
      </div>
    </div>
}`,...(M=(R=x.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var k,A,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-6">
      <div>
        <div className="p-2 text-sm">Default</div>
        <Divider color="default" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Muted</div>
        <Divider color="muted" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Accent</div>
        <Divider color="accent" />
        <div className="p-2 text-sm">Content</div>
      </div>
      
      <div>
        <div className="p-2 text-sm">Destructive</div>
        <Divider color="destructive" />
        <div className="p-2 text-sm">Content</div>
      </div>
    </div>
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,O,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex h-32 w-64">
      <div className="flex-1 flex items-center justify-center text-sm">Left</div>
      <Divider orientation="vertical" />
      <div className="flex-1 flex items-center justify-center text-sm">Center</div>
      <Divider orientation="vertical" />
      <div className="flex-1 flex items-center justify-center text-sm">Right</div>
    </div>
}`,...(W=(O=u.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const J=["Default","WithLabel","LabelPositions","Variants","Sizes","Colors","Vertical"];export{p as Colors,c as Default,m as LabelPositions,x as Sizes,v as Variants,u as Vertical,o as WithLabel,J as __namedExportsOrder,G as default};
