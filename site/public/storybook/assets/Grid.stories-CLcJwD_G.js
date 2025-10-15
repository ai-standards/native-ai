import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{c as M}from"./cn-BaF2GUMg.js";import"./index-DHZDe_v1.js";import"./_commonjsHelpers-BosuxZz1.js";const T={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",12:"grid-cols-12",auto:"grid-cols-auto",subgrid:"grid-cols-subgrid"},J={1:"grid-rows-1",2:"grid-rows-2",3:"grid-rows-3",4:"grid-rows-4",5:"grid-rows-5",6:"grid-rows-6",auto:"grid-rows-auto",subgrid:"grid-rows-subgrid"},O={none:"gap-0",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},K={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},Q={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},X={1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",12:"col-span-12",full:"col-span-full",auto:"col-auto"},Y={1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",full:"row-span-full",auto:"row-auto"},Z={1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",13:"col-start-13",auto:"col-start-auto"},ee={1:"col-end-1",2:"col-end-2",3:"col-end-3",4:"col-end-4",5:"col-end-5",6:"col-end-6",7:"col-end-7",8:"col-end-8",9:"col-end-9",10:"col-end-10",11:"col-end-11",12:"col-end-12",13:"col-end-13",auto:"col-end-auto"},se={1:"row-start-1",2:"row-start-2",3:"row-start-3",4:"row-start-4",5:"row-start-5",6:"row-start-6",7:"row-start-7",auto:"row-start-auto"},re={1:"row-end-1",2:"row-end-2",3:"row-end-3",4:"row-end-4",5:"row-end-5",6:"row-end-6",7:"row-end-7",auto:"row-end-auto"},n=({cols:s="auto",rows:a,gap:t="md",responsive:c=!1,align:o,justify:l,className:b,children:x,...D})=>e.jsxDEV("div",{className:M("grid",s&&T[s],a&&J[a],O[t],c&&"sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",o&&K[o],l&&Q[l],b),...D,children:x},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.tsx",lineNumber:162,columnNumber:5},void 0),i=({colSpan:s,rowSpan:a,colStart:t,colEnd:c,rowStart:o,rowEnd:l,className:b,children:x,...D})=>e.jsxDEV("div",{className:M(s&&X[s],a&&Y[a],t&&Z[t],c&&ee[c],o&&se[o],l&&re[l],b),...D,children:x},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.tsx",lineNumber:198,columnNumber:5},void 0);try{n.displayName="Grid",n.__docgenInfo={description:"",displayName:"Grid",props:{cols:{defaultValue:{value:"auto"},description:"",name:"cols",required:!1,type:{name:"enum",value:[{value:"3"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"1"},{value:'"auto"'},{value:"12"},{value:'"subgrid"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"enum",value:[{value:"3"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"1"},{value:'"auto"'},{value:'"subgrid"'}]}},gap:{defaultValue:{value:"md"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},responsive:{defaultValue:{value:"false"},description:"",name:"responsive",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"stretch"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}}}}}catch{}try{i.displayName="GridItem",i.__docgenInfo={description:"",displayName:"GridItem",props:{colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"enum",value:[{value:"3"},{value:'"full"'},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"1"},{value:'"auto"'},{value:"12"}]}},rowSpan:{defaultValue:null,description:"",name:"rowSpan",required:!1,type:{name:"enum",value:[{value:"3"},{value:'"full"'},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"1"},{value:'"auto"'}]}},colStart:{defaultValue:null,description:"",name:"colStart",required:!1,type:{name:"enum",value:[{value:"3"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"10"},{value:"1"},{value:'"auto"'},{value:"12"},{value:"7"},{value:"8"},{value:"9"},{value:"11"},{value:"13"}]}},colEnd:{defaultValue:null,description:"",name:"colEnd",required:!1,type:{name:"enum",value:[{value:"3"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"10"},{value:"1"},{value:'"auto"'},{value:"12"},{value:"7"},{value:"8"},{value:"9"},{value:"11"},{value:"13"}]}},rowStart:{defaultValue:null,description:"",name:"rowStart",required:!1,type:{name:"enum",value:[{value:"3"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"1"},{value:'"auto"'},{value:"7"}]}},rowEnd:{defaultValue:null,description:"",name:"rowEnd",required:!1,type:{name:"enum",value:[{value:"3"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"1"},{value:'"auto"'},{value:"7"}]}}}}}catch{}const oe={title:"Surface/Grid",component:n,parameters:{layout:"padded",docs:{description:{component:"A flexible CSS Grid component with comprehensive layout options, responsive behavior, and grid item positioning. Built with Tailwind CSS for consistent grid layouts."}}},tags:["autodocs"],argTypes:{cols:{control:"select",options:[1,2,3,4,5,6,12,"auto","subgrid"],description:"Number of columns in the grid"},rows:{control:"select",options:[1,2,3,4,5,6,"auto","subgrid"],description:"Number of rows in the grid"},gap:{control:"select",options:["none","sm","md","lg","xl"],description:"Gap between grid items"},responsive:{control:"boolean",description:"Enable responsive grid behavior"},align:{control:"select",options:["start","center","end","stretch"],description:"Vertical alignment of grid items"},justify:{control:"select",options:["start","center","end","between","around","evenly"],description:"Horizontal alignment of grid items"},children:{control:!1,description:"Grid items to display"}}},r=({children:s,className:a=""})=>e.jsxDEV("div",{className:`bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center ${a}`,children:s},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:58,columnNumber:3},void 0),d={args:{cols:3,gap:"md",children:[e.jsxDEV(r,{children:"Item 1"},"1",!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:69,columnNumber:7},void 0),e.jsxDEV(r,{children:"Item 2"},"2",!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:70,columnNumber:7},void 0),e.jsxDEV(r,{children:"Item 3"},"3",!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:71,columnNumber:7},void 0),e.jsxDEV(r,{children:"Item 4"},"4",!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:72,columnNumber:7},void 0),e.jsxDEV(r,{children:"Item 5"},"5",!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:73,columnNumber:7},void 0),e.jsxDEV(r,{children:"Item 6"},"6",!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:74,columnNumber:7},void 0)]}},m={render:()=>e.jsxDEV("div",{className:"space-y-8",children:[1,2,3,4,6].map(s=>e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:[s," Columns"]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:85,columnNumber:11},void 0),e.jsxDEV(n,{cols:s,gap:"md",children:Array.from({length:s*2},(a,t)=>e.jsxDEV(r,{children:["Item ",t+1]},t,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:88,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:86,columnNumber:11},void 0)]},s,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:84,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:82,columnNumber:5},void 0)},u={render:()=>e.jsxDEV("div",{className:"space-y-8",children:["none","sm","md","lg","xl"].map(s=>e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:["Gap: ",s]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:103,columnNumber:11},void 0),e.jsxDEV(n,{cols:3,gap:s,children:[e.jsxDEV(r,{children:"Item 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:105,columnNumber:13},void 0),e.jsxDEV(r,{children:"Item 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:106,columnNumber:13},void 0),e.jsxDEV(r,{children:"Item 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:107,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:104,columnNumber:11},void 0)]},s,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:102,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:100,columnNumber:5},void 0)},p={args:{responsive:!0,gap:"lg",children:Array.from({length:8},(s,a)=>e.jsxDEV(r,{children:[e.jsxDEV("div",{className:"text-sm font-medium",children:["Item ",a+1]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:122,columnNumber:9},void 0),e.jsxDEV("div",{className:"text-xs text-gray-600 mt-1",children:"Responsive"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:123,columnNumber:9},void 0)]},a,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:121,columnNumber:7},void 0))}},f={render:()=>e.jsxDEV(n,{cols:4,rows:3,gap:"md",className:"h-96",children:[e.jsxDEV(i,{colSpan:2,rowSpan:2,children:e.jsxDEV(r,{className:"h-full bg-green-100 border-green-300",children:[e.jsxDEV("div",{children:"Large Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:135,columnNumber:11},void 0),e.jsxDEV("div",{className:"text-sm mt-1",children:"2x2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:136,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:134,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:133,columnNumber:7},void 0),e.jsxDEV(i,{children:e.jsxDEV(r,{className:"bg-yellow-100 border-yellow-300",children:"Item 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:140,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:139,columnNumber:7},void 0),e.jsxDEV(i,{children:e.jsxDEV(r,{className:"bg-purple-100 border-purple-300",children:"Item 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:143,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:142,columnNumber:7},void 0),e.jsxDEV(i,{colStart:3,colEnd:5,children:e.jsxDEV(r,{className:"bg-red-100 border-red-300",children:[e.jsxDEV("div",{children:"Wide Item"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:147,columnNumber:11},void 0),e.jsxDEV("div",{className:"text-sm mt-1",children:"Spans 2 cols"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:148,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:146,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:145,columnNumber:7},void 0),e.jsxDEV(i,{colSpan:"full",children:e.jsxDEV(r,{className:"bg-indigo-100 border-indigo-300",children:[e.jsxDEV("div",{children:"Full Width"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:153,columnNumber:11},void 0),e.jsxDEV("div",{className:"text-sm mt-1",children:"Spans all columns"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:154,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:152,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:151,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:132,columnNumber:5},void 0)},g={render:()=>e.jsxDEV("div",{className:"space-y-8",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Center Aligned"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:166,columnNumber:9},void 0),e.jsxDEV(n,{cols:3,gap:"md",align:"center",className:"h-32",children:[e.jsxDEV(r,{className:"h-16",children:"Item 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:168,columnNumber:11},void 0),e.jsxDEV(r,{className:"h-20",children:"Item 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:169,columnNumber:11},void 0),e.jsxDEV(r,{className:"h-12",children:"Item 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:170,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:167,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:165,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Space Between"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:175,columnNumber:9},void 0),e.jsxDEV(n,{cols:3,gap:"none",justify:"between",children:[e.jsxDEV(r,{children:"Item 1"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:177,columnNumber:11},void 0),e.jsxDEV(r,{children:"Item 2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:178,columnNumber:11},void 0),e.jsxDEV(r,{children:"Item 3"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:179,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:176,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:174,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:164,columnNumber:5},void 0)},v={render:()=>e.jsxDEV(n,{cols:6,rows:4,gap:"lg",className:"h-96",children:[e.jsxDEV(i,{colSpan:"full",children:e.jsxDEV("div",{className:"bg-gray-800 text-white p-4 rounded-lg",children:e.jsxDEV("h2",{className:"text-xl font-bold",children:"Dashboard Header"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:193,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:192,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:191,columnNumber:7},void 0),e.jsxDEV(i,{rowSpan:2,children:e.jsxDEV("div",{className:"bg-gray-100 p-4 rounded-lg h-full",children:[e.jsxDEV("h3",{className:"font-semibold mb-3",children:"Navigation"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:200,columnNumber:11},void 0),e.jsxDEV("ul",{className:"space-y-2 text-sm",children:[e.jsxDEV("li",{children:"Dashboard"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:202,columnNumber:13},void 0),e.jsxDEV("li",{children:"Analytics"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:203,columnNumber:13},void 0),e.jsxDEV("li",{children:"Settings"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:204,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:201,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:199,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:198,columnNumber:7},void 0),e.jsxDEV(i,{colSpan:3,children:e.jsxDEV("div",{className:"bg-blue-50 p-4 rounded-lg h-full",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Main Content"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:212,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"Primary dashboard content goes here"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:213,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:211,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:210,columnNumber:7},void 0),e.jsxDEV(i,{colSpan:2,children:e.jsxDEV("div",{className:"bg-green-50 p-4 rounded-lg h-full",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Statistics"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:220,columnNumber:11},void 0),e.jsxDEV("div",{className:"text-2xl font-bold text-green-600",children:"$12,345"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:221,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:219,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:218,columnNumber:7},void 0),e.jsxDEV(i,{colSpan:5,children:e.jsxDEV("div",{className:"bg-yellow-50 p-4 rounded-lg h-full",children:[e.jsxDEV("h3",{className:"font-semibold mb-2",children:"Recent Activity"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:228,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600",children:"Activity feed and notifications"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:229,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:227,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:226,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:189,columnNumber:5},void 0)},N={render:()=>e.jsxDEV(n,{cols:3,gap:"lg",responsive:!0,children:[{title:"Product A",price:"$99",color:"bg-blue-50 border-blue-200"},{title:"Product B",price:"$149",color:"bg-green-50 border-green-200"},{title:"Product C",price:"$79",color:"bg-purple-50 border-purple-200"},{title:"Product D",price:"$199",color:"bg-red-50 border-red-200"},{title:"Product E",price:"$129",color:"bg-yellow-50 border-yellow-200"},{title:"Product F",price:"$89",color:"bg-indigo-50 border-indigo-200"}].map((s,a)=>e.jsxDEV("div",{className:`${s.color} border-2 rounded-lg p-6 text-center`,children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-2",children:s.title},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:252,columnNumber:11},void 0),e.jsxDEV("p",{className:"text-2xl font-bold mb-4",children:s.price},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:253,columnNumber:11},void 0),e.jsxDEV("button",{className:"px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors",children:"Add to Cart"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:254,columnNumber:11},void 0)]},a,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:248,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/surface/grid/Grid.stories.tsx",lineNumber:239,columnNumber:5},void 0)};var y,j,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 'md',
    children: [<DemoItem key="1">Item 1</DemoItem>, <DemoItem key="2">Item 2</DemoItem>, <DemoItem key="3">Item 3</DemoItem>, <DemoItem key="4">Item 4</DemoItem>, <DemoItem key="5">Item 5</DemoItem>, <DemoItem key="6">Item 6</DemoItem>]
  }
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var h,G,I;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(G=m.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var V,E,U;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(E=u.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var w,S,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var _,A,$;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(A=f.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var P,q,R;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(q=g.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var L,W,B;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(W=v.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,H,z;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(H=N.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};const le=["Default","ColumnVariations","GapSizes","Responsive","WithGridItems","Alignment","DashboardLayout","CardLayout"];export{g as Alignment,N as CardLayout,m as ColumnVariations,v as DashboardLayout,d as Default,u as GapSizes,p as Responsive,f as WithGridItems,le as __namedExportsOrder,oe as default};
