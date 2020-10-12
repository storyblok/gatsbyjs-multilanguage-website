import React from "react"
import Navigation from './Navigation'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

import config from '../../gatsby-config'
let sbConfigs = config.plugins.filter((item) => (item.resolve === 'gatsby-source-storyblok'))
let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}

export default function Layout({ children }){
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
  let { pathname } = new URL(window.location.href)
  let language = pathname.split('/')[1]
  let isLanguage = ['de', 'en'].includes(language) ? language : 'en'
  let correctSetting = settings.edges.filter(edge => edge.node.full_slug.indexOf(isLanguage) > -1)
  let hasSetting = correctSetting && correctSetting.length ? correctSetting[0].node : {}
  let content = typeof hasSetting.content === 'string' ? JSON.parse(hasSetting.content) : hasSetting.content
  let parsedSetting = Object.assign({}, content, {content: content})
  return (
    <div className="bg-gray-300">
      <Helmet
          script={[
            {"src": `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToke}`, "type": "text/javascript"}
          ]}
      />
      <Navigation settings={parsedSetting} lang={isLanguage} />
      <main>
      { children }
      </main>
      <Footer />
    </div>
  )
}