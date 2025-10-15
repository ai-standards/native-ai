import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as p,R as g}from"./index-DHZDe_v1.js";import{c as h}from"./cn-BaF2GUMg.js";import{E as Fe}from"./ErrorMessage-DYjD2rVY.js";import{H as He}from"./HelperText-BSqHZUf_.js";import{u as _e}from"./useDebounce-B8GKbvrx.js";import"./_commonjsHelpers-BosuxZz1.js";const k=p.forwardRef(({label:d,error:r,helperText:b,size:i="md",suggestions:t=[],onSearch:c,onSuggestionSelect:n,debounceMs:A=300,showSearchButton:D=!0,showClearButton:l=!0,loading:u=!1,maxSuggestions:v=10,filterSuggestions:_=!0,className:Ue,id:Ce,value:j,onChange:x,onFocus:O,onBlur:J,defaultValue:Q,...Le},Re)=>{const[o,I]=p.useState(()=>j!==void 0?j:Q!==void 0?Q:""),[E,m]=p.useState(!1),[z,N]=p.useState(-1),K=p.useRef(null),qe=p.useRef([]),F=p.useRef(null),y=p.useRef(null),V=Ce||`search-${Math.random().toString(36).substr(2,9)}`;g.useEffect(()=>{j!==void 0&&I(j)},[j]);const f=p.useMemo(()=>_?o.trim()?t.filter(s=>{var a;return s.label.toLowerCase().includes(o.toLowerCase())||((a=s.description)==null?void 0:a.toLowerCase().includes(o.toLowerCase()))}).slice(0,v):[]:t.slice(0,v),[o,t,_,v]);g.useEffect(()=>{f.length>0&&o.trim()?m(!0):o.trim()||m(!1)},[f,o]);const Me=_e(s=>{c&&s.trim()&&c(s)},A),Te=s=>{const a=s.target.value;I(a),N(-1),Me(a),x&&x(s)},H=()=>{c&&c(o),m(!1)},Be=()=>{var a;I(""),m(!1),N(-1),x&&x({target:{value:""}}),(a=K.current)==null||a.focus()},G=s=>{I(s.value),m(!1),N(-1),n&&n(s);const a={target:{value:s.value}};x&&x(a)},Pe=s=>{if(!E||f.length===0){s.key==="Enter"&&H();return}switch(s.key){case"ArrowDown":s.preventDefault(),N(a=>a<f.length-1?a+1:a);break;case"ArrowUp":s.preventDefault(),N(a=>a>0?a-1:a);break;case"Enter":s.preventDefault(),z>=0?G(f[z]):H();break;case"Escape":m(!1),N(-1);break}},We=s=>{o.trim()&&f.length>0&&m(!0),O&&O(s)},$e=s=>{y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{m(!1),N(-1),y.current=null},150),J&&J(s)};g.useEffect(()=>{const s=a=>{F.current&&!F.current.contains(a.target)&&m(!1)};if(E)return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[E]),g.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]);const Ae={sm:"px-2 py-1 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},w={sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"};return e.jsxDEV("div",{className:"space-y-1",children:[d&&e.jsxDEV("label",{htmlFor:V,className:h("block text-sm font-medium",r?"text-red-700":"text-gray-700"),children:d},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:295,columnNumber:11},void 0),e.jsxDEV("div",{className:"relative",ref:F,children:[e.jsxDEV("div",{className:"relative",children:[e.jsxDEV("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e.jsxDEV("svg",{className:h(w[i],"text-gray-400"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:311,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:310,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:309,columnNumber:13},void 0),e.jsxDEV("input",{ref:Re||K,id:V,type:"text",value:o,onChange:Te,onKeyDown:Pe,onFocus:We,onBlur:$e,className:h("w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pl-10",Ae[i],l&&o||D&&!u?"pr-20":l||D?"pr-10":"pr-3",r?"border-red-500 focus:border-red-500 focus:ring-red-500":"border-gray-300",Ue),...Le},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:315,columnNumber:13},void 0),e.jsxDEV("div",{className:"absolute inset-y-0 right-0 flex items-center",children:[l&&o&&e.jsxDEV("button",{type:"button",onClick:Be,"aria-label":"Clear search",className:"p-1 text-gray-400 hover:text-gray-600 transition-colors",children:e.jsxDEV("svg",{className:h(w[i]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:347,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:346,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:340,columnNumber:17},void 0),D&&e.jsxDEV("button",{type:"button",onClick:H,disabled:u,"aria-label":u?"Searching...":"Search",className:h("p-1 mr-2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50",u&&"cursor-not-allowed"),children:u?e.jsxDEV("svg",{className:h(w[i],"animate-spin"),fill:"none",viewBox:"0 0 24 24",children:[e.jsxDEV("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",className:"opacity-25"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:365,columnNumber:23},void 0),e.jsxDEV("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",className:"opacity-75"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:366,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:364,columnNumber:21},void 0):e.jsxDEV("svg",{className:h(w[i]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:370,columnNumber:23},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:369,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:353,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:338,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:307,columnNumber:11},void 0),E&&f.length>0&&e.jsxDEV("ul",{className:"absolute top-full left-0 z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto",children:f.map((s,a)=>e.jsxDEV("li",{ref:ze=>qe.current[a]=ze,onClick:()=>G(s),className:h("px-3 py-2 cursor-pointer transition-colors",a===z?"bg-blue-100 text-blue-900":"hover:bg-gray-100"),children:e.jsxDEV("div",{className:"flex flex-col",children:[e.jsxDEV("span",{className:"font-medium",children:s.label},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:394,columnNumber:21},void 0),s.description&&e.jsxDEV("span",{className:"text-sm text-gray-600",children:s.description},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:396,columnNumber:23},void 0),s.category&&e.jsxDEV("span",{className:"text-xs text-blue-600 uppercase tracking-wide",children:s.category},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:399,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:393,columnNumber:19},void 0)},`${s.value}-${a}`,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:382,columnNumber:17},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:380,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:306,columnNumber:9},void 0),e.jsxDEV(Fe,{message:r,fieldId:V},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:408,columnNumber:9},void 0),e.jsxDEV(He,{text:r?void 0:b,fieldId:V},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:409,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.tsx",lineNumber:293,columnNumber:7},void 0)});k.displayName="SearchInput";try{k.displayName="SearchInput",k.__docgenInfo={description:"",displayName:"SearchInput",props:{label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},suggestions:{defaultValue:{value:"[]"},description:"Search suggestions/autocomplete options",name:"suggestions",required:!1,type:{name:"SearchOption[]"}},onSearch:{defaultValue:null,description:"Called when search is performed",name:"onSearch",required:!1,type:{name:"((query: string) => void)"}},onSuggestionSelect:{defaultValue:null,description:"Called when suggestion is selected",name:"onSuggestionSelect",required:!1,type:{name:"((suggestion: SearchOption) => void)"}},debounceMs:{defaultValue:{value:"300"},description:"Debounce delay for search in milliseconds",name:"debounceMs",required:!1,type:{name:"number"}},showSearchButton:{defaultValue:{value:"true"},description:"Show search button",name:"showSearchButton",required:!1,type:{name:"boolean"}},showClearButton:{defaultValue:{value:"true"},description:"Show clear button",name:"showClearButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading state for search",name:"loading",required:!1,type:{name:"boolean"}},maxSuggestions:{defaultValue:{value:"10"},description:"Maximum number of suggestions to show",name:"maxSuggestions",required:!1,type:{name:"number"}},filterSuggestions:{defaultValue:{value:"true"},description:"Filter suggestions based on input",name:"filterSuggestions",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Input id",name:"id",required:!1,type:{name:"string"}}}}}catch{}const Ze={title:"Form/SearchInput",component:k,parameters:{layout:"centered"},decorators:[d=>e.jsxDEV("div",{className:"w-96 p-8",children:e.jsxDEV(d,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:14,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:13,columnNumber:7},void 0)],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},showSearchButton:{control:{type:"boolean"}},showClearButton:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},filterSuggestions:{control:{type:"boolean"}}}},S=[{value:"react",label:"React",description:"JavaScript library for building user interfaces",category:"Framework"},{value:"vue",label:"Vue.js",description:"Progressive JavaScript framework",category:"Framework"},{value:"angular",label:"Angular",description:"Platform for building mobile and desktop apps",category:"Framework"},{value:"typescript",label:"TypeScript",description:"Typed superset of JavaScript",category:"Language"},{value:"javascript",label:"JavaScript",description:"High-level programming language",category:"Language"},{value:"html",label:"HTML",description:"Markup language for web pages",category:"Markup"},{value:"css",label:"CSS",description:"Style sheet language",category:"Styling"}],U={args:{placeholder:"Search..."}},C={args:{label:"Search Technologies",placeholder:"Enter technology name",id:"tech-search"}},L={args:{label:"Search with Autocomplete",placeholder:"Type to see suggestions",suggestions:S,id:"suggestions"}},R={args:{label:"Minimal Search",placeholder:"No buttons, just search",showSearchButton:!1,showClearButton:!1,suggestions:S.slice(0,3),id:"minimal"}},q={args:{label:"Loading Search",placeholder:"Search is loading...",loading:!0,defaultValue:"searching...",id:"loading"}},M={args:{label:"Search with Error",placeholder:"This search has an error",error:"Search service is currently unavailable",id:"error"}},T={args:{size:"sm",label:"Small Search",placeholder:"Compact search",suggestions:S.slice(0,3),id:"small"}},B={args:{size:"lg",label:"Large Search",placeholder:"Big search input",suggestions:S.slice(0,3),id:"large"}},P={args:{label:"Fast Debounce (100ms)",placeholder:"Quick search response",debounceMs:100,suggestions:S,helperText:"Search triggers quickly after typing",id:"fast"}},W={render:d=>{const[r,b]=g.useState([]),[i,t]=g.useState(""),[c,n]=g.useState(!1),A=async l=>{n(!0),setTimeout(()=>{const u=S.filter(v=>v.label.toLowerCase().includes(l.toLowerCase())).map(v=>v.label);b(u),n(!1)},800)},D=l=>{t(l.label)};return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(k,{label:"Interactive Search",placeholder:"Search technologies...",suggestions:S,onSearch:A,onSuggestionSelect:D,loading:c,id:"interactive"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:161,columnNumber:9},void 0),e.jsxDEV("div",{className:"space-y-2",children:[i&&e.jsxDEV("div",{className:"p-3 bg-blue-50 rounded",children:[e.jsxDEV("p",{className:"text-sm font-medium text-blue-900",children:"Selected:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:174,columnNumber:15},void 0),e.jsxDEV("p",{className:"text-blue-700",children:i},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:175,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:173,columnNumber:13},void 0),r.length>0&&e.jsxDEV("div",{className:"p-3 bg-green-50 rounded",children:[e.jsxDEV("p",{className:"text-sm font-medium text-green-900",children:"Search Results:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:181,columnNumber:15},void 0),e.jsxDEV("ul",{className:"mt-1 text-green-700 text-sm",children:r.map((l,u)=>e.jsxDEV("li",{children:["• ",l]},u,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:184,columnNumber:19},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:182,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:180,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:171,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:160,columnNumber:7},void 0)}},$={render:()=>{const d=[{value:"iphone-14",label:"iPhone 14",description:"$799 - Latest Apple smartphone",category:"Electronics"},{value:"macbook-pro",label:"MacBook Pro",description:"$1299 - Professional laptop",category:"Electronics"},{value:"nike-shoes",label:"Nike Air Max",description:"$120 - Running shoes",category:"Fashion"},{value:"coffee-mug",label:"Coffee Mug",description:"$15 - Ceramic mug",category:"Home"},{value:"wireless-headphones",label:"Wireless Headphones",description:"$199 - Noise cancelling",category:"Electronics"}],[r,b]=g.useState([]),i=t=>{const c=r.find(n=>n.value===t.value);b(c?r.map(n=>n.value===t.value?{...n,quantity:n.quantity+1}:n):[...r,{...t,quantity:1}])};return e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV(k,{label:"Product Search",placeholder:"Search for products...",suggestions:d,onSuggestionSelect:i,helperText:"Select products to add to cart",id:"product-search"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:222,columnNumber:9},void 0),r.length>0&&e.jsxDEV("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsxDEV("h3",{className:"font-semibold text-gray-900 mb-3",children:"Shopping Cart"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:233,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-2",children:r.map((t,c)=>e.jsxDEV("div",{className:"flex justify-between items-center py-2 border-b border-gray-200 last:border-0",children:[e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"font-medium",children:t.label},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:238,columnNumber:21},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:t.description},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:239,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:237,columnNumber:19},void 0),e.jsxDEV("span",{className:"text-sm font-medium",children:["Qty: ",t.quantity]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:241,columnNumber:19},void 0)]},c,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:236,columnNumber:17},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:234,columnNumber:13},void 0),e.jsxDEV("button",{onClick:()=>b([]),className:"mt-3 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors",children:"Clear Cart"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:245,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:232,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/searchinput/SearchInput.stories.tsx",lineNumber:221,columnNumber:7},void 0)}};var X,Y,Z;U.parameters={...U.parameters,docs:{...(X=U.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  }
}`,...(Z=(Y=U.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,ae;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Search Technologies',
    placeholder: 'Enter technology name',
    id: 'tech-search'
  }
}`,...(ae=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,te,ne;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Search with Autocomplete',
    placeholder: 'Type to see suggestions',
    suggestions: sampleSuggestions,
    id: 'suggestions'
  }
}`,...(ne=(te=L.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ie,ce;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Minimal Search',
    placeholder: 'No buttons, just search',
    showSearchButton: false,
    showClearButton: false,
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'minimal'
  }
}`,...(ce=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ue,me;q.parameters={...q.parameters,docs:{...(le=q.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Loading Search',
    placeholder: 'Search is loading...',
    loading: true,
    defaultValue: 'searching...',
    id: 'loading'
  }
}`,...(me=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,de,fe;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: 'Search with Error',
    placeholder: 'This search has an error',
    error: 'Search service is currently unavailable',
    id: 'error'
  }
}`,...(fe=(de=M.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var he,ge,be;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Search',
    placeholder: 'Compact search',
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'small'
  }
}`,...(be=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,Ne,Se;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Search',
    placeholder: 'Big search input',
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'large'
  }
}`,...(Se=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var xe,ye,ke;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: 'Fast Debounce (100ms)',
    placeholder: 'Quick search response',
    debounceMs: 100,
    suggestions: sampleSuggestions,
    helperText: 'Search triggers quickly after typing',
    id: 'fast'
  }
}`,...(ke=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var De,je,Ie;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: args => {
    const [searchResults, setSearchResults] = React.useState<string[]>([]);
    const [selectedItem, setSelectedItem] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState(false);
    const handleSearch = async (query: string) => {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        const results = sampleSuggestions.filter(item => item.label.toLowerCase().includes(query.toLowerCase())).map(item => item.label);
        setSearchResults(results);
        setIsLoading(false);
      }, 800);
    };
    const handleSuggestionSelect = (suggestion: any) => {
      setSelectedItem(suggestion.label);
    };
    return <div className="space-y-4">
        <SearchInput label="Interactive Search" placeholder="Search technologies..." suggestions={sampleSuggestions} onSearch={handleSearch} onSuggestionSelect={handleSuggestionSelect} loading={isLoading} id="interactive" />
        
        <div className="space-y-2">
          {selectedItem && <div className="p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium text-blue-900">Selected:</p>
              <p className="text-blue-700">{selectedItem}</p>
            </div>}
          
          {searchResults.length > 0 && <div className="p-3 bg-green-50 rounded">
              <p className="text-sm font-medium text-green-900">Search Results:</p>
              <ul className="mt-1 text-green-700 text-sm">
                {searchResults.map((result, index) => <li key={index}>• {result}</li>)}
              </ul>
            </div>}
        </div>
      </div>;
  }
}`,...(Ie=(je=W.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Ee,Ve,we;$.parameters={...$.parameters,docs:{...(Ee=$.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const products = [{
      value: 'iphone-14',
      label: 'iPhone 14',
      description: '$799 - Latest Apple smartphone',
      category: 'Electronics'
    }, {
      value: 'macbook-pro',
      label: 'MacBook Pro',
      description: '$1299 - Professional laptop',
      category: 'Electronics'
    }, {
      value: 'nike-shoes',
      label: 'Nike Air Max',
      description: '$120 - Running shoes',
      category: 'Fashion'
    }, {
      value: 'coffee-mug',
      label: 'Coffee Mug',
      description: '$15 - Ceramic mug',
      category: 'Home'
    }, {
      value: 'wireless-headphones',
      label: 'Wireless Headphones',
      description: '$199 - Noise cancelling',
      category: 'Electronics'
    }];
    const [cart, setCart] = React.useState<any[]>([]);
    const handleProductSelect = (product: any) => {
      const existingItem = cart.find(item => item.value === product.value);
      if (existingItem) {
        setCart(cart.map(item => item.value === product.value ? {
          ...item,
          quantity: item.quantity + 1
        } : item));
      } else {
        setCart([...cart, {
          ...product,
          quantity: 1
        }]);
      }
    };
    return <div className="space-y-6">
        <SearchInput label="Product Search" placeholder="Search for products..." suggestions={products} onSuggestionSelect={handleProductSelect} helperText="Select products to add to cart" id="product-search" />
        
        {cart.length > 0 && <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-900 mb-3">Shopping Cart</h3>
            <div className="space-y-2">
              {cart.map((item, index) => <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-sm font-medium">Qty: {item.quantity}</span>
                </div>)}
            </div>
            <button onClick={() => setCart([])} className="mt-3 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
              Clear Cart
            </button>
          </div>}
      </div>;
  }
}`,...(we=(Ve=$.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};const es=["Default","WithLabel","WithSuggestions","WithoutButtons","LoadingState","WithError","Small","Large","CustomDebounce","Interactive","ProductSearch"];export{P as CustomDebounce,U as Default,W as Interactive,B as Large,q as LoadingState,$ as ProductSearch,T as Small,M as WithError,C as WithLabel,L as WithSuggestions,R as WithoutButtons,es as __namedExportsOrder,Ze as default};
