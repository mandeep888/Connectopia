import React, { useEffect ,useState } from 'react'
import {Container , AppBar , Grow ,Grid ,Typography} from '@material-ui/core'
import memories from "./images/memories.png"
import Form from "./components/Form/Form"
import Posts from "./components/Posts/Posts"
import {getPosts} from './actions/posts'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
const App = ()=>{
    const [currentId,setCurrentId] =useState(null);

    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        dispatch(getPosts())
    },[currentId,dispatch])


    return(
        <div>
            <Container maxWidth='lg'>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                    <Typography className={classes.heading} variant='h2' align='center'> Memories
                        <img src={memories} className={classes.image} alt="memories" height='60'/>
                    </Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form setCurrentId={setCurrentId} currentId={currentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;