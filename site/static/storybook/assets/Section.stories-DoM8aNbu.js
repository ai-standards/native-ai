import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as x}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const B={default:"bg-white",primary:"bg-blue-50",secondary:"bg-gray-50",accent:"bg-purple-50",muted:"bg-gray-100"},W={none:"py-0",sm:"py-4",md:"py-8",lg:"py-12",xl:"py-16"},a=({variant:t="default",spacing:n="md",fullHeight:s=!1,className:E,children:L,...z})=>e.jsx("section",{className:x("w-full",B[t],W[n],s&&"min-h-screen",E),...z,children:L}),m=({className:t,children:n,...s})=>e.jsx("div",{className:x("mb-6 border-b border-gray-200 pb-4",t),...s,children:n}),p=({className:t,children:n,...s})=>e.jsx("div",{className:x("flex-1",t),...s,children:n}),u=({className:t,children:n,...s})=>e.jsx("div",{className:x("mt-6 border-t border-gray-200 pt-4",t),...s,children:n});try{a.displayName="Section",a.__docgenInfo={description:"",displayName:"Section",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"default"'},{value:'"muted"'},{value:'"accent"'}]}},spacing:{defaultValue:{value:"md"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"xl"'}]}},fullHeight:{defaultValue:{value:"false"},description:"",name:"fullHeight",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="SectionHeader",m.__docgenInfo={description:"",displayName:"SectionHeader",props:{}}}catch{}try{p.displayName="SectionContent",p.__docgenInfo={description:"",displayName:"SectionContent",props:{}}}catch{}try{u.displayName="SectionFooter",u.__docgenInfo={description:"",displayName:"SectionFooter",props:{}}}catch{}const M={title:"Surface/Section",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"A versatile section component for organizing page content with different variants, spacing options, and composable sub-components. Built with Tailwind CSS for consistent styling."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary","accent","muted"],description:"The visual style variant of the section"},spacing:{control:"select",options:["none","sm","md","lg","xl"],description:"The vertical padding of the section"},fullHeight:{control:"boolean",description:"Whether the section should take full viewport height"},children:{control:!1,description:"The content to display inside the section"}}},i={args:{children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Section Title"}),e.jsx("p",{className:"text-gray-600",children:"This is a default section with standard spacing and styling."})]})}},r={render:()=>e.jsx("div",{className:"space-y-0",children:["default","primary","secondary","accent","muted"].map(t=>e.jsx(a,{variant:t,spacing:"md",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("h3",{className:"text-xl font-semibold mb-2",children:["Variant: ",t]}),e.jsxs("p",{className:"text-gray-600",children:["Section with ",t," variant styling"]})]})},t))})},o={render:()=>e.jsx("div",{className:"space-y-0",children:["none","sm","md","lg","xl"].map(t=>e.jsx(a,{variant:"secondary",spacing:t,children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("h3",{className:"text-lg font-semibold",children:["Spacing: ",t]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Section with ",t," vertical spacing"]})]})},t))})},c={args:{fullHeight:!0,variant:"primary",spacing:"xl",children:e.jsx("div",{className:"container mx-auto px-4 flex items-center justify-center h-full",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Full Height Section"}),e.jsx("p",{className:"text-lg text-gray-600",children:"This section takes the full viewport height"})]})})}},l={args:{variant:"default",spacing:"lg",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs(m,{children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Section with Header and Footer"}),e.jsx("p",{className:"text-gray-600 mt-2",children:"This section demonstrates the composable components"})]}),e.jsx(p,{children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Content Block 1"}),e.jsx("p",{className:"text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Content Block 2"}),e.jsx("p",{className:"text-gray-600",children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}),e.jsx(u,{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Last updated: March 15, 2024"}),e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Learn More"})]})})]})}},d={render:()=>e.jsxs("div",{children:[e.jsx(a,{variant:"primary",spacing:"xl",fullHeight:!0,children:e.jsx("div",{className:"container mx-auto px-4 flex items-center justify-center h-full",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:"Welcome to Our Product"}),e.jsx("p",{className:"text-xl text-gray-600 mb-8 max-w-2xl mx-auto",children:"Discover amazing features and capabilities that will transform your workflow"}),e.jsx("button",{className:"px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors",children:"Get Started"})]})})}),e.jsx(a,{variant:"default",spacing:"xl",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs(m,{children:[e.jsx("h2",{className:"text-3xl font-bold text-center",children:"Features"}),e.jsx("p",{className:"text-gray-600 text-center mt-4 max-w-2xl mx-auto",children:"Everything you need to succeed, built with modern technology"})]}),e.jsx(p,{children:e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[1,2,3].map(t=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",children:e.jsx("span",{className:"text-2xl"})}),e.jsxs("h3",{className:"text-xl font-semibold mb-2",children:["Feature ",t]}),e.jsx("p",{className:"text-gray-600",children:"Amazing functionality that helps you achieve your goals faster and more efficiently."})]},t))})})]})}),e.jsx(a,{variant:"accent",spacing:"lg",children:e.jsxs("div",{className:"container mx-auto px-4 text-center",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Get Started?"}),e.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Join thousands of satisfied customers today"}),e.jsx("button",{className:"px-8 py-4 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700 transition-colors",children:"Start Free Trial"})]})})]})};var h,g,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Section Title</h2>
        <p className="text-gray-600">
          This is a default section with standard spacing and styling.
        </p>
      </div>
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,b,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-0">
      {(['default', 'primary', 'secondary', 'accent', 'muted'] as const).map(variant => <Section key={variant} variant={variant} spacing="md">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold mb-2">Variant: {variant}</h3>
            <p className="text-gray-600">Section with {variant} variant styling</p>
          </div>
        </Section>)}
    </div>
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var N,j,S;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-0">
      {(['none', 'sm', 'md', 'lg', 'xl'] as const).map(spacing => <Section key={spacing} variant="secondary" spacing={spacing}>
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-semibold">Spacing: {spacing}</h3>
            <p className="text-sm text-gray-600">Section with {spacing} vertical spacing</p>
          </div>
        </Section>)}
    </div>
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,_,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    fullHeight: true,
    variant: 'primary',
    spacing: 'xl',
    children: <div className="container mx-auto px-4 flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Full Height Section</h2>
          <p className="text-lg text-gray-600">
            This section takes the full viewport height
          </p>
        </div>
      </div>
  }
}`,...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var F,C,T;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    spacing: 'lg',
    children: <div className="container mx-auto px-4">
        <SectionHeader>
          <h2 className="text-2xl font-bold">Section with Header and Footer</h2>
          <p className="text-gray-600 mt-2">This section demonstrates the composable components</p>
        </SectionHeader>
        
        <SectionContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">Content Block 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">Content Block 2</h3>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </SectionContent>
        
        <SectionFooter>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Last updated: March 15, 2024</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </SectionFooter>
      </div>
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var k,q,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div>
      {/* Hero Section */}
      <Section variant="primary" spacing="xl" fullHeight>
        <div className="container mx-auto px-4 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Product</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover amazing features and capabilities that will transform your workflow
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <h2 className="text-3xl font-bold text-center">Features</h2>
            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Everything you need to succeed, built with modern technology
            </p>
          </SectionHeader>
          
          <SectionContent>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl"></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
                  <p className="text-gray-600">
                    Amazing functionality that helps you achieve your goals faster and more efficiently.
                  </p>
                </div>)}
            </div>
          </SectionContent>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="accent" spacing="lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied customers today
          </p>
          <button className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700 transition-colors">
            Start Free Trial
          </button>
        </div>
      </Section>
    </div>
}`,...(V=(q=d.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const P=["Default","Variants","Spacing","FullHeight","WithComposableComponents","PageExample"];export{i as Default,c as FullHeight,d as PageExample,o as Spacing,r as Variants,l as WithComposableComponents,P as __namedExportsOrder,M as default};
