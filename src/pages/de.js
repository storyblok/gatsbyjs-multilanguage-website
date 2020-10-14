import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import StoryblokService from '../utils/storyblok-service'

export default class extends React.Component {
  state = {
    story: {
      content: JSON.parse(this.props.data.story.content)
    }
  }

  async getInitialStory() {
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${this.props.data.story.full_slug}`)
    return story
  }

  async componentDidMount() {
    let story = await this.getInitialStory()
    if(story.content) this.setState({ story })
    setTimeout(() => StoryblokService.initEditor(this), 200)
  }

  render() {
    return (
      <Layout>
        <Page blok={this.state.story.content} />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    story: storyblokEntry(full_slug: { eq: "de/home" }) {
      name
      content
      full_slug
      uuid
    }
  }
`