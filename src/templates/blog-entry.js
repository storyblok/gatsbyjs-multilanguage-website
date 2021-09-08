import React from "react"
import BlogBannerTop from "../components/blogs/blogBannerTop"
import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/Layout"
import useStoryblok from "../utils/storyblok"

export default function BlogEntry({ pageContext, location }) {
  const story = useStoryblok(pageContext.story, location)

  return (
    <Layout location={location}>
      <BlogBannerTop/>
      <DynamicComponent
        blok={story.content}
        key={story._uid}
      />
    </Layout>
  )
}
