const path = require('path')

const rewriteSlug = require('./src/utils/rewriteSlug')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-entry.js')
    const pageTemplate = path.resolve('src/templates/page.js')

    resolve(
      graphql(
        `{
          posts: allStoryblokEntry(filter: {field_component: {eq: "blogpost"}}) {
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
          pages: allStoryblokEntry(filter: {field_component: {eq: "page"}}) {
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

        const allPosts = result.data.posts.edges
        const allPages = result.data.pages.edges

        allPosts.forEach((entry) => {
          const slug = rewriteSlug(entry.node.full_slug)
          const page = {
            path: `/${slug}`,
            component: blogPostTemplate,
            context: {
              story: entry.node
            }
          }
          createPage(page)
        })

        allPages.forEach((entry) => {
          let slug = rewriteSlug(entry.node.full_slug)
          const page = {
            path: `/${slug}`,
            component: pageTemplate,
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
