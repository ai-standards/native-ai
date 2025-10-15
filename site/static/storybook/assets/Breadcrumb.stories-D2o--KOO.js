import{j as r}from"./jsx-dev-runtime-YqEzVWbi.js";import{c as d}from"./cn-BaF2GUMg.js";import"./index-DHZDe_v1.js";import"./_commonjsHelpers-BosuxZz1.js";const G=r.jsxDEV("svg",{className:"w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:32,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:25,columnNumber:3},void 0),p=({items:a,separator:q=G,maxItems:b,itemsBeforeCollapse:M=1,itemsAfterCollapse:H=1,className:R,...O})=>{const z=b&&a.length>b,f=(()=>{if(!z)return a;const e=a.slice(0,M),t=a.slice(-H);return[...e,{label:"...",isEllipsis:!0},...t]})();return r.jsxDEV("nav",{className:d("flex items-center space-x-2",R),"aria-label":"Breadcrumb",...O,children:r.jsxDEV("ol",{className:"flex items-center space-x-2",children:f.map((e,t)=>{const s=t===f.length-1,F="isEllipsis"in e&&e.isEllipsis;return r.jsxDEV("li",{className:"flex items-center space-x-2",children:[F?r.jsxDEV("span",{className:"text-gray-500 select-none",children:"..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:78,columnNumber:17},void 0):e.href?r.jsxDEV("a",{href:e.href,className:d("text-sm hover:text-gray-900 transition-colors",s||e.isActive?"text-gray-900 font-medium cursor-default":"text-gray-500 hover:text-gray-700"),"aria-current":s||e.isActive?"page":void 0,children:e.label},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:80,columnNumber:17},void 0):r.jsxDEV("button",{onClick:e.onClick,className:d("text-sm hover:text-gray-900 transition-colors",s||e.isActive?"text-gray-900 font-medium cursor-default":"text-gray-500 hover:text-gray-700"),"aria-current":s||e.isActive?"page":void 0,children:e.label},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:93,columnNumber:17},void 0),!s&&r.jsxDEV("span",{className:"flex-shrink-0","aria-hidden":"true",children:q},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:108,columnNumber:17},void 0)]},t,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:76,columnNumber:13},void 0)})},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:70,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.tsx",lineNumber:65,columnNumber:5},void 0)};try{p.displayName="Breadcrumb",p.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"Array of breadcrumb items",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},separator:{defaultValue:{value:`(
  <svg
    className="w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)`},description:"Custom separator between items",name:"separator",required:!1,type:{name:"ReactNode"}},maxItems:{defaultValue:null,description:"Maximum number of items to show before truncating",name:"maxItems",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"Position of ellipsis when truncated",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"Position of ellipsis when truncated",name:"itemsAfterCollapse",required:!1,type:{name:"number"}}}}}catch{}const Z={title:"Navigation/Breadcrumb",component:p,parameters:{layout:"centered"},tags:["autodocs"]},T=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops",isActive:!0}],W=[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Subcategory",href:"/category/subcategory"},{label:"Products",href:"/category/subcategory/products"},{label:"Item Type",href:"/category/subcategory/products/type"},{label:"Specific Item",href:"/category/subcategory/products/type/item"},{label:"Details",isActive:!0}],n={args:{items:T}},l={args:{items:[{label:"Dashboard",onClick:()=>alert("Dashboard clicked")},{label:"Settings",onClick:()=>alert("Settings clicked")},{label:"Profile",isActive:!0}]}},o={args:{items:T,separator:r.jsxDEV("span",{className:"text-gray-400",children:"/"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/breadcrumb/Breadcrumb.stories.tsx",lineNumber:52,columnNumber:16},void 0)}},i={args:{items:W,maxItems:4}},c={args:{items:W,maxItems:5,itemsBeforeCollapse:2,itemsAfterCollapse:2}},m={args:{items:[{label:"Current Page",isActive:!0}]}},u={args:{items:[{label:"Root",href:"/"},{label:"Level 1",href:"/level1"},{label:"Level 2",href:"/level1/level2"},{label:"Level 3",href:"/level1/level2/level3"},{label:"Level 4",href:"/level1/level2/level3/level4"},{label:"Level 5",href:"/level1/level2/level3/level4/level5"},{label:"Current",isActive:!0}],maxItems:4}};var v,g,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,y,N;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      onClick: () => alert('Dashboard clicked')
    }, {
      label: 'Settings',
      onClick: () => alert('Settings clicked')
    }, {
      label: 'Profile',
      isActive: true
    }]
  }
}`,...(N=(y=l.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var k,C,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    separator: <span className="text-gray-400">/</span>
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,j,B;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: longItems,
    maxItems: 4
  }
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,A,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: longItems,
    maxItems: 5,
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 2
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,V,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Current Page',
      isActive: true
    }]
  }
}`,...(U=(V=m.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var _,w,P;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Root',
      href: '/'
    }, {
      label: 'Level 1',
      href: '/level1'
    }, {
      label: 'Level 2',
      href: '/level1/level2'
    }, {
      label: 'Level 3',
      href: '/level1/level2/level3'
    }, {
      label: 'Level 4',
      href: '/level1/level2/level3/level4'
    }, {
      label: 'Level 5',
      href: '/level1/level2/level3/level4/level5'
    }, {
      label: 'Current',
      isActive: true
    }],
    maxItems: 4
  }
}`,...(P=(w=u.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const $=["Default","WithClickHandlers","WithCustomSeparator","Truncated","TruncatedCustom","SingleItem","ManyItems"];export{n as Default,u as ManyItems,m as SingleItem,i as Truncated,c as TruncatedCustom,l as WithClickHandlers,o as WithCustomSeparator,$ as __namedExportsOrder,Z as default};
