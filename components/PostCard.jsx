import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {
    // console.log(post);
    return (
        <div>
            <img src={post.featuredImage.url} alt="" />
            <h1 className="text-3xl">{post.title}</h1>
            <p>{post.excerpt}</p>
            <div className="author">
                <img src={post.author.picture.url} alt={post.author.name} height="30px" width="30px" />
                <p>{post.author.name}</p>
                <div className="date">{moment(post.createdAt).format('MMM DD, YYYY')}</div>
            </div>
        </div>
    )
}

export default PostCard
