import React, {useEffect, useState, useRef} from 'react'
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem( 'name' );
        emailEl.current.value = window.localStorage.getItem( 'email' );
    }, [])
     
    const handleCommentSubmission = () => {
        setError(false);
        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if( !comment || !name || !email ) {
            setError(true);
            return;
        }

        const commentObj = { name, email, comment, slug };
        if(storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000)
            }) 

    }

    return (
        <div className="bg-white p-4 m-4">
            <h3>CommentsForm</h3>
            <div><textarea
                ref={commentEl}
                row="10"
                className="bg-gray-400 text-white  mb-2"
            ></textarea></div>
            <div><input type="text" ref={nameEl} placeholder="name" name="name" className="bg-gray-400 text-white mb-2" /></div>
            <div><input type="email" ref={emailEl} placeholder="email" name="email" className="bg-gray-400 text-white  mb-2" /></div>
            <div className="store-data">
                <input type="checkbox" ref={storeDataEl} id="storeData" name="storeData" value="true" />
                <label htmlFor="storeData">save my email and name for next time i comment</label>
            </div>
            {error && <p>all fields are required</p>}
            <div><button type="button" onClick={handleCommentSubmission} className="transition duration-500 ease-in hover:bg-indigo-900 inline-block bg-pink-600 text-lg text-white px-8 py-3 cursor-pointer">Post Comment</button>
            {showSuccessMessage && <span className="text-pink-600">Comment submitted for review</span>}
            </div>
        </div>
    )
}

export default CommentsForm
