import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as F}from"./index-BwDkhjyp.js";import{c as l}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const je={square:"aspect-square",video:"aspect-video",photo:"aspect-[4/3]",auto:""},ye={xs:"w-16 h-16",sm:"w-24 h-24",md:"w-32 h-32",lg:"w-48 h-48",xl:"w-64 h-64",full:"w-full h-full"},d={none:"",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},Ne={contain:"object-contain",cover:"object-cover",fill:"object-fill",none:"object-none","scale-down":"object-scale-down"},a=({src:s,alt:p,aspectRatio:i="auto",size:f="md",rounded:t="md",placeholder:r,fallback:c,loading:n="lazy",objectFit:V="cover",overlay:g,hoverOverlay:u,onLoad:o,onError:S,imgProps:pe,className:ue,...he})=>{const[h,C]=F.useState("loading"),[fe,k]=F.useState(!1),ge=()=>{C("loaded"),o==null||o()},ve=()=>{C("error"),S==null||S()},be=h==="loading"&&r,xe=h==="error"&&c,we=h==="loaded"||!r&&!c;return e.jsxs("div",{className:l("relative overflow-hidden",i!=="auto"&&je[i],f!=="full"&&ye[f],d[t],"group",ue),onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),...he,children:[s&&e.jsx("img",{src:s,alt:p,loading:n,className:l("w-full h-full",Ne[V],d[t],we?"opacity-100":"opacity-0","transition-opacity duration-200"),onLoad:ge,onError:ve,...pe}),be&&e.jsx("div",{className:l("absolute inset-0 flex items-center justify-center bg-gray-100",d[t]),children:r}),xe&&e.jsx("div",{className:l("absolute inset-0 flex items-center justify-center bg-gray-50",d[t]),children:c}),!s||h==="loading"&&!r?e.jsx("div",{className:l("absolute inset-0 flex items-center justify-center bg-gray-100",d[t]),children:e.jsx("div",{className:"animate-pulse",children:e.jsx("svg",{className:"w-8 h-8 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})})})}):null,h==="error"&&!c?e.jsx("div",{className:l("absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400",d[t]),children:e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}):null,g&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:g}),u&&e.jsx("div",{className:l("absolute inset-0 flex items-center justify-center transition-opacity duration-200",fe?"opacity-100":"opacity-0"),children:u})]})},ze={2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6"},Ie={xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},m=({images:s,altPrefix:p="Image",columns:i=3,gap:f="md",aspectRatio:t="square",rounded:r="md",objectFit:c="cover",onImageClick:n,className:V,...g})=>e.jsx("div",{className:l("grid",ze[i],Ie[f],V),...g,children:s.map((u,o)=>e.jsx(a,{src:u,alt:`${p} ${o+1}`,size:"full",aspectRatio:t,rounded:r,objectFit:c,className:n?"cursor-pointer hover:opacity-80 transition-opacity":void 0,onClick:()=>n==null?void 0:n(u,o)},o))});try{a.displayName="Image",a.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"Image source URL",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Alt text for accessibility",name:"alt",required:!0,type:{name:"string"}},aspectRatio:{defaultValue:{value:"square"},description:"Image aspect ratio",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"video"'},{value:'"photo"'},{value:'"auto"'}]}},size:{defaultValue:{value:"md"},description:"Image size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"full"'}]}},rounded:{defaultValue:{value:"md"},description:"Border radius variant",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},placeholder:{defaultValue:null,description:"Loading state placeholder",name:"placeholder",required:!1,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"Error fallback content",name:"fallback",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"lazy"},description:"Loading state behavior",name:"loading",required:!1,type:{name:"enum",value:[{value:'"lazy"'},{value:'"eager"'}]}},objectFit:{defaultValue:{value:"cover"},description:"Fit behavior",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"fill"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},overlay:{defaultValue:null,description:"Overlay content",name:"overlay",required:!1,type:{name:"ReactNode"}},hoverOverlay:{defaultValue:null,description:"Hover overlay content",name:"hoverOverlay",required:!1,type:{name:"ReactNode"}},onLoad:{defaultValue:null,description:"Callback when image loads successfully",name:"onLoad",required:!1,type:{name:"(() => void)"}},onError:{defaultValue:null,description:"Callback when image fails to load",name:"onError",required:!1,type:{name:"(() => void)"}},imgProps:{defaultValue:null,description:"Additional props to pass to the img element",name:"imgProps",required:!1,type:{name:'Omit<ImgHTMLAttributes<HTMLImageElement>, "className" | "onLoad" | "onError" | "alt" | "src" | "loading">'}}}}}catch{}try{m.displayName="ImageGallery",m.__docgenInfo={description:"",displayName:"ImageGallery",props:{images:{defaultValue:null,description:"Array of image sources",name:"images",required:!0,type:{name:"string[]"}},altPrefix:{defaultValue:{value:"Image"},description:"Alt text prefix (will be combined with index)",name:"altPrefix",required:!1,type:{name:"string"}},columns:{defaultValue:{value:"3"},description:"Number of columns in grid",name:"columns",required:!1,type:{name:"enum",value:[{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},gap:{defaultValue:{value:"md"},description:"Gap between images",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},aspectRatio:{defaultValue:{value:"square"},description:"Aspect ratio for all images",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"video"'},{value:'"photo"'},{value:'"auto"'}]}},rounded:{defaultValue:{value:"md"},description:"Rounded corners for all images",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},objectFit:{defaultValue:{value:"cover"},description:"Object fit for all images",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"fill"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},onImageClick:{defaultValue:null,description:"Callback when image is clicked",name:"onImageClick",required:!1,type:{name:"((src: string, index: number) => void)"}}}}}catch{}const Ce={title:"Media/Image",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{aspectRatio:{control:"select",options:["square","video","photo","auto"]},size:{control:"select",options:["xs","sm","md","lg","xl","full"]},rounded:{control:"select",options:["none","sm","md","lg","full"]},objectFit:{control:"select",options:["contain","cover","fill","none","scale-down"]}}},v={args:{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Beautiful landscape"}},b={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(a,{size:"xs",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Extra small"}),e.jsx(a,{size:"sm",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Small"}),e.jsx(a,{size:"md",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Medium"}),e.jsx(a,{size:"lg",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Large"})]})},x={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Square"}),e.jsx(a,{size:"full",aspectRatio:"square",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",alt:"Square image"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Video (16:9)"}),e.jsx(a,{size:"full",aspectRatio:"video",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",alt:"Video aspect ratio"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Photo (4:3)"}),e.jsx(a,{size:"full",aspectRatio:"photo",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Photo aspect ratio"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Auto"}),e.jsx(a,{size:"full",aspectRatio:"auto",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Auto aspect ratio",className:"h-32"})]})]}),parameters:{layout:"padded"}},w={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:"md",rounded:"none",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",alt:"No rounding"}),e.jsx("p",{className:"text-sm mt-2",children:"None"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:"md",rounded:"sm",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",alt:"Small rounding"}),e.jsx("p",{className:"text-sm mt-2",children:"Small"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:"md",rounded:"md",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",alt:"Medium rounding"}),e.jsx("p",{className:"text-sm mt-2",children:"Medium"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:"md",rounded:"lg",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",alt:"Large rounding"}),e.jsx("p",{className:"text-sm mt-2",children:"Large"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:"md",rounded:"full",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",alt:"Full rounding"}),e.jsx("p",{className:"text-sm mt-2",children:"Full"})]})]})},j={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Cover (default)"}),e.jsx(a,{size:"full",aspectRatio:"square",objectFit:"cover",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",alt:"Object fit cover"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Contain"}),e.jsx(a,{size:"full",aspectRatio:"square",objectFit:"contain",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",alt:"Object fit contain"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Fill"}),e.jsx(a,{size:"full",aspectRatio:"square",objectFit:"fill",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",alt:"Object fit fill"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Scale Down"}),e.jsx(a,{size:"full",aspectRatio:"square",objectFit:"scale-down",src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",alt:"Object fit scale down"})]})]}),parameters:{layout:"padded"}},y={args:{src:"",alt:"Loading image",size:"lg",placeholder:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-sm text-gray-500",children:"Loading..."})]})}},N={args:{src:"/broken-image-url.jpg",alt:"Broken image",size:"lg",fallback:e.jsxs("div",{className:"flex flex-col items-center gap-2 text-gray-400",children:[e.jsx("svg",{className:"w-12 h-12",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-sm",children:"Failed to load"})]})}},z={args:{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Image with overlay",size:"lg",overlay:e.jsxs("div",{className:"bg-black bg-opacity-50 text-white p-4 rounded",children:[e.jsx("h3",{className:"font-semibold",children:"Beautiful Landscape"}),e.jsx("p",{className:"text-sm",children:"A stunning mountain view"})]})}},I={args:{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Image with hover overlay",size:"lg",hoverOverlay:e.jsx("div",{className:"bg-black bg-opacity-75 text-white p-4 rounded",children:e.jsx("button",{className:"px-4 py-2 bg-white text-black rounded hover:bg-gray-100",children:"View Details"})})}},R={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Default Gallery (3 columns)"}),e.jsx(m,{images:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&rotation=90","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&brightness=80"],altPrefix:"Nature",className:"w-full max-w-2xl"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"4 Columns with Large Gap"}),e.jsx(m,{images:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop"],columns:4,gap:"lg",aspectRatio:"square",rounded:"lg",altPrefix:"Landscape",className:"w-full max-w-3xl"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Video Aspect Ratio (2 columns)"}),e.jsx(m,{images:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop","https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=225&fit=crop","https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=225&fit=crop"],columns:2,aspectRatio:"video",rounded:"md",altPrefix:"Wide",className:"w-full max-w-2xl"})]})]}),parameters:{layout:"padded"}},q={render:()=>{const s=(p,i)=>{alert(`Clicked image ${i+1}: ${p}`)};return e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Clickable Gallery"}),e.jsx(m,{images:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop"],columns:2,gap:"md",aspectRatio:"square",onImageClick:s,className:"w-full max-w-lg"}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Click on any image to see an alert"})]})},parameters:{layout:"padded"}};var L,O,G;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    alt: 'Beautiful landscape'
  }
}`,...(G=(O=v.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var _,P,A;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <Image size="xs" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Extra small" />
      <Image size="sm" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Small" />
      <Image size="md" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Medium" />
      <Image size="lg" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Large" />
    </div>
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var M,B,W;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 w-96">
      <div>
        <h3 className="text-sm font-semibold mb-2">Square</h3>
        <Image size="full" aspectRatio="square" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" alt="Square image" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Video (16:9)</h3>
        <Image size="full" aspectRatio="video" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop" alt="Video aspect ratio" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Photo (4:3)</h3>
        <Image size="full" aspectRatio="photo" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Photo aspect ratio" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Auto</h3>
        <Image size="full" aspectRatio="auto" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Auto aspect ratio" className="h-32" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(W=(B=x.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var E,H,D;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <div className="text-center">
        <Image size="md" rounded="none" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" alt="No rounding" />
        <p className="text-sm mt-2">None</p>
      </div>
      <div className="text-center">
        <Image size="md" rounded="sm" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" alt="Small rounding" />
        <p className="text-sm mt-2">Small</p>
      </div>
      <div className="text-center">
        <Image size="md" rounded="md" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" alt="Medium rounding" />
        <p className="text-sm mt-2">Medium</p>
      </div>
      <div className="text-center">
        <Image size="md" rounded="lg" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" alt="Large rounding" />
        <p className="text-sm mt-2">Large</p>
      </div>
      <div className="text-center">
        <Image size="md" rounded="full" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" alt="Full rounding" />
        <p className="text-sm mt-2">Full</p>
      </div>
    </div>
}`,...(D=(H=w.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var $,T,U;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 w-96">
      <div>
        <h3 className="text-sm font-semibold mb-2">Cover (default)</h3>
        <Image size="full" aspectRatio="square" objectFit="cover" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" alt="Object fit cover" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Contain</h3>
        <Image size="full" aspectRatio="square" objectFit="contain" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" alt="Object fit contain" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Fill</h3>
        <Image size="full" aspectRatio="square" objectFit="fill" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" alt="Object fit fill" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Scale Down</h3>
        <Image size="full" aspectRatio="square" objectFit="scale-down" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop" alt="Object fit scale down" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(U=(T=j.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    src: '',
    // Empty to show placeholder
    alt: 'Loading image',
    size: 'lg',
    placeholder: <div className="flex flex-col items-center gap-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="text-sm text-gray-500">Loading...</span>
      </div>
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    src: '/broken-image-url.jpg',
    alt: 'Broken image',
    size: 'lg',
    fallback: <div className="flex flex-col items-center gap-2 text-gray-400">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Failed to load</span>
      </div>
  }
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    alt: 'Image with overlay',
    size: 'lg',
    overlay: <div className="bg-black bg-opacity-50 text-white p-4 rounded">
        <h3 className="font-semibold">Beautiful Landscape</h3>
        <p className="text-sm">A stunning mountain view</p>
      </div>
  }
}`,...(se=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,le,oe;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    alt: 'Image with hover overlay',
    size: 'lg',
    hoverOverlay: <div className="bg-black bg-opacity-75 text-white p-4 rounded">
        <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100">
          View Details
        </button>
      </div>
  }
}`,...(oe=(le=I.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,re,ce;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Gallery (3 columns)</h3>
        <ImageGallery images={['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&rotation=90', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&brightness=80']} altPrefix="Nature" className="w-full max-w-2xl" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">4 Columns with Large Gap</h3>
        <ImageGallery images={['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop']} columns={4} gap="lg" aspectRatio="square" rounded="lg" altPrefix="Landscape" className="w-full max-w-3xl" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Video Aspect Ratio (2 columns)</h3>
        <ImageGallery images={['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop', 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=225&fit=crop', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=225&fit=crop']} columns={2} aspectRatio="video" rounded="md" altPrefix="Wide" className="w-full max-w-2xl" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(ce=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ne,de,me;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const handleImageClick = (src: string, index: number) => {
      alert(\`Clicked image \${index + 1}: \${src}\`);
    };
    return <div>
        <h3 className="text-lg font-semibold mb-4">Clickable Gallery</h3>
        <ImageGallery images={['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop']} columns={2} gap="md" aspectRatio="square" onImageClick={handleImageClick} className="w-full max-w-lg" />
        <p className="text-sm text-gray-600 mt-2">Click on any image to see an alert</p>
      </div>;
  },
  parameters: {
    layout: 'padded'
  }
}`,...(me=(de=q.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const ke=["Default","Sizes","AspectRatios","RoundedCorners","ObjectFit","WithPlaceholder","WithFallback","WithOverlay","WithHoverOverlay","ImageGalleryStory","InteractiveGallery"];export{x as AspectRatios,v as Default,R as ImageGalleryStory,q as InteractiveGallery,j as ObjectFit,w as RoundedCorners,b as Sizes,N as WithFallback,I as WithHoverOverlay,z as WithOverlay,y as WithPlaceholder,ke as __namedExportsOrder,Ce as default};
