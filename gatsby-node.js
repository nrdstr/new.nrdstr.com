const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
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

`)

  await result.data.allWordpressPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      }
    })
  })
}