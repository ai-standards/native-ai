import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as K}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const Q={default:"text-blue-600 hover:text-blue-800",primary:"text-blue-600 hover:text-blue-800",secondary:"text-gray-600 hover:text-gray-800",muted:"text-gray-500 hover:text-gray-700",destructive:"text-red-600 hover:text-red-800"},X={sm:"text-sm",md:"text-base",lg:"text-lg"},Z={none:"no-underline",hover:"no-underline hover:underline",always:"underline"},$=()=>e.jsx("svg",{className:"w-3 h-3 ml-1 inline-block",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),r=({variant:p="default",size:T="md",isActive:i=!1,external:U=!1,showExternalIcon:O=!0,underline:C="hover",disabled:n=!1,className:R,children:Y,href:a,target:B,rel:H,onClick:h,...F})=>{const m=U||a&&(a.startsWith("http")||a.startsWith("mailto:")||a.startsWith("tel:")),x=B||(m?"_blank":void 0),G=H||(m&&x==="_blank"?"noopener noreferrer":void 0),J=v=>{if(n){v.preventDefault(),v.stopPropagation();return}h==null||h(v)};return e.jsxs("a",{className:K("inline-flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",X[T],Z[C],{[Q[p]]:!n&&!i,"text-blue-900 font-medium":i&&!n,"text-gray-400 cursor-not-allowed":n,"cursor-default":i},R),href:n?void 0:a,target:x,rel:G,"aria-current":i?"page":void 0,"aria-disabled":n,onClick:J,...F,children:[Y,m&&O&&!n&&e.jsx($,{})]})};try{r.displayName="Link",r.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:{value:"default"},description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"default"'},{value:'"destructive"'},{value:'"muted"'}]}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},isActive:{defaultValue:{value:"false"},description:"Whether the link is currently active",name:"isActive",required:!1,type:{name:"boolean"}},external:{defaultValue:{value:"false"},description:"Whether this is an external link",name:"external",required:!1,type:{name:"boolean"}},showExternalIcon:{defaultValue:{value:"true"},description:"Show external link icon",name:"showExternalIcon",required:!1,type:{name:"boolean"}},underline:{defaultValue:{value:"hover"},description:"Underline behavior",name:"underline",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"always"'},{value:'"hover"'}]}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Navigation/Link",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{href:"#",children:"Default Link"}},t={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"space-x-4",children:[e.jsx(r,{href:"#",variant:"default",children:"Default"}),e.jsx(r,{href:"#",variant:"primary",children:"Primary"}),e.jsx(r,{href:"#",variant:"secondary",children:"Secondary"}),e.jsx(r,{href:"#",variant:"muted",children:"Muted"}),e.jsx(r,{href:"#",variant:"destructive",children:"Destructive"})]})})},l={render:()=>e.jsxs("div",{className:"space-x-4",children:[e.jsx(r,{href:"#",size:"sm",children:"Small Link"}),e.jsx(r,{href:"#",size:"md",children:"Medium Link"}),e.jsx(r,{href:"#",size:"lg",children:"Large Link"})]})},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(r,{href:"#",underline:"none",children:"No underline"})}),e.jsx("div",{children:e.jsx(r,{href:"#",underline:"hover",children:"Underline on hover"})}),e.jsx("div",{children:e.jsx(r,{href:"#",underline:"always",children:"Always underlined"})})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(r,{href:"#",isActive:!0,children:"Active Link"})}),e.jsx("div",{children:e.jsx(r,{href:"#",disabled:!0,children:"Disabled Link"})})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(r,{href:"https://example.com",children:"Automatic external"})}),e.jsx("div",{children:e.jsx(r,{href:"#",external:!0,children:"Manually external"})}),e.jsx("div",{children:e.jsx(r,{href:"https://example.com",showExternalIcon:!1,children:"No icon"})}),e.jsx("div",{children:e.jsx(r,{href:"mailto:test@example.com",children:"Email link"})}),e.jsx("div",{children:e.jsx(r,{href:"tel:+1234567890",children:"Phone link"})})]})},u={render:()=>e.jsxs("p",{className:"text-gray-700",children:["This is a paragraph with a ",e.jsx(r,{href:"#",children:"link in the middle"})," of the text. You can also have ",e.jsx(r,{href:"https://example.com",children:"external links"})," that open in new tabs."]})};var f,k,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Default Link'
  }
}`,...(L=(k=s.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var y,j,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-x-4">
        <Link href="#" variant="default">Default</Link>
        <Link href="#" variant="primary">Primary</Link>
        <Link href="#" variant="secondary">Secondary</Link>
        <Link href="#" variant="muted">Muted</Link>
        <Link href="#" variant="destructive">Destructive</Link>
      </div>
    </div>
}`,...(g=(j=t.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var N,b,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-x-4">
      <Link href="#" size="sm">Small Link</Link>
      <Link href="#" size="md">Medium Link</Link>
      <Link href="#" size="lg">Large Link</Link>
    </div>
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,z,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div><Link href="#" underline="none">No underline</Link></div>
      <div><Link href="#" underline="hover">Underline on hover</Link></div>
      <div><Link href="#" underline="always">Always underlined</Link></div>
    </div>
}`,...(D=(z=d.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var E,_,V;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div><Link href="#" isActive>Active Link</Link></div>
      <div><Link href="#" disabled>Disabled Link</Link></div>
    </div>
}`,...(V=(_=o.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var I,M,q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div><Link href="https://example.com">Automatic external</Link></div>
      <div><Link href="#" external>Manually external</Link></div>
      <div><Link href="https://example.com" showExternalIcon={false}>No icon</Link></div>
      <div><Link href="mailto:test@example.com">Email link</Link></div>
      <div><Link href="tel:+1234567890">Phone link</Link></div>
    </div>
}`,...(q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var A,W,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <p className="text-gray-700">
      This is a paragraph with a <Link href="#">link in the middle</Link> of the text.
      You can also have <Link href="https://example.com">external links</Link> that 
      open in new tabs.
    </p>
}`,...(P=(W=u.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};const se=["Default","Variants","Sizes","UnderlineOptions","States","ExternalLinks","InText"];export{s as Default,c as ExternalLinks,u as InText,l as Sizes,o as States,d as UnderlineOptions,t as Variants,se as __namedExportsOrder,ie as default};
