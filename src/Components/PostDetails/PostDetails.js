import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Comment from '../Comment/Comment';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const PostDetails = () => {
    const classes = useStyles();
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    }, []);
    const { title, body, userId, id } = post;

    const [comments, setComments] = useState([]);
    useEffect(() => {
        const commenturl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(commenturl)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, []);

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h4>Details :</h4>
                            <h4> Id : {id}</h4>
                            <h4>User Id : {userId}</h4>
                            <h3>Title: {title}</h3>
                            <p> {body}</p>
                           
                           
                        </Paper>
                    </Grid>
                </Grid>

            </div>
            <h2>Comments :</h2>
            <div>
                                {
                                    comments.map(comment => <Comment comment={comment} key={comment.id}></Comment>)
                                }
                            </div>

        </div>
    );
};

export default PostDetails;