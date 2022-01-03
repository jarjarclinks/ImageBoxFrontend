import {React,useEffect,useState} from 'react';
//import { Memes } from "..components/Images";
import Image from 'next/image';
import {ArrowCircleRightIcon,ArrowCircleLeftIcon} from "@heroicons/react/outline";
//import NavIcon from '..components/NavIcon';
import { Memes } from './Memes';
import NavIcon from './NavIcon';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Carousel() {
  const history = useHistory();

  const [currImage,setCurrImage] = useState(0)
  const arrLength = Memes.length;

  const LeftImage = (event)=>{
      // event.preventDefault()
      console.log("Left Image called")
      if(currImage == 0)
      {
        setCurrImage(arrLength-1)
      }else{
      setCurrImage(currImage-1);
      }
  }
  const RightImage = (event)=>{
    // event.preventDefault()
    console.log("Right Image called")
    if(currImage == arrLength-1){
      setCurrImage(0)
    }else{
    setCurrImage(currImage+1);
    }
}

  return (
    <div>
      <Header/>
    <div className = "bg-gray-100 dark:bg-gray-900 items-center justify-center">
      <div className = "flex items-center mx-auto max-w-6xl h-screen w-screen overflow-hidden border">
        
    <div className = "relative z-60 -mr-52" onClick = {LeftImage}>
      <NavIcon Icon = {ArrowCircleLeftIcon}/>
      </div>
        {/* <div className = "bg-red-400 pt-40"></div> */}
        <div className = "group rounded-md bg-black shadow-md w-screen overflow-hidden transform transition duration-500 hover:scale-110 border:5px p-2">
        <img
        className = "z-10 w-full h-full rounded-lg"
        src = {Memes[currImage].picture}
        alt = "sliderimage"
        
        layout = "fixed"
        />
         </div>   
      <div className = "relative z-60 -ml-52" onClick = {RightImage}>
      <NavIcon Icon = {ArrowCircleRightIcon}/>
      </div>  
    

    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Carousel;
