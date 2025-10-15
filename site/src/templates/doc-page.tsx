import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

interface DocPageProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

const DocPage: React.FC<DocPageProps> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout 
      title={`${frontmatter.title} - Native AI Documentation`}
      description="Native AI UI Components Documentation"
    >
      <div className="container" style={{ padding: "2rem", maxWidth: "800px" }}>
        <nav style={{ marginBottom: "2rem" }}>
          <Link 
            to="/docs/" 
            style={{ 
              color: "#0969da", 
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            ← Back to Documentation
          </Link>
        </nav>
        
        <article 
          style={{ 
            lineHeight: "1.8",
            fontSize: "1.1rem"
          }}
        >
          <div 
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              maxWidth: "none"
            }}
          />
        </article>
      </div>
      

    </Layout>
  )
}

export default DocPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`