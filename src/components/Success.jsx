import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { card, card1, lampcharge } from '../assets/images';

export default function Success() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
    <div className="relative mt-[10rem] flex flex-col justify-center items-center overflow-hidden">
      {/* Invisible div to act as a pocket */}
      <div className="absolute inset-0"></div>
          <h2 
          data-aos="slide-up" // AOS animation
          data-aos-duration="1000"
          data-aos-delay='500' 
          className="text-[50px] md:text-[55px] font-bold leading-[80px] tracking-[-1.44px] text-center ">
            Unleash your success now
          </h2>
        </div>

      <div className="relative w-full h-full overflow-hidden flex justify-center">
        <div className="absolute inset-0"></div>
          <p
          data-aos="slide-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="flex items-center justify-center gap-2 font-medium text-[20px] leading-[20px] tracking-[-1.4px] font-inter text-[#2E95F4]">
            Compare Packages
          <span>
            <MdKeyboardArrowRight className="mt-[0.3rem]" />
          </span>
          </p>
      </div>
      <div className="relative mt-[3.125rem] overflow-hidden">
        <div className="absolute inset-0"></div>
        <div
          data-aos="slide-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className=" flex md:flex-col lg:flex-row justify-center items-center gap-3 md:ml-10 lg:ml-0">
          <div className='w-[692px] h-[362px] bg-white rounded-[15px]'>
            <div className='w-[345px] h-[42px] bg-[#f0f6fb] mt-[37.5px]  ml-[32px] rounded-[5px] border-[1px] border-[#BBD4FF]'>
              <div className='flex  items-center gap-[10px]'>
              <img src={lampcharge} alt="" className='pl-[15px] pt-[9px]'/>
              <h3 className='pt-2 font-inter font-medium text-[#007EF1] text-[16px] leading-[19.36px]'>Essential kickstart for entrepreneurs</h3>
              </div>
            </div>
            <div className='ml-[32px] mt-[32px]'>
                <h3 className='font-inter font-semibold text-[24px] leading-[29.05px]'>Founders Starter Package</h3>
                <p className='mt-[24px] text-[18px] leading-[21.78px] font-inter'>Get your business off the ground with essential compliance and financial management services.</p>
            </div>
           <div className='flex items-center justify-between'>
           <div className='flex mt-[57px] ml-[32px] gap-[12px]'>
                <button className='w-[136px] h-[46px] bg-[#d0e8ff] rounded-[10px]'>
                    Know more
                </button>
                <button className='w-[136px] h-[46px] bg-[#1a1b1c] rounded-[10px] text-white'>
                    Buy Now
                </button>
            </div>
           <div className='mt-[55px] mr-[47px]'>
           <p className='font-inter font-semibold text-[24px] leading-[29.05px]'>$2,885/-</p>
           <p className='font-inter text-[14px] leading-[16.94px] ml-[32.5px]'>Annually</p>
           </div>
           </div>
          </div>
          <div className='md:mt-[93px] lg:mt-0'>
              <img src={card1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
