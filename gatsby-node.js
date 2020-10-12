const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/blog-entry.js')

    resolve(
      graphql(
        `{
          stories: allStoryblokEntry(filter: {field_component: {eq: "blogpost"}}) {
            edges {
              node {
                id
                name
                slug
                field_component
                full_slug
                content
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.stories.edges

        entries.forEach((entry) => {
          const page = {
            path: `/${entry.node.full_slug}`,
            component: storyblokEntry,
            context: {
              story: entry.node
            }
          }
          createPage(page)
        })
      })
    )
  })
}
