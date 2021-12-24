import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

const responsive = {
  mobile: {
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const FeaturedPostSlider = ({featuredPosts}) => {
    console.log(featuredPosts);
    return (
        <div>
            { featuredPosts.map((featuredPost) => (
            <div key={featuredPost.slug}>
              <Link href={`/post/${featuredPost.slug}`}>
                <a className='text-[4rem]'>{featuredPost.title}</a>
              </Link>
            </div>
          ))}
        </div>
    )
}
export default FeaturedPostSlider
