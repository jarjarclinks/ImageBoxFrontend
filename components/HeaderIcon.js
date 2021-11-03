import React from 'react'

function HeaderIcon({Icon,active}) {
  return (
    <div className = "flex items-center px-2 md:px-5 md:h-10
    md:hover:bg-gray-100 dark:md:hover:bg-gray-600 rounded-lg active:border-b-2 focus:border-b-2 focus:border-blue-500
    active:border-blue-500 group cursor-pointer dark:text-blue-500 transform transition duration-500 hover:scale-110">
      <Icon className = {`h-4 text-gray-500 text-center h-7 md:h-7
      group:hover:text-blue-500 dark:text-blue-500 ${active && 'text-blue-500'} ${active && 'dark:text-yellow-500'} ${!active && 'dark:text-gray-300'}` }/>
    </div>
  )
}

export default HeaderIcon
