import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as B}from"./index-DHZDe_v1.js";import{c as a}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({variant:s="neutral",size:t="md",icon:q,title:f,dismissible:L=!1,onDismiss:p,className:Y,children:_,...R})=>{const[F,W]=B.useState(!1),G=()=>{W(!0),p==null||p()};if(F)return null;const O=a("rounded-lg border",{"bg-blue-50 border-blue-200 text-blue-900":s==="info","bg-green-50 border-green-200 text-green-900":s==="success","bg-yellow-50 border-yellow-200 text-yellow-900":s==="warning","bg-red-50 border-red-200 text-red-900":s==="error","bg-gray-50 border-gray-200 text-gray-900":s==="neutral","p-3":t==="sm","p-4":t==="md","p-6":t==="lg"},Y),v={info:"text-blue-500",success:"text-green-500",warning:"text-yellow-500",error:"text-red-500",neutral:"text-gray-500"},i=q||{info:"ℹ️",success:"",warning:"️",error:"",neutral:""}[s];return e.jsxDEV("div",{className:O,role:"alert",...R,children:e.jsxDEV("div",{className:"flex items-start gap-3",children:[i&&e.jsxDEV("div",{className:a("flex-shrink-0",v[s]),children:typeof i=="string"?e.jsxDEV("span",{className:"text-lg",children:i},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.tsx",lineNumber:81,columnNumber:15},void 0):i},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.tsx",lineNumber:79,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex-1 min-w-0",children:[f&&e.jsxDEV("div",{className:a("font-semibold mb-1",{"text-sm":t==="sm","text-base":t==="md","text-lg":t==="lg"}),children:f},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.tsx",lineNumber:90,columnNumber:13},void 0),e.jsxDEV("div",{className:a("leading-relaxed",{"text-xs":t==="sm","text-sm":t==="md","text-base":t==="lg"}),children:_},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.tsx",lineNumber:102,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.tsx",lineNumber:88,columnNumber:9},void 0),L&&e.jsxDEV("button",{onClick:G,className:a("flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors",v[s]),"aria-label":"Dismiss callout"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.tsx",lineNumber:115,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.tsx",lineNumber:77,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.tsx",lineNumber:76,columnNumber:5},void 0)};try{n.displayName="Callout",n.__docgenInfo={description:"",displayName:"Callout",props:{variant:{defaultValue:{value:"neutral"},description:"Callout variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"neutral"'}]}},size:{defaultValue:{value:"md"},description:"Callout size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"Icon to display",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Title text",name:"title",required:!1,type:{name:"ReactNode"}},dismissible:{defaultValue:{value:"false"},description:"Enable dismissible behavior",name:"dismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback when dismissed",name:"onDismiss",required:!1,type:{name:"(() => void)"}}}}}catch{}const Z={title:"Content/Callout",component:n,parameters:{layout:"centered",docs:{description:{component:"Alert-style callouts for displaying important messages, notices, and status information."}}}},l={args:{children:"This is a neutral callout with default styling. Use it for general information and notices."}},o={args:{children:"Content"},render:()=>e.jsxDEV("div",{className:"space-y-4 max-w-lg",children:[e.jsxDEV(n,{variant:"info",children:"This is an informational callout. Use it to provide helpful tips and additional context."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:30,columnNumber:7},void 0),e.jsxDEV(n,{variant:"success",children:"This is a success callout. Perfect for confirmation messages and positive feedback."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:34,columnNumber:7},void 0),e.jsxDEV(n,{variant:"warning",children:"This is a warning callout. Use it to alert users about potential issues or important considerations."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:38,columnNumber:7},void 0),e.jsxDEV(n,{variant:"error",children:"This is an error callout. Use it to communicate problems that need immediate attention."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:42,columnNumber:7},void 0),e.jsxDEV(n,{variant:"neutral",children:"This is a neutral callout. Good for general information that doesn't fit other categories."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:46,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:29,columnNumber:5},void 0)},r={args:{children:"Content"},render:()=>e.jsxDEV("div",{className:"space-y-4 max-w-lg",children:[e.jsxDEV(n,{variant:"info",title:"Pro Tip",children:"You can significantly improve performance by enabling caching in your application settings."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:57,columnNumber:7},void 0),e.jsxDEV(n,{variant:"success",title:"Account Created",children:"Your account has been successfully created! Check your email for verification instructions."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:61,columnNumber:7},void 0),e.jsxDEV(n,{variant:"warning",title:"Maintenance Window",children:"The system will undergo maintenance on Sunday from 2:00 AM to 4:00 AM EST. Some features may be unavailable."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:65,columnNumber:7},void 0),e.jsxDEV(n,{variant:"error",title:"Authentication Failed",children:"Invalid credentials provided. Please check your username and password and try again."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:69,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:56,columnNumber:5},void 0)},c={args:{children:"Content"},render:()=>e.jsxDEV("div",{className:"space-y-4 max-w-lg",children:[e.jsxDEV(n,{size:"sm",variant:"info",children:"Small callout size for compact layouts and minimal messaging."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:80,columnNumber:7},void 0),e.jsxDEV(n,{size:"md",variant:"success",title:"Medium Size",children:"Medium callout size is the default and works well for most use cases."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:84,columnNumber:7},void 0),e.jsxDEV(n,{size:"lg",variant:"warning",title:"Large Callout",children:"Large callout size for prominent messaging and important announcements that need more visual weight."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:88,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:79,columnNumber:5},void 0)},u={args:{children:"Content"},render:()=>e.jsxDEV("div",{className:"space-y-4 max-w-lg",children:[e.jsxDEV(n,{variant:"info",icon:"",title:"Documentation",children:"Check out the updated documentation for the latest API changes and examples."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:99,columnNumber:7},void 0),e.jsxDEV(n,{variant:"success",icon:"",title:"Feature Launch",children:"The new dashboard feature is now live! Explore the enhanced analytics and reporting tools."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:103,columnNumber:7},void 0),e.jsxDEV(n,{variant:"warning",icon:"",title:"Performance Impact",children:"This action may affect system performance. Consider running it during off-peak hours."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:107,columnNumber:7},void 0),e.jsxDEV(n,{variant:"neutral",icon:"",title:"Under Development",children:"This feature is currently in beta. Some functionality may change in future releases."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:111,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:98,columnNumber:5},void 0)},m={args:{children:"Content"},render:()=>e.jsxDEV("div",{className:"space-y-4 max-w-lg",children:[e.jsxDEV(n,{variant:"info",title:"Cookie Notice",dismissible:!0,children:"We use cookies to improve your experience. You can manage your preferences in the settings."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:122,columnNumber:7},void 0),e.jsxDEV(n,{variant:"success",title:"Update Available",dismissible:!0,children:"A new version is available! Click here to update to the latest release."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:126,columnNumber:7},void 0),e.jsxDEV(n,{variant:"warning",title:"Trial Expiring",dismissible:!0,onDismiss:()=>console.log("Trial warning dismissed"),children:"Your trial expires in 3 days. Upgrade now to continue using all premium features."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:130,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:121,columnNumber:5},void 0)},d={args:{children:"Content"},render:()=>e.jsxDEV("div",{className:"space-y-6 max-w-2xl",children:[e.jsxDEV(n,{variant:"info",title:"API Rate Limits",size:"lg",children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("p",{children:"Our API implements rate limiting to ensure fair usage and system stability. Here are the current limits for your plan:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:148,columnNumber:11},void 0),e.jsxDEV("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[e.jsxDEV("li",{children:"Standard Plan: 1,000 requests per hour"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:153,columnNumber:13},void 0),e.jsxDEV("li",{children:"Pro Plan: 10,000 requests per hour"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:154,columnNumber:13},void 0),e.jsxDEV("li",{children:"Enterprise Plan: 100,000 requests per hour"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:155,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:152,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-sm",children:[e.jsxDEV("strong",{children:"Need higher limits?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:158,columnNumber:13},void 0)," ",e.jsxDEV("a",{href:"#",className:"text-blue-600 hover:text-blue-800 underline",children:"Contact our sales team"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:159,columnNumber:13},void 0)," ","to discuss custom plans."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:157,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:147,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:146,columnNumber:7},void 0),e.jsxDEV(n,{variant:"warning",title:"Breaking Changes in v2.0",dismissible:!0,children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("p",{children:"Version 2.0 introduces several breaking changes that may affect your integration:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:169,columnNumber:11},void 0),e.jsxDEV("div",{className:"bg-yellow-100 border border-yellow-200 rounded p-3 text-sm",children:e.jsxDEV("ul",{className:"space-y-1",children:[e.jsxDEV("li",{children:"• Authentication headers have changed"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:174,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Response format for user endpoints updated"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:175,columnNumber:15},void 0),e.jsxDEV("li",{children:"• Deprecated endpoints will be removed"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:176,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:173,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:172,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex gap-2",children:[e.jsxDEV("button",{className:"px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700",children:"View Migration Guide"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:180,columnNumber:13},void 0),e.jsxDEV("button",{className:"px-3 py-1 border border-yellow-600 text-yellow-700 rounded text-sm hover:bg-yellow-50",children:"Schedule Update"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:183,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:179,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:168,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:167,columnNumber:7},void 0),e.jsxDEV(n,{variant:"success",title:"Deployment Successful",icon:"",children:e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{children:"Your application has been deployed successfully to production!"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:192,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex items-center gap-4 text-sm",children:[e.jsxDEV("span",{children:[" ",e.jsxDEV("strong",{children:"URL:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:194,columnNumber:20},void 0)," https://myapp.com"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:194,columnNumber:13},void 0),e.jsxDEV("span",{children:["⏱️ ",e.jsxDEV("strong",{children:"Deploy time:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:195,columnNumber:22},void 0)," 2m 34s"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:195,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:193,columnNumber:11},void 0),e.jsxDEV("div",{className:"mt-3 p-2 bg-green-100 border border-green-200 rounded text-sm",children:[e.jsxDEV("strong",{children:"Next steps:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:198,columnNumber:13},void 0),e.jsxDEV("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsxDEV("li",{children:"Monitor application health"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:200,columnNumber:15},void 0),e.jsxDEV("li",{children:"Update DNS records if needed"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:201,columnNumber:15},void 0),e.jsxDEV("li",{children:"Notify team members"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:202,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:199,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:197,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:191,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:190,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/callout/Callout.stories.tsx",lineNumber:145,columnNumber:5},void 0)};var N,g,b;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'This is a neutral callout with default styling. Use it for general information and notices.'
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,h,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var k,C,D;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(C=r.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var j,U,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var w,V,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(V=u.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var T,P,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var I,M,z;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const $=["Default","Variants","WithTitles","Sizes","CustomIcons","Dismissible","ComplexContent"];export{d as ComplexContent,u as CustomIcons,l as Default,m as Dismissible,c as Sizes,o as Variants,r as WithTitles,$ as __namedExportsOrder,Z as default};
