import React from 'react'
import Image from 'next/image'

function ImageCard({picture,caption,author}) {
  return (
    <div className = "relative group h-auto flex-grow bg-gray-200 items-center mx-auto my-10 rounded-lg shadow-lg
    transform transition duration-500 hover:scale-110 border-10px">
      
        <img
          className = "h-60 w-80 rounded-t-lg shadow-md"
          src = {picture}
          alt = "grid image"
         layout= "fill"
        />
      <div className = "absolute bottom-1 px-2 ">
        
      <h4 className = "font-semibold text-white pt-1 text-opacity-100 lg:text-opacity-0 group-hover:text-opacity-100">{author}</h4> 
      <h4 className = "font-medium text-sm text-gray-300 py-1 text-opacity-100 lg:text-opacity-0 group-hover:text-opacity-100">{caption}</h4>
       </div>
    </div>
  )
}

export default ImageCard
