import * as React from "react";
import ResponsivePlayer from "./responsiveVideo";

const VideoWhy = ({ blok }) => (
	<section class="font-karla bg-navy_300 py-20">
    <div class="mx-auto md:w-7/12">
      <div class="px-10 pt-4 bg-white_100 rounded-3">
        <ResponsivePlayer className="px-10 pt-5"/>
        <h3 className="text-center text-navy_300 pt-3 pb-10">
            Triiyo delivers a simple solution for everyone
        </h3>
      </div>
    </div>
  </section>
)

export default VideoWhy 