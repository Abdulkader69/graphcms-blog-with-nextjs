import React, { useState,useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import { getFeaturedPosts } from '../services/index';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 320 },
    items: 1
  }
};

const FeaturedPostSlider = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false)
  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    })
  }, [])
    return (
        <div className='featured-slider-wrap'>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            // customTransition="all .5 ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            // // removeArrowOnDeviceType={["tablet", "mobile"]}
            // // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            { featuredPosts.map((featuredPost) => (
              <div key={featuredPost.slug} className="slider-item flex w-full h-[calc(100vh-32px)] items-center relative z-10 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-black/50 before:z-20">
                <img className='absolute top-0 left-0 object-cover w-full h-full' src={featuredPost.featuredImage.url} alt={featuredPost.featuredImage.title} />
                <div className="content w-full relative z-50">
                  <div className="w-full max-w-7xl m-auto px-4 text-center">
                    <Link href={`/post/${featuredPost.slug}`}>
                      <a className='text-[4rem] text-white'>{featuredPost.title}</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
    )
}
export default FeaturedPostSlider
