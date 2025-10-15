import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as H}from"./index-BwDkhjyp.js";import{c as y}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({variant:s="inline",language:g,showLineNumbers:O=!1,copyable:h=!1,className:f,children:r,...b})=>{const[J,v]=H.useState(!1),$=async()=>{if(!(!h||typeof r!="string"))try{await navigator.clipboard.writeText(r),v(!0),setTimeout(()=>v(!1),2e3)}catch(a){console.error("Failed to copy code:",a)}};if(s==="inline")return e.jsx("code",{className:y("px-1.5 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 rounded border",f),...b,children:r});const x=typeof r=="string"?r.split(`
`):[String(r)];return e.jsxs("div",{className:y("relative group",f),...b,children:[h&&e.jsx("button",{onClick:$,className:"absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500","aria-label":"Copy code to clipboard",children:J?"Copied!":"Copy"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono",children:e.jsx("code",{className:g?`language-${g}`:void 0,children:O?e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"select-none text-gray-500 pr-4 text-right min-w-[3rem]",children:x.map((a,t)=>e.jsx("div",{children:t+1},t+1))}),e.jsx("div",{className:"flex-1",children:x.map((a,t)=>e.jsx("div",{children:a},t))})]}):r})})]})},p=s=>e.jsx(n,{...s,variant:"block"});try{n.displayName="Code",n.__docgenInfo={description:"",displayName:"Code",props:{variant:{defaultValue:{value:"inline"},description:"Code variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"block"'}]}},language:{defaultValue:null,description:"Programming language for syntax highlighting",name:"language",required:!1,type:{name:"string"}},showLineNumbers:{defaultValue:{value:"false"},description:"Show line numbers",name:"showLineNumbers",required:!1,type:{name:"boolean"}},copyable:{defaultValue:{value:"false"},description:"Enable copy to clipboard",name:"copyable",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Code content",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{p.displayName="CodeBlock",p.__docgenInfo={description:"",displayName:"CodeBlock",props:{children:{defaultValue:null,description:"Code content",name:"children",required:!0,type:{name:"ReactNode"}},language:{defaultValue:null,description:"Programming language for syntax highlighting",name:"language",required:!1,type:{name:"string"}},showLineNumbers:{defaultValue:{value:"false"},description:"Show line numbers",name:"showLineNumbers",required:!1,type:{name:"boolean"}},copyable:{defaultValue:{value:"false"},description:"Enable copy to clipboard",name:"copyable",required:!1,type:{name:"boolean"}}}}}catch{}const Q={title:"Content/Code",component:n,parameters:{layout:"centered",docs:{description:{component:"Inline and block code display with syntax highlighting and copy functionality."}}}},o={args:{children:"Code"},render:()=>e.jsxs("div",{className:"max-w-lg space-y-4",children:[e.jsxs("p",{children:["Use the ",e.jsx(n,{children:"useState"})," hook to manage component state in React."]}),e.jsxs("p",{children:["The ",e.jsx(n,{children:"console.log()"})," function outputs messages to the browser console."]}),e.jsxs("p",{children:["Install dependencies with ",e.jsx(n,{children:"npm install package-name"}),"."]})]})},i={args:{children:"Code"},render:()=>e.jsx("div",{className:"w-96",children:e.jsx(n,{variant:"block",children:`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`})})},c={args:{children:"Code"},render:()=>e.jsxs("div",{className:"w-96 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"JavaScript"}),e.jsx(n,{variant:"block",language:"javascript",children:`const users = await fetch('/api/users')
  .then(res => res.json())
  .catch(err => console.error(err));`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"TypeScript"}),e.jsx(n,{variant:"block",language:"typescript",children:`interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (data: User): Promise<User> => {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(data)
  });
};`})]})]})},l={args:{children:"Code"},render:()=>e.jsx("div",{className:"w-96",children:e.jsx(n,{variant:"block",showLineNumbers:!0,children:`import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      {children}
    </button>
  );
};`})})},d={args:{children:"Code"},render:()=>e.jsxs("div",{className:"w-96 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Hover to see copy button"}),e.jsx(n,{variant:"block",copyable:!0,children:`git clone https://github.com/user/repo.git
cd repo
npm install
npm start`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"With line numbers and copy"}),e.jsx(n,{variant:"block",copyable:!0,showLineNumbers:!0,language:"bash",children:`# Install dependencies
npm install

# Start development server  
npm run dev

# Build for production
npm run build`})]})]})},m={args:{children:"Code"},render:()=>e.jsxs("div",{className:"w-96",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Using CodeBlock convenience component"}),e.jsx(p,{language:"json",copyable:!0,showLineNumbers:!0,children:`{
  "name": "@company/ui-library",
  "version": "1.0.0",
  "description": "A comprehensive React UI component library",
  "main": "dist/index.js",
  "scripts": {
    "build": "rollup -c",
    "test": "vitest",
    "storybook": "storybook dev -p 6006"
  }
}`})]})},u={args:{children:"Code"},render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Complete React Component Example"}),e.jsx(p,{language:"typescript",copyable:!0,showLineNumbers:!0,children:`import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

export interface UserProfileProps {
  userId: string;
  onUpdate?: (user: User) => void;
  className?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  onUpdate,
  className,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className={cn('bg-white rounded-lg shadow p-6', className)}>
      <div className="flex items-center space-x-4">
        {user.avatar && (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          
          {user.bio && (
            <p className="mt-2 text-sm text-gray-700">{user.bio}</p>
          )}
          
          <p className="mt-2 text-xs text-gray-500">
            Member since {user.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};`})]})};var N,C,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Code'
  },
  render: () => <div className="max-w-lg space-y-4">
      <p>
        Use the <Code>useState</Code> hook to manage component state in React.
      </p>
      <p>
        The <Code>console.log()</Code> function outputs messages to the browser console.
      </p>
      <p>
        Install dependencies with <Code>npm install package-name</Code>.
      </p>
    </div>
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var j,k,U;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Code'
  },
  render: () => <div className="w-96">
      <Code variant="block">
      {\`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}\`}
      </Code>
    </div>
}`,...(U=(k=i.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var S,L,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Code'
  },
  render: () => <div className="w-96 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">JavaScript</h3>
        <Code variant="block" language="javascript">
        {\`const users = await fetch('/api/users')
  .then(res => res.json())
  .catch(err => console.error(err));\`}
        </Code>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">TypeScript</h3>
        <Code variant="block" language="typescript">
        {\`interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (data: User): Promise<User> => {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(data)
  });
};\`}
        </Code>
      </div>
    </div>
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var I,_,B;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Code'
  },
  render: () => <div className="w-96">
      <Code variant="block" showLineNumbers>
      {\`import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      {children}
    </button>
  );
};\`}
      </Code>
    </div>
}`,...(B=(_=l.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var P,R,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Code'
  },
  render: () => <div className="w-96 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Hover to see copy button</h3>
        <Code variant="block" copyable>
        {\`git clone https://github.com/user/repo.git
cd repo
npm install
npm start\`}
        </Code>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">With line numbers and copy</h3>
        <Code variant="block" copyable showLineNumbers language="bash">
        {\`# Install dependencies
npm install

# Start development server  
npm run dev

# Build for production
npm run build\`}
        </Code>
      </div>
    </div>
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var V,D,T;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Code'
  },
  render: () => <div className="w-96">
      <h3 className="text-sm font-medium mb-2">Using CodeBlock convenience component</h3>
      <CodeBlock language="json" copyable showLineNumbers>
      {\`{
  "name": "@company/ui-library",
  "version": "1.0.0",
  "description": "A comprehensive React UI component library",
  "main": "dist/index.js",
  "scripts": {
    "build": "rollup -c",
    "test": "vitest",
    "storybook": "storybook dev -p 6006"
  }
}\`}
      </CodeBlock>
    </div>
}`,...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var A,W,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Code'
  },
  render: () => <div className="w-full max-w-4xl">
      <h3 className="text-lg font-semibold mb-4">Complete React Component Example</h3>
      <CodeBlock language="typescript" copyable showLineNumbers>
      {\`import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

export interface UserProfileProps {
  userId: string;
  onUpdate?: (user: User) => void;
  className?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  onUpdate,
  className,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\\\`/api/users/\\\${userId}\\\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className={cn('bg-white rounded-lg shadow p-6', className)}>
      <div className="flex items-center space-x-4">
        {user.avatar && (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          
          {user.bio && (
            <p className="mt-2 text-sm text-gray-700">{user.bio}</p>
          )}
          
          <p className="mt-2 text-xs text-gray-500">
            Member since {user.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};\`}
      </CodeBlock>
    </div>
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const X=["InlineCode","BlockCode","WithLanguage","WithLineNumbers","Copyable","CodeBlockExample","LongCodeExample"];export{i as BlockCode,m as CodeBlockExample,d as Copyable,o as InlineCode,u as LongCodeExample,c as WithLanguage,l as WithLineNumbers,X as __namedExportsOrder,Q as default};
