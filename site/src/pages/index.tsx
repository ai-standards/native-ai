import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { IconRegistry } from "@nativeai/ui/media"
import { Button } from "@nativeai/ui/form"
import { Card, CardHeader, CardContent, CardFooter } from "@nativeai/ui/surface"
import { Typography } from "@nativeai/ui/content"

const IndexPage: React.FC = () => {
  return (
    <Layout title="Native AI - React UI Components for Native OS Apps">
      <header>
        <div className="container">
          <div className="logo">
            <IconRegistry.LuBot size={48} />
          </div>
          <Typography.Heading level={1}>Native AI</Typography.Heading>
          <Typography.Text className="tagline">
            A comprehensive React UI component library for Native OS apps
          </Typography.Text>
          <div className="cta-buttons">
            <Button variant="primary">
              <a href="/ui" style={{ textDecoration: 'none', color: 'inherit' }}>View Components</a>
            </Button>
            <Button variant="outline">
              <a href="https://github.com/ai-standards/native-ai" style={{ textDecoration: 'none', color: 'inherit' }}>View on GitHub</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <Typography.Heading level={2}>Why Native AI?</Typography.Heading>
          <div className="features-grid">
            <Card>
              <CardHeader>
                <div className="feature-icon">
                  <IconRegistry.LuZap />
                </div>
                <Typography.Heading level={3}>Performance Focused</Typography.Heading>
              </CardHeader>
              <CardContent>
                <Typography.Text>Optimized bundle size and runtime performance with tree-shaking support and efficient rendering.</Typography.Text>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="feature-icon">
                  <IconRegistry.LuMonitor />
                </div>
                <Typography.Heading level={3}>Native OS Design</Typography.Heading>
              </CardHeader>
              <CardContent>
                <Typography.Text>Inspired by native operating system patterns, providing familiar and intuitive user experiences.</Typography.Text>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="feature-icon">
                  <IconRegistry.LuCode />
                </div>
                <Typography.Heading level={3}>TypeScript First</Typography.Heading>
              </CardHeader>
              <CardContent>
                <Typography.Text>Built with TypeScript for full type safety, excellent IntelliSense, and better developer experience.</Typography.Text>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="feature-icon">
                  <IconRegistry.LuLayers />
                </div>
                <Typography.Heading level={3}>Modular Architecture</Typography.Heading>
              </CardHeader>
              <CardContent>
                <Typography.Text>Import only what you need. Each component category is separately bundled for optimal performance.</Typography.Text>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="feature-icon">
                  <IconRegistry.LuShield />
                </div>
                <Typography.Heading level={3}>Well Tested</Typography.Heading>
              </CardHeader>
              <CardContent>
                <Typography.Text>Comprehensive test coverage with Vitest ensuring reliability and stability across all components.</Typography.Text>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="feature-icon">
                  <IconRegistry.LuSmartphone />
                </div>
                <Typography.Heading level={3}>Responsive</Typography.Heading>
              </CardHeader>
              <CardContent>
                <Typography.Text>Mobile-first responsive design with Tailwind CSS for consistent experiences across all devices.</Typography.Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="components">
        <div className="container">
          <Typography.Heading level={2}>70+ Components Across 8 Categories</Typography.Heading>
          <Typography.Text>Everything you need to build modern, professional applications</Typography.Text>
          <div className="component-categories">
            <div className="category">
              <h3>Layout & Surface</h3>
              <ul>
                <li>Layout System (ActionBar, TopBar, Sidebar)</li>
                <li>Card, Panel, Section</li>
                <li>Flex, Grid, Stack</li>
                <li>Accordion, Drawer</li>
              </ul>
            </div>
            <div className="category">
              <h3>Form Components</h3>
              <ul>
                <li>Button, Input, Select</li>
                <li>Checkbox, Radio, Switch</li>
                <li>DatePicker, ColorPicker</li>
                <li>Form Validation & Fields</li>
              </ul>
            </div>
            <div className="category">
              <h3>Navigation</h3>
              <ul>
                <li>Breadcrumb, Menu</li>
                <li>Tabs, Pagination</li>
                <li>Tree, Stepper</li>
                <li>Command Menu</li>
              </ul>
            </div>
            <div className="category">
              <h3>Content & Media</h3>
              <ul>
                <li>Typography, Code, Table</li>
                <li>Image, Avatar, Badge</li>
                <li>50+ Icons from Lucide</li>
                <li>Article, Quote, Callout</li>
              </ul>
            </div>
            <div className="category">
              <h3>Overlays</h3>
              <ul>
                <li>Modal, Popover</li>
                <li>Tooltip</li>
                <li>Context Menus</li>
              </ul>
            </div>
            <div className="category">
              <h3>Feedback</h3>
              <ul>
                <li>Alert, Toast</li>
                <li>Progress, Spinner</li>
                <li>Skeleton Loading</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <div className="container">
          <h2>Get Started in Minutes</h2>
          <div className="code-block">
            <code>npm install @nativeai/ui react-icons</code>
          </div>
          <div className="code-block">
            <code>{`import { Button, Card, Layout } from '@nativeai/ui';
import '@nativeai/ui/styles';

function App() {
  return (
    <Layout>
      <Layout.TopBar>My App</Layout.TopBar>
      <Layout.MainContent>
        <Card>
          <Card.Header>Welcome</Card.Header>
          <Card.Content>Ready to build amazing apps!</Card.Content>
          <Card.Footer>
            <Button>Get Started</Button>
          </Card.Footer>
        </Card>
      </Layout.MainContent>
    </Layout>
  );
}`}</code>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-links">
            <a href="/ui/">Storybook</a>
            <Link to="/docs/">Package Docs</Link>
            <a href="https://github.com/ai-standards/native-ai">GitHub</a>
            <a href="https://github.com/ai-standards/native-ai/issues">Issues</a>
            <a href="https://github.com/ai-standards/native-ai/discussions">Discussions</a>
          </div>
          <p>&copy; 2025 Native AI. MIT License.</p>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <title>Native AI - React UI Components for Native OS Apps</title>
)