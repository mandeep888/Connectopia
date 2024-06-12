import React, { useState ,useEffect } from "react";
import useStyles from './style'
import { TextField, Typography, Button, Paper } from "@material-ui/core"
import FileBase from "react-file-base64"
import { useDispatch , useSelector } from "react-redux"
import { createPost , updatePost } from "../../actions/posts";
import { useNavigate } from "react-router-dom";



const Form = ({currentId,setCurrentId}) => {
    const [postData, setPostData] = useState({title: "",message: "",tags: "",selectedFile: ""});
    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    useEffect(()=>{
        if (post) {
            setPostData(post)
        }
    },[post])

    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,{...postData,name:user?.result?.name}))
        }
        else{

            dispatch(createPost({...postData,name:user?.result?.name},navigate));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({title: "",message: "",tags: "",selectedFile: ""})
    }
    if (!user?.result?.name) {
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Please Sign In to create your own memories and like other's memories.
            </Typography>
          </Paper>
        );
      }
    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId?"Editing":"Creating"} a Memory
                </Typography>
                <TextField name="title" label="Title" variant="outlined" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></TextField>
                <TextField name="message" label="Message" variant="outlined" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></TextField>
                <TextField name="tags" label="Tags" variant="outlined" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}></TextField>

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button style={{ marginTop: 10 }} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button style={{ marginTop: 10 }} variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
export default Form;