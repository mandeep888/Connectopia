   import axios from 'axios'

   const url ="http://localhost:3000/posts";
   export const fetchAllPosts = ()=> axios.get(url);