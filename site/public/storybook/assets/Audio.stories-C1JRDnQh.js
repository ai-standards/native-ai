import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as V}from"./index-BwDkhjyp.js";import{c as i}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const ke={xs:"w-48",sm:"w-64",md:"w-80",lg:"w-96",xl:"w-[32rem]",full:"w-full"},y={none:"",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},n=({src:a,size:m="md",rounded:l="md",controls:p=!0,autoPlay:o=!1,muted:r=!1,loop:q=!1,placeholder:w,fallback:g,title:d,description:c,onLoad:v,onError:h,onEnded:s,onPlay:t,onPause:we,className:ge,children:ve,...he})=>{const[x,B]=V.useState("loading"),ye=V.useRef(null),xe=()=>{B("loaded"),v==null||v()},fe=()=>{B("error"),h==null||h()},be=x==="loading"&&w,je=x==="error"&&g,M=Array.isArray(a)?a:a?[a]:[];return e.jsxs("div",{className:i("relative flex flex-col",ke[m],ge),...he,children:[(d||c)&&e.jsxs("div",{className:"mb-2",children:[d&&e.jsx("h3",{className:"text-sm font-medium text-gray-900 truncate",children:d}),c&&e.jsx("p",{className:"text-xs text-gray-600 mt-1 line-clamp-2",children:c})]}),e.jsxs("div",{className:i("relative bg-gray-50 border border-gray-200",y[l],"p-2"),children:[M.length>0&&e.jsxs("audio",{ref:ye,className:"w-full",controls:p,autoPlay:o,muted:r,loop:q,onLoadedData:xe,onError:fe,onEnded:s,onPlay:t,onPause:we,children:[M.map((Ne,Ae)=>e.jsx("source",{src:Ne},Ae)),ve]}),be&&e.jsx("div",{className:i("absolute inset-0 flex items-center justify-center bg-gray-100",y[l]),children:w}),je&&e.jsx("div",{className:i("absolute inset-0 flex items-center justify-center bg-gray-50",y[l]),children:g}),!a||x==="loading"&&!w?e.jsx("div",{className:i("flex items-center justify-center p-4 text-gray-400",y[l]),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("svg",{className:"w-5 h-5 animate-pulse",fill:"currentColor",viewBox:"0 0 20 20",children:[e.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793l-4.146-3.317a1 1 0 00-.632-.226H2a1 1 0 01-1-1V7.5a1 1 0 011-1h1.605a1 1 0 00.632-.226l4.146-3.317a1 1 0 011.555.693zM14 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z",clipRule:"evenodd"}),e.jsx("path",{d:"M16.5 6A1.5 1.5 0 0118 7.5v5a1.5 1.5 0 11-3 0v-5A1.5 1.5 0 0116.5 6z"})]}),e.jsx("span",{className:"text-sm",children:"Loading audio..."})]})}):null,x==="error"&&!g?e.jsx("div",{className:i("flex items-center justify-center p-4 text-gray-400",y[l]),children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-xs",children:"Audio failed to load"})]})}):null]})]})},u=({tracks:a,size:m="md",rounded:l="md",controls:p=!0,currentTrack:o,onTrackSelect:r,autoNext:q=!1,className:w,...g})=>{const[d,c]=V.useState(o??0),v=s=>{if(q&&s<a.length-1){const t=s+1;c(t),r==null||r(a[t],t)}},h=(s,t)=>{c(t),r==null||r(s,t)};return e.jsx("div",{className:i("space-y-3",w),...g,children:a.map((s,t)=>e.jsxs("div",{className:"relative",children:[d===t&&e.jsx("div",{className:"absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-full"}),e.jsx(n,{src:s.src,title:s.title,description:s.artist?`${s.artist}${s.duration?" • "+s.duration:""}`:s.description,size:m,rounded:l,controls:p,onEnded:()=>v(t),className:i("cursor-pointer transition-colors",d===t?"ring-2 ring-blue-500 ring-offset-2":"hover:bg-gray-50"),onClick:()=>h(s,t)})]},t))})};try{n.displayName="Audio",n.__docgenInfo={description:"",displayName:"Audio",props:{src:{defaultValue:null,description:"Audio source URL or array of sources",name:"src",required:!1,type:{name:"string | string[]"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},rounded:{defaultValue:{value:"md"},description:"Border radius",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},controls:{defaultValue:{value:"true"},description:"Show audio controls",name:"controls",required:!1,type:{name:"boolean"}},autoPlay:{defaultValue:{value:"false"},description:"Autoplay audio (not recommended for accessibility)",name:"autoPlay",required:!1,type:{name:"boolean"}},muted:{defaultValue:{value:"false"},description:"Mute audio by default",name:"muted",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"false"},description:"Loop audio playback",name:"loop",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Loading state placeholder",name:"placeholder",required:!1,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"Error fallback content",name:"fallback",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Audio title",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Audio description",name:"description",required:!1,type:{name:"string"}},onLoad:{defaultValue:null,description:"Audio load callback",name:"onLoad",required:!1,type:{name:"(() => void)"}},onError:{defaultValue:null,description:"Audio error callback",name:"onError",required:!1,type:{name:"(() => void)"}},onEnded:{defaultValue:null,description:"Audio ended callback",name:"onEnded",required:!1,type:{name:"(() => void)"}},onPlay:{defaultValue:null,description:"Play callback",name:"onPlay",required:!1,type:{name:"(() => void)"}},onPause:{defaultValue:null,description:"Pause callback",name:"onPause",required:!1,type:{name:"(() => void)"}}}}}catch{}try{u.displayName="AudioPlaylist",u.__docgenInfo={description:"",displayName:"AudioPlaylist",props:{tracks:{defaultValue:null,description:"Array of audio tracks",name:"tracks",required:!0,type:{name:"{ src: string | string[]; title?: string | undefined; artist?: string | undefined; duration?: string | undefined; description?: string | undefined; }[]"}},size:{defaultValue:{value:"md"},description:"Size for all audio players",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},rounded:{defaultValue:{value:"md"},description:"Rounded corners for all audio players",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},controls:{defaultValue:{value:"true"},description:"Show controls on all players",name:"controls",required:!1,type:{name:"boolean"}},currentTrack:{defaultValue:null,description:"Currently playing track index",name:"currentTrack",required:!1,type:{name:"number"}},onTrackSelect:{defaultValue:null,description:"Callback when track is selected",name:"onTrackSelect",required:!1,type:{name:"((track: any, index: number) => void)"}},autoNext:{defaultValue:{value:"false"},description:"Autoplay next track",name:"autoNext",required:!1,type:{name:"boolean"}}}}}catch{}const Te={title:"Media/Audio",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","full"]},rounded:{control:"select",options:["none","sm","md","lg","full"]}}},f={args:{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",controls:!0}},b={args:{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Bell Sound",description:"A pleasant bell ringing sound effect",controls:!0}},j={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Extra Small"}),e.jsx(n,{size:"xs",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"XS Audio",controls:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Small"}),e.jsx(n,{size:"sm",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Small Audio",controls:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Medium"}),e.jsx(n,{size:"md",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Medium Audio",controls:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Large"}),e.jsx(n,{size:"lg",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Large Audio",controls:!0})]})]}),parameters:{layout:"padded"}},N={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"None"}),e.jsx(n,{rounded:"none",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"No Border Radius",controls:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Small"}),e.jsx(n,{rounded:"sm",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Small Border Radius",controls:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Medium"}),e.jsx(n,{rounded:"md",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Medium Border Radius",controls:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Large"}),e.jsx(n,{rounded:"lg",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Large Border Radius",controls:!0})]})]}),parameters:{layout:"padded"}},A={args:{src:"",placeholder:e.jsxs("div",{className:"flex items-center gap-2 text-gray-500",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"}),e.jsx("span",{className:"text-sm",children:"Loading audio..."})]})}},k={args:{src:"/broken-audio-url.wav",title:"Broken Audio File",fallback:e.jsxs("div",{className:"flex items-center gap-2 text-red-400",children:[e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-xs",children:"Failed to load audio"})]})}},S={args:{src:["https://www.soundjay.com/misc/sounds/bell-ringing-05.wav","https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"],title:"Multi-format Audio",description:"Audio with multiple source formats for compatibility",controls:!0}},P={args:{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Autoplay Audio",description:"This audio will start playing automatically (muted)",autoPlay:!0,muted:!0,controls:!0}},z={args:{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Background Audio",description:"Audio without visible controls",controls:!1}},R={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Basic Playlist"}),e.jsx(u,{tracks:[{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Bell Sound 1",artist:"Sound Effects",duration:"0:03"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Bell Sound 2",artist:"Sound Effects",duration:"0:03"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Bell Sound 3",artist:"Sound Effects",duration:"0:03"}],className:"max-w-md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Auto-next Playlist"}),e.jsx(u,{tracks:[{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Track 1",description:"First track in auto-play sequence"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Track 2",description:"Second track will auto-play after first"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Track 3",description:"Final track in the sequence"}],autoNext:!0,className:"max-w-md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large Size Playlist"}),e.jsx(u,{tracks:[{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Podcast Episode 1",artist:"Tech Talk",duration:"45:30"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Podcast Episode 2",artist:"Tech Talk",duration:"52:15"}],size:"lg",className:"max-w-lg"})]})]}),parameters:{layout:"padded"}},T={render:()=>{const[a,m]=V.useState(0),l=(p,o)=>{m(o),console.log(`Selected track ${o+1}: ${p.title}`)};return e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Playlist"}),e.jsx("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-800",children:["Current track: ",e.jsx("strong",{children:a+1})]})}),e.jsx(u,{tracks:[{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Morning Meditation",artist:"Calm Sounds",duration:"10:00"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Focus Music",artist:"Productivity",duration:"25:00"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Nature Sounds",artist:"Relaxation",duration:"30:00"}],currentTrack:a,onTrackSelect:l,className:"max-w-md"}),e.jsx("p",{className:"text-sm text-gray-600 mt-4",children:"Click on any track to select it. Check the console for events."})]})},parameters:{layout:"padded"}};var C,E,_;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    controls: true
  }
}`,...(_=(E=f.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var L,F,I;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Bell Sound',
    description: 'A pleasant bell ringing sound effect',
    controls: true
  }
}`,...(I=(F=b.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var W,D,$;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Extra Small</h3>
        <Audio size="xs" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" title="XS Audio" controls />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Small</h3>
        <Audio size="sm" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" title="Small Audio" controls />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Medium</h3>
        <Audio size="md" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" title="Medium Audio" controls />
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Large</h3>
        <Audio size="lg" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" title="Large Audio" controls />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...($=(D=j.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var X,H,O;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold mb-2">None</p>
        <Audio rounded="none" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" title="No Border Radius" controls />
      </div>
      
      <div>
        <p className="text-sm font-semibold mb-2">Small</p>
        <Audio rounded="sm" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" title="Small Border Radius" controls />
      </div>
      
      <div>
        <p className="text-sm font-semibold mb-2">Medium</p>
        <Audio rounded="md" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" title="Medium Border Radius" controls />
      </div>
      
      <div>
        <p className="text-sm font-semibold mb-2">Large</p>
        <Audio rounded="lg" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" title="Large Border Radius" controls />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(O=(H=N.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,G,J;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    src: '',
    // No source to show placeholder
    placeholder: <div className="flex items-center gap-2 text-gray-500">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
        <span className="text-sm">Loading audio...</span>
      </div>
  }
}`,...(J=(G=A.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    src: '/broken-audio-url.wav',
    title: 'Broken Audio File',
    fallback: <div className="flex items-center gap-2 text-red-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-xs">Failed to load audio</span>
      </div>
  }
}`,...(Y=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,se;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    src: ['https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', 'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'],
    title: 'Multi-format Audio',
    description: 'Audio with multiple source formats for compatibility',
    controls: true
  }
}`,...(se=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,te,ne;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Autoplay Audio',
    description: 'This audio will start playing automatically (muted)',
    autoPlay: true,
    muted: true,
    controls: true
  }
}`,...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,re,ie;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Background Audio',
    description: 'Audio without visible controls',
    controls: false
  }
}`,...(ie=(re=z.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,de,ce;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Playlist</h3>
        <AudioPlaylist tracks={[{
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Bell Sound 1',
        artist: 'Sound Effects',
        duration: '0:03'
      }, {
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Bell Sound 2',
        artist: 'Sound Effects',
        duration: '0:03'
      }, {
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Bell Sound 3',
        artist: 'Sound Effects',
        duration: '0:03'
      }]} className="max-w-md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Auto-next Playlist</h3>
        <AudioPlaylist tracks={[{
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Track 1',
        description: 'First track in auto-play sequence'
      }, {
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Track 2',
        description: 'Second track will auto-play after first'
      }, {
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Track 3',
        description: 'Final track in the sequence'
      }]} autoNext={true} className="max-w-md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large Size Playlist</h3>
        <AudioPlaylist tracks={[{
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Podcast Episode 1',
        artist: 'Tech Talk',
        duration: '45:30'
      }, {
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Podcast Episode 2',
        artist: 'Tech Talk',
        duration: '52:15'
      }]} size="lg" className="max-w-lg" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(ce=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [currentTrack, setCurrentTrack] = React.useState(0);
    const handleTrackSelect = (track: any, index: number) => {
      setCurrentTrack(index);
      console.log(\`Selected track \${index + 1}: \${track.title}\`);
    };
    return <div>
        <h3 className="text-lg font-semibold mb-4">Interactive Playlist</h3>
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            Current track: <strong>{currentTrack + 1}</strong>
          </p>
        </div>
        <AudioPlaylist tracks={[{
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Morning Meditation',
        artist: 'Calm Sounds',
        duration: '10:00'
      }, {
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Focus Music',
        artist: 'Productivity',
        duration: '25:00'
      }, {
        src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        title: 'Nature Sounds',
        artist: 'Relaxation',
        duration: '30:00'
      }]} currentTrack={currentTrack} onTrackSelect={handleTrackSelect} className="max-w-md" />
        <p className="text-sm text-gray-600 mt-4">
          Click on any track to select it. Check the console for events.
        </p>
      </div>;
  },
  parameters: {
    layout: 'padded'
  }
}`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ve=["Default","WithTitleAndDescription","Sizes","RoundedCorners","WithPlaceholder","WithFallback","MultipleSources","AutoPlay","WithoutControls","AudioPlaylistStory","InteractivePlaylist"];export{R as AudioPlaylistStory,P as AutoPlay,f as Default,T as InteractivePlaylist,S as MultipleSources,N as RoundedCorners,j as Sizes,k as WithFallback,A as WithPlaceholder,b as WithTitleAndDescription,z as WithoutControls,Ve as __namedExportsOrder,Te as default};
