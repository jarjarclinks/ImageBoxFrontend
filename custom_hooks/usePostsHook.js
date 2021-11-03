import React, {useState,useEffect} from 'react'
import postService from '../services/posts'
const baseUrl = 'http://localhost:3001/api/posts'
import axios from 'axios'
const usePostsHook = ((url = '', options = null) =>{
  const [Posts,setPosts] = useState([])
  // useEffect(()=>{
  //   postService.getAll()
  //   .then(initialPosts=>{
  //     setPosts(initialPosts)
  //   })
  // },[initialstate])

  useEffect(()=>{
    axios.get(url)
      .then(res=>res.data)
    .then(initialPosts=>{
      setPosts(Posts=>initialPosts)
    })
  },[url, options])
  console.log(Posts)
  return(Posts)
})

export default usePostsHook
