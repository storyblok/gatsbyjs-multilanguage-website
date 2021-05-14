import React from "react"
import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/Layout"
import useStoryblok from "../utils/storyblok"

export default function BlogEntry({ pageContext, location }) {
  const story = useStoryblok(pageContext.story, location)

  return (
    <Layout location={location}>
      <DynamicComponent
        blok={story.content}
        key={story._uid}
      />
    </Layout>
  )
}
