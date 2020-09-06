import React, { useState, useEffect } from 'react';
import { useParams,} from 'react-router-dom';
import Comments from '../Comments/Comments';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const PostDetail = (props) => {
    const {postId} = useParams();
    const [detailPost, setDetailPost] = useState({})
    const [comments,setComments] = useState([])

   // get postDetail data
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetailPost(data))
    },[postId])

   //get comments data
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[postId])
    
    const {id,body,title} = detailPost;
    return (
     <React.Fragment>
        <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '68vh',marginTop:'20px',padding:'20px' }}>
        <h1>Detail Information About This Post</h1>
            <h3>Post No : {id}</h3>
            <h4>Post Title : {title}</h4>
            <p>Post : {body}</p>
            
        </Typography>
      </Container>
      <br/><br/>
      <h1 style={{textAlign:'center'}}>The comments are here:-</h1>
      {
        comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
      }
    </React.Fragment>
    
    );
};

export default PostDetail;