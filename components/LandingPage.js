import React from 'react'
import Image from "next/image";
import {withRouter} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';


function LandingPage(props) {
  const router = useRouter();

  const HandleClick = ()=>{
    router.push('/Grid');
  }
  return (
    <div className="flex relative w-screen h-screen bg-gray-200">
      <div className = "z-1">
      <Image
      alt = "background"
      src = "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-1.2.1"
      layout = "fill"
      objectFit='cover'
      />
      </div>
      <div className = "absolute bottom-20 right-60 rounded-2xl overflow-hidden shadow-lg backdrop-filter backdrop-blur-md">
     <div className = "z-2 container mx-0 my-50 h-100 shadow-md px-10 py-5 cursor-pointer background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)1">
      <h1 className="font-semibold text-5xl md:text-8xl height-10 width-10 text-blue-900">
      Image<span className = "text-yellow-900">Box</span></h1>
      <div className = "animate-bounce">
      <button className = "mt-10 px-8 py-4 text-2xl font-semibold text-green-200 bg-green-500 rounded-3xl"
      onClick ={HandleClick} >
        Open Up!
      </button>
      </div>
      </div>
     
        </div>
    </div>
  )
}

export default LandingPage
