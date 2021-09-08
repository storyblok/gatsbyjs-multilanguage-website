import * as React from "react";

import Video from '../video';

const VideoWhy = ({ blok }) => (
	<section class="bg-navy_300 py-20">
        <div class="mx-auto md:w-7/12">
			<div class="container_sm px-8 pt-20 bg-white">
                    <Video
                        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        videoTitle="Official Music Video on YouTube"
                    />
                     <h3 className="text-center text-navy_300 py-10">
                        Triiyo delivers a simple solution for everyone
                    </h3>
			</div>
		</div>
    </section>
)

export default VideoWhy 