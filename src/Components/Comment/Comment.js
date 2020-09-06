import React, { useState, useEffect } from 'react';
import '../Comment/Comment.css'
import CommentPicture from '../CommentPicture/CommentPicture';

const Comment = (props) => {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const url ='https://randomuser.me/api/' ;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPictures(data.results)
            })
    }, []);

    const{name,body,id,email}=props.comment;

   
    return (
        <div className="comment">
             <div className="user">
                 {
                        pictures.map(image => <CommentPicture image={image} key={image.id}></CommentPicture>)
                    
                 }
                <div>
                <h4>Name: {name}</h4>
                <h4>Email : {email}</h4>
                </div>
             </div>
             
            <p>{body}</p>
        </div>
    );
};

export default Comment;