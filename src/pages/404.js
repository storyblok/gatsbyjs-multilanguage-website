import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import useStoryblok from '../utils/storyblok'

export default function Page404({ location }) {
  const story = useStoryblok(null, location)

  let content = (<h1>Not found</h1>)
  if(story && story.content) content = (<Page blok={story.content} />)

  return (
    <Layout location={location}>
      { content }
    </Layout>
  )
}