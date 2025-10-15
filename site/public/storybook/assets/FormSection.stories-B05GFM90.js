import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as y}from"./index-BwDkhjyp.js";import{F as le}from"./FormField-CB1ucDWs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ErrorMessage-BhI4OYJy.js";import"./HelperText-DV78KzMO.js";const s=y.forwardRef(({title:l,description:r,className:U="",children:S,showDivider:f=!1,size:n="md",collapsible:h=!1,defaultCollapsed:Y=!1,collapsed:t,onCollapsedChange:d,...Z},G)=>{const[H,Q]=y.useState(Y),i=t!==void 0?t:H,X=y.useCallback(()=>{const F=!i;t===void 0&&Q(F),d==null||d(F)},[i,t,d]),o={sm:{title:"text-base",description:"text-sm",spacing:"space-y-3",padding:"py-3"},md:{title:"text-lg",description:"text-base",spacing:"space-y-4",padding:"py-4"},lg:{title:"text-xl",description:"text-lg",spacing:"space-y-6",padding:"py-6"}},ee=`
      ${o[n].spacing}
      ${U}
    `,ae=`
      ${l||r?o[n].padding:""}
      ${f?"border-t border-gray-200 dark:border-gray-700":""}
    `;return e.jsxs("div",{ref:G,className:ee,...Z,children:[f&&!l&&!r&&e.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700"}),(l||r)&&e.jsxs("div",{className:ae,children:[l&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:`font-semibold text-gray-900 dark:text-gray-100 ${o[n].title}`,children:l}),h&&e.jsx("button",{type:"button",onClick:X,className:"ml-4 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors","aria-expanded":!i,"aria-label":i?`Expand ${l} section`:`Collapse ${l} section`,children:e.jsx("svg",{className:`w-5 h-5 transform transition-transform ${i?"rotate-0":"rotate-180"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),r&&e.jsx("p",{className:`text-gray-600 dark:text-gray-400 ${o[n].description} ${l?"mt-1":""}`,children:r})]}),h?e.jsx("div",{style:{display:i?"none":"block"},children:S}):e.jsx("div",{children:S})]})});s.displayName="FormSection";try{s.displayName="FormSection",s.__docgenInfo={description:"",displayName:"FormSection",props:{title:{defaultValue:null,description:"Section title",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Section description",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS class names",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Section content",name:"children",required:!0,type:{name:"ReactNode"}},showDivider:{defaultValue:{value:"false"},description:"Show divider above section",name:"showDivider",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Section size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},collapsible:{defaultValue:{value:"false"},description:"Whether section is collapsible",name:"collapsible",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:{value:"false"},description:"Initial collapsed state",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},collapsed:{defaultValue:null,description:"Controlled collapsed state",name:"collapsed",required:!1,type:{name:"boolean"}},onCollapsedChange:{defaultValue:null,description:"Callback when collapsed state changes",name:"onCollapsedChange",required:!1,type:{name:"((collapsed: boolean) => void)"}}}}}catch{}const oe={title:"Form/FormSection",component:s,parameters:{layout:"padded",docs:{description:{component:"Form section component for grouping related form fields with optional dividers, titles, and collapsible functionality."}}},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},a=({label:l})=>e.jsx(le,{label:l,children:e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"})}),c={args:{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"First Name"}),e.jsx(a,{label:"Last Name"})]})}},m={args:{title:"Personal Information",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"First Name"}),e.jsx(a,{label:"Last Name"}),e.jsx(a,{label:"Date of Birth"})]})}},p={args:{title:"Contact Details",description:"Please provide your primary contact information for account verification.",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Email Address"}),e.jsx(a,{label:"Phone Number"}),e.jsx(a,{label:"Address"})]})}},u={args:{title:"Billing Information",showDivider:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Card Number"}),e.jsx(a,{label:"Expiry Date"}),e.jsx(a,{label:"CVV"})]})}},b={args:{title:"Advanced Settings",description:"Optional configuration settings for power users.",collapsible:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"API Key"}),e.jsx(a,{label:"Webhook URL"}),e.jsx(a,{label:"Timeout"})]})}},x={args:{title:"Optional Information",description:"Additional details that can be provided later.",collapsible:!0,defaultCollapsed:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Company"}),e.jsx(a,{label:"Job Title"}),e.jsx(a,{label:"LinkedIn"})]})}},g={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx(s,{title:"Small Section",size:"sm",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Field 1"}),e.jsx(a,{label:"Field 2"})]})}),e.jsx(s,{title:"Medium Section",size:"md",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Field 1"}),e.jsx(a,{label:"Field 2"})]})}),e.jsx(s,{title:"Large Section",size:"lg",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{label:"Field 1"}),e.jsx(a,{label:"Field 2"})]})})]})},v={render:()=>e.jsxs("form",{className:"max-w-2xl space-y-0",children:[e.jsx(s,{title:"Personal Information",size:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{label:"First Name"}),e.jsx(a,{label:"Last Name"})]}),e.jsx(a,{label:"Email Address"}),e.jsx(a,{label:"Phone Number"})]})}),e.jsx(s,{title:"Address",description:"Your primary residence address",showDivider:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Street Address"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(a,{label:"City"}),e.jsx(a,{label:"State"}),e.jsx(a,{label:"ZIP Code"})]})]})}),e.jsx(s,{title:"Preferences",description:"Optional settings and preferences",showDivider:!0,collapsible:!0,defaultCollapsed:!0,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Language"}),e.jsx(a,{label:"Timezone"}),e.jsx(a,{label:"Newsletter"})]})})]})};var j,N,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <div className="space-y-4">
        <SampleField label="First Name" />
        <SampleField label="Last Name" />
      </div>
  }
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var w,k,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Personal Information',
    children: <div className="space-y-4">
        <SampleField label="First Name" />
        <SampleField label="Last Name" />
        <SampleField label="Date of Birth" />
      </div>
  }
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var A,I,L;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Contact Details',
    description: 'Please provide your primary contact information for account verification.',
    children: <div className="space-y-4">
        <SampleField label="Email Address" />
        <SampleField label="Phone Number" />
        <SampleField label="Address" />
      </div>
  }
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var P,z,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Billing Information',
    showDivider: true,
    children: <div className="space-y-4">
        <SampleField label="Card Number" />
        <SampleField label="Expiry Date" />
        <SampleField label="CVV" />
      </div>
  }
}`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var T,q,W;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Advanced Settings',
    description: 'Optional configuration settings for power users.',
    collapsible: true,
    children: <div className="space-y-4">
        <SampleField label="API Key" />
        <SampleField label="Webhook URL" />
        <SampleField label="Timeout" />
      </div>
  }
}`,...(W=(q=b.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var _,$,E;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Optional Information',
    description: 'Additional details that can be provided later.',
    collapsible: true,
    defaultCollapsed: true,
    children: <div className="space-y-4">
        <SampleField label="Company" />
        <SampleField label="Job Title" />
        <SampleField label="LinkedIn" />
      </div>
  }
}`,...(E=($=x.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var O,R,B;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <FormSection title="Small Section" size="sm">
        <div className="space-y-3">
          <SampleField label="Field 1" />
          <SampleField label="Field 2" />
        </div>
      </FormSection>
      
      <FormSection title="Medium Section" size="md">
        <div className="space-y-4">
          <SampleField label="Field 1" />
          <SampleField label="Field 2" />
        </div>
      </FormSection>
      
      <FormSection title="Large Section" size="lg">
        <div className="space-y-6">
          <SampleField label="Field 1" />
          <SampleField label="Field 2" />
        </div>
      </FormSection>
    </div>
}`,...(B=(R=g.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var M,J,K;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <form className="max-w-2xl space-y-0">
      <FormSection title="Personal Information" size="lg">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <SampleField label="First Name" />
            <SampleField label="Last Name" />
          </div>
          <SampleField label="Email Address" />
          <SampleField label="Phone Number" />
        </div>
      </FormSection>
      
      <FormSection title="Address" description="Your primary residence address" showDivider>
        <div className="space-y-4">
          <SampleField label="Street Address" />
          <div className="grid grid-cols-3 gap-4">
            <SampleField label="City" />
            <SampleField label="State" />
            <SampleField label="ZIP Code" />
          </div>
        </div>
      </FormSection>
      
      <FormSection title="Preferences" description="Optional settings and preferences" showDivider collapsible defaultCollapsed>
        <div className="space-y-4">
          <SampleField label="Language" />
          <SampleField label="Timezone" />
          <SampleField label="Newsletter" />
        </div>
      </FormSection>
    </form>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ce=["Default","WithTitle","WithTitleAndDescription","WithDivider","Collapsible","CollapsibleDefaultClosed","Sizes","MultipleSection"];export{b as Collapsible,x as CollapsibleDefaultClosed,c as Default,v as MultipleSection,g as Sizes,u as WithDivider,m as WithTitle,p as WithTitleAndDescription,ce as __namedExportsOrder,oe as default};
