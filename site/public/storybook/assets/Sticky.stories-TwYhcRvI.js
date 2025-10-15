import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as x}from"./index-DHZDe_v1.js";import{c as K}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const a=({position:t="top",offset:s=0,zIndex:c=10,showShadow:l=!1,onStickyChange:m,container:n,className:M,children:P,style:F,...R})=>{const g=x.useRef(null),[u,W]=x.useState(!1);x.useEffect(()=>{var v,h;const r=g.current;if(!r)return;n!=null&&n.current||document.documentElement;const o=new IntersectionObserver(([J])=>{const b=!J.isIntersecting;b!==u&&(W(b),m==null||m(b))},{root:(n==null?void 0:n.current)||null,rootMargin:`${z(t,s)}`,threshold:[0,1]}),i=document.createElement("div");return i.style.position="absolute",i.style.visibility="hidden",i.style.pointerEvents="none",t==="top"?((v=r.parentNode)==null||v.insertBefore(i,r),i.style.height="1px"):t==="bottom"&&((h=r.parentNode)==null||h.insertBefore(i,r.nextSibling),i.style.height="1px"),o.observe(i),()=>{o.disconnect(),i.remove()}},[t,s,u,m,n]);const z=(r,o)=>{const i=typeof o=="number"?`${o}px`:o;switch(r){case"top":return`-${i} 0px 0px 0px`;case"bottom":return`0px 0px -${i} 0px`;case"left":return`0px 0px 0px -${i}`;case"right":return`0px -${i} 0px 0px`;default:return"0px"}},Z={position:"sticky",...{top:{top:s},bottom:{bottom:s},left:{left:s},right:{right:s}}[t],zIndex:c},G={top:"shadow-lg",bottom:"shadow-lg",left:"shadow-lg",right:"shadow-lg"};return e.jsxDEV("div",{ref:g,className:K("transition-shadow duration-200",{[G[t]]:l&&u},M),style:{...Z,...F},"data-sticky":u,...R,children:P},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.tsx",lineNumber:117,columnNumber:5},void 0)};try{a.displayName="Sticky",a.__docgenInfo={description:"",displayName:"Sticky",props:{position:{defaultValue:{value:"top"},description:"Position to stick to",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}},offset:{defaultValue:{value:"0"},description:"Offset from the edge",name:"offset",required:!1,type:{name:"string | number"}},zIndex:{defaultValue:{value:"10"},description:"Z-index for stacking",name:"zIndex",required:!1,type:{name:"number"}},showShadow:{defaultValue:{value:"false"},description:"Whether to add shadow when stuck",name:"showShadow",required:!1,type:{name:"boolean"}},onStickyChange:{defaultValue:null,description:"Callback when stick state changes",name:"onStickyChange",required:!1,type:{name:"((isSticky: boolean) => void)"}},container:{defaultValue:null,description:"Container to observe for stickiness (defaults to viewport)",name:"container",required:!1,type:{name:"RefObject<HTMLElement>"}}}}}catch{}const te={title:"Surface/Sticky",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"Sticky positioning wrapper for creating elements that stick to viewport edges."}}}},d={render:()=>e.jsxDEV("div",{children:[e.jsxDEV(a,{position:"top",showShadow:!0,className:"bg-white border-b",children:e.jsxDEV("div",{className:"px-6 py-4",children:[e.jsxDEV("h1",{className:"text-xl font-bold",children:"Sticky Header"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:25,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"This header sticks to the top when scrolling"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:26,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:24,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:23,columnNumber:7},void 0),e.jsxDEV("div",{className:"p-6 space-y-6",children:Array.from({length:30},(t,s)=>e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold",children:["Section ",s+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:33,columnNumber:13},void 0),e.jsxDEV("p",{className:"text-gray-600 mt-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scroll down to see the sticky header in action."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:34,columnNumber:13},void 0)]},s,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:32,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:30,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:22,columnNumber:5},void 0)},p={render:()=>e.jsxDEV("div",{className:"flex h-screen",children:[e.jsxDEV(a,{position:"left",className:"w-64 bg-gray-50 border-r",children:e.jsxDEV("nav",{className:"p-4",children:[e.jsxDEV("h2",{className:"font-bold mb-4",children:"Navigation"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:51,columnNumber:11},void 0),e.jsxDEV("ul",{className:"space-y-2",children:["Home","About","Services","Contact","Blog","Portfolio"].map(t=>e.jsxDEV("li",{children:e.jsxDEV("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 transition-colors",children:t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:55,columnNumber:17},void 0)},t,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:54,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:52,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:50,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:49,columnNumber:7},void 0),e.jsxDEV("main",{className:"flex-1 p-6 overflow-auto",children:[e.jsxDEV("h1",{className:"text-2xl font-bold mb-6",children:"Main Content Area"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:65,columnNumber:9},void 0),Array.from({length:20},(t,s)=>e.jsxDEV("div",{className:"mb-6 p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold",children:["Content Section ",s+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:68,columnNumber:13},void 0),e.jsxDEV("p",{className:"text-gray-600 mt-2",children:"This is the main content area. The navigation sidebar remains sticky on the left. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:69,columnNumber:13},void 0)]},s,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:67,columnNumber:11},void 0))]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:64,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:48,columnNumber:5},void 0)},f={render:()=>e.jsxDEV("div",{className:"min-h-screen flex flex-col",children:[e.jsxDEV("header",{className:"bg-blue-600 text-white p-4",children:e.jsxDEV("h1",{className:"text-xl font-bold",children:"Page Header"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:84,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:83,columnNumber:7},void 0),e.jsxDEV("main",{className:"flex-1 p-6",children:Array.from({length:15},(t,s)=>e.jsxDEV("div",{className:"mb-4 p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold",children:["Content Block ",s+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:90,columnNumber:13},void 0),e.jsxDEV("p",{className:"text-gray-600",children:"Main page content goes here..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:91,columnNumber:13},void 0)]},s,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:89,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:87,columnNumber:7},void 0),e.jsxDEV(a,{position:"bottom",showShadow:!0,className:"bg-gray-100 border-t",children:e.jsxDEV("div",{className:"p-4 text-center",children:[e.jsxDEV("p",{className:"text-sm text-gray-600",children:"Sticky Footer - Always visible at bottom"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:98,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex justify-center gap-4 mt-2",children:[e.jsxDEV("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Action 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:100,columnNumber:13},void 0),e.jsxDEV("button",{className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Action 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:103,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:99,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:97,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:96,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:82,columnNumber:5},void 0)},y={render:()=>e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"h-16 bg-red-500 text-white flex items-center px-6",children:e.jsxDEV("span",{children:"Fixed Top Bar (64px height)"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:117,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:116,columnNumber:7},void 0),e.jsxDEV(a,{position:"top",offset:"64px",showShadow:!0,className:"bg-white border-b",children:e.jsxDEV("div",{className:"px-6 py-4",children:[e.jsxDEV("h2",{className:"font-bold",children:"Sticky with Offset"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:122,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"Sticks 64px from top to avoid the fixed bar"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:123,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:121,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:120,columnNumber:7},void 0),e.jsxDEV("div",{className:"p-6 space-y-4",children:Array.from({length:25},(t,s)=>e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-semibold",children:["Content ",s+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:130,columnNumber:13},void 0),e.jsxDEV("p",{className:"text-gray-600",children:"This content demonstrates sticky positioning with an offset. The sticky element starts sticking 64px from the top."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:131,columnNumber:13},void 0)]},s,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:129,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:127,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:115,columnNumber:5},void 0)},k={render:()=>e.jsxDEV("div",{className:"p-6 space-y-8",children:[e.jsxDEV("h1",{className:"text-2xl font-bold",children:"Sticky Cards Demo"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:145,columnNumber:7},void 0),Array.from({length:8},(t,s)=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(a,{position:"top",offset:20,showShadow:!0,onStickyChange:c=>console.log(`Card ${s+1} sticky:`,c),children:e.jsxDEV("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg",children:[e.jsxDEV("h2",{className:"text-xl font-bold",children:["Sticky Card ",s+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:156,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-blue-100",children:"This card becomes sticky when scrolled"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:157,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:155,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:149,columnNumber:11},void 0),e.jsxDEV("div",{className:"space-y-4",children:Array.from({length:5},(c,l)=>e.jsxDEV("div",{className:"p-4 border rounded-lg bg-white",children:[e.jsxDEV("h3",{className:"font-semibold",children:["Content Block ",l+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:164,columnNumber:17},void 0),e.jsxDEV("p",{className:"text-gray-600",children:"Regular content that scrolls normally under the sticky card. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:165,columnNumber:17},void 0)]},l,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:163,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:161,columnNumber:11},void 0)]},s,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:148,columnNumber:9},void 0))]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:144,columnNumber:5},void 0)},N={render:()=>e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"p-6 mb-4",children:[e.jsxDEV("h1",{className:"text-2xl font-bold",children:"Document Editor"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:182,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-gray-600",children:"Scroll down to see the toolbar become sticky"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:183,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:181,columnNumber:7},void 0),e.jsxDEV(a,{position:"top",offset:0,showShadow:!0,className:"bg-white border-y",children:e.jsxDEV("div",{className:"px-6 py-3 flex items-center gap-2",children:[e.jsxDEV("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Bold"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:188,columnNumber:11},void 0),e.jsxDEV("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Italic"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:189,columnNumber:11},void 0),e.jsxDEV("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Underline"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:190,columnNumber:11},void 0),e.jsxDEV("div",{className:"w-px h-6 bg-gray-300 mx-2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:191,columnNumber:11},void 0),e.jsxDEV("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Link"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:192,columnNumber:11},void 0),e.jsxDEV("button",{className:"px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm",children:"Image"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:193,columnNumber:11},void 0),e.jsxDEV("div",{className:"w-px h-6 bg-gray-300 mx-2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:194,columnNumber:11},void 0),e.jsxDEV("button",{className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm",children:"Save"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:195,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:187,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:186,columnNumber:7},void 0),e.jsxDEV("div",{className:"p-6 space-y-4",children:Array.from({length:20},(t,s)=>e.jsxDEV("div",{className:"p-4",children:e.jsxDEV("p",{className:"text-gray-700 leading-relaxed",children:["Paragraph ",s+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:202,columnNumber:13},void 0)},s,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:201,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:199,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/sticky/Sticky.stories.tsx",lineNumber:180,columnNumber:5},void 0)};var S,j,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(j=d.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,w,U;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(U=(w=p.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var V,A,_;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(A=f.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var C,T,q;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(q=(T=y.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var B,I,L;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(I=k.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var H,O,$;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...($=(O=N.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const ie=["StickyHeader","StickyNavigation","StickyFooter","WithOffset","StickyCards","StickyToolbar"];export{k as StickyCards,f as StickyFooter,d as StickyHeader,p as StickyNavigation,N as StickyToolbar,y as WithOffset,ie as __namedExportsOrder,te as default};
