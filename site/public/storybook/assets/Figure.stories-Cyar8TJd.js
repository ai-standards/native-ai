import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as g}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const W={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl",full:"w-full"},D={left:"mr-auto",center:"mx-auto",right:"ml-auto"},Y={none:"",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},H={dark:"bg-black bg-opacity-75 text-white",light:"bg-white bg-opacity-90 text-gray-900",blur:"bg-white bg-opacity-80 backdrop-blur-sm text-gray-900"},a=({caption:o,captionPosition:t="bottom",size:i="md",rounded:r="md",align:h="center",overlayBackground:v="dark",children:x,className:s,...w})=>{const y=t.startsWith("overlay");return e.jsxs("figure",{className:g("relative",W[i],D[h],s),...w,children:[o&&t==="top"&&e.jsx("figcaption",{className:"mb-2 text-sm text-gray-600 text-center",children:o}),e.jsxs("div",{className:g("relative overflow-hidden",Y[r]),children:[x,o&&y&&e.jsx("figcaption",{className:g("absolute left-0 right-0 px-4 py-2 text-sm",t==="overlay-top"?"top-0":"bottom-0",H[v],t==="overlay-top"&&r!=="none"&&"rounded-t-md",t==="overlay-bottom"&&r!=="none"&&"rounded-b-md"),children:o})]}),o&&t==="bottom"&&e.jsx("figcaption",{className:"mt-2 text-sm text-gray-600 text-center",children:o})]})},J={2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6"},K={xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},b=({figures:o,columns:t=3,gap:i="md",captionPosition:r="bottom",size:h="full",rounded:v="md",overlayBackground:x="dark",onFigureClick:s,className:w,...y})=>e.jsx("div",{className:g("grid",J[t],K[i],w),...y,children:o.map((l,j)=>e.jsx(a,{caption:l.caption,captionPosition:r,size:h,rounded:v,overlayBackground:x,className:s?"cursor-pointer hover:opacity-80 transition-opacity":void 0,onClick:()=>s==null?void 0:s(l,j),children:l.content},l.id||j))});try{a.displayName="Figure",a.__docgenInfo={description:"",displayName:"Figure",props:{caption:{defaultValue:null,description:"Caption text or element",name:"caption",required:!1,type:{name:"ReactNode"}},captionPosition:{defaultValue:{value:"bottom"},description:"Caption position",name:"captionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"overlay-top"'},{value:'"overlay-bottom"'}]}},size:{defaultValue:{value:"full"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},rounded:{defaultValue:{value:"md"},description:"Border radius",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},align:{defaultValue:{value:"center"},description:"Alignment",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},overlayBackground:{defaultValue:{value:"dark"},description:"Background for overlay captions",name:"overlayBackground",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"blur"'}]}},children:{defaultValue:null,description:"Media content",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{b.displayName="FigureGallery",b.__docgenInfo={description:"",displayName:"FigureGallery",props:{figures:{defaultValue:null,description:"Array of figure items",name:"figures",required:!0,type:{name:"{ content: ReactNode; caption?: ReactNode; id?: string | undefined; }[]"}},columns:{defaultValue:{value:"3"},description:"Number of columns in grid",name:"columns",required:!1,type:{name:"enum",value:[{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},gap:{defaultValue:{value:"md"},description:"Gap between figures",name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},captionPosition:{defaultValue:{value:"bottom"},description:"Caption position for all figures",name:"captionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"overlay-top"'},{value:'"overlay-bottom"'}]}},size:{defaultValue:{value:"full"},description:"Size for all figures",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},rounded:{defaultValue:{value:"md"},description:"Rounded corners for all figures",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},overlayBackground:{defaultValue:{value:"dark"},description:"Overlay background for all figures",name:"overlayBackground",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"blur"'}]}},onFigureClick:{defaultValue:null,description:"Callback when figure is clicked",name:"onFigureClick",required:!1,type:{name:"((figure: any, index: number) => void)"}}}}}catch{}const ee={title:"Media/Figure",component:a,parameters:{layout:"centered",docs:{description:{component:"A semantic figure component for displaying media content with captions."}}},argTypes:{captionPosition:{control:{type:"select"},options:["top","bottom","overlay-top","overlay-bottom"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","full"]},rounded:{control:{type:"select"},options:["none","sm","md","lg","full"]},align:{control:{type:"select"},options:["left","center","right"]},overlayBackground:{control:{type:"select"},options:["dark","light","blur"]}}},n={args:{caption:"A beautiful sunset over the mountains",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain sunset",className:"w-full h-48 object-cover"})}},c={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 max-w-4xl",children:[e.jsx(a,{caption:"Top caption",captionPosition:"top",size:"sm",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})}),e.jsx(a,{caption:"Bottom caption",captionPosition:"bottom",size:"sm",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})}),e.jsx(a,{caption:"Overlay top caption",captionPosition:"overlay-top",size:"sm",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})}),e.jsx(a,{caption:"Overlay bottom caption",captionPosition:"overlay-bottom",size:"sm",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})})]})},u={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx(a,{caption:"Extra small figure",size:"xs",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})}),e.jsx(a,{caption:"Small figure",size:"sm",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})}),e.jsx(a,{caption:"Medium figure",size:"md",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})})]})},m={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-3xl",children:[e.jsx(a,{caption:"Dark overlay",captionPosition:"overlay-bottom",overlayBackground:"dark",size:"sm",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})}),e.jsx(a,{caption:"Light overlay",captionPosition:"overlay-bottom",overlayBackground:"light",size:"sm",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})}),e.jsx(a,{caption:"Blur overlay",captionPosition:"overlay-bottom",overlayBackground:"blur",size:"sm",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Mountain",className:"w-full h-32 object-cover"})})]})},p={render:()=>e.jsx(a,{caption:"A sample video with figure caption",captionPosition:"overlay-bottom",size:"md",children:e.jsxs("video",{className:"w-full h-48",controls:!0,poster:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",children:[e.jsx("source",{src:"https://www.w3schools.com/html/mov_bbb.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})},d={render:()=>{const o=[{id:"1",content:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain 1",className:"w-full h-32 object-cover"}),caption:"Mountain Landscape 1"},{id:"2",content:e.jsx("img",{src:"https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain 2",className:"w-full h-32 object-cover"}),caption:"Mountain Landscape 2"},{id:"3",content:e.jsx("img",{src:"https://images.unsplash.com/photo-1464822759844-d150fff8c2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain 3",className:"w-full h-32 object-cover"}),caption:"Mountain Landscape 3"},{id:"4",content:e.jsx("img",{src:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain 4",className:"w-full h-32 object-cover"}),caption:"Mountain Landscape 4"}];return e.jsx("div",{className:"max-w-4xl",children:e.jsx(b,{figures:o,columns:2,gap:"md",captionPosition:"bottom"})})}},f={render:()=>{const o=[{id:"1",content:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain 1",className:"w-full h-32 object-cover"}),caption:"Clickable Figure 1"},{id:"2",content:e.jsx("img",{src:"https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain 2",className:"w-full h-32 object-cover"}),caption:"Clickable Figure 2"},{id:"3",content:e.jsx("img",{src:"https://images.unsplash.com/photo-1464822759844-d150fff8c2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Mountain 3",className:"w-full h-32 object-cover"}),caption:"Clickable Figure 3"}];return e.jsx("div",{className:"max-w-3xl",children:e.jsx(b,{figures:o,columns:3,gap:"sm",captionPosition:"overlay-bottom",onFigureClick:(t,i)=>{alert(`Clicked figure ${i+1}: ${t.caption}`)}})})}};var N,q,M;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    caption: 'A beautiful sunset over the mountains',
    children: <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain sunset" className="w-full h-48 object-cover" />
  }
}`,...(M=(q=n.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var k,F,z;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 max-w-4xl">
      <Figure caption="Top caption" captionPosition="top" size="sm">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>

      <Figure caption="Bottom caption" captionPosition="bottom" size="sm">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>

      <Figure caption="Overlay top caption" captionPosition="overlay-top" size="sm">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>

      <Figure caption="Overlay bottom caption" captionPosition="overlay-bottom" size="sm">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>
    </div>
}`,...(z=(F=c.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var B,P,C;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <Figure caption="Extra small figure" size="xs">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>

      <Figure caption="Small figure" size="sm">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>

      <Figure caption="Medium figure" size="md">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>
    </div>
}`,...(C=(P=u.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var _,V,S;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4 max-w-3xl">
      <Figure caption="Dark overlay" captionPosition="overlay-bottom" overlayBackground="dark" size="sm">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>

      <Figure caption="Light overlay" captionPosition="overlay-bottom" overlayBackground="light" size="sm">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>

      <Figure caption="Blur overlay" captionPosition="overlay-bottom" overlayBackground="blur" size="sm">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mountain" className="w-full h-32 object-cover" />
      </Figure>
    </div>
}`,...(S=(V=m.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var G,L,O;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Figure caption="A sample video with figure caption" captionPosition="overlay-bottom" size="md">
      <video className="w-full h-48" controls poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Figure>
}`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var A,R,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const figures = [{
      id: '1',
      content: <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain 1" className="w-full h-32 object-cover" />,
      caption: 'Mountain Landscape 1'
    }, {
      id: '2',
      content: <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain 2" className="w-full h-32 object-cover" />,
      caption: 'Mountain Landscape 2'
    }, {
      id: '3',
      content: <img src="https://images.unsplash.com/photo-1464822759844-d150fff8c2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain 3" className="w-full h-32 object-cover" />,
      caption: 'Mountain Landscape 3'
    }, {
      id: '4',
      content: <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain 4" className="w-full h-32 object-cover" />,
      caption: 'Mountain Landscape 4'
    }];
    return <div className="max-w-4xl">
        <FigureGallery figures={figures} columns={2} gap="md" captionPosition="bottom" />
      </div>;
  }
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var I,$,T;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const figures = [{
      id: '1',
      content: <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain 1" className="w-full h-32 object-cover" />,
      caption: 'Clickable Figure 1'
    }, {
      id: '2',
      content: <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain 2" className="w-full h-32 object-cover" />,
      caption: 'Clickable Figure 2'
    }, {
      id: '3',
      content: <img src="https://images.unsplash.com/photo-1464822759844-d150fff8c2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain 3" className="w-full h-32 object-cover" />,
      caption: 'Clickable Figure 3'
    }];
    return <div className="max-w-3xl">
        <FigureGallery figures={figures} columns={3} gap="sm" captionPosition="overlay-bottom" onFigureClick={(figure, index) => {
        alert(\`Clicked figure \${index + 1}: \${figure.caption}\`);
      }} />
      </div>;
  }
}`,...(T=($=f.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};const ae=["Basic","CaptionPositions","Sizes","OverlayBackgrounds","WithVideo","Gallery","InteractiveGallery"];export{n as Basic,c as CaptionPositions,d as Gallery,f as InteractiveGallery,m as OverlayBackgrounds,u as Sizes,p as WithVideo,ae as __namedExportsOrder,ee as default};
