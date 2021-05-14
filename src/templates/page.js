import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import useStoryblok from '../utils/storyblok'

export default function PageIndex({ pageContext, location }) {
    const story = useStoryblok(pageContext.story, location)

    return (
      <Layout location={location}>
        <Page blok={story.content} />
      </Layout>
    )
}
