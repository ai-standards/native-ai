import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as t}from"./index-BwDkhjyp.js";import{c}from"./cn-BaF2GUMg.js";import{L as J}from"./Icon-DitzTbaY.js";import"./_commonjsHelpers-BosuxZz1.js";const X=t.createContext(null),G={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl",full:"max-w-full m-4"},K={center:"items-center justify-center",top:"items-start justify-center pt-16"},r=({isOpen:o,onClose:n,size:s="md",position:q="center",closeOnOverlayClick:V=!0,closeOnEscape:f=!0,showCloseButton:L=!0,children:W,className:Y})=>{if(t.useEffect(()=>{if(!f||!o)return;const i=R=>{R.key==="Escape"&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[f,o,n]),t.useEffect(()=>{if(o)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[o]),t.useEffect(()=>{if(o){const i=document.querySelector('[role="dialog"]');i&&i.focus()}},[o]),!o)return null;const y=i=>{V&&i.target===i.currentTarget&&n()};return e.jsx(X.Provider,{value:{isOpen:o,onClose:n},children:e.jsxs("div",{className:"fixed inset-0 z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity",onClick:y,"aria-hidden":"true"}),e.jsx("div",{className:c("fixed inset-0 flex",K[q]),onClick:y,children:e.jsxs("div",{className:c("relative bg-white rounded-lg shadow-xl transform transition-all","w-full mx-4",G[s],Y),role:"dialog","aria-modal":"true",tabIndex:-1,children:[L&&e.jsx("button",{className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:n,"aria-label":"Close modal",children:e.jsx(J,{size:20,className:"text-gray-400"})}),W]})})]})})},l=({className:o,children:n,...s})=>e.jsx("div",{className:c("px-6 py-4 border-b border-gray-200",o),...s,children:n}),a=({className:o,children:n,...s})=>e.jsx("div",{className:c("px-6 py-4 flex-1 overflow-y-auto",o),...s,children:n}),d=({className:o,children:n,...s})=>e.jsx("div",{className:c("px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3",o),...s,children:n});try{r.displayName="Modal",r.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'}]}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="ModalHeader",l.__docgenInfo={description:"",displayName:"ModalHeader",props:{}}}catch{}try{a.displayName="ModalContent",a.__docgenInfo={description:"",displayName:"ModalContent",props:{}}}catch{}try{d.displayName="ModalFooter",d.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const oe={title:"Overlay/Modal",component:r,parameters:{layout:"centered",docs:{description:{component:"A modal dialog component with backdrop, focus management, and keyboard navigation. Perfect for confirmations, forms, and detailed content."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Whether the modal is open"},size:{control:"select",options:["sm","md","lg","xl","full"],description:"Size of the modal"},position:{control:"select",options:["center","top"],description:"Vertical positioning of the modal"},closeOnOverlayClick:{control:"boolean",description:"Whether clicking the backdrop closes the modal"},closeOnEscape:{control:"boolean",description:"Whether pressing Escape closes the modal"},showCloseButton:{control:"boolean",description:"Whether to show the close button"},onClose:{action:"closed",description:"Called when the modal should close"},children:{control:!1,description:"Modal content"}}},u={render:()=>{const[o,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Open Modal"}),e.jsxs(r,{isOpen:o,onClose:()=>n(!1),children:[e.jsx(l,{children:e.jsx("h2",{className:"text-xl font-semibold",children:"Modal Title"})}),e.jsxs(a,{children:[e.jsx("p",{children:"This is a basic modal with header and content sections."}),e.jsx("p",{children:"Click the backdrop, press Escape, or use the close button to dismiss it."})]}),e.jsxs(d,{children:[e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"}),e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Confirm"})]})]})]})}},p={render:()=>{const[o,n]=t.useState(null);return e.jsx("div",{className:"flex gap-4 flex-wrap",children:["sm","md","lg","xl"].map(s=>e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>n(s),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:[s.toUpperCase()," Modal"]}),e.jsxs(r,{isOpen:o===s,onClose:()=>n(null),size:s,children:[e.jsx(l,{children:e.jsxs("h2",{className:"text-xl font-semibold",children:[s.toUpperCase()," Modal"]})}),e.jsxs(a,{children:[e.jsxs("p",{children:["This is a ",s," sized modal."]}),e.jsx("p",{children:"Different sizes help accommodate various content types."})]}),e.jsx(d,{children:e.jsx("button",{onClick:()=>n(null),className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:"Close"})})]})]},s))})}},m={render:()=>{const[o,n]=t.useState(null);return e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:()=>n("center"),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Center Modal"}),e.jsx("button",{onClick:()=>n("top"),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Top Modal"}),e.jsxs(r,{isOpen:o!==null,onClose:()=>n(null),position:o||"center",children:[e.jsx(l,{children:e.jsxs("h2",{className:"text-xl font-semibold",children:[o," Position"]})}),e.jsx(a,{children:e.jsxs("p",{children:["This modal is positioned at the ",o," of the screen."]})}),e.jsx(d,{children:e.jsx("button",{onClick:()=>n(null),className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:"Close"})})]})]})}},b={render:()=>{const[o,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"Delete Item"}),e.jsxs(r,{isOpen:o,onClose:()=>n(!1),size:"sm",children:[e.jsx(l,{children:e.jsx("h2",{className:"text-xl font-semibold text-red-900",children:"Confirm Deletion"})}),e.jsx(a,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"Are you sure you want to delete this item?"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This action cannot be undone. The item will be permanently removed."})]})}),e.jsxs(d,{children:[e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"}),e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"Delete"})]})]})]})},parameters:{docs:{description:{story:"Example of a confirmation dialog for destructive actions."}}}},x={render:()=>{const[o,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Add User"}),e.jsxs(r,{isOpen:o,onClose:()=>n(!1),size:"lg",children:[e.jsx(l,{children:e.jsx("h2",{className:"text-xl font-semibold",children:"Add New User"})}),e.jsx(a,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"First Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"John"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Last Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Doe"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"john.doe@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Role"}),e.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{children:"User"}),e.jsx("option",{children:"Admin"}),e.jsx("option",{children:"Manager"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Bio"}),e.jsx("textarea",{rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Tell us about this user..."})]})]})}),e.jsxs(d,{children:[e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"}),e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Add User"})]})]})]})},parameters:{docs:{description:{story:"Example of a form modal for creating new records."}}}},h={render:()=>{const[o,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Open Modal (No Close Button)"}),e.jsxs(r,{isOpen:o,onClose:()=>n(!1),showCloseButton:!1,children:[e.jsx(l,{children:e.jsx("h2",{className:"text-xl font-semibold",children:"Modal Without Close Button"})}),e.jsxs(a,{children:[e.jsx("p",{children:"This modal doesn't have a close button in the top-right corner."}),e.jsx("p",{children:"You can still close it by clicking the backdrop or pressing Escape."})]}),e.jsx(d,{children:e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Close Modal"})})]})]})}},g={render:()=>{const[o,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700",children:"Open Persistent Modal"}),e.jsxs(r,{isOpen:o,onClose:()=>n(!1),closeOnOverlayClick:!1,closeOnEscape:!1,children:[e.jsx(l,{children:e.jsx("h2",{className:"text-xl font-semibold",children:"Persistent Modal"})}),e.jsx(a,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This modal cannot be closed by clicking the backdrop or pressing Escape."}),e.jsx("p",{children:"You must use the explicit action buttons to close it."}),e.jsx("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:e.jsxs("p",{className:"text-sm text-yellow-800",children:[e.jsx("strong",{children:"Note:"})," Use this pattern carefully, as it can be frustrating for users."]})})]})}),e.jsxs(d,{children:[e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-50",children:"Cancel"}),e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700",children:"Confirm"})]})]})]})},parameters:{docs:{description:{story:"Example of a modal that prevents accidental closure."}}}};var v,C,N;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Open Modal
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">Modal Title</h2>
          </ModalHeader>
          <ModalContent>
            <p>This is a basic modal with header and content sections.</p>
            <p>Click the backdrop, press Escape, or use the close button to dismiss it.</p>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Confirm
            </button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...(N=(C=u.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var j,M,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    return <div className="flex gap-4 flex-wrap">
        {(['sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size}>
            <button onClick={() => setActiveModal(size)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {size.toUpperCase()} Modal
            </button>
            
            <Modal isOpen={activeModal === size} onClose={() => setActiveModal(null)} size={size}>
              <ModalHeader>
                <h2 className="text-xl font-semibold">{size.toUpperCase()} Modal</h2>
              </ModalHeader>
              <ModalContent>
                <p>This is a {size} sized modal.</p>
                <p>Different sizes help accommodate various content types.</p>
              </ModalContent>
              <ModalFooter>
                <button onClick={() => setActiveModal(null)} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                  Close
                </button>
              </ModalFooter>
            </Modal>
          </div>)}
      </div>;
  }
}`,...(w=(M=p.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var k,O,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState<'center' | 'top' | null>(null);
    return <div className="flex gap-4">
        <button onClick={() => setPosition('center')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Center Modal
        </button>
        <button onClick={() => setPosition('top')} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Top Modal
        </button>
        
        <Modal isOpen={position !== null} onClose={() => setPosition(null)} position={position || 'center'}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">{position} Position</h2>
          </ModalHeader>
          <ModalContent>
            <p>This modal is positioned at the {position} of the screen.</p>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setPosition(null)} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}`,...(I=(O=m.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var _,E,F;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Delete Item
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader>
            <h2 className="text-xl font-semibold text-red-900">Confirm Deletion</h2>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-3">
              <p>Are you sure you want to delete this item?</p>
              <p className="text-sm text-gray-600">
                This action cannot be undone. The item will be permanently removed.
              </p>
            </div>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Delete
            </button>
          </ModalFooter>
        </Modal>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a confirmation dialog for destructive actions.'
      }
    }
  }
}`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var S,T,z;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Add User
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalHeader>
            <h2 className="text-xl font-semibold">Add New User</h2>
          </ModalHeader>
          <ModalContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john.doe@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>User</option>
                  <option>Admin</option>
                  <option>Manager</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about this user..." />
              </div>
            </form>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Add User
            </button>
          </ModalFooter>
        </Modal>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a form modal for creating new records.'
      }
    }
  }
}`,...(z=(T=x.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var P,H,A;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Open Modal (No Close Button)
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} showCloseButton={false}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">Modal Without Close Button</h2>
          </ModalHeader>
          <ModalContent>
            <p>This modal doesn't have a close button in the top-right corner.</p>
            <p>You can still close it by clicking the backdrop or pressing Escape.</p>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Close Modal
            </button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...(A=(H=h.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var D,U,B;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
          Open Persistent Modal
        </button>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnOverlayClick={false} closeOnEscape={false}>
          <ModalHeader>
            <h2 className="text-xl font-semibold">Persistent Modal</h2>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-3">
              <p>This modal cannot be closed by clicking the backdrop or pressing Escape.</p>
              <p>You must use the explicit action buttons to close it.</p>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Use this pattern carefully, as it can be frustrating for users.
                </p>
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
              Confirm
            </button>
          </ModalFooter>
        </Modal>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a modal that prevents accidental closure.'
      }
    }
  }
}`,...(B=(U=g.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const se=["Default","Sizes","Positions","ConfirmationDialog","FormModal","NoCloseButton","PreventClose"];export{b as ConfirmationDialog,u as Default,x as FormModal,h as NoCloseButton,m as Positions,g as PreventClose,p as Sizes,se as __namedExportsOrder,oe as default};
