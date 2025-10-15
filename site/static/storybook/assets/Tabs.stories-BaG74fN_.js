import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as f,R as X}from"./index-BwDkhjyp.js";import{c as T}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const W=f.createContext(void 0),C=()=>{const a=f.useContext(W);if(!a)throw new Error("Tab components must be used within a TabGroup");return a},i=({children:a,defaultValue:t="",value:n,onValueChange:l,variant:c="default",size:j="md",className:y})=>{const[N,S]=f.useState(t),d=n!==void 0?n:N,P=f.useCallback(u=>{n===void 0&&S(u),l==null||l(u)},[n,l]),w={activeTab:d,setActiveTab:P,variant:c,size:j};return e.jsx(W.Provider,{value:w,children:e.jsx("div",{className:T("w-full h-full flex flex-col",y),children:a})})},o=({children:a,className:t})=>{const{variant:n}=C(),l={default:"border-b border-gray-200",pills:"bg-gray-100 p-1 rounded-lg",underline:"border-b border-gray-200"};return e.jsx("div",{className:T("flex flex-shrink-0",l[n],t),role:"tablist",children:a})},s=({value:a,children:t,disabled:n=!1,className:l,...c})=>{const{activeTab:j,setActiveTab:y,variant:N,size:S}=C(),d=j===a,P=()=>{n||y(a)},w="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",u={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},A={default:{base:"border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300",active:"text-blue-600 border-blue-600",inactive:"text-gray-500"},pills:{base:"rounded-md hover:bg-white hover:shadow-sm",active:"bg-white shadow-sm text-gray-900",inactive:"text-gray-600"},underline:{base:"border-b-2 border-transparent hover:border-gray-300",active:"border-blue-500 text-blue-600",inactive:"text-gray-700"}}[N];return e.jsx("button",{role:"tab","aria-selected":d,"aria-controls":`tabpanel-${a}`,id:`tab-${a}`,tabIndex:d?0:-1,className:T(w,u[S],A.base,d?A.active:A.inactive,l),onClick:P,disabled:n,...c,children:t})},r=({value:a,children:t,className:n})=>{const{activeTab:l}=C();return l===a?e.jsx("div",{role:"tabpanel",id:`tabpanel-${a}`,"aria-labelledby":`tab-${a}`,tabIndex:0,className:T("mt-4 flex-1 overflow-auto focus:outline-none",n),children:t}):null};try{i.displayName="TabGroup",i.__docgenInfo={description:"",displayName:"TabGroup",props:{defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"underline"'},{value:'"pills"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{o.displayName="TabsList",o.__docgenInfo={description:"",displayName:"TabsList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{s.displayName="Tab",s.__docgenInfo={description:"",displayName:"Tab",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="TabPanel",r.__docgenInfo={description:"",displayName:"TabPanel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const se={title:"Navigation/Tabs",component:i,parameters:{layout:"centered",docs:{description:{component:"A flexible tabs component with tab groups, individual tabs, and content panels. Supports multiple variants and accessibility features."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pills","underline"],description:"The visual style variant of the tabs"},size:{control:"select",options:["sm","md","lg"],description:"The size of the tabs"},defaultValue:{control:"text",description:"The default active tab value"},onValueChange:{action:"valueChanged",description:"Callback when active tab changes"}},args:{defaultValue:"tab1"}},b={args:{variant:"default",size:"md",defaultValue:"tab1",children:null},render:a=>e.jsxs(i,{...a,children:[e.jsxs(o,{children:[e.jsx(s,{value:"tab1",children:"Overview"}),e.jsx(s,{value:"tab2",children:"Settings"}),e.jsx(s,{value:"tab3",children:"Usage"}),e.jsx(s,{value:"tab4",disabled:!0,children:"Disabled"})]}),e.jsx(r,{value:"tab1",children:e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Overview"}),e.jsx("p",{children:"This is the overview tab content. It provides a general introduction and key information."})]})}),e.jsx(r,{value:"tab2",children:e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Settings"}),e.jsx("p",{children:"Configure your preferences and options here. All settings are saved automatically."})]})}),e.jsx(r,{value:"tab3",children:e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Usage"}),e.jsx("p",{children:"Learn how to use this component effectively in your applications."})]})}),e.jsx(r,{value:"tab4",children:e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Disabled Tab"}),e.jsx("p",{children:"This content is not accessible when the tab is disabled."})]})})]})},p={args:{variant:"pills",size:"md",defaultValue:"features",children:null},render:a=>e.jsxs(i,{...a,children:[e.jsxs(o,{children:[e.jsx(s,{value:"features",children:"Features"}),e.jsx(s,{value:"pricing",children:"Pricing"}),e.jsx(s,{value:"support",children:"Support"})]}),e.jsx(r,{value:"features",children:e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Features"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Accessible tab navigation"}),e.jsx("li",{children:"Multiple visual variants"}),e.jsx("li",{children:"Keyboard navigation support"}),e.jsx("li",{children:"TypeScript support"})]})]})}),e.jsx(r,{value:"pricing",children:e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Pricing"}),e.jsx("p",{children:"Our component library is free and open source. No hidden costs!"})]})}),e.jsx(r,{value:"support",children:e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Support"}),e.jsx("p",{children:"Get help through our documentation, GitHub issues, or community forums."})]})})]})},m={args:{variant:"underline",size:"md",defaultValue:"design",children:null},render:a=>e.jsxs(i,{...a,children:[e.jsxs(o,{children:[e.jsx(s,{value:"design",children:"Design"}),e.jsx(s,{value:"development",children:"Development"}),e.jsx(s,{value:"testing",children:"Testing"})]}),e.jsx(r,{value:"design",children:e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Design Guidelines"}),e.jsx("p",{children:"Follow our design system principles for consistent user interfaces."})]})}),e.jsx(r,{value:"development",children:e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Development Setup"}),e.jsx("p",{children:"Instructions for setting up your development environment."})]})}),e.jsx(r,{value:"testing",children:e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Testing Strategy"}),e.jsx("p",{children:"Best practices for testing your components and applications."})]})})]})},v={args:{variant:"default",size:"sm",defaultValue:"home",children:null},render:a=>e.jsxs(i,{...a,children:[e.jsxs(o,{children:[e.jsx(s,{value:"home",children:"Home"}),e.jsx(s,{value:"profile",children:"Profile"}),e.jsx(s,{value:"messages",children:"Messages"})]}),e.jsx(r,{value:"home",children:e.jsx("div",{className:"p-3 border rounded text-sm",children:e.jsx("p",{children:"Small tabs are perfect for compact interfaces and sidebars."})})}),e.jsx(r,{value:"profile",children:e.jsx("div",{className:"p-3 border rounded text-sm",children:e.jsx("p",{children:"User profile information and settings."})})}),e.jsx(r,{value:"messages",children:e.jsx("div",{className:"p-3 border rounded text-sm",children:e.jsx("p",{children:"View and manage your messages here."})})})]})},h={args:{variant:"default",size:"lg",defaultValue:"dashboard",children:null},render:a=>e.jsxs(i,{...a,children:[e.jsxs(o,{children:[e.jsx(s,{value:"dashboard",children:"Dashboard"}),e.jsx(s,{value:"analytics",children:"Analytics"}),e.jsx(s,{value:"reports",children:"Reports"})]}),e.jsx(r,{value:"dashboard",children:e.jsxs("div",{className:"p-6 border rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Dashboard Overview"}),e.jsx("p",{children:"Large tabs work well for primary navigation in applications."})]})}),e.jsx(r,{value:"analytics",children:e.jsxs("div",{className:"p-6 border rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Analytics"}),e.jsx("p",{children:"Detailed analytics and performance metrics."})]})}),e.jsx(r,{value:"reports",children:e.jsxs("div",{className:"p-6 border rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Reports"}),e.jsx("p",{children:"Generate and view various reports and summaries."})]})})]})},g={args:{variant:"pills",size:"md",children:null},render:a=>{const[t,n]=X.useState("tab1");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>n("tab1"),className:"px-3 py-1 text-sm bg-blue-100 rounded",children:"Switch to Tab 1"}),e.jsx("button",{onClick:()=>n("tab2"),className:"px-3 py-1 text-sm bg-blue-100 rounded",children:"Switch to Tab 2"}),e.jsx("button",{onClick:()=>n("tab3"),className:"px-3 py-1 text-sm bg-blue-100 rounded",children:"Switch to Tab 3"})]}),e.jsxs(i,{...a,value:t,onValueChange:n,children:[e.jsxs(o,{children:[e.jsx(s,{value:"tab1",children:"Tab 1"}),e.jsx(s,{value:"tab2",children:"Tab 2"}),e.jsx(s,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{className:"p-4 border rounded-lg",children:e.jsxs("p",{children:["Content for controlled Tab 1. Active tab: ",t]})})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{className:"p-4 border rounded-lg",children:e.jsxs("p",{children:["Content for controlled Tab 2. Active tab: ",t]})})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{className:"p-4 border rounded-lg",children:e.jsxs("p",{children:["Content for controlled Tab 3. Active tab: ",t]})})})]})]})}},x={args:{variant:"default",size:"md",defaultValue:"long-content",children:null},render:a=>e.jsxs("div",{className:"h-96 border rounded-lg p-4",children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Fixed Height Container (384px)"}),e.jsxs(i,{...a,children:[e.jsxs(o,{children:[e.jsx(s,{value:"long-content",children:"Long Content"}),e.jsx(s,{value:"data-table",children:"Data Table"}),e.jsx(s,{value:"code-editor",children:"Code Editor"})]}),e.jsx(r,{value:"long-content",children:e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Long Scrollable Content"}),e.jsx("p",{children:"This content is longer than the container and will scroll."}),Array.from({length:30},(t,n)=>e.jsxs("div",{className:"p-3 border rounded bg-gray-50",children:[e.jsxs("h4",{className:"font-medium",children:["Section ",n+1]}),e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["This is some content for section ",n+1,". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."]})]},n))]})}),e.jsx(r,{value:"data-table",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold text-lg mb-4",children:"Scrollable Data Table"}),e.jsx("div",{className:"space-y-2",children:Array.from({length:100},(t,n)=>e.jsxs("div",{className:"grid grid-cols-4 gap-4 p-2 border-b text-sm",children:[e.jsxs("span",{children:["Item ",n+1]}),e.jsxs("span",{children:["Category ",n%5+1]}),e.jsxs("span",{children:["$",(Math.random()*100).toFixed(2)]}),e.jsx("span",{className:`px-2 py-1 rounded text-xs ${n%3===0?"bg-green-100 text-green-800":n%3===1?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:n%3===0?"Active":n%3===1?"Pending":"Inactive"})]},n))})]})}),e.jsx(r,{value:"code-editor",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold text-lg mb-4",children:"Code Editor Simulation"}),e.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded text-sm font-mono overflow-x-auto",children:`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 30 fibonacci numbers
const fibNumbers = [];
for (let i = 0; i < 30; i++) {
  fibNumbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:', fibNumbers);

// Additional code to create scrollable content
class DataProcessor {
  constructor(data) {
    this.data = data;
    this.processed = false;
  }

  process() {
    if (this.processed) {
      console.log('Data already processed');
      return this.data;
    }

    console.log('Processing data...');
    const result = this.data.map((item, index) => ({
      id: index,
      value: item,
      processed: true,
      timestamp: new Date().toISOString()
    }));

    this.processed = true;
    return result;
  }

  reset() {
    this.processed = false;
    console.log('Data processor reset');
  }
}

// Example usage
const processor = new DataProcessor(fibNumbers);
const processedData = processor.process();

// More code to demonstrate scrolling...
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Test sorting algorithms
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', testArray);
console.log('Bubble sorted:', bubbleSort([...testArray]));
console.log('Quick sorted:', quickSort([...testArray]));`})]})})]})]})};var _,D,V;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    defaultValue: 'tab1',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Settings</Tab>
        <Tab value="tab3">Usage</Tab>
        <Tab value="tab4" disabled>Disabled</Tab>
      </TabsList>
      <TabPanel value="tab1">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Overview</h3>
          <p>This is the overview tab content. It provides a general introduction and key information.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab2">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p>Configure your preferences and options here. All settings are saved automatically.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab3">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Usage</h3>
          <p>Learn how to use this component effectively in your applications.</p>
        </div>
      </TabPanel>
      <TabPanel value="tab4">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Disabled Tab</h3>
          <p>This content is not accessible when the tab is disabled.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(V=(D=b.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var L,G,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'pills',
    size: 'md',
    defaultValue: 'features',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="features">Features</Tab>
        <Tab value="pricing">Pricing</Tab>
        <Tab value="support">Support</Tab>
      </TabsList>
      <TabPanel value="features">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Accessible tab navigation</li>
            <li>Multiple visual variants</li>
            <li>Keyboard navigation support</li>
            <li>TypeScript support</li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value="pricing">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Pricing</h3>
          <p>Our component library is free and open source. No hidden costs!</p>
        </div>
      </TabPanel>
      <TabPanel value="support">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Support</h3>
          <p>Get help through our documentation, GitHub issues, or community forums.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(k=(G=p.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var q,z,I;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    size: 'md',
    defaultValue: 'design',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="design">Design</Tab>
        <Tab value="development">Development</Tab>
        <Tab value="testing">Testing</Tab>
      </TabsList>
      <TabPanel value="design">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Design Guidelines</h3>
          <p>Follow our design system principles for consistent user interfaces.</p>
        </div>
      </TabPanel>
      <TabPanel value="development">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Development Setup</h3>
          <p>Instructions for setting up your development environment.</p>
        </div>
      </TabPanel>
      <TabPanel value="testing">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Testing Strategy</h3>
          <p>Best practices for testing your components and applications.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(I=(z=m.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var O,F,E;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'sm',
    defaultValue: 'home',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="home">Home</Tab>
        <Tab value="profile">Profile</Tab>
        <Tab value="messages">Messages</Tab>
      </TabsList>
      <TabPanel value="home">
        <div className="p-3 border rounded text-sm">
          <p>Small tabs are perfect for compact interfaces and sidebars.</p>
        </div>
      </TabPanel>
      <TabPanel value="profile">
        <div className="p-3 border rounded text-sm">
          <p>User profile information and settings.</p>
        </div>
      </TabPanel>
      <TabPanel value="messages">
        <div className="p-3 border rounded text-sm">
          <p>View and manage your messages here.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(E=(F=v.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var M,U,R;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg',
    defaultValue: 'dashboard',
    children: null
  },
  render: args => <TabGroup {...args}>
      <TabsList>
        <Tab value="dashboard">Dashboard</Tab>
        <Tab value="analytics">Analytics</Tab>
        <Tab value="reports">Reports</Tab>
      </TabsList>
      <TabPanel value="dashboard">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Dashboard Overview</h3>
          <p>Large tabs work well for primary navigation in applications.</p>
        </div>
      </TabPanel>
      <TabPanel value="analytics">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Analytics</h3>
          <p>Detailed analytics and performance metrics.</p>
        </div>
      </TabPanel>
      <TabPanel value="reports">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Reports</h3>
          <p>Generate and view various reports and summaries.</p>
        </div>
      </TabPanel>
    </TabGroup>
}`,...(R=(U=h.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var $,H,B;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'pills',
    size: 'md',
    children: null
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('tab1');
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('tab1')} className="px-3 py-1 text-sm bg-blue-100 rounded">
            Switch to Tab 1
          </button>
          <button onClick={() => setActiveTab('tab2')} className="px-3 py-1 text-sm bg-blue-100 rounded">
            Switch to Tab 2
          </button>
          <button onClick={() => setActiveTab('tab3')} className="px-3 py-1 text-sm bg-blue-100 rounded">
            Switch to Tab 3
          </button>
        </div>
        
        <TabGroup {...args} value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
            <Tab value="tab3">Tab 3</Tab>
          </TabsList>
          <TabPanel value="tab1">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 1. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
          <TabPanel value="tab2">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 2. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
          <TabPanel value="tab3">
            <div className="p-4 border rounded-lg">
              <p>Content for controlled Tab 3. Active tab: {activeTab}</p>
            </div>
          </TabPanel>
        </TabGroup>
      </div>;
  }
}`,...(B=(H=g.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var K,Q,J;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    defaultValue: 'long-content',
    children: null
  },
  render: args => <div className="h-96 border rounded-lg p-4">
      <h3 className="mb-4 text-lg font-semibold">Fixed Height Container (384px)</h3>
      <TabGroup {...args}>
        <TabsList>
          <Tab value="long-content">Long Content</Tab>
          <Tab value="data-table">Data Table</Tab>
          <Tab value="code-editor">Code Editor</Tab>
        </TabsList>
        <TabPanel value="long-content">
          <div className="p-4 space-y-4">
            <h3 className="font-semibold text-lg">Long Scrollable Content</h3>
            <p>This content is longer than the container and will scroll.</p>
            {Array.from({
            length: 30
          }, (_, i) => <div key={i} className="p-3 border rounded bg-gray-50">
                <h4 className="font-medium">Section {i + 1}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  This is some content for section {i + 1}. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>)}
          </div>
        </TabPanel>
        <TabPanel value="data-table">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-4">Scrollable Data Table</h3>
            <div className="space-y-2">
              {Array.from({
              length: 100
            }, (_, i) => <div key={i} className="grid grid-cols-4 gap-4 p-2 border-b text-sm">
                  <span>Item {i + 1}</span>
                  <span>Category {i % 5 + 1}</span>
                  <span>\${(Math.random() * 100).toFixed(2)}</span>
                  <span className={\`px-2 py-1 rounded text-xs \${i % 3 === 0 ? 'bg-green-100 text-green-800' : i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}\`}>
                    {i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive'}
                  </span>
                </div>)}
            </div>
          </div>
        </TabPanel>
        <TabPanel value="code-editor">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-4">Code Editor Simulation</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm font-mono overflow-x-auto">
            {\`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 30 fibonacci numbers
const fibNumbers = [];
for (let i = 0; i < 30; i++) {
  fibNumbers.push(fibonacci(i));
}

console.log('Fibonacci sequence:', fibNumbers);

// Additional code to create scrollable content
class DataProcessor {
  constructor(data) {
    this.data = data;
    this.processed = false;
  }

  process() {
    if (this.processed) {
      console.log('Data already processed');
      return this.data;
    }

    console.log('Processing data...');
    const result = this.data.map((item, index) => ({
      id: index,
      value: item,
      processed: true,
      timestamp: new Date().toISOString()
    }));

    this.processed = true;
    return result;
  }

  reset() {
    this.processed = false;
    console.log('Data processor reset');
  }
}

// Example usage
const processor = new DataProcessor(fibNumbers);
const processedData = processor.process();

// More code to demonstrate scrolling...
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Test sorting algorithms
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', testArray);
console.log('Bubble sorted:', bubbleSort([...testArray]));
console.log('Quick sorted:', quickSort([...testArray]));\`}
            </pre>
          </div>
        </TabPanel>
      </TabGroup>
    </div>
}`,...(J=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};const re=["Default","Pills","Underline","Small","Large","Controlled","ScrollableContent"];export{g as Controlled,b as Default,h as Large,p as Pills,x as ScrollableContent,v as Small,m as Underline,re as __namedExportsOrder,se as default};
