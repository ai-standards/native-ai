import{j as r}from"./jsx-runtime-Yb_4y5hn.js";import{r as ge}from"./index-BwDkhjyp.js";import{c as u}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const pe=r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),me=r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),m="...",L=({currentPage:e,totalPages:n,onPageChange:k,siblingCount:c=1,showFirstLast:f=!0,showPrevNext:_=!0,previousLabel:oe=pe,nextLabel:ie=me,disabled:t=!1,className:le,...ue})=>{const ce=(()=>{if(n<=7)return Array.from({length:n},(l,p)=>p+1);const a=Math.max(e-c,1),i=Math.min(e+c,n),s=a>2,d=i<n-1;if(!s&&d){const l=3+2*c;return[...Array.from({length:l},(S,W)=>W+1),m,n]}if(s&&!d){const l=3+2*c,p=Array.from({length:l},(S,W)=>n-l+W+1);return[1,m,...p]}if(s&&d){const l=Array.from({length:i-a+1},(p,S)=>a+S);return[1,m,...l,m,n]}return[]})(),q=e>1&&!t,I=e<n&&!t,g=a=>{t||a===e||a<1||a>n||k(a)},de=(a=!1,i=!1)=>u("px-3 py-2 text-sm font-medium transition-colors duration-200","border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-600 text-white border-blue-600 hover:bg-blue-700":a,"text-gray-900 bg-white":!a&&!i,"text-gray-400 bg-gray-100 cursor-not-allowed":i}),x=(a=!1)=>u("px-3 py-2 text-sm font-medium transition-colors duration-200","border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500","flex items-center justify-center",{"text-gray-900 bg-white hover:bg-gray-50":!a,"text-gray-400 bg-gray-100 cursor-not-allowed":a});return n<=1?null:r.jsx("nav",{className:u("flex items-center justify-center space-x-0",le),"aria-label":"Pagination",...ue,children:r.jsxs("div",{className:"flex -space-x-px rounded-md shadow-sm",children:[f&&r.jsx("button",{className:u(x(e===1||t),"rounded-l-md"),onClick:()=>g(1),disabled:e===1||t,"aria-label":"Go to first page",children:"First"}),_&&r.jsx("button",{className:u(x(!q),f?"":"rounded-l-md"),onClick:()=>g(e-1),disabled:!q,"aria-label":"Go to previous page",children:oe}),ce.map((a,i)=>{if(a===m)return r.jsx("span",{className:"px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300",children:"..."},`ellipsis-${i}`);const s=a,d=s===e;return r.jsx("button",{className:de(d,t),onClick:()=>g(s),disabled:t,"aria-current":d?"page":void 0,"aria-label":`Go to page ${s}`,children:s},s)}),_&&r.jsx("button",{className:u(x(!I),f?"":"rounded-r-md"),onClick:()=>g(e+1),disabled:!I,"aria-label":"Go to next page",children:ie}),f&&r.jsx("button",{className:u(x(e===n||t),"rounded-r-md"),onClick:()=>g(n),disabled:e===n||t,"aria-label":"Go to last page",children:"Last"})]})})};try{L.displayName="Pagination",L.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"Current active page (1-indexed)",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"Total number of pages",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"Callback when page changes",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},siblingCount:{defaultValue:{value:"1"},description:"Number of page buttons to show around current page",name:"siblingCount",required:!1,type:{name:"number"}},showFirstLast:{defaultValue:{value:"true"},description:"Show first/last page buttons",name:"showFirstLast",required:!1,type:{name:"boolean"}},showPrevNext:{defaultValue:{value:"true"},description:"Show previous/next buttons",name:"showPrevNext",required:!1,type:{name:"boolean"}},previousLabel:{defaultValue:{value:`(
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)`},description:"Custom previous button content",name:"previousLabel",required:!1,type:{name:"ReactNode"}},nextLabel:{defaultValue:{value:`(
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)`},description:"Custom next button content",name:"nextLabel",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const ye={title:"Navigation/Pagination",component:L,parameters:{layout:"centered"},tags:["autodocs"]},o=({totalPages:e,...n})=>{const[k,c]=ge.useState(1);return r.jsx(L,{...n,currentPage:k,totalPages:e,onPageChange:c})},b={render:e=>r.jsx(o,{...e}),args:{totalPages:10}},h={render:e=>r.jsx(o,{...e}),args:{totalPages:50}},v={render:e=>r.jsx(o,{...e}),args:{totalPages:5}},y={render:e=>r.jsx(o,{...e}),args:{totalPages:20,showFirstLast:!1}},P={render:e=>r.jsx(o,{...e}),args:{totalPages:20,showPrevNext:!1}},j={render:e=>r.jsx(o,{...e}),args:{totalPages:15,previousLabel:"Prev",nextLabel:"Next"}},N={render:e=>r.jsx(o,{...e}),args:{totalPages:30,siblingCount:3}},w={render:e=>r.jsx(o,{...e}),args:{totalPages:10,disabled:!0}},C={render:e=>r.jsx(o,{...e}),args:{totalPages:1}};var V,M,R;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 10
  }
}`,...(R=(M=b.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var G,E,F;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 50
  }
}`,...(F=(E=h.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var B,A,D;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 5
  }
}`,...(D=(A=v.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,$,O;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 20,
    showFirstLast: false
  }
}`,...(O=($=y.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var T,z,J;P.parameters={...P.parameters,docs:{...(T=P.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 20,
    showPrevNext: false
  }
}`,...(J=(z=P.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,U;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 15,
    previousLabel: 'Prev',
    nextLabel: 'Next'
  }
}`,...(U=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 30,
    siblingCount: 3
  }
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 10,
    disabled: true
  }
}`,...(ae=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 1
  }
}`,...(se=(te=C.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Pe=["Default","ManyPages","FewPages","WithoutFirstLast","WithoutPrevNext","CustomLabels","HighSiblingCount","Disabled","SinglePage"];export{j as CustomLabels,b as Default,w as Disabled,v as FewPages,N as HighSiblingCount,h as ManyPages,C as SinglePage,y as WithoutFirstLast,P as WithoutPrevNext,Pe as __namedExportsOrder,ye as default};
