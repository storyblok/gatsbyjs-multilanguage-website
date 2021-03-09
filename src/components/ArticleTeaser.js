import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'

export default function ArticleTeaser({ blok }){
  const { articles, authors } = useStaticQuery(graphql`
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
    authors: allStoryblokEntry(filter: {field_component: {eq: "author"}}) {
      edges {
        node {
          name
          uuid
          content
        }
      }
    }
  } 
  `)
  let article = articles.edges.filter(({ node }) => node.full_slug === blok.article.cached_url)
  let content = article.length ? JSON.parse(article[0].node.content) : {};
  let  { author } = content
  let thisAuthor = authors.edges.filter(({ node }) => node.uuid === author)
  let authorContent = thisAuthor.length ? JSON.parse(thisAuthor[0].node.content) : {};

  return (
      <Link to={`/${article[0].node.full_slug}`} className="py-16 block transition hover:opacity-50">
        <img src={content.image} alt={content.title} className="pb-10 w-full"/>
        <h2 className="pb-6 text-lg font-bold">{content.title}</h2>
        <p className="pb-6 text-gray-700 leading-loose">{content.intro}</p>
        <p className="text-gray-700">{authorContent.name}</p>
      </Link>
  )
}

