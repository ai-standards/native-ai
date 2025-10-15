import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{R as se}from"./index-DHZDe_v1.js";import{c as a}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const ue={sm:{step:"w-6 h-6 text-xs",label:"text-sm",description:"text-xs",connector:"h-px"},md:{step:"w-8 h-8 text-sm",label:"text-base",description:"text-sm",connector:"h-px"},lg:{step:"w-10 h-10 text-base",label:"text-lg",description:"text-base",connector:"h-0.5"}},E=()=>e.jsxDEV("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsxDEV("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:61,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:60,columnNumber:3},void 0),x=({steps:t,currentStep:y,onStepClick:l,orientation:o="horizontal",variant:te="default",size:re="md",showNumbers:D=!0,showDescriptions:ne=!0,clickable:h=!0,className:ae,...ie})=>{const k=t.findIndex(s=>s.id===y),c=ue[re],j=(s,r)=>r.completed?"completed":r.disabled?"disabled":s===k?"current":s<k?"completed":"upcoming",pe=s=>{const r=a("rounded-full flex items-center justify-center font-medium transition-colors duration-200",c.step);switch(te){case"minimal":return a(r,{"bg-blue-600 text-white":s==="current","bg-green-600 text-white":s==="completed","bg-gray-200 text-gray-500":s==="upcoming"||s==="disabled"});case"pills":return a(r,{"bg-blue-100 text-blue-600 border-2 border-blue-600":s==="current","bg-green-100 text-green-600 border-2 border-green-600":s==="completed","bg-gray-100 text-gray-400 border-2 border-gray-300":s==="upcoming"||s==="disabled"});default:return a(r,"border-2",{"bg-blue-600 text-white border-blue-600":s==="current","bg-green-600 text-white border-green-600":s==="completed","bg-white text-gray-500 border-gray-300":s==="upcoming","bg-gray-100 text-gray-400 border-gray-200":s==="disabled"})}},oe=(s,r)=>{const p=s==="completed"||s==="current";return o==="horizontal"?a("flex-1 mx-2",c.connector,p?"bg-green-600":"bg-gray-300"):a("w-px h-8 my-2 ml-4",p?"bg-green-600":"bg-gray-300")},le=(s,r)=>{!h||s.disabled||l==null||l(s.id)},ce=a("flex",o==="horizontal"?"flex-row items-center":"flex-col",ae);return e.jsxDEV("div",{className:ce,...ie,children:t.map((s,r)=>{const p=j(r,s),me=r===t.length-1,V=h&&!s.disabled;return e.jsxDEV(se.Fragment,{children:[e.jsxDEV("div",{className:a("flex items-center",o==="horizontal"?"flex-col text-center":"flex-row",V&&"cursor-pointer group"),onClick:()=>le(s),children:[e.jsxDEV("div",{className:pe(p),children:p==="completed"&&!D?e.jsxDEV(E,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:168,columnNumber:19},void 0):D?r+1:e.jsxDEV(E,{},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:172,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:166,columnNumber:15},void 0),e.jsxDEV("div",{className:a(o==="horizontal"?"mt-2":"ml-3","text-left"),children:[e.jsxDEV("div",{className:a("font-medium",c.label,{"text-blue-600":p==="current","text-green-600":p==="completed","text-gray-900":p==="upcoming","text-gray-400":p==="disabled"},V&&"group-hover:text-blue-600"),children:s.label},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:181,columnNumber:17},void 0),ne&&s.description&&e.jsxDEV("div",{className:a("mt-1",c.description,"text-gray-500"),children:s.description},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:196,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:177,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:157,columnNumber:13},void 0),!me&&e.jsxDEV("div",{className:oe(p,j(r+1,t[r+1]))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:209,columnNumber:15},void 0)]},s.id,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:156,columnNumber:11},void 0)})},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.tsx",lineNumber:149,columnNumber:5},void 0)};try{x.displayName="Stepper",x.__docgenInfo={description:"",displayName:"Stepper",props:{steps:{defaultValue:null,description:"Array of steps",name:"steps",required:!0,type:{name:"StepperStep[]"}},currentStep:{defaultValue:null,description:"Current active step ID",name:"currentStep",required:!0,type:{name:"string"}},onStepClick:{defaultValue:null,description:"Callback when step is clicked",name:"onStepClick",required:!1,type:{name:"((stepId: string) => void)"}},orientation:{defaultValue:{value:"horizontal"},description:"Layout orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},variant:{defaultValue:{value:"default"},description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'},{value:'"pills"'}]}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},showNumbers:{defaultValue:{value:"true"},description:"Whether to show step numbers",name:"showNumbers",required:!1,type:{name:"boolean"}},showDescriptions:{defaultValue:{value:"true"},description:"Whether to show step descriptions",name:"showDescriptions",required:!1,type:{name:"boolean"}},clickable:{defaultValue:{value:"true"},description:"Whether steps are clickable",name:"clickable",required:!1,type:{name:"boolean"}}}}}catch{}const ge={title:"Navigation/Stepper",component:x,parameters:{layout:"centered"},tags:["autodocs"]},i=[{id:"step1",label:"Personal Info",description:"Enter your details"},{id:"step2",label:"Address",description:"Shipping information"},{id:"step3",label:"Payment",description:"Payment method"},{id:"step4",label:"Review",description:"Confirm your order"}],n=({currentStep:t,...y})=>{const[l,o]=se.useState(t||"step1");return e.jsxDEV(x,{...y,currentStep:l,onStepClick:o},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:28,columnNumber:5},void 0)},m={render:t=>e.jsxDEV(n,{...t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:37,columnNumber:21},void 0),args:{steps:i,currentStep:"step2"}},u={render:t=>e.jsxDEV(n,{...t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:45,columnNumber:21},void 0),args:{steps:i,currentStep:"step2",orientation:"vertical"}},d={render:()=>e.jsxDEV("div",{className:"space-y-8",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-4 font-semibold",children:"Default"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:57,columnNumber:9},void 0),e.jsxDEV(n,{steps:i,currentStep:"step2"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:58,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:56,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-4 font-semibold",children:"Minimal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:62,columnNumber:9},void 0),e.jsxDEV(n,{steps:i,currentStep:"step2",variant:"minimal"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:63,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:61,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-4 font-semibold",children:"Pills"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:67,columnNumber:9},void 0),e.jsxDEV(n,{steps:i,currentStep:"step2",variant:"pills"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:68,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:66,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:55,columnNumber:5},void 0)},f={render:()=>e.jsxDEV("div",{className:"space-y-8",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-4 font-semibold",children:"Small"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:78,columnNumber:9},void 0),e.jsxDEV(n,{steps:i,currentStep:"step2",size:"sm"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:79,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:77,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-4 font-semibold",children:"Medium"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:83,columnNumber:9},void 0),e.jsxDEV(n,{steps:i,currentStep:"step2",size:"md"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:84,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:82,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"mb-4 font-semibold",children:"Large"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:88,columnNumber:9},void 0),e.jsxDEV(n,{steps:i,currentStep:"step2",size:"lg"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:89,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:87,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:76,columnNumber:5},void 0)},b={render:t=>e.jsxDEV(n,{...t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:96,columnNumber:21},void 0),args:{steps:[{id:"step1",label:"Account",description:"Create your account",completed:!0},{id:"step2",label:"Profile",description:"Complete your profile",completed:!0},{id:"step3",label:"Verification",description:"Verify your email"},{id:"step4",label:"Done",description:"All set!",disabled:!0}],currentStep:"step3"}},v={render:t=>e.jsxDEV(n,{...t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:109,columnNumber:21},void 0),args:{steps:i,currentStep:"step3",showDescriptions:!1}},g={render:t=>e.jsxDEV(n,{...t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:118,columnNumber:21},void 0),args:{steps:i,currentStep:"step2",showNumbers:!1}},N={render:t=>e.jsxDEV(n,{...t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:127,columnNumber:21},void 0),args:{steps:i,currentStep:"step2",clickable:!1}},S={render:t=>e.jsxDEV(n,{...t},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/navigation/stepper/Stepper.stories.tsx",lineNumber:136,columnNumber:21},void 0),args:{steps:[{id:"step1",label:"Project Setup",description:"Initialize your project repository",completed:!0},{id:"step2",label:"Configuration",description:"Set up build tools and environment",completed:!0},{id:"step3",label:"Development",description:"Write your application code"},{id:"step4",label:"Testing",description:"Run tests and quality checks",disabled:!0},{id:"step5",label:"Deployment",description:"Deploy to production environment",disabled:!0}],currentStep:"step3",orientation:"vertical",variant:"pills",size:"lg"}};var U,C,w;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2'
  }
}`,...(w=(C=m.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var W,z,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    orientation: 'vertical'
  }
}`,...(q=(z=u.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var _,I,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="mb-4 font-semibold">Default</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" />
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Minimal</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" variant="minimal" />
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Pills</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" variant="pills" />
      </div>
    </div>
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,A,L;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="mb-4 font-semibold">Small</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" size="sm" />
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Medium</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" size="md" />
      </div>
      
      <div>
        <h3 className="mb-4 font-semibold">Large</h3>
        <StepperWrapper steps={sampleSteps} currentStep="step2" size="lg" />
      </div>
    </div>
}`,...(L=(A=f.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,T,B;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: [{
      id: 'step1',
      label: 'Account',
      description: 'Create your account',
      completed: true
    }, {
      id: 'step2',
      label: 'Profile',
      description: 'Complete your profile',
      completed: true
    }, {
      id: 'step3',
      label: 'Verification',
      description: 'Verify your email'
    }, {
      id: 'step4',
      label: 'Done',
      description: 'All set!',
      disabled: true
    }],
    currentStep: 'step3'
  }
}`,...(B=(T=b.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var F,O,G;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step3',
    showDescriptions: false
  }
}`,...(G=(O=v.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,J,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    showNumbers: false
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    clickable: false
  }
}`,...(Y=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: [{
      id: 'step1',
      label: 'Project Setup',
      description: 'Initialize your project repository',
      completed: true
    }, {
      id: 'step2',
      label: 'Configuration',
      description: 'Set up build tools and environment',
      completed: true
    }, {
      id: 'step3',
      label: 'Development',
      description: 'Write your application code'
    }, {
      id: 'step4',
      label: 'Testing',
      description: 'Run tests and quality checks',
      disabled: true
    }, {
      id: 'step5',
      label: 'Deployment',
      description: 'Deploy to production environment',
      disabled: true
    }],
    currentStep: 'step3',
    orientation: 'vertical',
    variant: 'pills',
    size: 'lg'
  }
}`,...(ee=($=S.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Ne=["Default","Vertical","Variants","Sizes","WithCompletedSteps","WithoutDescriptions","WithoutNumbers","NonClickable","VerticalComplex"];export{m as Default,N as NonClickable,f as Sizes,d as Variants,u as Vertical,S as VerticalComplex,b as WithCompletedSteps,v as WithoutDescriptions,g as WithoutNumbers,Ne as __namedExportsOrder,ge as default};
