import React from "react"
import SbEditable from "storyblok-react"
import { useStaticQuery, graphql } from "gatsby"

import rewriteSlug from '../utils/rewriteSlug'

const PostsList = ({ blok }) => {
  let filteredPosts = [];
  const isResolved = typeof blok.posts[0] !== 'string'

  const data = useStaticQuery(graphql`
    {
      posts: allStoryblokEntry(
        filter: {field_component: {eq: "blogpost"}}
      ) {
        edges {
          node {
            id
            uuid
            name
            slug
            full_slug
            content
            created_at
          }
        }
      }
    }
  `)
  if(!isResolved) {
    filteredPosts = data.posts.edges
    .filter(p => blok.posts.indexOf(p.node.uuid) > -1);

    filteredPosts = filteredPosts.map((p, i) => {
      const content = p.node.content
      const newContent = typeof content === 'string' ? JSON.parse(content) : content
      p.node.content = newContent
      return p.node
    })
  }

  const arrayOfPosts = isResolved ? blok.posts : filteredPosts
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="container mx-auto">
      <ul className="flex flex-col justify-center items-center">
        {arrayOfPosts.map(post => {
          return (
            <li
              key={post.name}
              className="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md bg-white"
            >
              <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">
                  {`
                    ${new Date(post.created_at).getDay()}.
                    ${new Date(post.created_at).getMonth()}.
                    ${new Date(post.created_at).getFullYear()}`}
                </span>
              </div>
              <div className="mt-2">
                <a
                  className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                  href={`/${rewriteSlug(post.full_slug)}`}
                >
                  {post.content.title}
                </a>
                <p className="mt-2 text-gray-600">{post.content.intro}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  className="text-blue-600 hover:underline"
                  href={`/${rewriteSlug(post.full_slug)}`}
                >
                  Read more
                </a>
              </div>
            </li>
          )
        })}
      </ul>
      </div>
    </SbEditable>
  )
}

export default PostsList
