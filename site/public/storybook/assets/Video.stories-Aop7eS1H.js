import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as E}from"./index-BwDkhjyp.js";import{c as n}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const _e={video:"aspect-video",square:"aspect-square",photo:"aspect-[4/3]",wide:"aspect-[21/9]",auto:""},ze={xs:"w-32 h-18",sm:"w-48 h-27",md:"w-64 h-36",lg:"w-96 h-54",xl:"w-[32rem] h-72",full:"w-full h-full"},d={none:"",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},t=({src:a,aspectRatio:l="video",size:r="md",rounded:s="md",controls:w=!0,autoPlay:m=!1,muted:c=!1,loop:V=!1,poster:_,placeholder:o,fallback:i,caption:R,onLoad:z,onError:S,onEnded:ue,onPlay:ge,onPause:ve,className:he,onClick:xe,children:be,...fe})=>{const[u,q]=E.useState("loading"),Be=E.useRef(null),ye=()=>{q("loaded"),z==null||z()},ke=()=>{q("error"),S==null||S()},je=u==="loading"&&o,Ne=u==="error"&&i,C=Array.isArray(a)?a:a?[a]:[];return e.jsxs("figure",{className:n("relative",he),onClick:xe,children:[e.jsxs("div",{className:n("relative overflow-hidden bg-black",l!=="auto"&&_e[l],r!=="full"&&ze[r],d[s],"group"),children:[C.length>0&&e.jsxs("video",{ref:Be,className:n("w-full h-full object-cover",d[s]),controls:w,autoPlay:m,muted:c||m,loop:V,poster:_,onLoadedData:ye,onError:ke,onEnded:ue,onPlay:ge,onPause:ve,...fe,children:[C.map((we,Ve)=>e.jsx("source",{src:we},Ve)),be]}),je&&e.jsx("div",{className:n("absolute inset-0 flex items-center justify-center bg-gray-100",d[s]),children:o}),Ne&&e.jsx("div",{className:n("absolute inset-0 flex items-center justify-center bg-gray-50",d[s]),children:i}),!a||u==="loading"&&!o?e.jsx("div",{className:n("absolute inset-0 flex items-center justify-center bg-gray-900",d[s]),children:e.jsx("div",{className:"text-white",children:e.jsx("svg",{className:"w-12 h-12 animate-pulse",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"})})})}):null,u==="error"&&!i?e.jsxs("div",{className:n("absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400",d[s]),children:[e.jsx("svg",{className:"w-12 h-12 mb-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-sm",children:"Video failed to load"})]}):null]}),R&&e.jsx("figcaption",{className:"mt-2 text-sm text-gray-600 text-center",children:R})]})},Se={2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4"},Re={xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6"},p=({videos:a,columns:l=2,gap:r="md",aspectRatio:s="video",rounded:w="md",controls:m=!0,onVideoClick:c,className:V,..._})=>e.jsx("div",{className:n("grid",Se[l],Re[r],V),..._,children:a.map((o,i)=>e.jsx(t,{src:o.src,poster:o.poster,caption:o.caption,size:"full",aspectRatio:s,rounded:w,controls:m,className:c?"cursor-pointer hover:opacity-80 transition-opacity":void 0,onClick:()=>c==null?void 0:c(o,i)},i))});try{t.displayName="Video",t.__docgenInfo={description:"",displayName:"Video",props:{src:{defaultValue:null,description:"Video source URL or array of sources",name:"src",required:!1,type:{name:"string | string[]"}},aspectRatio:{defaultValue:{value:"video"},description:"Aspect ratio of the video",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"video"'},{value:'"photo"'},{value:'"auto"'},{value:'"wide"'}]}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"full"'}]}},rounded:{defaultValue:{value:"md"},description:"Border radius",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},controls:{defaultValue:{value:"true"},description:"Show video controls",name:"controls",required:!1,type:{name:"boolean"}},autoPlay:{defaultValue:{value:"false"},description:"Autoplay video (muted by default for accessibility)",name:"autoPlay",required:!1,type:{name:"boolean"}},muted:{defaultValue:{value:"false"},description:"Mute video by default",name:"muted",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"false"},description:"Loop video playback",name:"loop",required:!1,type:{name:"boolean"}},poster:{defaultValue:null,description:"Poster image URL",name:"poster",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Loading state placeholder",name:"placeholder",required:!1,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"Error fallback content",name:"fallback",required:!1,type:{name:"ReactNode"}},caption:{defaultValue:null,description:"Caption text",name:"caption",required:!1,type:{name:"string"}},onLoad:{defaultValue:null,description:"Video load callback",name:"onLoad",required:!1,type:{name:"(() => void)"}},onError:{defaultValue:null,description:"Video error callback",name:"onError",required:!1,type:{name:"(() => void)"}},onEnded:{defaultValue:null,description:"Video ended callback",name:"onEnded",required:!1,type:{name:"(() => void)"}},onPlay:{defaultValue:null,description:"Play callback",name:"onPlay",required:!1,type:{name:"(() => void)"}},onPause:{defaultValue:null,description:"Pause callback",name:"onPause",required:!1,type:{name:"(() => void)"}}}}}catch{}try{p.displayName="VideoGallery",p.__docgenInfo={description:"",displayName:"VideoGallery",props:{videos:{defaultValue:null,description:"Array of video sources",name:"videos",required:!0,type:{name:"{ src: string | string[]; poster?: string | undefined; caption?: string | undefined; alt?: string | undefined; }[]"}},columns:{defaultValue:{value:"2"},description:"Number of columns in grid",name:"columns",required:!1,type:{name:"enum",value:[{value:"2"},{value:"3"},{value:"4"}]}},gap:{defaultValue:{value:"md"},description:"Gap between videos",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},aspectRatio:{defaultValue:{value:"video"},description:"Aspect ratio for all videos",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"video"'},{value:'"photo"'},{value:'"auto"'},{value:'"wide"'}]}},rounded:{defaultValue:{value:"md"},description:"Rounded corners for all videos",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},controls:{defaultValue:{value:"true"},description:"Show controls on all videos",name:"controls",required:!1,type:{name:"boolean"}},onVideoClick:{defaultValue:null,description:"Callback when video is clicked",name:"onVideoClick",required:!1,type:{name:"((video: { src: string | string[]; poster?: string; caption?: string; alt?: string | undefined; }, index: number) => void) | undefined"}}}}}catch{}const Ge={title:"Media/Video",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{aspectRatio:{control:"select",options:["video","square","photo","wide","auto"]},size:{control:"select",options:["xs","sm","md","lg","xl","full"]},rounded:{control:"select",options:["none","sm","md","lg","full"]}}},g={args:{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0}},v={args:{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",caption:"Big Buck Bunny - Open source animated movie",controls:!0}},h={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Extra Small"}),e.jsx(t,{size:"xs",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Small"}),e.jsx(t,{size:"sm",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Medium"}),e.jsx(t,{size:"md",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0})]})]}),parameters:{layout:"padded"}},x={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Video (16:9)"}),e.jsx(t,{aspectRatio:"video",size:"full",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Square"}),e.jsx(t,{aspectRatio:"square",size:"full",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Photo (4:3)"}),e.jsx(t,{aspectRatio:"photo",size:"full",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Wide (21:9)"}),e.jsx(t,{aspectRatio:"wide",size:"full",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0})]})]}),parameters:{layout:"padded"}},b={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(t,{size:"sm",rounded:"none",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0}),e.jsx("p",{className:"text-sm mt-2",children:"None"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{size:"sm",rounded:"sm",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0}),e.jsx("p",{className:"text-sm mt-2",children:"Small"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{size:"sm",rounded:"md",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0}),e.jsx("p",{className:"text-sm mt-2",children:"Medium"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{size:"sm",rounded:"lg",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0}),e.jsx("p",{className:"text-sm mt-2",children:"Large"})]})]})},f={args:{src:"",placeholder:e.jsxs("div",{className:"flex flex-col items-center gap-2 text-white",children:[e.jsx("div",{className:"animate-pulse",children:e.jsx("svg",{className:"w-16 h-16",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-sm",children:"Loading video..."})]})}},B={args:{src:"/broken-video-url.mp4",fallback:e.jsxs("div",{className:"flex flex-col items-center gap-2 text-gray-400",children:[e.jsx("svg",{className:"w-16 h-16",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-sm",children:"Video failed to load"})]})}},y={args:{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",autoPlay:!0,muted:!0,loop:!0,controls:!0}},k={args:{src:["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm"],poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",controls:!0}},j={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Default Gallery (2 columns)"}),e.jsx(p,{videos:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",caption:"Big Buck Bunny"},{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",caption:"Elephants Dream"},{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",caption:"Sintel"},{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",caption:"Tears of Steel"}],className:"max-w-4xl"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"3 Columns with Large Gap"}),e.jsx(p,{videos:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",caption:"Big Buck Bunny"},{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",caption:"Elephants Dream"},{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",caption:"Sintel"}],columns:3,gap:"lg",aspectRatio:"square",rounded:"lg",className:"max-w-4xl"})]})]}),parameters:{layout:"padded"}},N={render:()=>{const a=(l,r)=>{alert(`Clicked video ${r+1}: ${l.caption||"Untitled"}`)};return e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Clickable Video Gallery"}),e.jsx(p,{videos:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",caption:"Big Buck Bunny"},{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",caption:"Elephants Dream"}],onVideoClick:a,className:"max-w-2xl"}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Click on any video to see an alert"})]})},parameters:{layout:"padded"}};var D,G,M;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    controls: true
  }
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var P,A,L;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    caption: 'Big Buck Bunny - Open source animated movie',
    controls: true
  }
}`,...(L=(A=v.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var W,O,T;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Extra Small</h3>
        <Video size="xs" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Small</h3>
        <Video size="sm" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Medium</h3>
        <Video size="md" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(T=(O=h.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var I,U,$;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <div>
        <h3 className="text-sm font-semibold mb-2">Video (16:9)</h3>
        <Video aspectRatio="video" size="full" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Square</h3>
        <Video aspectRatio="square" size="full" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Photo (4:3)</h3>
        <Video aspectRatio="photo" size="full" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Wide (21:9)</h3>
        <Video aspectRatio="wide" size="full" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...($=(U=x.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var F,H,J;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <div className="text-center">
        <Video size="sm" rounded="none" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
        <p className="text-sm mt-2">None</p>
      </div>
      
      <div className="text-center">
        <Video size="sm" rounded="sm" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
        <p className="text-sm mt-2">Small</p>
      </div>
      
      <div className="text-center">
        <Video size="sm" rounded="md" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
        <p className="text-sm mt-2">Medium</p>
      </div>
      
      <div className="text-center">
        <Video size="sm" rounded="lg" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" controls />
        <p className="text-sm mt-2">Large</p>
      </div>
    </div>
}`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    src: '',
    // No source to show placeholder
    placeholder: <div className="flex flex-col items-center gap-2 text-white">
        <div className="animate-pulse">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-sm">Loading video...</span>
      </div>
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    src: '/broken-video-url.mp4',
    fallback: <div className="flex flex-col items-center gap-2 text-gray-400">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Video failed to load</span>
      </div>
  }
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    autoPlay: true,
    muted: true,
    loop: true,
    controls: true
  }
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ne,le;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    src: ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm'],
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    controls: true
  }
}`,...(le=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var re,ce,ie;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Gallery (2 columns)</h3>
        <VideoGallery videos={[{
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
        caption: 'Big Buck Bunny'
      }, {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        caption: 'Elephants Dream'
      }, {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        caption: 'Sintel'
      }, {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        caption: 'Tears of Steel'
      }]} className="max-w-4xl" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">3 Columns with Large Gap</h3>
        <VideoGallery videos={[{
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
        caption: 'Big Buck Bunny'
      }, {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        caption: 'Elephants Dream'
      }, {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        caption: 'Sintel'
      }]} columns={3} gap="lg" aspectRatio="square" rounded="lg" className="max-w-4xl" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(ie=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,me;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const handleVideoClick = (video: any, index: number) => {
      alert(\`Clicked video \${index + 1}: \${video.caption || 'Untitled'}\`);
    };
    return <div>
        <h3 className="text-lg font-semibold mb-4">Clickable Video Gallery</h3>
        <VideoGallery videos={[{
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
        caption: 'Big Buck Bunny'
      }, {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        caption: 'Elephants Dream'
      }]} onVideoClick={handleVideoClick} className="max-w-2xl" />
        <p className="text-sm text-gray-600 mt-2">Click on any video to see an alert</p>
      </div>;
  },
  parameters: {
    layout: 'padded'
  }
}`,...(me=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Me=["Default","WithCaption","Sizes","AspectRatios","RoundedCorners","WithPlaceholder","WithFallback","AutoPlay","MultipleSources","VideoGalleryStory","InteractiveGallery"];export{x as AspectRatios,y as AutoPlay,g as Default,N as InteractiveGallery,k as MultipleSources,b as RoundedCorners,h as Sizes,j as VideoGalleryStory,v as WithCaption,B as WithFallback,f as WithPlaceholder,Me as __namedExportsOrder,Ge as default};
