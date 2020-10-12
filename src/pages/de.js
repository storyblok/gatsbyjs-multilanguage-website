import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import StoryblokService from '../utils/storyblok-service'

export default class extends React.Component {
  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    if (typeof this.props.data == 'undefined') {
      return (<h2>No Connection to Storyblok</h2>)
    }

    const contentOfStory = JSON.parse(this.props.data.storyblokEntry.content)
    console.log(contentOfStory)

    return (
      <Layout>
        <Page blok={contentOfStory} />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    storyblokEntry(full_slug: { eq: "de/home" }) {
      id
      name
      content
      lang
      slug
      uuid
    }
  }
`