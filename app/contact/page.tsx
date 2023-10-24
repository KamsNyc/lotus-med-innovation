'use client'
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const About = () => {
  useEffect(() => {
    // Load the ElfSight widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', 'true');
    script.defer = true;

    // Append the script to the document body
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className='relative h-screen w-full overflow-y-auto'>
      {/* Background GIF */}
      <Image
        className="absolute top-0 left-0 w-full h-full opacity-60 z-0"
        src="/mumbai.jpg"
        fill={true}
        alt="replay intro video"
      />
      {/* NAVBAR */}
      <Navbar />

  
      <div className="px-4 md:px-32 lg:px-64 tracking-wide pt-18 lg:pt-40">
        <section className='w-full pt-24 md:pt-76 z-[2] md:flex items-center'>
          <section className='block lg:flex items-center justify-center w-full border-gray-800 pt-4'>
            {/* LEFT SECTION */}
            <div className="w-full flex-col items-center">
              {/* ITEM */}
              <div className="pb-6">
                <h2 className='text-gray-400'>Contact Us</h2>
                <p className='text-[12px] py-2'>Email: test@test.com</p>
              </div>
              {/* ITEM */}
              <div className="pb-6">
                <h2 className='text-gray-400'>Our Offices</h2>
                <p className='text-[12px] py-2'>
                </p>
              </div>
              {/* ITEM */}
              <div className="pb-6">
                <h2 className='uppercase underline text-[12px] pb-2'>Address</h2>
                <p className='text-[12px] py-1'>Address</p>
                <p className='text-[12px] py-1'>Address</p>
    
              </div>
              {/* ITEM */}
              <div className="pb-4">
                <h2 className='uppercase underline text-[12px] pb-2'>Type 2</h2>
                <p className='text-[12px] py-1'>Type 2</p>
                <p className='text-[12px] py-1'>Type 2</p>
        
              </div>
            </div>
            {/* RIGHT SECTION */}
            <div className="w-full flex items-center justify-center">
              <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
              <div className="elfsight-app-5ea2e3a0-1943-4f8d-a113-6b2876a71a66"></div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default About;
