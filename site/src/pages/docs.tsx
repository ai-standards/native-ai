import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

interface DocsPageProps {
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        frontmatter: {
          title: string
          description: string
        }
        fields: {
          slug: string
        }
        excerpt: string
      }>
    }
  }
}

const DocsPage: React.FC<DocsPageProps> = ({ data }) => {
  const docs = data.allMarkdownRemark.nodes

  return (
    <Layout title="Documentation - Native AI">
      <div className="container" style={{ padding: "4rem 2rem" }}>
        <h1>Package Documentation</h1>
        <p style={{ fontSize: "1.2rem", color: "#656d76", marginBottom: "3rem" }}>
          Documentation for all Native AI packages
        </p>
        
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {docs.map((doc) => (
            <div key={doc.fields.slug} className="category">
              <h3>
                <Link to={doc.fields.slug} style={{ color: "#0969da", textDecoration: "none" }}>
                  {doc.frontmatter.title}
                </Link>
              </h3>
                                <p style={{ 
                    color: "#656d76", 
                    margin: "0.5rem 0 0 0",
                    lineHeight: "1.5"
                  }}>
                    {doc.excerpt}
                  </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default DocsPage

export const query = graphql`
  query {
    allMarkdownRemark {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            excerpt
          }
        }
  }
`