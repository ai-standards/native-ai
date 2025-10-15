import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{c as Q}from"./cn-BaF2GUMg.js";import"./index-DHZDe_v1.js";import"./_commonjsHelpers-BosuxZz1.js";const X={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},Y={nowrap:"flex-nowrap",wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse"},Z={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},ee={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},se={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-12"},n=({direction:r="row",wrap:p="nowrap",justify:B="start",align:O="stretch",gap:$="none",grow:H=!1,shrink:x=!0,inline:M=!1,className:z,children:J,...K})=>e.jsxDEV("div",{className:Q(M?"inline-flex":"flex",X[r],Y[p],Z[B],ee[O],se[$],H&&"flex-grow",x&&"flex-shrink",!x&&"flex-shrink-0",z),...K,children:J},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.tsx",lineNumber:70,columnNumber:5},void 0);try{n.displayName="Flex",n.__docgenInfo={description:"",displayName:"Flex",props:{direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"col"'},{value:'"col-reverse"'}]}},wrap:{defaultValue:{value:"nowrap"},description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},align:{defaultValue:{value:"stretch"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'},{value:'"stretch"'}]}},gap:{defaultValue:{value:"none"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},grow:{defaultValue:{value:"false"},description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:{value:"true"},description:"",name:"shrink",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Surface/Flex",component:n,parameters:{layout:"centered",docs:{description:{component:"A flexible container component that provides a clean API for CSS Flexbox properties. Simplifies common flexbox patterns with semantic props."}}},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","row-reverse","col","col-reverse"],description:"Sets the flex-direction property"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"Sets the flex-wrap property"},justify:{control:"select",options:["start","end","center","between","around","evenly"],description:"Sets the justify-content property"},align:{control:"select",options:["start","end","center","baseline","stretch"],description:"Sets the align-items property"},gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"],description:"Sets the gap between flex items"},grow:{control:"boolean",description:"Whether the container should grow to fill available space"},shrink:{control:"boolean",description:"Whether the container should shrink when space is limited"},inline:{control:"boolean",description:"Renders as inline-flex instead of flex"},children:{control:!1,description:"The content to display inside the flex container"}}},s=({children:r,color:p="bg-blue-100"})=>e.jsxDEV("div",{className:`${p} border border-blue-300 rounded px-3 py-2 text-sm font-medium text-blue-800`,children:r},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:66,columnNumber:3},void 0),t={args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"Item 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:75,columnNumber:9},void 0),e.jsxDEV(s,{children:"Item 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:76,columnNumber:9},void 0),e.jsxDEV(s,{children:"Item 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:77,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:74,columnNumber:7},void 0)}},a={args:{direction:"col",gap:"md",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"First Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:89,columnNumber:9},void 0),e.jsxDEV(s,{children:"Second Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:90,columnNumber:9},void 0),e.jsxDEV(s,{children:"Third Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:91,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:88,columnNumber:7},void 0)}},o={args:{justify:"center",align:"center",gap:"lg",className:"h-64 border-2 border-dashed border-gray-300",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"Centered"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:105,columnNumber:9},void 0),e.jsxDEV(s,{children:"Content"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:106,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:104,columnNumber:7},void 0)}},l={args:{justify:"between",align:"center",className:"w-full p-4 border border-gray-200 rounded",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"Left"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:119,columnNumber:9},void 0),e.jsxDEV(s,{children:"Center"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:120,columnNumber:9},void 0),e.jsxDEV(s,{children:"Right"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:121,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:118,columnNumber:7},void 0)}},i={args:{wrap:"wrap",gap:"sm",className:"w-64 p-4 border border-gray-200 rounded",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{children:"Item 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:134,columnNumber:9},void 0),e.jsxDEV(s,{children:"Item 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:135,columnNumber:9},void 0),e.jsxDEV(s,{children:"Item 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:136,columnNumber:9},void 0),e.jsxDEV(s,{children:"Item 4"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:137,columnNumber:9},void 0),e.jsxDEV(s,{children:"Item 5"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:138,columnNumber:9},void 0),e.jsxDEV(s,{children:"Item 6"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:139,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:133,columnNumber:7},void 0)}},c={render:()=>e.jsxDEV("div",{className:"space-y-6",children:["none","xs","sm","md","lg","xl","2xl"].map(r=>e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("h4",{className:"text-sm font-medium text-gray-700",children:["Gap: ",r]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:150,columnNumber:11},void 0),e.jsxDEV(n,{gap:r,className:"p-3 border border-gray-200 rounded",children:[e.jsxDEV(s,{children:"A"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:152,columnNumber:13},void 0),e.jsxDEV(s,{children:"B"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:153,columnNumber:13},void 0),e.jsxDEV(s,{children:"C"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:154,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:151,columnNumber:11},void 0)]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:149,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:147,columnNumber:5},void 0)},m={render:()=>e.jsxDEV("div",{className:"space-y-6",children:["start","end","center","baseline","stretch"].map(r=>e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("h4",{className:"text-sm font-medium text-gray-700",children:["Align: ",r]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:167,columnNumber:11},void 0),e.jsxDEV(n,{align:r,gap:"md",className:"h-20 p-3 border border-gray-200 rounded",children:[e.jsxDEV(s,{children:"Item 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:169,columnNumber:13},void 0),e.jsxDEV("div",{className:"bg-red-100 border border-red-300 rounded px-3 py-1 text-xs font-medium text-red-800",children:"Tall Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:170,columnNumber:13},void 0),e.jsxDEV(s,{children:"Item 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:173,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:168,columnNumber:11},void 0)]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:166,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:164,columnNumber:5},void 0)},u={render:()=>e.jsxDEV(n,{justify:"between",align:"center",className:"w-full p-4 bg-white border-b border-gray-200",children:[e.jsxDEV(n,{align:"center",gap:"md",children:[e.jsxDEV("div",{className:"w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold",children:"L"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:185,columnNumber:9},void 0),e.jsxDEV("span",{className:"font-semibold text-gray-900",children:"Logo"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:188,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:184,columnNumber:7},void 0),e.jsxDEV(n,{gap:"sm",children:[e.jsxDEV("button",{className:"px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded",children:"Home"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:192,columnNumber:9},void 0),e.jsxDEV("button",{className:"px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded",children:"About"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:195,columnNumber:9},void 0),e.jsxDEV("button",{className:"px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded",children:"Contact"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:198,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:191,columnNumber:7},void 0),e.jsxDEV(n,{gap:"sm",children:[e.jsxDEV("button",{className:"px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Sign In"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:204,columnNumber:9},void 0),e.jsxDEV("button",{className:"px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Sign Up"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:207,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:203,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:183,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using Flex for a navigation bar layout with logo, menu items, and action buttons."}}}},d={render:()=>e.jsxDEV(n,{direction:"col",gap:"md",className:"w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:[e.jsxDEV(n,{justify:"between",align:"start",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold text-gray-900",children:"Product Card"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:227,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-sm text-gray-500",children:"Premium subscription"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:228,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:226,columnNumber:9},void 0),e.jsxDEV("span",{className:"text-xl font-bold text-green-600",children:"$29/mo"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:230,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:225,columnNumber:7},void 0),e.jsxDEV("div",{className:"text-sm text-gray-700",children:"Get access to all premium features including advanced analytics, priority support, and custom integrations."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:233,columnNumber:7},void 0),e.jsxDEV(n,{gap:"sm",className:"pt-4 border-t border-gray-100",children:[e.jsxDEV("button",{className:"flex-1 px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Learn More"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:238,columnNumber:9},void 0),e.jsxDEV("button",{className:"flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Subscribe"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:241,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:237,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/flex/Flex.stories.tsx",lineNumber:224,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using Flex for a card layout with header, content, and actions."}}}};var f,b,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var N,v,y;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    direction: 'col',
    gap: 'md',
    children: <>
        <FlexItem>First Item</FlexItem>
        <FlexItem>Second Item</FlexItem>
        <FlexItem>Third Item</FlexItem>
      </>
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,j,F;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(F=(j=o.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var k,D,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var w,E,V;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(E=i.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var U,S,C;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,L,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var q,G,W;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(G=u.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var R,T,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(T=d.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const le=["Default","Column","CenterContent","SpaceBetween","WithWrap","ResponsiveGaps","AlignmentOptions","NavigationExample","CardLayout"];export{m as AlignmentOptions,d as CardLayout,o as CenterContent,a as Column,t as Default,u as NavigationExample,c as ResponsiveGaps,l as SpaceBetween,i as WithWrap,le as __namedExportsOrder,oe as default};
