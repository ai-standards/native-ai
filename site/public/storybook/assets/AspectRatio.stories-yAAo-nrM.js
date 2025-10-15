import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as W}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({ratio:a="16/9",width:t,height:x,className:E,children:H,...T})=>{const G=`${1/(t&&x?t/x:typeof a=="number"?a:{square:1,"1/1":1,"16/9":16/9,"4/3":4/3,"3/2":3/2,"21/9":21/9,"5/4":5/4,"9/16":9/16}[a]||1.7777777777777777)*100}%`;return e.jsx("div",{className:W("relative w-full",E),style:{paddingBottom:G},...T,children:e.jsx("div",{className:"absolute inset-0",children:H})})};try{s.displayName="AspectRatio",s.__docgenInfo={description:"",displayName:"AspectRatio",props:{ratio:{defaultValue:{value:"16/9"},description:"Aspect ratio as width/height or predefined ratio",name:"ratio",required:!1,type:{name:'number | "square" | "16/9" | "4/3" | "3/2" | "21/9" | "1/1" | "5/4" | "9/16"'}},width:{defaultValue:null,description:"Custom width/height ratio",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}const L={title:"Surface/AspectRatio",component:s,parameters:{layout:"centered",docs:{description:{component:"Responsive aspect ratio containers for maintaining consistent proportions."}}}},i={render:()=>e.jsx("div",{className:"w-80",children:e.jsx(s,{ratio:"16/9",className:"bg-gray-900 rounded-lg overflow-hidden",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl mb-2",children:"▶️"}),e.jsx("div",{className:"text-sm",children:"16:9 Video Player"})]})})})})},r={render:()=>e.jsx("div",{className:"w-60",children:e.jsx(s,{ratio:"square",className:"bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"️"}),e.jsx("div",{className:"text-sm font-medium",children:"Square Image"}),e.jsx("div",{className:"text-xs opacity-80",children:"1:1 Ratio"})]})})})})},l={render:()=>e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"16:9 (Widescreen)"}),e.jsx(s,{ratio:"16/9",className:"bg-blue-100 border-2 border-blue-300 rounded",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-blue-700 text-xs",children:"16:9"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"4:3 (Traditional)"}),e.jsx(s,{ratio:"4/3",className:"bg-green-100 border-2 border-green-300 rounded",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-green-700 text-xs",children:"4:3"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"3:2 (Classic)"}),e.jsx(s,{ratio:"3/2",className:"bg-purple-100 border-2 border-purple-300 rounded",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-purple-700 text-xs",children:"3:2"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"1:1 (Square)"}),e.jsx(s,{ratio:"1/1",className:"bg-red-100 border-2 border-red-300 rounded",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-red-700 text-xs",children:"1:1"})})]})]})})},n={render:()=>e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Custom Numeric Ratio (2.5:1)"}),e.jsx(s,{ratio:2.5,className:"bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl mb-1"}),e.jsx("div",{className:"text-sm font-medium",children:"Custom 2.5:1"})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Width/Height (800x300)"}),e.jsx(s,{width:800,height:300,className:"bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl mb-1"}),e.jsx("div",{className:"text-sm font-medium",children:"800×300"})]})})})]})]})},d={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Photo Gallery"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:Array.from({length:6},(a,t)=>e.jsx(s,{ratio:"4/3",className:"bg-gray-200 rounded-lg overflow-hidden",children:e.jsx("div",{className:"w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center",children:e.jsxs("div",{className:"text-center text-gray-600",children:[e.jsx("div",{className:"text-2xl mb-1"}),e.jsxs("div",{className:"text-xs",children:["Photo ",t+1]})]})})},t))})]})},c={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Product Showcase"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:Array.from({length:6},(a,t)=>e.jsxs("div",{className:"bg-white border rounded-lg overflow-hidden",children:[e.jsx(s,{ratio:"square",children:e.jsx("div",{className:"w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center",children:e.jsx("span",{className:"text-2xl"})})}),e.jsxs("div",{className:"p-2",children:[e.jsxs("h3",{className:"text-xs font-medium",children:["Product ",t+1]}),e.jsx("p",{className:"text-xs text-gray-500",children:"$99.99"})]})]},t))})]})},o={render:()=>e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Responsive Video Player"}),e.jsx(s,{ratio:"16/9",className:"bg-black rounded-lg overflow-hidden",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-6xl mb-4",children:"▶️"}),e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Video Title"}),e.jsx("p",{className:"text-gray-300",children:"Click to play • 1080p HD"})]})})}),e.jsx("div",{className:"mt-4 text-sm text-gray-600",children:"This video player maintains perfect 16:9 aspect ratio across all screen sizes."})]})},m={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-lg font-bold",children:"Mobile-First Design"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Adaptive Hero Image"}),e.jsx("div",{className:"block sm:hidden",children:e.jsx(s,{ratio:"9/16",className:"bg-gradient-to-b from-purple-500 to-pink-600 rounded-lg",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl mb-2"}),e.jsx("div",{className:"text-sm",children:"Mobile Portrait"}),e.jsx("div",{className:"text-xs opacity-80",children:"9:16"})]})})})}),e.jsx("div",{className:"hidden sm:block",children:e.jsx(s,{ratio:"21/9",className:"bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg",children:e.jsx("div",{className:"w-full h-full flex items-center justify-center text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl mb-2",children:"️"}),e.jsx("div",{className:"text-lg",children:"Desktop Ultrawide"}),e.jsx("div",{className:"text-sm opacity-80",children:"21:9"})]})})})})]})]})};var u,h,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <AspectRatio ratio="16/9" className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-4xl mb-2">▶️</div>
            <div className="text-sm">16:9 Video Player</div>
          </div>
        </div>
      </AspectRatio>
    </div>
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var p,f,N;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-60">
      <AspectRatio ratio="square" className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg">
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-3xl mb-2">️</div>
            <div className="text-sm font-medium">Square Image</div>
            <div className="text-xs opacity-80">1:1 Ratio</div>
          </div>
        </div>
      </AspectRatio>
    </div>
}`,...(N=(f=r.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var g,b,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">16:9 (Widescreen)</h3>
          <AspectRatio ratio="16/9" className="bg-blue-100 border-2 border-blue-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-blue-700 text-xs">
              16:9
            </div>
          </AspectRatio>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">4:3 (Traditional)</h3>
          <AspectRatio ratio="4/3" className="bg-green-100 border-2 border-green-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-green-700 text-xs">
              4:3
            </div>
          </AspectRatio>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">3:2 (Classic)</h3>
          <AspectRatio ratio="3/2" className="bg-purple-100 border-2 border-purple-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-purple-700 text-xs">
              3:2
            </div>
          </AspectRatio>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">1:1 (Square)</h3>
          <AspectRatio ratio="1/1" className="bg-red-100 border-2 border-red-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-red-700 text-xs">
              1:1
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,w,R;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Custom Numeric Ratio (2.5:1)</h3>
        <AspectRatio ratio={2.5} className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-2xl mb-1"></div>
              <div className="text-sm font-medium">Custom 2.5:1</div>
            </div>
          </div>
        </AspectRatio>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Width/Height (800x300)</h3>
        <AspectRatio width={800} height={300} className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-2xl mb-1"></div>
              <div className="text-sm font-medium">800×300</div>
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>
}`,...(R=(w=n.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var A,k,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <h2 className="text-lg font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({
        length: 6
      }, (_, i) => <AspectRatio key={i} ratio="4/3" className="bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-2xl mb-1"></div>
                <div className="text-xs">Photo {i + 1}</div>
              </div>
            </div>
          </AspectRatio>)}
      </div>
    </div>
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var S,q,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <h2 className="text-lg font-bold mb-4">Product Showcase</h2>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({
        length: 6
      }, (_, i) => <div key={i} className="bg-white border rounded-lg overflow-hidden">
            <AspectRatio ratio="square">
              <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                <span className="text-2xl"></span>
              </div>
            </AspectRatio>
            <div className="p-2">
              <h3 className="text-xs font-medium">Product {i + 1}</h3>
              <p className="text-xs text-gray-500">$99.99</p>
            </div>
          </div>)}
      </div>
    </div>
}`,...(C=(q=c.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var V,_,F;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Responsive Video Player</h2>
      <AspectRatio ratio="16/9" className="bg-black rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-6xl mb-4">▶️</div>
            <h3 className="text-xl font-bold mb-2">Video Title</h3>
            <p className="text-gray-300">Click to play • 1080p HD</p>
          </div>
        </div>
      </AspectRatio>
      <div className="mt-4 text-sm text-gray-600">
        This video player maintains perfect 16:9 aspect ratio across all screen sizes.
      </div>
    </div>
}`,...(F=(_=o.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var I,M,D;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <h2 className="text-lg font-bold">Mobile-First Design</h2>
      
      {/* Portrait on mobile, landscape on desktop */}
      <div>
        <h3 className="text-sm font-medium mb-2">Adaptive Hero Image</h3>
        <div className="block sm:hidden">
          <AspectRatio ratio="9/16" className="bg-gradient-to-b from-purple-500 to-pink-600 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-3xl mb-2"></div>
                <div className="text-sm">Mobile Portrait</div>
                <div className="text-xs opacity-80">9:16</div>
              </div>
            </div>
          </AspectRatio>
        </div>
        
        <div className="hidden sm:block">
          <AspectRatio ratio="21/9" className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">️</div>
                <div className="text-lg">Desktop Ultrawide</div>
                <div className="text-sm opacity-80">21:9</div>
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const Q=["VideoRatio","SquareImage","CommonRatios","CustomRatio","ImageGallery","ProductCards","ResponsiveVideo","MobileFirst"];export{l as CommonRatios,n as CustomRatio,d as ImageGallery,m as MobileFirst,c as ProductCards,o as ResponsiveVideo,r as SquareImage,i as VideoRatio,Q as __namedExportsOrder,L as default};
