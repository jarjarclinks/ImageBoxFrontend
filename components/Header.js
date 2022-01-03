import React, { useEffect, useState } from 'react'
import {
  ViewGridAddIcon,
  PhotographIcon,
  MoonIcon
}from "@heroicons/react/solid"
import { useTheme } from 'next-themes'
import {
  SunIcon
}from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon'
import { useRouter } from 'next/router';
import Link from 'next/link'

function Header() {
  
  const router = useRouter();
  const { asPath, pathname } = useRouter();

  const [curDarkMode,setCurDarkMode] = useState(process.env.darkMode)
  const {theme,setTheme} = useTheme('light')

  
  
  
  
  const HandleMode = ()=>{
    //if (typeof window !== "undefined") {
      setTheme(theme === 'dark'?'light':'dark')
      //localStorage.setItem("darkMode",!(curDarkMode))
      setCurDarkMode(!(curDarkMode))
      console.log("current dark mode toggled")
  //}
  }
  return (
    <div className = "sticky top-0 z-50 bg-white dark:bg-gray-700 flex items-center p-2 lg:px-5 shadow-lg">
      <Link href = "/">
        <a>
      <h2 className = "flex text-xl md:text-3xl text-blue-900 dark:text-blue-500 font-bold md:text-2xl transform transition duration-500 hover:scale-110">
        Image<span className = "text-yellow-900 dark:text-yellow-500">Box</span>
      </h2>
      </a>
      </Link>
      
      {asPath == "/Carousel"
      &&
      <div className = "flex justify-center flex-grow">
        
        <Link href = "/Carousel">
          <a>
        <HeaderIcon active Icon = {PhotographIcon}/>
        </a>
        </Link>
        
        <Link href = "/Grid">
          <a>
        <HeaderIcon Icon = {ViewGridAddIcon}/>
        </a>
        </Link>
      </div>
      }
      
      { 
      asPath == "/Grid" &&
          <div className = "flex justify-center flex-grow">
          
          <Link href = "/Carousel">
            <a>
          <HeaderIcon Icon = {PhotographIcon}/>
          </a>
          </Link>

          <Link href = "/Grid">
            <a>
          <HeaderIcon active Icon = {ViewGridAddIcon}/>
          </a>
          </Link>
          
        </div>
      }
      {
        theme=='dark' &&
      <div onClick = {HandleMode} className = "justify-end">
        <HeaderIcon Icon = {SunIcon}/>
      </div>
      }
      {
        theme=='light' &&
        <div onClick = {HandleMode} className = "justify-end">
        <HeaderIcon Icon = {MoonIcon} />
      </div>
      }
    </div>
  )
}

export default Header
