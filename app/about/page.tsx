
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


    {/* <LogoAbout /> */}
    <ScrollArea id="container" className='w-full h-full pt-32 md:py-76 z-[2] px-5 md:px-32 lg:px-72 xl:px-[28rem]    '>
      {/* CONTENT 1 */}
      <section className=' max-h-[300px] pb-7 '>
      <h3 className='text-3xl font-[100] text-gray-400 py-4'>ABOUT XYZ CORPORATION</h3>
      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos vero voluptates quo, doloribus nobis iusto quisquam pariatur officia eos reiciendis? Ea dolore, distinctio quis perspiciatis reiciendis velit repellendus ullam cupiditate!</p>

      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, aliquam delectus iure soluta ipsum quis impedit minima ratione in consequatur laudantium nostrum corporis! Officiis alias totam eaque hic tempora obcaecati?</p>
      </section>

       {/* CONTENT 2 */}
       <section className='max-h-[300px] pb-7'>
      <h3 className='text-3xl font-[100] text-gray-400 py-4'>ABOUT XYZ CORPORATION</h3>
      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident, neque odio odit minus sequi quibusdam quaerat cupiditate vel laborum eum sit ducimus eos! Vitae quo in ducimus ea et.</p>

      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nihil dolor aut asperiores voluptate commodi harum libero labore amet explicabo iusto est exercitationem facilis, animi possimus architecto consectetur eos inventore.</p>
      </section>

       {/* CONTENT 3 */}
       <section className='max-h-[300px] pb-7'>
      <h3 className='text-3xl font-[100] text-gray-400 py-4'>ABOUT XYZ CORPORATION</h3>
      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni dicta quas possimus nobis velit minima deserunt vel voluptatem ipsam excepturi obcaecati similique debitis numquam incidunt eum, omnis voluptate eius!</p>

      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam qui eius numquam repellendus expedita aliquam libero vitae sint vero voluptatum, assumenda inventore ipsum deserunt! Repellendus veritatis sed officia ex.</p>
      </section>

      {/* CONTENT 3 */}
      <section className='max-h-[300px] pb-7'>
      <h3 className='text-3xl font-[100] text-gray-400 py-4'>ABOUT XYZ CORPORATION</h3>
      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni dicta quas possimus nobis velit minima deserunt vel voluptatem ipsam excepturi obcaecati similique debitis numquam incidunt eum, omnis voluptate eius!</p>

      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam qui eius numquam repellendus expedita aliquam libero vitae sint vero voluptatum, assumenda inventore ipsum deserunt! Repellendus veritatis sed officia ex.</p>
      </section>

      {/* CONTENT 3 */}
      <section className='max-h-[300px] pb-7'>
      <h3 className='text-3xl font-[100] text-gray-400 py-4'>ABOUT XYZ CORPORATION</h3>
      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni dicta quas possimus nobis velit minima deserunt vel voluptatem ipsam excepturi obcaecati similique debitis numquam incidunt eum, omnis voluptate eius!</p>

      <p className='text-[14px] font-[300] text-gray-300 pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus totam qui eius numquam repellendus expedita aliquam libero vitae sint vero voluptatum, assumenda inventore ipsum deserunt! Repellendus veritatis sed officia ex.</p>
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
    
  </section>
  )
}

export default about
