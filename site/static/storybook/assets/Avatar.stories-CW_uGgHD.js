import{j as a}from"./jsx-runtime-Yb_4y5hn.js";import{R as f}from"./index-BwDkhjyp.js";import{c as l}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const la={xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-sm",md:"w-10 h-10 text-base",lg:"w-12 h-12 text-lg",xl:"w-16 h-16 text-xl","2xl":"w-20 h-20 text-2xl"},D={circle:"rounded-full",square:"",rounded:"rounded-md"},z={default:"bg-gray-100 text-gray-600",soft:"bg-blue-100 text-blue-600",outline:"bg-white border-2 border-gray-200 text-gray-600"},pa={online:"bg-green-500",offline:"bg-gray-400",away:"bg-yellow-500",busy:"bg-red-500"},s=({src:p,alt:c,size:t="md",shape:n="circle",variant:h="default",fallback:A,status:r,statusColor:i,className:m,onError:e,...y})=>{var S;const[sa,ea]=f.useState(!1),[N,k]=f.useState(!0),ta=ca=>{ea(!0),k(!1),e==null||e(ca)},ra=()=>{k(!1)},U=sa||!p,oa=A||((S=c==null?void 0:c.charAt(0))==null?void 0:S.toUpperCase())||"?";return a.jsxs("div",{className:l("relative inline-flex items-center justify-center",m),...y,children:[a.jsx("div",{className:l("relative flex items-center justify-center font-medium overflow-hidden",la[t],D[n],U&&z[h]),children:U?a.jsx("span",{children:oa}):a.jsxs(a.Fragment,{children:[a.jsx("img",{src:p,alt:c,className:l("w-full h-full object-cover",N&&"opacity-0",D[n]),onError:ta,onLoad:ra}),N&&a.jsx("div",{className:l("absolute inset-0 flex items-center justify-center",z[h]),children:a.jsx("div",{className:"animate-spin",children:"⟳"})})]})}),(r||i)&&a.jsx("div",{className:l("absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white",t==="xs"&&"w-2 h-2 border",t==="sm"&&"w-2.5 h-2.5 border",t==="lg"&&"w-4 h-4",t==="xl"&&"w-5 h-5",t==="2xl"&&"w-6 h-6",i?"":r?pa[r]:"bg-gray-400"),style:i?{backgroundColor:i}:void 0,"aria-label":r?`Status: ${r}`:"Custom status"})]})},C={tight:"-space-x-1",normal:"-space-x-2",loose:"space-x-1"},o=({children:p,max:c=5,size:t="md",spacing:n="normal",className:h,...A})=>{const r=f.Children.toArray(p),i=r.slice(0,c),m=r.length-c;return a.jsxs("div",{className:l("flex items-center",C[n],h),...A,children:[i.map((e,y)=>a.jsx("div",{className:"relative",children:f.isValidElement(e)&&e.type===s?f.cloneElement(e,{size:e.props.size||t,className:l("ring-2 ring-white",e.props.className)}):e},y)),m>0&&a.jsx(s,{size:t,fallback:`+${m}`,variant:"outline",className:"ring-2 ring-white"})]})};try{s.displayName="Avatar",s.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"Image source URL",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Alt text for the image",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Avatar size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},fallback:{defaultValue:null,description:"Fallback text when image fails to load",name:"fallback",required:!1,type:{name:"string"}},shape:{defaultValue:{value:"circle"},description:"Avatar shape",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'},{value:'"rounded"'}]}},status:{defaultValue:null,description:"Status indicator",name:"status",required:!1,type:{name:"enum",value:[{value:'"online"'},{value:'"offline"'},{value:'"away"'},{value:'"busy"'}]}},statusColor:{defaultValue:null,description:"Custom status indicator color",name:"statusColor",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Avatar variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"default"'},{value:'"soft"'}]}}}}}catch{}try{o.displayName="AvatarGroup",o.__docgenInfo={description:"",displayName:"AvatarGroup",props:{max:{defaultValue:{value:"5"},description:"Maximum number of avatars to show before overflow",name:"max",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Avatar size for all children",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},spacing:{defaultValue:{value:"normal"},description:"Spacing between avatars",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"tight"'},{value:'"loose"'}]}}}}}catch{}const ma={title:"Media/Avatar",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},shape:{control:"select",options:["circle","square","rounded"]},variant:{control:"select",options:["default","soft","outline"]},status:{control:"select",options:["online","offline","away","busy"]}}},u={args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"User avatar"}},d={args:{src:"",alt:"John Doe",fallback:"JD"}},v={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(s,{size:"xs",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Extra small"}),a.jsx(s,{size:"sm",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Small"}),a.jsx(s,{size:"md",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Medium"}),a.jsx(s,{size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Large"}),a.jsx(s,{size:"xl",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Extra large"}),a.jsx(s,{size:"2xl",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"2X Large"})]})},g={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(s,{shape:"circle",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Circle"}),a.jsx(s,{shape:"rounded",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Rounded"}),a.jsx(s,{shape:"square",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Square"})]})},x={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(s,{variant:"default",fallback:"DF"}),a.jsx(s,{variant:"soft",fallback:"SF"}),a.jsx(s,{variant:"outline",fallback:"OL"})]})},b={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(s,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Online user",status:"online"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"Away user",status:"away"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"Busy user",status:"busy"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",alt:"Offline user",status:"offline"})]})},w={args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"User with custom status",statusColor:"#8b5cf6"}},j={render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Default Group"}),a.jsxs(o,{children:[a.jsx(s,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"User 1"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"User 2"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"User 3"}),a.jsx(s,{fallback:"JD"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"With Overflow (max=3)"}),a.jsxs(o,{max:3,children:[a.jsx(s,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"User 1"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"User 2"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"User 3"}),a.jsx(s,{fallback:"AB"}),a.jsx(s,{fallback:"CD"}),a.jsx(s,{fallback:"EF"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Different Sizes"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs(o,{size:"sm",children:[a.jsx(s,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"User 1"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"User 2"}),a.jsx(s,{fallback:"JD"})]}),a.jsxs(o,{size:"lg",children:[a.jsx(s,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"User 1"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"User 2"}),a.jsx(s,{fallback:"JD"})]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Different Spacing"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Tight spacing"}),a.jsxs(o,{spacing:"tight",children:[a.jsx(s,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"User 1"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"User 2"}),a.jsx(s,{fallback:"JD"})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Loose spacing"}),a.jsxs(o,{spacing:"loose",children:[a.jsx(s,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"User 1"}),a.jsx(s,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"User 2"}),a.jsx(s,{fallback:"JD"})]})]})]})]})]}),parameters:{layout:"padded"}};var G,q,_;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'User avatar'
  }
}`,...(_=(q=u.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var J,L,V;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    src: '',
    // Broken URL to show fallback
    alt: 'John Doe',
    fallback: 'JD'
  }
}`,...(V=(L=d.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var F,E,O;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar size="xs" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Extra small" />
      <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Small" />
      <Avatar size="md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Medium" />
      <Avatar size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Large" />
      <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Extra large" />
      <Avatar size="2xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="2X Large" />
    </div>
}`,...(O=(E=v.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,W,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar shape="circle" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Circle" />
      <Avatar shape="rounded" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Rounded" />
      <Avatar shape="square" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Square" />
    </div>
}`,...(B=(W=g.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var I,M,T;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar variant="default" fallback="DF" />
      <Avatar variant="soft" fallback="SF" />
      <Avatar variant="outline" fallback="OL" />
    </div>
}`,...(T=(M=x.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var X,$,H;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Online user" status="online" />
      <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Away user" status="away" />
      <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Busy user" status="busy" />
      <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="Offline user" status="offline" />
    </div>
}`,...(H=($=b.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var K,P,Q;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'User with custom status',
    statusColor: '#8b5cf6'
  }
}`,...(Q=(P=w.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var Y,Z,aa;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Default Group</h3>
        <AvatarGroup>
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User 1" />
          <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="User 2" />
          <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User 3" />
          <Avatar fallback="JD" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">With Overflow (max=3)</h3>
        <AvatarGroup max={3}>
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User 1" />
          <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="User 2" />
          <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User 3" />
          <Avatar fallback="AB" />
          <Avatar fallback="CD" />
          <Avatar fallback="EF" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Different Sizes</h3>
        <div className="space-y-4">
          <AvatarGroup size="sm">
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User 1" />
            <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="User 2" />
            <Avatar fallback="JD" />
          </AvatarGroup>
          <AvatarGroup size="lg">
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User 1" />
            <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="User 2" />
            <Avatar fallback="JD" />
          </AvatarGroup>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Different Spacing</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Tight spacing</p>
            <AvatarGroup spacing="tight">
              <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User 1" />
              <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="User 2" />
              <Avatar fallback="JD" />
            </AvatarGroup>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Loose spacing</p>
            <AvatarGroup spacing="loose">
              <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User 1" />
              <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="User 2" />
              <Avatar fallback="JD" />
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(aa=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:aa.source}}};const ua=["Default","WithFallback","Sizes","Shapes","Variants","WithStatus","CustomStatusColor","AvatarGroupStory"];export{j as AvatarGroupStory,w as CustomStatusColor,u as Default,g as Shapes,v as Sizes,x as Variants,d as WithFallback,b as WithStatus,ua as __namedExportsOrder,ma as default};
