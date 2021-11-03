import React from 'react'

function NavIcon({Icon}) {
  return (
    <div className="cursor-pointer z-12 -px-2 md:px-1 transform transition duration-500 hover:scale-120">
      <Icon className = "z-60 h-10 cursor-pointer text-blue-400 hover:text-green-400"/>
    </div>
  )
}

export default NavIcon
