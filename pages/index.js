import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import LandingPage from '../components/LandingPage'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { Memes } from '../components/Images'
import postService from '../services/posts'
import {usePostsHook} from '../custom_hooks/usePostsHook'

export default function Home() {
    const [ImagesArray,setImagesArray] = useState(null)
    const [Posts,setPosts] = usePostsHook("hello")

    // useEffect(()=>{
    //   postService
    //     .getAll()
    //     .then(initialPosts=>{
    //       setPosts(initialPosts)
    //     })
    // },[])
    //localStorage.setItem("darkMode","true")
    console.log("set Localstorage ")
    
    //console.log(localStorage.getItem("darkMode"))
  
  

  return (
    <div className = "container">
      
      <Head>
        <title>Memebox</title>
      </Head>
        
      <LandingPage/>
      
    

      {/* <Body/> */}
        
        
      
    </div>
  )
}
