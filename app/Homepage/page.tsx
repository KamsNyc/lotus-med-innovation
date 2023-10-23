import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

import React from 'react'
import Image from 'next/image';

const page = () => {
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:400,700"
/>



  return (
    <section className='h-screen w-full'>
    {/* NAVBAR */}
    <Navbar />

    {/* <Image
      className=" opacity-30"
      src="/Gif.gif"
      fill={true}
      alt="replay intro video"
    /> */}


    {/* BG Slideshow */}
    <div className="w=full h-full">

    <video autoPlay loop muted={true} className="w-full h-screen object-cover opacity-[15%]">
  <source src="/bgVideo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </div>


   
  </section>
  )
}

export default page
