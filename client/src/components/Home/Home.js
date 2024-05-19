import React, { useEffect ,useState } from 'react'
import {Container  , Grow ,Grid } from '@material-ui/core'
import Form from "../Form/Form"
import Posts from "../Posts/Posts"
import {getPosts} from '../../actions/posts'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
const Home = () => {
    const [currentId,setCurrentId] =useState(null);

    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        dispatch(getPosts())
    },[currentId,dispatch])

  return (
    <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" className={classes.mainContainer} alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form setCurrentId={setCurrentId} currentId={currentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
  )
}

export default Home
