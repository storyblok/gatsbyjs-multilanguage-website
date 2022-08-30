import React from "react"
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok"

const Page = ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map(childBlok => <StoryblokComponent blok={childBlok} key={childBlok._uid} />)
  const hasTitle = blok.title && blok.title.length ? (<h1 className="text-5xl font-bold font-serif text-primary tracking-wide text-center py-8">{blok.title}</h1>) : null
  return (
    <div {...storyblokEditable(blok)}>
      {hasTitle}
      {content}
    </div>
  )
}

export default Page
