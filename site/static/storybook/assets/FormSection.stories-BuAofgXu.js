import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as x}from"./index-DHZDe_v1.js";import{F as oe}from"./FormField-Cz7N3dx5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ErrorMessage-DYjD2rVY.js";import"./HelperText-BSqHZUf_.js";const i=x.forwardRef(({title:o,description:r,className:K="",children:g,showDivider:D=!1,size:a="md",collapsible:k=!1,defaultCollapsed:Y=!1,collapsed:t,onCollapsedChange:l,...Z},G)=>{const[H,Q]=x.useState(Y),n=t!==void 0?t:H,X=x.useCallback(()=>{const y=!n;t===void 0&&Q(y),l==null||l(y)},[n,t,l]),m={sm:{title:"text-base",description:"text-sm",spacing:"space-y-3",padding:"py-3"},md:{title:"text-lg",description:"text-base",spacing:"space-y-4",padding:"py-4"},lg:{title:"text-xl",description:"text-lg",spacing:"space-y-6",padding:"py-6"}},ee=`
      ${m[a].spacing}
      ${K}
    `,se=`
      ${o||r?m[a].padding:""}
      ${D?"border-t border-gray-200 dark:border-gray-700":""}
    `;return e.jsxDEV("div",{ref:G,className:ee,...Z,children:[D&&!o&&!r&&e.jsxDEV("div",{className:"border-t border-gray-200 dark:border-gray-700"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:89,columnNumber:11},void 0),(o||r)&&e.jsxDEV("div",{className:se,children:[o&&e.jsxDEV("div",{className:"flex items-center justify-between",children:[e.jsxDEV("h3",{className:`font-semibold text-gray-900 dark:text-gray-100 ${m[a].title}`,children:o},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:96,columnNumber:17},void 0),k&&e.jsxDEV("button",{type:"button",onClick:X,className:"ml-4 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors","aria-expanded":!n,"aria-label":n?`Expand ${o} section`:`Collapse ${o} section`,children:e.jsxDEV("svg",{className:`w-5 h-5 transform transition-transform ${n?"rotate-0":"rotate-180"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:113,columnNumber:23},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:107,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:100,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:95,columnNumber:15},void 0),r&&e.jsxDEV("p",{className:`text-gray-600 dark:text-gray-400 ${m[a].description} ${o?"mt-1":""}`,children:r},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:120,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:93,columnNumber:11},void 0),k?e.jsxDEV("div",{style:{display:n?"none":"block"},children:g},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:128,columnNumber:11},void 0):e.jsxDEV("div",{children:g},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:132,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.tsx",lineNumber:87,columnNumber:7},void 0)});i.displayName="FormSection";try{i.displayName="FormSection",i.__docgenInfo={description:"",displayName:"FormSection",props:{title:{defaultValue:null,description:"Section title",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Section description",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS class names",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Section content",name:"children",required:!0,type:{name:"ReactNode"}},showDivider:{defaultValue:{value:"false"},description:"Show divider above section",name:"showDivider",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Section size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},collapsible:{defaultValue:{value:"false"},description:"Whether section is collapsible",name:"collapsible",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:{value:"false"},description:"Initial collapsed state",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},collapsed:{defaultValue:null,description:"Controlled collapsed state",name:"collapsed",required:!1,type:{name:"boolean"}},onCollapsedChange:{defaultValue:null,description:"Callback when collapsed state changes",name:"onCollapsedChange",required:!1,type:{name:"((collapsed: boolean) => void)"}}}}}catch{}const me={title:"Form/FormSection",component:i,parameters:{layout:"padded",docs:{description:{component:"Form section component for grouping related form fields with optional dividers, titles, and collapsible functionality."}}},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},s=({label:o})=>e.jsxDEV(oe,{label:o,children:e.jsxDEV("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:29,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:28,columnNumber:3},void 0),c={args:{children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"First Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:40,columnNumber:9},void 0),e.jsxDEV(s,{label:"Last Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:41,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:39,columnNumber:7},void 0)}},d={args:{title:"Personal Information",children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"First Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:52,columnNumber:9},void 0),e.jsxDEV(s,{label:"Last Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:53,columnNumber:9},void 0),e.jsxDEV(s,{label:"Date of Birth"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:54,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:51,columnNumber:7},void 0)}},p={args:{title:"Contact Details",description:"Please provide your primary contact information for account verification.",children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"Email Address"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:66,columnNumber:9},void 0),e.jsxDEV(s,{label:"Phone Number"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:67,columnNumber:9},void 0),e.jsxDEV(s,{label:"Address"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:68,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:65,columnNumber:7},void 0)}},u={args:{title:"Billing Information",showDivider:!0,children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"Card Number"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:80,columnNumber:9},void 0),e.jsxDEV(s,{label:"Expiry Date"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:81,columnNumber:9},void 0),e.jsxDEV(s,{label:"CVV"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:82,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:79,columnNumber:7},void 0)}},f={args:{title:"Advanced Settings",description:"Optional configuration settings for power users.",collapsible:!0,children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"API Key"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:95,columnNumber:9},void 0),e.jsxDEV(s,{label:"Webhook URL"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:96,columnNumber:9},void 0),e.jsxDEV(s,{label:"Timeout"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:97,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:94,columnNumber:7},void 0)}},N={args:{title:"Optional Information",description:"Additional details that can be provided later.",collapsible:!0,defaultCollapsed:!0,children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"Company"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:111,columnNumber:9},void 0),e.jsxDEV(s,{label:"Job Title"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:112,columnNumber:9},void 0),e.jsxDEV(s,{label:"LinkedIn"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:113,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:110,columnNumber:7},void 0)}},b={render:()=>e.jsxDEV("div",{className:"space-y-8",children:[e.jsxDEV(i,{title:"Small Section",size:"sm",children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV(s,{label:"Field 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:124,columnNumber:11},void 0),e.jsxDEV(s,{label:"Field 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:125,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:123,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:122,columnNumber:7},void 0),e.jsxDEV(i,{title:"Medium Section",size:"md",children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"Field 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:131,columnNumber:11},void 0),e.jsxDEV(s,{label:"Field 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:132,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:130,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:129,columnNumber:7},void 0),e.jsxDEV(i,{title:"Large Section",size:"lg",children:e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV(s,{label:"Field 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:138,columnNumber:11},void 0),e.jsxDEV(s,{label:"Field 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:139,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:137,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:136,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:121,columnNumber:5},void 0)},v={render:()=>e.jsxDEV("form",{className:"max-w-2xl space-y-0",children:[e.jsxDEV(i,{title:"Personal Information",size:"lg",children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxDEV(s,{label:"First Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:152,columnNumber:13},void 0),e.jsxDEV(s,{label:"Last Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:153,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:151,columnNumber:11},void 0),e.jsxDEV(s,{label:"Email Address"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:155,columnNumber:11},void 0),e.jsxDEV(s,{label:"Phone Number"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:156,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:150,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:149,columnNumber:7},void 0),e.jsxDEV(i,{title:"Address",description:"Your primary residence address",showDivider:!0,children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"Street Address"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:166,columnNumber:11},void 0),e.jsxDEV("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxDEV(s,{label:"City"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:168,columnNumber:13},void 0),e.jsxDEV(s,{label:"State"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:169,columnNumber:13},void 0),e.jsxDEV(s,{label:"ZIP Code"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:170,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:167,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:165,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:160,columnNumber:7},void 0),e.jsxDEV(i,{title:"Preferences",description:"Optional settings and preferences",showDivider:!0,collapsible:!0,defaultCollapsed:!0,children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(s,{label:"Language"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:183,columnNumber:11},void 0),e.jsxDEV(s,{label:"Timezone"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:184,columnNumber:11},void 0),e.jsxDEV(s,{label:"Newsletter"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:185,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:182,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:175,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/formsection/FormSection.stories.tsx",lineNumber:148,columnNumber:5},void 0)};var S,F,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <div className="space-y-4">
        <SampleField label="First Name" />
        <SampleField label="Last Name" />
      </div>
  }
}`,...(j=(F=c.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var V,h,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Personal Information',
    children: <div className="space-y-4">
        <SampleField label="First Name" />
        <SampleField label="Last Name" />
        <SampleField label="Date of Birth" />
      </div>
  }
}`,...(E=(h=d.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var U,C,w;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Contact Details',
    description: 'Please provide your primary contact information for account verification.',
    children: <div className="space-y-4">
        <SampleField label="Email Address" />
        <SampleField label="Phone Number" />
        <SampleField label="Address" />
      </div>
  }
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var A,I,L;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Billing Information',
    showDivider: true,
    children: <div className="space-y-4">
        <SampleField label="Card Number" />
        <SampleField label="Expiry Date" />
        <SampleField label="CVV" />
      </div>
  }
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var P,z,T;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(z=f.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var q,W,_;N.parameters={...N.parameters,docs:{...(q=N.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(W=N.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var $,O,R;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(O=b.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var B,M,J;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(M=v.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};const ce=["Default","WithTitle","WithTitleAndDescription","WithDivider","Collapsible","CollapsibleDefaultClosed","Sizes","MultipleSection"];export{f as Collapsible,N as CollapsibleDefaultClosed,c as Default,v as MultipleSection,b as Sizes,u as WithDivider,d as WithTitle,p as WithTitleAndDescription,ce as __namedExportsOrder,me as default};
