import React from "react";
import Post from "./Post/Post";
import useStyles from './style'
import { useSelector } from "react-redux";
const Posts =()=>{
    const posts = useSelector((state)=>state.posts) // here state represent the whole redux store
    console.log(posts)
    const classes = useStyles();
    return(
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        </>
        
    )
}
export default Posts;