import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as f,R as y}from"./index-BwDkhjyp.js";import{c as j}from"./cn-BaF2GUMg.js";import{E as te}from"./ErrorMessage-BhI4OYJy.js";import"./_commonjsHelpers-BosuxZz1.js";const h=f.forwardRef(({value:c,defaultValue:g="#3b82f6",onChange:p,disabled:d=!1,format:C="hex",showAlpha:N=!1,presets:k=["#ef4444","#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e"],size:w="md",label:U,error:P=!1,errorMessage:M,className:Y,name:J,id:G,...K},Q)=>{const[V,Z]=f.useState(c||g),[R,ee]=f.useState(!1),[b,re]=f.useState(X(c||g)),W=f.useRef(null),ae=f.useRef(null),oe=f.useRef(null);f.useRef(null),y.useEffect(()=>{c!==void 0&&(Z(c),re(X(c)))},[c]),y.useEffect(()=>{const a=r=>{W.current&&!W.current.contains(r.target)&&ee(!1)};if(R)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[R]);function X(a){const r=We(a);return Xe(r)}function We(a){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:{r:0,g:0,b:0}}function Xe(a){const r=a.r/255,o=a.g/255,s=a.b/255,l=Math.max(r,o,s),u=Math.min(r,o,s),t=l-u;let n=0;t!==0&&(l===r?n=(o-s)/t%6:l===o?n=(s-r)/t+2:n=(r-o)/t+4),n=Math.round(n*60),n<0&&(n+=360);const m=l===0?0:t/l,i=l;return{h:n,s:m*100,v:i*100,a:a.a}}function Oe(a){const r=a.h/360,o=a.s/100,s=a.v/100,l=Math.floor(r*6),u=r*6-l,t=s*(1-o),n=s*(1-u*o),m=s*(1-(1-u)*o);let i,x,v;switch(l%6){case 0:i=s,x=m,v=t;break;case 1:i=n,x=s,v=t;break;case 2:i=t,x=s,v=m;break;case 3:i=t,x=n,v=s;break;case 4:i=m,x=t,v=s;break;case 5:i=s,x=t,v=n;break;default:i=0,x=0,v=0}return{r:Math.round(i*255),g:Math.round(x*255),b:Math.round(v*255),a:a.a}}function Ue(a){const r=o=>{const s=o.toString(16);return s.length===1?"0"+s:s};return`#${r(a.r)}${r(a.g)}${r(a.b)}`}const Ye=a=>{const r=Oe(a);switch(C){case"rgb":return N?`rgba(${r.r}, ${r.g}, ${r.b}, ${(a.a||1).toFixed(2)})`:`rgb(${r.r}, ${r.g}, ${r.b})`;case"hsl":const o=Je(r);return N?`hsla(${o.h}, ${o.s}%, ${o.l}%, ${(a.a||1).toFixed(2)})`:`hsl(${o.h}, ${o.s}%, ${o.l}%)`;case"hex":default:return Ue(r)}};function Je(a){const r=a.r/255,o=a.g/255,s=a.b/255,l=Math.max(r,o,s),u=Math.min(r,o,s),t=l-u;let n=0;t!==0&&(l===r?n=(o-s)/t%6:l===o?n=(s-r)/t+2:n=(r-o)/t+4),n=Math.round(n*60),n<0&&(n+=360);const m=(l+u)/2,i=t===0?0:t/(1-Math.abs(2*m-1));return{h:n,s:Math.round(i*100),l:Math.round(m*100)}}const S=a=>{re(a);const r=Ye(a);Z(r),p==null||p(r)},Ke=a=>{const r=X(a);S(r)},Qe=f.useCallback(a=>{var u;if(d)return;const r=(u=oe.current)==null?void 0:u.getBoundingClientRect();if(!r)return;const o=(t,n)=>{const m=Math.max(0,Math.min(1,(t-r.left)/r.width)),i=Math.max(0,Math.min(1,(n-r.top)/r.height));S({...b,s:m*100,v:(1-i)*100})};o(a.clientX,a.clientY);const s=t=>{o(t.clientX,t.clientY)},l=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",l)},[d,b,S]),Ze=f.useCallback(a=>{var u;if(d)return;const r=(u=ae.current)==null?void 0:u.getBoundingClientRect();if(!r)return;const o=t=>{const n=Math.max(0,Math.min(1,(t-r.left)/r.width));S({...b,h:n*360})};o(a.clientX);const s=t=>{o(t.clientX)},l=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",l)},[d,b,S]),O={sm:{preview:"w-8 h-8",picker:"w-64",saturation:"h-32"},md:{preview:"w-10 h-10",picker:"w-80",saturation:"h-40"},lg:{preview:"w-12 h-12",picker:"w-96",saturation:"h-48"}},se=e.jsxs("div",{className:"relative",ref:W,children:[e.jsx("button",{type:"button",onClick:()=>!d&&ee(!R),disabled:d,className:j("border-2 border-gray-300 rounded cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",O[w].preview,P&&"border-red-500",d&&"cursor-not-allowed opacity-50"),style:{backgroundColor:V}}),R&&!d&&e.jsxs("div",{className:j("absolute top-full left-0 z-50 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4",O[w].picker),children:[e.jsx("div",{ref:oe,onMouseDown:Qe,className:j("relative w-full cursor-crosshair rounded mb-3",O[w].saturation),style:{background:`linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${b.h}, 100%, 50%))`},children:e.jsx("div",{className:"absolute w-3 h-3 border-2 border-white rounded-full shadow-sm transform -translate-x-1/2 -translate-y-1/2",style:{left:`${b.s}%`,top:`${100-b.v}%`}})}),e.jsx("div",{ref:ae,onMouseDown:Ze,className:"relative w-full h-4 cursor-pointer rounded mb-3",style:{background:"linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"},children:e.jsx("div",{className:"absolute w-3 h-6 bg-white border border-gray-300 rounded shadow-sm transform -translate-x-1/2 -translate-y-1/2 top-1/2",style:{left:`${b.h/360*100}%`}})}),k.length>0&&e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Presets"}),e.jsx("div",{className:"grid grid-cols-8 gap-1",children:k.map((a,r)=>e.jsx("button",{type:"button",onClick:()=>Ke(a),className:"w-6 h-6 rounded border border-gray-300 hover:border-gray-400 transition-colors",style:{backgroundColor:a}},r))})]}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("input",{type:"text",value:V,readOnly:!0,className:"w-full px-2 py-1 text-sm border border-gray-300 rounded bg-gray-50"})})]})]});return U?e.jsxs("div",{className:j("space-y-2",Y),ref:Q,...K,children:[e.jsx("label",{htmlFor:G,className:j("block text-sm font-medium",P?"text-red-700":"text-gray-700",d&&"text-gray-400"),children:U}),se,e.jsx(te,{message:P&&M?M:void 0,fieldId:G}),e.jsx("input",{type:"hidden",name:J,value:V})]}):e.jsxs("div",{className:Y,ref:Q,...K,children:[se,e.jsx("div",{className:"mt-1",children:e.jsx(te,{message:P&&M?M:void 0,fieldId:G})}),e.jsx("input",{type:"hidden",name:J,value:V})]})});h.displayName="ColorPicker";try{h.displayName="ColorPicker",h.__docgenInfo={description:"",displayName:"ColorPicker",props:{value:{defaultValue:null,description:"Selected color value",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"#3b82f6"},description:"Default color value",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Called when color changes",name:"onChange",required:!1,type:{name:"((color: string) => void)"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"hex"},description:"Color format",name:"format",required:!1,type:{name:"enum",value:[{value:'"hex"'},{value:'"rgb"'},{value:'"hsl"'}]}},showAlpha:{defaultValue:{value:"false"},description:"Show alpha channel",name:"showAlpha",required:!1,type:{name:"boolean"}},presets:{defaultValue:{value:`[
        '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
        '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
        '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
      ]`},description:"Preset colors",name:"presets",required:!1,type:{name:"string[]"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"Error state",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"Error message",name:"errorMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Input name",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Input id",name:"id",required:!1,type:{name:"string"}}}}}catch{}const tr={title:"Form/ColorPicker",component:h,parameters:{layout:"centered"},decorators:[c=>e.jsx("div",{className:"min-h-96 w-96 p-8",children:e.jsx(c,{})})],tags:["autodocs"],argTypes:{format:{control:{type:"radio"},options:["hex","rgb","hsl"]},size:{control:{type:"radio"},options:["sm","md","lg"]},showAlpha:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}}}},B={args:{}},L={args:{label:"Theme Color",id:"theme"}},E={args:{label:"Hex Color",format:"hex",defaultValue:"#3b82f6",id:"hex"}},$={args:{label:"RGB Color",format:"rgb",defaultValue:"#ef4444",id:"rgb"}},T={args:{label:"HSL Color",format:"hsl",defaultValue:"#10b981",id:"hsl"}},H={args:{label:"Color with Alpha",format:"rgb",showAlpha:!0,defaultValue:"#8b5cf6",id:"alpha"}},A={args:{label:"Brand Colors",presets:["#1f2937","#374151","#6b7280","#9ca3af","#dc2626","#ea580c","#d97706","#ca8a04","#16a34a","#059669","#0d9488","#0891b2","#2563eb","#4f46e5","#7c3aed","#c026d3"],id:"brand"}},q={args:{label:"Disabled Color Picker",disabled:!0,defaultValue:"#6366f1",id:"disabled"}},F={args:{label:"Color Selection",error:!0,errorMessage:"Please select a valid color",id:"error"}},I={args:{size:"sm",label:"Small Color Picker",id:"small"}},D={args:{size:"lg",label:"Large Color Picker",id:"large"}},_={args:{label:"Interactive Color Picker",format:"hex",id:"interactive"},render:c=>{const[g,p]=y.useState("#3b82f6"),[d,C]=y.useState("hex");return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{className:"flex gap-4 items-end",children:[e.jsx(h,{...c,value:g,onChange:p,format:d}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Format"}),e.jsxs("select",{value:d,onChange:N=>C(N.target.value),className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"hex",children:"HEX"}),e.jsx("option",{value:"rgb",children:"RGB"}),e.jsx("option",{value:"hsl",children:"HSL"})]})]})]}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Selected Color:"}),e.jsx("p",{className:"font-mono text-sm",children:g}),e.jsx("div",{className:"mt-4 p-4 rounded border-2",style:{backgroundColor:g},children:e.jsx("p",{className:"text-white text-sm font-medium",style:{textShadow:"1px 1px 2px rgba(0,0,0,0.5)",color:"white"},children:"Preview Text"})})]})]})}},z={render:()=>{const[c,g]=y.useState("#3b82f6"),[p,d]=y.useState("#6b7280"),[C,N]=y.useState("#10b981"),[k,w]=y.useState("#f8fafc");return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Theme Builder"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(h,{label:"Primary Color",value:c,onChange:g,id:"primary"}),e.jsx(h,{label:"Secondary Color",value:p,onChange:d,id:"secondary"}),e.jsx(h,{label:"Accent Color",value:C,onChange:N,id:"accent"}),e.jsx(h,{label:"Background",value:k,onChange:w,id:"background"})]}),e.jsx("div",{className:"p-6 rounded-lg border-2",style:{backgroundColor:k},children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-xl font-bold",style:{color:c},children:"Theme Preview"}),e.jsx("p",{style:{color:p},children:"This is how your theme colors look together. The primary color is used for headings, secondary for body text, and accent for highlights."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-4 py-2 rounded font-medium text-white",style:{backgroundColor:c},children:"Primary Button"}),e.jsx("button",{className:"px-4 py-2 rounded font-medium text-white",style:{backgroundColor:C},children:"Accent Button"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-2 mt-4",children:[e.jsx("div",{className:"h-16 rounded",style:{backgroundColor:c}}),e.jsx("div",{className:"h-16 rounded",style:{backgroundColor:p}}),e.jsx("div",{className:"h-16 rounded",style:{backgroundColor:C}}),e.jsx("div",{className:"h-16 rounded border",style:{backgroundColor:k}})]})]})})]})}};var ne,le,ce;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {}
}`,...(ce=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ie,ue;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Theme Color',
    id: 'theme'
  }
}`,...(ue=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var me,fe,pe;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Hex Color',
    format: 'hex',
    defaultValue: '#3b82f6',
    id: 'hex'
  }
}`,...(pe=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var he,ge,be;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: 'RGB Color',
    format: 'rgb',
    defaultValue: '#ef4444',
    id: 'rgb'
  }
}`,...(be=(ge=$.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var xe,ve,ye;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: 'HSL Color',
    format: 'hsl',
    defaultValue: '#10b981',
    id: 'hsl'
  }
}`,...(ye=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ce,Ne,ke;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    label: 'Color with Alpha',
    format: 'rgb',
    showAlpha: true,
    defaultValue: '#8b5cf6',
    id: 'alpha'
  }
}`,...(ke=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var we,Se,je;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    label: 'Brand Colors',
    presets: ['#1f2937', '#374151', '#6b7280', '#9ca3af', '#dc2626', '#ea580c', '#d97706', '#ca8a04', '#16a34a', '#059669', '#0d9488', '#0891b2', '#2563eb', '#4f46e5', '#7c3aed', '#c026d3'],
    id: 'brand'
  }
}`,...(je=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Pe,Me,Ve;q.parameters={...q.parameters,docs:{...(Pe=q.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Color Picker',
    disabled: true,
    defaultValue: '#6366f1',
    id: 'disabled'
  }
}`,...(Ve=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Re,Be,Le;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    label: 'Color Selection',
    error: true,
    errorMessage: 'Please select a valid color',
    id: 'error'
  }
}`,...(Le=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var Ee,$e,Te;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Color Picker',
    id: 'small'
  }
}`,...(Te=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:Te.source}}};var He,Ae,qe;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Color Picker',
    id: 'large'
  }
}`,...(qe=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Fe,Ie,De;_.parameters={..._.parameters,docs:{...(Fe=_.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(De=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var _e,ze,Ge;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ge=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};const nr=["Default","WithLabel","HexFormat","RGBFormat","HSLFormat","WithAlpha","CustomPresets","Disabled","WithError","Small","Large","Interactive","ThemeBuilder"];export{A as CustomPresets,B as Default,q as Disabled,T as HSLFormat,E as HexFormat,_ as Interactive,D as Large,$ as RGBFormat,I as Small,z as ThemeBuilder,H as WithAlpha,F as WithError,L as WithLabel,nr as __namedExportsOrder,tr as default};
