import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{c as b}from"./cn-BaF2GUMg.js";import{r as k}from"./index-DHZDe_v1.js";import"./_commonjsHelpers-BosuxZz1.js";const R={sm:"h-1",md:"h-2",lg:"h-3"},T={primary:"bg-blue-600",success:"bg-green-600",warning:"bg-yellow-600",error:"bg-red-600"},s=({value:a=0,max:o=100,min:n=0,size:i="md",variant:v="primary",showValue:t=!1,indeterminate:r=!1,label:l,className:O,...A})=>{const N=Math.min(Math.max((a-n)/(o-n)*100,0),100);return e.jsxDEV("div",{className:b("w-full",O),...A,children:[(l||t)&&e.jsxDEV("div",{className:"flex justify-between items-center mb-1",children:[l&&e.jsxDEV("span",{className:"text-sm font-medium text-gray-700",children:l},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.tsx",lineNumber:57,columnNumber:13},void 0),t&&!r&&e.jsxDEV("span",{className:"text-sm text-gray-600",children:[Math.round(N),"%"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.tsx",lineNumber:60,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.tsx",lineNumber:55,columnNumber:9},void 0),e.jsxDEV("div",{className:b("w-full bg-gray-200 rounded-full overflow-hidden",R[i]),role:"progressbar","aria-valuenow":r?void 0:a,"aria-valuemin":n,"aria-valuemax":o,"aria-label":l,children:e.jsxDEV("div",{className:b("h-full rounded-full transition-all duration-300 ease-out",T[v],r&&"animate-pulse"),style:{width:r?"100%":`${N}%`}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.tsx",lineNumber:79,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.tsx",lineNumber:68,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.tsx",lineNumber:52,columnNumber:5},void 0)};try{s.displayName="Progress",s.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:{value:"0"},description:"Current progress value",name:"value",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Minimum value",name:"min",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"primary"},description:"Color variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'}]}},showValue:{defaultValue:{value:"false"},description:"Show percentage text",name:"showValue",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"Indeterminate mode (animated without specific progress)",name:"indeterminate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Progress label for accessibility",name:"label",required:!1,type:{name:"string"}}}}}catch{}const K={title:"Feedback/Progress",component:s,parameters:{layout:"centered",docs:{description:{component:"A visual representation of task or process completion. Useful for file uploads, form submissions, and long-running operations."}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["primary","success","warning","error"]}}},c={args:{value:65}},m={args:{value:75,label:"Upload Progress",showValue:!0}},u={render:()=>e.jsxDEV("div",{className:"space-y-4 w-64",children:[e.jsxDEV(s,{size:"sm",value:40,label:"Small"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:54,columnNumber:7},void 0),e.jsxDEV(s,{size:"md",value:60,label:"Medium"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:55,columnNumber:7},void 0),e.jsxDEV(s,{size:"lg",value:80,label:"Large"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:56,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:53,columnNumber:5},void 0)},d={render:()=>e.jsxDEV("div",{className:"space-y-4 w-64",children:[e.jsxDEV(s,{variant:"primary",value:25,label:"Primary"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:65,columnNumber:7},void 0),e.jsxDEV(s,{variant:"success",value:50,label:"Success"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:66,columnNumber:7},void 0),e.jsxDEV(s,{variant:"warning",value:75,label:"Warning"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:67,columnNumber:7},void 0),e.jsxDEV(s,{variant:"error",value:90,label:"Error"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:68,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:64,columnNumber:5},void 0)},p={render:()=>e.jsxDEV("div",{className:"space-y-4 w-64",children:[e.jsxDEV(s,{indeterminate:!0,label:"Processing..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:77,columnNumber:7},void 0),e.jsxDEV(s,{indeterminate:!0,variant:"success",label:"Syncing..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:78,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:76,columnNumber:5},void 0)},f={render:()=>{const[a,o]=k.useState(0),[n,i]=k.useState(!1),v=()=>{i(!0),o(0);const t=setInterval(()=>{o(r=>r>=100?(clearInterval(t),i(!1),100):r+Math.random()*10)},200)};return e.jsxDEV("div",{className:"space-y-4 w-80",children:[e.jsxDEV(s,{value:a,label:"File Upload",showValue:!0,variant:a===100?"success":"primary"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:107,columnNumber:9},void 0),e.jsxDEV("button",{onClick:v,disabled:n,className:"px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50",children:n?"Uploading...":"Start Upload"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:113,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:106,columnNumber:7},void 0)}},g={render:()=>e.jsxDEV("div",{className:"space-y-8 w-96",children:[e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-medium mb-3",children:"File Upload"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:131,columnNumber:9},void 0),e.jsxDEV(s,{value:73,label:"document.pdf (2.4 MB)",showValue:!0,variant:"primary"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:132,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:130,columnNumber:7},void 0),e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-medium mb-3",children:"Form Completion"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:142,columnNumber:9},void 0),e.jsxDEV(s,{value:40,label:"Profile Setup",showValue:!0,size:"sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:143,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-xs text-gray-500 mt-1",children:"2 of 5 steps completed"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:149,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:141,columnNumber:7},void 0),e.jsxDEV("div",{className:"p-4 border rounded-lg",children:[e.jsxDEV("h3",{className:"font-medium mb-3",children:"System Process"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:154,columnNumber:9},void 0),e.jsxDEV(s,{indeterminate:!0,label:"Optimizing images...",variant:"success"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:155,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:153,columnNumber:7},void 0),e.jsxDEV("div",{className:"p-4 border rounded-lg space-y-3",children:[e.jsxDEV("h3",{className:"font-medium",children:"Installation Progress"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:164,columnNumber:9},void 0),e.jsxDEV(s,{value:100,label:"Download",variant:"success",size:"sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:165,columnNumber:9},void 0),e.jsxDEV(s,{value:60,label:"Install",variant:"primary",size:"sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:166,columnNumber:9},void 0),e.jsxDEV(s,{value:0,label:"Configure",variant:"primary",size:"sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:167,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:163,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/feedback/progress/Progress.stories.tsx",lineNumber:128,columnNumber:5},void 0)};var x,y,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var D,P,h;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Upload Progress',
    showValue: true
  }
}`,...(h=(P=m.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var V,U,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Progress size="sm" value={40} label="Small" />
      <Progress size="md" value={60} label="Medium" />
      <Progress size="lg" value={80} label="Large" />
    </div>
}`,...(E=(U=u.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var w,S,z;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Progress variant="primary" value={25} label="Primary" />
      <Progress variant="success" value={50} label="Success" />
      <Progress variant="warning" value={75} label="Warning" />
      <Progress variant="error" value={90} label="Error" />
    </div>
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,L,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Progress indeterminate label="Processing..." />
      <Progress indeterminate variant="success" label="Syncing..." />
    </div>
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var C,_,F;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(_=f.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var q,B,W;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(B=g.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const Q=["Basic","WithLabel","Sizes","Variants","Indeterminate","Interactive","Examples"];export{c as Basic,g as Examples,p as Indeterminate,f as Interactive,u as Sizes,d as Variants,m as WithLabel,Q as __namedExportsOrder,K as default};
