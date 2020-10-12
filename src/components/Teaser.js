import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import DynamicComponent from "./DynamicComponent"

const Teaser = ({ blok }) => { 
  const body =
    blok.body &&
    blok.body.map(childBlok => <DynamicComponent blok={childBlok} key={childBlok._uid}/>)
  return (
  <SbEditable content={blok} key={blok._uid}>
    <div className="bg-white-half">
      <div className="pb-6 pt-16 container mx-auto">
        <h1 className="text-6xl font-bold font-serif text-primary">{ blok.headline }</h1>
        <p className="text-gray-700 text-lg max-w-lg">{ blok.intro_text }</p>
      </div>
      <div className="container mx-auto overflow-x-scroll flex w-full my-8 snap-x">
        { body }                
      </div>
    </div>
  </SbEditable>
)
}

export default Teaser
