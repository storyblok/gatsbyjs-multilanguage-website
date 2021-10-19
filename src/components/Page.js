import React from "react"
import DynamicComponent from "./DynamicComponent"
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map(childBlok => <DynamicComponent blok={childBlok} key={childBlok._uid}/>)
  const hasTitle = blok.title && blok.title.length ? (<h1 className="text-5xl font-bold font-serif text-primary tracking-wide text-center py-8">{ blok.title }</h1>) : null
  return (
    <div {...sbEditable(blok)}>
        { hasTitle }
        { content }
    </div>
  )
}

export default Page
