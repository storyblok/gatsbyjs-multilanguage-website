import React from "react"
import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/Layout"
import StoryblokService from '../utils/storyblok-service'

export default class extends React.Component {
  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const content = JSON.parse(this.props.pageContext.story.content)

    return (
      <Layout>
        <DynamicComponent blok={content} key={this.props.pageContext.story._uid} />
      </Layout>
    )
  }
}
