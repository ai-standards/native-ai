import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as A,r as h}from"./index-BwDkhjyp.js";import{c}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const L=({variant:s="assistant",index:n=0})=>{const r=s==="user",t=["w-32","w-40","w-48","w-56","w-64"],a=t[n%t.length],g=t[(n+2)%t.length];return e.jsxs("div",{className:c("flex gap-3 p-4 animate-pulse",r?"flex-row-reverse":"flex-row"),children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-8 h-8 bg-gray-300 rounded-full"})}),e.jsxs("div",{className:c("flex flex-col",r?"items-end":"items-start"),children:[e.jsx("div",{className:c("px-4 py-2 rounded-lg",{"bg-blue-200":s==="user","bg-gray-200":s==="assistant","bg-yellow-100":s==="system"}),children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:c("h-4 bg-gray-400 rounded",a)}),n%3!==0&&e.jsx("div",{className:c("h-4 bg-gray-400 rounded",g)})]})}),e.jsx("div",{className:"h-3 w-12 bg-gray-200 rounded mt-1"})]})]})},b=A.forwardRef(({messages:s,itemHeight:n=80,overscan:r=10,className:t,...a},g)=>{const i=h.useRef(null),[f,y]=h.useState(0),[p,d]=h.useState(0),[te,H]=h.useState(!1),v=h.useRef();h.useEffect(()=>{const o=i.current;if(!o)return;const l=()=>{d(o.clientHeight)},m=()=>{y(o.scrollTop),H(!0),v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{H(!1)},100)};return l(),o.addEventListener("scroll",m),window.addEventListener("resize",l),()=>{o.removeEventListener("scroll",m),window.removeEventListener("resize",l),v.current&&clearTimeout(v.current)}},[]);const{startIndex:w,endIndex:I,totalHeight:R,beforeSkeletons:j,afterSkeletons:_}=h.useMemo(()=>{if(p===0)return{startIndex:0,endIndex:s.length,totalHeight:s.length*n,beforeSkeletons:0,afterSkeletons:0};const o=Math.ceil(p/n),l=Math.max(r,Math.ceil(o/2)),m=Math.max(0,Math.floor(f/n)-l),z=Math.min(s.length,m+o+l*2),E=Math.ceil(o/3),ae=m>0?E:0,re=z<s.length?E:0;return{startIndex:m,endIndex:z,totalHeight:s.length*n,beforeSkeletons:ae,afterSkeletons:re}},[s.length,n,f,p,r]),ne=s.slice(w,I);return A.useImperativeHandle(g,()=>({scrollToMessage:o=>{const l=s.findIndex(m=>m.id===o);if(l!==-1&&i.current){const m=l*n;i.current.scrollTo({top:m,behavior:"smooth"})}},scrollToTop:()=>{i.current&&i.current.scrollTo({top:0,behavior:"smooth"})},scrollToBottom:()=>{i.current&&i.current.scrollTo({top:R,behavior:"smooth"})}}),[s,n,R]),e.jsx("div",{ref:i,className:c("flex-1 overflow-y-auto overscroll-none",t),style:{WebkitOverflowScrolling:"touch",scrollBehavior:"auto"},...a,children:e.jsxs("div",{style:{height:Math.max(R,p),position:"relative"},children:[j>0&&e.jsx("div",{style:{transform:`translateY(${Math.max(0,w-j)*n}px)`,position:"absolute",top:0,left:0,right:0,zIndex:1},children:Array.from({length:j},(o,l)=>e.jsx("div",{style:{minHeight:n},children:e.jsx(L,{variant:l%2===0?"assistant":"user",index:l})},`skeleton-before-${l}`))}),e.jsx("div",{style:{transform:`translateY(${w*n}px)`,position:"absolute",top:0,left:0,right:0,zIndex:2},children:ne.map((o,l)=>e.jsx("div",{style:{minHeight:n},children:e.jsx(u,{variant:o.variant,timestamp:o.timestamp,avatar:o.avatar,children:o.text})},o.id))}),_>0&&e.jsx("div",{style:{transform:`translateY(${I*n}px)`,position:"absolute",top:0,left:0,right:0,zIndex:1},children:Array.from({length:_},(o,l)=>e.jsx("div",{style:{minHeight:n},children:e.jsx(L,{variant:l%2===0?"user":"assistant",index:l+j})},`skeleton-after-${l}`))}),te&&e.jsxs(e.Fragment,{children:[w>0&&e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"60px",background:"linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)",pointerEvents:"none",zIndex:3}}),I<s.length&&e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"60px",background:"linear-gradient(to top, rgba(255,255,255,0.8), transparent)",pointerEvents:"none",zIndex:3}})]})]})})});b.displayName="ChatMessages";const x=({className:s,children:n,...r})=>e.jsx("div",{className:c("flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden",s),...r,children:n}),u=({variant:s="user",avatar:n,timestamp:r,className:t,children:a,...g})=>{const i=s==="user";return e.jsxs("div",{className:c("flex gap-3 p-4",i?"flex-row-reverse":"flex-row",t),...g,children:[n&&e.jsx("div",{className:"flex-shrink-0",children:n}),e.jsxs("div",{className:c("flex flex-col",i?"items-end":"items-start"),children:[e.jsx("div",{className:c("max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 rounded-lg text-sm",{"bg-blue-600 text-white":s==="user","bg-gray-100 text-gray-900":s==="assistant","bg-yellow-50 text-yellow-800 border border-yellow-200":s==="system"}),children:a}),r&&e.jsx("span",{className:"text-xs text-gray-500 mt-1",children:r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})},D=({onSubmit:s,placeholder:n="Type a message...",disabled:r=!1,loading:t=!1,className:a,...g})=>{const[i,f]=A.useState(""),y=d=>{d.preventDefault(),i.trim()&&!r&&!t&&(s==null||s(i.trim()),f(""))},p=d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),y(d))};return e.jsx("div",{className:c("p-4 border-t border-gray-200 bg-gray-50",a),...g,children:e.jsxs("form",{onSubmit:y,className:"flex gap-2",children:[e.jsx("textarea",{value:i,onChange:d=>f(d.target.value),onKeyDown:p,placeholder:n,disabled:r||t,rows:1,className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed",style:{minHeight:"40px",maxHeight:"120px"}}),e.jsx("button",{type:"submit",disabled:!i.trim()||r||t,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500",children:t?"...":"Send"})]})})};try{b.displayName="ChatMessages",b.__docgenInfo={description:"",displayName:"ChatMessages",props:{messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"ChatMessageData[]"}},itemHeight:{defaultValue:{value:"80"},description:"",name:"itemHeight",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"10"},description:"",name:"overscan",required:!1,type:{name:"number"}}}}}catch{}const de={title:"Surface/Chat",component:x,parameters:{layout:"centered",docs:{description:{component:"A lightweight chat interface with message display and input prompt."}}}},M={args:{children:null},render:()=>{const[s,n]=h.useState([{id:1,text:"Hello! How can I help you today?",variant:"assistant",timestamp:new Date(Date.now()-6e4)},{id:2,text:"Hi there! I have a question about your services.",variant:"user",timestamp:new Date(Date.now()-3e4)}]),r=t=>{const a={id:s.length+1,text:t,variant:"user",timestamp:new Date};n([...s,a])};return e.jsx("div",{className:"w-96 h-96",children:e.jsxs(x,{children:[e.jsx("div",{className:"flex-1 overflow-y-auto",children:s.map(t=>e.jsx(u,{variant:t.variant,timestamp:t.timestamp,avatar:e.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm",children:t.variant==="user"?"U":"A"}),children:t.text},t.id))}),e.jsx(D,{onSubmit:r})]})})}},C={args:{children:null},render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(x,{children:[e.jsx(u,{variant:"user",timestamp:new Date,children:"This is a user message"}),e.jsx(u,{variant:"assistant",timestamp:new Date,children:"This is an assistant message"}),e.jsx(u,{variant:"system",timestamp:new Date,children:"This is a system message"})]})})},N={args:{children:null},render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(x,{children:[e.jsx(u,{variant:"assistant",avatar:e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold",children:"AI"}),children:"Hello! I'm your AI assistant. How can I help you today?"}),e.jsx(u,{variant:"user",avatar:e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold"}),children:"Can you help me understand how this chat component works?"})]})})},T={args:{children:null},render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(x,{children:[e.jsx(u,{variant:"user",children:"What's the weather like today?"}),e.jsx(D,{loading:!0,placeholder:"AI is thinking..."})]})})},k={args:{children:null},render:()=>{const s=h.useRef(null),n=Array.from({length:1e3},(t,a)=>({id:a,variant:a%2===0?"assistant":"user",text:`Message ${a+1}: ${a%2===0?"This is an assistant message with some helpful information.":"This is a user message asking a question or providing information."}`,timestamp:new Date(Date.now()-(1e3-a)*1e4),avatar:e.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold",children:a%2===0?"A":"U"})})),r=()=>{var a;const t=Math.floor(Math.random()*1e3);(a=s.current)==null||a.scrollToMessage(t)};return e.jsxs("div",{className:"w-96 h-96 flex flex-col",children:[e.jsxs("div",{className:"p-2 bg-gray-50 border-b flex gap-1 text-xs",children:[e.jsx("button",{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToTop()},className:"px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700",children:"Top"}),e.jsx("button",{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToBottom()},className:"px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700",children:"Bottom"}),e.jsx("button",{onClick:r,className:"px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700",children:"Random"})]}),e.jsxs(x,{children:[e.jsx(b,{ref:s,messages:n,itemHeight:100}),e.jsx(D,{placeholder:"Type your response..."})]})]})}},S={args:{children:null},render:()=>{const s=h.useRef(null),n=Array.from({length:5e3},(t,a)=>({id:a,variant:["user","assistant","system"][a%3],text:`Performance test message #${a+1}. Notice smooth skeleton messages during scrolling - no more white flashes!`,timestamp:new Date(Date.now()-(5e3-a)*5e3)})),r=()=>{s.current&&s.current.scrollToMessage(2500)};return e.jsxs("div",{className:"w-96 h-96 flex flex-col",children:[e.jsxs("div",{className:"p-2 bg-yellow-50 border-b text-xs text-yellow-800 flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Skeleton Scrolling:"})," 5,000 messages with smooth skeleton transitions!"]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToTop()},className:"px-2 py-1 bg-blue-600 text-white rounded text-xs",children:"↑ Top"}),e.jsx("button",{onClick:r,className:"px-2 py-1 bg-purple-600 text-white rounded text-xs",children:"Mid"}),e.jsx("button",{onClick:()=>{var t;return(t=s.current)==null?void 0:t.scrollToBottom()},className:"px-2 py-1 bg-blue-600 text-white rounded text-xs",children:"↓ Bottom"})]})]}),e.jsxs(x,{children:[e.jsx(b,{ref:s,messages:n,itemHeight:80}),e.jsx(D,{placeholder:"Add another message..."})]})]})}};var $,B,q;M.parameters={...M.parameters,docs:{...($=M.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(B=M.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var P,W,U;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(W=C.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var V,K,Y;N.parameters={...N.parameters,docs:{...(V=N.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(K=N.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var G,O,F;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(F=(O=T.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,Q,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,se;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};const me=["Default","MessageVariants","WithAvatars","LoadingState","LongConversation","LazyRenderingDemo"];export{M as Default,S as LazyRenderingDemo,T as LoadingState,k as LongConversation,C as MessageVariants,N as WithAvatars,me as __namedExportsOrder,de as default};
