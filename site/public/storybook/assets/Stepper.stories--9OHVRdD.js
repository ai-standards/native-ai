import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{R as re}from"./index-BwDkhjyp.js";import{c as a}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const ue={sm:{step:"w-6 h-6 text-xs",label:"text-sm",description:"text-xs",connector:"h-px"},md:{step:"w-8 h-8 text-sm",label:"text-base",description:"text-sm",connector:"h-px"},lg:{step:"w-10 h-10 text-base",label:"text-lg",description:"text-base",connector:"h-0.5"}},z=()=>e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),v=({steps:t,currentStep:y,onStepClick:o,orientation:p="horizontal",variant:te="default",size:se="md",showNumbers:j=!0,showDescriptions:ne=!0,clickable:N=!0,className:ae,...ie})=>{const C=t.findIndex(r=>r.id===y),c=ue[se],w=(r,s)=>s.completed?"completed":s.disabled?"disabled":r===C?"current":r<C?"completed":"upcoming",le=r=>{const s=a("rounded-full flex items-center justify-center font-medium transition-colors duration-200",c.step);switch(te){case"minimal":return a(s,{"bg-blue-600 text-white":r==="current","bg-green-600 text-white":r==="completed","bg-gray-200 text-gray-500":r==="upcoming"||r==="disabled"});case"pills":return a(s,{"bg-blue-100 text-blue-600 border-2 border-blue-600":r==="current","bg-green-100 text-green-600 border-2 border-green-600":r==="completed","bg-gray-100 text-gray-400 border-2 border-gray-300":r==="upcoming"||r==="disabled"});default:return a(s,"border-2",{"bg-blue-600 text-white border-blue-600":r==="current","bg-green-600 text-white border-green-600":r==="completed","bg-white text-gray-500 border-gray-300":r==="upcoming","bg-gray-100 text-gray-400 border-gray-200":r==="disabled"})}},pe=(r,s)=>{const l=r==="completed"||r==="current";return p==="horizontal"?a("flex-1 mx-2",c.connector,l?"bg-green-600":"bg-gray-300"):a("w-px h-8 my-2 ml-4",l?"bg-green-600":"bg-gray-300")},oe=(r,s)=>{!N||r.disabled||o==null||o(r.id)},ce=a("flex",p==="horizontal"?"flex-row items-center":"flex-col",ae);return e.jsx("div",{className:ce,...ie,children:t.map((r,s)=>{const l=w(s,r),de=s===t.length-1,W=N&&!r.disabled;return e.jsxs(re.Fragment,{children:[e.jsxs("div",{className:a("flex items-center",p==="horizontal"?"flex-col text-center":"flex-row",W&&"cursor-pointer group"),onClick:()=>oe(r),children:[e.jsx("div",{className:le(l),children:l==="completed"&&!j?e.jsx(z,{}):j?s+1:e.jsx(z,{})}),e.jsxs("div",{className:a(p==="horizontal"?"mt-2":"ml-3","text-left"),children:[e.jsx("div",{className:a("font-medium",c.label,{"text-blue-600":l==="current","text-green-600":l==="completed","text-gray-900":l==="upcoming","text-gray-400":l==="disabled"},W&&"group-hover:text-blue-600"),children:r.label}),ne&&r.description&&e.jsx("div",{className:a("mt-1",c.description,"text-gray-500"),children:r.description})]})]}),!de&&e.jsx("div",{className:pe(l,w(s+1,t[s+1]))})]},r.id)})})};try{v.displayName="Stepper",v.__docgenInfo={description:"",displayName:"Stepper",props:{steps:{defaultValue:null,description:"Array of steps",name:"steps",required:!0,type:{name:"StepperStep[]"}},currentStep:{defaultValue:null,description:"Current active step ID",name:"currentStep",required:!0,type:{name:"string"}},onStepClick:{defaultValue:null,description:"Callback when step is clicked",name:"onStepClick",required:!1,type:{name:"((stepId: string) => void)"}},orientation:{defaultValue:{value:"horizontal"},description:"Layout orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},variant:{defaultValue:{value:"default"},description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'},{value:'"pills"'}]}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},showNumbers:{defaultValue:{value:"true"},description:"Whether to show step numbers",name:"showNumbers",required:!1,type:{name:"boolean"}},showDescriptions:{defaultValue:{value:"true"},description:"Whether to show step descriptions",name:"showDescriptions",required:!1,type:{name:"boolean"}},clickable:{defaultValue:{value:"true"},description:"Whether steps are clickable",name:"clickable",required:!1,type:{name:"boolean"}}}}}catch{}const Se={title:"Navigation/Stepper",component:v,parameters:{layout:"centered"},tags:["autodocs"]},i=[{id:"step1",label:"Personal Info",description:"Enter your details"},{id:"step2",label:"Address",description:"Shipping information"},{id:"step3",label:"Payment",description:"Payment method"},{id:"step4",label:"Review",description:"Confirm your order"}],n=({currentStep:t,...y})=>{const[o,p]=re.useState(t||"step1");return e.jsx(v,{...y,currentStep:o,onStepClick:p})},d={render:t=>e.jsx(n,{...t}),args:{steps:i,currentStep:"step2"}},u={render:t=>e.jsx(n,{...t}),args:{steps:i,currentStep:"step2",orientation:"vertical"}},m={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Default"}),e.jsx(n,{steps:i,currentStep:"step2"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Minimal"}),e.jsx(n,{steps:i,currentStep:"step2",variant:"minimal"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Pills"}),e.jsx(n,{steps:i,currentStep:"step2",variant:"pills"})]})]})},b={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Small"}),e.jsx(n,{steps:i,currentStep:"step2",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Medium"}),e.jsx(n,{steps:i,currentStep:"step2",size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 font-semibold",children:"Large"}),e.jsx(n,{steps:i,currentStep:"step2",size:"lg"})]})]})},g={render:t=>e.jsx(n,{...t}),args:{steps:[{id:"step1",label:"Account",description:"Create your account",completed:!0},{id:"step2",label:"Profile",description:"Complete your profile",completed:!0},{id:"step3",label:"Verification",description:"Verify your email"},{id:"step4",label:"Done",description:"All set!",disabled:!0}],currentStep:"step3"}},h={render:t=>e.jsx(n,{...t}),args:{steps:i,currentStep:"step3",showDescriptions:!1}},S={render:t=>e.jsx(n,{...t}),args:{steps:i,currentStep:"step2",showNumbers:!1}},x={render:t=>e.jsx(n,{...t}),args:{steps:i,currentStep:"step2",clickable:!1}},f={render:t=>e.jsx(n,{...t}),args:{steps:[{id:"step1",label:"Project Setup",description:"Initialize your project repository",completed:!0},{id:"step2",label:"Configuration",description:"Set up build tools and environment",completed:!0},{id:"step3",label:"Development",description:"Write your application code"},{id:"step4",label:"Testing",description:"Run tests and quality checks",disabled:!0},{id:"step5",label:"Deployment",description:"Deploy to production environment",disabled:!0}],currentStep:"step3",orientation:"vertical",variant:"pills",size:"lg"}};var V,D,k;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2'
  }
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var q,_,I;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    orientation: 'vertical'
  }
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var P,R,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(R=m.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var L,M,E;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(M=b.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var T,B,F;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var O,G,H;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step3',
    showDescriptions: false
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    showNumbers: false
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <StepperWrapper {...args} />,
  args: {
    steps: sampleSteps,
    currentStep: 'step2',
    clickable: false
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const xe=["Default","Vertical","Variants","Sizes","WithCompletedSteps","WithoutDescriptions","WithoutNumbers","NonClickable","VerticalComplex"];export{d as Default,x as NonClickable,b as Sizes,m as Variants,u as Vertical,f as VerticalComplex,g as WithCompletedSteps,h as WithoutDescriptions,S as WithoutNumbers,xe as __namedExportsOrder,Se as default};
