import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as d}from"./index-BwDkhjyp.js";import{c as b}from"./cn-BaF2GUMg.js";import{L as $}from"./Icon-DitzTbaY.js";import"./_commonjsHelpers-BosuxZz1.js";const A=d.createContext(null),J={left:{container:"inset-y-0 left-0",translate:"translate-x-0",translateClosed:"-translate-x-full",width:!0},right:{container:"inset-y-0 right-0",translate:"translate-x-0",translateClosed:"translate-x-full",width:!0},top:{container:"inset-x-0 top-0",translate:"translate-y-0",translateClosed:"-translate-y-full",width:!1},bottom:{container:"inset-x-0 bottom-0",translate:"translate-y-0",translateClosed:"translate-y-full",width:!1}},U={sm:{width:"w-64",height:"h-48"},md:{width:"w-80",height:"h-64"},lg:{width:"w-96",height:"h-80"},xl:{width:"w-[28rem]",height:"h-96"}},f=({isOpen:t,onClose:a,side:s="right",size:l="md",closeOnOverlayClick:m=!0,closeOnEscape:N=!0,showCloseButton:L=!0,children:V,className:B})=>{const i=J[s],v=U[l];if(d.useEffect(()=>{if(!N||!t)return;const o=P=>{P.key==="Escape"&&a()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[N,t,a]),d.useEffect(()=>{if(t)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[t]),!t)return null;const W=o=>{m&&o.target===o.currentTarget&&a()};return e.jsx(A.Provider,{value:{isOpen:t,onClose:a,side:s},children:e.jsxs("div",{className:"fixed inset-0 z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity",onClick:W,"aria-hidden":"true"}),e.jsxs("div",{className:b("fixed bg-white shadow-xl transform transition-transform duration-300 ease-in-out",i.container,i.width?v.width:v.height,i.width?"h-full":"w-full",t?i.translate:i.translateClosed,B),role:"dialog","aria-modal":"true",children:[L&&e.jsx("button",{className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10",onClick:a,"aria-label":"Close drawer",children:e.jsx($,{size:20,className:"text-gray-400"})}),e.jsx("div",{className:"h-full overflow-y-auto",children:V})]})]})})},r=({className:t,children:a,...s})=>e.jsx("div",{className:b("px-6 py-4 border-b border-gray-200 bg-gray-50",t),...s,children:a}),n=({className:t,children:a,...s})=>e.jsx("div",{className:b("px-6 py-4 flex-1",t),...s,children:a}),y=({className:t,children:a,...s})=>e.jsx("div",{className:b("px-6 py-4 border-t border-gray-200 bg-gray-50",t),...s,children:a});try{f.displayName="Drawer",f.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},side:{defaultValue:{value:"right"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="DrawerHeader",r.__docgenInfo={description:"",displayName:"DrawerHeader",props:{}}}catch{}try{n.displayName="DrawerContent",n.__docgenInfo={description:"",displayName:"DrawerContent",props:{}}}catch{}try{y.displayName="DrawerFooter",y.__docgenInfo={description:"",displayName:"DrawerFooter",props:{}}}catch{}const M={title:"Surface/Drawer",component:f,parameters:{layout:"centered",docs:{description:{component:"A sliding panel component that appears from screen edges. Perfect for navigation menus, filters, and mobile-friendly interfaces."}}}},c=({side:t="right",size:a="md",children:s})=>{const[l,m]=d.useState(!1);return e.jsxs("div",{className:"min-h-[400px] flex items-center justify-center",children:[e.jsx("button",{onClick:()=>m(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Open Drawer"}),e.jsx(f,{isOpen:l,onClose:()=>m(!1),side:t,size:a,children:s})]})},u={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>e.jsxs(c,{side:"right",size:"md",children:[e.jsx(r,{children:e.jsx("h2",{className:"text-lg font-semibold",children:"Default Drawer"})}),e.jsxs(n,{children:[e.jsx("p",{className:"text-gray-600 mb-4",children:"This is the default drawer sliding from the right side."}),e.jsx("p",{className:"text-sm text-gray-500",children:"Click outside or press Escape to close."})]})]})},x={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>e.jsxs(c,{side:"left",size:"sm",children:[e.jsx(r,{children:e.jsx("h2",{className:"text-lg font-semibold",children:"Left Navigation"})}),e.jsx(n,{children:e.jsxs("nav",{className:"space-y-1",children:[e.jsx("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Dashboard"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Products"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Orders"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Customers"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded",children:"Settings"})]})})]})},p={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>e.jsxs(c,{side:"bottom",size:"md",children:[e.jsx(r,{children:e.jsx("h2",{className:"text-lg font-semibold",children:"Share Options"})}),e.jsx(n,{children:e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-center",children:[e.jsxs("button",{className:"p-4 hover:bg-gray-100 rounded",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold",children:"T"}),e.jsx("span",{className:"text-sm",children:"Twitter"})]}),e.jsxs("button",{className:"p-4 hover:bg-gray-100 rounded",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold",children:"F"}),e.jsx("span",{className:"text-sm",children:"Facebook"})]}),e.jsxs("button",{className:"p-4 hover:bg-gray-100 rounded",children:[e.jsx("div",{className:"w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold",children:"W"}),e.jsx("span",{className:"text-sm",children:"WhatsApp"})]})]})})]})},h={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>e.jsxs(c,{side:"top",size:"md",children:[e.jsx(r,{children:e.jsx("h2",{className:"text-lg font-semibold",children:"Notifications"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-blue-50 rounded",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium",children:"New message received"}),e.jsx("p",{className:"text-xs text-gray-600",children:"John sent you a message about the project"}),e.jsx("p",{className:"text-xs text-gray-400",children:"2 minutes ago"})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-green-50 rounded",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium",children:"Task completed"}),e.jsx("p",{className:"text-xs text-gray-600",children:"Your export has finished processing"}),e.jsx("p",{className:"text-xs text-gray-400",children:"5 minutes ago"})]})]})]})})]})},g={args:{isOpen:!1,onClose:()=>{},children:null},render:()=>{const[t]=d.useState([{id:1,name:"Wireless Headphones",price:99.99,quantity:1,image:""},{id:2,name:"Smartphone Case",price:24.99,quantity:2,image:""},{id:3,name:"USB Cable",price:12.99,quantity:1,image:""}]),a=t.reduce((s,l)=>s+l.price*l.quantity,0);return e.jsxs(c,{side:"right",size:"md",children:[e.jsx(r,{children:e.jsxs("h2",{className:"text-lg font-semibold",children:["Shopping Cart (",t.length,")"]})}),e.jsx(n,{children:e.jsx("div",{className:"space-y-4",children:t.map(s=>e.jsxs("div",{className:"flex items-center space-x-3 border-b pb-3",children:[e.jsx("div",{className:"w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl",children:s.image}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium text-sm",children:s.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["$",s.price]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{className:"w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm",children:"-"}),e.jsx("span",{className:"text-sm font-medium",children:s.quantity}),e.jsx("button",{className:"w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm",children:"+"})]})]},s.id))})}),e.jsx(y,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-lg font-semibold",children:[e.jsx("span",{children:"Total:"}),e.jsxs("span",{children:["$",a.toFixed(2)]})]}),e.jsx("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700",children:"Checkout"})]})})]})}};var w,j,D;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => <DrawerDemo side="right" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Default Drawer</h2>
      </DrawerHeader>
      <DrawerContent>
        <p className="text-gray-600 mb-4">
          This is the default drawer sliding from the right side.
        </p>
        <p className="text-sm text-gray-500">
          Click outside or press Escape to close.
        </p>
      </DrawerContent>
    </DrawerDemo>
}`,...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var C,_,k;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => <DrawerDemo side="left" size="sm">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Left Navigation</h2>
      </DrawerHeader>
      <DrawerContent>
        <nav className="space-y-1">
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Products
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Orders
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Customers
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Settings
          </a>
        </nav>
      </DrawerContent>
    </DrawerDemo>
}`,...(k=(_=x.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var S,O,q;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => <DrawerDemo side="bottom" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Share Options</h2>
      </DrawerHeader>
      <DrawerContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              T
            </div>
            <span className="text-sm">Twitter</span>
          </button>
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              F
            </div>
            <span className="text-sm">Facebook</span>
          </button>
          <button className="p-4 hover:bg-gray-100 rounded">
            <div className="w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold">
              W
            </div>
            <span className="text-sm">WhatsApp</span>
          </button>
        </div>
      </DrawerContent>
    </DrawerDemo>
}`,...(q=(O=p.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var z,H,T;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => <DrawerDemo side="top" size="md">
      <DrawerHeader>
        <h2 className="text-lg font-semibold">Notifications</h2>
      </DrawerHeader>
      <DrawerContent>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">New message received</p>
              <p className="text-xs text-gray-600">John sent you a message about the project</p>
              <p className="text-xs text-gray-400">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Task completed</p>
              <p className="text-xs text-gray-600">Your export has finished processing</p>
              <p className="text-xs text-gray-400">5 minutes ago</p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </DrawerDemo>
}`,...(T=(H=h.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var E,F,I;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    children: null
  },
  render: () => {
    const [cartItems] = useState([{
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      quantity: 1,
      image: ''
    }, {
      id: 2,
      name: 'Smartphone Case',
      price: 24.99,
      quantity: 2,
      image: ''
    }, {
      id: 3,
      name: 'USB Cable',
      price: 12.99,
      quantity: 1,
      image: ''
    }]);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return <DrawerDemo side="right" size="md">
        <DrawerHeader>
          <h2 className="text-lg font-semibold">Shopping Cart ({cartItems.length})</h2>
        </DrawerHeader>
        
        <DrawerContent>
          <div className="space-y-4">
            {cartItems.map(item => <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl">
                  {item.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-sm text-gray-600">\${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                    +
                  </button>
                </div>
              </div>)}
          </div>
        </DrawerContent>
        
        <DrawerFooter>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>\${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </DrawerFooter>
      </DrawerDemo>;
  }
}`,...(I=(F=g.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const Q=["Default","LeftSide","BottomSheet","TopDrawer","ShoppingCart"];export{p as BottomSheet,u as Default,x as LeftSide,g as ShoppingCart,h as TopDrawer,Q as __namedExportsOrder,M as default};
