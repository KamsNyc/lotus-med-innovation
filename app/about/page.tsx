
import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'

const about = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GIF */}
      <Image
        className=" opacity-20"
        src="/la.jpg"
        fill={true}
        alt="replay intro video"
      />
    </div>
  )
}

export default about

