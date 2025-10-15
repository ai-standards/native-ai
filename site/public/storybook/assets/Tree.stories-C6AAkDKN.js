import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as w,R as z}from"./index-DHZDe_v1.js";import{c as v}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const ve={sm:"text-sm py-1",md:"text-base py-1.5",lg:"text-lg py-2"},be=({isExpanded:i})=>e.jsxDEV("svg",{className:v("w-4 h-4 transition-transform duration-200 flex-shrink-0",i?"rotate-90":"rotate-0"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:62,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:53,columnNumber:3},void 0),T=({data:i,selectedIds:V=[],expandedIds:l,defaultExpandedIds:U=[],onSelect:u,onExpandedChange:o,multiSelect:p=!1,showLines:b=!1,size:te="md",variant:I="default",indent:F=20,className:oe,...le})=>{const[ce,de]=w.useState(()=>{if(l)return l;const n=r=>{const c=[];return r.forEach(d=>{(d.defaultExpanded||U.includes(d.id))&&c.push(d.id),d.children&&c.push(...n(d.children))}),c};return n(i)}),f=l||ce,me=w.useCallback(n=>{const r=f.includes(n)?f.filter(c=>c!==n):[...f,n];l||de(r),o==null||o(r)},[f,l,o]),ue=w.useCallback((n,r)=>{r.disabled||u==null||u(n,r)},[u]),S=({node:n,level:r,isLast:c=!1,parentIsLast:d=!1})=>{const W=n.children&&n.children.length>0,L=f.includes(n.id),pe=V.includes(n.id);return e.jsxDEV("div",{className:"relative",children:[b&&r>0&&e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"absolute border-gray-300 border-l border-b",style:{left:(r-1)*F+8,top:0,width:12,height:"50%"}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:136,columnNumber:13},void 0),!d&&e.jsxDEV("div",{className:"absolute border-gray-300 border-l",style:{left:(r-1)*F+8,top:0,bottom:c?"50%":0}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:147,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:134,columnNumber:11},void 0),e.jsxDEV("div",{className:v("flex items-center cursor-pointer transition-colors duration-200",ve[te],{"hover:bg-gray-100":!n.disabled&&I==="default","bg-blue-50 text-blue-700":pe&&!n.disabled,"text-gray-400 cursor-not-allowed":n.disabled,"px-2 rounded":I==="default"}),style:{paddingLeft:r*F},onClick:()=>ue(n.id,n),children:[e.jsxDEV("div",{className:"flex items-center justify-center w-6 h-6 mr-1",children:W?e.jsxDEV("button",{className:v("p-1 rounded hover:bg-gray-200 transition-colors duration-200",{"text-gray-400":n.disabled}),onClick:N=>{N.stopPropagation(),n.disabled||me(n.id)},disabled:n.disabled,"aria-expanded":L,children:e.jsxDEV(be,{isExpanded:L},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:191,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:177,columnNumber:15},void 0):b&&e.jsxDEV("div",{className:"w-4 h-4"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:194,columnNumber:28},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:175,columnNumber:11},void 0),n.icon&&e.jsxDEV("div",{className:v("flex-shrink-0 mr-2",{"text-gray-400":n.disabled}),children:n.icon},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:200,columnNumber:13},void 0),e.jsxDEV("span",{className:"truncate select-none",children:n.label},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:206,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:160,columnNumber:9},void 0),W&&L&&e.jsxDEV("div",{children:n.children.map((N,fe)=>e.jsxDEV(S,{node:N,level:r+1,isLast:fe===n.children.length-1,parentIsLast:c},N.id,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:213,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:211,columnNumber:11},void 0)]},n.id,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:131,columnNumber:7},void 0)};return e.jsxDEV("div",{className:v("tree-component",{"border border-gray-200 rounded-lg p-2":I==="default"},oe),role:"tree","aria-multiselectable":p,...le,children:i.map((n,r)=>e.jsxDEV(S,{node:n,level:0,isLast:r===i.length-1},n.id,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:241,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.tsx",lineNumber:228,columnNumber:5},void 0)};try{T.displayName="Tree",T.__docgenInfo={description:"",displayName:"Tree",props:{data:{defaultValue:null,description:"Tree data",name:"data",required:!0,type:{name:"TreeNode[]"}},selectedIds:{defaultValue:{value:"[]"},description:"Selected node IDs",name:"selectedIds",required:!1,type:{name:"string[]"}},expandedIds:{defaultValue:null,description:"Expanded node IDs (controlled)",name:"expandedIds",required:!1,type:{name:"string[]"}},defaultExpandedIds:{defaultValue:{value:"[]"},description:"Default expanded node IDs",name:"defaultExpandedIds",required:!1,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"Callback when node is selected",name:"onSelect",required:!1,type:{name:"((nodeId: string, node: TreeNode) => void)"}},onExpandedChange:{defaultValue:null,description:"Callback when node expansion changes",name:"onExpandedChange",required:!1,type:{name:"((expandedIds: string[]) => void)"}},multiSelect:{defaultValue:{value:"false"},description:"Whether multiple selection is allowed",name:"multiSelect",required:!1,type:{name:"boolean"}},showLines:{defaultValue:{value:"false"},description:"Whether to show connecting lines",name:"showLines",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'}]}},indent:{defaultValue:{value:"20"},description:"Indentation per level in pixels",name:"indent",required:!1,type:{name:"number"}}}}}catch{}const ke={title:"Navigation/Tree",component:T,parameters:{layout:"centered"},tags:["autodocs"]},a=()=>e.jsxDEV("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:19,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:18,columnNumber:3},void 0),s=()=>e.jsxDEV("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:25,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:24,columnNumber:3},void 0),m=[{id:"root",label:"Project Root",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:33,columnNumber:11},void 0),defaultExpanded:!0,children:[{id:"src",label:"src",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:39,columnNumber:15},void 0),children:[{id:"components",label:"components",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:44,columnNumber:19},void 0),children:[{id:"button",label:"Button.tsx",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:46,columnNumber:58},void 0)},{id:"input",label:"Input.tsx",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:47,columnNumber:56},void 0)},{id:"modal",label:"Modal.tsx",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:48,columnNumber:56},void 0)}]},{id:"utils",label:"utils",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:54,columnNumber:19},void 0),children:[{id:"helpers",label:"helpers.ts",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:56,columnNumber:59},void 0)},{id:"constants",label:"constants.ts",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:57,columnNumber:63},void 0)}]},{id:"app",label:"App.tsx",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:60,columnNumber:48},void 0)},{id:"main",label:"main.tsx",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:61,columnNumber:50},void 0)}]},{id:"public",label:"public",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:67,columnNumber:15},void 0),children:[{id:"index",label:"index.html",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:69,columnNumber:53},void 0)},{id:"favicon",label:"favicon.ico",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:70,columnNumber:56},void 0)}]},{id:"package",label:"package.json",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:73,columnNumber:53},void 0)},{id:"readme",label:"README.md",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:74,columnNumber:49},void 0)}]}],t=i=>{const[V,l]=z.useState([]),[U,u]=z.useState([]);return e.jsxDEV("div",{className:"w-80",children:e.jsxDEV(T,{...i,selectedIds:V,expandedIds:U,onSelect:o=>{i.multiSelect?l(p=>p.includes(o)?p.filter(b=>b!==o):[...p,o]):l([o])},onExpandedChange:u},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:85,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:84,columnNumber:5},void 0)},g={render:()=>e.jsxDEV(t,{data:m},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:107,columnNumber:17},void 0)},x={render:()=>e.jsxDEV(t,{data:m,showLines:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:111,columnNumber:17},void 0)},D={render:()=>e.jsxDEV(t,{data:m,multiSelect:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:115,columnNumber:17},void 0)},k={render:()=>e.jsxDEV(t,{data:m,variant:"minimal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:119,columnNumber:17},void 0)},j={render:()=>e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-2 font-semibold",children:"Small"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:126,columnNumber:9},void 0),e.jsxDEV(t,{data:m,size:"sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:127,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:125,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-2 font-semibold",children:"Medium"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:131,columnNumber:9},void 0),e.jsxDEV(t,{data:m,size:"md"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:132,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:130,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-2 font-semibold",children:"Large"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:136,columnNumber:9},void 0),e.jsxDEV(t,{data:m,size:"lg"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:137,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:135,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:124,columnNumber:5},void 0)},h={render:()=>{const i=[{id:"folder1",label:"Available Folder",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:149,columnNumber:15},void 0),children:[{id:"file1",label:"Available File",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:151,columnNumber:57},void 0)},{id:"file2",label:"Disabled File",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:152,columnNumber:56},void 0),disabled:!0}]},{id:"folder2",label:"Disabled Folder",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:158,columnNumber:15},void 0),disabled:!0,children:[{id:"file3",label:"Nested File",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:161,columnNumber:54},void 0)}]}];return e.jsxDEV(t,{data:i},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:166,columnNumber:12},void 0)}},y={render:()=>{const i=[{id:"level1",label:"Level 1",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:176,columnNumber:15},void 0),defaultExpanded:!0,children:[{id:"level2",label:"Level 2",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:182,columnNumber:19},void 0),children:[{id:"level3",label:"Level 3",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:187,columnNumber:23},void 0),children:[{id:"level4",label:"Level 4",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:192,columnNumber:27},void 0),children:[{id:"deep-file",label:"Deep File",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:194,columnNumber:68},void 0)}]}]}]}]}];return e.jsxDEV(t,{data:i,showLines:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:205,columnNumber:12},void 0)}},E={render:()=>{const i=[{id:"documents",label:"Documents",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:215,columnNumber:15},void 0),children:[{id:"resume",label:"Resume.pdf",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:217,columnNumber:54},void 0)},{id:"cover-letter",label:"Cover Letter.docx",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:218,columnNumber:67},void 0)},{id:"projects",label:"Projects",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:222,columnNumber:19},void 0),children:[{id:"project1",label:"Website Redesign.zip",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:224,columnNumber:70},void 0)},{id:"project2",label:"Mobile App.sketch",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:225,columnNumber:67},void 0)}]}]},{id:"images",label:"Images",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:233,columnNumber:15},void 0),children:[{id:"vacation",label:"Vacation Photos",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:235,columnNumber:61},void 0)},{id:"work",label:"Work Screenshots",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:236,columnNumber:58},void 0)},{id:"avatar",label:"avatar.png",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:237,columnNumber:54},void 0)}]},{id:"downloads",label:"Downloads",icon:e.jsxDEV(a,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:243,columnNumber:15},void 0),children:[{id:"installer",label:"installer.dmg",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:245,columnNumber:60},void 0)},{id:"archive",label:"backup.zip",icon:e.jsxDEV(s,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:246,columnNumber:55},void 0)}]}];return e.jsxDEV(t,{data:i,variant:"minimal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/tree/Tree.stories.tsx",lineNumber:251,columnNumber:12},void 0)}};var C,M,q;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <TreeWrapper data={sampleData} />
}`,...(q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var _,R,A;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <TreeWrapper data={sampleData} showLines />
}`,...(A=(R=x.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var P,B,H;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <TreeWrapper data={sampleData} multiSelect />
}`,...(H=(B=D.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var O,G,J;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <TreeWrapper data={sampleData} variant="minimal" />
}`,...(J=(G=k.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="mb-2 font-semibold">Small</h3>
        <TreeWrapper data={sampleData} size="sm" />
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Medium</h3>
        <TreeWrapper data={sampleData} size="md" />
      </div>
      
      <div>
        <h3 className="mb-2 font-semibold">Large</h3>
        <TreeWrapper data={sampleData} size="lg" />
      </div>
    </div>
}`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const dataWithDisabled = [{
      id: 'folder1',
      label: 'Available Folder',
      icon: <FolderIcon />,
      children: [{
        id: 'file1',
        label: 'Available File',
        icon: <FileIcon />
      }, {
        id: 'file2',
        label: 'Disabled File',
        icon: <FileIcon />,
        disabled: true
      }]
    }, {
      id: 'folder2',
      label: 'Disabled Folder',
      icon: <FolderIcon />,
      disabled: true,
      children: [{
        id: 'file3',
        label: 'Nested File',
        icon: <FileIcon />
      }]
    }];
    return <TreeWrapper data={dataWithDisabled} />;
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,se;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const deepData = [{
      id: 'level1',
      label: 'Level 1',
      icon: <FolderIcon />,
      defaultExpanded: true,
      children: [{
        id: 'level2',
        label: 'Level 2',
        icon: <FolderIcon />,
        children: [{
          id: 'level3',
          label: 'Level 3',
          icon: <FolderIcon />,
          children: [{
            id: 'level4',
            label: 'Level 4',
            icon: <FolderIcon />,
            children: [{
              id: 'deep-file',
              label: 'Deep File',
              icon: <FileIcon />
            }]
          }]
        }]
      }]
    }];
    return <TreeWrapper data={deepData} showLines />;
  }
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,ie,re;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const fileData = [{
      id: 'documents',
      label: 'Documents',
      icon: <FolderIcon />,
      children: [{
        id: 'resume',
        label: 'Resume.pdf',
        icon: <FileIcon />
      }, {
        id: 'cover-letter',
        label: 'Cover Letter.docx',
        icon: <FileIcon />
      }, {
        id: 'projects',
        label: 'Projects',
        icon: <FolderIcon />,
        children: [{
          id: 'project1',
          label: 'Website Redesign.zip',
          icon: <FileIcon />
        }, {
          id: 'project2',
          label: 'Mobile App.sketch',
          icon: <FileIcon />
        }]
      }]
    }, {
      id: 'images',
      label: 'Images',
      icon: <FolderIcon />,
      children: [{
        id: 'vacation',
        label: 'Vacation Photos',
        icon: <FolderIcon />
      }, {
        id: 'work',
        label: 'Work Screenshots',
        icon: <FolderIcon />
      }, {
        id: 'avatar',
        label: 'avatar.png',
        icon: <FileIcon />
      }]
    }, {
      id: 'downloads',
      label: 'Downloads',
      icon: <FolderIcon />,
      children: [{
        id: 'installer',
        label: 'installer.dmg',
        icon: <FileIcon />
      }, {
        id: 'archive',
        label: 'backup.zip',
        icon: <FileIcon />
      }]
    }];
    return <TreeWrapper data={fileData} variant="minimal" />;
  }
}`,...(re=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};const je=["Default","WithLines","MultiSelect","Minimal","Sizes","WithDisabledNodes","DeepNesting","FileExplorer"];export{y as DeepNesting,g as Default,E as FileExplorer,k as Minimal,D as MultiSelect,j as Sizes,h as WithDisabledNodes,x as WithLines,je as __namedExportsOrder,ke as default};
