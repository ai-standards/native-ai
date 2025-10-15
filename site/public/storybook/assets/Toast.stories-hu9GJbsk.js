import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as g,r as G}from"./index-DHZDe_v1.js";import{c as x}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const te={info:{container:"bg-white border-blue-200 text-gray-900 shadow-lg",icon:"text-blue-600"},success:{container:"bg-white border-green-200 text-gray-900 shadow-lg",icon:"text-green-600"},warning:{container:"bg-white border-yellow-200 text-gray-900 shadow-lg",icon:"text-yellow-600"},error:{container:"bg-white border-red-200 text-gray-900 shadow-lg",icon:"text-red-600"}},ae={info:e.jsxDEV("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:45,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:44,columnNumber:5},void 0),success:e.jsxDEV("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:50,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:49,columnNumber:5},void 0),warning:e.jsxDEV("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:55,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:54,columnNumber:5},void 0),error:e.jsxDEV("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:60,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:59,columnNumber:5},void 0)},a=({variant:o="info",title:n,duration:s=5e3,closable:i=!0,onClose:t,showIcon:r=!0,icon:c,children:l,className:h,...J})=>{const[K,X]=g.useState(!0),[Z,ee]=g.useState(!1);g.useEffect(()=>{if(s>0){const se=setTimeout(()=>{T()},s);return()=>clearTimeout(se)}},[s]);const T=()=>{ee(!0),setTimeout(()=>{X(!1),t==null||t()},300)};if(!K)return null;const D=te[o],y=c||r&&ae[o];return e.jsxDEV("div",{className:x("max-w-sm w-full border rounded-lg p-4 transition-all duration-300 ease-in-out",D.container,Z&&"translate-x-full opacity-0",h),role:"alert","aria-live":"assertive","aria-atomic":"true",...J,children:[e.jsxDEV("div",{className:"flex",children:[y&&e.jsxDEV("div",{className:x("flex-shrink-0",D.icon),children:y},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:119,columnNumber:11},void 0),e.jsxDEV("div",{className:x("flex-1",y&&"ml-3"),children:[n&&e.jsxDEV("div",{className:"text-sm font-medium mb-1",children:n},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:127,columnNumber:13},void 0),l&&e.jsxDEV("div",{className:"text-sm text-gray-600",children:l},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:132,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:125,columnNumber:9},void 0),i&&e.jsxDEV("div",{className:"ml-auto pl-3",children:e.jsxDEV("button",{type:"button",className:"inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded",onClick:T,"aria-label":"Close toast",children:e.jsxDEV("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:148,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:147,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:141,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:140,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:116,columnNumber:7},void 0),s>0&&e.jsxDEV("div",{className:"mt-3 bg-gray-200 rounded-full h-1 overflow-hidden",children:e.jsxDEV("div",{className:"h-full bg-gray-400 rounded-full transition-all linear",style:{animation:`toast-progress ${s}ms linear`,transformOrigin:"left"}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:158,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:157,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:104,columnNumber:5},void 0)},oe={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 transform -translate-x-1/2","bottom-center":"bottom-4 left-1/2 transform -translate-x-1/2"},k=({position:o="top-right",max:n=5,children:s,className:i,...t})=>e.jsxDEV("div",{className:x("fixed z-50 flex flex-col space-y-2 pointer-events-none",oe[o],i),...t,children:e.jsxDEV("div",{className:"flex flex-col space-y-2 pointer-events-auto",children:g.Children.toArray(s).slice(0,n)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:204,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.tsx",lineNumber:196,columnNumber:5},void 0);try{a.displayName="Toast",a.__docgenInfo={description:"",displayName:"Toast",props:{variant:{defaultValue:{value:"info"},description:"Toast variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},title:{defaultValue:null,description:"Toast title",name:"title",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"5000"},description:"Auto dismiss duration in milliseconds (0 to disable)",name:"duration",required:!1,type:{name:"number"}},closable:{defaultValue:{value:"true"},description:"Whether to show close button",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when toast is closed",name:"onClose",required:!1,type:{name:"(() => void)"}},showIcon:{defaultValue:{value:"true"},description:"Show icon",name:"showIcon",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Custom icon",name:"icon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Toast content",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{k.displayName="ToastContainer",k.__docgenInfo={description:"",displayName:"ToastContainer",props:{position:{defaultValue:{value:"top-right"},description:"Position of toast container",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-center"'},{value:'"bottom-center"'}]}},max:{defaultValue:{value:"5"},description:"Maximum number of toasts to show",name:"max",required:!1,type:{name:"number"}}}}}catch{}const le={title:"Feedback/Toast",component:a,parameters:{layout:"centered",docs:{description:{component:"A temporary, non-blocking notification component for transient messages or status updates."}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"]}}},d={args:{title:"Notification",children:"This is a basic toast message."}},m={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(a,{variant:"info",title:"Information",children:"This is an informational toast."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:40,columnNumber:7},void 0),e.jsxDEV(a,{variant:"success",title:"Success",children:"Operation completed successfully."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:44,columnNumber:7},void 0),e.jsxDEV(a,{variant:"warning",title:"Warning",children:"Please review your changes."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:48,columnNumber:7},void 0),e.jsxDEV(a,{variant:"error",title:"Error",children:"An error occurred while processing."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:52,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:39,columnNumber:5},void 0)},u={args:{title:"Persistent Toast",children:"This toast will not auto-dismiss.",duration:0}},p={args:{title:"System Message",children:"This toast cannot be manually closed.",closable:!1,duration:0}},f={args:{title:"Quick Toast",children:"This toast disappears quickly (2 seconds).",duration:2e3}},b={render:()=>{const[o,n]=G.useState([]),s=(t,r,c)=>{const l=Date.now();n(h=>[...h,{id:l,variant:t,title:r,message:c}])},i=t=>{n(r=>r.filter(c=>c.id!==t))};return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"flex gap-2 flex-wrap",children:[e.jsxDEV("button",{onClick:()=>s("info","Information","This is an info toast"),className:"px-3 py-2 bg-blue-600 text-white rounded text-sm",children:"Add Info Toast"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:104,columnNumber:11},void 0),e.jsxDEV("button",{onClick:()=>s("success","Success","Operation completed!"),className:"px-3 py-2 bg-green-600 text-white rounded text-sm",children:"Add Success Toast"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:110,columnNumber:11},void 0),e.jsxDEV("button",{onClick:()=>s("warning","Warning","Please be careful"),className:"px-3 py-2 bg-yellow-600 text-white rounded text-sm",children:"Add Warning Toast"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:116,columnNumber:11},void 0),e.jsxDEV("button",{onClick:()=>s("error","Error","Something went wrong"),className:"px-3 py-2 bg-red-600 text-white rounded text-sm",children:"Add Error Toast"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:122,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:103,columnNumber:9},void 0),e.jsxDEV(k,{position:"top-right",children:o.map(t=>e.jsxDEV(a,{variant:t.variant,title:t.title,onClose:()=>i(t.id),children:t.message},t.id,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:132,columnNumber:13},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:130,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:102,columnNumber:7},void 0)}},v={render:()=>{const[o,n]=G.useState("top-right");return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{className:"flex gap-2 flex-wrap",children:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"].map(s=>e.jsxDEV("button",{onClick:()=>n(s),className:`px-3 py-2 rounded text-sm ${o===s?"bg-blue-600 text-white":"bg-gray-200 text-gray-700"}`,children:s},s,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:156,columnNumber:13},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:154,columnNumber:9},void 0),e.jsxDEV(k,{position:o,children:e.jsxDEV(a,{variant:"success",title:"Toast Position",children:["This toast is positioned at ",o]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:171,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:170,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:153,columnNumber:7},void 0)}},N={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(a,{variant:"success",title:"Upload Complete",children:"Your file has been uploaded successfully."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:185,columnNumber:7},void 0),e.jsxDEV(a,{variant:"error",title:"Connection Failed",duration:0,children:e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"mb-2",children:"Unable to connect to server."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:192,columnNumber:11},void 0),e.jsxDEV("button",{className:"text-sm bg-red-600 text-white px-3 py-1 rounded",children:"Retry"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:193,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:191,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:190,columnNumber:7},void 0),e.jsxDEV(a,{variant:"info",children:"New message received"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:200,columnNumber:7},void 0),e.jsxDEV(a,{variant:"warning",title:"Storage Almost Full",closable:!1,children:"You're using 90% of your storage space."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:205,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/toast/Toast.stories.tsx",lineNumber:183,columnNumber:5},void 0)};var j,w,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Notification',
    children: 'This is a basic toast message.'
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var V,U,C;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(C=(U=m.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var S,P,A;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Persistent Toast',
    children: 'This toast will not auto-dismiss.',
    duration: 0
  }
}`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var _,R,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'System Message',
    children: 'This toast cannot be manually closed.',
    closable: false,
    duration: 0
  }
}`,...(I=(R=p.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var q,z,M;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Quick Toast',
    children: 'This toast disappears quickly (2 seconds).',
    duration: 2000
  }
}`,...(M=(z=f.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var L,W,B;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(W=b.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,O,Y;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Y=(O=v.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var $,H,Q;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(H=N.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};const de=["Basic","Variants","Persistent","NotClosable","CustomDuration","Interactive","Positions","Examples"];export{d as Basic,f as CustomDuration,N as Examples,b as Interactive,p as NotClosable,u as Persistent,v as Positions,m as Variants,de as __namedExportsOrder,le as default};
