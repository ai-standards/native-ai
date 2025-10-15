import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as I}from"./index-BwDkhjyp.js";import{c as b}from"./cn-BaF2GUMg.js";import{a as G}from"./Icon-DitzTbaY.js";import"./_commonjsHelpers-BosuxZz1.js";const H=I.createContext(null),U=()=>{const r=I.useContext(H);if(!r)throw new Error("useAccordion must be used within an Accordion component");return r},a=({type:r="single",defaultValue:c,value:t,onValueChange:o,collapsible:l=!0,variant:d="default",size:m="md",className:p,children:g,...L})=>{const N=r==="multiple",[z,J]=I.useState(()=>c?Array.isArray(c)?c:[c]:[]),C=t!==void 0,u=C?Array.isArray(t)?t:[t]:z,Y=h=>{let x;if(N?x=u.includes(h)?u.filter(w=>w!==h):[...u,h]:x=u.includes(h)&&l?[]:[h],C||J(x),o){const w=N?x:x[0]||"";o(w)}},B={default:"border border-gray-200 rounded-lg overflow-hidden",outlined:"border-2 border-gray-300 rounded-lg overflow-hidden",separated:"space-y-2"};return e.jsx(H.Provider,{value:{openItems:u,toggleItem:Y,multiple:N},children:e.jsx("div",{className:b(B[d],p),...L,children:g})})},n=({value:r,disabled:c=!1,className:t,children:o,...l})=>{const{openItems:d}=U(),m=d.includes(r);return e.jsx("div",{className:b("accordion-item",c&&"opacity-50 pointer-events-none",t),"data-state":m?"open":"closed","data-disabled":c,"data-value":r,...l,children:o})},i=({className:r,children:c,onClick:t,...o})=>{const{toggleItem:l}=U(),d=m=>{const p=m.currentTarget.closest("[data-value]"),g=p==null?void 0:p.getAttribute("data-value");g&&l(g),t==null||t(m)};return e.jsxs("button",{className:b("flex w-full items-center justify-between py-3 px-4 text-left","hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset","font-medium text-gray-900 transition-colors","border-b border-gray-200 last:border-b-0",r),onClick:d,...o,children:[e.jsx("span",{className:"flex-1",children:c}),e.jsx(G,{size:16,className:"text-gray-400 transition-transform duration-200 accordion-chevron"})]})},s=({className:r,children:c,...t})=>e.jsx("div",{className:b("overflow-hidden transition-all duration-200 ease-in-out","accordion-content",r),...t,children:e.jsx("div",{className:"p-4 pt-0",children:c})});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{type:{defaultValue:{value:"single"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"single"'}]}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | string[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string | string[]) => void)"}},collapsible:{defaultValue:{value:"true"},description:"",name:"collapsible",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"separated"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}try{n.displayName="AccordionItem",n.__docgenInfo={description:"",displayName:"AccordionItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="AccordionTrigger",i.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{}}}catch{}try{s.displayName="AccordionContent",s.__docgenInfo={description:"",displayName:"AccordionContent",props:{}}}catch{}const ne={title:"Surface/Accordion",component:a,parameters:{layout:"centered",docs:{description:{component:"Expandable content sections with single or multiple selection modes. Perfect for FAQs, settings panels, and progressive disclosure."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"],description:"Selection mode - single or multiple items can be open"},variant:{control:"select",options:["default","outlined","separated"],description:"Visual style variant"},collapsible:{control:"boolean",description:"Whether items can be collapsed in single mode"}}},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{value:"item-1",children:[e.jsx(i,{children:"What is React?"}),e.jsx(s,{children:e.jsx("p",{children:"React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."})})]}),e.jsxs(n,{value:"item-2",children:[e.jsx(i,{children:"How do I get started?"}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"To get started with React:"}),e.jsxs("ol",{className:"list-decimal list-inside space-y-1",children:[e.jsx("li",{children:"Install Node.js"}),e.jsxs("li",{children:["Create a new React app with ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"create-react-app"})]}),e.jsx("li",{children:"Start building components"})]})]})})]}),e.jsxs(n,{value:"item-3",children:[e.jsx(i,{children:"What are components?"}),e.jsx(s,{children:e.jsx("p",{children:"Components are independent, reusable pieces of UI. They accept inputs (called props) and return React elements that describe what should appear on the screen."})})]})]})}},v={args:{type:"multiple",children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{value:"features",children:[e.jsx(i,{children:"Features"}),e.jsx(s,{children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• Component-based architecture"}),e.jsx("li",{children:"• Virtual DOM for performance"}),e.jsx("li",{children:"• Declarative programming model"}),e.jsx("li",{children:"• Large ecosystem"})]})})]}),e.jsxs(n,{value:"benefits",children:[e.jsx(i,{children:"Benefits"}),e.jsx(s,{children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• Reusable components"}),e.jsx("li",{children:"• Easy to test"}),e.jsx("li",{children:"• Strong community"}),e.jsx("li",{children:"• Excellent tooling"})]})})]}),e.jsxs(n,{value:"use-cases",children:[e.jsx(i,{children:"Use Cases"}),e.jsxs(s,{children:[e.jsx("p",{children:"React is great for building:"}),e.jsxs("ul",{className:"mt-2 space-y-1",children:[e.jsx("li",{children:"• Single Page Applications (SPAs)"}),e.jsx("li",{children:"• Mobile apps with React Native"}),e.jsx("li",{children:"• Desktop apps with Electron"}),e.jsx("li",{children:"• Static sites with Next.js"})]})]})]})]})}},y={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Default Variant"}),e.jsx(a,{variant:"default",children:e.jsxs(n,{value:"item-1",children:[e.jsx(i,{children:"Default Styling"}),e.jsx(s,{children:e.jsx("p",{children:"This accordion uses the default variant with bordered container."})})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Outlined Variant"}),e.jsx(a,{variant:"outlined",children:e.jsxs(n,{value:"item-1",children:[e.jsx(i,{children:"Outlined Styling"}),e.jsx(s,{children:e.jsx("p",{children:"This accordion uses the outlined variant with thicker borders."})})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Separated Variant"}),e.jsxs(a,{variant:"separated",children:[e.jsxs(n,{value:"item-1",children:[e.jsx(i,{children:"Separated Item 1"}),e.jsx(s,{children:e.jsx("p",{children:"This accordion uses the separated variant."})})]}),e.jsxs(n,{value:"item-2",children:[e.jsx(i,{children:"Separated Item 2"}),e.jsx(s,{children:e.jsx("p",{children:"Each item is visually separated with spacing."})})]})]})]})]})},j={render:()=>e.jsxs("div",{className:"w-full max-w-2xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Frequently Asked Questions"}),e.jsxs(a,{children:[e.jsxs(n,{value:"shipping",children:[e.jsx(i,{children:"How long does shipping take?"}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Shipping times vary by location and shipping method:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Standard:"})," 5-7 business days"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Express:"})," 2-3 business days"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overnight:"})," 1 business day"]})]})]})})]}),e.jsxs(n,{value:"returns",children:[e.jsx(i,{children:"What is your return policy?"}),e.jsx(s,{children:e.jsx("p",{children:"We offer a 30-day return policy for all items in original condition. Items must be unused and in original packaging. Return shipping is free for defective items."})})]}),e.jsxs(n,{value:"warranty",children:[e.jsx(i,{children:"Do you offer warranty?"}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Yes, all our products come with warranty coverage:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsx("li",{children:"Electronics: 1 year manufacturer warranty"}),e.jsx("li",{children:"Clothing: 90 days against defects"}),e.jsx("li",{children:"Accessories: 6 months limited warranty"})]})]})})]}),e.jsxs(n,{value:"contact",children:[e.jsx(i,{children:"How can I contact customer service?"}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"You can reach us through multiple channels:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsx("li",{children:"Email: support@example.com"}),e.jsx("li",{children:"Phone: 1-800-123-4567 (Mon-Fri 9AM-5PM)"}),e.jsx("li",{children:"Live chat: Available on our website"}),e.jsx("li",{children:"Social media: @example on Twitter and Facebook"})]})]})})]})]})]}),parameters:{docs:{description:{story:"Example of using accordion for a FAQ section."}}}},A={render:()=>e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Account Settings"}),e.jsxs(a,{type:"multiple",variant:"separated",children:[e.jsxs(n,{value:"profile",children:[e.jsx(i,{children:"Profile Information"}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Display Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border rounded",defaultValue:"John Doe"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border rounded",defaultValue:"john@example.com"})]})]})})]}),e.jsxs(n,{value:"notifications",children:[e.jsx(i,{children:"Notification Preferences"}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",className:"mr-2",defaultChecked:!0}),"Email notifications"]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",className:"mr-2"}),"SMS notifications"]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",className:"mr-2",defaultChecked:!0}),"Push notifications"]})]})})]}),e.jsxs(n,{value:"privacy",children:[e.jsx(i,{children:"Privacy Settings"}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Profile Visibility"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{children:"Public"}),e.jsx("option",{children:"Friends Only"}),e.jsx("option",{children:"Private"})]})]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",className:"mr-2"}),"Allow search engines to index my profile"]})]})})]})]})]}),parameters:{docs:{description:{story:"Example of using accordion for settings with multiple sections open."}}}};var T,S,_;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            <p>React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>To get started with React:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Install Node.js</li>
                <li>Create a new React app with <code className="bg-gray-100 px-1 rounded">create-react-app</code></li>
                <li>Start building components</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>What are components?</AccordionTrigger>
          <AccordionContent>
            <p>Components are independent, reusable pieces of UI. They accept inputs (called props) and return React elements that describe what should appear on the screen.</p>
          </AccordionContent>
        </AccordionItem>
      </>
  }
}`,...(_=(S=f.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var k,E,P;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    children: <>
        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>• Component-based architecture</li>
              <li>• Virtual DOM for performance</li>
              <li>• Declarative programming model</li>
              <li>• Large ecosystem</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="benefits">
          <AccordionTrigger>Benefits</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>• Reusable components</li>
              <li>• Easy to test</li>
              <li>• Strong community</li>
              <li>• Excellent tooling</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="use-cases">
          <AccordionTrigger>Use Cases</AccordionTrigger>
          <AccordionContent>
            <p>React is great for building:</p>
            <ul className="mt-2 space-y-1">
              <li>• Single Page Applications (SPAs)</li>
              <li>• Mobile apps with React Native</li>
              <li>• Desktop apps with Electron</li>
              <li>• Static sites with Next.js</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </>
  }
}`,...(P=(E=v.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var V,D,R;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
        <Accordion variant="default">
          <AccordionItem value="item-1">
            <AccordionTrigger>Default Styling</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the default variant with bordered container.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Outlined Variant</h3>
        <Accordion variant="outlined">
          <AccordionItem value="item-1">
            <AccordionTrigger>Outlined Styling</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the outlined variant with thicker borders.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Separated Variant</h3>
        <Accordion variant="separated">
          <AccordionItem value="item-1">
            <AccordionTrigger>Separated Item 1</AccordionTrigger>
            <AccordionContent>
              <p>This accordion uses the separated variant.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Separated Item 2</AccordionTrigger>
            <AccordionContent>
              <p>Each item is visually separated with spacing.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
}`,...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var F,M,O;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion>
        <AccordionItem value="shipping">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>Shipping times vary by location and shipping method:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Standard:</strong> 5-7 business days</li>
                <li><strong>Express:</strong> 2-3 business days</li>
                <li><strong>Overnight:</strong> 1 business day</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            <p>We offer a 30-day return policy for all items in original condition. Items must be unused and in original packaging. Return shipping is free for defective items.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="warranty">
          <AccordionTrigger>Do you offer warranty?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>Yes, all our products come with warranty coverage:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Electronics: 1 year manufacturer warranty</li>
                <li>Clothing: 90 days against defects</li>
                <li>Accessories: 6 months limited warranty</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="contact">
          <AccordionTrigger>How can I contact customer service?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>You can reach us through multiple channels:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email: support@example.com</li>
                <li>Phone: 1-800-123-4567 (Mon-Fri 9AM-5PM)</li>
                <li>Live chat: Available on our website</li>
                <li>Social media: @example on Twitter and Facebook</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using accordion for a FAQ section.'
      }
    }
  }
}`,...(O=(M=j.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,W,Q;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <Accordion type="multiple" variant="separated">
        <AccordionItem value="profile">
          <AccordionTrigger>Profile Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Display Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded" defaultValue="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded" defaultValue="john@example.com" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="notifications">
          <AccordionTrigger>Notification Preferences</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Email notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                SMS notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Push notifications
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="privacy">
          <AccordionTrigger>Privacy Settings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Profile Visibility</label>
                <select className="w-full px-3 py-2 border rounded">
                  <option>Public</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Allow search engines to index my profile
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using accordion for settings with multiple sections open.'
      }
    }
  }
}`,...(Q=(W=A.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};const ie=["Default","Multiple","Variants","FAQ","SettingsPanel"];export{f as Default,j as FAQ,v as Multiple,A as SettingsPanel,y as Variants,ie as __namedExportsOrder,ne as default};
