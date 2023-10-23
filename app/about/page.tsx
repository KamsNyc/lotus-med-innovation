
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import { ScrollArea } from "@/components/ui/scroll-area"


import React from 'react'
import Image from 'next/image';
import LogoAbout from '../components/LogoAbout';

const about = () => {
 
  return (
    <section className='h-full w-full  '>
    {/* NAVBAR */}
    <Navbar />


    <LogoAbout />
    <ScrollArea id="container" className='w-full h-full pt-72 md:pt-76 z-[2] px-5 md:px-32 lg:px-72 xl:px-[28rem]    '>
      {/* CONTENT 1 */}
      <section className=' max-h-[300px] pb-7 '>
      <h3 className='text-3xl font-[100] text-gray-400 py-4'>ABOUT US</h3>
      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Vector Global is a single Family Office, centred primarily on two main pillars; a regional focus within West Africa; and a global interest in Innovation, Lifestyle and Wellbeing.</p>

      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Entrepreneurial and progressive, Vector Global values long term relationships and seeks opportunities that have impact. The Vector Global team draws on knowledge across a variety of sectors and geographies including extensive Banking and Venture Capital experience.</p>
      </section>

       {/* CONTENT 2 */}
       <section className='max-h-[300px] pb-7'>
      <h3 className='text-3xl font-[100] text-gray-400 py-4'>WEST AFRICA FOCUS</h3>
      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Vector Global recognises great opportunity in the deep and longstanding roots both of the founding family, the team, and it’s associates within West Africa. Vector Global focuses on a broad range of sectors and interest in the region, and also select prospects targeting the African Diaspora.</p>

      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Vector Global also has a number of noteworthy philanthropic interests in Africa, aimed at investing in and empowering the younger generation(s), with an important focus on the United Nations Millennium and Sustainable Development Goals.</p>
      </section>

       {/* CONTENT 3 */}
       <section className='max-h-[300px] pb-7'>
      <h3 className='text-3xl font-[100] text-gray-400 py-4'>GLOBAL INTEREST IN INNOVATION, LIFESTYLE AND WELLBEING</h3>
      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Vector Global has considerable interest in a number of sectors, including Innovation, Lifestyle and Wellbeing  - areas within which the family has held dear for a number of years. Both the experience and connections of the various team members reflects this fittingly.</p>

      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Vector Global capitalises and leverages on management and operating experience, alongside an international reach to build on and accelerate growth within these select markets. 

</p>
      </section>

      
      

    </ScrollArea>
      
    
    {/* BG */}
    <div className="w-full h-screen">

        {/* BACKGROUND GIF */}
        <Image
        className=" opacity-60 z-[1]"
        src="/la.jpg"
        fill={true}
        alt="replay intro video"
      />
    </div>


    {/* Logo */}
    
  </section>
  )
}

export default about
