import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import rewriteSlug from '../utils/rewriteSlug'
import { Card } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";


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
      // <Link to={`/${rewriteSlug(article[0].node.full_slug)}`} className="font-karla py-16 block transition hover:opacity-50">
      //   <img src={content.image} alt={content.title} className="font-karla pb-10 w-full"/>
      //   <h2 className="font-karla pb-6 text-lg font-bold">{content.title}</h2>
      //   <p className="font-karla pb-6 text-gray-700 leading-loose">{content.intro}</p>
      //   <p className="font-karla text-gray-700">{authorContent.name}</p>
     // </Link>

        <Card className="font-karla pb-3 rounded-3 shadow-md block transition hover:opacity-50" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={content.image} alt={content.title} />
          <Card.Body>
            <Card.Title>{content.title}</Card.Title>
            <Card.Text>
            {content.intro}
            </Card.Text>
            <a href={`/${rewriteSlug(article[0].node.full_slug)}`} className="no-underline font-bold text-gold_300">Read more </a>
            {/* <FaBeer /> */}
          </Card.Body>
        </Card>
  )
}

