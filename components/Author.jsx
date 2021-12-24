import React from 'react'

const Author = ({ author }) => {
    return (
        <div className="bg-white p-4 m-4">
            <div className="author">
                <img src={author.picture.url} alt={author.name} height="100px" width="100px" />
                <p>{author.name}</p>
                <p>{author.bio}</p>
            </div>
        </div>
    )
}

export default Author
