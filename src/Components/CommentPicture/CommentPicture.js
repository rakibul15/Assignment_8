import React from 'react';

const CommentPicture = (props) => {
    const {picture} = props.image;
    const imgStyle = {
        borderRadius: '100%',
        margin: '15px' ,
        height: '80px' ,
    }
    return (
        <div>
            <img src={picture.large} alt="" style={imgStyle}/>
        </div>
    );
};

export default CommentPicture;