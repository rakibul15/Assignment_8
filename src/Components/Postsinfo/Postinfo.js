import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        margin: theme.spacing(1),
      },
    flexGrow: 1,
  },
  link:{
    textDecoration:'none',
    color:'white',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));



const Postinfo = (props) => {
    const classes = useStyles();
    const{title, body,id}=props.post;
    return (
        <div>
            <div className={classes.root}>
      <Grid container spacing={3}>  
        <Grid item xs={11}>
          <Paper className={classes.paper}>
                <h4>Title: {title}</h4>
                <p> {body}</p>
            <Link to={`/post/${id}`} className={classes.link}>
                <Button variant="contained" color="primary">
                View Deatils
                </Button></Link> 
          </Paper>
        </Grid>
      </Grid>
    </div>
            
            
        </div>
    );
};

export default Postinfo;