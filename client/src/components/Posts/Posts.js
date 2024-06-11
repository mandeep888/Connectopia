import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Post from './Post/Post';
import useStyles from './style';

const Posts = ({setCurrentId}) => {
  const {posts,isLoading} = useSelector((state) => {
    // console.log("this is state",state)
    return state.posts});
  const classes = useStyles();
  if (!posts.length && !isLoading) {
    return 'No Posts';
  }
  // console.log(posts)
  return (
    isLoading ? <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    height="80vh"
  >
    <CircularProgress size={75} />
  </Box> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;