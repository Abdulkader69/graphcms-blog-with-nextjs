import React, {useState, useEffect} from 'react'
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';
const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments(slug)
            .then((result) => setComments(result))
    }, [])

    return (
        <>
            {comments.length > 0 && (
                <div className="bg-white p-4 m-4">
                    <h2 className='mb-4'>
                        {Comments.length}
                        {' '}
                        Comments
                    </h2>
                    {comments.map((comment) => (
                        <div key={comment.createdAt} className='mb-4'>
                            <p>{comment.name}</p>
                            <p>{comment.comment}</p>
                            <span>{moment(comment.createdAt).format('MMM DD, YYYY')}</span>
                        </div>
                    ))}
                </div>
            )}
        </>
        
    )
}

export default Comments
