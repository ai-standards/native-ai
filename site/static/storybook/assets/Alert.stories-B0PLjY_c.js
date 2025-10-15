import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as K}from"./index-BwDkhjyp.js";import{c as a}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const Q={info:{container:"bg-blue-50 border-blue-200 text-blue-800",icon:"text-blue-600"},success:{container:"bg-green-50 border-green-200 text-green-800",icon:"text-green-600"},warning:{container:"bg-yellow-50 border-yellow-200 text-yellow-800",icon:"text-yellow-600"},error:{container:"bg-red-50 border-red-200 text-red-800",icon:"text-red-600"}},X={info:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),success:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),warning:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),error:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})},s=({variant:r="info",title:f,dismissible:W=!1,onDismiss:m,showIcon:P=!0,icon:D,children:F,className:U,...H})=>{const[O,G]=K.useState(!0),J=()=>{G(!1),m==null||m()};if(!O)return null;const p=Q[r],h=D||P&&X[r];return e.jsx("div",{className:a("border rounded-lg p-4",p.container,U),role:"alert","aria-live":"polite",...H,children:e.jsxs("div",{className:"flex",children:[h&&e.jsx("div",{className:a("flex-shrink-0",p.icon),children:h}),e.jsxs("div",{className:a("flex-1",h&&"ml-3"),children:[f&&e.jsx("h3",{className:"text-sm font-medium mb-1",children:f}),e.jsx("div",{className:"text-sm",children:F})]}),W&&e.jsx("div",{className:"ml-auto pl-3",children:e.jsx("button",{type:"button",className:a("inline-flex rounded-md p-1.5 hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2",p.icon,"focus:ring-offset-"+r+"-50","focus:ring-"+r+"-600"),onClick:J,"aria-label":"Dismiss alert",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})})]})})};try{s.displayName="Alert",s.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:{value:"info"},description:"Alert variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"Alert title",name:"title",required:!1,type:{name:"string"}},dismissible:{defaultValue:{value:"false"},description:"Whether the alert can be dismissed",name:"dismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback when alert is dismissed",name:"onDismiss",required:!1,type:{name:"(() => void)"}},showIcon:{defaultValue:{value:"true"},description:"Show icon",name:"showIcon",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Custom icon",name:"icon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Alert content",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const re={title:"Feedback/Alert",component:s,parameters:{layout:"centered",docs:{description:{component:"A static or dismissible message banner for status updates, warnings, or errors."}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"]}}},n={args:{children:"This is an informational alert message."}},i={args:{title:"Information",children:"This alert has a title to provide additional context."}},t={render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsx(s,{variant:"info",title:"Information",children:"This is an informational message providing helpful context."}),e.jsx(s,{variant:"success",title:"Success",children:"Your changes have been saved successfully."}),e.jsx(s,{variant:"warning",title:"Warning",children:"Please review your information before proceeding."}),e.jsx(s,{variant:"error",title:"Error",children:"There was an error processing your request."})]})},l={render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsx(s,{variant:"success",title:"Success",dismissible:!0,onDismiss:()=>console.log("Alert dismissed"),children:"Your profile has been updated successfully."}),e.jsx(s,{variant:"warning",dismissible:!0,onDismiss:()=>console.log("Warning dismissed"),children:"Your session will expire in 5 minutes."})]})},o={render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsx(s,{variant:"info",showIcon:!1,children:"This alert doesn't show an icon."}),e.jsx(s,{variant:"error",showIcon:!1,title:"Error",children:"This error alert also has no icon."})]})},c={args:{variant:"info",title:"Custom Icon",icon:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:"This alert uses a custom icon instead of the default."}},d={render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsxs(s,{variant:"info",title:"Update Available",children:[e.jsx("p",{className:"mb-2",children:"A new version of the application is available."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"text-sm bg-blue-600 text-white px-3 py-1 rounded",children:"Update Now"}),e.jsx("button",{className:"text-sm border border-blue-600 text-blue-600 px-3 py-1 rounded",children:"Later"})]})]}),e.jsxs(s,{variant:"warning",title:"Storage Almost Full",dismissible:!0,children:[e.jsx("p",{className:"mb-2",children:"You're using 95% of your storage space."}),e.jsx("a",{href:"#",className:"text-sm underline",children:"Manage your storage"})]})]})},u={render:()=>e.jsxs("div",{className:"space-y-4 w-full max-w-2xl",children:[e.jsxs(s,{variant:"error",title:"Validation Error",dismissible:!0,children:["Please correct the following errors:",e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"Email address is required"}),e.jsx("li",{children:"Password must be at least 8 characters"})]})]}),e.jsx(s,{variant:"success",dismissible:!0,children:"Your account has been created successfully. Please check your email for verification."}),e.jsx(s,{variant:"warning",title:"Scheduled Maintenance",children:"System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM EST. Some features may be temporarily unavailable."}),e.jsx(s,{variant:"info",title:"New Feature",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Try our new dark mode! Enable it in your settings."}),e.jsx("button",{className:"ml-4 text-sm bg-blue-600 text-white px-3 py-1 rounded",children:"Try it"})]})})]})};var v,x,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'This is an informational alert message.'
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,w,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    children: 'This alert has a title to provide additional context.'
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,N,A;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
      <Alert variant="info" title="Information">
        This is an informational message providing helpful context.
      </Alert>
      
      <Alert variant="success" title="Success">
        Your changes have been saved successfully.
      </Alert>
      
      <Alert variant="warning" title="Warning">
        Please review your information before proceeding.
      </Alert>
      
      <Alert variant="error" title="Error">
        There was an error processing your request.
      </Alert>
    </div>
}`,...(A=(N=t.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var S,T,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
      <Alert variant="success" title="Success" dismissible onDismiss={() => console.log('Alert dismissed')}>
        Your profile has been updated successfully.
      </Alert>
      
      <Alert variant="warning" dismissible onDismiss={() => console.log('Warning dismissed')}>
        Your session will expire in 5 minutes.
      </Alert>
    </div>
}`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var M,C,R;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
      <Alert variant="info" showIcon={false}>
        This alert doesn't show an icon.
      </Alert>
      
      <Alert variant="error" showIcon={false} title="Error">
        This error alert also has no icon.
      </Alert>
    </div>
}`,...(R=(C=o.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var E,V,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Custom Icon',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
    children: 'This alert uses a custom icon instead of the default.'
  }
}`,...(z=(V=c.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var q,L,Y;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
      <Alert variant="info" title="Update Available">
        <p className="mb-2">
          A new version of the application is available.
        </p>
        <div className="flex gap-2">
          <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">
            Update Now
          </button>
          <button className="text-sm border border-blue-600 text-blue-600 px-3 py-1 rounded">
            Later
          </button>
        </div>
      </Alert>
      
      <Alert variant="warning" title="Storage Almost Full" dismissible>
        <p className="mb-2">
          You're using 95% of your storage space.
        </p>
        <a href="#" className="text-sm underline">
          Manage your storage
        </a>
      </Alert>
    </div>
}`,...(Y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var _,k,B;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-full max-w-2xl">
      {/* Form validation error */}
      <Alert variant="error" title="Validation Error" dismissible>
        Please correct the following errors:
        <ul className="list-disc list-inside mt-2">
          <li>Email address is required</li>
          <li>Password must be at least 8 characters</li>
        </ul>
      </Alert>

      {/* Success message */}
      <Alert variant="success" dismissible>
        Your account has been created successfully. Please check your email for verification.
      </Alert>

      {/* System maintenance warning */}
      <Alert variant="warning" title="Scheduled Maintenance">
        System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM EST. 
        Some features may be temporarily unavailable.
      </Alert>

      {/* Information banner */}
      <Alert variant="info" title="New Feature">
        <div className="flex items-center justify-between">
          <span>Try our new dark mode! Enable it in your settings.</span>
          <button className="ml-4 text-sm bg-blue-600 text-white px-3 py-1 rounded">
            Try it
          </button>
        </div>
      </Alert>
    </div>
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const ae=["Basic","WithTitle","Variants","Dismissible","WithoutIcon","CustomIcon","RichContent","Examples"];export{n as Basic,c as CustomIcon,l as Dismissible,u as Examples,d as RichContent,t as Variants,i as WithTitle,o as WithoutIcon,ae as __namedExportsOrder,re as default};
