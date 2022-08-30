import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { useStoryblokState } from "gatsby-source-storyblok"

export default function PageIndex({ pageContext, location }) {
  const story = useStoryblokState(pageContext.story, location)

  return (
    <Layout location={location}>
      <Page blok={story.content} />
    </Layout>
  )
}
