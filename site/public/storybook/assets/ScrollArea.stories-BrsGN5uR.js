import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as S,r as N}from"./index-BwDkhjyp.js";import{c as w}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const n=S.forwardRef(({scrollbarVariant:a="default",maxHeight:r,direction:l="vertical",fadeEdges:U=!1,fadeSize:J="md",onScrollChange:i,className:K,children:P,...Q},X)=>{const o=N.useRef(null),[d,Y]=N.useState({scrollTop:0,scrollLeft:0,canScrollUp:!1,canScrollDown:!1,canScrollLeft:!1,canScrollRight:!1});N.useEffect(()=>{const s=o.current;if(!s)return;const c=()=>{const{scrollTop:t,scrollLeft:h,scrollHeight:$,scrollWidth:ee,clientHeight:re,clientWidth:ae}=s,le={scrollTop:t,scrollLeft:h,canScrollUp:t>0,canScrollDown:t+re<$,canScrollLeft:h>0,canScrollRight:h+ae<ee};Y(le),i==null||i(t,h)};c(),s.addEventListener("scroll",c);const u=new ResizeObserver(c);return u.observe(s),()=>{s.removeEventListener("scroll",c),u.disconnect()}},[i]),S.useImperativeHandle(X,()=>({scrollTo:({top:s,left:c,behavior:u="auto"})=>{var t;(t=o.current)==null||t.scrollTo({top:s,left:c,behavior:u})},scrollToTop:()=>{var s;(s=o.current)==null||s.scrollTo({top:0,behavior:"smooth"})},scrollToBottom:()=>{o.current&&o.current.scrollTo({top:o.current.scrollHeight,behavior:"smooth"})},scrollToLeft:()=>{var s;(s=o.current)==null||s.scrollTo({left:0,behavior:"smooth"})},scrollToRight:()=>{o.current&&o.current.scrollTo({left:o.current.scrollWidth,behavior:"smooth"})}}),[]);const Z={default:"scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100",minimal:"scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent",hidden:"scrollbar-none"},m={sm:"8px",md:"16px",lg:"24px"}[J];return e.jsxs("div",{className:w("relative",K),...Q,children:[e.jsx("div",{ref:o,className:w("w-full",Z[a],{"overflow-y-auto overflow-x-hidden":l==="vertical","overflow-x-auto overflow-y-hidden":l==="horizontal","overflow-auto":l==="both"}),style:{maxHeight:r,WebkitOverflowScrolling:"touch"},children:P}),U&&e.jsxs(e.Fragment,{children:[(l==="vertical"||l==="both")&&d.canScrollUp&&e.jsx("div",{className:"absolute top-0 left-0 right-0 pointer-events-none z-10",style:{height:m,background:"linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))"}}),(l==="vertical"||l==="both")&&d.canScrollDown&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 pointer-events-none z-10",style:{height:m,background:"linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))"}}),(l==="horizontal"||l==="both")&&d.canScrollLeft&&e.jsx("div",{className:"absolute top-0 left-0 bottom-0 pointer-events-none z-10",style:{width:m,background:"linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))"}}),(l==="horizontal"||l==="both")&&d.canScrollRight&&e.jsx("div",{className:"absolute top-0 right-0 bottom-0 pointer-events-none z-10",style:{width:m,background:"linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))"}})]})]})});n.displayName="ScrollArea";try{n.displayName="ScrollArea",n.__docgenInfo={description:"",displayName:"ScrollArea",props:{scrollbarVariant:{defaultValue:{value:"default"},description:"Custom scrollbar styling",name:"scrollbarVariant",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"default"'},{value:'"minimal"'}]}},maxHeight:{defaultValue:null,description:"Maximum height of the scroll area",name:"maxHeight",required:!1,type:{name:"string | number"}},direction:{defaultValue:{value:"vertical"},description:"Direction of scrolling",name:"direction",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},fadeEdges:{defaultValue:{value:"false"},description:"Fade effect at edges during scroll",name:"fadeEdges",required:!1,type:{name:"boolean"}},fadeSize:{defaultValue:{value:"md"},description:"Size of fade effect",name:"fadeSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onScrollChange:{defaultValue:null,description:"Callback when scroll position changes",name:"onScrollChange",required:!1,type:{name:"((scrollTop: number, scrollLeft: number) => void)"}}}}}catch{}const ie={title:"Surface/ScrollArea",component:n,parameters:{layout:"centered",docs:{description:{component:"Custom scrollable regions with enhanced styling and fade effects."}}}},b={render:()=>e.jsx(n,{maxHeight:"200px",className:"w-64 border rounded-lg",children:e.jsx("div",{className:"p-4",children:Array.from({length:20},(a,r)=>e.jsxs("div",{className:"py-2 border-b last:border-b-0",children:["Item ",r+1," - This is some content that makes the container scrollable"]},r))})})},p={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Default Scrollbar"}),e.jsx(n,{scrollbarVariant:"default",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsx("div",{className:"p-4",children:Array.from({length:15},(a,r)=>e.jsxs("div",{className:"py-2",children:["Default scrollbar item ",r+1]},r))})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Minimal Scrollbar"}),e.jsx(n,{scrollbarVariant:"minimal",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsx("div",{className:"p-4",children:Array.from({length:15},(a,r)=>e.jsxs("div",{className:"py-2",children:["Minimal scrollbar item ",r+1]},r))})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Hidden Scrollbar"}),e.jsx(n,{scrollbarVariant:"hidden",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsx("div",{className:"p-4",children:Array.from({length:15},(a,r)=>e.jsxs("div",{className:"py-2",children:["Hidden scrollbar item ",r+1]},r))})})]})]})},g={render:()=>e.jsx(n,{direction:"horizontal",className:"w-64 border rounded-lg",children:e.jsx("div",{className:"flex p-4 gap-4",style:{width:"600px"},children:Array.from({length:10},(a,r)=>e.jsxs("div",{className:"flex-shrink-0 w-20 h-16 bg-blue-100 border rounded flex items-center justify-center text-sm",children:["Card ",r+1]},r))})})},f={render:()=>e.jsx(n,{direction:"both",maxHeight:"200px",className:"w-64 border rounded-lg",children:e.jsx("div",{className:"p-4",style:{width:"400px"},children:Array.from({length:15},(a,r)=>e.jsxs("div",{className:"py-2 whitespace-nowrap",children:["Long horizontal content that extends beyond container width - Item ",r+1]},r))})})},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small Fade"}),e.jsx(n,{fadeEdges:!0,fadeSize:"sm",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsx("div",{className:"p-4",children:Array.from({length:20},(a,r)=>e.jsxs("div",{className:"py-2",children:["Fade edges item ",r+1]},r))})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large Fade"}),e.jsx(n,{fadeEdges:!0,fadeSize:"lg",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsx("div",{className:"p-4",children:Array.from({length:20},(a,r)=>e.jsxs("div",{className:"py-2",children:["Large fade item ",r+1]},r))})})]})]})},v={render:()=>{const a=N.useRef(null);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>{var r;return(r=a.current)==null?void 0:r.scrollToTop()},className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"Top"}),e.jsx("button",{onClick:()=>{var r;return(r=a.current)==null?void 0:r.scrollToBottom()},className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"Bottom"}),e.jsx("button",{onClick:()=>{var r;return(r=a.current)==null?void 0:r.scrollTo({top:300,behavior:"smooth"})},className:"px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700",children:"Middle"})]}),e.jsx(n,{ref:a,fadeEdges:!0,maxHeight:"200px",className:"w-64 border rounded-lg",onScrollChange:r=>console.log("Scroll position:",r),children:e.jsx("div",{className:"p-4",children:Array.from({length:30},(r,l)=>e.jsxs("div",{className:"py-2 border-b last:border-b-0",children:["Controllable scroll item ",l+1]},l))})})]})}},y={render:()=>e.jsx(n,{maxHeight:"300px",fadeEdges:!0,scrollbarVariant:"minimal",className:"w-80 border rounded-lg bg-gray-50",children:e.jsx("pre",{className:"p-4 text-xs",children:e.jsx("code",{children:`function fibonacci(n) {
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Generate first 20 fibonacci numbers
const numbers = [];
for (let i = 0; i < 20; i++) {
  numbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:');
console.log(numbers);

// Calculate sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// Find average
const average = sum / numbers.length;
console.log('Average:', average);

// This is a long code example that demonstrates
// how the ScrollArea component works with code
// content that extends beyond the visible area.`})})})};var j,A,H;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ScrollArea maxHeight="200px" className="w-64 border rounded-lg">
      <div className="p-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="py-2 border-b last:border-b-0">
            Item {i + 1} - This is some content that makes the container scrollable
          </div>)}
      </div>
    </ScrollArea>
}`,...(H=(A=b.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var T,k,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Default Scrollbar</h3>
        <ScrollArea scrollbarVariant="default" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} className="py-2">Default scrollbar item {i + 1}</div>)}
          </div>
        </ScrollArea>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Minimal Scrollbar</h3>
        <ScrollArea scrollbarVariant="minimal" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} className="py-2">Minimal scrollbar item {i + 1}</div>)}
          </div>
        </ScrollArea>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Hidden Scrollbar</h3>
        <ScrollArea scrollbarVariant="hidden" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} className="py-2">Hidden scrollbar item {i + 1}</div>)}
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var z,E,R;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ScrollArea direction="horizontal" className="w-64 border rounded-lg">
      <div className="flex p-4 gap-4" style={{
      width: '600px'
    }}>
        {Array.from({
        length: 10
      }, (_, i) => <div key={i} className="flex-shrink-0 w-20 h-16 bg-blue-100 border rounded flex items-center justify-center text-sm">
            Card {i + 1}
          </div>)}
      </div>
    </ScrollArea>
}`,...(R=(E=g.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var C,V,L;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ScrollArea direction="both" maxHeight="200px" className="w-64 border rounded-lg">
      <div className="p-4" style={{
      width: '400px'
    }}>
        {Array.from({
        length: 15
      }, (_, i) => <div key={i} className="py-2 whitespace-nowrap">
            Long horizontal content that extends beyond container width - Item {i + 1}
          </div>)}
      </div>
    </ScrollArea>
}`,...(L=(V=f.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var F,D,q;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Small Fade</h3>
        <ScrollArea fadeEdges fadeSize="sm" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({
            length: 20
          }, (_, i) => <div key={i} className="py-2">Fade edges item {i + 1}</div>)}
          </div>
        </ScrollArea>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Large Fade</h3>
        <ScrollArea fadeEdges fadeSize="lg" maxHeight="150px" className="w-64 border rounded-lg">
          <div className="p-4">
            {Array.from({
            length: 20
          }, (_, i) => <div key={i} className="py-2">Large fade item {i + 1}</div>)}
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(q=(D=x.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var W,B,M;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const scrollRef = useRef<ScrollAreaRef>(null);
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => scrollRef.current?.scrollToTop()} className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
            Top
          </button>
          <button onClick={() => scrollRef.current?.scrollToBottom()} className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
            Bottom
          </button>
          <button onClick={() => scrollRef.current?.scrollTo({
          top: 300,
          behavior: 'smooth'
        })} className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
            Middle
          </button>
        </div>
        
        <ScrollArea ref={scrollRef} fadeEdges maxHeight="200px" className="w-64 border rounded-lg" onScrollChange={scrollTop => console.log('Scroll position:', scrollTop)}>
          <div className="p-4">
            {Array.from({
            length: 30
          }, (_, i) => <div key={i} className="py-2 border-b last:border-b-0">
                Controllable scroll item {i + 1}
              </div>)}
          </div>
        </ScrollArea>
      </div>;
  }
}`,...(M=(B=v.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var I,O,G;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ScrollArea maxHeight="300px" fadeEdges scrollbarVariant="minimal" className="w-80 border rounded-lg bg-gray-50">
      <pre className="p-4 text-xs">
        <code>{\`function fibonacci(n) {
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Generate first 20 fibonacci numbers
const numbers = [];
for (let i = 0; i < 20; i++) {
  numbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:');
console.log(numbers);

// Calculate sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// Find average
const average = sum / numbers.length;
console.log('Average:', average);

// This is a long code example that demonstrates
// how the ScrollArea component works with code
// content that extends beyond the visible area.\`}</code>
      </pre>
    </ScrollArea>
}`,...(G=(O=y.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const de=["Default","ScrollbarVariants","HorizontalScroll","BothDirections","WithFadeEdges","WithScrollControls","CodeExample"];export{f as BothDirections,y as CodeExample,b as Default,g as HorizontalScroll,p as ScrollbarVariants,x as WithFadeEdges,v as WithScrollControls,de as __namedExportsOrder,ie as default};
