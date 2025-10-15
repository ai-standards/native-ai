import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as b,R as k}from"./index-BwDkhjyp.js";import{c as y}from"./cn-BaF2GUMg.js";import{B as ce}from"./Button-LTpUiv5Y.js";import{b as F,c as z,d as V,e as me,f as pe,g as he,h as fe}from"./Icon-DitzTbaY.js";import"./_commonjsHelpers-BosuxZz1.js";const de=k.createContext(null),oe=()=>k.useContext(de),ve=({children:s,className:n,...a})=>{const[x,u]=b.useState(!1),[g,m]=b.useState(!1),[r,p]=b.useState(!1),xe={leftSidebarCollapsed:x,rightSidebarCollapsed:g,consoleCollapsed:r,toggleLeftSidebar:()=>u(!x),toggleRightSidebar:()=>m(!g),toggleConsole:()=>p(!r)},t={actionBar:null,topBar:null,leftSidebar:null,rightSidebar:null,mainContent:null,console:null,bottomBar:null};return k.Children.forEach(s,i=>{var D,O,E;if(!k.isValidElement(i))return;switch(((D=i.type)==null?void 0:D.displayName)||((O=i.type)==null?void 0:O.name)){case"ActionBar":t.actionBar=i;break;case"TopBar":t.topBar=i;break;case"Sidebar":(((E=i.props)==null?void 0:E.side)||"left")==="left"?t.leftSidebar=i:t.rightSidebar=i;break;case"Console":t.console=i;break;case"BottomBar":t.bottomBar=i;break;case"MainContent":t.mainContent=i;break;default:t.mainContent||(t.mainContent=i);break}}),e.jsx(de.Provider,{value:xe,children:e.jsxs("div",{className:y("h-screen w-full flex flex-col bg-gray-50",n),...a,children:[t.topBar,e.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[t.actionBar,t.leftSidebar,e.jsxs("div",{className:"flex flex-col flex-1",children:[t.mainContent,t.console]}),t.rightSidebar]}),t.bottomBar]})})},l=ve,d=({children:s,className:n,...a})=>e.jsx("div",{className:y("w-12 bg-gray-900 flex flex-col items-center py-2 border-r border-gray-700","flex-shrink-0 z-30",n),...a,children:s});d.displayName="ActionBar";const h=({children:s,className:n,...a})=>e.jsx("div",{className:y("h-8 bg-gray-800 text-white flex items-center px-4 border-b border-gray-600","flex-shrink-0 z-20 text-sm",n),...a,children:s});h.displayName="TopBar";const f=({children:s,className:n,...a})=>e.jsx("div",{className:y("h-6 bg-blue-600 text-white flex items-center px-4 border-t border-blue-500","flex-shrink-0 z-20 text-xs",n),...a,children:s});f.displayName="BottomBar";const c=({children:s,className:n,side:a="left",width:x="240px",collapsible:u=!0,defaultCollapsed:g=!1,...m})=>{const r=oe(),[p,j]=b.useState(g),N=u?r?a==="left"?r.leftSidebarCollapsed:a==="right"?r.rightSidebarCollapsed:p:p:!1,R=u?r?a==="left"?r.toggleLeftSidebar:a==="right"?r.toggleRightSidebar:()=>j(!p):()=>j(!p):void 0;return e.jsx("div",{className:y("bg-gray-100 border-gray-300 flex-shrink-0 transition-all duration-200 ease-in-out",a==="left"?"border-r":"border-l",N?"w-0 overflow-hidden":"",n),style:{width:N?"0":x},...m,children:e.jsxs("div",{className:"h-full flex flex-col",children:[u&&e.jsxs("div",{className:"h-8 bg-gray-200 border-b border-gray-300 flex items-center justify-between px-2",children:[e.jsxs("span",{className:"text-xs font-medium text-gray-600 uppercase tracking-wide",children:[a," Panel"]}),e.jsx("button",{onClick:R,className:"p-1 hover:bg-gray-300 rounded text-gray-500 hover:text-gray-700",children:e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})})]}),e.jsx("div",{className:"flex-1 p-3 overflow-y-auto",children:s})]})})};c.displayName="Sidebar";const o=({children:s,className:n,height:a="200px",collapsible:x=!0,defaultCollapsed:u=!1,...g})=>{const m=oe(),[r,p]=b.useState(u),j=x?m?m.consoleCollapsed:r:!1,N=x?m?m.toggleConsole:()=>p(!r):void 0;return e.jsx("div",{className:y("bg-gray-900 text-green-400 border-t border-gray-700 flex-shrink-0","transition-all duration-200 ease-in-out font-mono",j?"h-0 overflow-hidden":"",n),style:{height:j?"0":a},...g,children:e.jsxs("div",{className:"h-full flex flex-col",children:[x&&e.jsxs("div",{className:"h-8 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-xs font-medium text-gray-300 uppercase tracking-wide",children:"Console"}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})]}),e.jsx("button",{onClick:N,className:"p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-gray-200",children:e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})})})]}),e.jsx("div",{className:"flex-1 p-3 overflow-y-auto text-sm",children:s})]})})};o.displayName="Console";const v=({children:s,className:n,...a})=>e.jsx("div",{className:y("flex-1 bg-white overflow-hidden",n),...a,children:s});v.displayName="MainContent";l.ActionBar=d;l.TopBar=h;l.BottomBar=f;l.Sidebar=c;l.Console=o;l.MainContent=v;try{l.displayName="Layout",l.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}try{d.displayName="ActionBar",d.__docgenInfo={description:"",displayName:"ActionBar",props:{}}}catch{}try{h.displayName="TopBar",h.__docgenInfo={description:"",displayName:"TopBar",props:{}}}catch{}try{f.displayName="BottomBar",f.__docgenInfo={description:"",displayName:"BottomBar",props:{}}}catch{}try{c.displayName="Sidebar",c.__docgenInfo={description:"",displayName:"Sidebar",props:{side:{defaultValue:{value:"left"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},width:{defaultValue:{value:"240px"},description:"",name:"width",required:!1,type:{name:"string"}},collapsible:{defaultValue:{value:"true"},description:"",name:"collapsible",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="Console",o.__docgenInfo={description:"",displayName:"Console",props:{height:{defaultValue:{value:"200px"},description:"",name:"height",required:!1,type:{name:"string"}},collapsible:{defaultValue:{value:"true"},description:"",name:"collapsible",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="MainContent",v.__docgenInfo={description:"",displayName:"MainContent",props:{}}}catch{}const Se={title:"Surface/Layout",component:l,parameters:{layout:"fullscreen",docs:{description:{component:"A VS Code-like layout component with action bar, sidebars, console, and main content area. Features collapsible panels and responsive design."}}},tags:["autodocs"]},C=()=>{const s=[{icon:e.jsx(F,{size:16}),title:"Explorer"},{icon:e.jsx(me,{size:16}),title:"Search"},{icon:e.jsx(pe,{size:16}),title:"Source Control"},{icon:e.jsx(he,{size:16}),title:"Run and Debug"},{icon:e.jsx(fe,{size:16}),title:"Extensions"}];return e.jsx("div",{className:"space-y-3",children:s.map((n,a)=>e.jsx("button",{className:"w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors",title:n.title,children:n.icon},a))})},M=({title:s})=>e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-semibold text-gray-800",children:s}),e.jsx("div",{className:"space-y-2",children:["File 1.tsx","File 2.js","File 3.css","File 4.md"].map((n,a)=>e.jsxs("div",{className:"p-2 hover:bg-gray-200 rounded cursor-pointer text-sm text-gray-700 flex items-center space-x-2",children:[e.jsx(z,{size:14,className:"text-gray-500"}),e.jsx("span",{children:n})]},a))})]}),I=()=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"text-gray-400 flex items-center space-x-2",children:[e.jsx(V,{size:12}),e.jsx("span",{children:"npm start"})]}),e.jsx("div",{className:"text-green-400",children:" Server started on port 3000"}),e.jsx("div",{className:"text-blue-400",children:"ℹ Compiled successfully"}),e.jsx("div",{className:"text-yellow-400",children:" Warning: Unused variable 'x'"}),e.jsxs("div",{className:"text-gray-400 flex items-center space-x-2",children:[e.jsx(V,{size:12}),e.jsx("span",{children:"_"})]})]}),B={render:()=>e.jsxs(l,{children:[e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"font-medium",children:"MyApp"}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx("span",{className:"text-xs",children:"src/Surface.tsx"})]}),e.jsx("div",{className:"flex-1"}),e.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[e.jsx("span",{children:"Ln 42, Col 16"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"UTF-8"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"TypeScript React"})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsx(d,{children:e.jsx(C,{})}),e.jsx(c,{side:"left",width:"250px",children:e.jsx(M,{title:"Explorer"})}),e.jsxs("div",{className:"flex flex-col flex-1",children:[e.jsx(v,{children:e.jsx("div",{className:"h-full flex items-center justify-center bg-gray-50",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Welcome to VS Code Layout"}),e.jsx("p",{className:"text-gray-600 max-w-md",children:"This is the main content area. In a real application, this would contain your editor, file content, or other primary interface elements."}),e.jsx(ce,{variant:"primary",children:"Open File"})]})})}),e.jsx(o,{children:e.jsx(I,{})})]}),e.jsx(c,{side:"right",width:"280px",defaultCollapsed:!0,children:e.jsx(M,{title:"Properties"})})]}),e.jsxs(f,{children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{children:"Ready"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Git: main"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"0 Problems"})]}),e.jsx("div",{className:"flex-1"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{children:"TypeScript"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Prettier"})]})]})]})},S={render:()=>e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("span",{className:"font-medium",children:"Minimal Layout"})}),e.jsxs("div",{className:"flex flex-1",children:[e.jsx(d,{children:e.jsx(C,{})}),e.jsxs("div",{className:"flex flex-col flex-1",children:[e.jsx(v,{children:e.jsx("div",{className:"h-full flex items-center justify-center",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Clean & Simple"}),e.jsx("p",{className:"text-gray-600",children:"No sidebars, just action bar and main content."})]})})}),e.jsx(o,{height:"150px",children:e.jsx("div",{className:"text-green-400",children:"System ready "})})]})]}),e.jsx(f,{children:e.jsx("span",{children:"Status: Online"})})]})},_={render:()=>e.jsxs(l,{children:[e.jsxs(h,{children:[e.jsx("span",{className:"font-medium",children:"Full Layout"}),e.jsx("div",{className:"flex-1"}),e.jsx("span",{className:"text-xs",children:"All panels visible"})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsx(d,{children:e.jsx(C,{})}),e.jsx(c,{side:"left",width:"200px",children:e.jsx(M,{title:"Files"})}),e.jsxs("div",{className:"flex flex-col flex-1",children:[e.jsx(v,{children:e.jsx("div",{className:"h-full p-6 bg-white",children:e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Code Editor Area"}),e.jsxs("div",{className:"bg-gray-900 text-green-400 p-4 rounded font-mono text-sm",children:[e.jsx("div",{children:"import React from 'react';"}),e.jsxs("div",{children:["import ","{ Layout }"," from './Layout';"]}),e.jsx("div",{}),e.jsx("div",{children:"const App = () => {"}),e.jsx("div",{children:"  return ("}),e.jsx("div",{children:"    <Layout>"}),e.jsx("div",{children:"      <Layout.TopBar>"}),e.jsx("div",{children:"        My App"}),e.jsx("div",{children:"      </Layout.TopBar>"}),e.jsxs("div",{children:["      ","// ... more components"]}),e.jsx("div",{children:"    </Layout>"}),e.jsx("div",{children:"  );"}),e.jsx("div",{children:"};"})]})]})})}),e.jsx(o,{height:"180px",children:e.jsx(I,{})})]}),e.jsx(c,{side:"right",width:"220px",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Outline"}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("div",{className:"pl-2 flex items-center space-x-1",children:[e.jsx(F,{size:12,className:"text-blue-500"}),e.jsx("span",{children:"components"})]}),e.jsxs("div",{className:"pl-4 flex items-center space-x-1",children:[e.jsx(z,{size:12,className:"text-gray-500"}),e.jsx("span",{children:"Layout.tsx"})]}),e.jsxs("div",{className:"pl-4 flex items-center space-x-1",children:[e.jsx(z,{size:12,className:"text-gray-500"}),e.jsx("span",{children:"Button.tsx"})]}),e.jsxs("div",{className:"pl-2 flex items-center space-x-1",children:[e.jsx(F,{size:12,className:"text-blue-500"}),e.jsx("span",{children:"utils"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Timeline"}),e.jsxs("div",{className:"space-y-2 text-xs text-gray-600",children:[e.jsx("div",{children:"2 minutes ago - Updated Layout"}),e.jsx("div",{children:"1 hour ago - Added Button component"}),e.jsx("div",{children:"Yesterday - Initial commit"})]})]})]})})]}),e.jsxs(f,{children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("span",{children:" Ready"}),e.jsx("span",{className:"text-blue-200",children:"main"}),e.jsx("span",{children:"0 errors, 0 warnings"})]}),e.jsx("div",{className:"flex-1"}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("span",{children:"Ln 24, Col 8"}),e.jsx("span",{children:"UTF-8"}),e.jsx("span",{children:"React TSX"})]})]})]})},L={render:()=>e.jsxs(l,{className:"bg-gray-800",children:[e.jsx(h,{className:"bg-gray-900 border-gray-700",children:e.jsx("span",{className:"font-medium text-gray-200",children:"Dark Theme Layout"})}),e.jsxs("div",{className:"flex flex-1",children:[e.jsx(d,{className:"bg-gray-900 border-gray-600",children:e.jsx(C,{})}),e.jsx(c,{side:"left",width:"240px",className:"bg-gray-800 border-gray-600",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-semibold text-gray-200",children:"Dark Explorer"}),e.jsx("div",{className:"space-y-2",children:["index.tsx","styles.css","utils.ts"].map((s,n)=>e.jsxs("div",{className:"p-2 hover:bg-gray-700 rounded cursor-pointer text-sm text-gray-300 flex items-center space-x-2",children:[e.jsx(z,{size:14,className:"text-gray-400"}),e.jsx("span",{children:s})]},n))})]})}),e.jsxs("div",{className:"flex flex-col flex-1",children:[e.jsx(v,{className:"bg-gray-800",children:e.jsx("div",{className:"h-full flex items-center justify-center",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-200",children:"Dark Theme"}),e.jsx("p",{className:"text-gray-400",children:"Perfect for late-night coding sessions."}),e.jsx(ce,{variant:"outline",children:"Open Terminal"})]})})}),e.jsx(o,{className:"bg-black border-gray-600",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-gray-500",children:"$ npm run dev"}),e.jsx("div",{className:"text-green-400",children:" Development server running"}),e.jsx("div",{className:"text-cyan-400",children:"ℹ Hot reload enabled"}),e.jsx("div",{className:"text-gray-500",children:"$ _"})]})})]})]}),e.jsxs(f,{className:"bg-gray-900 border-gray-700 text-gray-200",children:[e.jsx("span",{children:"Dark Mode Active"}),e.jsx("div",{className:"flex-1"}),e.jsx("span",{children:"TypeScript • Dark+"})]})]})},w={render:()=>e.jsxs("div",{className:"h-96 flex",children:[e.jsx(d,{children:e.jsx(C,{})}),e.jsx("div",{className:"flex-1 bg-gray-100 flex items-center justify-center",children:e.jsx("span",{className:"text-gray-500",children:"Action bar on the left"})})]})},T={render:()=>e.jsxs("div",{className:"h-96 flex",children:[e.jsx(c,{side:"left",width:"300px",children:e.jsx(M,{title:"Standalone Sidebar"})}),e.jsx("div",{className:"flex-1 bg-gray-100 flex items-center justify-center",children:e.jsx("span",{className:"text-gray-500",children:"Sidebar demo"})})]})},A={render:()=>e.jsxs("div",{className:"h-96 flex flex-col",children:[e.jsx("div",{className:"flex-1 bg-gray-100 flex items-center justify-center",children:e.jsx("span",{className:"text-gray-500",children:"Console at the bottom"})}),e.jsx(o,{height:"120px",children:e.jsx(I,{})})]})};var P,q,U;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Layout>
      <TopBar>
        <div className="flex items-center space-x-4">
          <span className="font-medium">MyApp</span>
          <span className="text-gray-400">|</span>
          <span className="text-xs">src/Surface.tsx</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2 text-xs">
          <span>Ln 42, Col 16</span>
          <span>•</span>
          <span>UTF-8</span>
          <span>•</span>
          <span>TypeScript React</span>
        </div>
      </TopBar>
      
      <div className="flex flex-1">
        <ActionBar>
          <ActionBarItems />
        </ActionBar>
        
        <Sidebar side="left" width="250px">
          <SidebarContent title="Explorer" />
        </Sidebar>
        
        <div className="flex flex-col flex-1">
          <MainContent>
            <div className="h-full flex items-center justify-center bg-gray-50">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Welcome to VS Code Layout</h2>
                <p className="text-gray-600 max-w-md">
                  This is the main content area. In a real application, this would contain your editor, 
                  file content, or other primary interface elements.
                </p>
                <Button variant="primary">Open File</Button>
              </div>
            </div>
          </MainContent>
          
          <Console>
            <ConsoleContent />
          </Console>
        </div>
        
        <Sidebar side="right" width="280px" defaultCollapsed>
          <SidebarContent title="Properties" />
        </Sidebar>
      </div>
      
      <BottomBar>
        <div className="flex items-center space-x-4">
          <span>Ready</span>
          <span>•</span>
          <span>Git: main</span>
          <span>•</span>
          <span>0 Problems</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2">
          <span>TypeScript</span>
          <span>•</span>
          <span>Prettier</span>
        </div>
      </BottomBar>
    </Layout>
}`,...(U=(q=B.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var H,$,W;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Layout>
      <TopBar>
        <span className="font-medium">Minimal Layout</span>
      </TopBar>
      
      <div className="flex flex-1">
        <ActionBar>
          <ActionBarItems />
        </ActionBar>
        
        <div className="flex flex-col flex-1">
          <MainContent>
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">Clean & Simple</h2>
                <p className="text-gray-600">No sidebars, just action bar and main content.</p>
              </div>
            </div>
          </MainContent>
          
          <Console height="150px">
            <div className="text-green-400">System ready </div>
          </Console>
        </div>
      </div>
      
      <BottomBar>
        <span>Status: Online</span>
      </BottomBar>
    </Layout>
}`,...(W=($=S.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var G,X,Y;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Layout>
      <TopBar>
        <span className="font-medium">Full Layout</span>
        <div className="flex-1"></div>
        <span className="text-xs">All panels visible</span>
      </TopBar>
      
      <div className="flex flex-1">
        <ActionBar>
          <ActionBarItems />
        </ActionBar>
        
        <Sidebar side="left" width="200px">
          <SidebarContent title="Files" />
        </Sidebar>
        
        <div className="flex flex-col flex-1">
          <MainContent>
            <div className="h-full p-6 bg-white">
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold mb-4">Code Editor Area</h2>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                  <div>import React from 'react';</div>
                  <div>import {'{ Layout }'} from './Layout';</div>
                  <div></div>
                  <div>{'const App = () => {'}</div>
                  <div>{'  return ('}</div>
                  <div>    &lt;Layout&gt;</div>
                  <div>      &lt;Layout.TopBar&gt;</div>
                  <div>        My App</div>
                  <div>      &lt;/Layout.TopBar&gt;</div>
                  <div>      {'// ... more components'}</div>
                  <div>    &lt;/Layout&gt;</div>
                  <div>{'  );'}</div>
                  <div>{'};'}</div>
                </div>
              </div>
            </div>
          </MainContent>
          
          <Console height="180px">
            <ConsoleContent />
          </Console>
        </div>
        
        <Sidebar side="right" width="220px">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Outline</h3>
              <div className="space-y-1 text-sm">
                <div className="pl-2 flex items-center space-x-1">
                  <FolderIcon size={12} className="text-blue-500" />
                  <span>components</span>
                </div>
                <div className="pl-4 flex items-center space-x-1">
                  <FileIcon size={12} className="text-gray-500" />
                  <span>Layout.tsx</span>
                </div>
                <div className="pl-4 flex items-center space-x-1">
                  <FileIcon size={12} className="text-gray-500" />
                  <span>Button.tsx</span>
                </div>
                <div className="pl-2 flex items-center space-x-1">
                  <FolderIcon size={12} className="text-blue-500" />
                  <span>utils</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Timeline</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div>2 minutes ago - Updated Layout</div>
                <div>1 hour ago - Added Button component</div>
                <div>Yesterday - Initial commit</div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
      
      <BottomBar>
        <div className="flex items-center space-x-3">
          <span> Ready</span>
          <span className="text-blue-200">main</span>
          <span>0 errors, 0 warnings</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-3">
          <span>Ln 24, Col 8</span>
          <span>UTF-8</span>
          <span>React TSX</span>
        </div>
      </BottomBar>
    </Layout>
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,K,Q;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Layout className="bg-gray-800">
      <TopBar className="bg-gray-900 border-gray-700">
        <span className="font-medium text-gray-200">Dark Theme Layout</span>
      </TopBar>
      
      <div className="flex flex-1">
        <ActionBar className="bg-gray-900 border-gray-600">
          <ActionBarItems />
        </ActionBar>
        
        <Sidebar side="left" width="240px" className="bg-gray-800 border-gray-600">
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-200">Dark Explorer</h3>
            <div className="space-y-2">
              {['index.tsx', 'styles.css', 'utils.ts'].map((file, index) => <div key={index} className="p-2 hover:bg-gray-700 rounded cursor-pointer text-sm text-gray-300 flex items-center space-x-2">
                  <FileIcon size={14} className="text-gray-400" />
                  <span>{file}</span>
                </div>)}
            </div>
          </div>
        </Sidebar>
        
        <div className="flex flex-col flex-1">
          <MainContent className="bg-gray-800">
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-200">Dark Theme</h2>
                <p className="text-gray-400">Perfect for late-night coding sessions.</p>
                <Button variant="outline">Open Terminal</Button>
              </div>
            </div>
          </MainContent>
          
          <Console className="bg-black border-gray-600">
            <div className="space-y-1">
              <div className="text-gray-500">$ npm run dev</div>
              <div className="text-green-400"> Development server running</div>
              <div className="text-cyan-400">ℹ Hot reload enabled</div>
              <div className="text-gray-500">$ _</div>
            </div>
          </Console>
        </div>
      </div>
      
      <BottomBar className="bg-gray-900 border-gray-700 text-gray-200">
        <span>Dark Mode Active</span>
        <div className="flex-1"></div>
        <span>TypeScript • Dark+</span>
      </BottomBar>
    </Layout>
}`,...(Q=(K=L.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,se;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="h-96 flex">
      <ActionBar>
        <ActionBarItems />
      </ActionBar>
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">Action bar on the left</span>
      </div>
    </div>
}`,...(se=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,ne,te;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="h-96 flex">
      <Sidebar side="left" width="300px">
        <SidebarContent title="Standalone Sidebar" />
      </Sidebar>
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">Sidebar demo</span>
      </div>
    </div>
}`,...(te=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,re,ie;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="h-96 flex flex-col">
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">Console at the bottom</span>
      </div>
      <Console height="120px">
        <ConsoleContent />
      </Console>
    </div>
}`,...(ie=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const _e=["Default","Minimal","FullExpanded","DarkTheme","ActionBarOnly","SidebarOnly","ConsoleOnly"];export{w as ActionBarOnly,A as ConsoleOnly,L as DarkTheme,B as Default,_ as FullExpanded,S as Minimal,T as SidebarOnly,_e as __namedExportsOrder,Se as default};
