import React, { useRef, useState } from 'react'
import {
  PlusCircleIcon
} from "@heroicons/react/solid"
import { Memes } from './Memes'
function ImageCardAdd() {
  const filePickerRef = useRef(null)
  const [imageToPost,setImageToPost] = useState(null)
  const [newCaption,setNewCaption] = useState(null)
  const [newUser, setNewUser] = useState(null)
  const [adderMenu,setAdderMenu] = useState(false)

  const OpenAdderMenu = (e)=>{
    e.preventDefault()
    setAdderMenu(true)
  }

  const AddNewImage = (e)=>
  {
    setImageToPost(e.target.value)
  }
  const AddNewUser = (e)=>{
    setNewUser(e.target.value)
  }
  const AddNewCaption = (e)=>{
    setNewCaption(e.target.value)
  }

  const FinalAddPost = (e) =>
  {
    const newPost = 
    {
      picture : {imageToPost},
      caption:{newCaption},
      author : {newUser}
    }

    Memes.concat(newPost)
    removeImage()
  }

  const removeImage = ()=>{
    setImageToPost(null)
  }
  return (
    <div onClick = {OpenAdderMenu} className = "inputIcon flex justify-center group h-60 w-80 flex-grow bg-gray-300 items-center mx-auto my-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 border-10px dark:bg-gray-400">
      { 
      
      <div>
      <PlusCircleIcon className = "h-12 text-gray-700 cursor-pointer group-hover:text-white"/>
      <input ref = {filePickerRef} type = "file" hidden/>
      </div>
      }
      
      {
        //{adderMenu!==null} &&
        <div className = "absolute bottom-1 px-2">
          <input placeholder = "The image link" onChange = {AddNewImage} className = "font-medium text-white pt-1 text-opacity-0 group-hover:text-opacity-100"/>
          <input placeholder = "Your name" onChange = {AddNewUser} className = "font-medium text-white pt-1 text-opacity-0 group-hover:text-opacity-100"/>
          <input placeholder = "The caption" onChange = {AddNewCaption} className = "font-light text-sm text-gray-300 py-1 text-opacity-0 group-hover:text-opacity-100"/>
          <button onClick = {FinalAddPost} className = "px-3 h-10 rounded-lg bg-green-500">Post</button>
        </div>
      }
        {/* <AdderIcon Icon = {PlusCircleIcon}/>
        {
          imageToPost!==null &&
            
          {
          <img
          className = "h-60 w-80 rounded-t-lg shadow-md opacity-50"
          src = {imageToPost}
          alt = "grid image"
         layout= "fill"
          />
      <div className = "absolute bottom-1 px-2 ">
        
      <input placeholder = "Your name" className = "font-semibold text-white pt-1 text-opacity-0 group-hover:text-opacity-100"/>
      <input placeholder = "The caption" className = "font-medium text-sm text-gray-300 py-1 text-opacity-0 group-hover:text-opacity-100"/>
      <button onClick = {FinalAddPost} className = "justify-end h-3 rounded-lg">Post</button> */}
       </div>
       
          
        
    
    
  )
}

export default ImageCardAdd
