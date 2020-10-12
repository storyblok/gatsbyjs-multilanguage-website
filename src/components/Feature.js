import React from 'react'
import SbEditable from 'storyblok-react'

const Feature = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col">
            <div className="p-4 bg-primary rounded-full mx-auto w-">
              <img src={blok.icon} alt="" className="w-6 blend-multiply" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl my-4">{blok.name}</div>
                <p className="text-base text-gray-600">
                  {blok.description}
                </p>
            </div>
        </div>
    </SbEditable>
  )
}

export default Feature
