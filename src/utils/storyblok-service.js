class StoryblokService {
  initEditor(reactComponent) {
    if (window.storyblok) {
      window.storyblok.init()
      // window.storyblok.on(['change', 'published'], () => location.reload(true))

      // this will alter the state and replaces the current story with a current raw story object (no resolved relations or links)
      window.storyblok.on('input', (event) => {
        if (event.story.content._uid === reactComponent.state.story.content._uid) {
          reactComponent.setState({
            story: {
              ...event.story,
              content: window.storyblok.addComments(event.story.content, event.story.id)
            }
          })
        }
      })
    }
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance
