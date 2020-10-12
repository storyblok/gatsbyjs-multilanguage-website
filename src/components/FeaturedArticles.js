import React from 'react'
import SbEditable from 'storyblok-react'
import ArticleTeaser from './ArticleTeaser'

const FeaturedArticles = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="py-8 mb-6 container mx-auto text-left" key={blok._uid}>
        <div className="relative">
          <h2 className="relative font-serif text-4xl z-10 text-primary">{blok.title}</h2>
          <div className="absolute top-0 w-64 h-10 mt-6 -ml-4 bg-yellow-300 opacity-50" />
        </div>
        <ul className="flex">
          {blok.articles.map((article) => (
              <li key={article._uid} className="pr-8 w-1/3">
                <ArticleTeaser blok={article} />
              </li>
            )
          )}
        </ul>
      </div>
    </SbEditable>
  )
}

export default FeaturedArticles
