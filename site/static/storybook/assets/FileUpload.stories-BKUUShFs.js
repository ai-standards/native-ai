import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as c,R as A}from"./index-DHZDe_v1.js";import{c as h}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const g=c.forwardRef(({onFilesChange:l,onDrop:o,accept:m,multiple:n=!1,maxSize:r,maxFiles:d=n?10:1,disabled:t=!1,size:i="md",label:W,helperText:x,error:Ee=!1,errorMessage:Se,showFileList:Me=!0,uploadText:Le,className:Pe,name:ze,id:I,...Ce},Te)=>{const[b,v]=c.useState([]),[R,C]=c.useState(!1),[_,N]=c.useState(""),U=c.useRef(null),$=c.useCallback(a=>{let s=[...a];return s.length>d?{valid:[],error:`Maximum ${d} file${d>1?"s":""} allowed`}:r&&s.filter(u=>u.size>r).length>0?{valid:[],error:`File size must be less than ${T(r)}`}:(!n&&s.length>1&&(s=[s[0]]),{valid:s})},[r,d,n]),T=a=>{if(a===0)return"0 Bytes";const s=1024,f=["Bytes","KB","MB","GB"],u=Math.floor(Math.log(a)/Math.log(s));return parseFloat((a/Math.pow(s,u)).toFixed(2))+" "+f[u]},q=c.useCallback(a=>{const s=Array.from(a),{valid:f,error:u}=$(s);u?(N(u),v([])):(N(""),v(f),l==null||l(f))},[$,l]),qe=a=>{a.target.files&&q(a.target.files)},Be=c.useCallback(a=>{if(a.preventDefault(),C(!1),t)return;const s=Array.from(a.dataTransfer.files);q(s),o==null||o(s)},[t,q,o]),Ae=c.useCallback(a=>{a.preventDefault(),t||C(!0)},[t]),We=c.useCallback(a=>{a.preventDefault(),C(!1)},[]),Ie=()=>{var a;t||(a=U.current)==null||a.click()},Re=a=>{const s=b.filter((f,u)=>u!==a);v(s),l==null||l(s),N("")},_e=()=>{v([]),l==null||l([]),N(""),U.current&&(U.current.value="")},B={sm:{container:"p-4 text-sm",icon:"w-6 h-6",text:"text-sm"},md:{container:"p-6 text-base",icon:"w-8 h-8",text:"text-base"},lg:{container:"p-8 text-lg",icon:"w-10 h-10",text:"text-lg"}},p=Ee||_,y=Se||_,G=e.jsxDEV("div",{onClick:Ie,onDrop:Be,onDragOver:Ae,onDragLeave:We,className:h("relative border-2 border-dashed rounded-lg cursor-pointer transition-colors",B[i].container,R&&!t&&"border-blue-500 bg-blue-50",p?"border-red-300 bg-red-50":"border-gray-300 hover:border-gray-400",t&&"cursor-not-allowed opacity-50 bg-gray-50",Pe),children:[e.jsxDEV("input",{ref:Te||U,type:"file",accept:m,multiple:n,onChange:qe,disabled:t,name:ze,id:I,className:"sr-only",...Ce},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:208,columnNumber:9},void 0),e.jsxDEV("div",{className:"flex flex-col items-center justify-center space-y-2",children:[e.jsxDEV("svg",{className:h(B[i].icon,"text-gray-400"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:229,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:223,columnNumber:11},void 0),e.jsxDEV("div",{className:"text-center",children:[e.jsxDEV("p",{className:h("font-medium text-gray-700",B[i].text),children:Le||(R?"Drop files here":"Click to upload or drag and drop")},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:238,columnNumber:13},void 0),e.jsxDEV("p",{className:"text-sm text-gray-500",children:[m&&`Accepted: ${m}`,r&&` • Max size: ${T(r)}`,n&&` • Max ${d} files`]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:245,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:237,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:221,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:192,columnNumber:7},void 0),H=Me&&b.length>0&&e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("div",{className:"flex items-center justify-between",children:[e.jsxDEV("p",{className:"text-sm font-medium text-gray-700",children:["Selected Files (",b.length,")"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:258,columnNumber:11},void 0),e.jsxDEV("button",{type:"button",onClick:_e,className:"text-sm text-red-600 hover:text-red-800",children:"Clear all"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:261,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:257,columnNumber:9},void 0),e.jsxDEV("div",{className:"space-y-2",children:b.map((a,s)=>e.jsxDEV("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded border",children:[e.jsxDEV("div",{className:"flex items-center space-x-2 min-w-0",children:[e.jsxDEV("svg",{className:"w-4 h-4 text-gray-400 flex-shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:278,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:277,columnNumber:17},void 0),e.jsxDEV("div",{className:"min-w-0",children:[e.jsxDEV("p",{className:"text-sm font-medium text-gray-700 truncate",children:a.name},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:281,columnNumber:19},void 0),e.jsxDEV("p",{className:"text-xs text-gray-500",children:T(a.size)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:282,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:280,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:276,columnNumber:15},void 0),e.jsxDEV("button",{type:"button",onClick:()=>Re(s),className:"ml-2 text-red-600 hover:text-red-800 flex-shrink-0",children:e.jsxDEV("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:292,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:291,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:286,columnNumber:15},void 0)]},s,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:272,columnNumber:13},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:270,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:256,columnNumber:7},void 0);return W?e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("label",{htmlFor:I,className:h("block text-sm font-medium",p?"text-red-700":"text-gray-700",t&&"text-gray-400"),children:W},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:304,columnNumber:11},void 0),G,x&&!p&&e.jsxDEV("p",{className:"text-sm text-gray-500",children:x},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:316,columnNumber:13},void 0),p&&y&&e.jsxDEV("p",{className:"text-sm text-red-600",children:y},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:319,columnNumber:13},void 0),H]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:303,columnNumber:9},void 0):e.jsxDEV("div",{children:[G,x&&!p&&e.jsxDEV("p",{className:"mt-1 text-sm text-gray-500",children:x},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:330,columnNumber:11},void 0),p&&y&&e.jsxDEV("p",{className:"mt-1 text-sm text-red-600",children:y},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:333,columnNumber:11},void 0),H]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.tsx",lineNumber:327,columnNumber:7},void 0)});g.displayName="FileUpload";try{g.displayName="FileUpload",g.__docgenInfo={description:"",displayName:"FileUpload",props:{onFilesChange:{defaultValue:null,description:"Called when files are selected",name:"onFilesChange",required:!1,type:{name:"((files: File[]) => void)"}},onDrop:{defaultValue:null,description:"Called when files are dropped",name:"onDrop",required:!1,type:{name:"((files: File[]) => void)"}},accept:{defaultValue:null,description:"Accepted file types",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"false"},description:"Allow multiple file selection",name:"multiple",required:!1,type:{name:"boolean"}},maxSize:{defaultValue:null,description:"Maximum file size in bytes",name:"maxSize",required:!1,type:{name:"number"}},maxFiles:{defaultValue:{value:"multiple ? 10 : 1"},description:"Maximum number of files",name:"maxFiles",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"Error state",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"Error message",name:"errorMessage",required:!1,type:{name:"string"}},showFileList:{defaultValue:{value:"true"},description:"Show file list",name:"showFileList",required:!1,type:{name:"boolean"}},uploadText:{defaultValue:null,description:"Custom upload text",name:"uploadText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Input name",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Input id",name:"id",required:!1,type:{name:"string"}}}}}catch{}const Je={title:"Form/FileUpload",component:g,parameters:{layout:"centered"},decorators:[l=>e.jsxDEV("div",{className:"min-h-96 w-96 p-8",children:e.jsxDEV(l,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:14,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:13,columnNumber:7},void 0)],tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},showFileList:{control:{type:"boolean"}}}},k={args:{}},D={args:{label:"Upload Documents",id:"documents"}},j={args:{label:"Upload Multiple Files",multiple:!0,maxFiles:5,id:"multiple"}},F={args:{label:"Upload Images",accept:".jpg,.jpeg,.png,.gif",multiple:!0,id:"images"}},V={args:{label:"Upload Document",accept:".pdf,.doc,.docx",maxSize:5*1024*1024,helperText:"Maximum file size: 5MB",id:"document"}},w={args:{label:"Disabled Upload",disabled:!0,id:"disabled"}},E={args:{label:"Upload with Error",error:!0,errorMessage:"Please select a valid file",id:"error"}},S={args:{size:"sm",label:"Small Upload",id:"small"}},M={args:{size:"lg",label:"Large Upload",id:"large"}},L={args:{label:"Custom Upload Text",uploadText:"Drop your awesome files here!",helperText:"We support all file types",id:"custom"}},P={args:{label:"Interactive File Upload",multiple:!0,maxFiles:3,maxSize:2*1024*1024,accept:".jpg,.jpeg,.png,.pdf,.txt",id:"interactive"},render:l=>{const[o,m]=A.useState([]),[n,r]=A.useState(""),d=i=>{m(i),i.length>0?r(`${i.length} file${i.length>1?"s":""} selected`):r("")},t=async()=>{o.length!==0&&(r("Uploading..."),await new Promise(i=>setTimeout(i,2e3)),r("Upload complete!"),m([]))};return e.jsxDEV("div",{className:"w-full space-y-4",children:[e.jsxDEV(g,{...l,onFilesChange:d},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:159,columnNumber:9},void 0),n&&e.jsxDEV("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:e.jsxDEV("p",{className:"text-sm text-blue-700",children:n},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:166,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:165,columnNumber:11},void 0),o.length>0&&!n.includes("Uploading")&&e.jsxDEV("button",{onClick:t,className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",children:["Upload ",o.length," file",o.length>1?"s":""]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:171,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:158,columnNumber:7},void 0)}},z={render:()=>{const[l,o]=A.useState(null),m=n=>{if(n.length>0){const r=n[0];if(r.type.startsWith("image/")){const d=new FileReader;d.onload=t=>{var i;o((i=t.target)==null?void 0:i.result)},d.readAsDataURL(r)}}else o(null)};return e.jsxDEV("div",{className:"w-full space-y-4",children:[e.jsxDEV(g,{label:"Profile Picture",accept:"image/*",maxSize:1024*1024,onFilesChange:m,uploadText:"Upload your profile picture",helperText:"JPG, PNG or GIF (max 1MB)",id:"profile"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:204,columnNumber:9},void 0),l&&e.jsxDEV("div",{className:"mt-4",children:[e.jsxDEV("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Preview:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:216,columnNumber:13},void 0),e.jsxDEV("img",{src:l,alt:"Preview",className:"w-32 h-32 object-cover rounded-lg border border-gray-300"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:217,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:215,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fileupload/FileUpload.stories.tsx",lineNumber:203,columnNumber:7},void 0)}};var O,J,K;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {}
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Z,Q,X;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Upload Documents',
    id: 'documents'
  }
}`,...(X=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Upload Multiple Files',
    multiple: true,
    maxFiles: 5,
    id: 'multiple'
  }
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,le,re;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Upload Images',
    accept: '.jpg,.jpeg,.png,.gif',
    multiple: true,
    id: 'images'
  }
}`,...(re=(le=F.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var te,ie,oe;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Upload Document',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024,
    // 5MB
    helperText: 'Maximum file size: 5MB',
    id: 'document'
  }
}`,...(oe=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ne,de,ce;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Upload',
    disabled: true,
    id: 'disabled'
  }
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,pe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Upload with Error',
    error: true,
    errorMessage: 'Please select a valid file',
    id: 'error'
  }
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,ge,xe;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Upload',
    id: 'small'
  }
}`,...(xe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var be,ve,Ne;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Upload',
    id: 'large'
  }
}`,...(Ne=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:Ne.source}}};var Ue,ye,he;L.parameters={...L.parameters,docs:{...(Ue=L.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    label: 'Custom Upload Text',
    uploadText: 'Drop your awesome files here!',
    helperText: 'We support all file types',
    id: 'custom'
  }
}`,...(he=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ke,De,je;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(je=(De=P.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var Fe,Ve,we;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(we=(Ve=z.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};const Ke=["Default","WithLabel","Multiple","WithFileTypes","WithSizeLimit","Disabled","WithError","Small","Large","CustomText","Interactive","ProfilePicture"];export{L as CustomText,k as Default,w as Disabled,P as Interactive,M as Large,j as Multiple,z as ProfilePicture,S as Small,E as WithError,F as WithFileTypes,D as WithLabel,V as WithSizeLimit,Ke as __namedExportsOrder,Je as default};
