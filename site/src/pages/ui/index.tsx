import * as React from "react"
import Layout from "../../components/Layout"
import { Typography } from "@nativeai/ui/content"
import { Card, CardHeader, CardContent } from "@nativeai/ui/surface"

const UIPage: React.FC = () => {
  return (
    <Layout title="UI Components - Native AI" description="Interactive component library and documentation">
      <header></header>
      <div style={{ padding: "2rem 0" }}>
        <div className="container">
          <Typography.Heading level={1}>UI Component Library</Typography.Heading>
          <Typography.Text style={{ marginBottom: "2rem", display: "block" }}>
            Interactive components, live examples, and comprehensive documentation for the Native AI design system.
          </Typography.Text>

          <div style={{ marginTop: "2rem" }}>
            <Typography.Heading level={2}>Quick Navigation</Typography.Heading>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
              marginTop: "1rem"
            }}>
              <Card>
                <CardHeader>
                  <Typography.Heading level={4}>Form Components</Typography.Heading>
                </CardHeader>
                <CardContent>
                  <Typography.Text>
                    Buttons, inputs, selects, checkboxes, and all interactive form elements.
                  </Typography.Text>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Typography.Heading level={4}>Layout & Surface</Typography.Heading>
                </CardHeader>
                <CardContent>
                  <Typography.Text>
                    Cards, panels, grids, flexbox utilities, and structural components.
                  </Typography.Text>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Typography.Heading level={4}>Navigation</Typography.Heading>
                </CardHeader>
                <CardContent>
                  <Typography.Text>
                    Tabs, menus, breadcrumbs, pagination, and navigation patterns.
                  </Typography.Text>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Typography.Heading level={4}>Content & Media</Typography.Heading>
                </CardHeader>
                <CardContent>
                  <Typography.Text>
                    Typography, images, icons, code blocks, and content display.
                  </Typography.Text>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UIPage