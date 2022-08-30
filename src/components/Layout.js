import React from "react"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import ArticleTeaser from './ArticleTeaser'
import BlogPost from './BlogPost'
import Feature from './Feature'
import FeaturedArticles from './FeaturedArticles'
import Footer from './Footer'
import Grid from './Grid'
import Navigation from './Navigation'
import PostsList from './PostsList'
import Slide from './Slide'
import Teaser from './Teaser'
import { useStaticQuery, graphql } from "gatsby"

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    slide: Slide,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    blogpost: BlogPost,
    'article-teaser': ArticleTeaser,
    'featured-articles': FeaturedArticles,
    'posts-list': PostsList
  }
});

export default function Layout({ children, location, lang }) {
  const { settings } = useStaticQuery(graphql`
  query Settings {
    settings: allStoryblokEntry(filter: {field_component: {eq: "settings"}}) {
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
  let { pathname } = location
  let language = pathname.split("/")[1].replace('/', '')
  let activeLanguage = ['de', 'en'].includes(language) ? language : 'en'
  let correctSetting = settings.edges.filter(edge => edge.node.full_slug.indexOf(activeLanguage) > -1)
  let hasSetting = correctSetting && correctSetting.length ? correctSetting[0].node : {}
  let content = typeof hasSetting.content === 'string' ? JSON.parse(hasSetting.content) : hasSetting.content
  let parsedSetting = Object.assign({}, content, { content: content })

  return (
    <div className="bg-gray-300">
      <Navigation settings={parsedSetting} lang={activeLanguage} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}