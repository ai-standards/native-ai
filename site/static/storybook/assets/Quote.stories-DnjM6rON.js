import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as u}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const t=({variant:a="default",size:l="md",cite:c,citeAlign:d="right",className:A,children:C,...z})=>{const _=u("font-medium leading-relaxed",{"text-gray-700 italic":a==="default","border-l-4 border-blue-500 pl-4 text-gray-700":a==="bordered","bg-blue-50 border border-blue-200 p-4 rounded-lg text-blue-900":a==="highlighted","text-sm":l==="sm","text-base":l==="md","text-lg":l==="lg"},A),L=u("block mt-2 text-sm text-gray-600 font-normal",{"text-left":d==="left","text-center":d==="center","text-right":d==="right"});return e.jsxs("blockquote",{className:_,...z,children:[a==="default"&&e.jsx("span",{className:"text-4xl text-gray-300 leading-none",children:'"'}),e.jsx("div",{className:a==="default"?"inline":void 0,children:C}),a==="default"&&e.jsx("span",{className:"text-4xl text-gray-300 leading-none",children:'"'}),c&&e.jsxs("cite",{className:L,children:["— ",c]})]})};try{t.displayName="Quote",t.__docgenInfo={description:"",displayName:"Quote",props:{variant:{defaultValue:{value:"default"},description:"Quote variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'},{value:'"highlighted"'}]}},size:{defaultValue:{value:"md"},description:"Quote size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},cite:{defaultValue:null,description:"Citation or author",name:"cite",required:!1,type:{name:"ReactNode"}},citeAlign:{defaultValue:{value:"right"},description:"Citation alignment",name:"citeAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}}}catch{}const V={title:"Content/Quote",component:t,parameters:{layout:"centered",docs:{description:{component:"Blockquote component for displaying quotations and highlighted text."}}}},n={args:{children:"The best way to predict the future is to invent it.",cite:"Alan Kay"}},i={args:{children:"Quote text"},render:()=>e.jsxs("div",{className:"space-y-6 max-w-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Default"}),e.jsx(t,{children:"The only way to do great work is to love what you do."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Bordered"}),e.jsx(t,{variant:"bordered",cite:"Steve Jobs",children:"Innovation distinguishes between a leader and a follower."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Highlighted"}),e.jsx(t,{variant:"highlighted",cite:"Albert Einstein",children:"Imagination is more important than knowledge."})]})]})},r={args:{children:"Quote text"},render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(t,{size:"sm",cite:"Small Quote",children:"Small quote for compact layouts and sidebars."}),e.jsx(t,{size:"md",cite:"Medium Quote",children:"Medium quote for standard content areas and articles."}),e.jsx(t,{size:"lg",cite:"Large Quote",children:"Large quote for emphasis and featured testimonials."})]})},o={args:{children:"Quote text"},render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(t,{variant:"bordered",cite:"Left Citation",citeAlign:"left",children:"Quote with left-aligned citation."}),e.jsx(t,{variant:"bordered",cite:"Center Citation",citeAlign:"center",children:"Quote with center-aligned citation."}),e.jsx(t,{variant:"bordered",cite:"Right Citation",citeAlign:"right",children:"Quote with right-aligned citation (default)."})]})},s={args:{children:"Quote text"},render:()=>e.jsx("div",{className:"max-w-2xl",children:e.jsx(t,{variant:"highlighted",size:"lg",cite:"Maya Angelou",children:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. This quote demonstrates how the quote component handles longer text content with proper line wrapping and spacing."})})};var m,h,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'The best way to predict the future is to invent it.',
    cite: 'Alan Kay'
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var p,x,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Quote text'
  },
  render: () => <div className="space-y-6 max-w-lg">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Quote>
          The only way to do great work is to love what you do.
        </Quote>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Bordered</h3>
        <Quote variant="bordered" cite="Steve Jobs">
          Innovation distinguishes between a leader and a follower.
        </Quote>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Highlighted</h3>
        <Quote variant="highlighted" cite="Albert Einstein">
          Imagination is more important than knowledge.
        </Quote>
      </div>
    </div>
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,Q,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Quote text'
  },
  render: () => <div className="space-y-4 max-w-lg">
      <Quote size="sm" cite="Small Quote">
        Small quote for compact layouts and sidebars.
      </Quote>
      
      <Quote size="md" cite="Medium Quote">
        Medium quote for standard content areas and articles.
      </Quote>
      
      <Quote size="lg" cite="Large Quote">
        Large quote for emphasis and featured testimonials.
      </Quote>
    </div>
}`,...(w=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:w.source}}};var y,b,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Quote text'
  },
  render: () => <div className="space-y-4 max-w-lg">
      <Quote variant="bordered" cite="Left Citation" citeAlign="left">
        Quote with left-aligned citation.
      </Quote>
      
      <Quote variant="bordered" cite="Center Citation" citeAlign="center">
        Quote with center-aligned citation.
      </Quote>
      
      <Quote variant="bordered" cite="Right Citation" citeAlign="right">
        Quote with right-aligned citation (default).
      </Quote>
    </div>
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var N,q,S;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Quote text'
  },
  render: () => <div className="max-w-2xl">
      <Quote variant="highlighted" size="lg" cite="Maya Angelou">
        I've learned that people will forget what you said, people will forget what you did, 
        but people will never forget how you made them feel. This quote demonstrates how 
        the quote component handles longer text content with proper line wrapping and spacing.
      </Quote>
    </div>
}`,...(S=(q=s.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const D=["Default","Variants","Sizes","CitationAlignment","LongQuote"];export{o as CitationAlignment,n as Default,s as LongQuote,r as Sizes,i as Variants,D as __namedExportsOrder,V as default};
