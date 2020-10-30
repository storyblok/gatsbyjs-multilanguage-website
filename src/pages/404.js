import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import StoryblokService from '../utils/storyblok-service'

export default class extends React.Component {
  state = {
    story: {}
  }

  async getInitialStory() {
    const { pathname } = this.props.location
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${pathname}`)
    return story
  }

  async componentDidMount() {
    let story = await this.getInitialStory()
    if(story.content) this.setState({ story })
    setTimeout(() => StoryblokService.initEditor(this), 200)
  }

  render() {
    let content = (<h1>Not found</h1>)
    if(this.state.story.content) content = (<Page blok={this.state.story.content} />)
    return (
      <Layout location={this.props.location}>
       { content }
      </Layout>
    )
  }
}