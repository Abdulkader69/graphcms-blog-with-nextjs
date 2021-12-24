import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ Categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    
    useEffect(() => {
       if(slug) {
            getSimilarPosts(Categories, slug)
                .then((result) => setRelatedPosts(result))
       } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
       }
    }, [slug])

    // console.log(relatedPosts);
    return (
        <div className="bg-white p-4 m-4">
            <h3>{slug ? 'Similar Posts' : 'Recent Posts'}</h3>
            {relatedPosts.map((post) => (
                <div 
                    className="similar-post"
                    key={post.slug}
                >
                    <img src={post.featuredImage.url} alt={post.title} height="60px" width="60px" />
                    <div className="date">{moment(post.createdAt).format('MMM DD, YYYY')}</div>
                    <Link href={`/post/${post.slug}`}>
                        <a>{post.title}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PostWidget
