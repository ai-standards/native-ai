import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as T}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const J={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",12:"grid-cols-12",auto:"grid-cols-auto",subgrid:"grid-cols-subgrid"},O={1:"grid-rows-1",2:"grid-rows-2",3:"grid-rows-3",4:"grid-rows-4",5:"grid-rows-5",6:"grid-rows-6",auto:"grid-rows-auto",subgrid:"grid-rows-subgrid"},K={none:"gap-0",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},Q={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},U={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},X={1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",12:"col-span-12",full:"col-span-full",auto:"col-auto"},Y={1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",full:"row-span-full",auto:"row-auto"},Z={1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",13:"col-start-13",auto:"col-start-auto"},ee={1:"col-end-1",2:"col-end-2",3:"col-end-3",4:"col-end-4",5:"col-end-5",6:"col-end-6",7:"col-end-7",8:"col-end-8",9:"col-end-9",10:"col-end-10",11:"col-end-11",12:"col-end-12",13:"col-end-13",auto:"col-end-auto"},re={1:"row-start-1",2:"row-start-2",3:"row-start-3",4:"row-start-4",5:"row-start-5",6:"row-start-6",7:"row-start-7",auto:"row-start-auto"},se={1:"row-end-1",2:"row-end-2",3:"row-end-3",4:"row-end-4",5:"row-end-5",6:"row-end-6",7:"row-end-7",auto:"row-end-auto"},t=({cols:r="auto",rows:a,gap:n="md",responsive:i=!1,align:o,justify:d,className:x,children:I,...f})=>e.jsx("div",{className:T("grid",r&&J[r],a&&O[a],K[n],i&&"sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",o&&Q[o],d&&U[d],x),...f,children:I}),l=({colSpan:r,rowSpan:a,colStart:n,colEnd:i,rowStart:o,rowEnd:d,className:x,children:I,...f})=>e.jsx("div",{className:T(r&&X[r],a&&Y[a],n&&Z[n],i&&ee[i],o&&re[o],d&&se[d],x),...f,children:I});try{t.displayName="Grid",t.__docgenInfo={description:"",displayName:"Grid",props:{cols:{defaultValue:{value:"auto"},description:"",name:"cols",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"auto"'},{value:"12"},{value:'"subgrid"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"auto"'},{value:'"subgrid"'}]}},gap:{defaultValue:{value:"md"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"xl"'}]}},responsive:{defaultValue:{value:"false"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}}}}}catch{}try{l.displayName="GridItem",l.__docgenInfo={description:"",displayName:"GridItem",props:{colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"full"'},{value:'"auto"'},{value:"12"}]}},rowSpan:{defaultValue:null,description:"",name:"rowSpan",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"full"'},{value:'"auto"'}]}},colStart:{defaultValue:null,description:"",name:"colStart",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"10"},{value:'"auto"'},{value:"12"},{value:"7"},{value:"8"},{value:"9"},{value:"11"},{value:"13"}]}},colEnd:{defaultValue:null,description:"",name:"colEnd",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"10"},{value:'"auto"'},{value:"12"},{value:"7"},{value:"8"},{value:"9"},{value:"11"},{value:"13"}]}},rowStart:{defaultValue:null,description:"",name:"rowStart",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"auto"'},{value:"7"}]}},rowEnd:{defaultValue:null,description:"",name:"rowEnd",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"auto"'},{value:"7"}]}}}}}catch{}const oe={title:"Surface/Grid",component:t,parameters:{layout:"padded",docs:{description:{component:"A flexible CSS Grid component with comprehensive layout options, responsive behavior, and grid item positioning. Built with Tailwind CSS for consistent grid layouts."}}},tags:["autodocs"],argTypes:{cols:{control:"select",options:[1,2,3,4,5,6,12,"auto","subgrid"],description:"Number of columns in the grid"},rows:{control:"select",options:[1,2,3,4,5,6,"auto","subgrid"],description:"Number of rows in the grid"},gap:{control:"select",options:["none","sm","md","lg","xl"],description:"Gap between grid items"},responsive:{control:"boolean",description:"Enable responsive grid behavior"},align:{control:"select",options:["start","center","end","stretch"],description:"Vertical alignment of grid items"},justify:{control:"select",options:["start","center","end","between","around","evenly"],description:"Horizontal alignment of grid items"},children:{control:!1,description:"Grid items to display"}}},s=({children:r,className:a=""})=>e.jsx("div",{className:`bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center ${a}`,children:r}),c={args:{cols:3,gap:"md",children:[e.jsx(s,{children:"Item 1"},"1"),e.jsx(s,{children:"Item 2"},"2"),e.jsx(s,{children:"Item 3"},"3"),e.jsx(s,{children:"Item 4"},"4"),e.jsx(s,{children:"Item 5"},"5"),e.jsx(s,{children:"Item 6"},"6")]}},m={render:()=>e.jsx("div",{className:"space-y-8",children:[1,2,3,4,6].map(r=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4",children:[r," Columns"]}),e.jsx(t,{cols:r,gap:"md",children:Array.from({length:r*2},(a,n)=>e.jsxs(s,{children:["Item ",n+1]},n))})]},r))})},u={render:()=>e.jsx("div",{className:"space-y-8",children:["none","sm","md","lg","xl"].map(r=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4",children:["Gap: ",r]}),e.jsxs(t,{cols:3,gap:r,children:[e.jsx(s,{children:"Item 1"}),e.jsx(s,{children:"Item 2"}),e.jsx(s,{children:"Item 3"})]})]},r))})},p={args:{responsive:!0,gap:"lg",children:Array.from({length:8},(r,a)=>e.jsxs(s,{children:[e.jsxs("div",{className:"text-sm font-medium",children:["Item ",a+1]}),e.jsx("div",{className:"text-xs text-gray-600 mt-1",children:"Responsive"})]},a))}},g={render:()=>e.jsxs(t,{cols:4,rows:3,gap:"md",className:"h-96",children:[e.jsx(l,{colSpan:2,rowSpan:2,children:e.jsxs(s,{className:"h-full bg-green-100 border-green-300",children:[e.jsx("div",{children:"Large Item"}),e.jsx("div",{className:"text-sm mt-1",children:"2x2"})]})}),e.jsx(l,{children:e.jsx(s,{className:"bg-yellow-100 border-yellow-300",children:"Item 2"})}),e.jsx(l,{children:e.jsx(s,{className:"bg-purple-100 border-purple-300",children:"Item 3"})}),e.jsx(l,{colStart:3,colEnd:5,children:e.jsxs(s,{className:"bg-red-100 border-red-300",children:[e.jsx("div",{children:"Wide Item"}),e.jsx("div",{className:"text-sm mt-1",children:"Spans 2 cols"})]})}),e.jsx(l,{colSpan:"full",children:e.jsxs(s,{className:"bg-indigo-100 border-indigo-300",children:[e.jsx("div",{children:"Full Width"}),e.jsx("div",{className:"text-sm mt-1",children:"Spans all columns"})]})})]})},v={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Center Aligned"}),e.jsxs(t,{cols:3,gap:"md",align:"center",className:"h-32",children:[e.jsx(s,{className:"h-16",children:"Item 1"}),e.jsx(s,{className:"h-20",children:"Item 2"}),e.jsx(s,{className:"h-12",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Space Between"}),e.jsxs(t,{cols:3,gap:"none",justify:"between",children:[e.jsx(s,{children:"Item 1"}),e.jsx(s,{children:"Item 2"}),e.jsx(s,{children:"Item 3"})]})]})]})},h={render:()=>e.jsxs(t,{cols:6,rows:4,gap:"lg",className:"h-96",children:[e.jsx(l,{colSpan:"full",children:e.jsx("div",{className:"bg-gray-800 text-white p-4 rounded-lg",children:e.jsx("h2",{className:"text-xl font-bold",children:"Dashboard Header"})})}),e.jsx(l,{rowSpan:2,children:e.jsxs("div",{className:"bg-gray-100 p-4 rounded-lg h-full",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Navigation"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:"Dashboard"}),e.jsx("li",{children:"Analytics"}),e.jsx("li",{children:"Settings"})]})]})}),e.jsx(l,{colSpan:3,children:e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg h-full",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Main Content"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Primary dashboard content goes here"})]})}),e.jsx(l,{colSpan:2,children:e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg h-full",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Statistics"}),e.jsx("div",{className:"text-2xl font-bold text-green-600",children:"$12,345"})]})}),e.jsx(l,{colSpan:5,children:e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg h-full",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Recent Activity"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Activity feed and notifications"})]})})]})},b={render:()=>e.jsx(t,{cols:3,gap:"lg",responsive:!0,children:[{title:"Product A",price:"$99",color:"bg-blue-50 border-blue-200"},{title:"Product B",price:"$149",color:"bg-green-50 border-green-200"},{title:"Product C",price:"$79",color:"bg-purple-50 border-purple-200"},{title:"Product D",price:"$199",color:"bg-red-50 border-red-200"},{title:"Product E",price:"$129",color:"bg-yellow-50 border-yellow-200"},{title:"Product F",price:"$89",color:"bg-indigo-50 border-indigo-200"}].map((r,a)=>e.jsxs("div",{className:`${r.color} border-2 rounded-lg p-6 text-center`,children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:r.title}),e.jsx("p",{className:"text-2xl font-bold mb-4",children:r.price}),e.jsx("button",{className:"px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors",children:"Add to Cart"})]},a))})};var y,j,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 'md',
    children: [<DemoItem key="1">Item 1</DemoItem>, <DemoItem key="2">Item 2</DemoItem>, <DemoItem key="3">Item 3</DemoItem>, <DemoItem key="4">Item 4</DemoItem>, <DemoItem key="5">Item 5</DemoItem>, <DemoItem key="6">Item 6</DemoItem>]
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,D,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {([1, 2, 3, 4, 6] as const).map(cols => <div key={cols}>
          <h3 className="text-lg font-semibold mb-4">{cols} Columns</h3>
          <Grid cols={cols} gap="md">
            {Array.from({
          length: cols * 2
        }, (_, i) => <DemoItem key={i}>Item {i + 1}</DemoItem>)}
          </Grid>
        </div>)}
    </div>
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var G,C,_;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(['none', 'sm', 'md', 'lg', 'xl'] as const).map(gap => <div key={gap}>
          <h3 className="text-lg font-semibold mb-4">Gap: {gap}</h3>
          <Grid cols={3} gap={gap}>
            <DemoItem>Item 1</DemoItem>
            <DemoItem>Item 2</DemoItem>
            <DemoItem>Item 3</DemoItem>
          </Grid>
        </div>)}
    </div>
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var A,$,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    responsive: true,
    gap: 'lg',
    children: Array.from({
      length: 8
    }, (_, i) => <DemoItem key={i}>
        <div className="text-sm font-medium">Item {i + 1}</div>
        <div className="text-xs text-gray-600 mt-1">Responsive</div>
      </DemoItem>)
  }
}`,...(V=($=p.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var P,q,k;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Grid cols={4} rows={3} gap="md" className="h-96">
      <GridItem colSpan={2} rowSpan={2}>
        <DemoItem className="h-full bg-green-100 border-green-300">
          <div>Large Item</div>
          <div className="text-sm mt-1">2x2</div>
        </DemoItem>
      </GridItem>
      <GridItem>
        <DemoItem className="bg-yellow-100 border-yellow-300">Item 2</DemoItem>
      </GridItem>
      <GridItem>
        <DemoItem className="bg-purple-100 border-purple-300">Item 3</DemoItem>
      </GridItem>
      <GridItem colStart={3} colEnd={5}>
        <DemoItem className="bg-red-100 border-red-300">
          <div>Wide Item</div>
          <div className="text-sm mt-1">Spans 2 cols</div>
        </DemoItem>
      </GridItem>
      <GridItem colSpan="full">
        <DemoItem className="bg-indigo-100 border-indigo-300">
          <div>Full Width</div>
          <div className="text-sm mt-1">Spans all columns</div>
        </DemoItem>
      </GridItem>
    </Grid>
}`,...(k=(q=g.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var E,R,L;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Center Aligned</h3>
        <Grid cols={3} gap="md" align="center" className="h-32">
          <DemoItem className="h-16">Item 1</DemoItem>
          <DemoItem className="h-20">Item 2</DemoItem>
          <DemoItem className="h-12">Item 3</DemoItem>
        </Grid>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Space Between</h3>
        <Grid cols={3} gap="none" justify="between">
          <DemoItem>Item 1</DemoItem>
          <DemoItem>Item 2</DemoItem>
          <DemoItem>Item 3</DemoItem>
        </Grid>
      </div>
    </div>
}`,...(L=(R=v.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var W,B,F;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Grid cols={6} rows={4} gap="lg" className="h-96">
      {/* Header spanning full width */}
      <GridItem colSpan="full">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold">Dashboard Header</h2>
        </div>
      </GridItem>

      {/* Sidebar */}
      <GridItem rowSpan={2}>
        <div className="bg-gray-100 p-4 rounded-lg h-full">
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>Dashboard</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </div>
      </GridItem>

      {/* Main content area */}
      <GridItem colSpan={3}>
        <div className="bg-blue-50 p-4 rounded-lg h-full">
          <h3 className="font-semibold mb-2">Main Content</h3>
          <p className="text-sm text-gray-600">Primary dashboard content goes here</p>
        </div>
      </GridItem>

      {/* Stats panel */}
      <GridItem colSpan={2}>
        <div className="bg-green-50 p-4 rounded-lg h-full">
          <h3 className="font-semibold mb-2">Statistics</h3>
          <div className="text-2xl font-bold text-green-600">$12,345</div>
        </div>
      </GridItem>

      {/* Secondary content */}
      <GridItem colSpan={5}>
        <div className="bg-yellow-50 p-4 rounded-lg h-full">
          <h3 className="font-semibold mb-2">Recent Activity</h3>
          <p className="text-sm text-gray-600">Activity feed and notifications</p>
        </div>
      </GridItem>
    </Grid>
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,z,M;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Grid cols={3} gap="lg" responsive>
      {[{
      title: 'Product A',
      price: '$99',
      color: 'bg-blue-50 border-blue-200'
    }, {
      title: 'Product B',
      price: '$149',
      color: 'bg-green-50 border-green-200'
    }, {
      title: 'Product C',
      price: '$79',
      color: 'bg-purple-50 border-purple-200'
    }, {
      title: 'Product D',
      price: '$199',
      color: 'bg-red-50 border-red-200'
    }, {
      title: 'Product E',
      price: '$129',
      color: 'bg-yellow-50 border-yellow-200'
    }, {
      title: 'Product F',
      price: '$89',
      color: 'bg-indigo-50 border-indigo-200'
    }].map((product, i) => <div key={i} className={\`\${product.color} border-2 rounded-lg p-6 text-center\`}>
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-2xl font-bold mb-4">{product.price}</p>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Add to Cart
          </button>
        </div>)}
    </Grid>
}`,...(M=(z=b.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const de=["Default","ColumnVariations","GapSizes","Responsive","WithGridItems","Alignment","DashboardLayout","CardLayout"];export{v as Alignment,b as CardLayout,m as ColumnVariations,h as DashboardLayout,c as Default,u as GapSizes,p as Responsive,g as WithGridItems,de as __namedExportsOrder,oe as default};
