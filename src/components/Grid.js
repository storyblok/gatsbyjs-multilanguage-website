import React from 'react'
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => (
  <SbEditable content={blok} key={blok._uid}>
    <ul className="flex flex-wrap p-8 bg-white container mx-auto">
      {blok.columns.map((blok) => (
          <li key={blok._uid} className="flex-auto px-2">
            <DynamicComponent blok={blok} />
          </li>
        )
      )}
    </ul>
  </SbEditable>
)

export default Grid
