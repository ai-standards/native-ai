import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as P}from"./index-DHZDe_v1.js";import{c as r}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const De={xs:"w-48",sm:"w-64",md:"w-80",lg:"w-96",xl:"w-[32rem]",full:"w-full"},b={none:"",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},n=({src:a,size:m="md",rounded:o="md",controls:p=!0,autoPlay:l=!1,muted:t=!1,loop:z=!1,placeholder:f,fallback:v,title:d,description:u,onLoad:N,onError:g,onEnded:s,onPlay:i,onPause:fe,className:ve,children:Ne,...ge})=>{const[y,R]=P.useState("loading"),be=P.useRef(null),ye=()=>{R("loaded"),N==null||N()},xe=()=>{R("error"),g==null||g()},we=y==="loading"&&f,ke=y==="error"&&v,T=Array.isArray(a)?a:a?[a]:[];return e.jsxDEV("div",{className:r("relative flex flex-col",De[m],ve),...ge,children:[(d||u)&&e.jsxDEV("div",{className:"mb-2",children:[d&&e.jsxDEV("h3",{className:"text-sm font-medium text-gray-900 truncate",children:d},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:109,columnNumber:13},void 0),u&&e.jsxDEV("p",{className:"text-xs text-gray-600 mt-1 line-clamp-2",children:u},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:114,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:107,columnNumber:9},void 0),e.jsxDEV("div",{className:r("relative bg-gray-50 border border-gray-200",b[o],"p-2"),children:[T.length>0&&e.jsxDEV("audio",{ref:be,className:"w-full",controls:p,autoPlay:l,muted:t,loop:z,onLoadedData:ye,onError:xe,onEnded:s,onPlay:i,onPause:fe,children:[T.map((je,he)=>e.jsxDEV("source",{src:je},he,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:145,columnNumber:15},void 0)),Ne]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:131,columnNumber:11},void 0),we&&e.jsxDEV("div",{className:r("absolute inset-0 flex items-center justify-center bg-gray-100",b[o]),children:f},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:153,columnNumber:11},void 0),ke&&e.jsxDEV("div",{className:r("absolute inset-0 flex items-center justify-center bg-gray-50",b[o]),children:v},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:163,columnNumber:11},void 0),!a||y==="loading"&&!f?e.jsxDEV("div",{className:r("flex items-center justify-center p-4 text-gray-400",b[o]),children:e.jsxDEV("div",{className:"flex items-center gap-2",children:[e.jsxDEV("svg",{className:"w-5 h-5 animate-pulse",fill:"currentColor",viewBox:"0 0 20 20",children:[e.jsxDEV("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793l-4.146-3.317a1 1 0 00-.632-.226H2a1 1 0 01-1-1V7.5a1 1 0 011-1h1.605a1 1 0 00.632-.226l4.146-3.317a1 1 0 011.555.693zM14 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:179,columnNumber:17},void 0),e.jsxDEV("path",{d:"M16.5 6A1.5 1.5 0 0118 7.5v5a1.5 1.5 0 11-3 0v-5A1.5 1.5 0 0116.5 6z"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:180,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:178,columnNumber:15},void 0),e.jsxDEV("span",{className:"text-sm",children:"Loading audio..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:182,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:177,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:173,columnNumber:11},void 0):null,y==="error"&&!v?e.jsxDEV("div",{className:r("flex items-center justify-center p-4 text-gray-400",b[o]),children:e.jsxDEV("div",{className:"flex flex-col items-center gap-2",children:[e.jsxDEV("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:195,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:194,columnNumber:15},void 0),e.jsxDEV("span",{className:"text-xs",children:"Audio failed to load"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:197,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:193,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:189,columnNumber:11},void 0):null]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:122,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:97,columnNumber:5},void 0)},c=({tracks:a,size:m="md",rounded:o="md",controls:p=!0,currentTrack:l,onTrackSelect:t,autoNext:z=!1,className:f,...v})=>{const[d,u]=P.useState(l??0),N=s=>{if(z&&s<a.length-1){const i=s+1;u(i),t==null||t(a[i],i)}},g=(s,i)=>{u(i),t==null||t(s,i)};return e.jsxDEV("div",{className:r("space-y-3",f),...v,children:a.map((s,i)=>e.jsxDEV("div",{className:"relative",children:[d===i&&e.jsxDEV("div",{className:"absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-full"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:262,columnNumber:13},void 0),e.jsxDEV(n,{src:s.src,title:s.title,description:s.artist?`${s.artist}${s.duration?" • "+s.duration:""}`:s.description,size:m,rounded:o,controls:p,onEnded:()=>N(i),className:r("cursor-pointer transition-colors",d===i?"ring-2 ring-blue-500 ring-offset-2":"hover:bg-gray-50"),onClick:()=>g(s,i)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:265,columnNumber:11},void 0)]},i,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:259,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.tsx",lineNumber:257,columnNumber:5},void 0)};try{n.displayName="Audio",n.__docgenInfo={description:"",displayName:"Audio",props:{src:{defaultValue:null,description:"Audio source URL or array of sources",name:"src",required:!1,type:{name:"string | string[]"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"full"'}]}},rounded:{defaultValue:{value:"md"},description:"Border radius",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"full"'}]}},controls:{defaultValue:{value:"true"},description:"Show audio controls",name:"controls",required:!1,type:{name:"boolean"}},autoPlay:{defaultValue:{value:"false"},description:"Autoplay audio (not recommended for accessibility)",name:"autoPlay",required:!1,type:{name:"boolean"}},muted:{defaultValue:{value:"false"},description:"Mute audio by default",name:"muted",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"false"},description:"Loop audio playback",name:"loop",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Loading state placeholder",name:"placeholder",required:!1,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"Error fallback content",name:"fallback",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Audio title",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Audio description",name:"description",required:!1,type:{name:"string"}},onLoad:{defaultValue:null,description:"Audio load callback",name:"onLoad",required:!1,type:{name:"(() => void)"}},onError:{defaultValue:null,description:"Audio error callback",name:"onError",required:!1,type:{name:"(() => void)"}},onEnded:{defaultValue:null,description:"Audio ended callback",name:"onEnded",required:!1,type:{name:"(() => void)"}},onPlay:{defaultValue:null,description:"Play callback",name:"onPlay",required:!1,type:{name:"(() => void)"}},onPause:{defaultValue:null,description:"Pause callback",name:"onPause",required:!1,type:{name:"(() => void)"}}}}}catch{}try{c.displayName="AudioPlaylist",c.__docgenInfo={description:"",displayName:"AudioPlaylist",props:{tracks:{defaultValue:null,description:"Array of audio tracks",name:"tracks",required:!0,type:{name:"{ src: string | string[]; title?: string | undefined; artist?: string | undefined; duration?: string | undefined; description?: string | undefined; }[]"}},size:{defaultValue:{value:"md"},description:"Size for all audio players",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"full"'}]}},rounded:{defaultValue:{value:"md"},description:"Rounded corners for all audio players",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"full"'}]}},controls:{defaultValue:{value:"true"},description:"Show controls on all players",name:"controls",required:!1,type:{name:"boolean"}},currentTrack:{defaultValue:null,description:"Currently playing track index",name:"currentTrack",required:!1,type:{name:"number"}},onTrackSelect:{defaultValue:null,description:"Callback when track is selected",name:"onTrackSelect",required:!1,type:{name:"((track: any, index: number) => void)"}},autoNext:{defaultValue:{value:"false"},description:"Autoplay next track",name:"autoNext",required:!1,type:{name:"boolean"}}}}}catch{}const Se={title:"Media/Audio",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","full"]},rounded:{control:"select",options:["none","sm","md","lg","full"]}}},x={args:{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",controls:!0}},w={args:{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Bell Sound",description:"A pleasant bell ringing sound effect",controls:!0}},k={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-semibold mb-2",children:"Extra Small"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:47,columnNumber:9},void 0),e.jsxDEV(n,{size:"xs",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"XS Audio",controls:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:46,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-semibold mb-2",children:"Small"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:57,columnNumber:9},void 0),e.jsxDEV(n,{size:"sm",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Small Audio",controls:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:58,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:56,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-semibold mb-2",children:"Medium"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:67,columnNumber:9},void 0),e.jsxDEV(n,{size:"md",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Medium Audio",controls:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:68,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:66,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-semibold mb-2",children:"Large"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV(n,{size:"lg",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Large Audio",controls:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:78,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:76,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:45,columnNumber:5},void 0),parameters:{layout:"padded"}},j={render:()=>e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"text-sm font-semibold mb-2",children:"None"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:96,columnNumber:9},void 0),e.jsxDEV(n,{rounded:"none",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"No Border Radius",controls:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:97,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:95,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"text-sm font-semibold mb-2",children:"Small"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:106,columnNumber:9},void 0),e.jsxDEV(n,{rounded:"sm",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Small Border Radius",controls:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:107,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:105,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"text-sm font-semibold mb-2",children:"Medium"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:116,columnNumber:9},void 0),e.jsxDEV(n,{rounded:"md",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Medium Border Radius",controls:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:117,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:115,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"text-sm font-semibold mb-2",children:"Large"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:126,columnNumber:9},void 0),e.jsxDEV(n,{rounded:"lg",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Large Border Radius",controls:!0},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:127,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:125,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:94,columnNumber:5},void 0),parameters:{layout:"padded"}},h={args:{src:"",placeholder:e.jsxDEV("div",{className:"flex items-center gap-2 text-gray-500",children:[e.jsxDEV("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:146,columnNumber:9},void 0),e.jsxDEV("span",{className:"text-sm",children:"Loading audio..."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:147,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:145,columnNumber:7},void 0)}},D={args:{src:"/broken-audio-url.wav",title:"Broken Audio File",fallback:e.jsxDEV("div",{className:"flex items-center gap-2 text-red-400",children:[e.jsxDEV("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:160,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:159,columnNumber:9},void 0),e.jsxDEV("span",{className:"text-xs",children:"Failed to load audio"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:162,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:158,columnNumber:7},void 0)}},A={args:{src:["https://www.soundjay.com/misc/sounds/bell-ringing-05.wav","https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"],title:"Multi-format Audio",description:"Audio with multiple source formats for compatibility",controls:!0}},V={args:{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Autoplay Audio",description:"This audio will start playing automatically (muted)",autoPlay:!0,muted:!0,controls:!0}},E={args:{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Background Audio",description:"Audio without visible controls",controls:!1}},U={render:()=>e.jsxDEV("div",{className:"space-y-6",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Basic Playlist"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:205,columnNumber:9},void 0),e.jsxDEV(c,{tracks:[{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Bell Sound 1",artist:"Sound Effects",duration:"0:03"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Bell Sound 2",artist:"Sound Effects",duration:"0:03"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Bell Sound 3",artist:"Sound Effects",duration:"0:03"}],className:"max-w-md"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:206,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:204,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Auto-next Playlist"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:232,columnNumber:9},void 0),e.jsxDEV(c,{tracks:[{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Track 1",description:"First track in auto-play sequence"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Track 2",description:"Second track will auto-play after first"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Track 3",description:"Final track in the sequence"}],autoNext:!0,className:"max-w-md"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:233,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:231,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Large Size Playlist"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:257,columnNumber:9},void 0),e.jsxDEV(c,{tracks:[{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Podcast Episode 1",artist:"Tech Talk",duration:"45:30"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Podcast Episode 2",artist:"Tech Talk",duration:"52:15"}],size:"lg",className:"max-w-lg"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:258,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:256,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:203,columnNumber:5},void 0),parameters:{layout:"padded"}},S={render:()=>{const[a,m]=P.useState(0),o=(p,l)=>{m(l),console.log(`Selected track ${l+1}: ${p.title}`)};return e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Playlist"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:295,columnNumber:9},void 0),e.jsxDEV("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg",children:e.jsxDEV("p",{className:"text-sm text-blue-800",children:["Current track: ",e.jsxDEV("strong",{children:a+1},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:298,columnNumber:28},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:297,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:296,columnNumber:9},void 0),e.jsxDEV(c,{tracks:[{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Morning Meditation",artist:"Calm Sounds",duration:"10:00"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Focus Music",artist:"Productivity",duration:"25:00"},{src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",title:"Nature Sounds",artist:"Relaxation",duration:"30:00"}],currentTrack:a,onTrackSelect:o,className:"max-w-md"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:301,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-sm text-gray-600 mt-4",children:"Click on any track to select it. Check the console for events."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:326,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/media/audio/Audio.stories.tsx",lineNumber:294,columnNumber:7},void 0)},parameters:{layout:"padded"}};var q,B,M;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    controls: true
  }
}`,...(M=(B=x.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var C,_,L;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Bell Sound',
    description: 'A pleasant bell ringing sound effect',
    controls: true
  }
}`,...(L=(_=w.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var F,I,W;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(I=k.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var $,X,H;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(X=j.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var O,G,J;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: '',
    // No source to show placeholder
    placeholder: <div className="flex items-center gap-2 text-gray-500">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
        <span className="text-sm">Loading audio...</span>
      </div>
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,se;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    src: ['https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', 'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'],
    title: 'Multi-format Audio',
    description: 'Audio with multiple source formats for compatibility',
    controls: true
  }
}`,...(se=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,ie,ne;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Autoplay Audio',
    description: 'This audio will start playing automatically (muted)',
    autoPlay: true,
    muted: true,
    controls: true
  }
}`,...(ne=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var oe,te,re;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    title: 'Background Audio',
    description: 'Audio without visible controls',
    controls: false
  }
}`,...(re=(te=E.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,de,ue;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=U.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,me,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Pe=["Default","WithTitleAndDescription","Sizes","RoundedCorners","WithPlaceholder","WithFallback","MultipleSources","AutoPlay","WithoutControls","AudioPlaylistStory","InteractivePlaylist"];export{U as AudioPlaylistStory,V as AutoPlay,x as Default,S as InteractivePlaylist,A as MultipleSources,j as RoundedCorners,k as Sizes,D as WithFallback,h as WithPlaceholder,w as WithTitleAndDescription,E as WithoutControls,Pe as __namedExportsOrder,Se as default};
