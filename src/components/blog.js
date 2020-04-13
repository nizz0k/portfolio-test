import React from 'react'
import { Link } from 'gatsby'
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

render={ data => (
<layout>
<div>
    <h1>Our Dope-Ass posts</h1>
    { data.allNodeProjects.edges.map(({ node }) => (
      <div>
        <h3>{ node.title }</h3>
        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
      </div>
    ))}
  </div>

</layout>
)}
/>
)



export default Blog