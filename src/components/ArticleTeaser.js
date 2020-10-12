import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export default function ArticleTeaser({ blok }){
  const { articles } = useStaticQuery(graphql`
  query Articles {
    articles: allStoryblokEntry(filter: {field_component: {eq: "blogpost"}}) {
      edges {
        node {
          name
          full_slug
          content
        }
      }
    }
  } 
  `)
  let article = articles.edges.filter(({ node }) => node.full_slug === blok.article.cached_url)
  let content = article.length ? JSON.parse(article[0].node.content) : {};

  const resizedImage = function(imageUrl) {
    if (typeof imageUrl !== 'undefined') {
      return imageUrl.replace('//a.storyblok.com', '//img2.storyblok.com/300x250')
    }
    return null
  }


  return (
      <div className="py-16">
        <img src={content.image} className="pb-10 w-full"/>
        <h2 className="pb-6 text-lg font-bold">{content.title}</h2>
        <p className="pb-6 text-gray-700 leading-loose">{content.intro}</p>
        <p className="text-gray-700">{content.author}</p>
      </div>
  )
}

