import React from "react"
import Layout from "../components/Layout"
import { useStoryblokState, StoryblokComponent } from "gatsby-source-storyblok"

export default function BlogEntry({ pageContext, location }) {
  const story = useStoryblokState(pageContext.story, location)

  return (
    <Layout location={location}>
      <StoryblokComponent
        blok={story.content}
        key={story._uid}
      />
    </Layout>
  )
}
