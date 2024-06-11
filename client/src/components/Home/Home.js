import React, {  useState } from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core'
import Form from "../Form/Form"
import { useNavigate, useLocation } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'
import Posts from "../Posts/Posts"
import { getPostsBySearch } from '../../actions/posts'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import Pagination from '../Pagination'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const dispatch = useDispatch();
    const classes = useStyles();
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            //search
            searchPost();
        }
    }
    const handleAdd = (tag) => setTags([...tags, tag])
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
    const searchPost = () => {
        if (search.trim() || tags) {
            //disptach fetch searchPost
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        }
        else {
            navigate('/')
        }
    }
    return (
        <Grow in>
            <Container maxWidth='xl'>
                <Grid container className={classes.gridContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                            <TextField name='search' variant='outlined' label="Search Memories" fullWidth value={search} onChange={(e) => { setSearch(e.target.value) }} onKeyDown={handleKeyPress} />
                            <ChipInput style={{ margin: "10px 0px" }} value={tags} onAdd={handleAdd} onDelete={handleDelete} label="Seaech Tags" variant='outlined' />
                            <Button onClick={searchPost} className={classes.searchButton} color='primary' variant='contained'>Search</Button>
                        </AppBar>
                        <Form setCurrentId={setCurrentId} currentId={currentId} />
                        {(!searchQuery && !tags.length) && (
                            <Paper className={classes.pagination} elevation={6}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
