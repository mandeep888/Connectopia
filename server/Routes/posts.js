// import  express  from "express";
// import { getPost,getPostsBySearch,getPosts , createPost , updatePost , deletePost , likePost} from "../controllers/posts.js";
// import auth from '../middleware/auth.js'
// const router = express.Router();

// router.get('/', getPosts);
// router.get('/:id', getPost);
// router.get('/search', getPostsBySearch);
// router.post('/',auth, createPost);
// router.patch('/:id',auth, updatePost);
// router.delete('/:id',auth, deletePost);
// router.patch('/:id/likePost',auth, likePost);

// export default router;

import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost ,commentPost} from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', commentPost);

export default router;