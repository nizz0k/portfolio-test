import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from "gatsby"

const Blog = () => (
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
          processed
          summary
        }
        path{
          alias
        }
        field_project_image{
          alt
        }
        created
        relationships {
          field_project_image {
            id
            localFile {
              childImageSharp{
                fixed(width: 50){
                  ...GatsbyImageSharpFixed
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

render={ data => (
<layout>
<div>
    <h1>Our Dope-Ass posts</h1>
    { data.allNodeProjects.edges.map(({ node }) => (
   
   <div>
        <h3>{ node.title }</h3>
        <Img fixed={node.relationships.field_project_image.localFile.childImageSharp.fixed} />
        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
      </div>
    ))}
  </div>

</layout>
)}
/>
)



export default Blog