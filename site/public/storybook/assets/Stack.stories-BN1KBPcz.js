import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as v}from"./index-BwDkhjyp.js";import{c as ae}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const re={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-12"},ne={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},se={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},a=({direction:r="vertical",spacing:u="md",align:U="stretch",justify:X="start",wrap:Y=!1,divider:x,className:Z,children:h,...ee})=>{const b=v.Children.toArray(h);return e.jsx("div",{className:ae("flex",r==="vertical"?"flex-col":"flex-row",re[u],ne[U],se[X],Y&&"flex-wrap",Z),...ee,children:x?b.map((te,y)=>e.jsxs(v.Fragment,{children:[te,y<b.length-1&&e.jsx("div",{className:"flex-shrink-0",children:x})]},y)):h})};try{a.displayName="Stack",a.__docgenInfo={description:"",displayName:"Stack",props:{direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},spacing:{defaultValue:{value:"md"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},align:{defaultValue:{value:"stretch"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'}]}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"ReactNode"}}}}}catch{}const le={title:"Surface/Stack",component:a,parameters:{layout:"centered",docs:{description:{component:"A layout component for stacking elements vertically or horizontally with consistent spacing. Includes support for dividers between items."}}},tags:["autodocs"],argTypes:{direction:{control:"select",options:["vertical","horizontal"],description:"The stacking direction"},spacing:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"],description:"The spacing between stack items"},align:{control:"select",options:["start","center","end","stretch"],description:"Cross-axis alignment of items"},justify:{control:"select",options:["start","center","end","between","around","evenly"],description:"Main-axis distribution of items"},wrap:{control:"boolean",description:"Whether items should wrap to new lines"},divider:{control:!1,description:"Element to render between stack items"},children:{control:!1,description:"The items to stack"}}},t=({children:r,color:u="bg-purple-100"})=>e.jsx("div",{className:`${u} border border-purple-300 rounded px-3 py-2 text-sm font-medium text-purple-800`,children:r}),n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"First Item"}),e.jsx(t,{children:"Second Item"}),e.jsx(t,{children:"Third Item"})]})}},s={args:{direction:"horizontal",spacing:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Left"}),e.jsx(t,{children:"Center"}),e.jsx(t,{children:"Right"})]})}},o={args:{direction:"vertical",spacing:"sm",divider:e.jsx("hr",{className:"border-gray-300"}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Section One"}),e.jsx(t,{children:"Section Two"}),e.jsx(t,{children:"Section Three"})]})}},c={args:{direction:"horizontal",spacing:"md",divider:e.jsx("div",{className:"w-px h-6 bg-gray-300"}),children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Home"}),e.jsx(t,{children:"About"}),e.jsx(t,{children:"Contact"})]})}},i={args:{align:"center",justify:"center",spacing:"lg",className:"h-64 border-2 border-dashed border-gray-300",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Centered"}),e.jsx(t,{children:"Content"})]})}},d={render:()=>e.jsx("div",{className:"space-y-8",children:["none","xs","sm","md","lg","xl","2xl"].map(r=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h4",{className:"text-sm font-medium text-gray-700",children:["Spacing: ",r]}),e.jsxs(a,{spacing:r,className:"p-4 border border-gray-200 rounded",children:[e.jsx(t,{children:"Item A"}),e.jsx(t,{children:"Item B"}),e.jsx(t,{children:"Item C"})]})]},r))})},l={render:()=>e.jsx("div",{className:"space-y-8",children:["start","center","end","stretch"].map(r=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h4",{className:"text-sm font-medium text-gray-700",children:["Align: ",r]}),e.jsxs(a,{align:r,spacing:"md",className:"w-64 p-4 border border-gray-200 rounded",children:[e.jsx(t,{children:"Short"}),e.jsx(t,{children:"Medium Length Item"}),e.jsx(t,{children:"Very Long Content Item"})]})]},r))})},m={render:()=>e.jsxs(a,{spacing:"lg",className:"w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Contact Form"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Fill out the form below to get in touch."})]}),e.jsxs(a,{spacing:"md",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your email"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),e.jsx("textarea",{rows:4,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your message"})]})]}),e.jsxs(a,{direction:"horizontal",spacing:"sm",justify:"end",children:[e.jsx("button",{className:"px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"Send Message"})]})]}),parameters:{docs:{description:{story:"Example of using Stack for a form layout with consistent vertical spacing between fields."}}}},p={render:()=>e.jsxs(a,{direction:"horizontal",spacing:"none",divider:e.jsx("div",{className:"w-px h-6 bg-gray-300"}),className:"bg-white border border-gray-200 rounded-lg p-1",children:[e.jsx("button",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Dashboard"}),e.jsx("button",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Projects"}),e.jsx("button",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Team"}),e.jsx("button",{className:"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded",children:"Settings"})]}),parameters:{docs:{description:{story:"Example of using Stack with dividers for a horizontal navigation menu."}}}},g={render:()=>e.jsxs(a,{spacing:"xl",className:"w-96 p-8 bg-white",children:[e.jsxs(a,{spacing:"sm",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Article Title"}),e.jsx("div",{className:"text-sm text-gray-500",children:"Published on March 15, 2024"})]}),e.jsx("div",{className:"prose text-gray-700",children:e.jsx("p",{children:"This is the introduction paragraph of the article. It provides an overview of what the reader can expect to learn from this content."})}),e.jsxs(a,{spacing:"md",divider:e.jsx("div",{className:"h-px bg-gray-200"}),children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Section One"}),e.jsx("p",{className:"text-gray-700",children:"Content for the first section goes here."})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Section Two"}),e.jsx("p",{className:"text-gray-700",children:"Content for the second section goes here."})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Conclusion"}),e.jsx("p",{className:"text-gray-700",children:"Final thoughts and summary of the article."})]})]}),e.jsxs(a,{direction:"horizontal",spacing:"sm",className:"pt-4 border-t border-gray-200",children:[e.jsx("span",{className:"text-sm text-gray-500",children:"Tags:"}),e.jsx("div",{className:"px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded",children:"React"}),e.jsx("div",{className:"px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded",children:"Layout"}),e.jsx("div",{className:"px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded",children:"Components"})]})]}),parameters:{docs:{description:{story:"Example of using Stack for article layout with sections, dividers, and metadata."}}}};var f,S,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <>
        <StackItem>First Item</StackItem>
        <StackItem>Second Item</StackItem>
        <StackItem>Third Item</StackItem>
      </>
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var N,k,I;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    spacing: 'md',
    children: <>
        <StackItem>Left</StackItem>
        <StackItem>Center</StackItem>
        <StackItem>Right</StackItem>
      </>
  }
}`,...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var w,C,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    spacing: 'sm',
    divider: <hr className="border-gray-300" />,
    children: <>
        <StackItem>Section One</StackItem>
        <StackItem>Section Two</StackItem>
        <StackItem>Section Three</StackItem>
      </>
  }
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var z,E,F;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    spacing: 'md',
    divider: <div className="w-px h-6 bg-gray-300" />,
    children: <>
        <StackItem>Home</StackItem>
        <StackItem>About</StackItem>
        <StackItem>Contact</StackItem>
      </>
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var A,M,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    align: 'center',
    justify: 'center',
    spacing: 'lg',
    className: 'h-64 border-2 border-dashed border-gray-300',
    children: <>
        <StackItem>Centered</StackItem>
        <StackItem>Content</StackItem>
      </>
  }
}`,...(L=(M=i.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var V,_,D;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(spacing => <div key={spacing} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Spacing: {spacing}</h4>
          <Stack spacing={spacing} className="p-4 border border-gray-200 rounded">
            <StackItem>Item A</StackItem>
            <StackItem>Item B</StackItem>
            <StackItem>Item C</StackItem>
          </Stack>
        </div>)}
    </div>
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var R,O,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(['start', 'center', 'end', 'stretch'] as const).map(align => <div key={align} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Align: {align}</h4>
          <Stack align={align} spacing="md" className="w-64 p-4 border border-gray-200 rounded">
            <StackItem>Short</StackItem>
            <StackItem>Medium Length Item</StackItem>
            <StackItem>Very Long Content Item</StackItem>
          </Stack>
        </div>)}
    </div>
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var H,W,P;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Stack spacing="lg" className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Form</h2>
        <p className="text-sm text-gray-600">Fill out the form below to get in touch.</p>
      </div>
      
      <Stack spacing="md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message" />
        </div>
      </Stack>
      
      <Stack direction="horizontal" spacing="sm" justify="end">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack for a form layout with consistent vertical spacing between fields.'
      }
    }
  }
}`,...(P=(W=m.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var B,$,G;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="none" divider={<div className="w-px h-6 bg-gray-300" />} className="bg-white border border-gray-200 rounded-lg p-1">
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Dashboard
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Projects
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Team
      </button>
      <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
        Settings
      </button>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack with dividers for a horizontal navigation menu.'
      }
    }
  }
}`,...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Stack spacing="xl" className="w-96 p-8 bg-white">
      <Stack spacing="sm">
        <h1 className="text-2xl font-bold text-gray-900">Article Title</h1>
        <div className="text-sm text-gray-500">Published on March 15, 2024</div>
      </Stack>
      
      <div className="prose text-gray-700">
        <p>
          This is the introduction paragraph of the article. It provides an overview 
          of what the reader can expect to learn from this content.
        </p>
      </div>
      
      <Stack spacing="md" divider={<div className="h-px bg-gray-200" />}>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Section One</h2>
          <p className="text-gray-700">Content for the first section goes here.</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Section Two</h2>
          <p className="text-gray-700">Content for the second section goes here.</p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-700">Final thoughts and summary of the article.</p>
        </div>
      </Stack>
      
      <Stack direction="horizontal" spacing="sm" className="pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-500">Tags:</span>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">React</div>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Layout</div>
        <div className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Components</div>
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using Stack for article layout with sections, dividers, and metadata.'
      }
    }
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const me=["Default","Horizontal","WithDivider","HorizontalWithDivider","CenteredContent","SpacingVariations","AlignmentOptions","FormLayout","NavigationMenu","ArticleContent"];export{l as AlignmentOptions,g as ArticleContent,i as CenteredContent,n as Default,m as FormLayout,s as Horizontal,c as HorizontalWithDivider,p as NavigationMenu,d as SpacingVariations,o as WithDivider,me as __namedExportsOrder,le as default};
