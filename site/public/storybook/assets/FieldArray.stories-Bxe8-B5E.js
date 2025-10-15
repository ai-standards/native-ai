import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as m,r as B}from"./index-BwDkhjyp.js";import{E as Ie}from"./ErrorMessage-BhI4OYJy.js";import{F as c}from"./FormField-CB1ucDWs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./HelperText-DV78KzMO.js";let q=1;const g=m.forwardRef(({name:l,value:d=[],onChange:i,children:s,min:t=0,max:f=1/0,addButtonText:ce="Add Item",removeButtonText:me="Remove",showAddButton:D=!0,showRemoveButtons:pe=!0,className:ge="",createItem:h=()=>({}),validate:E,error:xe,disabled:n=!1,sortable:p=!1,...be},fe)=>{const[ye,he]=m.useState(()=>d.length>0?d:t>0?Array.from({length:t},()=>({id:`item-${q++}`,...h()})):[]),[v,M]=m.useState(null),[ve,ke]=m.useState(),o=d.length>0?d:ye,Fe=xe||ve,k=m.useCallback(r=>{if(E){const a=E(r);return ke(a),a}},[E]),x=m.useCallback(r=>{k(r)||(he(r),i==null||i(r))},[i,k]),y=m.useMemo(()=>({add:()=>{if(o.length>=f||n)return;const r={id:`item-${q++}`,...h()};x([...o,r])},remove:r=>{if(o.length<=t||n)return;const a=o.filter((u,b)=>b!==r);x(a)},move:(r,a)=>{if(n)return;const u=[...o],[b]=u.splice(r,1);u.splice(a,0,b),x(u)},insert:(r,a)=>{if(o.length>=f||n)return;const u={id:`item-${q++}`,...h(),...a},b=[...o];b.splice(r,0,u),x(b)},replace:(r,a)=>{if(n)return;const u=[...o];u[r]=a,x(u)}}),[o,f,t,n,h,x]),we=m.useCallback((r,a)=>{!p||n||(M(a),r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/html",r.currentTarget.outerHTML))},[p,n]),je=m.useCallback(r=>{!p||n||(r.preventDefault(),r.dataTransfer.dropEffect="move")},[p,n]),Ne=m.useCallback((r,a)=>{!p||n||v===null||(r.preventDefault(),y.move(v,a),M(null))},[p,n,v,y]);m.useEffect(()=>{d!==o&&k(o)},[o,k,d]);const R=o.length<f&&!n,Ae=r=>o.length>t&&!n;return e.jsxs("div",{ref:fe,className:`space-y-3 ${ge}`,...be,children:[o.map((r,a)=>e.jsxs("div",{className:`
              relative border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800
              ${p&&!n?"cursor-move":""}
              ${v===a?"opacity-50":""}
            `,draggable:p&&!n,onDragStart:u=>we(u,a),onDragOver:je,onDrop:u=>Ne(u,a),children:[p&&!n&&e.jsx("div",{className:"absolute top-2 left-2 text-gray-400",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})})}),e.jsx("div",{className:p&&!n?"ml-6":"",children:s(r,a,y)}),pe&&Ae()&&e.jsx("button",{type:"button",onClick:()=>y.remove(a),className:"absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 dark:text-gray-500 dark:hover:text-red-400 transition-colors","aria-label":`${me} item ${a+1}`,children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},r.id)),e.jsx(Ie,{message:Fe}),D&&R&&e.jsxs("button",{type:"button",onClick:y.add,className:"w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),ce]}),o.length===0&&t===0&&e.jsxs("div",{className:"text-center py-8 text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"No items added yet."}),D&&R&&e.jsx("p",{className:"text-sm mt-1",children:'Click "Add Item" to get started.'})]})]})});g.displayName="FieldArray";try{g.displayName="FieldArray",g.__docgenInfo={description:"",displayName:"FieldArray",props:{name:{defaultValue:null,description:"Field name for form integration",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:"[]"},description:"Array of items to render",name:"value",required:!1,type:{name:"FieldArrayItem[]"}},onChange:{defaultValue:null,description:"Callback when array changes",name:"onChange",required:!1,type:{name:"((value: FieldArrayItem[]) => void)"}},children:{defaultValue:null,description:"Render function for each item",name:"children",required:!0,type:{name:"(item: FieldArrayItem, index: number, helpers: FieldArrayHelpers) => ReactNode"}},min:{defaultValue:{value:"0"},description:"Minimum number of items",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Maximum number of items",name:"max",required:!1,type:{name:"number"}},addButtonText:{defaultValue:{value:"Add Item"},description:"Add button text",name:"addButtonText",required:!1,type:{name:"string"}},removeButtonText:{defaultValue:{value:"Remove"},description:"Remove button text",name:"removeButtonText",required:!1,type:{name:"string"}},showAddButton:{defaultValue:{value:"true"},description:"Show add button",name:"showAddButton",required:!1,type:{name:"boolean"}},showRemoveButtons:{defaultValue:{value:"true"},description:"Show remove buttons",name:"showRemoveButtons",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS class names",name:"className",required:!1,type:{name:"string"}},createItem:{defaultValue:{value:"() => ({})"},description:"Factory function for new items",name:"createItem",required:!1,type:{name:"(() => Partial<FieldArrayItem>)"}},validate:{defaultValue:null,description:"Validation function",name:"validate",required:!1,type:{name:"((items: FieldArrayItem[]) => string)"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Array is disabled",name:"disabled",required:!1,type:{name:"boolean"}},sortable:{defaultValue:{value:"false"},description:"Enable drag and drop reordering",name:"sortable",required:!1,type:{name:"boolean"}}}}}catch{}const qe={title:"Form/FieldArray",component:g,parameters:{layout:"padded",docs:{description:{component:"Dynamic form arrays for repeatable fields with add/remove functionality, validation, and optional drag-and-drop sorting."}}}},T=(l,d,i)=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Name",required:!0,children:e.jsx("input",{type:"text",defaultValue:l.name||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Contact name"})}),e.jsx(c,{label:"Email",required:!0,children:e.jsx("input",{type:"email",defaultValue:l.email||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"contact@example.com"})})]}),F={args:{children:T,addButtonText:"Add Contact",removeButtonText:"Remove Contact"}},w={args:{value:[{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"}],children:T,addButtonText:"Add Contact"}},j={args:{min:1,max:3,children:T,addButtonText:"Add Contact (Max 3)"}},N={render:()=>{const[l,d]=B.useState([{id:"1",task:"Review documents",priority:"High"},{id:"2",task:"Update website",priority:"Medium"},{id:"3",task:"Call clients",priority:"Low"}]),i=(s,t)=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(c,{label:"Task",children:e.jsx("input",{type:"text",defaultValue:s.task||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Task description"})}),e.jsx(c,{label:"Priority",children:e.jsxs("select",{defaultValue:s.priority||"Medium",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",children:[e.jsx("option",{children:"High"}),e.jsx("option",{children:"Medium"}),e.jsx("option",{children:"Low"})]})}),e.jsx("div",{className:"flex items-end",children:e.jsxs("span",{className:"text-sm text-gray-500 pb-2",children:["Item #",t+1]})})]});return e.jsx(g,{value:l,onChange:d,sortable:!0,addButtonText:"Add Task",children:i})}},A={render:()=>{const[l,d]=B.useState([]),i=t=>{if(t.length===0)return"At least one skill is required";if(t.length>5)return"Maximum 5 skills allowed"},s=(t,f)=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Skill Name",required:!0,children:e.jsx("input",{type:"text",defaultValue:t.skill||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"e.g., JavaScript"})}),e.jsx(c,{label:"Experience Level",children:e.jsxs("select",{defaultValue:t.level||"Beginner",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",children:[e.jsx("option",{children:"Beginner"}),e.jsx("option",{children:"Intermediate"}),e.jsx("option",{children:"Advanced"}),e.jsx("option",{children:"Expert"})]})})]});return e.jsx(g,{value:l,onChange:d,validate:i,addButtonText:"Add Skill",min:1,max:5,children:s})}},I={render:()=>{const[l,d]=B.useState([{id:"1",value:"Apple"},{id:"2",value:"Banana"},{id:"3",value:"Cherry"}]),i=(s,t)=>e.jsx(c,{label:`Item ${t+1}`,children:e.jsx("input",{type:"text",defaultValue:s.value||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Enter item"})});return e.jsx(g,{value:l,onChange:d,addButtonText:"Add Item",sortable:!0,createItem:()=>({value:""}),children:i})}},C={args:{value:[{id:"1",name:"Required Field 1",value:"Cannot be removed"},{id:"2",name:"Required Field 2",value:"Cannot be removed"}],showAddButton:!1,showRemoveButtons:!1,children:(l,d)=>e.jsx(c,{label:l.name,children:e.jsx("input",{type:"text",defaultValue:l.value||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",readOnly:!0})})}},S={args:{value:[{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"}],disabled:!0,children:T}},V={render:()=>{const[l,d]=B.useState([{id:"1",company:"Tech Corp",position:"Developer",startYear:"2020",endYear:"2023",description:"Full-stack development"}]),i=(s,t)=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h4",{className:"font-medium text-gray-900 dark:text-gray-100",children:["Experience #",t+1]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Company",required:!0,children:e.jsx("input",{type:"text",defaultValue:s.company||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Company name"})}),e.jsx(c,{label:"Position",required:!0,children:e.jsx("input",{type:"text",defaultValue:s.position||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"Job title"})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Start Year",children:e.jsx("input",{type:"number",defaultValue:s.startYear||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"2020",min:"1990",max:"2030"})}),e.jsx(c,{label:"End Year",children:e.jsx("input",{type:"number",defaultValue:s.endYear||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"2023",min:"1990",max:"2030"})})]}),e.jsx(c,{label:"Description",children:e.jsx("textarea",{defaultValue:s.description||"",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none",rows:3,placeholder:"Describe your role and responsibilities"})})]});return e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Work Experience"}),e.jsx(g,{value:l,onChange:d,addButtonText:"Add Experience",sortable:!0,min:1,children:i})]})}};var L,J,Y;F.parameters={...F.parameters,docs:{...(L=F.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: ContactField,
    addButtonText: 'Add Contact',
    removeButtonText: 'Remove Contact'
  }
}`,...(Y=(J=F.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var _,H,W;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(H=w.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var $,z,O;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 3,
    children: ContactField,
    addButtonText: 'Add Contact (Max 3)'
  }
}`,...(O=(z=j.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var P,U,G;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(U=N.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var K,Q,X;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var de,oe,le;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(le=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ie,ue;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ue=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const De=["Default","WithInitialItems","WithMinMax","Sortable","WithValidation","SimpleList","NoAddRemove","Disabled","ComplexForm"];export{V as ComplexForm,F as Default,S as Disabled,C as NoAddRemove,I as SimpleList,N as Sortable,w as WithInitialItems,j as WithMinMax,A as WithValidation,De as __namedExportsOrder,qe as default};
