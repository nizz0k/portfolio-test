import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Blog from "../components/blog"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
  allNodeProjects {
    edges {
      node {
        id
        title
        body {
          value
        }
        created
        relationships {
          field_project_image {
            id
            localFile {
              childImageSharp{
                sizes(maxWidth: 1250){
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
}
`}

render={data => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Hero />
    <Blog />
 
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}
/>
)

export default IndexPage
