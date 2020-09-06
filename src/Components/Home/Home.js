import React, { useState, useEffect } from 'react';
import Postinfo from '../Postsinfo/Postinfo';
const Home = () => {
    const[posts,setPosts] = useState([]);
    useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data=> setPosts(data))
    }, [])
    return (
        <div>
            {
               posts.map(post => <Postinfo post={post} key={post.id}></Postinfo>)
            }
        </div>
    );
};

export default Home;