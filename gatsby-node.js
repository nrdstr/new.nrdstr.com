const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
        allWordpressPost {
            edges {
              node {
                author
                content
                date(fromNow: true)
                title
                id
                slug
                status
                excerpt
              }
            }
          }
    }

  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        path: `/blog/${node.slug}`,
        // path to template
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}