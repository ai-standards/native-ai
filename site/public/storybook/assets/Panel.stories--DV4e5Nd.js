import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as X}from"./index-DHZDe_v1.js";import{c as N}from"./cn-BaF2GUMg.js";import{i as Y,a as ee}from"./Icon-D1EeTHi1.js";import"./_commonjsHelpers-BosuxZz1.js";const se={default:"bg-white border border-gray-200",outlined:"bg-transparent border-2 border-gray-300",filled:"bg-gray-50 border border-gray-200"},ne={sm:"text-sm",md:"text-base",lg:"text-lg"},n=({title:s,defaultCollapsed:Z=!1,collapsed:v,onCollapsedChange:f,collapsible:a=!0,variant:H="default",size:K="md",className:B,children:G,...J})=>{const[M,Q]=X.useState(Z),b=v!==void 0,l=b?v:M,x=()=>{if(!a)return;const i=!l;b||Q(i),f==null||f(i)},y=s||a;return e.jsxDEV("div",{className:N("rounded-lg overflow-hidden",se[H],ne[K],B),...J,children:[y&&e.jsxDEV("div",{className:N("px-4 py-3 border-b border-gray-200",a&&"cursor-pointer hover:bg-gray-50","flex items-center justify-between"),onClick:x,role:a?"button":void 0,tabIndex:a?0:void 0,onKeyDown:i=>{a&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),x())},"aria-expanded":a?!l:void 0,"aria-controls":a?"panel-content":void 0,children:[s&&e.jsxDEV("div",{className:"font-medium text-gray-900 flex-1",children:s},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.tsx",lineNumber:89,columnNumber:13},void 0),a&&e.jsxDEV("div",{className:"ml-2 text-gray-400",children:l?e.jsxDEV(Y,{size:16},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.tsx",lineNumber:96,columnNumber:17},void 0):e.jsxDEV(ee,{size:16},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.tsx",lineNumber:98,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.tsx",lineNumber:94,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.tsx",lineNumber:70,columnNumber:9},void 0),e.jsxDEV("div",{id:"panel-content",className:N("transition-all duration-200 ease-in-out",l?"max-h-0 overflow-hidden":"max-h-none",!y&&"rounded-lg"),children:e.jsxDEV("div",{className:"p-4",children:G},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.tsx",lineNumber:113,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.tsx",lineNumber:105,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.tsx",lineNumber:60,columnNumber:5},void 0)};try{n.displayName="Panel",n.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},onCollapsedChange:{defaultValue:null,description:"",name:"onCollapsedChange",required:!1,type:{name:"((collapsed: boolean) => void)"}},collapsible:{defaultValue:{value:"true"},description:"",name:"collapsible",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"filled"'},{value:'"outlined"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const oe={title:"Surface/Panel",component:n,parameters:{layout:"centered",docs:{description:{component:"A collapsible content panel with title, variants, and state management. Perfect for organizing content sections."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"The title displayed in the panel header"},defaultCollapsed:{control:"boolean",description:"Initial collapsed state (uncontrolled)"},collapsed:{control:"boolean",description:"Collapsed state (controlled)"},collapsible:{control:"boolean",description:"Whether the panel can be collapsed"},variant:{control:"select",options:["default","outlined","filled"],description:"Visual style variant"},size:{control:"select",options:["sm","md","lg"],description:"Text size variant"},children:{control:!1,description:"Panel content"}}},t={args:{title:"Panel Title",children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("p",{children:"This is the panel content. It can contain any React elements."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:58,columnNumber:9},void 0),e.jsxDEV("p",{children:"Click the header to collapse or expand the panel."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:59,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:57,columnNumber:7},void 0)}},r={args:{collapsible:!1,children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("h3",{className:"font-semibold",children:"Content Only Panel"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:70,columnNumber:9},void 0),e.jsxDEV("p",{children:"This panel has no title bar and is not collapsible."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:71,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:69,columnNumber:7},void 0)}},o={args:{title:"Collapsed Panel",defaultCollapsed:!0,children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("p",{children:"This panel starts in a collapsed state."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:83,columnNumber:9},void 0),e.jsxDEV("p",{children:"Click the header to expand it."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:84,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:82,columnNumber:7},void 0)}},c={args:{title:"Always Visible",collapsible:!1,children:e.jsxDEV("div",{className:"space-y-3",children:[e.jsxDEV("p",{children:"This panel cannot be collapsed."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:96,columnNumber:9},void 0),e.jsxDEV("p",{children:"The header is not clickable and shows no chevron."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:97,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:95,columnNumber:7},void 0)}},m={render:()=>e.jsxDEV("div",{className:"space-y-6 w-full max-w-2xl",children:["default","outlined","filled"].map(s=>e.jsxDEV(n,{variant:s,title:`${s.charAt(0).toUpperCase()+s.slice(1)} Panel`,children:e.jsxDEV("p",{children:['This panel uses the "',s,'" variant style.']},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:108,columnNumber:11},void 0)},s,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:107,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:105,columnNumber:5},void 0)},u={render:()=>e.jsxDEV("div",{className:"space-y-6 w-full max-w-2xl",children:["sm","md","lg"].map(s=>e.jsxDEV(n,{size:s,title:`${s.toUpperCase()} Size Panel`,children:e.jsxDEV("p",{children:['This panel uses the "',s,'" size variant.']},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:120,columnNumber:11},void 0)},s,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:119,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:117,columnNumber:5},void 0)},p={render:()=>e.jsxDEV("div",{className:"w-full max-w-md space-y-4",children:[e.jsxDEV(n,{title:"Personal Information",variant:"outlined",children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:133,columnNumber:13},void 0),e.jsxDEV("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:136,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:132,columnNumber:11},void 0),e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:143,columnNumber:13},void 0),e.jsxDEV("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:146,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:142,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:131,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:130,columnNumber:7},void 0),e.jsxDEV(n,{title:"Preferences",variant:"outlined",defaultCollapsed:!0,children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"flex items-center",children:[e.jsxDEV("input",{type:"checkbox",id:"newsletter",className:"mr-2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:158,columnNumber:13},void 0),e.jsxDEV("label",{htmlFor:"newsletter",className:"text-sm",children:"Subscribe to newsletter"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:159,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:157,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex items-center",children:[e.jsxDEV("input",{type:"checkbox",id:"notifications",className:"mr-2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:162,columnNumber:13},void 0),e.jsxDEV("label",{htmlFor:"notifications",className:"text-sm",children:"Enable notifications"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:163,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:161,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:156,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:155,columnNumber:7},void 0),e.jsxDEV(n,{title:"Advanced Settings",variant:"outlined",defaultCollapsed:!0,children:e.jsxDEV("div",{className:"space-y-4",children:e.jsxDEV("div",{children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Theme"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:171,columnNumber:13},void 0),e.jsxDEV("select",{className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsxDEV("option",{children:"Light"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:175,columnNumber:15},void 0),e.jsxDEV("option",{children:"Dark"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:176,columnNumber:15},void 0),e.jsxDEV("option",{children:"Auto"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:177,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:174,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:170,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:169,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:168,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:129,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using panels in a form layout with collapsible sections."}}}},d={render:()=>e.jsxDEV("div",{className:"w-full max-w-2xl space-y-6",children:[e.jsxDEV(n,{title:"Account Settings",variant:"filled",children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between",children:[e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"font-medium",children:"Two-Factor Authentication"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:200,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"Add an extra layer of security"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:201,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:199,columnNumber:13},void 0),e.jsxDEV("button",{className:"px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",children:"Enable"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:203,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:198,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex items-center justify-between",children:[e.jsxDEV("div",{children:[e.jsxDEV("h4",{className:"font-medium",children:"Email Notifications"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:209,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"Receive updates via email"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:210,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:208,columnNumber:13},void 0),e.jsxDEV("button",{className:"px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50",children:"Configure"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:212,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:207,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:197,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:196,columnNumber:7},void 0),e.jsxDEV(n,{title:"Privacy Settings",variant:"filled",defaultCollapsed:!0,children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between",children:[e.jsxDEV("span",{children:"Profile Visibility"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:222,columnNumber:13},void 0),e.jsxDEV("select",{className:"px-2 py-1 border rounded text-sm",children:[e.jsxDEV("option",{children:"Public"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:224,columnNumber:15},void 0),e.jsxDEV("option",{children:"Friends"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:225,columnNumber:15},void 0),e.jsxDEV("option",{children:"Private"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:226,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:223,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:221,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex items-center justify-between",children:[e.jsxDEV("span",{children:"Search Engine Indexing"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:230,columnNumber:13},void 0),e.jsxDEV("input",{type:"checkbox"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:231,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:229,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:220,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:219,columnNumber:7},void 0),e.jsxDEV(n,{title:"Danger Zone",variant:"outlined",children:e.jsxDEV("div",{className:"space-y-4",children:e.jsxDEV("div",{className:"p-4 bg-red-50 border border-red-200 rounded",children:[e.jsxDEV("h4",{className:"font-medium text-red-900",children:"Delete Account"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:239,columnNumber:13},void 0),e.jsxDEV("p",{className:"text-sm text-red-700 mt-1",children:"This action cannot be undone. All your data will be permanently deleted."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:240,columnNumber:13},void 0),e.jsxDEV("button",{className:"mt-3 px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700",children:"Delete Account"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:243,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:238,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:237,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:236,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/panel/Panel.stories.tsx",lineNumber:195,columnNumber:5},void 0),parameters:{docs:{description:{story:"Example of using panels for a settings page with different importance levels."}}}};var g,h,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Panel Title',
    children: <div className="space-y-3">
        <p>This is the panel content. It can contain any React elements.</p>
        <p>Click the header to collapse or expand the panel.</p>
      </div>
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var D,j,P;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    collapsible: false,
    children: <div className="space-y-3">
        <h3 className="font-semibold">Content Only Panel</h3>
        <p>This panel has no title bar and is not collapsible.</p>
      </div>
  }
}`,...(P=(j=r.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var E,V,U;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Collapsed Panel',
    defaultCollapsed: true,
    children: <div className="space-y-3">
        <p>This panel starts in a collapsed state.</p>
        <p>Click the header to expand it.</p>
      </div>
  }
}`,...(U=(V=o.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var w,C,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Always Visible',
    collapsible: false,
    children: <div className="space-y-3">
        <p>This panel cannot be collapsed.</p>
        <p>The header is not clickable and shows no chevron.</p>
      </div>
  }
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,A,z;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-full max-w-2xl">
      {(['default', 'outlined', 'filled'] as const).map(variant => <Panel key={variant} variant={variant} title={\`\${variant.charAt(0).toUpperCase() + variant.slice(1)} Panel\`}>
          <p>This panel uses the "{variant}" variant style.</p>
        </Panel>)}
    </div>
}`,...(z=(A=m.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var F,I,_;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-full max-w-2xl">
      {(['sm', 'md', 'lg'] as const).map(size => <Panel key={size} size={size} title={\`\${size.toUpperCase()} Size Panel\`}>
          <p>This panel uses the "{size}" size variant.</p>
        </Panel>)}
    </div>
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,R,L;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-4">
      <Panel title="Personal Information" variant="outlined">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
        </div>
      </Panel>

      <Panel title="Preferences" variant="outlined" defaultCollapsed>
        <div className="space-y-4">
          <div className="flex items-center">
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-sm">Subscribe to newsletter</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="notifications" className="mr-2" />
            <label htmlFor="notifications" className="text-sm">Enable notifications</label>
          </div>
        </div>
      </Panel>

      <Panel title="Advanced Settings" variant="outlined" defaultCollapsed>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Theme
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>
        </div>
      </Panel>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using panels in a form layout with collapsible sections.'
      }
    }
  }
}`,...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var $,O,W;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-6">
      <Panel title="Account Settings" variant="filled">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
            </div>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Enable
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-gray-600">Receive updates via email</p>
            </div>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
              Configure
            </button>
          </div>
        </div>
      </Panel>

      <Panel title="Privacy Settings" variant="filled" defaultCollapsed>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Profile Visibility</span>
            <select className="px-2 py-1 border rounded text-sm">
              <option>Public</option>
              <option>Friends</option>
              <option>Private</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span>Search Engine Indexing</span>
            <input type="checkbox" />
          </div>
        </div>
      </Panel>

      <Panel title="Danger Zone" variant="outlined">
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="font-medium text-red-900">Delete Account</h4>
            <p className="text-sm text-red-700 mt-1">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
            <button className="mt-3 px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>
      </Panel>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using panels for a settings page with different importance levels.'
      }
    }
  }
}`,...(W=(O=d.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const ce=["Default","WithoutTitle","DefaultCollapsed","NonCollapsible","Variants","Sizes","FormExample","SettingsPage"];export{t as Default,o as DefaultCollapsed,p as FormExample,c as NonCollapsible,d as SettingsPage,u as Sizes,m as Variants,r as WithoutTitle,ce as __namedExportsOrder,oe as default};
