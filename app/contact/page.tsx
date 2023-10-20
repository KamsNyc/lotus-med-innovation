'use client'
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import React, { useEffect } from 'react';
import Image from 'next/image';
import LogoAbout from '../components/LogoAbout';

const about = () => {
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
        className="absolute top-0 left-0 w-full h-full opacity-5 z-0"
        src="/mumbai.jpg"
        fill={true}
        alt="replay intro video"
      />
      {/* NAVBAR */}
      <Navbar />

      <div className="">
        <LogoAbout />
      </div>
      <div className="px-5 md:px-32 lg:px-64 tracking-wide">
        <section className='w-full pt-72 md:pt-76 z-[2] md:flex items-center'>
          <section className='block lg:flex items-center justify-center w-full border-t border-gray-800 pt-4'>
            {/* LEFT SECTION */}
            <div className="w-full flex-col items-center">
              {/* ITEM */}
              <div className="pb-6">
                <h2 className='text-gray-400'>Contact Us</h2>
                <p className='text-[12px] py-2'>Email: charlotte@vectorglo.com</p>
              </div>
              {/* ITEM */}
              <div className="pb-6">
                <h2 className='text-gray-400'>Our Offices</h2>
                <p className='text-[12px] py-2'>
                </p>
              </div>
              {/* ITEM */}
              <div className="pb-6">
                <h2 className='uppercase underline text-[12px] pb-2'>London</h2>
                <p className='text-[12px] py-1'>Lynton House</p>
                <p className='text-[12px] py-1'>7-12 Tavistock Square</p>
                <p className='text-[12px] py-1'>London</p>
                <p className='text-[12px] py-1'>United Kingdom</p>
              </div>
              {/* ITEM */}
              <div className="pb-4">
                <h2 className='uppercase underline text-[12px] pb-2'>ACCRA</h2>
                <p className='text-[12px] py-1'>Total House</p>
                <p className='text-[12px] py-1'>25 Liberia Road</p>
                <p className='text-[12px] py-1'>Accra</p>
                <p className='text-[12px] py-1'>Ghana</p>
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

export default about;
