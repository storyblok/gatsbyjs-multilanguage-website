import React from "react"
import Footer from './Footer'
import Footer2 from './landingPage/footer'
import FooterFinal from './landingPage/footerFinal'
import { useStaticQuery, graphql } from "gatsby"
import NavTwo from "./landingPage/navTwo"
import "@fontsource/karla";

export default function Layout({ children, location, lang }){
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
  let parsedSetting = Object.assign({}, content, {content: content})

  return (
    <div className="font-karla bg-gray-300">
      <NavTwo/>
      <main>
      { children }
      </main>
      <Footer />
      <Footer2/>
      <FooterFinal/>
    </div>
  )
}