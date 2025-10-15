import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as T,R as C}from"./index-BwDkhjyp.js";import{c as x}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const xe={sm:"text-sm py-1",md:"text-base py-1.5",lg:"text-lg py-2"},he=({isExpanded:i})=>e.jsx("svg",{className:x("w-4 h-4 transition-transform duration-200 flex-shrink-0",i?"rotate-90":"rotate-0"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),k=({data:i,selectedIds:L=[],expandedIds:d,defaultExpandedIds:w=[],onSelect:u,onExpandedChange:t,multiSelect:m=!1,showLines:h=!1,size:re="md",variant:S="default",indent:W=20,className:te,...de})=>{const[oe,ce]=T.useState(()=>{if(d)return d;const a=s=>{const o=[];return s.forEach(c=>{(c.defaultExpanded||w.includes(c.id))&&o.push(c.id),c.children&&o.push(...a(c.children))}),o};return a(i)}),b=d||oe,pe=T.useCallback(a=>{const s=b.includes(a)?b.filter(o=>o!==a):[...b,a];d||ce(s),t==null||t(s)},[b,d,t]),ue=T.useCallback((a,s)=>{s.disabled||u==null||u(a,s)},[u]),z=({node:a,level:s,isLast:o=!1,parentIsLast:c=!1})=>{const V=a.children&&a.children.length>0,E=b.includes(a.id),me=L.includes(a.id);return e.jsxs("div",{className:"relative",children:[h&&s>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute border-gray-300 border-l border-b",style:{left:(s-1)*W+8,top:0,width:12,height:"50%"}}),!c&&e.jsx("div",{className:"absolute border-gray-300 border-l",style:{left:(s-1)*W+8,top:0,bottom:o?"50%":0}})]}),e.jsxs("div",{className:x("flex items-center cursor-pointer transition-colors duration-200",xe[re],{"hover:bg-gray-100":!a.disabled&&S==="default","bg-blue-50 text-blue-700":me&&!a.disabled,"text-gray-400 cursor-not-allowed":a.disabled,"px-2 rounded":S==="default"}),style:{paddingLeft:s*W},onClick:()=>ue(a.id,a),children:[e.jsx("div",{className:"flex items-center justify-center w-6 h-6 mr-1",children:V?e.jsx("button",{className:x("p-1 rounded hover:bg-gray-200 transition-colors duration-200",{"text-gray-400":a.disabled}),onClick:f=>{f.stopPropagation(),a.disabled||pe(a.id)},disabled:a.disabled,"aria-expanded":E,children:e.jsx(he,{isExpanded:E})}):h&&e.jsx("div",{className:"w-4 h-4"})}),a.icon&&e.jsx("div",{className:x("flex-shrink-0 mr-2",{"text-gray-400":a.disabled}),children:a.icon}),e.jsx("span",{className:"truncate select-none",children:a.label})]}),V&&E&&e.jsx("div",{children:a.children.map((f,be)=>e.jsx(z,{node:f,level:s+1,isLast:be===a.children.length-1,parentIsLast:o},f.id))})]},a.id)};return e.jsx("div",{className:x("tree-component",{"border border-gray-200 rounded-lg p-2":S==="default"},te),role:"tree","aria-multiselectable":m,...de,children:i.map((a,s)=>e.jsx(z,{node:a,level:0,isLast:s===i.length-1},a.id))})};try{k.displayName="Tree",k.__docgenInfo={description:"",displayName:"Tree",props:{data:{defaultValue:null,description:"Tree data",name:"data",required:!0,type:{name:"TreeNode[]"}},selectedIds:{defaultValue:{value:"[]"},description:"Selected node IDs",name:"selectedIds",required:!1,type:{name:"string[]"}},expandedIds:{defaultValue:null,description:"Expanded node IDs (controlled)",name:"expandedIds",required:!1,type:{name:"string[]"}},defaultExpandedIds:{defaultValue:{value:"[]"},description:"Default expanded node IDs",name:"defaultExpandedIds",required:!1,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"Callback when node is selected",name:"onSelect",required:!1,type:{name:"((nodeId: string, node: TreeNode) => void)"}},onExpandedChange:{defaultValue:null,description:"Callback when node expansion changes",name:"onExpandedChange",required:!1,type:{name:"((expandedIds: string[]) => void)"}},multiSelect:{defaultValue:{value:"false"},description:"Whether multiple selection is allowed",name:"multiSelect",required:!1,type:{name:"boolean"}},showLines:{defaultValue:{value:"false"},description:"Whether to show connecting lines",name:"showLines",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'}]}},indent:{defaultValue:{value:"20"},description:"Indentation per level in pixels",name:"indent",required:!1,type:{name:"number"}}}}}catch{}const Ie={title:"Navigation/Tree",component:k,parameters:{layout:"centered"},tags:["autodocs"]},l=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),n=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),p=[{id:"root",label:"Project Root",icon:e.jsx(l,{}),defaultExpanded:!0,children:[{id:"src",label:"src",icon:e.jsx(l,{}),children:[{id:"components",label:"components",icon:e.jsx(l,{}),children:[{id:"button",label:"Button.tsx",icon:e.jsx(n,{})},{id:"input",label:"Input.tsx",icon:e.jsx(n,{})},{id:"modal",label:"Modal.tsx",icon:e.jsx(n,{})}]},{id:"utils",label:"utils",icon:e.jsx(l,{}),children:[{id:"helpers",label:"helpers.ts",icon:e.jsx(n,{})},{id:"constants",label:"constants.ts",icon:e.jsx(n,{})}]},{id:"app",label:"App.tsx",icon:e.jsx(n,{})},{id:"main",label:"main.tsx",icon:e.jsx(n,{})}]},{id:"public",label:"public",icon:e.jsx(l,{}),children:[{id:"index",label:"index.html",icon:e.jsx(n,{})},{id:"favicon",label:"favicon.ico",icon:e.jsx(n,{})}]},{id:"package",label:"package.json",icon:e.jsx(n,{})},{id:"readme",label:"README.md",icon:e.jsx(n,{})}]}],r=i=>{const[L,d]=C.useState([]),[w,u]=C.useState([]);return e.jsx("div",{className:"w-80",children:e.jsx(k,{...i,selectedIds:L,expandedIds:w,onSelect:t=>{i.multiSelect?d(m=>m.includes(t)?m.filter(h=>h!==t):[...m,t]):d([t])},onExpandedChange:u})})},j={render:()=>e.jsx(r,{data:p})},v={render:()=>e.jsx(r,{data:p,showLines:!0})},g={render:()=>e.jsx(r,{data:p,multiSelect:!0})},I={render:()=>e.jsx(r,{data:p,variant:"minimal"})},F={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 font-semibold",children:"Small"}),e.jsx(r,{data:p,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 font-semibold",children:"Medium"}),e.jsx(r,{data:p,size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 font-semibold",children:"Large"}),e.jsx(r,{data:p,size:"lg"})]})]})},D={render:()=>{const i=[{id:"folder1",label:"Available Folder",icon:e.jsx(l,{}),children:[{id:"file1",label:"Available File",icon:e.jsx(n,{})},{id:"file2",label:"Disabled File",icon:e.jsx(n,{}),disabled:!0}]},{id:"folder2",label:"Disabled Folder",icon:e.jsx(l,{}),disabled:!0,children:[{id:"file3",label:"Nested File",icon:e.jsx(n,{})}]}];return e.jsx(r,{data:i})}},N={render:()=>{const i=[{id:"level1",label:"Level 1",icon:e.jsx(l,{}),defaultExpanded:!0,children:[{id:"level2",label:"Level 2",icon:e.jsx(l,{}),children:[{id:"level3",label:"Level 3",icon:e.jsx(l,{}),children:[{id:"level4",label:"Level 4",icon:e.jsx(l,{}),children:[{id:"deep-file",label:"Deep File",icon:e.jsx(n,{})}]}]}]}]}];return e.jsx(r,{data:i,showLines:!0})}},y={render:()=>{const i=[{id:"documents",label:"Documents",icon:e.jsx(l,{}),children:[{id:"resume",label:"Resume.pdf",icon:e.jsx(n,{})},{id:"cover-letter",label:"Cover Letter.docx",icon:e.jsx(n,{})},{id:"projects",label:"Projects",icon:e.jsx(l,{}),children:[{id:"project1",label:"Website Redesign.zip",icon:e.jsx(n,{})},{id:"project2",label:"Mobile App.sketch",icon:e.jsx(n,{})}]}]},{id:"images",label:"Images",icon:e.jsx(l,{}),children:[{id:"vacation",label:"Vacation Photos",icon:e.jsx(l,{})},{id:"work",label:"Work Screenshots",icon:e.jsx(l,{})},{id:"avatar",label:"avatar.png",icon:e.jsx(n,{})}]},{id:"downloads",label:"Downloads",icon:e.jsx(l,{}),children:[{id:"installer",label:"installer.dmg",icon:e.jsx(n,{})},{id:"archive",label:"backup.zip",icon:e.jsx(n,{})}]}];return e.jsx(r,{data:i,variant:"minimal"})}};var M,q,_;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <TreeWrapper data={sampleData} />
}`,...(_=(q=j.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var R,A,P;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <TreeWrapper data={sampleData} showLines />
}`,...(P=(A=v.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var B,H,O;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <TreeWrapper data={sampleData} multiSelect />
}`,...(O=(H=g.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,J,K;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <TreeWrapper data={sampleData} variant="minimal" />
}`,...(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=F.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ne;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,ie,se;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Fe=["Default","WithLines","MultiSelect","Minimal","Sizes","WithDisabledNodes","DeepNesting","FileExplorer"];export{N as DeepNesting,j as Default,y as FileExplorer,I as Minimal,g as MultiSelect,F as Sizes,D as WithDisabledNodes,v as WithLines,Fe as __namedExportsOrder,Ie as default};
