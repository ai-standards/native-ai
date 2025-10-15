import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as m,R as f}from"./index-BwDkhjyp.js";import{c as h}from"./cn-BaF2GUMg.js";import{E as He}from"./ErrorMessage-BhI4OYJy.js";import{H as _e}from"./HelperText-CDRu1p88.js";import{u as Oe}from"./useDebounce-N2WsDTMR.js";import"./_commonjsHelpers-BosuxZz1.js";const j=m.forwardRef(({label:p,error:t,helperText:b,size:o="md",suggestions:r=[],onSearch:c,onSuggestionSelect:n,debounceMs:z=300,showSearchButton:w=!0,showClearButton:i=!0,loading:u=!1,maxSuggestions:S=10,filterSuggestions:O=!0,className:Re,id:qe,value:k,onChange:v,onFocus:J,onBlur:Q,defaultValue:K,...Me},Te)=>{const[l,C]=m.useState(()=>k!==void 0?k:K!==void 0?K:""),[L,d]=m.useState(!1),[F,x]=m.useState(-1),U=m.useRef(null),Ve=m.useRef([]),H=m.useRef(null),N=m.useRef(null),I=qe||`search-${Math.random().toString(36).substr(2,9)}`;f.useEffect(()=>{k!==void 0&&C(k)},[k]);const g=m.useMemo(()=>O?l.trim()?r.filter(s=>{var a;return s.label.toLowerCase().includes(l.toLowerCase())||((a=s.description)==null?void 0:a.toLowerCase().includes(l.toLowerCase()))}).slice(0,S):[]:r.slice(0,S),[l,r,O,S]);f.useEffect(()=>{g.length>0&&l.trim()?d(!0):l.trim()||d(!1)},[g,l]);const Be=Oe(s=>{c&&s.trim()&&c(s)},z),Pe=s=>{const a=s.target.value;C(a),x(-1),Be(a),v&&v(s)},_=()=>{c&&c(l),d(!1)},De=()=>{var a;C(""),d(!1),x(-1),v&&v({target:{value:""}}),(a=U.current)==null||a.focus()},G=s=>{C(s.value),d(!1),x(-1),n&&n(s);const a={target:{value:s.value}};v&&v(a)},We=s=>{if(!L||g.length===0){s.key==="Enter"&&_();return}switch(s.key){case"ArrowDown":s.preventDefault(),x(a=>a<g.length-1?a+1:a);break;case"ArrowUp":s.preventDefault(),x(a=>a>0?a-1:a);break;case"Enter":s.preventDefault(),F>=0?G(g[F]):_();break;case"Escape":d(!1),x(-1);break}},$e=s=>{l.trim()&&g.length>0&&d(!0),J&&J(s)},Ae=s=>{N.current&&clearTimeout(N.current),N.current=setTimeout(()=>{d(!1),x(-1),N.current=null},150),Q&&Q(s)};f.useEffect(()=>{const s=a=>{H.current&&!H.current.contains(a.target)&&d(!1)};if(L)return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[L]),f.useEffect(()=>()=>{N.current&&clearTimeout(N.current)},[]);const ze={sm:"px-2 py-1 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},E={sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"};return e.jsxs("div",{className:"space-y-1",children:[p&&e.jsx("label",{htmlFor:I,className:h("block text-sm font-medium",t?"text-red-700":"text-gray-700"),children:p}),e.jsxs("div",{className:"relative",ref:H,children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e.jsx("svg",{className:h(E[o],"text-gray-400"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("input",{ref:Te||U,id:I,type:"text",value:l,onChange:Pe,onKeyDown:We,onFocus:$e,onBlur:Ae,className:h("w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pl-10",ze[o],i&&l||w&&!u?"pr-20":i||w?"pr-10":"pr-3",t?"border-red-500 focus:border-red-500 focus:ring-red-500":"border-gray-300",Re),...Me}),e.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center",children:[i&&l&&e.jsx("button",{type:"button",onClick:De,"aria-label":"Clear search",className:"p-1 text-gray-400 hover:text-gray-600 transition-colors",children:e.jsx("svg",{className:h(E[o]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),w&&e.jsx("button",{type:"button",onClick:_,disabled:u,"aria-label":u?"Searching...":"Search",className:h("p-1 mr-2 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50",u&&"cursor-not-allowed"),children:u?e.jsxs("svg",{className:h(E[o],"animate-spin"),fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",className:"opacity-25"}),e.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",className:"opacity-75"})]}):e.jsx("svg",{className:h(E[o]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})]}),L&&g.length>0&&e.jsx("ul",{className:"absolute top-full left-0 z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto",children:g.map((s,a)=>e.jsx("li",{ref:Fe=>Ve.current[a]=Fe,onClick:()=>G(s),className:h("px-3 py-2 cursor-pointer transition-colors",a===F?"bg-blue-100 text-blue-900":"hover:bg-gray-100"),children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-medium",children:s.label}),s.description&&e.jsx("span",{className:"text-sm text-gray-600",children:s.description}),s.category&&e.jsx("span",{className:"text-xs text-blue-600 uppercase tracking-wide",children:s.category})]})},`${s.value}-${a}`))})]}),e.jsx(He,{message:t,fieldId:I}),e.jsx(_e,{text:t?void 0:b,fieldId:I})]})});j.displayName="SearchInput";try{j.displayName="SearchInput",j.__docgenInfo={description:"",displayName:"SearchInput",props:{label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},suggestions:{defaultValue:{value:"[]"},description:"Search suggestions/autocomplete options",name:"suggestions",required:!1,type:{name:"SearchOption[]"}},onSearch:{defaultValue:null,description:"Called when search is performed",name:"onSearch",required:!1,type:{name:"((query: string) => void)"}},onSuggestionSelect:{defaultValue:null,description:"Called when suggestion is selected",name:"onSuggestionSelect",required:!1,type:{name:"((suggestion: SearchOption) => void)"}},debounceMs:{defaultValue:{value:"300"},description:"Debounce delay for search in milliseconds",name:"debounceMs",required:!1,type:{name:"number"}},showSearchButton:{defaultValue:{value:"true"},description:"Show search button",name:"showSearchButton",required:!1,type:{name:"boolean"}},showClearButton:{defaultValue:{value:"true"},description:"Show clear button",name:"showClearButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading state for search",name:"loading",required:!1,type:{name:"boolean"}},maxSuggestions:{defaultValue:{value:"10"},description:"Maximum number of suggestions to show",name:"maxSuggestions",required:!1,type:{name:"number"}},filterSuggestions:{defaultValue:{value:"true"},description:"Filter suggestions based on input",name:"filterSuggestions",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Input id",name:"id",required:!1,type:{name:"string"}}}}}catch{}const Ze={title:"Form/SearchInput",component:j,parameters:{layout:"centered"},decorators:[p=>e.jsx("div",{className:"w-96 p-8",children:e.jsx(p,{})})],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},showSearchButton:{control:{type:"boolean"}},showClearButton:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},filterSuggestions:{control:{type:"boolean"}}}},y=[{value:"react",label:"React",description:"JavaScript library for building user interfaces",category:"Framework"},{value:"vue",label:"Vue.js",description:"Progressive JavaScript framework",category:"Framework"},{value:"angular",label:"Angular",description:"Platform for building mobile and desktop apps",category:"Framework"},{value:"typescript",label:"TypeScript",description:"Typed superset of JavaScript",category:"Language"},{value:"javascript",label:"JavaScript",description:"High-level programming language",category:"Language"},{value:"html",label:"HTML",description:"Markup language for web pages",category:"Markup"},{value:"css",label:"CSS",description:"Style sheet language",category:"Styling"}],R={args:{placeholder:"Search..."}},q={args:{label:"Search Technologies",placeholder:"Enter technology name",id:"tech-search"}},M={args:{label:"Search with Autocomplete",placeholder:"Type to see suggestions",suggestions:y,id:"suggestions"}},T={args:{label:"Minimal Search",placeholder:"No buttons, just search",showSearchButton:!1,showClearButton:!1,suggestions:y.slice(0,3),id:"minimal"}},V={args:{label:"Loading Search",placeholder:"Search is loading...",loading:!0,defaultValue:"searching...",id:"loading"}},B={args:{label:"Search with Error",placeholder:"This search has an error",error:"Search service is currently unavailable",id:"error"}},P={args:{size:"sm",label:"Small Search",placeholder:"Compact search",suggestions:y.slice(0,3),id:"small"}},D={args:{size:"lg",label:"Large Search",placeholder:"Big search input",suggestions:y.slice(0,3),id:"large"}},W={args:{label:"Fast Debounce (100ms)",placeholder:"Quick search response",debounceMs:100,suggestions:y,helperText:"Search triggers quickly after typing",id:"fast"}},$={render:p=>{const[t,b]=f.useState([]),[o,r]=f.useState(""),[c,n]=f.useState(!1),z=async i=>{n(!0),setTimeout(()=>{const u=y.filter(S=>S.label.toLowerCase().includes(i.toLowerCase())).map(S=>S.label);b(u),n(!1)},800)},w=i=>{r(i.label)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(j,{label:"Interactive Search",placeholder:"Search technologies...",suggestions:y,onSearch:z,onSuggestionSelect:w,loading:c,id:"interactive"}),e.jsxs("div",{className:"space-y-2",children:[o&&e.jsxs("div",{className:"p-3 bg-blue-50 rounded",children:[e.jsx("p",{className:"text-sm font-medium text-blue-900",children:"Selected:"}),e.jsx("p",{className:"text-blue-700",children:o})]}),t.length>0&&e.jsxs("div",{className:"p-3 bg-green-50 rounded",children:[e.jsx("p",{className:"text-sm font-medium text-green-900",children:"Search Results:"}),e.jsx("ul",{className:"mt-1 text-green-700 text-sm",children:t.map((i,u)=>e.jsxs("li",{children:["• ",i]},u))})]})]})]})}},A={render:()=>{const p=[{value:"iphone-14",label:"iPhone 14",description:"$799 - Latest Apple smartphone",category:"Electronics"},{value:"macbook-pro",label:"MacBook Pro",description:"$1299 - Professional laptop",category:"Electronics"},{value:"nike-shoes",label:"Nike Air Max",description:"$120 - Running shoes",category:"Fashion"},{value:"coffee-mug",label:"Coffee Mug",description:"$15 - Ceramic mug",category:"Home"},{value:"wireless-headphones",label:"Wireless Headphones",description:"$199 - Noise cancelling",category:"Electronics"}],[t,b]=f.useState([]),o=r=>{const c=t.find(n=>n.value===r.value);b(c?t.map(n=>n.value===r.value?{...n,quantity:n.quantity+1}:n):[...t,{...r,quantity:1}])};return e.jsxs("div",{className:"space-y-6",children:[e.jsx(j,{label:"Product Search",placeholder:"Search for products...",suggestions:p,onSuggestionSelect:o,helperText:"Select products to add to cart",id:"product-search"}),t.length>0&&e.jsxs("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Shopping Cart"}),e.jsx("div",{className:"space-y-2",children:t.map((r,c)=>e.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-200 last:border-0",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:r.label}),e.jsx("p",{className:"text-sm text-gray-600",children:r.description})]}),e.jsxs("span",{className:"text-sm font-medium",children:["Qty: ",r.quantity]})]},c))}),e.jsx("button",{onClick:()=>b([]),className:"mt-3 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors",children:"Clear Cart"})]})]})}};var X,Y,Z;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  }
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,ae;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Search Technologies',
    placeholder: 'Enter technology name',
    id: 'tech-search'
  }
}`,...(ae=(se=q.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,re,ne;M.parameters={...M.parameters,docs:{...(te=M.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Search with Autocomplete',
    placeholder: 'Type to see suggestions',
    suggestions: sampleSuggestions,
    id: 'suggestions'
  }
}`,...(ne=(re=M.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,oe,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Minimal Search',
    placeholder: 'No buttons, just search',
    showSearchButton: false,
    showClearButton: false,
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'minimal'
  }
}`,...(ce=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,ue,de;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Loading Search',
    placeholder: 'Search is loading...',
    loading: true,
    defaultValue: 'searching...',
    id: 'loading'
  }
}`,...(de=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,ge;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Search with Error',
    placeholder: 'This search has an error',
    error: 'Search service is currently unavailable',
    id: 'error'
  }
}`,...(ge=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,fe,be;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Search',
    placeholder: 'Compact search',
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'small'
  }
}`,...(be=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Se,xe,ye;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Search',
    placeholder: 'Big search input',
    suggestions: sampleSuggestions.slice(0, 3),
    id: 'large'
  }
}`,...(ye=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,Ne,je;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'Fast Debounce (100ms)',
    placeholder: 'Quick search response',
    debounceMs: 100,
    suggestions: sampleSuggestions,
    helperText: 'Search triggers quickly after typing',
    id: 'fast'
  }
}`,...(je=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var we,ke,Ce;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ce=(ke=$.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Le,Ie,Ee;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ee=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};const es=["Default","WithLabel","WithSuggestions","WithoutButtons","LoadingState","WithError","Small","Large","CustomDebounce","Interactive","ProductSearch"];export{W as CustomDebounce,R as Default,$ as Interactive,D as Large,V as LoadingState,A as ProductSearch,P as Small,B as WithError,q as WithLabel,M as WithSuggestions,T as WithoutButtons,es as __namedExportsOrder,Ze as default};
