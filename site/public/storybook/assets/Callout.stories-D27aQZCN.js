import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as B}from"./index-BwDkhjyp.js";import{c as t}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({variant:a="neutral",size:s="md",icon:V,title:h,dismissible:L=!1,onDismiss:p,className:Y,children:_,...R})=>{const[F,W]=B.useState(!1),G=()=>{W(!0),p==null||p()};if(F)return null;const O=t("rounded-lg border",{"bg-blue-50 border-blue-200 text-blue-900":a==="info","bg-green-50 border-green-200 text-green-900":a==="success","bg-yellow-50 border-yellow-200 text-yellow-900":a==="warning","bg-red-50 border-red-200 text-red-900":a==="error","bg-gray-50 border-gray-200 text-gray-900":a==="neutral","p-3":s==="sm","p-4":s==="md","p-6":s==="lg"},Y),g={info:"text-blue-500",success:"text-green-500",warning:"text-yellow-500",error:"text-red-500",neutral:"text-gray-500"},i=V||{info:"ℹ️",success:"",warning:"️",error:"",neutral:""}[a];return e.jsx("div",{className:O,role:"alert",...R,children:e.jsxs("div",{className:"flex items-start gap-3",children:[i&&e.jsx("div",{className:t("flex-shrink-0",g[a]),children:typeof i=="string"?e.jsx("span",{className:"text-lg",children:i}):i}),e.jsxs("div",{className:"flex-1 min-w-0",children:[h&&e.jsx("div",{className:t("font-semibold mb-1",{"text-sm":s==="sm","text-base":s==="md","text-lg":s==="lg"}),children:h}),e.jsx("div",{className:t("leading-relaxed",{"text-xs":s==="sm","text-sm":s==="md","text-base":s==="lg"}),children:_})]}),L&&e.jsx("button",{onClick:G,className:t("flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors",g[a]),"aria-label":"Dismiss callout"})]})})};try{n.displayName="Callout",n.__docgenInfo={description:"",displayName:"Callout",props:{variant:{defaultValue:{value:"neutral"},description:"Callout variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"neutral"'}]}},size:{defaultValue:{value:"md"},description:"Callout size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"Icon to display",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Title text",name:"title",required:!1,type:{name:"ReactNode"}},dismissible:{defaultValue:{value:"false"},description:"Enable dismissible behavior",name:"dismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback when dismissed",name:"onDismiss",required:!1,type:{name:"(() => void)"}}}}}catch{}const Z={title:"Content/Callout",component:n,parameters:{layout:"centered",docs:{description:{component:"Alert-style callouts for displaying important messages, notices, and status information."}}}},r={args:{children:"This is a neutral callout with default styling. Use it for general information and notices."}},l={args:{children:"Content"},render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(n,{variant:"info",children:"This is an informational callout. Use it to provide helpful tips and additional context."}),e.jsx(n,{variant:"success",children:"This is a success callout. Perfect for confirmation messages and positive feedback."}),e.jsx(n,{variant:"warning",children:"This is a warning callout. Use it to alert users about potential issues or important considerations."}),e.jsx(n,{variant:"error",children:"This is an error callout. Use it to communicate problems that need immediate attention."}),e.jsx(n,{variant:"neutral",children:"This is a neutral callout. Good for general information that doesn't fit other categories."})]})},o={args:{children:"Content"},render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(n,{variant:"info",title:"Pro Tip",children:"You can significantly improve performance by enabling caching in your application settings."}),e.jsx(n,{variant:"success",title:"Account Created",children:"Your account has been successfully created! Check your email for verification instructions."}),e.jsx(n,{variant:"warning",title:"Maintenance Window",children:"The system will undergo maintenance on Sunday from 2:00 AM to 4:00 AM EST. Some features may be unavailable."}),e.jsx(n,{variant:"error",title:"Authentication Failed",children:"Invalid credentials provided. Please check your username and password and try again."})]})},c={args:{children:"Content"},render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(n,{size:"sm",variant:"info",children:"Small callout size for compact layouts and minimal messaging."}),e.jsx(n,{size:"md",variant:"success",title:"Medium Size",children:"Medium callout size is the default and works well for most use cases."}),e.jsx(n,{size:"lg",variant:"warning",title:"Large Callout",children:"Large callout size for prominent messaging and important announcements that need more visual weight."})]})},d={args:{children:"Content"},render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(n,{variant:"info",icon:"",title:"Documentation",children:"Check out the updated documentation for the latest API changes and examples."}),e.jsx(n,{variant:"success",icon:"",title:"Feature Launch",children:"The new dashboard feature is now live! Explore the enhanced analytics and reporting tools."}),e.jsx(n,{variant:"warning",icon:"",title:"Performance Impact",children:"This action may affect system performance. Consider running it during off-peak hours."}),e.jsx(n,{variant:"neutral",icon:"",title:"Under Development",children:"This feature is currently in beta. Some functionality may change in future releases."})]})},u={args:{children:"Content"},render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(n,{variant:"info",title:"Cookie Notice",dismissible:!0,children:"We use cookies to improve your experience. You can manage your preferences in the settings."}),e.jsx(n,{variant:"success",title:"Update Available",dismissible:!0,children:"A new version is available! Click here to update to the latest release."}),e.jsx(n,{variant:"warning",title:"Trial Expiring",dismissible:!0,onDismiss:()=>console.log("Trial warning dismissed"),children:"Your trial expires in 3 days. Upgrade now to continue using all premium features."})]})},m={args:{children:"Content"},render:()=>e.jsxs("div",{className:"space-y-6 max-w-2xl",children:[e.jsx(n,{variant:"info",title:"API Rate Limits",size:"lg",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"Our API implements rate limiting to ensure fair usage and system stability. Here are the current limits for your plan:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[e.jsx("li",{children:"Standard Plan: 1,000 requests per hour"}),e.jsx("li",{children:"Pro Plan: 10,000 requests per hour"}),e.jsx("li",{children:"Enterprise Plan: 100,000 requests per hour"})]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Need higher limits?"})," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800 underline",children:"Contact our sales team"})," ","to discuss custom plans."]})]})}),e.jsx(n,{variant:"warning",title:"Breaking Changes in v2.0",dismissible:!0,children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"Version 2.0 introduces several breaking changes that may affect your integration:"}),e.jsx("div",{className:"bg-yellow-100 border border-yellow-200 rounded p-3 text-sm",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"• Authentication headers have changed"}),e.jsx("li",{children:"• Response format for user endpoints updated"}),e.jsx("li",{children:"• Deprecated endpoints will be removed"})]})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700",children:"View Migration Guide"}),e.jsx("button",{className:"px-3 py-1 border border-yellow-600 text-yellow-700 rounded text-sm hover:bg-yellow-50",children:"Schedule Update"})]})]})}),e.jsx(n,{variant:"success",title:"Deployment Successful",icon:"",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Your application has been deployed successfully to production!"}),e.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[e.jsxs("span",{children:[" ",e.jsx("strong",{children:"URL:"})," https://myapp.com"]}),e.jsxs("span",{children:["⏱️ ",e.jsx("strong",{children:"Deploy time:"})," 2m 34s"]})]}),e.jsxs("div",{className:"mt-3 p-2 bg-green-100 border border-green-200 rounded text-sm",children:[e.jsx("strong",{children:"Next steps:"}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsx("li",{children:"Monitor application health"}),e.jsx("li",{children:"Update DNS records if needed"}),e.jsx("li",{children:"Notify team members"})]})]})]})})]})};var x,f,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'This is a neutral callout with default styling. Use it for general information and notices.'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,b,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  },
  render: () => <div className="space-y-4 max-w-lg">
      <Callout variant="info">
        This is an informational callout. Use it to provide helpful tips and additional context.
      </Callout>
      
      <Callout variant="success">
        This is a success callout. Perfect for confirmation messages and positive feedback.
      </Callout>
      
      <Callout variant="warning">
        This is a warning callout. Use it to alert users about potential issues or important considerations.
      </Callout>
      
      <Callout variant="error">
        This is an error callout. Use it to communicate problems that need immediate attention.
      </Callout>
      
      <Callout variant="neutral">
        This is a neutral callout. Good for general information that doesn't fit other categories.
      </Callout>
    </div>
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var w,j,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  },
  render: () => <div className="space-y-4 max-w-lg">
      <Callout variant="info" title="Pro Tip">
        You can significantly improve performance by enabling caching in your application settings.
      </Callout>
      
      <Callout variant="success" title="Account Created">
        Your account has been successfully created! Check your email for verification instructions.
      </Callout>
      
      <Callout variant="warning" title="Maintenance Window">
        The system will undergo maintenance on Sunday from 2:00 AM to 4:00 AM EST. Some features may be unavailable.
      </Callout>
      
      <Callout variant="error" title="Authentication Failed">
        Invalid credentials provided. Please check your username and password and try again.
      </Callout>
    </div>
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,T,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  },
  render: () => <div className="space-y-4 max-w-lg">
      <Callout size="sm" variant="info">
        Small callout size for compact layouts and minimal messaging.
      </Callout>
      
      <Callout size="md" variant="success" title="Medium Size">
        Medium callout size is the default and works well for most use cases.
      </Callout>
      
      <Callout size="lg" variant="warning" title="Large Callout">
        Large callout size for prominent messaging and important announcements that need more visual weight.
      </Callout>
    </div>
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var P,A,U;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  },
  render: () => <div className="space-y-4 max-w-lg">
      <Callout variant="info" icon="" title="Documentation">
        Check out the updated documentation for the latest API changes and examples.
      </Callout>
      
      <Callout variant="success" icon="" title="Feature Launch">
        The new dashboard feature is now live! Explore the enhanced analytics and reporting tools.
      </Callout>
      
      <Callout variant="warning" icon="" title="Performance Impact">
        This action may affect system performance. Consider running it during off-peak hours.
      </Callout>
      
      <Callout variant="neutral" icon="" title="Under Development">
        This feature is currently in beta. Some functionality may change in future releases.
      </Callout>
    </div>
}`,...(U=(A=d.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var D,I,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  },
  render: () => <div className="space-y-4 max-w-lg">
      <Callout variant="info" title="Cookie Notice" dismissible>
        We use cookies to improve your experience. You can manage your preferences in the settings.
      </Callout>
      
      <Callout variant="success" title="Update Available" dismissible>
        A new version is available! Click here to update to the latest release.
      </Callout>
      
      <Callout variant="warning" title="Trial Expiring" dismissible onDismiss={() => console.log('Trial warning dismissed')}>
        Your trial expires in 3 days. Upgrade now to continue using all premium features.
      </Callout>
    </div>
}`,...(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var z,E,q;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  },
  render: () => <div className="space-y-6 max-w-2xl">
      <Callout variant="info" title="API Rate Limits" size="lg">
        <div className="space-y-3">
          <p>
            Our API implements rate limiting to ensure fair usage and system stability. 
            Here are the current limits for your plan:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Standard Plan: 1,000 requests per hour</li>
            <li>Pro Plan: 10,000 requests per hour</li>
            <li>Enterprise Plan: 100,000 requests per hour</li>
          </ul>
          <p className="text-sm">
            <strong>Need higher limits?</strong>{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Contact our sales team
            </a>{' '}
            to discuss custom plans.
          </p>
        </div>
      </Callout>
      
      <Callout variant="warning" title="Breaking Changes in v2.0" dismissible>
        <div className="space-y-3">
          <p>
            Version 2.0 introduces several breaking changes that may affect your integration:
          </p>
          <div className="bg-yellow-100 border border-yellow-200 rounded p-3 text-sm">
            <ul className="space-y-1">
              <li>• Authentication headers have changed</li>
              <li>• Response format for user endpoints updated</li>
              <li>• Deprecated endpoints will be removed</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
              View Migration Guide
            </button>
            <button className="px-3 py-1 border border-yellow-600 text-yellow-700 rounded text-sm hover:bg-yellow-50">
              Schedule Update
            </button>
          </div>
        </div>
      </Callout>
      
      <Callout variant="success" title="Deployment Successful" icon="">
        <div className="space-y-2">
          <p>Your application has been deployed successfully to production!</p>
          <div className="flex items-center gap-4 text-sm">
            <span> <strong>URL:</strong> https://myapp.com</span>
            <span>⏱️ <strong>Deploy time:</strong> 2m 34s</span>
          </div>
          <div className="mt-3 p-2 bg-green-100 border border-green-200 rounded text-sm">
            <strong>Next steps:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Monitor application health</li>
              <li>Update DNS records if needed</li>
              <li>Notify team members</li>
            </ul>
          </div>
        </div>
      </Callout>
    </div>
}`,...(q=(E=m.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const $=["Default","Variants","WithTitles","Sizes","CustomIcons","Dismissible","ComplexContent"];export{m as ComplexContent,d as CustomIcons,r as Default,u as Dismissible,c as Sizes,l as Variants,o as WithTitles,$ as __namedExportsOrder,Z as default};
