import React from 'react'

function Logo({width = '50px'}) {
  return (
    <img
        className="w-12 sm:w-14 md:w-16 lg:w-20 mx-2 cursor-pointer transition-transform duration-200 hover:scale-105"
        src="https://w7.pngwing.com/pngs/748/81/png-transparent-computer-icons-blogger-logo-blogger-logo-miscellaneous-rectangle-wood-thumbnail.png"
       />
  )
}

export default Logo