import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import useStoryblok from '../utils/storyblok'

export default function PageIndex({ data, location }) {
    const story = useStoryblok(data.story, location)

    return (
      <Layout location={location}>
        <Page blok={story.content} />
      </Layout>
    )
}

export const query = graphql`
  {
    story: storyblokEntry(full_slug: { eq: "en/" }) {
      name
      content
      full_slug
      uuid
    }
  }
`