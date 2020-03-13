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


</layout>
)}
/>
)



export default Blog