import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as b}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const d=({variant:s="default",size:r="md",hoverable:t=!1,className:o,children:C,...u})=>{const I=b("w-full text-left",{"border-collapse":s==="bordered","[--cell-padding:0.5rem]":r==="sm","[--cell-padding:0.75rem]":r==="md","[--cell-padding:1rem]":r==="lg"},o);return e.jsx("div",{className:"overflow-x-auto",children:e.jsx("table",{className:I,"data-variant":s,"data-hoverable":t,...u,children:C})})},i=({className:s,children:r,...t})=>e.jsx("thead",{className:b("bg-gray-50",s),...t,children:r}),c=({className:s,children:r,...t})=>e.jsx("tbody",{className:b("divide-y divide-gray-200",s),...t,children:r}),n=({className:s,children:r,...t})=>e.jsx("tr",{className:b("transition-colors","data-[hoverable=true]:hover:bg-gray-50",s),...t,children:r}),a=({sortable:s=!1,sortDirection:r=null,className:t,children:o,...C})=>{const u=b("px-[var(--cell-padding,0.75rem)] py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",{"cursor-pointer select-none hover:text-gray-700":s},t);return e.jsx("th",{className:u,...C,children:e.jsxs("div",{className:"flex items-center gap-2",children:[o,s&&e.jsx("span",{className:"text-gray-400",children:r==="asc"?"↑":r==="desc"?"↓":"↕"})]})})},l=({className:s,children:r,...t})=>{const o=b("px-[var(--cell-padding,0.75rem)] py-4 text-sm text-gray-900",s);return e.jsx("td",{className:o,...t,children:r})};try{d.displayName="Table",d.__docgenInfo={description:"",displayName:"Table",props:{variant:{defaultValue:{value:"default"},description:"Table variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'},{value:'"striped"'}]}},size:{defaultValue:{value:"md"},description:"Table size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},hoverable:{defaultValue:{value:"false"},description:"Enable hover effect on rows",name:"hoverable",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="TableHeader",i.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}try{c.displayName="TableBody",c.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}try{n.displayName="TableRow",n.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}try{a.displayName="TableHeaderCell",a.__docgenInfo={description:"",displayName:"TableHeaderCell",props:{sortable:{defaultValue:{value:"false"},description:"Enable sorting indicator",name:"sortable",required:!1,type:{name:"boolean"}},sortDirection:{defaultValue:{value:"null"},description:"Current sort direction",name:"sortDirection",required:!1,type:{name:'"asc" | "desc" | null'}}}}}catch{}try{l.displayName="TableCell",l.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}const z={title:"Content/Table",component:d,parameters:{layout:"centered",docs:{description:{component:"Responsive table components with support for sorting, variants, and flexible sizing."}}}},x={args:{children:null},render:()=>e.jsxs(d,{children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"}),e.jsx(a,{children:"Status"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Developer"}),e.jsx(l,{children:"Active"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"Designer"}),e.jsx(l,{children:"Active"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Mike Johnson"}),e.jsx(l,{children:"mike@example.com"}),e.jsx(l,{children:"Manager"}),e.jsx(l,{children:"Inactive"})]})]})]})},T={args:{children:null},render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Default Table"}),e.jsxs(d,{children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Product"}),e.jsx(a,{children:"Price"}),e.jsx(a,{children:"Stock"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Widget A"}),e.jsx(l,{children:"$19.99"}),e.jsx(l,{children:"50"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Widget B"}),e.jsx(l,{children:"$29.99"}),e.jsx(l,{children:"30"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Bordered Table"}),e.jsxs(d,{variant:"bordered",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Product"}),e.jsx(a,{children:"Price"}),e.jsx(a,{children:"Stock"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Widget A"}),e.jsx(l,{children:"$19.99"}),e.jsx(l,{children:"50"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Widget B"}),e.jsx(l,{children:"$29.99"}),e.jsx(l,{children:"30"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Striped Table"}),e.jsxs(d,{variant:"striped",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Product"}),e.jsx(a,{children:"Price"}),e.jsx(a,{children:"Stock"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Widget A"}),e.jsx(l,{children:"$19.99"}),e.jsx(l,{children:"50"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Widget B"}),e.jsx(l,{children:"$29.99"}),e.jsx(l,{children:"30"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Widget C"}),e.jsx(l,{children:"$39.99"}),e.jsx(l,{children:"20"})]})]})]})]})]})},m={args:{children:null},render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Small Table"}),e.jsxs(d,{size:"sm",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"ID"}),e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Status"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"001"}),e.jsx(l,{children:"Item A"}),e.jsx(l,{children:"Active"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"002"}),e.jsx(l,{children:"Item B"}),e.jsx(l,{children:"Inactive"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Large Table"}),e.jsxs(d,{size:"lg",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"ID"}),e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Status"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"001"}),e.jsx(l,{children:"Item A"}),e.jsx(l,{children:"Active"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"002"}),e.jsx(l,{children:"Item B"}),e.jsx(l,{children:"Inactive"})]})]})]})]})]})},h={args:{children:null},render:()=>e.jsxs(d,{hoverable:!0,children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{sortable:!0,sortDirection:"asc",children:"Name"}),e.jsx(a,{sortable:!0,children:"Email"}),e.jsx(a,{sortable:!0,sortDirection:"desc",children:"Join Date"}),e.jsx(a,{children:"Actions"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Alice Cooper"}),e.jsx(l,{children:"alice@example.com"}),e.jsx(l,{children:"2024-03-15"}),e.jsx(l,{children:e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"})})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Bob Wilson"}),e.jsx(l,{children:"bob@example.com"}),e.jsx(l,{children:"2024-03-10"}),e.jsx(l,{children:e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"})})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Carol Davis"}),e.jsx(l,{children:"carol@example.com"}),e.jsx(l,{children:"2024-03-12"}),e.jsx(l,{children:e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"})})]})]})]})},j={args:{children:null},render:()=>e.jsxs(d,{variant:"bordered",hoverable:!0,children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Product"}),e.jsx(a,{sortable:!0,children:"Price"}),e.jsx(a,{sortable:!0,children:"Stock"}),e.jsx(a,{children:"Category"}),e.jsx(a,{children:"Rating"}),e.jsx(a,{children:"Actions"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded flex items-center justify-center"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"iPhone 15 Pro"}),e.jsx("div",{className:"text-sm text-gray-500",children:"Apple"})]})]})}),e.jsx(l,{children:e.jsx("span",{className:"font-semibold",children:"$999.00"})}),e.jsx(l,{children:e.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800",children:"25 in stock"})}),e.jsx(l,{children:"Electronics"}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-yellow-400",children:"⭐⭐⭐⭐⭐"}),e.jsx("span",{className:"ml-1 text-sm text-gray-500",children:"(4.8)"})]})}),e.jsx(l,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"}),e.jsx("button",{className:"text-red-600 hover:text-red-800 text-sm",children:"Delete"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gray-100 rounded flex items-center justify-center"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"MacBook Pro"}),e.jsx("div",{className:"text-sm text-gray-500",children:"Apple"})]})]})}),e.jsx(l,{children:e.jsx("span",{className:"font-semibold",children:"$1,999.00"})}),e.jsx(l,{children:e.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800",children:"Out of stock"})}),e.jsx(l,{children:"Computers"}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-yellow-400",children:"⭐⭐⭐⭐⭐"}),e.jsx("span",{className:"ml-1 text-sm text-gray-500",children:"(4.9)"})]})}),e.jsx(l,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"}),e.jsx("button",{className:"text-red-600 hover:text-red-800 text-sm",children:"Delete"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-purple-100 rounded flex items-center justify-center"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"AirPods Pro"}),e.jsx("div",{className:"text-sm text-gray-500",children:"Apple"})]})]})}),e.jsx(l,{children:e.jsx("span",{className:"font-semibold",children:"$249.00"})}),e.jsx(l,{children:e.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800",children:"5 left"})}),e.jsx(l,{children:"Audio"}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-yellow-400",children:"⭐⭐⭐⭐"}),e.jsx("span",{className:"ml-1 text-sm text-gray-500",children:"(4.6)"})]})}),e.jsx(l,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"}),e.jsx("button",{className:"text-red-600 hover:text-red-800 text-sm",children:"Delete"})]})})]})]})]})};var p,v,N;x.parameters={...x.parameters,docs:{...(p=x.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mike Johnson</TableCell>
          <TableCell>mike@example.com</TableCell>
          <TableCell>Manager</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(N=(v=x.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var g,f,y;T.parameters={...T.parameters,docs:{...(g=T.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Default Table</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Widget A</TableCell>
              <TableCell>$19.99</TableCell>
              <TableCell>50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget B</TableCell>
              <TableCell>$29.99</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Bordered Table</h3>
        <Table variant="bordered">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Widget A</TableCell>
              <TableCell>$19.99</TableCell>
              <TableCell>50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget B</TableCell>
              <TableCell>$29.99</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Striped Table</h3>
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Widget A</TableCell>
              <TableCell>$19.99</TableCell>
              <TableCell>50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget B</TableCell>
              <TableCell>$29.99</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget C</TableCell>
              <TableCell>$39.99</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
}`,...(y=(f=T.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,H,R;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Small Table</h3>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Item A</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Item B</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4">Large Table</h3>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Item A</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Item B</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
}`,...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,_,A;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Table hoverable>
      <TableHeader>
        <TableRow>
          <TableHeaderCell sortable sortDirection="asc">Name</TableHeaderCell>
          <TableHeaderCell sortable>Email</TableHeaderCell>
          <TableHeaderCell sortable sortDirection="desc">Join Date</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Cooper</TableCell>
          <TableCell>alice@example.com</TableCell>
          <TableCell>2024-03-15</TableCell>
          <TableCell>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Wilson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>2024-03-10</TableCell>
          <TableCell>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Carol Davis</TableCell>
          <TableCell>carol@example.com</TableCell>
          <TableCell>2024-03-12</TableCell>
          <TableCell>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(A=(_=h.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var S,D,P;j.parameters={...j.parameters,docs:{...(S=j.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Table variant="bordered" hoverable>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell sortable>Price</TableHeaderCell>
          <TableHeaderCell sortable>Stock</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Rating</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                
              </div>
              <div>
                <div className="font-medium">iPhone 15 Pro</div>
                <div className="text-sm text-gray-500">Apple</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <span className="font-semibold">$999.00</span>
          </TableCell>
          <TableCell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
              25 in stock
            </span>
          </TableCell>
          <TableCell>Electronics</TableCell>
          <TableCell>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="ml-1 text-sm text-gray-500">(4.8)</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                
              </div>
              <div>
                <div className="font-medium">MacBook Pro</div>
                <div className="text-sm text-gray-500">Apple</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <span className="font-semibold">$1,999.00</span>
          </TableCell>
          <TableCell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
              Out of stock
            </span>
          </TableCell>
          <TableCell>Computers</TableCell>
          <TableCell>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="ml-1 text-sm text-gray-500">(4.9)</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                
              </div>
              <div>
                <div className="font-medium">AirPods Pro</div>
                <div className="text-sm text-gray-500">Apple</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <span className="font-semibold">$249.00</span>
          </TableCell>
          <TableCell>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
              5 left
            </span>
          </TableCell>
          <TableCell>Audio</TableCell>
          <TableCell>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐</span>
              <span className="ml-1 text-sm text-gray-500">(4.6)</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(P=(D=j.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const J=["BasicTable","TableVariants","TableSizes","SortableTable","ComplexTable"];export{x as BasicTable,j as ComplexTable,h as SortableTable,m as TableSizes,T as TableVariants,J as __namedExportsOrder,z as default};
