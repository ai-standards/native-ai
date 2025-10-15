import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as c,R as W}from"./index-BwDkhjyp.js";import{c as w}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const g=c.forwardRef(({onFilesChange:t,onDrop:i,accept:p,multiple:o=!1,maxSize:s,maxFiles:d=o?10:1,disabled:l=!1,size:n="md",label:E,helperText:x,error:De=!1,errorMessage:Le,showFileList:Pe=!0,uploadText:ze,className:Ce,name:Ve,id:I,...Te},qe)=>{const[h,b]=c.useState([]),[R,T]=c.useState(!1),[_,v]=c.useState(""),y=c.useRef(null),$=c.useCallback(a=>{let r=[...a];return r.length>d?{valid:[],error:`Maximum ${d} file${d>1?"s":""} allowed`}:s&&r.filter(u=>u.size>s).length>0?{valid:[],error:`File size must be less than ${q(s)}`}:(!o&&r.length>1&&(r=[r[0]]),{valid:r})},[s,d,o]),q=a=>{if(a===0)return"0 Bytes";const r=1024,f=["Bytes","KB","MB","GB"],u=Math.floor(Math.log(a)/Math.log(r));return parseFloat((a/Math.pow(r,u)).toFixed(2))+" "+f[u]},B=c.useCallback(a=>{const r=Array.from(a),{valid:f,error:u}=$(r);u?(v(u),b([])):(v(""),b(f),t==null||t(f))},[$,t]),Be=a=>{a.target.files&&B(a.target.files)},Ae=c.useCallback(a=>{if(a.preventDefault(),T(!1),l)return;const r=Array.from(a.dataTransfer.files);B(r),i==null||i(r)},[l,B,i]),We=c.useCallback(a=>{a.preventDefault(),l||T(!0)},[l]),Ee=c.useCallback(a=>{a.preventDefault(),T(!1)},[]),Ie=()=>{var a;l||(a=y.current)==null||a.click()},Re=a=>{const r=h.filter((f,u)=>u!==a);b(r),t==null||t(r),v("")},_e=()=>{b([]),t==null||t([]),v(""),y.current&&(y.current.value="")},A={sm:{container:"p-4 text-sm",icon:"w-6 h-6",text:"text-sm"},md:{container:"p-6 text-base",icon:"w-8 h-8",text:"text-base"},lg:{container:"p-8 text-lg",icon:"w-10 h-10",text:"text-lg"}},m=De||_,j=Le||_,G=e.jsxs("div",{onClick:Ie,onDrop:Ae,onDragOver:We,onDragLeave:Ee,className:w("relative border-2 border-dashed rounded-lg cursor-pointer transition-colors",A[n].container,R&&!l&&"border-blue-500 bg-blue-50",m?"border-red-300 bg-red-50":"border-gray-300 hover:border-gray-400",l&&"cursor-not-allowed opacity-50 bg-gray-50",Ce),children:[e.jsx("input",{ref:qe||y,type:"file",accept:p,multiple:o,onChange:Be,disabled:l,name:Ve,id:I,className:"sr-only",...Te}),e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[e.jsx("svg",{className:w(A[n].icon,"text-gray-400"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:w("font-medium text-gray-700",A[n].text),children:ze||(R?"Drop files here":"Click to upload or drag and drop")}),e.jsxs("p",{className:"text-sm text-gray-500",children:[p&&`Accepted: ${p}`,s&&` • Max size: ${q(s)}`,o&&` • Max ${d} files`]})]})]})]}),H=Pe&&h.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("p",{className:"text-sm font-medium text-gray-700",children:["Selected Files (",h.length,")"]}),e.jsx("button",{type:"button",onClick:_e,className:"text-sm text-red-600 hover:text-red-800",children:"Clear all"})]}),e.jsx("div",{className:"space-y-2",children:h.map((a,r)=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded border",children:[e.jsxs("div",{className:"flex items-center space-x-2 min-w-0",children:[e.jsx("svg",{className:"w-4 h-4 text-gray-400 flex-shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 truncate",children:a.name}),e.jsx("p",{className:"text-xs text-gray-500",children:q(a.size)})]})]}),e.jsx("button",{type:"button",onClick:()=>Re(r),className:"ml-2 text-red-600 hover:text-red-800 flex-shrink-0",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},r))})]});return E?e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:I,className:w("block text-sm font-medium",m?"text-red-700":"text-gray-700",l&&"text-gray-400"),children:E}),G,x&&!m&&e.jsx("p",{className:"text-sm text-gray-500",children:x}),m&&j&&e.jsx("p",{className:"text-sm text-red-600",children:j}),H]}):e.jsxs("div",{children:[G,x&&!m&&e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:x}),m&&j&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:j}),H]})});g.displayName="FileUpload";try{g.displayName="FileUpload",g.__docgenInfo={description:"",displayName:"FileUpload",props:{onFilesChange:{defaultValue:null,description:"Called when files are selected",name:"onFilesChange",required:!1,type:{name:"((files: File[]) => void)"}},onDrop:{defaultValue:null,description:"Called when files are dropped",name:"onDrop",required:!1,type:{name:"((files: File[]) => void)"}},accept:{defaultValue:null,description:"Accepted file types",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"false"},description:"Allow multiple file selection",name:"multiple",required:!1,type:{name:"boolean"}},maxSize:{defaultValue:null,description:"Maximum file size in bytes",name:"maxSize",required:!1,type:{name:"number"}},maxFiles:{defaultValue:{value:"multiple ? 10 : 1"},description:"Maximum number of files",name:"maxFiles",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"Error state",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"Error message",name:"errorMessage",required:!1,type:{name:"string"}},showFileList:{defaultValue:{value:"true"},description:"Show file list",name:"showFileList",required:!1,type:{name:"boolean"}},uploadText:{defaultValue:null,description:"Custom upload text",name:"uploadText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Input name",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Input id",name:"id",required:!1,type:{name:"string"}}}}}catch{}const Je={title:"Form/FileUpload",component:g,parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{className:"min-h-96 w-96 p-8",children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},showFileList:{control:{type:"boolean"}}}},S={args:{}},N={args:{label:"Upload Documents",id:"documents"}},U={args:{label:"Upload Multiple Files",multiple:!0,maxFiles:5,id:"multiple"}},F={args:{label:"Upload Images",accept:".jpg,.jpeg,.png,.gif",multiple:!0,id:"images"}},M={args:{label:"Upload Document",accept:".pdf,.doc,.docx",maxSize:5*1024*1024,helperText:"Maximum file size: 5MB",id:"document"}},k={args:{label:"Disabled Upload",disabled:!0,id:"disabled"}},D={args:{label:"Upload with Error",error:!0,errorMessage:"Please select a valid file",id:"error"}},L={args:{size:"sm",label:"Small Upload",id:"small"}},P={args:{size:"lg",label:"Large Upload",id:"large"}},z={args:{label:"Custom Upload Text",uploadText:"Drop your awesome files here!",helperText:"We support all file types",id:"custom"}},C={args:{label:"Interactive File Upload",multiple:!0,maxFiles:3,maxSize:2*1024*1024,accept:".jpg,.jpeg,.png,.pdf,.txt",id:"interactive"},render:t=>{const[i,p]=W.useState([]),[o,s]=W.useState(""),d=n=>{p(n),n.length>0?s(`${n.length} file${n.length>1?"s":""} selected`):s("")},l=async()=>{i.length!==0&&(s("Uploading..."),await new Promise(n=>setTimeout(n,2e3)),s("Upload complete!"),p([]))};return e.jsxs("div",{className:"w-full space-y-4",children:[e.jsx(g,{...t,onFilesChange:d}),o&&e.jsx("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:e.jsx("p",{className:"text-sm text-blue-700",children:o})}),i.length>0&&!o.includes("Uploading")&&e.jsxs("button",{onClick:l,className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",children:["Upload ",i.length," file",i.length>1?"s":""]})]})}},V={render:()=>{const[t,i]=W.useState(null),p=o=>{if(o.length>0){const s=o[0];if(s.type.startsWith("image/")){const d=new FileReader;d.onload=l=>{var n;i((n=l.target)==null?void 0:n.result)},d.readAsDataURL(s)}}else i(null)};return e.jsxs("div",{className:"w-full space-y-4",children:[e.jsx(g,{label:"Profile Picture",accept:"image/*",maxSize:1024*1024,onFilesChange:p,uploadText:"Upload your profile picture",helperText:"JPG, PNG or GIF (max 1MB)",id:"profile"}),t&&e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Preview:"}),e.jsx("img",{src:t,alt:"Preview",className:"w-32 h-32 object-cover rounded-lg border border-gray-300"})]})]})}};var O,J,K;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {}
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Z,Q,X;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Upload Documents',
    id: 'documents'
  }
}`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;U.parameters={...U.parameters,docs:{...(Y=U.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Upload Multiple Files',
    multiple: true,
    maxFiles: 5,
    id: 'multiple'
  }
}`,...(ae=(ee=U.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Upload Images',
    accept: '.jpg,.jpeg,.png,.gif',
    multiple: true,
    id: 'images'
  }
}`,...(se=(te=F.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,ne,ie;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Upload Document',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024,
    // 5MB
    helperText: 'Maximum file size: 5MB',
    id: 'document'
  }
}`,...(ie=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,de,ce;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Upload',
    disabled: true,
    id: 'disabled'
  }
}`,...(ce=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,me;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Upload with Error',
    error: true,
    errorMessage: 'Please select a valid file',
    id: 'error'
  }
}`,...(me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,ge,xe;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Upload',
    id: 'small'
  }
}`,...(xe=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,be,ve;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Upload',
    id: 'large'
  }
}`,...(ve=(be=P.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var ye,je,we;z.parameters={...z.parameters,docs:{...(ye=z.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'Custom Upload Text',
    uploadText: 'Drop your awesome files here!',
    helperText: 'We support all file types',
    id: 'custom'
  }
}`,...(we=(je=z.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var Se,Ne,Ue;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    label: 'Interactive File Upload',
    multiple: true,
    maxFiles: 3,
    maxSize: 2 * 1024 * 1024,
    // 2MB
    accept: '.jpg,.jpeg,.png,.pdf,.txt',
    id: 'interactive'
  },
  render: args => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [uploadStatus, setUploadStatus] = React.useState<string>('');
    const handleFilesChange = (newFiles: File[]) => {
      setFiles(newFiles);
      if (newFiles.length > 0) {
        setUploadStatus(\`\${newFiles.length} file\${newFiles.length > 1 ? 's' : ''} selected\`);
      } else {
        setUploadStatus('');
      }
    };
    const handleUpload = async () => {
      if (files.length === 0) return;
      setUploadStatus('Uploading...');

      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setUploadStatus('Upload complete!');
      setFiles([]);
    };
    return <div className="w-full space-y-4">
        <FileUpload {...args} onFilesChange={handleFilesChange} />
        
        {uploadStatus && <div className="p-3 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-700">{uploadStatus}</p>
          </div>}
        
        {files.length > 0 && !uploadStatus.includes('Uploading') && <button onClick={handleUpload} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Upload {files.length} file{files.length > 1 ? 's' : ''}
          </button>}
      </div>;
  }
}`,...(Ue=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Fe,Me,ke;V.parameters={...V.parameters,docs:{...(Fe=V.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [preview, setPreview] = React.useState<string | null>(null);
    const handleFilesChange = (files: File[]) => {
      if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = e => {
            setPreview(e.target?.result as string);
          };
          reader.readAsDataURL(file);
        }
      } else {
        setPreview(null);
      }
    };
    return <div className="w-full space-y-4">
        <FileUpload label="Profile Picture" accept="image/*" maxSize={1024 * 1024} // 1MB
      onFilesChange={handleFilesChange} uploadText="Upload your profile picture" helperText="JPG, PNG or GIF (max 1MB)" id="profile" />
        
        {preview && <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
            <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-lg border border-gray-300" />
          </div>}
      </div>;
  }
}`,...(ke=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:ke.source}}};const Ke=["Default","WithLabel","Multiple","WithFileTypes","WithSizeLimit","Disabled","WithError","Small","Large","CustomText","Interactive","ProfilePicture"];export{z as CustomText,S as Default,k as Disabled,C as Interactive,P as Large,U as Multiple,V as ProfilePicture,L as Small,D as WithError,F as WithFileTypes,N as WithLabel,M as WithSizeLimit,Ke as __namedExportsOrder,Je as default};
