import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as Q}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const X={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},Y={nowrap:"flex-nowrap",wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse"},Z={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},ee={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},re={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-12"},n=({direction:t="row",wrap:p="nowrap",justify:O="start",align:$="stretch",gap:H="none",grow:M=!1,shrink:u=!0,inline:U=!1,className:z,children:J,...K})=>e.jsx("div",{className:Q(U?"inline-flex":"flex",X[t],Y[p],Z[O],ee[$],re[H],M&&"flex-grow",u&&"flex-shrink",!u&&"flex-shrink-0",z),...K,children:J});try{n.displayName="Flex",n.__docgenInfo={description:"",displayName:"Flex",props:{direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"col"'},{value:'"col-reverse"'}]}},wrap:{defaultValue:{value:"nowrap"},description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},align:{defaultValue:{value:"stretch"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"baseline"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'}]}},gap:{defaultValue:{value:"none"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},grow:{defaultValue:{value:"false"},description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:{value:"true"},description:"",name:"shrink",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}const le={title:"Surface/Flex",component:n,parameters:{layout:"centered",docs:{description:{component:"A flexible container component that provides a clean API for CSS Flexbox properties. Simplifies common flexbox patterns with semantic props."}}},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","row-reverse","col","col-reverse"],description:"Sets the flex-direction property"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"Sets the flex-wrap property"},justify:{control:"select",options:["start","end","center","between","around","evenly"],description:"Sets the justify-content property"},align:{control:"select",options:["start","end","center","baseline","stretch"],description:"Sets the align-items property"},gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"],description:"Sets the gap between flex items"},grow:{control:"boolean",description:"Whether the container should grow to fill available space"},shrink:{control:"boolean",description:"Whether the container should shrink when space is limited"},inline:{control:"boolean",description:"Renders as inline-flex instead of flex"},children:{control:!1,description:"The content to display inside the flex container"}}},r=({children:t,color:p="bg-blue-100"})=>e.jsx("div",{className:`${p} border border-blue-300 rounded px-3 py-2 text-sm font-medium text-blue-800`,children:t}),a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})}},s={args:{direction:"col",gap:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"First Item"}),e.jsx(r,{children:"Second Item"}),e.jsx(r,{children:"Third Item"})]})}},l={args:{justify:"center",align:"center",gap:"lg",className:"h-64 border-2 border-dashed border-gray-300",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Centered"}),e.jsx(r,{children:"Content"})]})}},o={args:{justify:"between",align:"center",className:"w-full p-4 border border-gray-200 rounded",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Left"}),e.jsx(r,{children:"Center"}),e.jsx(r,{children:"Right"})]})}},d={args:{wrap:"wrap",gap:"sm",className:"w-64 p-4 border border-gray-200 rounded",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"}),e.jsx(r,{children:"Item 4"}),e.jsx(r,{children:"Item 5"}),e.jsx(r,{children:"Item 6"})]})}},i={render:()=>e.jsx("div",{className:"space-y-6",children:["none","xs","sm","md","lg","xl","2xl"].map(t=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h4",{className:"text-sm font-medium text-gray-700",children:["Gap: ",t]}),e.jsxs(n,{gap:t,className:"p-3 border border-gray-200 rounded",children:[e.jsx(r,{children:"A"}),e.jsx(r,{children:"B"}),e.jsx(r,{children:"C"})]})]},t))})},c={render:()=>e.jsx("div",{className:"space-y-6",children:["start","end","center","baseline","stretch"].map(t=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h4",{className:"text-sm font-medium text-gray-700",children:["Align: ",t]}),e.jsxs(n,{align:t,gap:"md",className:"h-20 p-3 border border-gray-200 rounded",children:[e.jsx(r,{children:"Item 1"}),e.jsx("div",{className:"bg-red-100 border border-red-300 rounded px-3 py-1 text-xs font-medium text-red-800",children:"Tall Item"}),e.jsx(r,{children:"Item 3"})]})]},t))})},m={render:()=>e.jsxs(n,{justify:"between",align:"center",className:"w-full p-4 bg-white border-b border-gray-200",children:[e.jsxs(n,{align:"center",gap:"md",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold",children:"L"}),e.jsx("span",{className:"font-semibold text-gray-900",children:"Logo"})]}),e.jsxs(n,{gap:"sm",children:[e.jsx("button",{className:"px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded",children:"Home"}),e.jsx("button",{className:"px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded",children:"About"}),e.jsx("button",{className:"px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded",children:"Contact"})]}),e.jsxs(n,{gap:"sm",children:[e.jsx("button",{className:"px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Sign In"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Sign Up"})]})]}),parameters:{docs:{description:{story:"Example of using Flex for a navigation bar layout with logo, menu items, and action buttons."}}}},x={render:()=>e.jsxs(n,{direction:"col",gap:"md",className:"w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:[e.jsxs(n,{justify:"between",align:"start",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Product Card"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Premium subscription"})]}),e.jsx("span",{className:"text-xl font-bold text-green-600",children:"$29/mo"})]}),e.jsx("div",{className:"text-sm text-gray-700",children:"Get access to all premium features including advanced analytics, priority support, and custom integrations."}),e.jsxs(n,{gap:"sm",className:"pt-4 border-t border-gray-100",children:[e.jsx("button",{className:"flex-1 px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Learn More"}),e.jsx("button",{className:"flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Subscribe"})]})]}),parameters:{docs:{description:{story:"Example of using Flex for a card layout with header, content, and actions."}}}};var g,h,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,f,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    direction: 'col',
    gap: 'md',
    children: <>
        <FlexItem>First Item</FlexItem>
        <FlexItem>Second Item</FlexItem>
        <FlexItem>Third Item</FlexItem>
      </>
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var j,I,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    justify: 'center',
    align: 'center',
    gap: 'lg',
    className: 'h-64 border-2 border-dashed border-gray-300',
    children: <>
        <FlexItem>Centered</FlexItem>
        <FlexItem>Content</FlexItem>
      </>
  }
}`,...(F=(I=l.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var w,N,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    justify: 'between',
    align: 'center',
    className: 'w-full p-4 border border-gray-200 rounded',
    children: <>
        <FlexItem>Left</FlexItem>
        <FlexItem>Center</FlexItem>
        <FlexItem>Right</FlexItem>
      </>
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var C,A,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    wrap: 'wrap',
    gap: 'sm',
    className: 'w-64 p-4 border border-gray-200 rounded',
    children: <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
        <FlexItem>Item 4</FlexItem>
        <FlexItem>Item 5</FlexItem>
        <FlexItem>Item 6</FlexItem>
      </>
  }
}`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var _,q,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(gap => <div key={gap} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Gap: {gap}</h4>
          <Flex gap={gap} className="p-3 border border-gray-200 rounded">
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        </div>)}
    </div>
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var V,k,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {(['start', 'end', 'center', 'baseline', 'stretch'] as const).map(align => <div key={align} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Align: {align}</h4>
          <Flex align={align} gap="md" className="h-20 p-3 border border-gray-200 rounded">
            <FlexItem>Item 1</FlexItem>
            <div className="bg-red-100 border border-red-300 rounded px-3 py-1 text-xs font-medium text-red-800">
              Tall Item
            </div>
            <FlexItem>Item 3</FlexItem>
          </Flex>
        </div>)}
    </div>
}`,...(G=(k=c.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var W,R,T;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Flex justify="between" align="center" className="w-full p-4 bg-white border-b border-gray-200">
      <Flex align="center" gap="md">
        <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold">
          L
        </div>
        <span className="font-semibold text-gray-900">Logo</span>
      </Flex>
      
      <Flex gap="sm">
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded">
          Home
        </button>
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded">
          About
        </button>
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded">
          Contact
        </button>
      </Flex>
      
      <Flex gap="sm">
        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
          Sign In
        </button>
        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign Up
        </button>
      </Flex>
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using Flex for a navigation bar layout with logo, menu items, and action buttons.'
      }
    }
  }
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var P,B,D;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Flex direction="col" gap="md" className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <Flex justify="between" align="start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Product Card</h3>
          <p className="text-sm text-gray-500">Premium subscription</p>
        </div>
        <span className="text-xl font-bold text-green-600">$29/mo</span>
      </Flex>
      
      <div className="text-sm text-gray-700">
        Get access to all premium features including advanced analytics, priority support, and custom integrations.
      </div>
      
      <Flex gap="sm" className="pt-4 border-t border-gray-100">
        <button className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
          Learn More
        </button>
        <button className="flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
          Subscribe
        </button>
      </Flex>
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using Flex for a card layout with header, content, and actions.'
      }
    }
  }
}`,...(D=(B=x.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const oe=["Default","Column","CenterContent","SpaceBetween","WithWrap","ResponsiveGaps","AlignmentOptions","NavigationExample","CardLayout"];export{c as AlignmentOptions,x as CardLayout,l as CenterContent,s as Column,a as Default,m as NavigationExample,i as ResponsiveGaps,o as SpaceBetween,d as WithWrap,oe as __namedExportsOrder,le as default};
