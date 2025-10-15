import{j as r}from"./jsx-runtime-Yb_4y5hn.js";import{c as d}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const J=r.jsx("svg",{className:"w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),p=({items:a,separator:V=J,maxItems:g,itemsBeforeCollapse:H=1,itemsAfterCollapse:R=1,className:O,...z})=>{const F=g&&a.length>g,v=(()=>{if(!F)return a;const e=a.slice(0,H),t=a.slice(-R);return[...e,{label:"...",isEllipsis:!0},...t]})();return r.jsx("nav",{className:d("flex items-center space-x-2",O),"aria-label":"Breadcrumb",...z,children:r.jsx("ol",{className:"flex items-center space-x-2",children:v.map((e,t)=>{const s=t===v.length-1,G="isEllipsis"in e&&e.isEllipsis;return r.jsxs("li",{className:"flex items-center space-x-2",children:[G?r.jsx("span",{className:"text-gray-500 select-none",children:"..."}):e.href?r.jsx("a",{href:e.href,className:d("text-sm hover:text-gray-900 transition-colors",s||e.isActive?"text-gray-900 font-medium cursor-default":"text-gray-500 hover:text-gray-700"),"aria-current":s||e.isActive?"page":void 0,children:e.label}):r.jsx("button",{onClick:e.onClick,className:d("text-sm hover:text-gray-900 transition-colors",s||e.isActive?"text-gray-900 font-medium cursor-default":"text-gray-500 hover:text-gray-700"),"aria-current":s||e.isActive?"page":void 0,children:e.label}),!s&&r.jsx("span",{className:"flex-shrink-0","aria-hidden":"true",children:V})]},t)})})})};try{p.displayName="Breadcrumb",p.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"Array of breadcrumb items",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},separator:{defaultValue:{value:`(
  <svg
    className="w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)`},description:"Custom separator between items",name:"separator",required:!1,type:{name:"ReactNode"}},maxItems:{defaultValue:null,description:"Maximum number of items to show before truncating",name:"maxItems",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"Position of ellipsis when truncated",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"Position of ellipsis when truncated",name:"itemsAfterCollapse",required:!1,type:{name:"number"}}}}}catch{}const Z={title:"Navigation/Breadcrumb",component:p,parameters:{layout:"centered"},tags:["autodocs"]},q=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops",isActive:!0}],M=[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Subcategory",href:"/category/subcategory"},{label:"Products",href:"/category/subcategory/products"},{label:"Item Type",href:"/category/subcategory/products/type"},{label:"Specific Item",href:"/category/subcategory/products/type/item"},{label:"Details",isActive:!0}],l={args:{items:q}},n={args:{items:[{label:"Dashboard",onClick:()=>alert("Dashboard clicked")},{label:"Settings",onClick:()=>alert("Settings clicked")},{label:"Profile",isActive:!0}]}},o={args:{items:q,separator:r.jsx("span",{className:"text-gray-400",children:"/"})}},c={args:{items:M,maxItems:4}},i={args:{items:M,maxItems:5,itemsBeforeCollapse:2,itemsAfterCollapse:2}},m={args:{items:[{label:"Current Page",isActive:!0}]}},u={args:{items:[{label:"Root",href:"/"},{label:"Level 1",href:"/level1"},{label:"Level 2",href:"/level1/level2"},{label:"Level 3",href:"/level1/level2/level3"},{label:"Level 4",href:"/level1/level2/level3/level4"},{label:"Level 5",href:"/level1/level2/level3/level4/level5"},{label:"Current",isActive:!0}],maxItems:4}};var f,b,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,y,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,k,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    separator: <span className="text-gray-400">/</span>
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,L,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: longItems,
    maxItems: 4
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var j,B,_;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: longItems,
    maxItems: 5,
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 2
  }
}`,...(_=(B=i.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var w,P,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Current Page',
      isActive: true
    }]
  }
}`,...(D=(P=m.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var E,T,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const $=["Default","WithClickHandlers","WithCustomSeparator","Truncated","TruncatedCustom","SingleItem","ManyItems"];export{l as Default,u as ManyItems,m as SingleItem,c as Truncated,i as TruncatedCustom,n as WithClickHandlers,o as WithCustomSeparator,$ as __namedExportsOrder,Z as default};
