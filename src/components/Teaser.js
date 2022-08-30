import React from 'react'
import { render } from "storyblok-rich-text-react-renderer"
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok'

const Teaser = ({ blok }) => {
  const body = blok &&
    blok.body &&
    blok.body.map(childBlok => <StoryblokComponent blok={childBlok} key={childBlok._uid} />)
  const introText = typeof blok.intro_text === 'string' ? blok.intro_text : render(blok.intro_text)
  const key = typeof blok._editable !== 'undefined' ? blok._uid + '-edit' : blok._uid
  return (
    <div {...storyblokEditable(blok)}>
      <div className="bg-white-half">
        <div className="pb-6 pt-16 container mx-auto">
          <h1 className="text-6xl font-bold font-serif text-primary">{blok.headline}</h1>
          <div className="text-gray-700 text-lg max-w-lg">{introText}</div>
        </div>
        <div className="container mx-auto overflow-x-scroll flex w-full my-8 snap-x">
          {body}
        </div>
      </div>
    </div>
  )
}

export default Teaser
