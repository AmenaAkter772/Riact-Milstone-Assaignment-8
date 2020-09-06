import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const Home = () => {
    const [post, setPost] = useState([])

    //get post data
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    const classes = useStyles();
    return (
      <>
        <div className={classes.root}>
            <Grid container
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
              >
                  {
                     post.map(post => <Post post={post} key={post.id}></Post>)
                  }
            </Grid>
            
        </div>
        </>
    );
};

export default Home;