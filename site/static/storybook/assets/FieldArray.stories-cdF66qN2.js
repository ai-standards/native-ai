import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as c,r as I}from"./index-DHZDe_v1.js";import{E as Ve}from"./ErrorMessage-DYjD2rVY.js";import{F as u}from"./FormField-Cz7N3dx5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./HelperText-BSqHZUf_.js";let B=1;const f=c.forwardRef(({name:o,value:t=[],onChange:d,children:l,min:n=0,max:g=1/0,addButtonText:ue="Add Item",removeButtonText:ce="Remove",showAddButton:T=!0,showRemoveButtons:pe=!0,className:fe="",createItem:v=()=>({}),validate:S,error:ye,disabled:s=!1,sortable:p=!1,...be},ge)=>{const[xe,ve]=c.useState(()=>t.length>0?t:n>0?Array.from({length:n},()=>({id:`item-${B++}`,...v()})):[]),[k,q]=c.useState(null),[ke,Ne]=c.useState(),i=t.length>0?t:xe,he=ye||ke,N=c.useCallback(r=>{if(S){const a=S(r);return Ne(a),a}},[S]),y=c.useCallback(r=>{N(r)||(ve(r),d==null||d(r))},[d,N]),x=c.useMemo(()=>({add:()=>{if(i.length>=g||s)return;const r={id:`item-${B++}`,...v()};y([...i,r])},remove:r=>{if(i.length<=n||s)return;const a=i.filter((m,b)=>b!==r);y(a)},move:(r,a)=>{if(s)return;const m=[...i],[b]=m.splice(r,1);m.splice(a,0,b),y(m)},insert:(r,a)=>{if(i.length>=g||s)return;const m={id:`item-${B++}`,...v(),...a},b=[...i];b.splice(r,0,m),y(b)},replace:(r,a)=>{if(s)return;const m=[...i];m[r]=a,y(m)}}),[i,g,n,s,v,y]),Fe=c.useCallback((r,a)=>{!p||s||(q(a),r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/html",r.currentTarget.outerHTML))},[p,s]),De=c.useCallback(r=>{!p||s||(r.preventDefault(),r.dataTransfer.dropEffect="move")},[p,s]),je=c.useCallback((r,a)=>{!p||s||k===null||(r.preventDefault(),x.move(k,a),q(null))},[p,s,k,x]);c.useEffect(()=>{t!==i&&N(i)},[i,N,t]);const M=i.length<g&&!s,Ae=r=>i.length>n&&!s;return e.jsxDEV("div",{ref:ge,className:`space-y-3 ${fe}`,...be,children:[i.map((r,a)=>e.jsxDEV("div",{className:`
              relative border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800
              ${p&&!s?"cursor-move":""}
              ${k===a?"opacity-50":""}
            `,draggable:p&&!s,onDragStart:m=>Fe(m,a),onDragOver:De,onDrop:m=>je(m,a),children:[p&&!s&&e.jsxDEV("div",{className:"absolute top-2 left-2 text-gray-400",children:e.jsxDEV("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:190,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:189,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:188,columnNumber:15},void 0),e.jsxDEV("div",{className:p&&!s?"ml-6":"",children:l(r,a,x)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:195,columnNumber:13},void 0),pe&&Ae()&&e.jsxDEV("button",{type:"button",onClick:()=>x.remove(a),className:"absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 dark:text-gray-500 dark:hover:text-red-400 transition-colors","aria-label":`${ce} item ${a+1}`,children:e.jsxDEV("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:207,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:206,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:200,columnNumber:15},void 0)]},r.id,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:175,columnNumber:11},void 0)),e.jsxDEV(Ve,{message:he},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:214,columnNumber:9},void 0),T&&M&&e.jsxDEV("button",{type:"button",onClick:x.add,className:"w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center gap-2",children:[e.jsxDEV("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:223,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:222,columnNumber:13},void 0),ue]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:217,columnNumber:11},void 0),i.length===0&&n===0&&e.jsxDEV("div",{className:"text-center py-8 text-gray-500 dark:text-gray-400",children:[e.jsxDEV("p",{children:"No items added yet."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:231,columnNumber:13},void 0),T&&M&&e.jsxDEV("p",{className:"text-sm mt-1",children:'Click "Add Item" to get started.'},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:233,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:230,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.tsx",lineNumber:173,columnNumber:7},void 0)});f.displayName="FieldArray";try{f.displayName="FieldArray",f.__docgenInfo={description:"",displayName:"FieldArray",props:{name:{defaultValue:null,description:"Field name for form integration",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:"[]"},description:"Array of items to render",name:"value",required:!1,type:{name:"FieldArrayItem[]"}},onChange:{defaultValue:null,description:"Callback when array changes",name:"onChange",required:!1,type:{name:"((value: FieldArrayItem[]) => void)"}},children:{defaultValue:null,description:"Render function for each item",name:"children",required:!0,type:{name:"(item: FieldArrayItem, index: number, helpers: FieldArrayHelpers) => ReactNode"}},min:{defaultValue:{value:"0"},description:"Minimum number of items",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Maximum number of items",name:"max",required:!1,type:{name:"number"}},addButtonText:{defaultValue:{value:"Add Item"},description:"Add button text",name:"addButtonText",required:!1,type:{name:"string"}},removeButtonText:{defaultValue:{value:"Remove"},description:"Remove button text",name:"removeButtonText",required:!1,type:{name:"string"}},showAddButton:{defaultValue:{value:"true"},description:"Show add button",name:"showAddButton",required:!1,type:{name:"boolean"}},showRemoveButtons:{defaultValue:{value:"true"},description:"Show remove buttons",name:"showRemoveButtons",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS class names",name:"className",required:!1,type:{name:"string"}},createItem:{defaultValue:{value:"() => ({})"},description:"Factory function for new items",name:"createItem",required:!1,type:{name:"(() => Partial<FieldArrayItem>)"}},validate:{defaultValue:null,description:"Validation function",name:"validate",required:!1,type:{name:"((items: FieldArrayItem[]) => string)"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Array is disabled",name:"disabled",required:!1,type:{name:"boolean"}},sortable:{defaultValue:{value:"false"},description:"Enable drag and drop reordering",name:"sortable",required:!1,type:{name:"boolean"}}}}}catch{}const Be={title:"Form/FieldArray",component:f,parameters:{layout:"padded",docs:{description:{component:"Dynamic form arrays for repeatable fields with add/remove functionality, validation, and optional drag-and-drop sorting."}}}},C=(o,t,d)=>e.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxDEV(u,{label:"Name",required:!0,children:e.jsxDEV("input",{type:"text",defaultValue:o.name||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Contact name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:25,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:24,columnNumber:5},void 0),e.jsxDEV(u,{label:"Email",required:!0,children:e.jsxDEV("input",{type:"email",defaultValue:o.email||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"contact@example.com"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:33,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:32,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:23,columnNumber:3},void 0),h={args:{children:C,addButtonText:"Add Contact",removeButtonText:"Remove Contact"}},F={args:{value:[{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"}],children:C,addButtonText:"Add Contact"}},D={args:{min:1,max:3,children:C,addButtonText:"Add Contact (Max 3)"}},j={render:()=>{const[o,t]=I.useState([{id:"1",task:"Review documents",priority:"High"},{id:"2",task:"Update website",priority:"Medium"},{id:"3",task:"Call clients",priority:"Low"}]),d=(l,n)=>e.jsxDEV("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxDEV(u,{label:"Task",children:e.jsxDEV("input",{type:"text",defaultValue:l.task||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Task description"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:82,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:81,columnNumber:9},void 0),e.jsxDEV(u,{label:"Priority",children:e.jsxDEV("select",{defaultValue:l.priority||"Medium",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",children:[e.jsxDEV("option",{children:"High"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:94,columnNumber:13},void 0),e.jsxDEV("option",{children:"Medium"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:95,columnNumber:13},void 0),e.jsxDEV("option",{children:"Low"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:96,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:90,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:89,columnNumber:9},void 0),e.jsxDEV("div",{className:"flex items-end",children:e.jsxDEV("span",{className:"text-sm text-gray-500 pb-2",children:["Item #",n+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:100,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:99,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:80,columnNumber:7},void 0);return e.jsxDEV(f,{value:o,onChange:t,sortable:!0,addButtonText:"Add Task",children:d},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:106,columnNumber:7},void 0)}},A={render:()=>{const[o,t]=I.useState([]),d=n=>{if(n.length===0)return"At least one skill is required";if(n.length>5)return"Maximum 5 skills allowed"},l=(n,g)=>e.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxDEV(u,{label:"Skill Name",required:!0,children:e.jsxDEV("input",{type:"text",defaultValue:n.skill||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"e.g., JavaScript"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:131,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:130,columnNumber:9},void 0),e.jsxDEV(u,{label:"Experience Level",children:e.jsxDEV("select",{defaultValue:n.level||"Beginner",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",children:[e.jsxDEV("option",{children:"Beginner"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:143,columnNumber:13},void 0),e.jsxDEV("option",{children:"Intermediate"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:144,columnNumber:13},void 0),e.jsxDEV("option",{children:"Advanced"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:145,columnNumber:13},void 0),e.jsxDEV("option",{children:"Expert"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:146,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:139,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:138,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:129,columnNumber:7},void 0);return e.jsxDEV(f,{value:o,onChange:t,validate:d,addButtonText:"Add Skill",min:1,max:5,children:l},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:153,columnNumber:7},void 0)}},V={render:()=>{const[o,t]=I.useState([{id:"1",value:"Apple"},{id:"2",value:"Banana"},{id:"3",value:"Cherry"}]),d=(l,n)=>e.jsxDEV(u,{label:`Item ${n+1}`,children:e.jsxDEV("input",{type:"text",defaultValue:l.value||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Enter item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:177,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:176,columnNumber:7},void 0);return e.jsxDEV(f,{value:o,onChange:t,addButtonText:"Add Item",sortable:!0,createItem:()=>({value:""}),children:d},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:187,columnNumber:7},void 0)}},E={args:{value:[{id:"1",name:"Required Field 1",value:"Cannot be removed"},{id:"2",name:"Required Field 2",value:"Cannot be removed"}],showAddButton:!1,showRemoveButtons:!1,children:(o,t)=>e.jsxDEV(u,{label:o.name,children:e.jsxDEV("input",{type:"text",defaultValue:o.value||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",readOnly:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:210,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:209,columnNumber:7},void 0)}},w={args:{value:[{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"}],disabled:!0,children:C}},U={render:()=>{const[o,t]=I.useState([{id:"1",company:"Tech Corp",position:"Developer",startYear:"2020",endYear:"2023",description:"Full-stack development"}]),d=(l,n)=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h4",{className:"font-medium text-gray-900 dark:text-gray-100",children:["Experience #",n+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:247,columnNumber:9},void 0),e.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxDEV(u,{label:"Company",required:!0,children:e.jsxDEV("input",{type:"text",defaultValue:l.company||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Company name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:252,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:251,columnNumber:11},void 0),e.jsxDEV(u,{label:"Position",required:!0,children:e.jsxDEV("input",{type:"text",defaultValue:l.position||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Job title"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:260,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:259,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:250,columnNumber:9},void 0),e.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxDEV(u,{label:"Start Year",children:e.jsxDEV("input",{type:"number",defaultValue:l.startYear||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"2020",min:"1990",max:"2030"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:270,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:269,columnNumber:11},void 0),e.jsxDEV(u,{label:"End Year",children:e.jsxDEV("input",{type:"number",defaultValue:l.endYear||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"2023",min:"1990",max:"2030"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:280,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:279,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:268,columnNumber:9},void 0),e.jsxDEV(u,{label:"Description",children:e.jsxDEV("textarea",{defaultValue:l.description||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none",rows:3,placeholder:"Describe your role and responsibilities"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:291,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:290,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:246,columnNumber:7},void 0);return e.jsxDEV("div",{className:"max-w-2xl",children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Work Experience"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:303,columnNumber:9},void 0),e.jsxDEV(f,{value:o,onChange:t,addButtonText:"Add Experience",sortable:!0,min:1,children:d},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:304,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/fieldarray/FieldArray.stories.tsx",lineNumber:302,columnNumber:7},void 0)}};var R,L,J;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: ContactField,
    addButtonText: 'Add Contact',
    removeButtonText: 'Remove Contact'
  }
}`,...(J=(L=h.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var Y,_,H;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    }, {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com'
    }],
    children: ContactField,
    addButtonText: 'Add Contact'
  }
}`,...(H=(_=F.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var W,$,z;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 3,
    children: ContactField,
    addButtonText: 'Add Contact (Max 3)'
  }
}`,...(z=($=D.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var O,P,G;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<FieldArrayItem[]>([{
      id: '1',
      task: 'Review documents',
      priority: 'High'
    }, {
      id: '2',
      task: 'Update website',
      priority: 'Medium'
    }, {
      id: '3',
      task: 'Call clients',
      priority: 'Low'
    }]);
    const TaskField = (item: FieldArrayItem, index: number) => <div className="grid grid-cols-3 gap-4">
        <FormField label="Task">
          <input type="text" defaultValue={item.task || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Task description" />
        </FormField>
        <FormField label="Priority">
          <select defaultValue={item.priority || 'Medium'} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </FormField>
        <div className="flex items-end">
          <span className="text-sm text-gray-500 pb-2">Item #{index + 1}</span>
        </div>
      </div>;
    return <FieldArray value={items} onChange={setItems} sortable addButtonText="Add Task">
        {TaskField}
      </FieldArray>;
  }
}`,...(G=(P=j.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var K,Q,X;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<FieldArrayItem[]>([]);
    const validate = (items: FieldArrayItem[]) => {
      if (items.length === 0) return 'At least one skill is required';
      if (items.length > 5) return 'Maximum 5 skills allowed';
      return undefined;
    };
    const SkillField = (item: FieldArrayItem, index: number) => <div className="grid grid-cols-2 gap-4">
        <FormField label="Skill Name" required>
          <input type="text" defaultValue={item.skill || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="e.g., JavaScript" />
        </FormField>
        <FormField label="Experience Level">
          <select defaultValue={item.level || 'Beginner'} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Expert</option>
          </select>
        </FormField>
      </div>;
    return <FieldArray value={items} onChange={setItems} validate={validate} addButtonText="Add Skill" min={1} max={5}>
        {SkillField}
      </FieldArray>;
  }
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<FieldArrayItem[]>([{
      id: '1',
      value: 'Apple'
    }, {
      id: '2',
      value: 'Banana'
    }, {
      id: '3',
      value: 'Cherry'
    }]);
    const ListItemField = (item: FieldArrayItem, index: number) => <FormField label={\`Item \${index + 1}\`}>
        <input type="text" defaultValue={item.value || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Enter item" />
      </FormField>;
    return <FieldArray value={items} onChange={setItems} addButtonText="Add Item" sortable createItem={() => ({
      value: ''
    })}>
        {ListItemField}
      </FieldArray>;
  }
}`,...(re=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,se;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      name: 'Required Field 1',
      value: 'Cannot be removed'
    }, {
      id: '2',
      name: 'Required Field 2',
      value: 'Cannot be removed'
    }],
    showAddButton: false,
    showRemoveButtons: false,
    children: (item: FieldArrayItem, index: number) => <FormField label={item.name}>
        <input type="text" defaultValue={item.value || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" readOnly />
      </FormField>
  }
}`,...(se=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ie,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    }, {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com'
    }],
    disabled: true,
    children: ContactField
  }
}`,...(oe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,de,me;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [experiences, setExperiences] = useState<FieldArrayItem[]>([{
      id: '1',
      company: 'Tech Corp',
      position: 'Developer',
      startYear: '2020',
      endYear: '2023',
      description: 'Full-stack development'
    }]);
    const ExperienceField = (item: FieldArrayItem, index: number) => <div className="space-y-4">
        <h4 className="font-medium text-gray-900 dark:text-gray-100">
          Experience #{index + 1}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Company" required>
            <input type="text" defaultValue={item.company || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Company name" />
          </FormField>
          <FormField label="Position" required>
            <input type="text" defaultValue={item.position || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Job title" />
          </FormField>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Start Year">
            <input type="number" defaultValue={item.startYear || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="2020" min="1990" max="2030" />
          </FormField>
          <FormField label="End Year">
            <input type="number" defaultValue={item.endYear || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="2023" min="1990" max="2030" />
          </FormField>
        </div>
        <FormField label="Description">
          <textarea defaultValue={item.description || ''} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none" rows={3} placeholder="Describe your role and responsibilities" />
        </FormField>
      </div>;
    return <div className="max-w-2xl">
        <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
        <FieldArray value={experiences} onChange={setExperiences} addButtonText="Add Experience" sortable min={1}>
          {ExperienceField}
        </FieldArray>
      </div>;
  }
}`,...(me=(de=U.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Te=["Default","WithInitialItems","WithMinMax","Sortable","WithValidation","SimpleList","NoAddRemove","Disabled","ComplexForm"];export{U as ComplexForm,h as Default,w as Disabled,E as NoAddRemove,V as SimpleList,j as Sortable,F as WithInitialItems,D as WithMinMax,A as WithValidation,Te as __namedExportsOrder,Be as default};
