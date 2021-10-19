import React from 'react'
import { sbEditable } from "@storyblok/storyblok-editable";

const Slider = ({blok}) => {
  return (
    <div {...sbEditable(blok)}>
      <div className="snap-start w-full flex-shrink-0 bg-gray-300">
        <img className="object-cover w-full h-full" src={blok.image} id={blok._uid} />
      </div>
    </div>
    )
}

export default Slider
