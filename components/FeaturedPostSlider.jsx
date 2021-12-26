import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 320 },
    items: 1
  }
};

const FeaturedPostSlider = ({featuredPosts}) => {
    // console.log(featuredPosts);
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
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // // removeArrowOnDeviceType={["tablet", "mobile"]}
            // // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            { featuredPosts.map((featuredPost) => (
              <div key={featuredPost.slug} className="slider-item">
                <Link href={`/post/${featuredPost.slug}`}>
                  <a className='text-[4rem]'>{featuredPost.title}</a>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
    )
}
export default FeaturedPostSlider
