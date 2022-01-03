import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Image from 'next/image';

import { Memes } from '../components/Memes';

import ImageCard from '../components/GridCard';
import ImageCardAdd from '../components/GridCardAdd';
import postService from '../services/posts';
import usePostsHook from '../custom_hooks/usePostsHook'
function Grid() {
  var curDarkMode;
  const [Posts,setPosts] = useState([])
  
  useEffect(()=>{
    postService.getAll()
    .then(initialPosts=>{
      setPosts(initialPosts)
    })
  },[])
  return (
    <div>
      <Header/>
      <div className = "bg-gray-100 dark:bg-gray-800 h-auto w-screen">
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 overflow-visible py-10">
          
          {
            Posts.map((meme,i)=>{
              return(
              <ImageCard picture = {meme.picture} caption = {meme.caption} author = {meme.author} key={i}/>
            )})
          }
          <ImageCardAdd/>          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Grid

