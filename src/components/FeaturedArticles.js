import React from 'react'
import SbEditable from 'storyblok-react'
import ArticleTeaser from './ArticleTeaser'

const FeaturedArticles = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="font-karla py-8 mb-6 container mx-auto text-left" key={blok._uid}>
        <div className="relative">
          <h2 className="relative text-4xl z-5 py-5 pl-4 font-bold">{blok.title}</h2>
        </div>
        <div className="flex-wrap content-center justify-evenly justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
          {blok.articles.map((article) => (
              /* <li key={article._uid} className="pr-8 w-1/3"> */
              <div key={article._uid} className="mb-8">
                <ArticleTeaser blok={article} />
              </div>
            )
          )}
        </div>
      </div>
    </SbEditable>
  )
}

export default FeaturedArticles
