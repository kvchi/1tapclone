import React, { useEffect, useRef, useState } from 'react';
import { arrow, arrow2, logo, roller1 } from '../assets/images';

const Business = () => {
  const arrowRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has happened

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.style.height = '18rem'; // Animate height to 18rem
            setHasAnimated(true); // Set flag to true after the first animation
          }
        });
      },
      {
        threshold: 0.5, // Adjust this to control when the animation starts
      }
    );

    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (arrowRef.current) {
        observer.unobserve(arrowRef.current);
      }
    };
  }, [hasAnimated]); // Depend on hasAnimated to prevent re-animation

  return (
    <div>
      <aside className="flex md:flex-col lg:flex-row container justify-center md:mx-[70px] lg:mx-auto gap-[37px] mb-5">
      <div className="bg-white h-[637px] lg:w-[656px] md:w-[720px] rounded-[20px] relative">
        <img
          src={logo}
          alt=""
          className="mt-[61px] ml-[59px] w-[83px] h-[18.4px]"
        />
        <h2 className="text-[48px] font-semibold w-[594px] h-[116px] ml-[2.5625rem] mt-[12px] leading-[58.09px]">
          Your Business,Our Expertise
        </h2>
        <div className="max-w-xl">
          <p className="font-medium font-inter ml-[2.5625rem] mt-[17px] lg:text-[20px] md:text-[21px] leading-[24.2px]">
            Get started now—let 1Tap handle the complexities of business setup
            while you focus on turning your vision into reality.
          </p>
        </div>
        <div className="absolute bottom-0">
          <img
            ref={arrowRef}
            src={arrow2}
            alt=""
            className="  lg:pr-24 md:pr-[160px]" 
            style={{ height: '0', transition: 'height 1s ease-out' }} // Initial height set to 0
          />
        </div>
      </div>
      <div className="bg-[#BBDEFF] h-[637px] lg:w-[656px] md:w-[720px] rounded-2xl overflow-hidden">
        <img
          src={logo}
          alt=""
          className="mt-[61px] ml-[59px] w-[83px] h-[18.4px]"
        />
        <h2 className="text-[48px] font-semibold w-[594px] h-[116px] ml-[2.5625rem] mt-[12px] leading-[58.09px]">
          Secure Your Business Financially
        </h2>
        <p className="relative z-10 font-medium font-inter  ml-[2.5625rem] mt-[17px] text-[20px] leading-[24.2px] max-w-lg">
          Kickstart your venture—1Tap ensures your financial foundations are
          solid with comprehensive services like VAT registration and
          bookkeeping.
        </p>
        <div className="flex justify-center mt-[-3rem]">
          <img src={roller1} alt="" className="h-[507px] w-[507px]" />
        </div>
      </div>
    </aside>
    <div className="flex flex-col items-center md:ml-10">
      <div className="group">
            <button className="relative w-[192.7px] h-[53px] bg-primary rounded-[15px] text-white  font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-500 mt-[2.8rem]">
              <span className="relative z-10">Free consultation</span>
              <img
                src={arrow}
                alt=""
                className="relative z-10 filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
              />
              <span className="absolute inset-0 bg-black transition-transform duration-700 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </button>
          </div>
        <p className="mt-[1.12rem] text-[#2e95f4] text-[20px] leading-[20px] tracking-[-1.44px] font-medium font-inter">
          Get Started
        </p>
      </div>
    </div>
  );
};

export default Business;
