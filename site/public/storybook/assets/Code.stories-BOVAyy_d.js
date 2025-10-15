import{j as e}from"./jsx-dev-runtime-YqEzVWbi.js";import{r as H}from"./index-DHZDe_v1.js";import{c as x}from"./cn-BaF2GUMg.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({variant:o="inline",language:f,showLineNumbers:O=!1,copyable:b=!1,className:g,children:s,...v})=>{const[J,N]=H.useState(!1),$=async()=>{if(!(!b||typeof s!="string"))try{await navigator.clipboard.writeText(s),N(!0),setTimeout(()=>N(!1),2e3)}catch(r){console.error("Failed to copy code:",r)}};if(o==="inline")return e.jsxDEV("code",{className:x("px-1.5 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 rounded border",g),...v,children:s},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:42,columnNumber:7},void 0);const h=typeof s=="string"?s.split(`
`):[String(s)];return e.jsxDEV("div",{className:x("relative group",g),...v,children:[b&&e.jsxDEV("button",{onClick:$,className:"absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500","aria-label":"Copy code to clipboard",children:J?"Copied!":"Copy"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:63,columnNumber:9},void 0),e.jsxDEV("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono",children:e.jsxDEV("code",{className:f?`language-${f}`:void 0,children:O?e.jsxDEV("div",{className:"flex",children:[e.jsxDEV("div",{className:"select-none text-gray-500 pr-4 text-right min-w-[3rem]",children:h.map((r,t)=>e.jsxDEV("div",{children:t+1},t+1,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:80,columnNumber:19},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:78,columnNumber:15},void 0),e.jsxDEV("div",{className:"flex-1",children:h.map((r,t)=>e.jsxDEV("div",{children:r},t,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:85,columnNumber:19},void 0))},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:83,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:77,columnNumber:13},void 0):s},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:73,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:72,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:60,columnNumber:5},void 0)},p=o=>e.jsxDEV(n,{...o,variant:"block"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.tsx",lineNumber:102,columnNumber:10},void 0);try{n.displayName="Code",n.__docgenInfo={description:"",displayName:"Code",props:{variant:{defaultValue:{value:"inline"},description:"Code variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"block"'}]}},language:{defaultValue:null,description:"Programming language for syntax highlighting",name:"language",required:!1,type:{name:"string"}},showLineNumbers:{defaultValue:{value:"false"},description:"Show line numbers",name:"showLineNumbers",required:!1,type:{name:"boolean"}},copyable:{defaultValue:{value:"false"},description:"Enable copy to clipboard",name:"copyable",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Code content",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{p.displayName="CodeBlock",p.__docgenInfo={description:"",displayName:"CodeBlock",props:{language:{defaultValue:null,description:"Programming language for syntax highlighting",name:"language",required:!1,type:{name:"string"}},showLineNumbers:{defaultValue:{value:"false"},description:"Show line numbers",name:"showLineNumbers",required:!1,type:{name:"boolean"}},copyable:{defaultValue:{value:"false"},description:"Enable copy to clipboard",name:"copyable",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Code content",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const Q={title:"Content/Code",component:n,parameters:{layout:"centered",docs:{description:{component:"Inline and block code display with syntax highlighting and copy functionality."}}}},a={args:{children:"Code"},render:()=>e.jsxDEV("div",{className:"max-w-lg space-y-4",children:[e.jsxDEV("p",{children:["Use the ",e.jsxDEV(n,{children:"useState"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:25,columnNumber:17},void 0)," hook to manage component state in React."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:24,columnNumber:7},void 0),e.jsxDEV("p",{children:["The ",e.jsxDEV(n,{children:"console.log()"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:28,columnNumber:13},void 0)," function outputs messages to the browser console."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:27,columnNumber:7},void 0),e.jsxDEV("p",{children:["Install dependencies with ",e.jsxDEV(n,{children:"npm install package-name"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:31,columnNumber:35},void 0),"."]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:30,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:23,columnNumber:5},void 0)},i={args:{children:"Code"},render:()=>e.jsxDEV("div",{className:"w-96",children:e.jsxDEV(n,{variant:"block",children:`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:41,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:40,columnNumber:5},void 0)},c={args:{children:"Code"},render:()=>e.jsxDEV("div",{className:"w-96 space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"JavaScript"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:56,columnNumber:9},void 0),e.jsxDEV(n,{variant:"block",language:"javascript",children:`const users = await fetch('/api/users')
  .then(res => res.json())
  .catch(err => console.error(err));`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:57,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:55,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"TypeScript"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:65,columnNumber:9},void 0),e.jsxDEV(n,{variant:"block",language:"typescript",children:`interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (data: User): Promise<User> => {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(data)
  });
};`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:66,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:64,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:54,columnNumber:5},void 0)},l={args:{children:"Code"},render:()=>e.jsxDEV("div",{className:"w-96",children:e.jsxDEV(n,{variant:"block",showLineNumbers:!0,children:`import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      {children}
    </button>
  );
};`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:89,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:88,columnNumber:5},void 0)},d={args:{children:"Code"},render:()=>e.jsxDEV("div",{className:"w-96 space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Hover to see copy button"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:112,columnNumber:9},void 0),e.jsxDEV(n,{variant:"block",copyable:!0,children:`git clone https://github.com/user/repo.git
cd repo
npm install
npm start`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:113,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:111,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"With line numbers and copy"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:122,columnNumber:9},void 0),e.jsxDEV(n,{variant:"block",copyable:!0,showLineNumbers:!0,language:"bash",children:`# Install dependencies
npm install

# Start development server  
npm run dev

# Build for production
npm run build`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:123,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:121,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:110,columnNumber:5},void 0)},m={args:{children:"Code"},render:()=>e.jsxDEV("div",{className:"w-96",children:[e.jsxDEV("h3",{className:"text-sm font-medium mb-2",children:"Using CodeBlock convenience component"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:142,columnNumber:7},void 0),e.jsxDEV(p,{language:"json",copyable:!0,showLineNumbers:!0,children:`{
  "name": "@company/ui-library",
  "version": "1.0.0",
  "description": "A comprehensive React UI component library",
  "main": "dist/index.js",
  "scripts": {
    "build": "rollup -c",
    "test": "vitest",
    "storybook": "storybook dev -p 6006"
  }
}`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:143,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:141,columnNumber:5},void 0)},u={args:{children:"Code"},render:()=>e.jsxDEV("div",{className:"w-full max-w-4xl",children:[e.jsxDEV("h3",{className:"text-lg font-semibold mb-4",children:"Complete React Component Example"},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:164,columnNumber:7},void 0),e.jsxDEV(p,{language:"typescript",copyable:!0,showLineNumbers:!0,children:`import React, { useState, useEffect } from 'react';
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
};`},void 0,!1,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:165,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/flyman/Desktop/projects/native-ai/packages/ui/src/components/content/code/Code.stories.tsx",lineNumber:163,columnNumber:5},void 0)};var y,k,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,D,U;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(D=i.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var E,w,V;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var S,L,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var _,B,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var R,q,T;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(q=m.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var A,W,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const X=["InlineCode","BlockCode","WithLanguage","WithLineNumbers","Copyable","CodeBlockExample","LongCodeExample"];export{i as BlockCode,m as CodeBlockExample,d as Copyable,a as InlineCode,u as LongCodeExample,c as WithLanguage,l as WithLineNumbers,X as __namedExportsOrder,Q as default};
