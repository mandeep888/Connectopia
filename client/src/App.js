import react from 'react'
import {Container , AppBar , Grow ,Grid ,Typography} from '@material-ui/core'
import memories from "./images/memories.png"
import Form from "./components/Form/Form"
import Posts from "./components/Posts/Posts"
import useStyles from './styles'
const App = ()=>{
    const classes = useStyles();
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
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;