import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as v,r as G}from"./index-BwDkhjyp.js";import{c as b}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const se={info:{container:"bg-white border-blue-200 text-gray-900 shadow-lg",icon:"text-blue-600"},success:{container:"bg-white border-green-200 text-gray-900 shadow-lg",icon:"text-green-600"},warning:{container:"bg-white border-yellow-200 text-gray-900 shadow-lg",icon:"text-yellow-600"},error:{container:"bg-white border-red-200 text-gray-900 shadow-lg",icon:"text-red-600"}},ae={info:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),success:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),warning:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),error:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})},a=({variant:n="info",title:o,duration:t=5e3,closable:r=!0,onClose:s,showIcon:i=!0,icon:l,children:c,className:T,...J})=>{const[K,X]=v.useState(!0),[Z,ee]=v.useState(!1);v.useEffect(()=>{if(t>0){const te=setTimeout(()=>{N()},t);return()=>clearTimeout(te)}},[t]);const N=()=>{ee(!0),setTimeout(()=>{X(!1),s==null||s()},300)};if(!K)return null;const j=se[n],w=l||i&&ae[n];return e.jsxs("div",{className:b("max-w-sm w-full border rounded-lg p-4 transition-all duration-300 ease-in-out",j.container,Z&&"translate-x-full opacity-0",T),role:"alert","aria-live":"assertive","aria-atomic":"true",...J,children:[e.jsxs("div",{className:"flex",children:[w&&e.jsx("div",{className:b("flex-shrink-0",j.icon),children:w}),e.jsxs("div",{className:b("flex-1",w&&"ml-3"),children:[o&&e.jsx("div",{className:"text-sm font-medium mb-1",children:o}),c&&e.jsx("div",{className:"text-sm text-gray-600",children:c})]}),r&&e.jsx("div",{className:"ml-auto pl-3",children:e.jsx("button",{type:"button",className:"inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded",onClick:N,"aria-label":"Close toast",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})})]}),t>0&&e.jsx("div",{className:"mt-3 bg-gray-200 rounded-full h-1 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gray-400 rounded-full transition-all linear",style:{animation:`toast-progress ${t}ms linear`,transformOrigin:"left"}})})]})},ne={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 transform -translate-x-1/2","bottom-center":"bottom-4 left-1/2 transform -translate-x-1/2"},y=({position:n="top-right",max:o=5,children:t,className:r,...s})=>e.jsx("div",{className:b("fixed z-50 flex flex-col space-y-2 pointer-events-none",ne[n],r),...s,children:e.jsx("div",{className:"flex flex-col space-y-2 pointer-events-auto",children:v.Children.toArray(t).slice(0,o)})});try{a.displayName="Toast",a.__docgenInfo={description:"",displayName:"Toast",props:{variant:{defaultValue:{value:"info"},description:"Toast variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},title:{defaultValue:null,description:"Toast title",name:"title",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"5000"},description:"Auto dismiss duration in milliseconds (0 to disable)",name:"duration",required:!1,type:{name:"number"}},closable:{defaultValue:{value:"true"},description:"Whether to show close button",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when toast is closed",name:"onClose",required:!1,type:{name:"(() => void)"}},showIcon:{defaultValue:{value:"true"},description:"Show icon",name:"showIcon",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Custom icon",name:"icon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Toast content",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{y.displayName="ToastContainer",y.__docgenInfo={description:"",displayName:"ToastContainer",props:{position:{defaultValue:{value:"top-right"},description:"Position of toast container",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-center"'},{value:'"bottom-center"'}]}},max:{defaultValue:{value:"5"},description:"Maximum number of toasts to show",name:"max",required:!1,type:{name:"number"}}}}}catch{}const ce={title:"Feedback/Toast",component:a,parameters:{layout:"centered",docs:{description:{component:"A temporary, non-blocking notification component for transient messages or status updates."}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"]}}},d={args:{title:"Notification",children:"This is a basic toast message."}},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"info",title:"Information",children:"This is an informational toast."}),e.jsx(a,{variant:"success",title:"Success",children:"Operation completed successfully."}),e.jsx(a,{variant:"warning",title:"Warning",children:"Please review your changes."}),e.jsx(a,{variant:"error",title:"Error",children:"An error occurred while processing."})]})},m={args:{title:"Persistent Toast",children:"This toast will not auto-dismiss.",duration:0}},p={args:{title:"System Message",children:"This toast cannot be manually closed.",closable:!1,duration:0}},g={args:{title:"Quick Toast",children:"This toast disappears quickly (2 seconds).",duration:2e3}},h={render:()=>{const[n,o]=G.useState([]),t=(s,i,l)=>{const c=Date.now();o(T=>[...T,{id:c,variant:s,title:i,message:l}])},r=s=>{o(i=>i.filter(l=>l.id!==s))};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:()=>t("info","Information","This is an info toast"),className:"px-3 py-2 bg-blue-600 text-white rounded text-sm",children:"Add Info Toast"}),e.jsx("button",{onClick:()=>t("success","Success","Operation completed!"),className:"px-3 py-2 bg-green-600 text-white rounded text-sm",children:"Add Success Toast"}),e.jsx("button",{onClick:()=>t("warning","Warning","Please be careful"),className:"px-3 py-2 bg-yellow-600 text-white rounded text-sm",children:"Add Warning Toast"}),e.jsx("button",{onClick:()=>t("error","Error","Something went wrong"),className:"px-3 py-2 bg-red-600 text-white rounded text-sm",children:"Add Error Toast"})]}),e.jsx(y,{position:"top-right",children:n.map(s=>e.jsx(a,{variant:s.variant,title:s.title,onClose:()=>r(s.id),children:s.message},s.id))})]})}},f={render:()=>{const[n,o]=G.useState("top-right");return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex gap-2 flex-wrap",children:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"].map(t=>e.jsx("button",{onClick:()=>o(t),className:`px-3 py-2 rounded text-sm ${n===t?"bg-blue-600 text-white":"bg-gray-200 text-gray-700"}`,children:t},t))}),e.jsx(y,{position:n,children:e.jsxs(a,{variant:"success",title:"Toast Position",children:["This toast is positioned at ",n]})})]})}},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"success",title:"Upload Complete",children:"Your file has been uploaded successfully."}),e.jsx(a,{variant:"error",title:"Connection Failed",duration:0,children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"Unable to connect to server."}),e.jsx("button",{className:"text-sm bg-red-600 text-white px-3 py-1 rounded",children:"Retry"})]})}),e.jsx(a,{variant:"info",children:"New message received"}),e.jsx(a,{variant:"warning",title:"Storage Almost Full",closable:!1,children:"You're using 90% of your storage space."})]})};var C,S,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Notification',
    children: 'This is a basic toast message.'
  }
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var P,A,_;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Toast variant="info" title="Information">
        This is an informational toast.
      </Toast>
      
      <Toast variant="success" title="Success">
        Operation completed successfully.
      </Toast>
      
      <Toast variant="warning" title="Warning">
        Please review your changes.
      </Toast>
      
      <Toast variant="error" title="Error">
        An error occurred while processing.
      </Toast>
    </div>
}`,...(_=(A=u.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var R,I,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Persistent Toast',
    children: 'This toast will not auto-dismiss.',
    duration: 0
  }
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var V,q,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'System Message',
    children: 'This toast cannot be manually closed.',
    closable: false,
    duration: 0
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var M,L,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Quick Toast',
    children: 'This toast disappears quickly (2 seconds).',
    duration: 2000
  }
}`,...(W=(L=g.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var B,F,O;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: number;
      variant: 'info' | 'success' | 'warning' | 'error';
      title: string;
      message: string;
    }>>([]);
    const addToast = (variant: 'info' | 'success' | 'warning' | 'error', title: string, message: string) => {
      const id = Date.now();
      setToasts(prev => [...prev, {
        id,
        variant,
        title,
        message
      }]);
    };
    const removeToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };
    return <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => addToast('info', 'Information', 'This is an info toast')} className="px-3 py-2 bg-blue-600 text-white rounded text-sm">
            Add Info Toast
          </button>
          <button onClick={() => addToast('success', 'Success', 'Operation completed!')} className="px-3 py-2 bg-green-600 text-white rounded text-sm">
            Add Success Toast
          </button>
          <button onClick={() => addToast('warning', 'Warning', 'Please be careful')} className="px-3 py-2 bg-yellow-600 text-white rounded text-sm">
            Add Warning Toast
          </button>
          <button onClick={() => addToast('error', 'Error', 'Something went wrong')} className="px-3 py-2 bg-red-600 text-white rounded text-sm">
            Add Error Toast
          </button>
        </div>

        <ToastContainer position="top-right">
          {toasts.map(toast => <Toast key={toast.id} variant={toast.variant} title={toast.title} onClose={() => removeToast(toast.id)}>
              {toast.message}
            </Toast>)}
        </ToastContainer>
      </div>;
  }
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var D,U,Y;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [activePosition, setActivePosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');
    return <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {(['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'] as const).map(position => <button key={position} onClick={() => setActivePosition(position)} className={\`px-3 py-2 rounded text-sm \${activePosition === position ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}\`}>
              {position}
            </button>)}
        </div>

        <ToastContainer position={activePosition}>
          <Toast variant="success" title="Toast Position">
            This toast is positioned at {activePosition}
          </Toast>
        </ToastContainer>
      </div>;
  }
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,H,Q;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {/* File upload success */}
      <Toast variant="success" title="Upload Complete">
        Your file has been uploaded successfully.
      </Toast>

      {/* Error with action */}
      <Toast variant="error" title="Connection Failed" duration={0}>
        <div>
          <p className="mb-2">Unable to connect to server.</p>
          <button className="text-sm bg-red-600 text-white px-3 py-1 rounded">
            Retry
          </button>
        </div>
      </Toast>

      {/* Simple info */}
      <Toast variant="info">
        New message received
      </Toast>

      {/* Warning with progress */}
      <Toast variant="warning" title="Storage Almost Full" closable={false}>
        You're using 90% of your storage space.
      </Toast>
    </div>
}`,...(Q=(H=x.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};const de=["Basic","Variants","Persistent","NotClosable","CustomDuration","Interactive","Positions","Examples"];export{d as Basic,g as CustomDuration,x as Examples,h as Interactive,p as NotClosable,m as Persistent,f as Positions,u as Variants,de as __namedExportsOrder,ce as default};
