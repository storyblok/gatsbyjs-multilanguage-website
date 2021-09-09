import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="font-karla z-10  video_inner overflow-hidden relative">
    <iframe id="aspectRatio" class="z-10 jk_video shadow-lg"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen style={{width: '100%'}}
    />
  </div>
)
export default Video