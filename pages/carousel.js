import {React,useEffect,useState} from 'react';

import {ChevronRightIcon,ChevronLeftIcon} from "@heroicons/react/outline";
import { Memes } from '../components/Memes';
import NavIcon from '../components/NavIcon';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselCard from '../components/CarouselCard';
import postService from '../services/posts';
import { AiFillRest } from 'react-icons/ai';
import usePostsHook from '../custom_hooks/usePostsHook';
function Carousel() {
  const history = useHistory();
  const [Posts,setPosts] = useState([
    {
      picture:
      "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?",
      caption: "",
      author: ""
    }
  ])

  //const { Posts = [] } = usePostsHook('http://localhost:3001/api/posts')
  const [currImage,setCurrImage] = useState(0)
  
  useEffect(()=>{
    postService.getAll()
    .then(initialPosts=>{
      console.log("in useEffect")
      console.log(initialPosts)
      setPosts(initialPosts)
    })
  },[])

  
  const arrLength = Posts.length;
  console.log("posts size=")
  console.log(arrLength)
  const LeftImage = (event)=>{
       event.preventDefault()
      console.log("Left Image called")
      if(currImage == 0)
      {
        setCurrImage(arrLength-1)
      }else{
      setCurrImage(currImage-1);
      }
  }
  const RightImage = (event)=>{
     event.preventDefault()
    console.log("Right Image called")
    if(currImage == arrLength-1){
      setCurrImage(0)
    }else{
    setCurrImage(currImage+1);
    }
} 
console.log("in carousel")
  console.log(Posts)
  return (
    <div h-screen>
      <Header/>
      <div className = "flex bg-gray-100 dark:bg-gray-800 h-screen w-screen justify-center items-center">
      <div className = "flex items-center relative pb-40 pt-20 transform transition duration-500">
       
    <div className = "z-50" onClick = {LeftImage}>
      <NavIcon Icon = {ChevronLeftIcon}/>
      </div>
          <CarouselCard picture = {Posts[currImage].picture} caption = {Posts[currImage].caption} author = {Posts[currImage].author}/>
        
      <div className = "z-50" onClick = {RightImage}>
      <NavIcon Icon = {ChevronRightIcon}/>
      </div>  
  
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Carousel;
