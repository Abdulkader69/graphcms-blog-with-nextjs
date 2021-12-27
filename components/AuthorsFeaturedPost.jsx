import React, { useState,useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import { getAuthorsFeaturedPosts } from '../services/index';


const AuthorsFeaturedPost = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false)
    useEffect(() => {
        getAuthorsFeaturedPosts().then((result) => {
        setFeaturedPosts(result);
        setDataLoaded(true);
    })
    }, [])
    return (
        <>
            <div className="authors-feature-post-wrap">
                <div className="w-full max-w-7xl m-auto px-4 flex">
                    <div className="w-9/12 flex">
                        <div className="w-[60%] relative pl-14">
                            <img className='absolute top-0 left-0' src={featuredPosts[0].destination[0].destinationImage.url} alt={featuredPosts[0].title} />
                            <img src={featuredPosts[0].featuredImage.url} alt={featuredPosts[0].title} />
                        </div>
                        <div className="w-[40%]">
                            <h2>{featuredPosts[0].title}</h2>
                            <p>{featuredPosts[0].excerpt}</p>
                            <a href={`/post/${featuredPosts[0].slug}`}>To Explore</a>
                        </div>
                    </div>
                    <div className="w-3/12"></div>
                </div>
            </div>
            {console.log(featuredPosts)}
        </>
    )
}
export default AuthorsFeaturedPost