import * as React from "react"
import { Helmet } from "react-helmet"
import "../styles/global.css"

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Native AI", 
  description = "A comprehensive React UI component library for Native OS apps" 
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <a className="text-xl font-bold text-white hover:text-gray-200 transition-colors" href="/">NativeAI</a>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </>
  )
}

export default Layout