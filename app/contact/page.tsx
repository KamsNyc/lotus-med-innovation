import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GIF */}
      <Image
        className=" opacity-20"
        src="/mumbai.jpg"
        fill={true}
        alt="replay intro video"
      />
    </div>
  )
}

export default page
