import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
//import Img from "gatsby-image"
import SEO from "../components/seo"
import Hero from "../components/hero"


const IndexPage = () => (
  

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
 
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
