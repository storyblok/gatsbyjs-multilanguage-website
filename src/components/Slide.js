import React from 'react'
import SbEditable from 'storyblok-react'

const Slider = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="snap-start w-full flex-shrink-0 bg-gray-300">
       <img className="object-cover w-full h-full" src={blok.image} id={blok._uid} />
       </div>
    </SbEditable>
    )
}

export default Slider
