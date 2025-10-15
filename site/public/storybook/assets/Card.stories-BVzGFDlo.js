import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as b}from"./cn-BaF2GUMg.js";import{B as v}from"./Button-LTpUiv5Y.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const Y={default:"bg-white border border-gray-200 shadow-sm",outlined:"bg-white border-2 border-gray-300",elevated:"bg-white shadow-lg border-0",flat:"bg-gray-50 border-0 shadow-none"},Z={none:"p-0",sm:"p-4",md:"p-6",lg:"p-8"},f=({variant:a="default",padding:r="md",className:s,children:U,...X})=>e.jsx("div",{className:b("rounded-lg overflow-hidden",Y[a],Z[r],s),...X,children:U}),u=({className:a,children:r,...s})=>e.jsx("div",{className:b("border-b border-gray-200 pb-4 mb-4",a),...s,children:r}),n=({className:a,children:r,...s})=>e.jsx("div",{className:b("text-gray-700",a),...s,children:r}),x=({className:a,children:r,...s})=>e.jsx("div",{className:b("border-t border-gray-200 pt-4 mt-4 flex items-center justify-between",a),...s,children:r});try{f.displayName="Card",f.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"flat"'},{value:'"outlined"'},{value:'"elevated"'}]}},padding:{defaultValue:{value:"md"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}}}}}catch{}try{u.displayName="CardHeader",u.__docgenInfo={description:"",displayName:"CardHeader",props:{}}}catch{}try{n.displayName="CardContent",n.__docgenInfo={description:"",displayName:"CardContent",props:{}}}catch{}try{x.displayName="CardFooter",x.__docgenInfo={description:"",displayName:"CardFooter",props:{}}}catch{}const te={title:"Surface/Card",component:f,parameters:{layout:"centered",docs:{description:{component:"A flexible card component with multiple variants, padding options, and composable sub-components. Built with Tailwind CSS for consistent styling."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated","flat"],description:"The visual style variant of the card"},padding:{control:"select",options:["none","sm","md","lg"],description:"The internal padding of the card"},children:{control:!1,description:"The content to display inside the card"}}},t={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Card Title"}),e.jsx("p",{className:"text-gray-600",children:"This is a basic card with default styling."})]})}},d={args:{variant:"outlined",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Outlined Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a thicker border and no shadow."})]})}},o={args:{variant:"elevated",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Elevated Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a prominent shadow for depth."})]})}},i={args:{variant:"flat",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Flat Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has no shadow or border for a minimal look."})]})}},c={args:{padding:"sm",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Small Padding"}),e.jsx("p",{className:"text-gray-600",children:"This card has reduced internal padding."})]})}},l={args:{padding:"lg",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Large Padding"}),e.jsx("p",{className:"text-gray-600",children:"This card has increased internal padding for more breathing room."})]})}},m={args:{padding:"none",children:e.jsx("img",{src:"https://picsum.photos/200/300",alt:"Placeholder",className:"w-full h-48 object-cover"})}},p={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Product Card"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Featured item"})]}),e.jsxs(n,{children:[e.jsx("p",{className:"text-gray-700 mb-4",children:"This is an example of a composed card using CardHeader, CardContent, and CardFooter components."}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Price:"}),e.jsx("span",{children:"$29.99"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Status:"}),e.jsx("span",{className:"text-green-600",children:"In Stock"})]})]})]}),e.jsxs(x,{children:[e.jsx(v,{variant:"outline",size:"sm",children:"Learn More"}),e.jsx(v,{size:"sm",children:"Add to Cart"})]})]})}},h={args:{padding:"none",children:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:"https://picsum.photos/200/300",alt:"Card image",className:"w-full h-48 object-cover"}),e.jsxs("div",{className:"p-6",children:[e.jsx(u,{className:"p-0 border-0 mb-4",children:e.jsx("h3",{className:"text-lg font-semibold",children:"Image Card"})}),e.jsx(n,{className:"p-0",children:e.jsx("p",{className:"text-gray-600",children:"A card with an image header and content below."})})]})]})}},g={args:{variant:"outlined",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",children:e.jsx("svg",{className:"w-6 h-6 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Create New Item"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Click the button below to create a new item in your workspace."})]})}),e.jsx(x,{className:"justify-center",children:e.jsx(v,{children:"Create Item"})})]})}};var N,C,j;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is a basic card with default styling.</p>
      </div>
  }
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var y,w,_;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600">This card has a thicker border and no shadow.</p>
      </div>
  }
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var S,T,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">This card has a prominent shadow for depth.</p>
      </div>
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var F,P,I;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'flat',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Flat Card</h3>
        <p className="text-gray-600">This card has no shadow or border for a minimal look.</p>
      </div>
  }
}`,...(I=(P=i.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var B,H,L;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    padding: 'sm',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Small Padding</h3>
        <p className="text-gray-600">This card has reduced internal padding.</p>
      </div>
  }
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,E,O;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    padding: 'lg',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Large Padding</h3>
        <p className="text-gray-600">This card has increased internal padding for more breathing room.</p>
      </div>
  }
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var z,M,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: <img src="https://picsum.photos/200/300" alt="Placeholder" className="w-full h-48 object-cover" />
  }
}`,...(V=(M=m.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var q,D,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">Product Card</h2>
          <p className="text-sm text-gray-500">Featured item</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            This is an example of a composed card using CardHeader, CardContent, and CardFooter components.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Price:</span>
              <span>$29.99</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Status:</span>
              <span className="text-green-600">In Stock</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">Learn More</Button>
          <Button size="sm">Add to Cart</Button>
        </CardFooter>
      </>
  }
}`,...(W=(D=p.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var $,R,G;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: <>
        <img src="https://picsum.photos/200/300" alt="Card image" className="w-full h-48 object-cover" />
        <div className="p-6">
          <CardHeader className="p-0 border-0 mb-4">
            <h3 className="text-lg font-semibold">Image Card</h3>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-gray-600">
              A card with an image header and content below.
            </p>
          </CardContent>
        </div>
      </>
  }
}`,...(G=(R=h.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: <>
        <CardContent>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Create New Item</h3>
            <p className="text-gray-600 mb-4">
              Click the button below to create a new item in your workspace.
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button>Create Item</Button>
        </CardFooter>
      </>
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const de=["Default","Outlined","Elevated","Flat","SmallPadding","LargePadding","NoPadding","ComposedCard","ImageCard","ActionCard"];export{g as ActionCard,p as ComposedCard,t as Default,o as Elevated,i as Flat,h as ImageCard,l as LargePadding,m as NoPadding,d as Outlined,c as SmallPadding,de as __namedExportsOrder,te as default};
