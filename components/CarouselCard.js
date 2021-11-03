import Image from 'next/image'
import React from 'react'

function CarouselCard({picture,caption,author}) {
  return (
    <div className = "flex group max-h-screen w-100 bg-gray-200 align-items-center mx-auto my-10 rounded-lg shadow-lg
    transform transition duration-500 hover:scale-110 border-10px mt-10 md:mx-5">
      
        {/* <Image
          src = {picture}
          height = {400}
          width = {600}
         layout = "responsive"
        /> */}
        <img
        className = "z-10 rounded-lg"
        src = {picture}
        alt = "sliderimage"
        height = {600}
        width = {900}
        layout = "fixed"
        />
      <div className = "absolute bottom-1 px-2 z-20">
        
      <h4 className = "font-semibold text-white text-lg pt-1 text-opacity-100 md:text-opacity-0 group-hover:text-opacity-100">{author}</h4> 
      <h4 className = "font-medium text-sm text-gray-300 text-sm py-1 text-opacity-100 md:text-opacity-0 group-hover:text-opacity-100">{caption}</h4>
       </div>
    </div>
  )
}

export default CarouselCard
