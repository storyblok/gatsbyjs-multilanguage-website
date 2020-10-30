import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import { useStaticQuery, graphql } from "gatsby"
import DynamicComponent from './DynamicComponent'

const BlogPost = ({ blok }) => {
  const related = blok.related && blok.related.length ? (<DynamicComponent blok={blok.related[0]} key={blok.related[0]._uid}/>) : null
  const { authors } = useStaticQuery(graphql`
  {
    authors: allStoryblokEntry(filter: {field_component: {eq: "author"}}) {
      edges {
        node {
          name
          uuid
          content
        }
      }
    }
  } 
  `)

  let thisAuthor = authors.edges.filter(({ node }) => node.uuid === blok.author)
  let authorContent = thisAuthor.length ? JSON.parse(thisAuthor[0].node.content) : {};

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white-half w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">
            {blok.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg">{blok.intro}</p>
          <img className="w-full bg-gray-300 my-16" src={blok.image} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {render(blok.long_text)}
        </div>

        <div className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col">
          <div className="p-4 bg-primary rounded-full mx-auto">
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl my-4">{authorContent.name}</div>
            <p className="text-base text-gray-600">{authorContent.description}</p>
          </div>
        </div>

        { related }
      </div>
    </SbEditable>
  )
}

export default BlogPost
