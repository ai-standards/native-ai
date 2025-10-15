import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as k,r as y}from"./index-DHZDe_v1.js";import{c as S}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const l=k.forwardRef(({scrollbarVariant:s="default",maxHeight:r,direction:a="vertical",fadeEdges:G=!1,fadeSize:J="md",onScrollChange:i,className:K,children:P,...Q},X)=>{const n=y.useRef(null),[m,Y]=y.useState({scrollTop:0,scrollLeft:0,canScrollUp:!1,canScrollDown:!1,canScrollLeft:!1,canScrollRight:!1});y.useEffect(()=>{const o=n.current;if(!o)return;const t=()=>{const{scrollTop:c,scrollLeft:f,scrollHeight:$,scrollWidth:ee,clientHeight:re,clientWidth:se}=o,ae={scrollTop:c,scrollLeft:f,canScrollUp:c>0,canScrollDown:c+re<$,canScrollLeft:f>0,canScrollRight:f+se<ee};Y(ae),i==null||i(c,f)};t(),o.addEventListener("scroll",t);const u=new ResizeObserver(t);return u.observe(o),()=>{o.removeEventListener("scroll",t),u.disconnect()}},[i]),k.useImperativeHandle(X,()=>({scrollTo:({top:o,left:t,behavior:u="auto"})=>{var c;(c=n.current)==null||c.scrollTo({top:o,left:t,behavior:u})},scrollToTop:()=>{var o;(o=n.current)==null||o.scrollTo({top:0,behavior:"smooth"})},scrollToBottom:()=>{n.current&&n.current.scrollTo({top:n.current.scrollHeight,behavior:"smooth"})},scrollToLeft:()=>{var o;(o=n.current)==null||o.scrollTo({left:0,behavior:"smooth"})},scrollToRight:()=>{n.current&&n.current.scrollTo({left:n.current.scrollWidth,behavior:"smooth"})}}),[]);const Z={default:"scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100",minimal:"scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent",hidden:"scrollbar-none"},d={sm:"8px",md:"16px",lg:"24px"}[J];return e.jsxDEV("div",{className:S("relative",K),...Q,children:[e.jsxDEV("div",{ref:n,className:S("w-full",Z[s],{"overflow-y-auto overflow-x-hidden":a==="vertical","overflow-x-auto overflow-y-hidden":a==="horizontal","overflow-auto":a==="both"}),style:{maxHeight:r,WebkitOverflowScrolling:"touch"},children:P},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.tsx",lineNumber:140,columnNumber:7},void 0),G&&e.jsxDEV(e.Fragment,{children:[(a==="vertical"||a==="both")&&m.canScrollUp&&e.jsxDEV("div",{className:"absolute top-0 left-0 right-0 pointer-events-none z-10",style:{height:d,background:"linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))"}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.tsx",lineNumber:164,columnNumber:13},void 0),(a==="vertical"||a==="both")&&m.canScrollDown&&e.jsxDEV("div",{className:"absolute bottom-0 left-0 right-0 pointer-events-none z-10",style:{height:d,background:"linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))"}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.tsx",lineNumber:175,columnNumber:13},void 0),(a==="horizontal"||a==="both")&&m.canScrollLeft&&e.jsxDEV("div",{className:"absolute top-0 left-0 bottom-0 pointer-events-none z-10",style:{width:d,background:"linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))"}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.tsx",lineNumber:186,columnNumber:13},void 0),(a==="horizontal"||a==="both")&&m.canScrollRight&&e.jsxDEV("div",{className:"absolute top-0 right-0 bottom-0 pointer-events-none z-10",style:{width:d,background:"linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))"}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.tsx",lineNumber:197,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.tsx",lineNumber:161,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.tsx",lineNumber:133,columnNumber:5},void 0)});l.displayName="ScrollArea";try{l.displayName="ScrollArea",l.__docgenInfo={description:"",displayName:"ScrollArea",props:{scrollbarVariant:{defaultValue:{value:"default"},description:"Custom scrollbar styling",name:"scrollbarVariant",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"default"'},{value:'"minimal"'}]}},maxHeight:{defaultValue:null,description:"Maximum height of the scroll area",name:"maxHeight",required:!1,type:{name:"string | number"}},direction:{defaultValue:{value:"vertical"},description:"Direction of scrolling",name:"direction",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},fadeEdges:{defaultValue:{value:"false"},description:"Fade effect at edges during scroll",name:"fadeEdges",required:!1,type:{name:"boolean"}},fadeSize:{defaultValue:{value:"md"},description:"Size of fade effect",name:"fadeSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onScrollChange:{defaultValue:null,description:"Callback when scroll position changes",name:"onScrollChange",required:!1,type:{name:"((scrollTop: number, scrollLeft: number) => void)"}}}}}catch{}const ie={title:"Surface/ScrollArea",component:l,parameters:{layout:"centered",docs:{description:{component:"Custom scrollable regions with enhanced styling and fade effects."}}}},p={render:()=>e.jsxDEV(l,{maxHeight:"200px",className:"w-64 border rounded-lg",children:e.jsxDEV("div",{className:"p-4",children:Array.from({length:20},(s,r)=>e.jsxDEV("div",{className:"py-2 border-b last:border-b-0",children:["Item ",r+1," - This is some content that makes the container scrollable"]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:26,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:24,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:23,columnNumber:5},void 0)},b={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Default Scrollbar"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:39,columnNumber:9},void 0),e.jsxDEV(l,{scrollbarVariant:"default",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsxDEV("div",{className:"p-4",children:Array.from({length:15},(s,r)=>e.jsxDEV("div",{className:"py-2",children:["Default scrollbar item ",r+1]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:43,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:41,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:40,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:38,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Minimal Scrollbar"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:50,columnNumber:9},void 0),e.jsxDEV(l,{scrollbarVariant:"minimal",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsxDEV("div",{className:"p-4",children:Array.from({length:15},(s,r)=>e.jsxDEV("div",{className:"py-2",children:["Minimal scrollbar item ",r+1]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:54,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:52,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:51,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:49,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Hidden Scrollbar"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:61,columnNumber:9},void 0),e.jsxDEV(l,{scrollbarVariant:"hidden",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsxDEV("div",{className:"p-4",children:Array.from({length:15},(s,r)=>e.jsxDEV("div",{className:"py-2",children:["Hidden scrollbar item ",r+1]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:65,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:63,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:62,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:60,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:37,columnNumber:5},void 0)},N={render:()=>e.jsxDEV(l,{direction:"horizontal",className:"w-64 border rounded-lg",children:e.jsxDEV("div",{className:"flex p-4 gap-4",style:{width:"600px"},children:Array.from({length:10},(s,r)=>e.jsxDEV("div",{className:"flex-shrink-0 w-20 h-16 bg-blue-100 border rounded flex items-center justify-center text-sm",children:["Card ",r+1]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:79,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:77,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:76,columnNumber:5},void 0)},v={render:()=>e.jsxDEV(l,{direction:"both",maxHeight:"200px",className:"w-64 border rounded-lg",children:e.jsxDEV("div",{className:"p-4",style:{width:"400px"},children:Array.from({length:15},(s,r)=>e.jsxDEV("div",{className:"py-2 whitespace-nowrap",children:["Long horizontal content that extends beyond container width - Item ",r+1]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:93,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:91,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:90,columnNumber:5},void 0)},g={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Small Fade"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:106,columnNumber:9},void 0),e.jsxDEV(l,{fadeEdges:!0,fadeSize:"sm",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsxDEV("div",{className:"p-4",children:Array.from({length:20},(s,r)=>e.jsxDEV("div",{className:"py-2",children:["Fade edges item ",r+1]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:110,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:108,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:107,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:105,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Large Fade"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:117,columnNumber:9},void 0),e.jsxDEV(l,{fadeEdges:!0,fadeSize:"lg",maxHeight:"150px",className:"w-64 border rounded-lg",children:e.jsxDEV("div",{className:"p-4",children:Array.from({length:20},(s,r)=>e.jsxDEV("div",{className:"py-2",children:["Large fade item ",r+1]},r,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:121,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:119,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:118,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:116,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:104,columnNumber:5},void 0)},h={render:()=>{const s=y.useRef(null);return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"flex gap-2",children:[e.jsxDEV("button",{onClick:()=>{var r;return(r=s.current)==null?void 0:r.scrollToTop()},className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"Top"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:137,columnNumber:11},void 0),e.jsxDEV("button",{onClick:()=>{var r;return(r=s.current)==null?void 0:r.scrollToBottom()},className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"Bottom"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:143,columnNumber:11},void 0),e.jsxDEV("button",{onClick:()=>{var r;return(r=s.current)==null?void 0:r.scrollTo({top:300,behavior:"smooth"})},className:"px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700",children:"Middle"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:149,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:136,columnNumber:9},void 0),e.jsxDEV(l,{ref:s,fadeEdges:!0,maxHeight:"200px",className:"w-64 border rounded-lg",onScrollChange:r=>console.log("Scroll position:",r),children:e.jsxDEV("div",{className:"p-4",children:Array.from({length:30},(r,a)=>e.jsxDEV("div",{className:"py-2 border-b last:border-b-0",children:["Controllable scroll item ",a+1]},a,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:166,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:164,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:157,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:135,columnNumber:7},void 0)}},x={render:()=>e.jsxDEV(l,{maxHeight:"300px",fadeEdges:!0,scrollbarVariant:"minimal",className:"w-80 border rounded-lg bg-gray-50",children:e.jsxDEV("pre",{className:"p-4 text-xs",children:e.jsxDEV("code",{children:`function fibonacci(n) {
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
// content that extends beyond the visible area.`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:186,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:185,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/scrollarea/ScrollArea.stories.tsx",lineNumber:179,columnNumber:5},void 0)};var D,j,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ScrollArea maxHeight="200px" className="w-64 border rounded-lg">
      <div className="p-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="py-2 border-b last:border-b-0">
            Item {i + 1} - This is some content that makes the container scrollable
          </div>)}
      </div>
    </ScrollArea>
}`,...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var E,V,w;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(w=(V=b.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var U,H,T;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(T=(H=N.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var _,z,R;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(z=v.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var C,L,F;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var q,W,B;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(W=h.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var M,I,O;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(I=x.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const me=["Default","ScrollbarVariants","HorizontalScroll","BothDirections","WithFadeEdges","WithScrollControls","CodeExample"];export{v as BothDirections,x as CodeExample,p as Default,N as HorizontalScroll,b as ScrollbarVariants,g as WithFadeEdges,h as WithScrollControls,me as __namedExportsOrder,ie as default};
