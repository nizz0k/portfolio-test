import React from "react"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const Project = ({data}) => {
console.log(data.nodeProjects.field_project_image.relationships.localFile.childImageSharp.fluid );
const post = data.nodeProjects;

 return (
  <Layout>
   <h1>{post.title}</h1>
   <Img src={post.relationships.field_project_image.localFile.childImageSharp.fluid} alt={data.nodeProjects.field_project_image.alt} />
   <div
       dangerouslySetInnerHTML={{ __html: post.body.processed }}
     />
  </Layout>
 
 )
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
query($ProjectId: String!) {
  nodeProjects(id: { eq: $ProjectId }) {
    body {
        processed
        summary
      }
      id
      title
      field_project_image{
        alt
      }
      relationships {
        field_project_image {
          localFile {
            publicURL
            childImageSharp{
              fluid(maxWidth: 600) {
         ...GatsbyImageSharpFluid
             }
            }
          }
        }
      }
    }
  }

`
export default Project;