import React from 'react'
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok'

const Grid = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <ul className="flex flex-wrap p-8 bg-white container mx-auto">
      {blok.columns.map((blok) => (
        <li key={blok._uid} className="flex-auto px-2">
          <StoryblokComponent blok={blok} />
        </li>
      )
      )}
    </ul>
  </div>
)

export default Grid
