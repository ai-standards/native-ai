import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as p,R as h}from"./index-DHZDe_v1.js";import{c as P}from"./cn-BaF2GUMg.js";import{E as ne}from"./ErrorMessage-DYjD2rVY.js";import"./_commonjsHelpers-BosuxZz1.js";const b=p.forwardRef(({value:i,defaultValue:k="#3b82f6",onChange:f,disabled:c=!1,format:x="hex",showAlpha:y=!1,presets:C=["#ef4444","#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e"],size:D="md",label:O,error:V=!1,errorMessage:E,className:Y,name:J,id:z,...K},Q)=>{const[w,Z]=p.useState(i||k),[S,ee]=p.useState(!1),[g,re]=p.useState(W(i||k)),G=p.useRef(null),oe=p.useRef(null),se=p.useRef(null);p.useRef(null),h.useEffect(()=>{i!==void 0&&(Z(i),re(W(i)))},[i]),h.useEffect(()=>{const o=r=>{G.current&&!G.current.contains(r.target)&&ee(!1)};if(S)return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[S]);function W(o){const r=Ge(o);return We(r)}function Ge(o){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:{r:0,g:0,b:0}}function We(o){const r=o.r/255,s=o.g/255,a=o.b/255,l=Math.max(r,s,a),u=Math.min(r,s,a),n=l-u;let t=0;n!==0&&(l===r?t=(s-a)/n%6:l===s?t=(a-r)/n+2:t=(r-s)/n+4),t=Math.round(t*60),t<0&&(t+=360);const d=l===0?0:n/l,m=l;return{h:t,s:d*100,v:m*100,a:o.a}}function Xe(o){const r=o.h/360,s=o.s/100,a=o.v/100,l=Math.floor(r*6),u=r*6-l,n=a*(1-s),t=a*(1-u*s),d=a*(1-(1-u)*s);let m,v,N;switch(l%6){case 0:m=a,v=d,N=n;break;case 1:m=t,v=a,N=n;break;case 2:m=n,v=a,N=d;break;case 3:m=n,v=t,N=a;break;case 4:m=d,v=n,N=a;break;case 5:m=a,v=n,N=t;break;default:m=0,v=0,N=0}return{r:Math.round(m*255),g:Math.round(v*255),b:Math.round(N*255),a:o.a}}function Oe(o){const r=s=>{const a=s.toString(16);return a.length===1?"0"+a:a};return`#${r(o.r)}${r(o.g)}${r(o.b)}`}const Ye=o=>{const r=Xe(o);switch(x){case"rgb":return y?`rgba(${r.r}, ${r.g}, ${r.b}, ${(o.a||1).toFixed(2)})`:`rgb(${r.r}, ${r.g}, ${r.b})`;case"hsl":const s=Je(r);return y?`hsla(${s.h}, ${s.s}%, ${s.l}%, ${(o.a||1).toFixed(2)})`:`hsl(${s.h}, ${s.s}%, ${s.l}%)`;case"hex":default:return Oe(r)}};function Je(o){const r=o.r/255,s=o.g/255,a=o.b/255,l=Math.max(r,s,a),u=Math.min(r,s,a),n=l-u;let t=0;n!==0&&(l===r?t=(s-a)/n%6:l===s?t=(a-r)/n+2:t=(r-s)/n+4),t=Math.round(t*60),t<0&&(t+=360);const d=(l+u)/2,m=n===0?0:n/(1-Math.abs(2*d-1));return{h:t,s:Math.round(m*100),l:Math.round(d*100)}}const j=o=>{re(o);const r=Ye(o);Z(r),f==null||f(r)},Ke=o=>{const r=W(o);j(r)},Qe=p.useCallback(o=>{var u;if(c)return;const r=(u=se.current)==null?void 0:u.getBoundingClientRect();if(!r)return;const s=(n,t)=>{const d=Math.max(0,Math.min(1,(n-r.left)/r.width)),m=Math.max(0,Math.min(1,(t-r.top)/r.height));j({...g,s:d*100,v:(1-m)*100})};s(o.clientX,o.clientY);const a=n=>{s(n.clientX,n.clientY)},l=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",l)},[c,g,j]),Ze=p.useCallback(o=>{var u;if(c)return;const r=(u=oe.current)==null?void 0:u.getBoundingClientRect();if(!r)return;const s=n=>{const t=Math.max(0,Math.min(1,(n-r.left)/r.width));j({...g,h:t*360})};s(o.clientX);const a=n=>{s(n.clientX)},l=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",l)},[c,g,j]),X={sm:{preview:"w-8 h-8",picker:"w-64",saturation:"h-32"},md:{preview:"w-10 h-10",picker:"w-80",saturation:"h-40"},lg:{preview:"w-12 h-12",picker:"w-96",saturation:"h-48"}},ae=e.jsxDEV("div",{className:"relative",ref:G,children:[e.jsxDEV("button",{type:"button",onClick:()=>!c&&ee(!S),disabled:c,className:P("border-2 border-gray-300 rounded cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",X[D].preview,V&&"border-red-500",c&&"cursor-not-allowed opacity-50"),style:{backgroundColor:w}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:314,columnNumber:9},void 0),S&&!c&&e.jsxDEV("div",{className:P("absolute top-full left-0 z-50 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4",X[D].picker),children:[e.jsxDEV("div",{ref:se,onMouseDown:Qe,className:P("relative w-full cursor-crosshair rounded mb-3",X[D].saturation),style:{background:`linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${g.h}, 100%, 50%))`},children:e.jsxDEV("div",{className:"absolute w-3 h-3 border-2 border-white rounded-full shadow-sm transform -translate-x-1/2 -translate-y-1/2",style:{left:`${g.s}%`,top:`${100-g.v}%`}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:344,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:333,columnNumber:13},void 0),e.jsxDEV("div",{ref:oe,onMouseDown:Ze,className:"relative w-full h-4 cursor-pointer rounded mb-3",style:{background:"linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"},children:e.jsxDEV("div",{className:"absolute w-3 h-6 bg-white border border-gray-300 rounded shadow-sm transform -translate-x-1/2 -translate-y-1/2 top-1/2",style:{left:`${g.h/360*100}%`}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:362,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:354,columnNumber:13},void 0),C.length>0&&e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Presets"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:371,columnNumber:17},void 0),e.jsxDEV("div",{className:"grid grid-cols-8 gap-1",children:C.map((o,r)=>e.jsxDEV("button",{type:"button",onClick:()=>Ke(o),className:"w-6 h-6 rounded border border-gray-300 hover:border-gray-400 transition-colors",style:{backgroundColor:o}},r,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:374,columnNumber:21},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:372,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:370,columnNumber:15},void 0),e.jsxDEV("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsxDEV("input",{type:"text",value:w,readOnly:!0,className:"w-full px-2 py-1 text-sm border border-gray-300 rounded bg-gray-50"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:388,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:387,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:328,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:313,columnNumber:7},void 0);return O?e.jsxDEV("div",{className:P("space-y-2",Y),ref:Q,...K,children:[e.jsxDEV("label",{htmlFor:z,className:P("block text-sm font-medium",V?"text-red-700":"text-gray-700",c&&"text-gray-400"),children:O},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:403,columnNumber:11},void 0),ae,e.jsxDEV(ne,{message:V&&E?E:void 0,fieldId:z},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:414,columnNumber:11},void 0),e.jsxDEV("input",{type:"hidden",name:J,value:w},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:415,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:402,columnNumber:9},void 0):e.jsxDEV("div",{className:Y,ref:Q,...K,children:[ae,e.jsxDEV("div",{className:"mt-1",children:e.jsxDEV(ne,{message:V&&E?E:void 0,fieldId:z},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:424,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:423,columnNumber:9},void 0),e.jsxDEV("input",{type:"hidden",name:J,value:w},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:426,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.tsx",lineNumber:421,columnNumber:7},void 0)});b.displayName="ColorPicker";try{b.displayName="ColorPicker",b.__docgenInfo={description:"",displayName:"ColorPicker",props:{value:{defaultValue:null,description:"Selected color value",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"#3b82f6"},description:"Default color value",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Called when color changes",name:"onChange",required:!1,type:{name:"((color: string) => void)"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"hex"},description:"Color format",name:"format",required:!1,type:{name:"enum",value:[{value:'"hex"'},{value:'"rgb"'},{value:'"hsl"'}]}},showAlpha:{defaultValue:{value:"false"},description:"Show alpha channel",name:"showAlpha",required:!1,type:{name:"boolean"}},presets:{defaultValue:{value:`[
        '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
        '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
        '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
      ]`},description:"Preset colors",name:"presets",required:!1,type:{name:"string[]"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"Error state",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"Error message",name:"errorMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Input name",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Input id",name:"id",required:!1,type:{name:"string"}}}}}catch{}const nr={title:"Form/ColorPicker",component:b,parameters:{layout:"centered"},decorators:[i=>e.jsxDEV("div",{className:"min-h-96 w-96 p-8",children:e.jsxDEV(i,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:14,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:13,columnNumber:7},void 0)],tags:["autodocs"],argTypes:{format:{control:{type:"radio"},options:["hex","rgb","hsl"]},size:{control:{type:"radio"},options:["sm","md","lg"]},showAlpha:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}}}},U={args:{}},M={args:{label:"Theme Color",id:"theme"}},R={args:{label:"Hex Color",format:"hex",defaultValue:"#3b82f6",id:"hex"}},B={args:{label:"RGB Color",format:"rgb",defaultValue:"#ef4444",id:"rgb"}},L={args:{label:"HSL Color",format:"hsl",defaultValue:"#10b981",id:"hsl"}},$={args:{label:"Color with Alpha",format:"rgb",showAlpha:!0,defaultValue:"#8b5cf6",id:"alpha"}},T={args:{label:"Brand Colors",presets:["#1f2937","#374151","#6b7280","#9ca3af","#dc2626","#ea580c","#d97706","#ca8a04","#16a34a","#059669","#0d9488","#0891b2","#2563eb","#4f46e5","#7c3aed","#c026d3"],id:"brand"}},H={args:{label:"Disabled Color Picker",disabled:!0,defaultValue:"#6366f1",id:"disabled"}},A={args:{label:"Color Selection",error:!0,errorMessage:"Please select a valid color",id:"error"}},q={args:{size:"sm",label:"Small Color Picker",id:"small"}},F={args:{size:"lg",label:"Large Color Picker",id:"large"}},I={args:{label:"Interactive Color Picker",format:"hex",id:"interactive"},render:i=>{const[k,f]=h.useState("#3b82f6"),[c,x]=h.useState("hex");return e.jsxDEV("div",{className:"w-full space-y-6",children:[e.jsxDEV("div",{className:"flex gap-4 items-end",children:[e.jsxDEV(b,{...i,value:k,onChange:f,format:c},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:151,columnNumber:11},void 0),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("label",{className:"block text-sm font-medium text-gray-700",children:"Format"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:159,columnNumber:13},void 0),e.jsxDEV("select",{value:c,onChange:y=>x(y.target.value),className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsxDEV("option",{value:"hex",children:"HEX"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:167,columnNumber:15},void 0),e.jsxDEV("option",{value:"rgb",children:"RGB"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:168,columnNumber:15},void 0),e.jsxDEV("option",{value:"hsl",children:"HSL"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:169,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:162,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:158,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:150,columnNumber:9},void 0),e.jsxDEV("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsxDEV("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Selected Color:"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:175,columnNumber:11},void 0),e.jsxDEV("p",{className:"font-mono text-sm",children:k},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:176,columnNumber:11},void 0),e.jsxDEV("div",{className:"mt-4 p-4 rounded border-2",style:{backgroundColor:k},children:e.jsxDEV("p",{className:"text-white text-sm font-medium",style:{textShadow:"1px 1px 2px rgba(0,0,0,0.5)",color:"white"},children:"Preview Text"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:179,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:178,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:174,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:149,columnNumber:7},void 0)}},_={render:()=>{const[i,k]=h.useState("#3b82f6"),[f,c]=h.useState("#6b7280"),[x,y]=h.useState("#10b981"),[C,D]=h.useState("#f8fafc");return e.jsxDEV("div",{className:"w-full space-y-6",children:[e.jsxDEV("h3",{className:"text-lg font-semibold text-gray-900",children:"Theme Builder"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:201,columnNumber:9},void 0),e.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxDEV(b,{label:"Primary Color",value:i,onChange:k,id:"primary"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:204,columnNumber:11},void 0),e.jsxDEV(b,{label:"Secondary Color",value:f,onChange:c,id:"secondary"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:210,columnNumber:11},void 0),e.jsxDEV(b,{label:"Accent Color",value:x,onChange:y,id:"accent"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:216,columnNumber:11},void 0),e.jsxDEV(b,{label:"Background",value:C,onChange:D,id:"background"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:222,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:203,columnNumber:9},void 0),e.jsxDEV("div",{className:"p-6 rounded-lg border-2",style:{backgroundColor:C},children:e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h4",{className:"text-xl font-bold",style:{color:i},children:"Theme Preview"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:232,columnNumber:13},void 0),e.jsxDEV("p",{style:{color:f},children:"This is how your theme colors look together. The primary color is used for headings, secondary for body text, and accent for highlights."},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:236,columnNumber:13},void 0),e.jsxDEV("div",{className:"flex gap-2",children:[e.jsxDEV("button",{className:"px-4 py-2 rounded font-medium text-white",style:{backgroundColor:i},children:"Primary Button"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:242,columnNumber:15},void 0),e.jsxDEV("button",{className:"px-4 py-2 rounded font-medium text-white",style:{backgroundColor:x},children:"Accent Button"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:248,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:241,columnNumber:13},void 0),e.jsxDEV("div",{className:"grid grid-cols-4 gap-2 mt-4",children:[e.jsxDEV("div",{className:"h-16 rounded",style:{backgroundColor:i}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:257,columnNumber:15},void 0),e.jsxDEV("div",{className:"h-16 rounded",style:{backgroundColor:f}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:258,columnNumber:15},void 0),e.jsxDEV("div",{className:"h-16 rounded",style:{backgroundColor:x}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:259,columnNumber:15},void 0),e.jsxDEV("div",{className:"h-16 rounded border",style:{backgroundColor:C}},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:260,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:256,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:231,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:230,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/form/colorpicker/ColorPicker.stories.tsx",lineNumber:200,columnNumber:7},void 0)}};var te,le,ie;U.parameters={...U.parameters,docs:{...(te=U.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {}
}`,...(ie=(le=U.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,me,ue;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Theme Color',
    id: 'theme'
  }
}`,...(ue=(me=M.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,pe,fe;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Hex Color',
    format: 'hex',
    defaultValue: '#3b82f6',
    id: 'hex'
  }
}`,...(fe=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var be,ke,ge;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: 'RGB Color',
    format: 'rgb',
    defaultValue: '#ef4444',
    id: 'rgb'
  }
}`,...(ge=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:ge.source}}};var ve,Ne,he;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'HSL Color',
    format: 'hsl',
    defaultValue: '#10b981',
    id: 'hsl'
  }
}`,...(he=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:he.source}}};var xe,ye,Ce;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: 'Color with Alpha',
    format: 'rgb',
    showAlpha: true,
    defaultValue: '#8b5cf6',
    id: 'alpha'
  }
}`,...(Ce=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var De,je,Pe;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: 'Brand Colors',
    presets: ['#1f2937', '#374151', '#6b7280', '#9ca3af', '#dc2626', '#ea580c', '#d97706', '#ca8a04', '#16a34a', '#059669', '#0d9488', '#0891b2', '#2563eb', '#4f46e5', '#7c3aed', '#c026d3'],
    id: 'brand'
  }
}`,...(Pe=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var Ve,Ee,we;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Color Picker',
    disabled: true,
    defaultValue: '#6366f1',
    id: 'disabled'
  }
}`,...(we=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var Se,Ue,Me;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    label: 'Color Selection',
    error: true,
    errorMessage: 'Please select a valid color',
    id: 'error'
  }
}`,...(Me=(Ue=A.parameters)==null?void 0:Ue.docs)==null?void 0:Me.source}}};var Re,Be,Le;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Color Picker',
    id: 'small'
  }
}`,...(Le=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var $e,Te,He;F.parameters={...F.parameters,docs:{...($e=F.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Color Picker',
    id: 'large'
  }
}`,...(He=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:He.source}}};var Ae,qe,Fe;I.parameters={...I.parameters,docs:{...(Ae=I.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    label: 'Interactive Color Picker',
    format: 'hex',
    id: 'interactive'
  },
  render: args => {
    const [color, setColor] = React.useState('#3b82f6');
    const [format, setFormat] = React.useState<'hex' | 'rgb' | 'hsl'>('hex');
    return <div className="w-full space-y-6">
        <div className="flex gap-4 items-end">
          <ColorPicker {...args} value={color} onChange={setColor} format={format} />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Format
            </label>
            <select value={format} onChange={e => setFormat(e.target.value as 'hex' | 'rgb' | 'hsl')} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="hex">HEX</option>
              <option value="rgb">RGB</option>
              <option value="hsl">HSL</option>
            </select>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-2">Selected Color:</p>
          <p className="font-mono text-sm">{color}</p>
          
          <div className="mt-4 p-4 rounded border-2" style={{
          backgroundColor: color
        }}>
            <p className="text-white text-sm font-medium" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            color: 'white'
          }}>
              Preview Text
            </p>
          </div>
        </div>
      </div>;
  }
}`,...(Fe=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var Ie,_e,ze;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const [primaryColor, setPrimaryColor] = React.useState('#3b82f6');
    const [secondaryColor, setSecondaryColor] = React.useState('#6b7280');
    const [accentColor, setAccentColor] = React.useState('#10b981');
    const [backgroundColor, setBackgroundColor] = React.useState('#f8fafc');
    return <div className="w-full space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Theme Builder</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker label="Primary Color" value={primaryColor} onChange={setPrimaryColor} id="primary" />
          <ColorPicker label="Secondary Color" value={secondaryColor} onChange={setSecondaryColor} id="secondary" />
          <ColorPicker label="Accent Color" value={accentColor} onChange={setAccentColor} id="accent" />
          <ColorPicker label="Background" value={backgroundColor} onChange={setBackgroundColor} id="background" />
        </div>
        
        <div className="p-6 rounded-lg border-2" style={{
        backgroundColor
      }}>
          <div className="space-y-4">
            <h4 className="text-xl font-bold" style={{
            color: primaryColor
          }}>
              Theme Preview
            </h4>
            
            <p style={{
            color: secondaryColor
          }}>
              This is how your theme colors look together. The primary color is used for headings,
              secondary for body text, and accent for highlights.
            </p>
            
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded font-medium text-white" style={{
              backgroundColor: primaryColor
            }}>
                Primary Button
              </button>
              <button className="px-4 py-2 rounded font-medium text-white" style={{
              backgroundColor: accentColor
            }}>
                Accent Button
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4">
              <div className="h-16 rounded" style={{
              backgroundColor: primaryColor
            }} />
              <div className="h-16 rounded" style={{
              backgroundColor: secondaryColor
            }} />
              <div className="h-16 rounded" style={{
              backgroundColor: accentColor
            }} />
              <div className="h-16 rounded border" style={{
              backgroundColor
            }} />
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(ze=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};const tr=["Default","WithLabel","HexFormat","RGBFormat","HSLFormat","WithAlpha","CustomPresets","Disabled","WithError","Small","Large","Interactive","ThemeBuilder"];export{T as CustomPresets,U as Default,H as Disabled,L as HSLFormat,R as HexFormat,I as Interactive,F as Large,B as RGBFormat,q as Small,_ as ThemeBuilder,$ as WithAlpha,A as WithError,M as WithLabel,tr as __namedExportsOrder,nr as default};
