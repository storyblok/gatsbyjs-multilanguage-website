import * as React from "react";

const BlogHeader = ({ blok }) => (
    <div id="bannerTop" className="font-karla w-full">
        <section>
            <div className="items-center">
                <div className="w-full h-full">
                    <p className="text-gold_300">
                        { blok.paragraphRed}
                    </p>
                </div>
            </div>
	    </section>
    </div>
)

export default BlogHeader