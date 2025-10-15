import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as S,r as d}from"./index-DHZDe_v1.js";import{c as l}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const _=({variant:s="assistant",index:a=0})=>{const r=s==="user",t=["w-32","w-40","w-48","w-56","w-64"],n=t[a%t.length],p=t[(a+2)%t.length];return e.jsxDEV("div",{className:l("flex gap-3 p-4 animate-pulse",r?"flex-row-reverse":"flex-row"),children:[e.jsxDEV("div",{className:"flex-shrink-0",children:e.jsxDEV("div",{className:"w-8 h-8 bg-gray-300 rounded-full"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:30,columnNumber:7},void 0),e.jsxDEV("div",{className:l("flex flex-col",r?"items-end":"items-start"),children:[e.jsxDEV("div",{className:l("px-4 py-2 rounded-lg",{"bg-blue-200":s==="user","bg-gray-200":s==="assistant","bg-yellow-100":s==="system"}),children:e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("div",{className:l("h-4 bg-gray-400 rounded",n)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:46,columnNumber:13},void 0),a%3!==0&&e.jsxDEV("div",{className:l("h-4 bg-gray-400 rounded",p)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:48,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:45,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:35,columnNumber:9},void 0),e.jsxDEV("div",{className:"h-3 w-12 bg-gray-200 rounded mt-1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:53,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:34,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:29,columnNumber:5},void 0)},b=S.forwardRef(({messages:s,itemHeight:a=80,overscan:r=10,className:t,...n},p)=>{const c=d.useRef(null),[x,N]=d.useState(0),[g,u]=d.useState(0),[te,I]=d.useState(!1),v=d.useRef();d.useEffect(()=>{const o=c.current;if(!o)return;const i=()=>{u(o.clientHeight)},m=()=>{N(o.scrollTop),I(!0),v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{I(!1)},100)};return i(),o.addEventListener("scroll",m),window.addEventListener("resize",i),()=>{o.removeEventListener("scroll",m),window.removeEventListener("resize",i),v.current&&clearTimeout(v.current)}},[]);const{startIndex:y,endIndex:M,totalHeight:T,beforeSkeletons:k,afterSkeletons:R}=d.useMemo(()=>{if(g===0)return{startIndex:0,endIndex:s.length,totalHeight:s.length*a,beforeSkeletons:0,afterSkeletons:0};const o=Math.ceil(g/a),i=Math.max(r,Math.ceil(o/2)),m=Math.max(0,Math.floor(x/a)-i),A=Math.min(s.length,m+o+i*2),H=Math.ceil(o/3),ne=m>0?H:0,re=A<s.length?H:0;return{startIndex:m,endIndex:A,totalHeight:s.length*a,beforeSkeletons:ne,afterSkeletons:re}},[s.length,a,x,g,r]),ae=s.slice(y,M);return S.useImperativeHandle(p,()=>({scrollToMessage:o=>{const i=s.findIndex(m=>m.id===o);if(i!==-1&&c.current){const m=i*a;c.current.scrollTo({top:m,behavior:"smooth"})}},scrollToTop:()=>{c.current&&c.current.scrollTo({top:0,behavior:"smooth"})},scrollToBottom:()=>{c.current&&c.current.scrollTo({top:T,behavior:"smooth"})}}),[s,a,T]),e.jsxDEV("div",{ref:c,className:l("flex-1 overflow-y-auto overscroll-none",t),style:{WebkitOverflowScrolling:"touch",scrollBehavior:"auto"},...n,children:e.jsxDEV("div",{style:{height:Math.max(T,g),position:"relative"},children:[k>0&&e.jsxDEV("div",{style:{transform:`translateY(${Math.max(0,y-k)*a}px)`,position:"absolute",top:0,left:0,right:0,zIndex:1},children:Array.from({length:k},(o,i)=>e.jsxDEV("div",{style:{minHeight:a},children:e.jsxDEV(_,{variant:i%2===0?"assistant":"user",index:i},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:213,columnNumber:17},void 0)},`skeleton-before-${i}`,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:212,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:201,columnNumber:11},void 0),e.jsxDEV("div",{style:{transform:`translateY(${y*a}px)`,position:"absolute",top:0,left:0,right:0,zIndex:2},children:ae.map((o,i)=>e.jsxDEV("div",{style:{minHeight:a},children:e.jsxDEV(f,{variant:o.variant,timestamp:o.timestamp,avatar:o.avatar,children:o.text},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:238,columnNumber:15},void 0)},o.id,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:234,columnNumber:13},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:223,columnNumber:9},void 0),R>0&&e.jsxDEV("div",{style:{transform:`translateY(${M*a}px)`,position:"absolute",top:0,left:0,right:0,zIndex:1},children:Array.from({length:R},(o,i)=>e.jsxDEV("div",{style:{minHeight:a},children:e.jsxDEV(_,{variant:i%2===0?"user":"assistant",index:i+k},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:263,columnNumber:17},void 0)},`skeleton-after-${i}`,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:262,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:251,columnNumber:11},void 0),te&&e.jsxDEV(e.Fragment,{children:[y>0&&e.jsxDEV("div",{style:{position:"absolute",top:0,left:0,right:0,height:"60px",background:"linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)",pointerEvents:"none",zIndex:3}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:276,columnNumber:15},void 0),M<s.length&&e.jsxDEV("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"60px",background:"linear-gradient(to top, rgba(255,255,255,0.8), transparent)",pointerEvents:"none",zIndex:3}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:290,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:274,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:198,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:189,columnNumber:5},void 0)});b.displayName="ChatMessages";const h=({className:s,children:a,...r})=>e.jsxDEV("div",{className:l("flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden",s),...r,children:a},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:323,columnNumber:5},void 0),f=({variant:s="user",avatar:a,timestamp:r,className:t,children:n,...p})=>{const c=s==="user";return e.jsxDEV("div",{className:l("flex gap-3 p-4",c?"flex-row-reverse":"flex-row",t),...p,children:[a&&e.jsxDEV("div",{className:"flex-shrink-0",children:a},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:363,columnNumber:9},void 0),e.jsxDEV("div",{className:l("flex flex-col",c?"items-end":"items-start"),children:[e.jsxDEV("div",{className:l("max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 rounded-lg text-sm",{"bg-blue-600 text-white":s==="user","bg-gray-100 text-gray-900":s==="assistant","bg-yellow-50 text-yellow-800 border border-yellow-200":s==="system"}),children:n},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:369,columnNumber:9},void 0),r&&e.jsxDEV("span",{className:"text-xs text-gray-500 mt-1",children:r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:383,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:368,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:354,columnNumber:5},void 0)},V=({onSubmit:s,placeholder:a="Type a message...",disabled:r=!1,loading:t=!1,className:n,...p})=>{const[c,x]=S.useState(""),N=u=>{u.preventDefault(),c.trim()&&!r&&!t&&(s==null||s(c.trim()),x(""))},g=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),N(u))};return e.jsxDEV("div",{className:l("p-4 border-t border-gray-200 bg-gray-50",n),...p,children:e.jsxDEV("form",{onSubmit:N,className:"flex gap-2",children:[e.jsxDEV("textarea",{value:c,onChange:u=>x(u.target.value),onKeyDown:g,placeholder:a,disabled:r||t,rows:1,className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",style:{minHeight:"40px",maxHeight:"120px"}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:434,columnNumber:9},void 0),e.jsxDEV("button",{type:"submit",disabled:!c.trim()||r||t,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500",children:t?"...":"Send"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:444,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:433,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.tsx",lineNumber:426,columnNumber:5},void 0)};try{b.displayName="ChatMessages",b.__docgenInfo={description:"",displayName:"ChatMessages",props:{messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"ChatMessageData[]"}},itemHeight:{defaultValue:{value:"80"},description:"",name:"itemHeight",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"10"},description:"",name:"overscan",required:!1,type:{name:"number"}}}}}catch{}const ue={title:"Surface/Chat",component:h,parameters:{layout:"centered",docs:{description:{component:"A lightweight chat interface with message display and input prompt."}}}},D={args:{children:null},render:()=>{const[s,a]=d.useState([{id:1,text:"Hello! How can I help you today?",variant:"assistant",timestamp:new Date(Date.now()-6e4)},{id:2,text:"Hi there! I have a question about your services.",variant:"user",timestamp:new Date(Date.now()-3e4)}]),r=t=>{const n={id:s.length+1,text:t,variant:"user",timestamp:new Date};a([...s,n])};return e.jsxDEV("div",{className:"w-96 h-96",children:e.jsxDEV(h,{children:[e.jsxDEV("div",{className:"flex-1 overflow-y-auto",children:s.map(t=>e.jsxDEV(f,{variant:t.variant,timestamp:t.timestamp,avatar:e.jsxDEV("div",{className:"w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm",children:t.variant==="user"?"U":"A"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:49,columnNumber:19},void 0),children:t.text},t.id,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:44,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:42,columnNumber:11},void 0),e.jsxDEV(V,{onSubmit:r},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:58,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:41,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:40,columnNumber:7},void 0)}},j={args:{children:null},render:()=>e.jsxDEV("div",{className:"w-96",children:e.jsxDEV(h,{children:[e.jsxDEV(f,{variant:"user",timestamp:new Date,children:"This is a user message"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:70,columnNumber:9},void 0),e.jsxDEV(f,{variant:"assistant",timestamp:new Date,children:"This is an assistant message"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:73,columnNumber:9},void 0),e.jsxDEV(f,{variant:"system",timestamp:new Date,children:"This is a system message"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:76,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:69,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:68,columnNumber:5},void 0)},C={args:{children:null},render:()=>e.jsxDEV("div",{className:"w-96",children:e.jsxDEV(h,{children:[e.jsxDEV(f,{variant:"assistant",avatar:e.jsxDEV("div",{className:"w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold",children:"AI"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:92,columnNumber:13},void 0),children:"Hello! I'm your AI assistant. How can I help you today?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:89,columnNumber:9},void 0),e.jsxDEV(f,{variant:"user",avatar:e.jsxDEV("div",{className:"w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:102,columnNumber:13},void 0),children:"Can you help me understand how this chat component works?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:99,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:88,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:87,columnNumber:5},void 0)},w={args:{children:null},render:()=>e.jsxDEV("div",{className:"w-96",children:e.jsxDEV(h,{children:[e.jsxDEV(f,{variant:"user",children:"What's the weather like today?"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:119,columnNumber:9},void 0),e.jsxDEV(V,{loading:!0,placeholder:"AI is thinking..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:122,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:118,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:117,columnNumber:5},void 0)},E={args:{children:null},render:()=>{const s=d.useRef(null),a=Array.from({length:1e3},(t,n)=>({id:n,variant:n%2===0?"assistant":"user",text:`Message ${n+1}: ${n%2===0?"This is an assistant message with some helpful information.":"This is a user message asking a question or providing information."}`,timestamp:new Date(Date.now()-(1e3-n)*1e4),avatar:e.jsxDEV("div",{className:"w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold",children:n%2===0?"A":"U"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:142,columnNumber:9},void 0)})),r=()=>{var n;const t=Math.floor(Math.random()*1e3);(n=s.current)==null||n.scrollToMessage(t)};return e.jsxDEV("div",{className:"w-96 h-96 flex flex-col",children:[e.jsxDEV("div",{className:"p-2 bg-gray-50 border-b flex gap-1 text-xs",children:[e.jsxDEV("button",{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToTop()},className:"px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700",children:"Top"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:157,columnNumber:11},void 0),e.jsxDEV("button",{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToBottom()},className:"px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700",children:"Bottom"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:163,columnNumber:11},void 0),e.jsxDEV("button",{onClick:r,className:"px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700",children:"Random"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:169,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:156,columnNumber:9},void 0),e.jsxDEV(h,{children:[e.jsxDEV(b,{ref:s,messages:a,itemHeight:100},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:178,columnNumber:11},void 0),e.jsxDEV(V,{placeholder:"Type your response..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:179,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:177,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:154,columnNumber:7},void 0)}},U={args:{children:null},render:()=>{const s=d.useRef(null),a=Array.from({length:5e3},(t,n)=>({id:n,variant:["user","assistant","system"][n%3],text:`Performance test message #${n+1}. Notice smooth skeleton messages during scrolling - no more white flashes!`,timestamp:new Date(Date.now()-(5e3-n)*5e3)})),r=()=>{s.current&&s.current.scrollToMessage(2500)};return e.jsxDEV("div",{className:"w-96 h-96 flex flex-col",children:[e.jsxDEV("div",{className:"p-2 bg-yellow-50 border-b text-xs text-yellow-800 flex justify-between items-center",children:[e.jsxDEV("div",{children:[e.jsxDEV("strong",{children:"Skeleton Scrolling:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:209,columnNumber:13},void 0)," 5,000 messages with smooth skeleton transitions!"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:208,columnNumber:11},void 0),e.jsxDEV("div",{className:"flex gap-1",children:[e.jsxDEV("button",{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToTop()},className:"px-2 py-1 bg-blue-600 text-white rounded text-xs",children:"↑ Top"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:212,columnNumber:13},void 0),e.jsxDEV("button",{onClick:r,className:"px-2 py-1 bg-purple-600 text-white rounded text-xs",children:"Mid"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:218,columnNumber:13},void 0),e.jsxDEV("button",{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToBottom()},className:"px-2 py-1 bg-blue-600 text-white rounded text-xs",children:"↓ Bottom"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:224,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:211,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:207,columnNumber:9},void 0),e.jsxDEV(h,{children:[e.jsxDEV(b,{ref:s,messages:a,itemHeight:80},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:234,columnNumber:11},void 0),e.jsxDEV(V,{placeholder:"Add another message..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:235,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:233,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/chat/Chat.stories.tsx",lineNumber:206,columnNumber:7},void 0)}};var z,L,$;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const [messages, setMessages] = useState([{
      id: 1,
      text: 'Hello! How can I help you today?',
      variant: 'assistant' as const,
      timestamp: new Date(Date.now() - 60000)
    }, {
      id: 2,
      text: 'Hi there! I have a question about your services.',
      variant: 'user' as const,
      timestamp: new Date(Date.now() - 30000)
    }]);
    const handleSubmit = (message: string) => {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        variant: 'user' as const,
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
    };
    return <div className="w-96 h-96">
        <Chat>
          <div className="flex-1 overflow-y-auto">
            {messages.map(message => <ChatMessage key={message.id} variant={message.variant} timestamp={message.timestamp} avatar={<div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                    {message.variant === 'user' ? 'U' : 'A'}
                  </div>}>
                {message.text}
              </ChatMessage>)}
          </div>
          <ChatPrompt onSubmit={handleSubmit} />
        </Chat>
      </div>;
  }
}`,...($=(L=D.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var B,q,P;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-96">
      <Chat>
        <ChatMessage variant="user" timestamp={new Date()}>
          This is a user message
        </ChatMessage>
        <ChatMessage variant="assistant" timestamp={new Date()}>
          This is an assistant message
        </ChatMessage>
        <ChatMessage variant="system" timestamp={new Date()}>
          This is a system message
        </ChatMessage>
      </Chat>
    </div>
}`,...(P=(q=j.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var W,K,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-96">
      <Chat>
        <ChatMessage variant="assistant" avatar={<div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
              AI
            </div>}>
          Hello! I'm your AI assistant. How can I help you today?
        </ChatMessage>
        <ChatMessage variant="user" avatar={<div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
              
            </div>}>
          Can you help me understand how this chat component works?
        </ChatMessage>
      </Chat>
    </div>
}`,...(Y=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var G,O,F;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="w-96">
      <Chat>
        <ChatMessage variant="user">
          What's the weather like today?
        </ChatMessage>
        <ChatPrompt loading placeholder="AI is thinking..." />
      </Chat>
    </div>
}`,...(F=(O=w.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,Q,X;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const chatRef = useRef<ChatMessagesRef>(null);

    // Generate many messages to demonstrate lazy rendering
    const messages: ChatMessageData[] = Array.from({
      length: 1000
    }, (_, index) => ({
      id: index,
      variant: index % 2 === 0 ? 'assistant' : 'user',
      text: \`Message \${index + 1}: \${index % 2 === 0 ? 'This is an assistant message with some helpful information.' : 'This is a user message asking a question or providing information.'}\`,
      timestamp: new Date(Date.now() - (1000 - index) * 10000),
      avatar: <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
          {index % 2 === 0 ? 'A' : 'U'}
        </div>
    }));
    const handleScrollToMessage = () => {
      const randomId = Math.floor(Math.random() * 1000);
      chatRef.current?.scrollToMessage(randomId);
    };
    return <div className="w-96 h-96 flex flex-col">
        {/* Control buttons */}
        <div className="p-2 bg-gray-50 border-b flex gap-1 text-xs">
          <button onClick={() => chatRef.current?.scrollToTop()} className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
            Top
          </button>
          <button onClick={() => chatRef.current?.scrollToBottom()} className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
            Bottom
          </button>
          <button onClick={handleScrollToMessage} className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700">
            Random
          </button>
        </div>
        
        <Chat>
          <ChatMessages ref={chatRef} messages={messages} itemHeight={100} />
          <ChatPrompt placeholder="Type your response..." />
        </Chat>
      </div>;
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,se;U.parameters={...U.parameters,docs:{...(Z=U.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const chatRef = useRef<ChatMessagesRef>(null);

    // Generate 5000 messages to really test performance
    const messages: ChatMessageData[] = Array.from({
      length: 5000
    }, (_, index) => ({
      id: index,
      variant: ['user', 'assistant', 'system'][index % 3] as any,
      text: \`Performance test message #\${index + 1}. Notice smooth skeleton messages during scrolling - no more white flashes!\`,
      timestamp: new Date(Date.now() - (5000 - index) * 5000)
    }));
    const scrollToMiddle = () => {
      if (chatRef.current) {
        chatRef.current.scrollToMessage(2500); // Middle message
      }
    };
    return <div className="w-96 h-96 flex flex-col">
        <div className="p-2 bg-yellow-50 border-b text-xs text-yellow-800 flex justify-between items-center">
          <div>
            <strong>Skeleton Scrolling:</strong> 5,000 messages with smooth skeleton transitions!
          </div>
          <div className="flex gap-1">
            <button onClick={() => chatRef.current?.scrollToTop()} className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
              ↑ Top
            </button>
            <button onClick={scrollToMiddle} className="px-2 py-1 bg-purple-600 text-white rounded text-xs">
               Mid
            </button>
            <button onClick={() => chatRef.current?.scrollToBottom()} className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
              ↓ Bottom
            </button>
          </div>
        </div>
        
        <Chat>
          <ChatMessages ref={chatRef} messages={messages} itemHeight={80} />
          <ChatPrompt placeholder="Add another message..." />
        </Chat>
      </div>;
  }
}`,...(se=(ee=U.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};const me=["Default","MessageVariants","WithAvatars","LoadingState","LongConversation","LazyRenderingDemo"];export{D as Default,U as LazyRenderingDemo,w as LoadingState,E as LongConversation,j as MessageVariants,C as WithAvatars,me as __namedExportsOrder,ue as default};
