import{S as $}from"./Select-C7XJoqGx.js";import"./jsx-dev-runtime-YqEzVWbi.js";import"./index-DHZDe_v1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./cn-BaF2GUMg.js";import"./ErrorMessage-DYjD2rVY.js";import"./HelperText-DHPb2qyY.js";const Q={title:"Form/Select",component:$,parameters:{layout:"centered",docs:{description:{component:"A flexible select dropdown component with labels, validation, and multiple variants. Built with accessibility in mind."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the select"},placeholder:{control:"text",description:"Placeholder text shown as first disabled option"},error:{control:"text",description:"Error message to display below the select"},helperText:{control:"text",description:"Helper text to display below the select"},variant:{control:"select",options:["default","filled"],description:"The visual style variant of the select"},disabled:{control:"boolean",description:"Whether the select is disabled"}}},c=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],K=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"}],U=[{value:"low",label:"Low Priority"},{value:"medium",label:"Medium Priority"},{value:"high",label:"High Priority"},{value:"urgent",label:"Urgent",disabled:!0}],e={args:{options:c,placeholder:"Choose an option"}},a={args:{label:"Select Country",options:K,placeholder:"Choose your country"}},l={args:{label:"Priority Level",options:U,placeholder:"Select priority",helperText:"Choose the appropriate priority level for this task."}},r={args:{label:"Required Field",options:c,error:"This field is required.",placeholder:"Please select an option"}},n={args:{label:"Category",variant:"filled",options:[{value:"tech",label:"Technology"},{value:"design",label:"Design"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"}],placeholder:"Select category"}},o={args:{label:"Subscription Plan",options:[{value:"free",label:"Free Plan"},{value:"basic",label:"Basic Plan - $9/month"},{value:"pro",label:"Pro Plan - $29/month"},{value:"enterprise",label:"Enterprise Plan - Contact us",disabled:!0}],placeholder:"Choose your plan",helperText:"Enterprise plan requires custom pricing."}},t={args:{label:"Disabled Select",options:c,disabled:!0,defaultValue:"option2"}},s={args:{label:"Language",options:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"de",label:"German"}],defaultValue:"en"}},i={args:{label:"Select State",options:[{value:"AL",label:"Alabama"},{value:"AK",label:"Alaska"},{value:"AZ",label:"Arizona"},{value:"AR",label:"Arkansas"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"CT",label:"Connecticut"},{value:"DE",label:"Delaware"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"}],placeholder:"Choose your state"}},p={args:{label:"Payment Method",variant:"filled",options:[{value:"card",label:"Credit Card"},{value:"paypal",label:"PayPal"},{value:"bank",label:"Bank Transfer"}],error:"Please select a payment method.",placeholder:"Select payment method"}};var u,d,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: 'Choose an option'
  }
}`,...(b=(d=e.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var m,h,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Select Country',
    options: countryOptions,
    placeholder: 'Choose your country'
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,y,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Priority Level',
    options: priorityOptions,
    placeholder: 'Select priority',
    helperText: 'Choose the appropriate priority level for this task.'
  }
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,f,P;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    options: sampleOptions,
    error: 'This field is required.',
    placeholder: 'Please select an option'
  }
}`,...(P=(f=r.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var A,O,x;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    variant: 'filled',
    options: [{
      value: 'tech',
      label: 'Technology'
    }, {
      value: 'design',
      label: 'Design'
    }, {
      value: 'marketing',
      label: 'Marketing'
    }, {
      value: 'sales',
      label: 'Sales'
    }],
    placeholder: 'Select category'
  }
}`,...(x=(O=n.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var T,D,F;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Subscription Plan',
    options: [{
      value: 'free',
      label: 'Free Plan'
    }, {
      value: 'basic',
      label: 'Basic Plan - $9/month'
    }, {
      value: 'pro',
      label: 'Pro Plan - $29/month'
    }, {
      value: 'enterprise',
      label: 'Enterprise Plan - Contact us',
      disabled: true
    }],
    placeholder: 'Choose your plan',
    helperText: 'Enterprise plan requires custom pricing.'
  }
}`,...(F=(D=o.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var L,k,E;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    options: sampleOptions,
    disabled: true,
    defaultValue: 'option2'
  }
}`,...(E=(k=t.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var W,w,V;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Language',
    options: [{
      value: 'en',
      label: 'English'
    }, {
      value: 'es',
      label: 'Spanish'
    }, {
      value: 'fr',
      label: 'French'
    }, {
      value: 'de',
      label: 'German'
    }],
    defaultValue: 'en'
  }
}`,...(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var G,q,B;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Select State',
    options: [{
      value: 'AL',
      label: 'Alabama'
    }, {
      value: 'AK',
      label: 'Alaska'
    }, {
      value: 'AZ',
      label: 'Arizona'
    }, {
      value: 'AR',
      label: 'Arkansas'
    }, {
      value: 'CA',
      label: 'California'
    }, {
      value: 'CO',
      label: 'Colorado'
    }, {
      value: 'CT',
      label: 'Connecticut'
    }, {
      value: 'DE',
      label: 'Delaware'
    }, {
      value: 'FL',
      label: 'Florida'
    }, {
      value: 'GA',
      label: 'Georgia'
    }],
    placeholder: 'Choose your state'
  }
}`,...(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var M,H,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Payment Method',
    variant: 'filled',
    options: [{
      value: 'card',
      label: 'Credit Card'
    }, {
      value: 'paypal',
      label: 'PayPal'
    }, {
      value: 'bank',
      label: 'Bank Transfer'
    }],
    error: 'Please select a payment method.',
    placeholder: 'Select payment method'
  }
}`,...(R=(H=p.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const X=["Default","WithLabel","WithHelperText","WithError","FilledVariant","WithDisabledOptions","Disabled","WithDefaultValue","LargeOptionList","FilledWithError"];export{e as Default,t as Disabled,n as FilledVariant,p as FilledWithError,i as LargeOptionList,s as WithDefaultValue,o as WithDisabledOptions,r as WithError,l as WithHelperText,a as WithLabel,X as __namedExportsOrder,Q as default};
