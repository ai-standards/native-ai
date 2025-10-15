import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as k}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({variant:t="body",weight:r="normal",color:l="default",align:s="left",as:m="p",className:o,children:v,...d})=>{const c=m,S=k("leading-relaxed",{"text-base":t==="body","text-xs":t==="caption"||t==="small","text-sm font-medium":t==="label","text-lg":t==="large","font-normal":r==="normal","font-medium":r==="medium","font-semibold":r==="semibold","font-bold":r==="bold","text-gray-900":l==="default","text-gray-600":l==="muted","text-gray-500":l==="subtle","text-blue-600":l==="accent","text-green-600":l==="success","text-yellow-600":l==="warning","text-red-600":l==="error","text-left":s==="left","text-center":s==="center","text-right":s==="right","text-justify":s==="justify"},o);return e.jsx(c,{className:S,...d,children:v})},a=({level:t=2,size:r,weight:l="semibold",color:s="default",align:m="left",mb:o="md",className:v,children:d,...c})=>{const x=r||{1:"3xl",2:"2xl",3:"xl",4:"lg",5:"md",6:"sm"}[t],u=k("font-semibold leading-tight tracking-tight",{"text-sm":x==="xs","text-base":x==="sm","text-lg":x==="md","text-xl":x==="lg","text-2xl":x==="xl","text-3xl":x==="2xl","text-4xl":x==="3xl","text-5xl":x==="4xl","font-normal":l==="normal","font-medium":l==="medium","font-semibold":l==="semibold","font-bold":l==="bold","text-gray-900":s==="default","text-gray-600":s==="muted","text-blue-600":s==="accent","text-left":m==="left","text-center":m==="center","text-right":m==="right","mb-0":o==="none","mb-2":o==="sm","mb-4":o==="md","mb-6":o==="lg"},v);return t===1?e.jsx("h1",{className:u,...c,children:d}):t===2?e.jsx("h2",{className:u,...c,children:d}):t===3?e.jsx("h3",{className:u,...c,children:d}):t===4?e.jsx("h4",{className:u,...c,children:d}):t===5?e.jsx("h5",{className:u,...c,children:d}):e.jsx("h6",{className:u,...c,children:d})},i=({variant:t="default",underline:r="hover",external:l=!1,className:s,children:m,...o})=>{const v=k("transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm",{"text-blue-600 hover:text-blue-800":t==="default","text-gray-600 hover:text-gray-800":t==="muted","text-blue-600 hover:text-blue-700":t==="accent","text-gray-500 hover:text-gray-700":t==="subtle",underline:r==="always","hover:underline":r==="hover","no-underline":r==="none"},s),d=l?{target:"_blank",rel:"noopener noreferrer",...o}:o;return e.jsxs("a",{className:v,...d,children:[m,l&&e.jsx("span",{className:"ml-1 inline-block text-xs","aria-label":"Opens in new tab",children:"↗"})]})};try{n.displayName="Text",n.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:{value:"default"},description:"Text variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"body"'},{value:'"caption"'},{value:'"small"'},{value:'"large"'}]}},weight:{defaultValue:{value:"semibold"},description:"Text weight",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"bold"'}]}},color:{defaultValue:{value:"default"},description:"Text color",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"default"'},{value:'"muted"'},{value:'"subtle"'},{value:'"accent"'}]}},align:{defaultValue:{value:"left"},description:"Text alignment",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"justify"'}]}},as:{defaultValue:{value:"p"},description:"HTML element to render",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"p"'},{value:'"span"'},{value:'"div"'}]}}}}}catch{}try{a.displayName="Heading",a.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:{value:"2"},description:"Heading level",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},size:{defaultValue:null,description:"Visual size (can differ from semantic level)",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'}]}},weight:{defaultValue:{value:"semibold"},description:"Text weight",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"bold"'}]}},color:{defaultValue:{value:"default"},description:"Text color",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"muted"'},{value:'"accent"'}]}},align:{defaultValue:{value:"left"},description:"Text alignment",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},mb:{defaultValue:{value:"md"},description:"Margin bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}}}}}catch{}try{i.displayName="Link",i.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:{value:"default"},description:"Link variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"muted"'},{value:'"subtle"'},{value:'"accent"'}]}},underline:{defaultValue:{value:"hover"},description:"Show underline",name:"underline",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"always"'},{value:'"hover"'}]}},external:{defaultValue:{value:"false"},description:"External link (opens in new tab)",name:"external",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"Content/Typography",parameters:{layout:"centered",docs:{description:{component:"Typography components for consistent text rendering and semantic structure."}}}},g={render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx("div",{children:e.jsx(n,{variant:"large",children:"Large text for prominent content"})}),e.jsx("div",{children:e.jsx(n,{variant:"body",children:"Body text for main content and paragraphs"})}),e.jsx("div",{children:e.jsx(n,{variant:"label",children:"Label text for form fields and UI elements"})}),e.jsx("div",{children:e.jsx(n,{variant:"caption",children:"Caption text for supplementary information"})}),e.jsx("div",{children:e.jsx(n,{variant:"small",children:"Small text for fine print and details"})})]})},h={render:()=>e.jsxs("div",{className:"space-y-2 max-w-lg",children:[e.jsx(n,{weight:"normal",children:"Normal weight text"}),e.jsx(n,{weight:"medium",children:"Medium weight text"}),e.jsx(n,{weight:"semibold",children:"Semibold weight text"}),e.jsx(n,{weight:"bold",children:"Bold weight text"})]})},p={render:()=>e.jsxs("div",{className:"space-y-2 max-w-lg",children:[e.jsx(n,{color:"default",children:"Default color text"}),e.jsx(n,{color:"muted",children:"Muted color text"}),e.jsx(n,{color:"subtle",children:"Subtle color text"}),e.jsx(n,{color:"accent",children:"Accent color text"}),e.jsx(n,{color:"success",children:"Success color text"}),e.jsx(n,{color:"warning",children:"Warning color text"}),e.jsx(n,{color:"error",children:"Error color text"})]})},f={render:()=>e.jsxs("div",{className:"space-y-4 w-80 border p-4",children:[e.jsx(n,{align:"left",children:"Left aligned text content"}),e.jsx(n,{align:"center",children:"Center aligned text content"}),e.jsx(n,{align:"right",children:"Right aligned text content"}),e.jsx(n,{align:"justify",children:"Justified text content that spreads evenly across the available width, creating clean edges on both sides of the paragraph."})]})},y={render:()=>e.jsxs("div",{className:"space-y-4 max-w-2xl",children:[e.jsx(a,{level:1,children:"Heading Level 1"}),e.jsx(a,{level:2,children:"Heading Level 2"}),e.jsx(a,{level:3,children:"Heading Level 3"}),e.jsx(a,{level:4,children:"Heading Level 4"}),e.jsx(a,{level:5,children:"Heading Level 5"}),e.jsx(a,{level:6,children:"Heading Level 6"})]})},j={render:()=>e.jsxs("div",{className:"space-y-4 max-w-2xl",children:[e.jsx(a,{size:"4xl",children:"4XL Size Heading"}),e.jsx(a,{size:"3xl",children:"3XL Size Heading"}),e.jsx(a,{size:"2xl",children:"2XL Size Heading"}),e.jsx(a,{size:"xl",children:"XL Size Heading"}),e.jsx(a,{size:"lg",children:"Large Size Heading"}),e.jsx(a,{size:"md",children:"Medium Size Heading"}),e.jsx(a,{size:"sm",children:"Small Size Heading"}),e.jsx(a,{size:"xs",children:"Extra Small Size Heading"})]})},T={render:()=>e.jsxs("div",{className:"space-y-4 max-w-2xl",children:[e.jsx(a,{level:2,weight:"bold",color:"accent",children:"Bold Accent Heading"}),e.jsx(a,{level:3,weight:"medium",color:"muted",align:"center",children:"Centered Muted Heading"}),e.jsx(a,{level:4,mb:"lg",children:"Heading with Large Bottom Margin"}),e.jsx(n,{children:"Following content..."})]})},H={render:()=>e.jsxs("div",{className:"space-y-2 max-w-lg",children:[e.jsx("div",{children:e.jsx(i,{href:"#",variant:"default",children:"Default link style"})}),e.jsx("div",{children:e.jsx(i,{href:"#",variant:"muted",children:"Muted link style"})}),e.jsx("div",{children:e.jsx(i,{href:"#",variant:"accent",children:"Accent link style"})}),e.jsx("div",{children:e.jsx(i,{href:"#",variant:"subtle",children:"Subtle link style"})})]})},b={render:()=>e.jsxs("div",{className:"space-y-2 max-w-lg",children:[e.jsx("div",{children:e.jsx(i,{href:"#",underline:"always",children:"Always underlined link"})}),e.jsx("div",{children:e.jsx(i,{href:"#",underline:"hover",children:"Underlined on hover (default)"})}),e.jsx("div",{children:e.jsx(i,{href:"#",underline:"none",children:"Never underlined link"})})]})},w={render:()=>e.jsxs("div",{className:"space-y-2 max-w-lg",children:[e.jsx("div",{children:e.jsx(i,{href:"https://example.com",children:"Internal-style link"})}),e.jsx("div",{children:e.jsx(i,{href:"https://example.com",external:!0,children:"External link with indicator"})})]})},L={render:()=>e.jsxs("article",{className:"max-w-2xl space-y-6 p-6",children:[e.jsx(a,{level:1,mb:"lg",children:"Typography Showcase"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{level:2,children:"Introduction"}),e.jsx(n,{children:"This is a comprehensive example of typography components working together. The components provide consistent styling while maintaining semantic HTML structure."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{level:3,color:"accent",children:"Key Features"}),e.jsxs(n,{children:["Typography components include support for various text sizes, weights, and colors. You can also use ",e.jsx(i,{href:"#",variant:"accent",children:"inline links"})," and",e.jsx(i,{href:"https://example.com",external:!0,children:"external links"})," within text content."]}),e.jsx(n,{variant:"caption",color:"muted",children:"This caption text demonstrates how different variants work together to create visual hierarchy."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{level:4,mb:"sm",children:"Contact Information"}),e.jsxs(n,{as:"div",children:[e.jsx(n,{variant:"label",as:"span",children:"Email:"})," ",e.jsx(i,{href:"mailto:example@domain.com",children:"example@domain.com"})]}),e.jsxs(n,{as:"div",children:[e.jsx(n,{variant:"label",as:"span",children:"Website:"})," ",e.jsx(i,{href:"https://example.com",external:!0,children:"example.com"})]})]})]})};var N,z,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-lg">
      <div>
        <Text variant="large">Large text for prominent content</Text>
      </div>
      <div>
        <Text variant="body">Body text for main content and paragraphs</Text>
      </div>
      <div>
        <Text variant="label">Label text for form fields and UI elements</Text>
      </div>
      <div>
        <Text variant="caption">Caption text for supplementary information</Text>
      </div>
      <div>
        <Text variant="small">Small text for fine print and details</Text>
      </div>
    </div>
}`,...(_=(z=g.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var V,M,q;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 max-w-lg">
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
}`,...(q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var E,C,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 max-w-lg">
      <Text color="default">Default color text</Text>
      <Text color="muted">Muted color text</Text>
      <Text color="subtle">Subtle color text</Text>
      <Text color="accent">Accent color text</Text>
      <Text color="success">Success color text</Text>
      <Text color="warning">Warning color text</Text>
      <Text color="error">Error color text</Text>
    </div>
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var A,B,X;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80 border p-4">
      <Text align="left">Left aligned text content</Text>
      <Text align="center">Center aligned text content</Text>
      <Text align="right">Right aligned text content</Text>
      <Text align="justify">
        Justified text content that spreads evenly across the available width, 
        creating clean edges on both sides of the paragraph.
      </Text>
    </div>
}`,...(X=(B=f.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var U,W,D;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-2xl">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
}`,...(D=(W=y.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var F,R,J;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-2xl">
      <Heading size="4xl">4XL Size Heading</Heading>
      <Heading size="3xl">3XL Size Heading</Heading>
      <Heading size="2xl">2XL Size Heading</Heading>
      <Heading size="xl">XL Size Heading</Heading>
      <Heading size="lg">Large Size Heading</Heading>
      <Heading size="md">Medium Size Heading</Heading>
      <Heading size="sm">Small Size Heading</Heading>
      <Heading size="xs">Extra Small Size Heading</Heading>
    </div>
}`,...(J=(R=j.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var K,O,Y;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-2xl">
      <Heading level={2} weight="bold" color="accent">
        Bold Accent Heading
      </Heading>
      <Heading level={3} weight="medium" color="muted" align="center">
        Centered Muted Heading
      </Heading>
      <Heading level={4} mb="lg">
        Heading with Large Bottom Margin
      </Heading>
      <Text>Following content...</Text>
    </div>
}`,...(Y=(O=T.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var P,G,Q;H.parameters={...H.parameters,docs:{...(P=H.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 max-w-lg">
      <div>
        <Link href="#" variant="default">Default link style</Link>
      </div>
      <div>
        <Link href="#" variant="muted">Muted link style</Link>
      </div>
      <div>
        <Link href="#" variant="accent">Accent link style</Link>
      </div>
      <div>
        <Link href="#" variant="subtle">Subtle link style</Link>
      </div>
    </div>
}`,...(Q=(G=H.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 max-w-lg">
      <div>
        <Link href="#" underline="always">Always underlined link</Link>
      </div>
      <div>
        <Link href="#" underline="hover">Underlined on hover (default)</Link>
      </div>
      <div>
        <Link href="#" underline="none">Never underlined link</Link>
      </div>
    </div>
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,ae,te;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 max-w-lg">
      <div>
        <Link href="https://example.com">Internal-style link</Link>
      </div>
      <div>
        <Link href="https://example.com" external>
          External link with indicator
        </Link>
      </div>
    </div>
}`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,ie,re;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <article className="max-w-2xl space-y-6 p-6">
      <Heading level={1} mb="lg">Typography Showcase</Heading>
      
      <div className="space-y-4">
        <Heading level={2}>Introduction</Heading>
        <Text>
          This is a comprehensive example of typography components working together. 
          The components provide consistent styling while maintaining semantic HTML structure.
        </Text>
      </div>
      
      <div className="space-y-4">
        <Heading level={3} color="accent">Key Features</Heading>
        <Text>
          Typography components include support for various text sizes, weights, and colors. 
          You can also use <Link href="#" variant="accent">inline links</Link> and 
          <Link href="https://example.com" external>external links</Link> within text content.
        </Text>
        
        <Text variant="caption" color="muted">
          This caption text demonstrates how different variants work together 
          to create visual hierarchy.
        </Text>
      </div>
      
      <div className="space-y-2">
        <Heading level={4} mb="sm">Contact Information</Heading>
        <Text as="div">
          <Text variant="label" as="span">Email:</Text>{' '}
          <Link href="mailto:example@domain.com">example@domain.com</Link>
        </Text>
        <Text as="div">
          <Text variant="label" as="span">Website:</Text>{' '}
          <Link href="https://example.com" external>example.com</Link>
        </Text>
      </div>
    </article>
}`,...(re=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};const ue=["TextVariants","TextWeights","TextColors","TextAlignment","HeadingLevels","HeadingSizes","HeadingVariations","LinkVariants","LinkUnderlines","ExternalLinks","TypographyShowcase"];export{w as ExternalLinks,y as HeadingLevels,j as HeadingSizes,T as HeadingVariations,b as LinkUnderlines,H as LinkVariants,f as TextAlignment,p as TextColors,g as TextVariants,h as TextWeights,L as TypographyShowcase,ue as __namedExportsOrder,me as default};
