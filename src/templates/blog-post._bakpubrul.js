import React from "react"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const Project = ({data}) => {
const post = data.nodeProjects;

 return (
  <Layout>
   <h1>{post.title}</h1>
   <img src={data.nodeProjects.relationships.field_project_image.localFile.publicURL} alt={data.nodeProjects.field_project_image.alt} />
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
      id
      title
      body {
        processed
      }
      path {
        alias
      }
      field_project_image {
        alt
      }
      relationships {
        field_project_image {
          localFile {
              publicURL
          }
        }
      }
  }
}
`
export default Project;