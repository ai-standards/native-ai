import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as x}from"./cn-BaF2GUMg.js";import{r as f}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const R={sm:"h-1",md:"h-2",lg:"h-3"},T={primary:"bg-blue-600",success:"bg-green-600",warning:"bg-yellow-600",error:"bg-red-600"},s=({value:r=0,max:l=100,min:n=0,size:t="md",variant:b="primary",showValue:i=!1,indeterminate:a=!1,label:o,className:D,...A})=>{const y=Math.min(Math.max((r-n)/(l-n)*100,0),100);return e.jsxs("div",{className:x("w-full",D),...A,children:[(o||i)&&e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[o&&e.jsx("span",{className:"text-sm font-medium text-gray-700",children:o}),i&&!a&&e.jsxs("span",{className:"text-sm text-gray-600",children:[Math.round(y),"%"]})]}),e.jsx("div",{className:x("w-full bg-gray-200 rounded-full overflow-hidden",R[t]),role:"progressbar","aria-valuenow":a?void 0:r,"aria-valuemin":n,"aria-valuemax":l,"aria-label":o,children:e.jsx("div",{className:x("h-full rounded-full transition-all duration-300 ease-out",T[b],a&&"animate-pulse"),style:{width:a?"100%":`${y}%`}})})]})};try{s.displayName="Progress",s.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:{value:"0"},description:"Current progress value",name:"value",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Minimum value",name:"min",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"primary"},description:"Color variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},showValue:{defaultValue:{value:"false"},description:"Show percentage text",name:"showValue",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"Indeterminate mode (animated without specific progress)",name:"indeterminate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Progress label for accessibility",name:"label",required:!1,type:{name:"string"}}}}}catch{}const K={title:"Feedback/Progress",component:s,parameters:{layout:"centered",docs:{description:{component:"A visual representation of task or process completion. Useful for file uploads, form submissions, and long-running operations."}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["primary","success","warning","error"]}}},d={args:{value:65}},c={args:{value:75,label:"Upload Progress",showValue:!0}},m={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(s,{size:"sm",value:40,label:"Small"}),e.jsx(s,{size:"md",value:60,label:"Medium"}),e.jsx(s,{size:"lg",value:80,label:"Large"})]})},u={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(s,{variant:"primary",value:25,label:"Primary"}),e.jsx(s,{variant:"success",value:50,label:"Success"}),e.jsx(s,{variant:"warning",value:75,label:"Warning"}),e.jsx(s,{variant:"error",value:90,label:"Error"})]})},p={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(s,{indeterminate:!0,label:"Processing..."}),e.jsx(s,{indeterminate:!0,variant:"success",label:"Syncing..."})]})},v={render:()=>{const[r,l]=f.useState(0),[n,t]=f.useState(!1),b=()=>{t(!0),l(0);const i=setInterval(()=>{l(a=>a>=100?(clearInterval(i),t(!1),100):a+Math.random()*10)},200)};return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(s,{value:r,label:"File Upload",showValue:!0,variant:r===100?"success":"primary"}),e.jsx("button",{onClick:b,disabled:n,className:"px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50",children:n?"Uploading...":"Start Upload"})]})}},g={render:()=>e.jsxs("div",{className:"space-y-8 w-96",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-medium mb-3",children:"File Upload"}),e.jsx(s,{value:73,label:"document.pdf (2.4 MB)",showValue:!0,variant:"primary"})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-medium mb-3",children:"Form Completion"}),e.jsx(s,{value:40,label:"Profile Setup",showValue:!0,size:"sm"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"2 of 5 steps completed"})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-medium mb-3",children:"System Process"}),e.jsx(s,{indeterminate:!0,label:"Optimizing images...",variant:"success"})]}),e.jsxs("div",{className:"p-4 border rounded-lg space-y-3",children:[e.jsx("h3",{className:"font-medium",children:"Installation Progress"}),e.jsx(s,{value:100,label:"Download",variant:"success",size:"sm"}),e.jsx(s,{value:60,label:"Install",variant:"primary",size:"sm"}),e.jsx(s,{value:0,label:"Configure",variant:"primary",size:"sm"})]})]})};var h,j,P;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var N,w,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Upload Progress',
    showValue: true
  }
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var z,V,I;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Progress size="sm" value={40} label="Small" />
      <Progress size="md" value={60} label="Medium" />
      <Progress size="lg" value={80} label="Large" />
    </div>
}`,...(I=(V=m.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var L,M,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Progress variant="primary" value={25} label="Primary" />
      <Progress variant="success" value={50} label="Success" />
      <Progress variant="warning" value={75} label="Warning" />
      <Progress variant="error" value={90} label="Error" />
    </div>
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var C,_,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Progress indeterminate label="Processing..." />
      <Progress indeterminate variant="success" label="Syncing..." />
    </div>
}`,...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var q,E,k;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const startProgress = () => {
      setIsLoading(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);
    };
    return <div className="space-y-4 w-80">
        <Progress value={progress} label="File Upload" showValue variant={progress === 100 ? 'success' : 'primary'} />
        <button onClick={startProgress} disabled={isLoading} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">
          {isLoading ? 'Uploading...' : 'Start Upload'}
        </button>
      </div>;
  }
}`,...(k=(E=v.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var B,W,O;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 w-96">
      {/* File upload */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">File Upload</h3>
        <Progress value={73} label="document.pdf (2.4 MB)" showValue variant="primary" />
      </div>

      {/* Form completion */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">Form Completion</h3>
        <Progress value={40} label="Profile Setup" showValue size="sm" />
        <p className="text-xs text-gray-500 mt-1">2 of 5 steps completed</p>
      </div>

      {/* System process */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-3">System Process</h3>
        <Progress indeterminate label="Optimizing images..." variant="success" />
      </div>

      {/* Multi-step progress */}
      <div className="p-4 border rounded-lg space-y-3">
        <h3 className="font-medium">Installation Progress</h3>
        <Progress value={100} label="Download" variant="success" size="sm" />
        <Progress value={60} label="Install" variant="primary" size="sm" />
        <Progress value={0} label="Configure" variant="primary" size="sm" />
      </div>
    </div>
}`,...(O=(W=g.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const Q=["Basic","WithLabel","Sizes","Variants","Indeterminate","Interactive","Examples"];export{d as Basic,g as Examples,p as Indeterminate,v as Interactive,m as Sizes,u as Variants,c as WithLabel,Q as __namedExportsOrder,K as default};
