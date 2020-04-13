import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"
const BlogPage = () => (


  <Layout>
    <SEO title="Blog Page" />
    <h1>Hi from the Blog page</h1>
    <p>Welcome to page Blog</p>
    <Blog />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
