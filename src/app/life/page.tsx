"use client"

import React from 'react'
import Link from 'next/link'
const page = () => {
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <div className='bg-black'>
  <Link href="/death">
  <button 
    onClick={handleClick} 
    className='bg-black opacity-0 hover:opacity-100 transition-opacity duration-300'>
      .
  </button>
  </Link>
  <p></p>
</div>

    )
}

export default page
