import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{c as w}from"./cn-BaF2GUMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const s=({variant:n="default",size:i="md",maxWidth:t="lg",spacing:r="normal",className:l,children:a,...c})=>{const o=w("prose prose-gray mx-auto",{"prose-blue":n==="blog","prose-slate":n==="documentation","prose-emerald":n==="news","prose-sm":i==="sm","prose-base":i==="md","prose-lg":i==="lg","max-w-none":t==="none","max-w-sm":t==="sm","max-w-md":t==="md","max-w-lg":t==="lg","max-w-xl":t==="xl","max-w-2xl":t==="2xl","prose-tight":r==="tight","prose-loose":r==="loose"},l);return e.jsx("article",{className:o,...c,children:a})},d=({title:n,subtitle:i,publishedAt:t,author:r,readingTime:l,tags:a,className:c,...o})=>e.jsx("header",{className:w("not-prose mb-8",c),...o,children:e.jsxs("div",{className:"space-y-4",children:[a&&a.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2",children:a.map(m=>e.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:m},m))}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight",children:n}),i&&e.jsx("p",{className:"text-lg md:text-xl text-gray-600 leading-relaxed",children:i}),e.jsxs("div",{className:"flex items-center gap-6 text-sm text-gray-500",children:[r&&e.jsxs("div",{className:"flex items-center gap-3",children:[r.avatar&&e.jsx("img",{src:r.avatar,alt:r.name,className:"w-10 h-10 rounded-full object-cover"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:r.name}),r.bio&&e.jsx("div",{className:"text-xs",children:r.bio})]})]}),t&&e.jsx("time",{dateTime:t.toISOString(),children:t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),l&&e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{}),l]})]})]})}),h=({className:n,children:i,...t})=>e.jsx("div",{className:w("article-content",n),...t,children:i}),p=({shareButtons:n,relatedArticles:i,cta:t,className:r,...l})=>{const a=typeof window<"u"?window.location.href:"",c=typeof document<"u"?document.title:"";return e.jsx("footer",{className:w("not-prose mt-12 border-t border-gray-200 pt-8",r),...l,children:e.jsxs("div",{className:"space-y-8",children:[n&&e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Share:"}),e.jsxs("div",{className:"flex gap-3",children:[n.twitter&&e.jsx("a",{href:`https://twitter.com/intent/tweet?url=${encodeURIComponent(a)}&text=${encodeURIComponent(c)}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors","aria-label":"Share on Twitter",children:"𝕏"}),n.linkedin&&e.jsx("a",{href:`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(a)}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors","aria-label":"Share on LinkedIn"}),n.email&&e.jsx("a",{href:`mailto:?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(a)}`,className:"flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors","aria-label":"Share via Email",children:"️"})]})]}),t&&e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:t.title}),t.description&&e.jsx("p",{className:"text-gray-600 mb-4",children:t.description}),e.jsx("a",{href:t.button.href,className:"inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",children:t.button.text})]}),i&&i.length>0&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Related Articles"}),e.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:i.map((o,m)=>e.jsxs("a",{href:o.href,className:"block p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-1",children:o.title}),o.summary&&e.jsx("p",{className:"text-sm text-gray-600",children:o.summary})]},m))})]})]})})};try{s.displayName="Article",s.__docgenInfo={description:"",displayName:"Article",props:{variant:{defaultValue:{value:"default"},description:"Article variant for different content types",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"blog"'},{value:'"documentation"'},{value:'"news"'}]}},size:{defaultValue:{value:"md"},description:"Typography size scale",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},maxWidth:{defaultValue:{value:"lg"},description:"Maximum width constraint",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'},{value:'"2xl"'}]}},spacing:{defaultValue:{value:"normal"},description:"Spacing between elements",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"tight"'},{value:'"loose"'}]}}}}}catch{}try{d.displayName="ArticleHeader",d.__docgenInfo={description:"",displayName:"ArticleHeader",props:{title:{defaultValue:null,description:"Article title",name:"title",required:!0,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Article subtitle or description",name:"subtitle",required:!1,type:{name:"ReactNode"}},publishedAt:{defaultValue:null,description:"Publication date",name:"publishedAt",required:!1,type:{name:"Date"}},author:{defaultValue:null,description:"Author information",name:"author",required:!1,type:{name:"{ name: string; avatar?: string; bio?: string; } | undefined"}},readingTime:{defaultValue:null,description:"Reading time estimate",name:"readingTime",required:!1,type:{name:"string"}},tags:{defaultValue:null,description:"Tags or categories",name:"tags",required:!1,type:{name:"string[]"}}}}}catch{}try{h.displayName="ArticleContent",h.__docgenInfo={description:"",displayName:"ArticleContent",props:{}}}catch{}try{p.displayName="ArticleFooter",p.__docgenInfo={description:"",displayName:"ArticleFooter",props:{shareButtons:{defaultValue:null,description:"Share buttons configuration",name:"shareButtons",required:!1,type:{name:"{ twitter?: boolean; linkedin?: boolean; facebook?: boolean | undefined; email?: boolean | undefined; } | undefined"}},relatedArticles:{defaultValue:null,description:"Related articles",name:"relatedArticles",required:!1,type:{name:"{ title: string; href: string; summary?: string; }[]"}},cta:{defaultValue:null,description:"Call to action",name:"cta",required:!1,type:{name:"{ title: string; description?: string; button: { text: string; href: string; }; }"}}}}}catch{}const ne={title:"Content/Article",component:s,parameters:{layout:"padded",docs:{description:{component:"A comprehensive article component system for displaying rich content with semantic structure, typography integration, and responsive design."}}},argTypes:{variant:{control:"select",options:["default","blog","documentation","news"],description:"Article variant for different content types"},size:{control:"select",options:["sm","md","lg"],description:"Typography size scale"},maxWidth:{control:"select",options:["none","sm","md","lg","xl","2xl"],description:"Maximum width constraint"},spacing:{control:"select",options:["tight","normal","loose"],description:"Spacing between elements"}}},X=e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"This is a sample article demonstrating the Article component system. The component provides a structured approach to displaying rich content with proper typography, spacing, and semantic markup."}),e.jsx("h3",{children:"Key Features"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Responsive typography scaling"}),e.jsx("li",{children:"Semantic HTML structure"}),e.jsx("li",{children:"Multiple content variants"}),e.jsx("li",{children:"Integrated header and footer components"})]}),e.jsx("blockquote",{children:'"Good typography is invisible. Bad typography is everywhere."'}),e.jsx("h3",{children:"Implementation"}),e.jsx("p",{children:"The Article component system consists of several interconnected components that work together to create a cohesive reading experience. Each component can be used independently or as part of a complete article structure."}),e.jsx("pre",{children:e.jsx("code",{children:`import { Article, ArticleHeader, ArticleContent } from '@/components';

<Article variant="blog" size="md">
  <ArticleHeader title="My Article" />
  <ArticleContent>
    <p>Article content goes here...</p>
  </ArticleContent>
</Article>`})}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"The Article component provides a flexible foundation for content presentation while maintaining consistency and accessibility across your application."})]}),u={args:{variant:"default",size:"md",maxWidth:"lg",spacing:"normal",children:X}},g={args:{variant:"blog",size:"md",maxWidth:"lg",spacing:"normal",children:X}},x={args:{variant:"documentation",size:"md",maxWidth:"xl",spacing:"normal",children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"API Documentation"}),e.jsx("p",{children:"This documentation covers the complete API surface for the Article component system."}),e.jsx("h3",{children:"Props"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"variant"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"'default'"}),e.jsx("td",{children:"Visual style variant"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"'md'"}),e.jsx("td",{children:"Typography size scale"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxWidth"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"'lg'"}),e.jsx("td",{children:"Maximum width constraint"})]})]})]}),e.jsx("h3",{children:"Examples"}),e.jsx("p",{children:"Here are some common usage patterns:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Basic article
<Article>
  <h1>Title</h1>
  <p>Content</p>
</Article>

// Blog post with header
<Article variant="blog">
  <ArticleHeader 
    title="My Blog Post"
    author={{ name: "John Doe" }}
    publishedAt={new Date()}
  />
  <ArticleContent>
    <p>Blog content...</p>
  </ArticleContent>
</Article>`})})]})}},y={args:{variant:"news",size:"md",maxWidth:"lg",spacing:"normal",children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Breaking: New Article Component Released"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Latest Update:"})," The new Article component system has been officially released, bringing enhanced typography and layout capabilities to the NativeAI UI library."]}),e.jsx("h3",{children:"What's New"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Four distinct visual variants"}),e.jsx("li",{children:"Responsive typography scaling"}),e.jsx("li",{children:"Integrated header and footer components"}),e.jsx("li",{children:"Share button functionality"}),e.jsx("li",{children:"Related articles display"})]}),e.jsx("p",{children:"The release includes comprehensive testing and documentation, ensuring developers can integrate the component seamlessly into their applications."}),e.jsx("h3",{children:"Industry Impact"}),e.jsx("p",{children:"This release positions NativeAI as a leader in component-driven development, providing tools that enhance both developer experience and end-user engagement."})]})}},b={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Small Size"}),e.jsxs(s,{size:"sm",maxWidth:"md",children:[e.jsx("h2",{children:"Small Article"}),e.jsx("p",{children:"This article uses the small typography scale for compact content presentation."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Medium Size (Default)"}),e.jsxs(s,{size:"md",maxWidth:"md",children:[e.jsx("h2",{children:"Medium Article"}),e.jsx("p",{children:"This article uses the medium typography scale, which is the default size for most content."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Large Size"}),e.jsxs(s,{size:"lg",maxWidth:"md",children:[e.jsx("h2",{children:"Large Article"}),e.jsx("p",{children:"This article uses the large typography scale for prominent content display."})]})]})]})},j={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Small Width"}),e.jsxs(s,{maxWidth:"sm",children:[e.jsx("h2",{children:"Narrow Column"}),e.jsx("p",{children:"This article is constrained to a small maximum width, perfect for sidebar content or mobile-first designs."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Large Width"}),e.jsxs(s,{maxWidth:"xl",children:[e.jsx("h2",{children:"Wide Layout"}),e.jsx("p",{children:"This article uses a larger maximum width, allowing for more content per line and better utilization of wide screens."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"No Width Constraint"}),e.jsxs(s,{maxWidth:"none",children:[e.jsx("h2",{children:"Full Width"}),e.jsx("p",{children:"This article has no maximum width constraint and will expand to fill the available space completely."})]})]})]})},f={render:()=>e.jsxs(s,{variant:"blog",size:"md",maxWidth:"lg",children:[e.jsx(d,{title:"Building Modern UI Components",subtitle:"A comprehensive guide to creating reusable, accessible, and performant React components",publishedAt:new Date("2024-01-15"),author:{name:"Sarah Johnson",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",bio:"Senior Frontend Developer"},readingTime:"8 min read",tags:["React","TypeScript","UI Components","Accessibility"]}),e.jsxs(h,{children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Creating modern UI components requires balancing functionality, accessibility, and developer experience. In this comprehensive guide, we'll explore the principles and practices that make components truly reusable and maintainable."}),e.jsx("h3",{children:"Component Architecture"}),e.jsx("p",{children:"A well-architected component system starts with clear separation of concerns. Each component should have a single responsibility and provide a predictable interface for consumers."}),e.jsx("blockquote",{children:'"The secret to building large apps is never build large apps. Break up your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application."'}),e.jsx("h3",{children:"Key Principles"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Composability:"})," Components should work well together and be easily combined"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessibility:"})," Every component must be usable by assistive technologies"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Consistency:"})," Similar patterns should behave similarly across the system"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance:"})," Components should be optimized for real-world usage"]})]}),e.jsx("h3",{children:"Implementation Strategy"}),e.jsx("p",{children:"When implementing a new component, start with the user's needs and work backward to the technical requirements. This approach ensures that the final API feels natural and intuitive."}),e.jsx("pre",{children:e.jsx("code",{children:`// Example: A well-designed button component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  // Implementation...
};`})}),e.jsx("h3",{children:"Testing and Documentation"}),e.jsx("p",{children:"Comprehensive testing and documentation are not optional—they're essential for building trust and adoption. Every component should include unit tests, integration tests, and interactive documentation."}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"Building great UI components is an iterative process that requires attention to detail, user empathy, and technical excellence. By following these principles and continuously refining your approach, you can create components that developers love to use and users love to interact with."})]}),e.jsx(p,{shareButtons:{twitter:!0,linkedin:!0,email:!0},cta:{title:"Ready to Build?",description:"Start creating amazing components with our comprehensive toolkit.",button:{text:"Get Started",href:"#get-started"}},relatedArticles:[{title:"Component Testing Best Practices",href:"#testing-guide",summary:"Learn how to write effective tests for your UI components"},{title:"Accessibility in Modern Web Apps",href:"#accessibility-guide",summary:"Essential techniques for building inclusive user interfaces"}]})]})},v={render:()=>e.jsxs(s,{variant:"news",size:"md",maxWidth:"lg",children:[e.jsx(d,{title:"NativeAI Announces Major UI Library Update",subtitle:"New components and enhanced accessibility features now available",publishedAt:new Date("2024-01-20"),author:{name:"Tech News Team",bio:"Technology Correspondents"},readingTime:"3 min read",tags:["Product Update","UI/UX","Accessibility"]}),e.jsxs(h,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"SILICON VALLEY, CA"})," — NativeAI today announced a significant update to its UI component library, introducing new components and enhanced accessibility features that promise to streamline development workflows and improve user experiences across web applications."]}),e.jsx("h3",{children:"Key Updates Include:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Article Components:"})," New semantic components for content presentation"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enhanced Typography:"})," Improved readability and responsive scaling"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessibility Improvements:"})," WCAG 2.1 AA compliance across all components"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Developer Tools:"})," Enhanced Storybook documentation and testing utilities"]})]}),e.jsx("h3",{children:"Industry Impact"}),e.jsx("p",{children:`The update addresses growing demand for accessible, performant UI components in enterprise applications. "We're seeing incredible adoption of component-driven development," said the development team. "These updates ensure developers can build inclusive experiences without compromise."`}),e.jsx("h3",{children:"Availability"}),e.jsx("p",{children:"The updated library is available immediately through npm, with comprehensive migration guides and example implementations provided in the official documentation."})]}),e.jsx(p,{shareButtons:{twitter:!0,linkedin:!0},relatedArticles:[{title:"Component Library Migration Guide",href:"#migration",summary:"Step-by-step instructions for updating to the latest version"}]})]})},A={render:()=>e.jsxs(s,{variant:"documentation",size:"md",maxWidth:"xl",children:[e.jsx(d,{title:"Article Component API Reference",subtitle:"Complete documentation for the Article component system",tags:["API","Documentation","Reference"]}),e.jsxs(h,{children:[e.jsx("h2",{children:"Overview"}),e.jsx("p",{children:"The Article component system provides a structured approach to content presentation with semantic HTML, responsive typography, and integrated header/footer functionality."}),e.jsx("h2",{children:"Components"}),e.jsx("h3",{children:"Article"}),e.jsx("p",{children:"The main container component for article content."}),e.jsx("h4",{children:"Props"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"variant"}),e.jsx("td",{children:"'default' | 'blog' | 'documentation' | 'news'"}),e.jsx("td",{children:"'default'"}),e.jsx("td",{children:"Visual styling variant"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsx("td",{children:"'sm' | 'md' | 'lg'"}),e.jsx("td",{children:"'md'"}),e.jsx("td",{children:"Typography size scale"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxWidth"}),e.jsx("td",{children:"'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'"}),e.jsx("td",{children:"'lg'"}),e.jsx("td",{children:"Maximum width constraint"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"spacing"}),e.jsx("td",{children:"'tight' | 'normal' | 'loose'"}),e.jsx("td",{children:"'normal'"}),e.jsx("td",{children:"Element spacing"})]})]})]}),e.jsx("h3",{children:"ArticleHeader"}),e.jsx("p",{children:"Header component with title, metadata, and author information."}),e.jsx("h4",{children:"Props"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"title"}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"Article title"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"subtitle"}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Article subtitle or description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"publishedAt"}),e.jsx("td",{children:"Date"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Publication date"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"author"}),e.jsx("td",{children:"AuthorObject"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Author information"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"readingTime"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Reading time estimate"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tags"}),e.jsx("td",{children:"string[]"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Article tags or categories"})]})]})]}),e.jsx("h2",{children:"Usage Examples"}),e.jsx("h3",{children:"Basic Article"}),e.jsx("pre",{children:e.jsx("code",{children:`import { Article } from '@/components';

