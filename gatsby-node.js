const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const categoryPageTemplate = path.resolve(`src/templates/category-page.js`)

  return graphql(`
    {
      allWpCategory {
        edges {
          node {
            uri
            id
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allWpCategory.edges.forEach(edge => {
      createPage({
        path: `${edge.node.uri}`,
        component: categoryPageTemplate,
        context: {
          id: edge.node.id,
          name: edge.node.name,
        },
      })
    })
  })
}
