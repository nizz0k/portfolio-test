/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projects = await graphql(`
    {
    allNodeProjects {
      nodes {
        id
        title
        path {
          alias
        }
      }
    }
  }`
      );
projects.data.allNodeProjects.nodes.map(projectData =>
  createPage({
    path: projectData.path.alias,
    component: path.resolve('src/templates/blog-post.js'),
    context: {
      ProjectId: projectData.id, 
    },
  })
  );
}