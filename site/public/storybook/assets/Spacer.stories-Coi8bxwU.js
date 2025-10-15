import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as Y}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const Z={xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px","2xl":"48px","3xl":"64px","4xl":"96px"},s=({size:r="md",axis:n="both",flex:G=!1,className:J,style:K,...Q})=>{const g=Z[r],X={...n==="horizontal"||n==="both"?{width:g}:{},...n==="vertical"||n==="both"?{height:g}:{},...K};return e.jsx("div",{className:Y("shrink-0",G&&"flex-1",J),style:X,...Q})};try{s.displayName="Spacer",s.__docgenInfo={description:"",displayName:"Spacer",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'}]}},axis:{defaultValue:{value:"both"},description:"",name:"axis",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},flex:{defaultValue:{value:"false"},description:"",name:"flex",required:!1,type:{name:"boolean"}}}}}catch{}const te={title:"Surface/Spacer",component:s,parameters:{layout:"centered",docs:{description:{component:"A flexible spacing component that creates consistent whitespace between elements. Can be used for fixed spacing or flexible space distribution."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl"],description:"The size of the spacer"},axis:{control:"select",options:["horizontal","vertical","both"],description:"Which axis/axes to apply spacing to"},flex:{control:"boolean",description:"Whether the spacer should grow to fill available space"}}},t=({children:r,direction:n="row"})=>e.jsx("div",{className:`flex ${n==="column"?"flex-col":"flex-row"} items-center p-4 border-2 border-dashed border-blue-300 bg-blue-50 rounded`,children:r}),a=({children:r})=>e.jsx("div",{className:"px-3 py-2 bg-gray-200 border border-gray-400 rounded text-sm font-medium",children:r}),o={render:()=>e.jsxs(t,{children:[e.jsx(a,{children:"Item 1"}),e.jsx(s,{}),e.jsx(a,{children:"Item 2"})]})},i={render:()=>e.jsx("div",{className:"space-y-6",children:["xs","sm","md","lg","xl","2xl","3xl","4xl"].map(r=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h4",{className:"text-sm font-medium text-gray-700",children:["Size: ",r]}),e.jsxs(t,{children:[e.jsx(a,{children:"Left"}),e.jsx(s,{size:r,axis:"horizontal"}),e.jsx(a,{children:"Right"})]})]},r))})},l={render:()=>e.jsxs(t,{direction:"column",children:[e.jsx(a,{children:"Top Item"}),e.jsx(s,{size:"lg",axis:"vertical"}),e.jsx(a,{children:"Bottom Item"})]})},c={render:()=>e.jsxs(t,{children:[e.jsx(a,{children:"Left Item"}),e.jsx(s,{size:"xl",axis:"horizontal"}),e.jsx(a,{children:"Right Item"})]})},d={render:()=>e.jsxs(t,{children:[e.jsx(a,{children:"Left"}),e.jsx(s,{flex:!0}),e.jsx(a,{children:"Right"})]}),parameters:{docs:{description:{story:"Use flex prop to create a spacer that grows to fill all available space, pushing items to opposite ends."}}}},m={render:()=>e.jsx("div",{className:"w-full max-w-md bg-white border border-gray-200 rounded-lg p-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold",children:"L"}),e.jsx(s,{size:"sm",axis:"horizontal"}),e.jsx("span",{className:"font-semibold text-gray-900",children:"Brand Name"}),e.jsx(s,{flex:!0}),e.jsx("button",{className:"px-3 py-1 text-sm text-gray-600 hover:text-gray-900",children:"Menu"})]})}),parameters:{docs:{description:{story:"Example of using spacers in a navigation bar - fixed spacing after logo, flexible spacing before menu."}}}},x={render:()=>e.jsx("div",{className:"w-80 p-6 bg-white border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Name"}),e.jsx(s,{size:"xs",axis:"vertical"}),e.jsx("input",{type:"text",className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter name"}),e.jsx(s,{size:"lg",axis:"vertical"}),e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Email"}),e.jsx(s,{size:"xs",axis:"vertical"}),e.jsx("input",{type:"email",className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter email"}),e.jsx(s,{size:"xl",axis:"vertical"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{className:"px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"}),e.jsx(s,{size:"sm",axis:"horizontal"}),e.jsx("button",{className:"px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Submit"})]})]})}),parameters:{docs:{description:{story:"Example of using spacers in a form for consistent vertical and horizontal spacing."}}}},p={render:()=>e.jsxs("div",{className:"w-72 bg-white border border-gray-200 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Product Card"}),e.jsx(s,{size:"xs",axis:"vertical"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Description of the product goes here."})]}),e.jsx("div",{className:"px-4 pb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-xl font-bold text-green-600",children:"$29.99"}),e.jsx(s,{flex:!0}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{className:"px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Details"}),e.jsx(s,{size:"sm",axis:"horizontal"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Add to Cart"})]})]})})]}),parameters:{docs:{description:{story:"Example of using spacers in a card layout for price/actions alignment."}}}},u={render:()=>e.jsx("div",{className:"w-full max-w-2xl bg-white border border-gray-200 rounded-lg p-3",children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{className:"p-2 hover:bg-gray-100 rounded",children:e.jsx("span",{className:"text-sm"})}),e.jsx(s,{size:"xs",axis:"horizontal"}),e.jsx("button",{className:"p-2 hover:bg-gray-100 rounded",children:e.jsx("span",{className:"text-sm"})}),e.jsx(s,{size:"xs",axis:"horizontal"}),e.jsx("button",{className:"p-2 hover:bg-gray-100 rounded",children:e.jsx("span",{className:"text-sm",children:"️"})})]}),e.jsx(s,{size:"md",axis:"horizontal"}),e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("span",{className:"text-sm text-gray-600",children:"document.txt"})}),e.jsx(s,{size:"md",axis:"horizontal"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"100%"}),e.jsx(s,{size:"sm",axis:"horizontal"}),e.jsx("button",{className:"px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50",children:"Settings"})]})]})}),parameters:{docs:{description:{story:"Example of using spacers in a toolbar layout with grouped actions and flexible center content."}}}},h={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Horizontal Axis (width only)"}),e.jsxs(t,{children:[e.jsx(a,{children:"A"}),e.jsx(s,{size:"lg",axis:"horizontal"}),e.jsx(a,{children:"B"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Vertical Axis (height only)"}),e.jsxs(t,{direction:"column",children:[e.jsx(a,{children:"A"}),e.jsx(s,{size:"lg",axis:"vertical"}),e.jsx(a,{children:"B"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Both Axes (width and height)"}),e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx(a,{children:"Before"}),e.jsx(s,{size:"lg",axis:"both",className:"bg-yellow-100 border border-yellow-300 rounded"}),e.jsx(a,{children:"After"})]})]})]}),parameters:{docs:{description:{story:"Comparison of different axis options showing how spacing is applied."}}}};var b,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <DemoBox>
      <DemoItem>Item 1</DemoItem>
      <Spacer />
      <DemoItem>Item 2</DemoItem>
    </DemoBox>
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,N,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => <div key={size} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Size: {size}</h4>
          <DemoBox>
            <DemoItem>Left</DemoItem>
            <Spacer size={size} axis="horizontal" />
            <DemoItem>Right</DemoItem>
          </DemoBox>
        </div>)}
    </div>
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,S,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <DemoBox direction="column">
      <DemoItem>Top Item</DemoItem>
      <Spacer size="lg" axis="vertical" />
      <DemoItem>Bottom Item</DemoItem>
    </DemoBox>
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var w,I,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <DemoBox>
      <DemoItem>Left Item</DemoItem>
      <Spacer size="xl" axis="horizontal" />
      <DemoItem>Right Item</DemoItem>
    </DemoBox>
}`,...(B=(I=c.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var A,E,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <DemoBox>
      <DemoItem>Left</DemoItem>
      <Spacer flex />
      <DemoItem>Right</DemoItem>
    </DemoBox>,
  parameters: {
    docs: {
      description: {
        story: 'Use flex prop to create a spacer that grows to fill all available space, pushing items to opposite ends.'
      }
    }
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var L,_,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold">
          L
        </div>
        <Spacer size="sm" axis="horizontal" />
        <span className="font-semibold text-gray-900">Brand Name</span>
        <Spacer flex />
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
          Menu
        </button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a navigation bar - fixed spacing after logo, flexible spacing before menu.'
      }
    }
  }
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var F,V,T;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="w-80 p-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <Spacer size="xs" axis="vertical" />
        <input type="text" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter name" />
        
        <Spacer size="lg" axis="vertical" />
        
        <label className="text-sm font-medium text-gray-700">Email</label>
        <Spacer size="xs" axis="vertical" />
        <input type="email" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter email" />
        
        <Spacer size="xl" axis="vertical" />
        
        <div className="flex">
          <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
            Cancel
          </button>
          <Spacer size="sm" axis="horizontal" />
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a form for consistent vertical and horizontal spacing.'
      }
    }
  }
}`,...(T=(V=x.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var H,q,$;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">Product Card</h3>
        <Spacer size="xs" axis="vertical" />
        <p className="text-sm text-gray-600">Description of the product goes here.</p>
      </div>
      
      <div className="px-4 pb-4">
        <div className="flex items-center">
          <span className="text-xl font-bold text-green-600">$29.99</span>
          <Spacer flex />
          <div className="flex">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
              Details
            </button>
            <Spacer size="sm" axis="horizontal" />
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a card layout for price/actions alignment.'
      }
    }
  }
}`,...($=(q=p.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var k,M,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg p-3">
      <div className="flex items-center">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm"></span>
          </button>
          <Spacer size="xs" axis="horizontal" />
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm"></span>
          </button>
          <Spacer size="xs" axis="horizontal" />
          <button className="p-2 hover:bg-gray-100 rounded">
            <span className="text-sm">️</span>
          </button>
        </div>
        
        <Spacer size="md" axis="horizontal" />
        
        <div className="flex-1 flex items-center justify-center">
          <span className="text-sm text-gray-600">document.txt</span>
        </div>
        
        <Spacer size="md" axis="horizontal" />
        
        <div className="flex items-center">
          <span className="text-xs text-gray-500">100%</span>
          <Spacer size="sm" axis="horizontal" />
          <button className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
            Settings
          </button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using spacers in a toolbar layout with grouped actions and flexible center content.'
      }
    }
  }
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,W,O;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Horizontal Axis (width only)</h4>
        <DemoBox>
          <DemoItem>A</DemoItem>
          <Spacer size="lg" axis="horizontal" />
          <DemoItem>B</DemoItem>
        </DemoBox>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Vertical Axis (height only)</h4>
        <DemoBox direction="column">
          <DemoItem>A</DemoItem>
          <Spacer size="lg" axis="vertical" />
          <DemoItem>B</DemoItem>
        </DemoBox>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Both Axes (width and height)</h4>
        <div className="flex items-start space-x-4">
          <DemoItem>Before</DemoItem>
          <Spacer size="lg" axis="both" className="bg-yellow-100 border border-yellow-300 rounded" />
          <DemoItem>After</DemoItem>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different axis options showing how spacing is applied.'
      }
    }
  }
}`,...(O=(W=h.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const ne=["Default","FixedSizes","VerticalSpacing","HorizontalSpacing","FlexSpacer","NavigationLayout","FormLayout","CardActions","ResponsiveToolbar","AxisComparison"];export{h as AxisComparison,p as CardActions,o as Default,i as FixedSizes,d as FlexSpacer,x as FormLayout,c as HorizontalSpacing,m as NavigationLayout,u as ResponsiveToolbar,l as VerticalSpacing,ne as __namedExportsOrder,te as default};