<Article>
  <h1>My Article</h1>
  <p>Article content goes here...</p>
</Article>`})}),e.jsx("h3",{children:"Complete Article Structure"}),e.jsx("pre",{children:e.jsx("code",{children:`import { Article, ArticleHeader, ArticleContent, ArticleFooter } from '@/components';

<Article variant="blog" size="md">
  <ArticleHeader
    title="My Blog Post"
    subtitle="An engaging subtitle"
    publishedAt={new Date()}
    author={{
      name: "John Doe",
      avatar: "/avatar.jpg",
      bio: "Writer"
    }}
    tags={["React", "TypeScript"]}
  />
  
  <ArticleContent>
    <h2>Section</h2>
    <p>Content...</p>
  </ArticleContent>
  
  <ArticleFooter
    shareButtons={{ twitter: true, linkedin: true }}
    relatedArticles={[
      { title: "Related", href: "/related" }
    ]}
  />
</Article>`})}),e.jsx("h2",{children:"Accessibility"}),e.jsx("p",{children:"The Article components include several accessibility features:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Semantic HTML structure with proper heading hierarchy"}),e.jsx("li",{children:"ARIA labels for interactive elements"}),e.jsx("li",{children:"Proper focus management for share buttons"}),e.jsx("li",{children:"Screen reader friendly date formatting"}),e.jsx("li",{children:"High contrast color schemes"})]}),e.jsx("h2",{children:"Styling"}),e.jsx("p",{children:"The components use Tailwind CSS's typography plugin for consistent text styling. Custom variants can be created by extending the prose classes or providing custom CSS."})]}),e.jsx(p,{cta:{title:"Need Help?",description:"Check out our comprehensive guides and examples.",button:{text:"View Examples",href:"#examples"}}})]})};var N,C,T;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    maxWidth: 'lg',
    spacing: 'normal',
    children: sampleContent
  }
}`,...(T=(C=u.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var I,S,z;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'blog',
    size: 'md',
    maxWidth: 'lg',
    spacing: 'normal',
    children: sampleContent
  }
}`,...(z=(S=g.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var W,R,k;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'documentation',
    size: 'md',
    maxWidth: 'xl',
    spacing: 'normal',
    children: <>
        <h2>API Documentation</h2>
        <p>
          This documentation covers the complete API surface for the Article component system.
        </p>
        
        <h3>Props</h3>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant</td>
              <td>string</td>
              <td>'default'</td>
              <td>Visual style variant</td>
            </tr>
            <tr>
              <td>size</td>
              <td>string</td>
              <td>'md'</td>
              <td>Typography size scale</td>
            </tr>
            <tr>
              <td>maxWidth</td>
              <td>string</td>
              <td>'lg'</td>
              <td>Maximum width constraint</td>
            </tr>
          </tbody>
        </table>

        <h3>Examples</h3>
        <p>Here are some common usage patterns:</p>
        
        <pre><code>{\`// Basic article
<Article>
  <h1>Title</h1>
  <p>Content</p>
</Article>

// Blog post with header
<Article variant="blog">
  <ArticleHeader 
    title="My Blog Post"
    author={{ name: "John Doe" }}
    publishedAt={new Date()}
  />
  <ArticleContent>
    <p>Blog content...</p>
  </ArticleContent>
</Article>\`}</code></pre>
      </>
  }
}`,...(k=(R=x.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var D,B,P;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'news',
    size: 'md',
    maxWidth: 'lg',
    spacing: 'normal',
    children: <>
        <h2>Breaking: New Article Component Released</h2>
        <p>
          <strong>Latest Update:</strong> The new Article component system has been officially released, 
          bringing enhanced typography and layout capabilities to the NativeAI UI library.
        </p>
        
        <h3>What's New</h3>
        <ul>
          <li>Four distinct visual variants</li>
          <li>Responsive typography scaling</li>
          <li>Integrated header and footer components</li>
          <li>Share button functionality</li>
          <li>Related articles display</li>
        </ul>

        <p>
          The release includes comprehensive testing and documentation, ensuring developers can 
          integrate the component seamlessly into their applications.
        </p>

        <h3>Industry Impact</h3>
        <p>
          This release positions NativeAI as a leader in component-driven development, providing 
          tools that enhance both developer experience and end-user engagement.
        </p>
      </>
  }
}`,...(P=(B=y.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var U,_,M;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Small Size</h3>
        <Article size="sm" maxWidth="md">
          <h2>Small Article</h2>
          <p>This article uses the small typography scale for compact content presentation.</p>
        </Article>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">Medium Size (Default)</h3>
        <Article size="md" maxWidth="md">
          <h2>Medium Article</h2>
          <p>This article uses the medium typography scale, which is the default size for most content.</p>
        </Article>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">Large Size</h3>
        <Article size="lg" maxWidth="md">
          <h2>Large Article</h2>
          <p>This article uses the large typography scale for prominent content display.</p>
        </Article>
      </div>
    </div>
}`,...(M=(_=b.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var E,H,L;j.parameters={...j.parameters,docs:{...(E=j.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Small Width</h3>
        <Article maxWidth="sm">
          <h2>Narrow Column</h2>
          <p>This article is constrained to a small maximum width, perfect for sidebar content or mobile-first designs.</p>
        </Article>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">Large Width</h3>
        <Article maxWidth="xl">
          <h2>Wide Layout</h2>
          <p>This article uses a larger maximum width, allowing for more content per line and better utilization of wide screens.</p>
        </Article>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">No Width Constraint</h3>
        <Article maxWidth="none">
          <h2>Full Width</h2>
          <p>This article has no maximum width constraint and will expand to fill the available space completely.</p>
        </Article>
      </div>
    </div>
}`,...(L=(H=j.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,q,F;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Article variant="blog" size="md" maxWidth="lg">
      <ArticleHeader title="Building Modern UI Components" subtitle="A comprehensive guide to creating reusable, accessible, and performant React components" publishedAt={new Date('2024-01-15')} author={{
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior Frontend Developer'
    }} readingTime="8 min read" tags={['React', 'TypeScript', 'UI Components', 'Accessibility']} />
      
      <ArticleContent>
        <h2>Introduction</h2>
        <p>
          Creating modern UI components requires balancing functionality, accessibility, and developer experience. 
          In this comprehensive guide, we'll explore the principles and practices that make components truly reusable 
          and maintainable.
        </p>

        <h3>Component Architecture</h3>
        <p>
          A well-architected component system starts with clear separation of concerns. Each component should have 
          a single responsibility and provide a predictable interface for consumers.
        </p>

        <blockquote>
          "The secret to building large apps is never build large apps. Break up your applications into small pieces. 
          Then, assemble those testable, bite-sized pieces into your big application."
        </blockquote>

        <h3>Key Principles</h3>
        <ul>
          <li><strong>Composability:</strong> Components should work well together and be easily combined</li>
          <li><strong>Accessibility:</strong> Every component must be usable by assistive technologies</li>
          <li><strong>Consistency:</strong> Similar patterns should behave similarly across the system</li>
          <li><strong>Performance:</strong> Components should be optimized for real-world usage</li>
        </ul>

        <h3>Implementation Strategy</h3>
        <p>
          When implementing a new component, start with the user's needs and work backward to the technical requirements. 
          This approach ensures that the final API feels natural and intuitive.
        </p>

        <pre><code>{\`// Example: A well-designed button component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  // Implementation...
};\`}</code></pre>

        <h3>Testing and Documentation</h3>
        <p>
          Comprehensive testing and documentation are not optional—they're essential for building trust and adoption. 
          Every component should include unit tests, integration tests, and interactive documentation.
        </p>

        <h3>Conclusion</h3>
        <p>
          Building great UI components is an iterative process that requires attention to detail, user empathy, 
          and technical excellence. By following these principles and continuously refining your approach, 
          you can create components that developers love to use and users love to interact with.
        </p>
      </ArticleContent>
      
      <ArticleFooter shareButtons={{
      twitter: true,
      linkedin: true,
      email: true
    }} cta={{
      title: 'Ready to Build?',
      description: 'Start creating amazing components with our comprehensive toolkit.',
      button: {
        text: 'Get Started',
        href: '#get-started'
      }
    }} relatedArticles={[{
      title: 'Component Testing Best Practices',
      href: '#testing-guide',
      summary: 'Learn how to write effective tests for your UI components'
    }, {
      title: 'Accessibility in Modern Web Apps',
      href: '#accessibility-guide',
      summary: 'Essential techniques for building inclusive user interfaces'
    }]} />
    </Article>
}`,...(F=(q=f.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var O,G,J;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Article variant="news" size="md" maxWidth="lg">
      <ArticleHeader title="NativeAI Announces Major UI Library Update" subtitle="New components and enhanced accessibility features now available" publishedAt={new Date('2024-01-20')} author={{
      name: 'Tech News Team',
      bio: 'Technology Correspondents'
    }} readingTime="3 min read" tags={['Product Update', 'UI/UX', 'Accessibility']} />
      
      <ArticleContent>
        <p>
          <strong>SILICON VALLEY, CA</strong> — NativeAI today announced a significant update to its UI component 
          library, introducing new components and enhanced accessibility features that promise to streamline 
          development workflows and improve user experiences across web applications.
        </p>

        <h3>Key Updates Include:</h3>
        <ul>
          <li><strong>Article Components:</strong> New semantic components for content presentation</li>
          <li><strong>Enhanced Typography:</strong> Improved readability and responsive scaling</li>
          <li><strong>Accessibility Improvements:</strong> WCAG 2.1 AA compliance across all components</li>
          <li><strong>Developer Tools:</strong> Enhanced Storybook documentation and testing utilities</li>
        </ul>

        <h3>Industry Impact</h3>
        <p>
          The update addresses growing demand for accessible, performant UI components in enterprise applications. 
          "We're seeing incredible adoption of component-driven development," said the development team. 
          "These updates ensure developers can build inclusive experiences without compromise."
        </p>

        <h3>Availability</h3>
        <p>
          The updated library is available immediately through npm, with comprehensive migration guides and 
          example implementations provided in the official documentation.
        </p>
      </ArticleContent>
      
      <ArticleFooter shareButtons={{
      twitter: true,
      linkedin: true
    }} relatedArticles={[{
      title: 'Component Library Migration Guide',
      href: '#migration',
      summary: 'Step-by-step instructions for updating to the latest version'
    }]} />
    </Article>
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,$,Y;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Article variant="documentation" size="md" maxWidth="xl">
      <ArticleHeader title="Article Component API Reference" subtitle="Complete documentation for the Article component system" tags={['API', 'Documentation', 'Reference']} />
      
      <ArticleContent>
        <h2>Overview</h2>
        <p>
          The Article component system provides a structured approach to content presentation with semantic HTML, 
          responsive typography, and integrated header/footer functionality.
        </p>

        <h2>Components</h2>
        
        <h3>Article</h3>
        <p>The main container component for article content.</p>
        
        <h4>Props</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant</td>
              <td>'default' | 'blog' | 'documentation' | 'news'</td>
              <td>'default'</td>
              <td>Visual styling variant</td>
            </tr>
            <tr>
              <td>size</td>
              <td>'sm' | 'md' | 'lg'</td>
              <td>'md'</td>
              <td>Typography size scale</td>
            </tr>
            <tr>
              <td>maxWidth</td>
              <td>'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'</td>
              <td>'lg'</td>
              <td>Maximum width constraint</td>
            </tr>
            <tr>
              <td>spacing</td>
              <td>'tight' | 'normal' | 'loose'</td>
              <td>'normal'</td>
              <td>Element spacing</td>
            </tr>
          </tbody>
        </table>

        <h3>ArticleHeader</h3>
        <p>Header component with title, metadata, and author information.</p>

        <h4>Props</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>ReactNode</td>
              <td>Yes</td>
              <td>Article title</td>
            </tr>
            <tr>
              <td>subtitle</td>
              <td>ReactNode</td>
              <td>No</td>
              <td>Article subtitle or description</td>
            </tr>
            <tr>
              <td>publishedAt</td>
              <td>Date</td>
              <td>No</td>
              <td>Publication date</td>
            </tr>
            <tr>
              <td>author</td>
              <td>AuthorObject</td>
              <td>No</td>
              <td>Author information</td>
            </tr>
            <tr>
              <td>readingTime</td>
              <td>string</td>
              <td>No</td>
              <td>Reading time estimate</td>
            </tr>
            <tr>
              <td>tags</td>
              <td>string[]</td>
              <td>No</td>
              <td>Article tags or categories</td>
            </tr>
          </tbody>
        </table>

        <h2>Usage Examples</h2>
        
        <h3>Basic Article</h3>
        <pre><code>{\`import { Article } from '@/components';

<Article>
  <h1>My Article</h1>
  <p>Article content goes here...</p>
</Article>\`}</code></pre>

        <h3>Complete Article Structure</h3>
        <pre><code>{\`import { Article, ArticleHeader, ArticleContent, ArticleFooter } from '@/components';

<Article variant="blog" size="md">
  <ArticleHeader
    title="My Blog Post"
    subtitle="An engaging subtitle"
    publishedAt={new Date()}
    author={{
      name: "John Doe",
      avatar: "/avatar.jpg",
      bio: "Writer"
    }}
    tags={["React", "TypeScript"]}
  />
  
  <ArticleContent>
    <h2>Section</h2>
    <p>Content...</p>
  </ArticleContent>
  
  <ArticleFooter
    shareButtons={{ twitter: true, linkedin: true }}
    relatedArticles={[
      { title: "Related", href: "/related" }
    ]}
  />
</Article>\`}</code></pre>

        <h2>Accessibility</h2>
        <p>The Article components include several accessibility features:</p>
        <ul>
          <li>Semantic HTML structure with proper heading hierarchy</li>
          <li>ARIA labels for interactive elements</li>
          <li>Proper focus management for share buttons</li>
          <li>Screen reader friendly date formatting</li>
          <li>High contrast color schemes</li>
        </ul>

        <h2>Styling</h2>
        <p>
          The components use Tailwind CSS's typography plugin for consistent text styling. 
          Custom variants can be created by extending the prose classes or providing custom CSS.
        </p>
      </ArticleContent>
      
      <ArticleFooter cta={{
      title: 'Need Help?',
      description: 'Check out our comprehensive guides and examples.',
      button: {
        text: 'View Examples',
        href: '#examples'
      }
    }} />
    </Article>
}`,...(Y=($=A.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};const ie=["Default","BlogVariant","DocumentationVariant","NewsVariant","SizeVariants","MaxWidthOptions","CompleteArticle","NewsArticle","DocumentationArticle"];export{g as BlogVariant,f as CompleteArticle,u as Default,A as DocumentationArticle,x as DocumentationVariant,j as MaxWidthOptions,v as NewsArticle,y as NewsVariant,b as SizeVariants,ie as __namedExportsOrder,ne as default};
