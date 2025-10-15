import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as f}from"./index-BwDkhjyp.js";import{c as K}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({position:s="top",offset:t=0,zIndex:l=10,showShadow:c=!1,onStickyChange:d,container:r,className:F,children:R,style:U,...V})=>{const v=f.useRef(null),[m,W]=f.useState(!1);f.useEffect(()=>{var N,k;const o=v.current;if(!o)return;r!=null&&r.current||document.documentElement;const i=new IntersectionObserver(([J])=>{const y=!J.isIntersecting;y!==m&&(W(y),d==null||d(y))},{root:(r==null?void 0:r.current)||null,rootMargin:`${z(s,t)}`,threshold:[0,1]}),a=document.createElement("div");return a.style.position="absolute",a.style.visibility="hidden",a.style.pointerEvents="none",s==="top"?((N=o.parentNode)==null||N.insertBefore(a,o),a.style.height="1px"):s==="bottom"&&((k=o.parentNode)==null||k.insertBefore(a,o.nextSibling),a.style.height="1px"),i.observe(a),()=>{i.disconnect(),a.remove()}},[s,t,m,d,r]);const z=(o,i)=>{const a=typeof i=="number"?`${i}px`:i;switch(o){case"top":return`-${a} 0px 0px 0px`;case"bottom":return`0px 0px -${a} 0px`;case"left":return`0px 0px 0px -${a}`;case"right":return`0px -${a} 0px 0px`;default:return"0px"}},Z={position:"sticky",...{top:{top:t},bottom:{bottom:t},left:{left:t},right:{right:t}}[s],zIndex:l},G={top:"shadow-lg",bottom:"shadow-lg",left:"shadow-lg",right:"shadow-lg"};return e.jsx("div",{ref:v,className:K("transition-shadow duration-200",{[G[s]]:c&&m},F),style:{...Z,...U},"data-sticky":m,...V,children:R})};try{n.displayName="Sticky",n.__docgenInfo={description:"",displayName:"Sticky",props:{position:{defaultValue:{value:"top"},description:"Position to stick to",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},offset:{defaultValue:{value:"0"},description:"Offset from the edge",name:"offset",required:!1,type:{name:"string | number"}},zIndex:{defaultValue:{value:"10"},description:"Z-index for stacking",name:"zIndex",required:!1,type:{name:"number"}},showShadow:{defaultValue:{value:"false"},description:"Whether to add shadow when stuck",name:"showShadow",required:!1,type:{name:"boolean"}},onStickyChange:{defaultValue:null,description:"Callback when stick state changes",name:"onStickyChange",required:!1,type:{name:"((isSticky: boolean) => void)"}},container:{defaultValue:null,description:"Container to observe for stickiness (defaults to viewport)",name:"container",required:!1,type:{name:"RefObject<HTMLElement>"}}}}}catch{}const se={title:"Surface/Sticky",component:n,parameters:{layout:"fullscreen",docs:{description:{component:"Sticky positioning wrapper for creating elements that stick to viewport edges."}}}},p={render:()=>e.jsxs("div",{children:[e.jsx(n,{position:"top",showShadow:!0,className:"bg-white border-b",children:e.jsxs("div",{className:"px-6 py-4",children:[e.jsx("h1",{className:"text-xl font-bold",children:"Sticky Header"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This header sticks to the top when scrolling"})]})}),e.jsx("div",{className:"p-6 space-y-6",children:Array.from({length:30},(s,t)=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsxs("h3",{className:"font-semibold",children:["Section ",t+1]}),e.jsx("p",{className:"text-gray-600 mt-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scroll down to see the sticky header in action."})]},t))})]})},h={render:()=>e.jsxs("div",{className:"flex h-screen",children:[e.jsx(n,{position:"left",className:"w-64 bg-gray-50 border-r",children:e.jsxs("nav",{className:"p-4",children:[e.jsx("h2",{className:"font-bold mb-4",children:"Navigation"}),e.jsx("ul",{className:"space-y-2",children:["Home","About","Services","Contact","Blog","Portfolio"].map(s=>e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 transition-colors",children:s})},s))})]})}),e.jsxs("main",{className:"flex-1 p-6 overflow-auto",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Main Content Area"}),Array.from({length:20},(s,t)=>e.jsxs("div",{className:"mb-6 p-4 border rounded-lg",children:[e.jsxs("h3",{className:"font-semibold",children:["Content Section ",t+1]}),e.jsx("p",{className:"text-gray-600 mt-2",children:"This is the main content area. The navigation sidebar remains sticky on the left. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},t))]})]})},x={render:()=>e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx("header",{className:"bg-blue-600 text-white p-4",children:e.jsx("h1",{className:"text-xl font-bold",children:"Page Header"})}),e.jsx("main",{className:"flex-1 p-6",children:Array.from({length:15},(s,t)=>e.jsxs("div",{className:"mb-4 p-4 border rounded-lg",children:[e.jsxs("h3",{className:"font-semibold",children:["Content Block ",t+1]}),e.jsx("p",{className:"text-gray-600",children:"Main page content goes here..."})]},t))}),e.jsx(n,{position:"bottom",showShadow:!0,className:"bg-gray-100 border-t",children:e.jsxs("div",{className:"p-4 text-center",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Sticky Footer - Always visible at bottom"}),e.jsxs("div",{className:"flex justify-center gap-4 mt-2",children:[e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Action 1"}),e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Action 2"})]})]})})]})},u={render:()=>e.jsxs("div",{children:[e.jsx("div",{className:"h-16 bg-red-500 text-white flex items-center px-6",children:e.jsx("span",{children:"Fixed Top Bar (64px height)"})}),e.jsx(n,{position:"top",offset:"64px",showShadow:!0,className:"bg-white border-b",children:e.jsxs("div",{className:"px-6 py-4",children:[e.jsx("h2",{className:"font-bold",children:"Sticky with Offset"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Sticks 64px from top to avoid the fixed bar"})]})}),e.jsx("div",{className:"p-6 space-y-4",children:Array.from({length:25},(s,t)=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsxs("h3",{className:"font-semibold",children:["Content ",t+1]}),e.jsx("p",{className:"text-gray-600",children:"This content demonstrates sticky positioning with an offset. The sticky element starts sticking 64px from the top."})]},t))})]})},g={render:()=>e.jsxs("div",{className:"p-6 space-y-8",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Sticky Cards Demo"}),Array.from({length:8},(s,t)=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{position:"top",offset:20,showShadow:!0,onStickyChange:l=>console.log(`Card ${t+1} sticky:`,l),children:e.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg",children:[e.jsxs("h2",{className:"text-xl font-bold",children:["Sticky Card ",t+1]}),e.jsx("p",{className:"text-blue-100",children:"This card becomes sticky when scrolled"})]})}),e.jsx("div",{className:"space-y-4",children:Array.from({length:5},(l,c)=>e.jsxs("div",{className:"p-4 border rounded-lg bg-white",children:[e.jsxs("h3",{className:"font-semibold",children:["Content Block ",c+1]}),e.jsx("p",{className:"text-gray-600",children:"Regular content that scrolls normally under the sticky card. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},c))})]},t))]})},b={render:()=>e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 mb-4",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Document Editor"}),e.jsx("p",{className:"text-gray-600",children:"Scroll down to see the toolbar become sticky"})]}),e.jsx(n,{position:"top",offset:0,showShadow:!0,className:"bg-white border-y",children:e.jsxs("div",{className:"px-6 py-3 flex items-center gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Bold"}),e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Italic"}),e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Underline"}),e.jsx("div",{className:"w-px h-6 bg-gray-300 mx-2"}),e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Link"}),e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Image"}),e.jsx("div",{className:"w-px h-6 bg-gray-300 mx-2"}),e.jsx("button",{className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm",children:"Save"})]})}),e.jsx("div",{className:"p-6 space-y-4",children:Array.from({length:20},(s,t)=>e.jsx("div",{className:"p-4",children:e.jsxs("p",{className:"text-gray-700 leading-relaxed",children:["Paragraph ",t+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]})},t))})]})};var S,j,w;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div>
      <Sticky position="top" showShadow className="bg-white border-b">
        <div className="px-6 py-4">
          <h1 className="text-xl font-bold">Sticky Header</h1>
          <p className="text-sm text-gray-600">This header sticks to the top when scrolling</p>
        </div>
      </Sticky>
      
      <div className="p-6 space-y-6">
        {Array.from({
        length: 30
      }, (_, i) => <div key={i} className="p-4 border rounded-lg">
            <h3 className="font-semibold">Section {i + 1}</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scroll down to see the sticky header in action.
            </p>
          </div>)}
      </div>
    </div>
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var A,_,C;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex h-screen">
      <Sticky position="left" className="w-64 bg-gray-50 border-r">
        <nav className="p-4">
          <h2 className="font-bold mb-4">Navigation</h2>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio'].map(item => <li key={item}>
                <a href="#" className="block px-3 py-2 rounded hover:bg-gray-200 transition-colors">
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>
      </Sticky>
      
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Main Content Area</h1>
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="mb-6 p-4 border rounded-lg">
            <h3 className="font-semibold">Content Section {i + 1}</h3>
            <p className="text-gray-600 mt-2">
              This is the main content area. The navigation sidebar remains sticky on the left.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>)}
      </main>
    </div>
}`,...(C=(_=h.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var T,q,B;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Page Header</h1>
      </header>
      
      <main className="flex-1 p-6">
        {Array.from({
        length: 15
      }, (_, i) => <div key={i} className="mb-4 p-4 border rounded-lg">
            <h3 className="font-semibold">Content Block {i + 1}</h3>
            <p className="text-gray-600">Main page content goes here...</p>
          </div>)}
      </main>
      
      <Sticky position="bottom" showShadow className="bg-gray-100 border-t">
        <div className="p-4 text-center">
          <p className="text-sm text-gray-600">Sticky Footer - Always visible at bottom</p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Action 1
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Action 2
            </button>
          </div>
        </div>
      </Sticky>
    </div>
}`,...(B=(q=x.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var I,L,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div>
      <div className="h-16 bg-red-500 text-white flex items-center px-6">
        <span>Fixed Top Bar (64px height)</span>
      </div>
      
      <Sticky position="top" offset="64px" showShadow className="bg-white border-b">
        <div className="px-6 py-4">
          <h2 className="font-bold">Sticky with Offset</h2>
          <p className="text-sm text-gray-600">Sticks 64px from top to avoid the fixed bar</p>
        </div>
      </Sticky>
      
      <div className="p-6 space-y-4">
        {Array.from({
        length: 25
      }, (_, i) => <div key={i} className="p-4 border rounded-lg">
            <h3 className="font-semibold">Content {i + 1}</h3>
            <p className="text-gray-600">
              This content demonstrates sticky positioning with an offset.
              The sticky element starts sticking 64px from the top.
            </p>
          </div>)}
      </div>
    </div>
}`,...(E=(L=u.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var H,O,$;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Sticky Cards Demo</h1>
      
      {Array.from({
      length: 8
    }, (_, i) => <div key={i} className="space-y-4">
          <Sticky position="top" offset={20} showShadow onStickyChange={isSticky => console.log(\`Card \${i + 1} sticky:\`, isSticky)}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">Sticky Card {i + 1}</h2>
              <p className="text-blue-100">This card becomes sticky when scrolled</p>
            </div>
          </Sticky>
          
          <div className="space-y-4">
            {Array.from({
          length: 5
        }, (_, j) => <div key={j} className="p-4 border rounded-lg bg-white">
                <h3 className="font-semibold">Content Block {j + 1}</h3>
                <p className="text-gray-600">
                  Regular content that scrolls normally under the sticky card.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...($=(O=g.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var M,P,D;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div>
      <div className="p-6 mb-4">
        <h1 className="text-2xl font-bold">Document Editor</h1>
        <p className="text-gray-600">Scroll down to see the toolbar become sticky</p>
      </div>
      
      <Sticky position="top" offset={0} showShadow className="bg-white border-y">
        <div className="px-6 py-3 flex items-center gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Bold</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Italic</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Underline</button>
          <div className="w-px h-6 bg-gray-300 mx-2" />
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Link</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Image</button>
          <div className="w-px h-6 bg-gray-300 mx-2" />
          <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Save</button>
        </div>
      </Sticky>
      
      <div className="p-6 space-y-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="p-4">
            <p className="text-gray-700 leading-relaxed">
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>)}
      </div>
    </div>
}`,...(D=(P=b.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const ae=["StickyHeader","StickyNavigation","StickyFooter","WithOffset","StickyCards","StickyToolbar"];export{g as StickyCards,x as StickyFooter,p as StickyHeader,h as StickyNavigation,b as StickyToolbar,u as WithOffset,ae as __namedExportsOrder,se as default};
