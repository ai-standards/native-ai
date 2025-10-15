import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as H}from"./index-BwDkhjyp.js";import{c as V}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const t=({variant:n="unordered",marker:u,spacing:i="sm",nested:h=!1,className:x,children:O,...A})=>{const B=n==="ordered"?"ol":"ul",r=u||(n==="ordered"?"decimal":"disc"),E=V("list-inside",{"list-disc":r==="disc","list-decimal":r==="decimal","list-none":r==="none","space-y-0":i==="none","space-y-1":i==="sm","space-y-2":i==="md","space-y-3":i==="lg","ml-6":h},x),G=H.useMemo(()=>({circle:{listStyleType:"circle"},square:{listStyleType:"square"},"decimal-leading-zero":{listStyleType:"decimal-leading-zero"},"lower-roman":{listStyleType:"lower-roman"},"upper-roman":{listStyleType:"upper-roman"},"lower-alpha":{listStyleType:"lower-alpha"},"upper-alpha":{listStyleType:"upper-alpha"}})[r]||{},[r]);return e.jsx(B,{className:E,style:G,...A,children:O})},s=({marker:n,className:u,children:i,...h})=>{const x=V("leading-relaxed",{"flex items-start gap-2 list-none":n},u);return e.jsxs("li",{className:x,...h,children:[n&&e.jsx("span",{className:"flex-shrink-0 mt-0.5",children:n}),e.jsx("span",{className:n?"flex-1":void 0,children:i})]})};try{t.displayName="List",t.__docgenInfo={description:"",displayName:"List",props:{variant:{defaultValue:{value:"unordered"},description:"List type",name:"variant",required:!1,type:{name:"enum",value:[{value:'"unordered"'},{value:'"ordered"'}]}},marker:{defaultValue:null,description:"List marker style",name:"marker",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"decimal"'},{value:'"disc"'},{value:'"circle"'},{value:'"square"'},{value:'"decimal-leading-zero"'},{value:'"lower-roman"'},{value:'"upper-roman"'},{value:'"lower-alpha"'},{value:'"upper-alpha"'}]}},spacing:{defaultValue:{value:"sm"},description:"Spacing between items",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},nested:{defaultValue:{value:"false"},description:"Nested level (affects indentation)",name:"nested",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="ListItem",s.__docgenInfo={description:"",displayName:"ListItem",props:{marker:{defaultValue:null,description:"Custom marker or icon",name:"marker",required:!1,type:{name:"ReactNode"}}}}}catch{}const X={title:"Content/List",component:t,parameters:{layout:"centered",docs:{description:{component:"Semantic list components with support for ordered, unordered, and custom marker styles."}}}},a={args:{children:null},render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(t,{children:[e.jsx(s,{children:"First list item with some content"}),e.jsx(s,{children:"Second list item with more text"}),e.jsx(s,{children:"Third list item to demonstrate spacing"}),e.jsx(s,{children:"Fourth item showing consistent styling"})]})})},m={args:{children:null},render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(t,{variant:"ordered",children:[e.jsx(s,{children:"Install the required dependencies"}),e.jsx(s,{children:"Configure your development environment"}),e.jsx(s,{children:"Run the build process"}),e.jsx(s,{children:"Deploy to your hosting platform"})]})})},l={args:{children:null},render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Disc (default)"}),e.jsxs(t,{marker:"disc",children:[e.jsx(s,{children:"Default disc marker"}),e.jsx(s,{children:"Standard bullet point"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Circle"}),e.jsxs(t,{marker:"circle",children:[e.jsx(s,{children:"Circle marker style"}),e.jsx(s,{children:"Hollow bullet point"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Square"}),e.jsxs(t,{marker:"square",children:[e.jsx(s,{children:"Square marker style"}),e.jsx(s,{children:"Box-shaped bullet"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Roman Numerals"}),e.jsxs(t,{variant:"ordered",marker:"lower-roman",children:[e.jsx(s,{children:"First item in roman numerals"}),e.jsx(s,{children:"Second item in roman numerals"}),e.jsx(s,{children:"Third item in roman numerals"})]})]})]})},d={args:{children:null},render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"No Spacing"}),e.jsxs(t,{spacing:"none",children:[e.jsx(s,{children:"Tightly packed item"}),e.jsx(s,{children:"No space between items"}),e.jsx(s,{children:"Compact layout"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small Spacing"}),e.jsxs(t,{spacing:"sm",children:[e.jsx(s,{children:"Small spacing item"}),e.jsx(s,{children:"Minimal gaps"}),e.jsx(s,{children:"Subtle separation"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large Spacing"}),e.jsxs(t,{spacing:"lg",children:[e.jsx(s,{children:"Large spacing item"}),e.jsx(s,{children:"Generous gaps"}),e.jsx(s,{children:"Clear separation"})]})]})]})},c={args:{children:null},render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(t,{children:[e.jsx(s,{children:"Main topic one"}),e.jsxs(s,{children:["Main topic two",e.jsxs(t,{nested:!0,spacing:"sm",children:[e.jsx(s,{children:"Subtopic A"}),e.jsx(s,{children:"Subtopic B"}),e.jsxs(s,{children:["Subtopic C",e.jsxs(t,{nested:!0,spacing:"sm",children:[e.jsx(s,{children:"Sub-subtopic 1"}),e.jsx(s,{children:"Sub-subtopic 2"})]})]})]})]}),e.jsx(s,{children:"Main topic three"})]})})},o={args:{children:null},render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Emoji Markers"}),e.jsxs(t,{marker:"none",children:[e.jsx(s,{marker:"",children:"Goal-oriented task"}),e.jsx(s,{marker:"",children:"High priority item"}),e.jsx(s,{marker:"",children:"Creative idea"}),e.jsx(s,{marker:"",children:"Technical requirement"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Icon Markers"}),e.jsxs(t,{marker:"none",children:[e.jsx(s,{marker:e.jsx("span",{className:"text-green-500"}),children:"Completed task"}),e.jsx(s,{marker:e.jsx("span",{className:"text-yellow-500",children:"⏳"}),children:"In progress task"}),e.jsx(s,{marker:e.jsx("span",{className:"text-red-500"}),children:"Failed task"}),e.jsx(s,{marker:e.jsx("span",{className:"text-blue-500",children:"→"}),children:"Next action"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Status Indicators"}),e.jsxs(t,{marker:"none",children:[e.jsx(s,{marker:e.jsx("span",{className:"inline-block w-2 h-2 bg-green-500 rounded-full"}),children:"System operational"}),e.jsx(s,{marker:e.jsx("span",{className:"inline-block w-2 h-2 bg-yellow-500 rounded-full"}),children:"System degraded"}),e.jsx(s,{marker:e.jsx("span",{className:"inline-block w-2 h-2 bg-red-500 rounded-full"}),children:"System down"})]})]})]})},p={args:{children:null},render:()=>e.jsxs("div",{className:"max-w-lg",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Project Requirements"}),e.jsxs(t,{variant:"ordered",spacing:"md",children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Setup Phase"}),e.jsxs(t,{nested:!0,spacing:"sm",children:[e.jsx(s,{children:"Install dependencies"}),e.jsx(s,{children:"Configure environment variables"}),e.jsx(s,{children:"Setup database connections"})]})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Development Phase"}),e.jsxs(t,{nested:!0,spacing:"sm",children:[e.jsx(s,{children:"Implement core features"}),e.jsx(s,{children:"Write comprehensive tests"}),e.jsxs(s,{children:["Code review process",e.jsxs(t,{nested:!0,marker:"none",spacing:"sm",children:[e.jsx(s,{marker:"",children:"Peer review"}),e.jsx(s,{marker:"",children:"Automated testing"}),e.jsx(s,{marker:"",children:"Security audit"})]})]})]})]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Deployment Phase"}),e.jsxs(t,{nested:!0,spacing:"sm",children:[e.jsx(s,{children:"Staging deployment"}),e.jsx(s,{children:"Performance testing"}),e.jsx(s,{children:"Production release"})]})]})]})]})};var L,I,j;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="max-w-md">
      <List>
        <ListItem>First list item with some content</ListItem>
        <ListItem>Second list item with more text</ListItem>
        <ListItem>Third list item to demonstrate spacing</ListItem>
        <ListItem>Fourth item showing consistent styling</ListItem>
      </List>
    </div>
}`,...(j=(I=a.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var g,v,k;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="max-w-md">
      <List variant="ordered">
        <ListItem>Install the required dependencies</ListItem>
        <ListItem>Configure your development environment</ListItem>
        <ListItem>Run the build process</ListItem>
        <ListItem>Deploy to your hosting platform</ListItem>
      </List>
    </div>
}`,...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,b,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">Disc (default)</h3>
        <List marker="disc">
          <ListItem>Default disc marker</ListItem>
          <ListItem>Standard bullet point</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Circle</h3>
        <List marker="circle">
          <ListItem>Circle marker style</ListItem>
          <ListItem>Hollow bullet point</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Square</h3>
        <List marker="square">
          <ListItem>Square marker style</ListItem>
          <ListItem>Box-shaped bullet</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Roman Numerals</h3>
        <List variant="ordered" marker="lower-roman">
          <ListItem>First item in roman numerals</ListItem>
          <ListItem>Second item in roman numerals</ListItem>
          <ListItem>Third item in roman numerals</ListItem>
        </List>
      </div>
    </div>
}`,...(N=(b=l.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var S,f,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">No Spacing</h3>
        <List spacing="none">
          <ListItem>Tightly packed item</ListItem>
          <ListItem>No space between items</ListItem>
          <ListItem>Compact layout</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Small Spacing</h3>
        <List spacing="sm">
          <ListItem>Small spacing item</ListItem>
          <ListItem>Minimal gaps</ListItem>
          <ListItem>Subtle separation</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Large Spacing</h3>
        <List spacing="lg">
          <ListItem>Large spacing item</ListItem>
          <ListItem>Generous gaps</ListItem>
          <ListItem>Clear separation</ListItem>
        </List>
      </div>
    </div>
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,M,q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="max-w-md">
      <List>
        <ListItem>Main topic one</ListItem>
        <ListItem>
          Main topic two
          <List nested spacing="sm">
            <ListItem>Subtopic A</ListItem>
            <ListItem>Subtopic B</ListItem>
            <ListItem>
              Subtopic C
              <List nested spacing="sm">
                <ListItem>Sub-subtopic 1</ListItem>
                <ListItem>Sub-subtopic 2</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>Main topic three</ListItem>
      </List>
    </div>
}`,...(q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var _,T,P;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-sm font-medium mb-2">Emoji Markers</h3>
        <List marker="none">
          <ListItem marker="">Goal-oriented task</ListItem>
          <ListItem marker="">High priority item</ListItem>
          <ListItem marker="">Creative idea</ListItem>
          <ListItem marker="">Technical requirement</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Icon Markers</h3>
        <List marker="none">
          <ListItem marker={<span className="text-green-500"></span>}>Completed task</ListItem>
          <ListItem marker={<span className="text-yellow-500">⏳</span>}>In progress task</ListItem>
          <ListItem marker={<span className="text-red-500"></span>}>Failed task</ListItem>
          <ListItem marker={<span className="text-blue-500">→</span>}>Next action</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Status Indicators</h3>
        <List marker="none">
          <ListItem marker={<span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>}>
            System operational
          </ListItem>
          <ListItem marker={<span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>}>
            System degraded
          </ListItem>
          <ListItem marker={<span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>}>
            System down
          </ListItem>
        </List>
      </div>
    </div>
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var D,R,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Project Requirements</h2>
      
      <List variant="ordered" spacing="md">
        <ListItem>
          <strong>Setup Phase</strong>
          <List nested spacing="sm">
            <ListItem>Install dependencies</ListItem>
            <ListItem>Configure environment variables</ListItem>
            <ListItem>Setup database connections</ListItem>
          </List>
        </ListItem>
        
        <ListItem>
          <strong>Development Phase</strong>
          <List nested spacing="sm">
            <ListItem>Implement core features</ListItem>
            <ListItem>Write comprehensive tests</ListItem>
            <ListItem>
              Code review process
              <List nested marker="none" spacing="sm">
                <ListItem marker="">Peer review</ListItem>
                <ListItem marker="">Automated testing</ListItem>
                <ListItem marker="">Security audit</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        
        <ListItem>
          <strong>Deployment Phase</strong>
          <List nested spacing="sm">
            <ListItem>Staging deployment</ListItem>
            <ListItem>Performance testing</ListItem>
            <ListItem>Production release</ListItem>
          </List>
        </ListItem>
      </List>
    </div>
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const Y=["UnorderedList","OrderedList","MarkerVariants","SpacingOptions","NestedLists","CustomMarkers","MixedContent"];export{o as CustomMarkers,l as MarkerVariants,p as MixedContent,c as NestedLists,m as OrderedList,d as SpacingOptions,a as UnorderedList,Y as __namedExportsOrder,X as default};
