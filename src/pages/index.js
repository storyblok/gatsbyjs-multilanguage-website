import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { useStoryblokState } from "gatsby-source-storyblok"

export default function PageIndex({ data, location }) {
  let story = data.story
  story = useStoryblokState(data.story, location)

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
      id
      internalId
    }
  }
`