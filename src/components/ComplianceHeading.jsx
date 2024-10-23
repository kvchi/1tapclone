import React from 'react';
import 'aos/dist/aos.css'; // Import the AOS styles
import { aichip, arrow, arrow1, clock, magnifyingGlass, piechart, security, wallet } from '../assets/images';

const ComplianceHeading = () => {
  

  return (
    <div className='md:ml-10 lg:ml-0 md:mt-[300px] lg:mt-[200px]  relative'>
      <div className='absolute hidden md:-top-[70px] lg:-top-[50px] lg:-left-[94px] w-[65px] h-[64px] drop-shadow-md rounded-[8px] bg-white items-center justify-center animate-bounce-slight sm:hidden md:flex lg:flex'>
        <img src={aichip} alt="" />
      </div>
      <div className='absolute md:-top-[75px] lg:-top-[50px] lg:-right-[94px] md:right-[130px] w-[65px] h-[64px] drop-shadow-md rounded-[8px] bg-white  items-center justify-center animate-bounce-slight hidden md:flex lg:flex'>
        <img src={wallet} alt="" className=''/>
      </div>
      <div className='absolute md:top-[100px] lg:top-[150px] md:-left-[50px] lg:-left-[120px] w-[65px] h-[64px] drop-shadow-md rounded-[8px] bg-white  items-center justify-center animate-custom-bounce hidden md:flex lg:flex'>
        <img src={security} alt="" />
      </div>
      <div className='absolute md:top-[50px] lg:top-[130px] md:-right-[10px] lg:-right-[70px] w-[64px] h-[64px] drop-shadow-md rounded-[8px] bg-white  items-center justify-center animate-custom-bounces hidden md:flex lg:flex'>
        <img src={clock} alt="" />
      </div>
      <div className='absolute top-[150px] -left-[120px] w-[78px] h-[70px] drop-shadow-md rounded-[8px] bg-white  items-center justify-center animate-custom-bounce md:mt-[70px] lg:mt-[185px] ml-[160px] hidden md:flex lg:flex'>
        <img src={magnifyingGlass} alt="" />
      </div>
      <div className='absolute md:bottom-0 lg:bottom-[20px] md:-right-[70px] lg:-right-[5px] w-[78px] h-[70px] drop-shadow-md rounded-[8px] bg-white items-center justify-center animate-smooth-up-down mt-[185px] mr-[90px] hidden md:flex lg:flex'>
        <img src={piechart} alt="" />
      </div>
      <div className='lg:w-[1013px] lg:h-[180px] md:w-[600px] w-[321px] md:h-[90px] h-[135px] flex items-center container mx-auto mt-[360px] md:mt-0'>
      <h2 className='font-bold md:font-semibold lg:font-bold text-[30px] md:text-[40px] lg:text-[70px] leading-[45px] lg:leading-[90px] text-center'>
        Launch & Run Your business <span className='gradient-text'>the Smart Way with <span className='bg-primary bg-clip-text'>1Tap</span></span>
      </h2>
      </div>

      <div className="relative overflow-hidden flex justify-center ">
        <p
          className="text-[18px] md:text-[16px] lg:text-[32px] font-bold lg:leading-[90px] md:leading-[20px] tracking-[-0.2px] text-center w-full md:w-[700px] mt-[27px] md:mt-0 text-primary md:text-black"
          >
        Transparent, Digital, and Personalized
        </p>
      </div>
      <div className="flex justify-center w-[321px] md:w-[500px] lg:w-[670px] h-[96px] md:h-[54px] lg:h-[84px] container mx-auto mt-[28px] md:mt-[16px]">
        <p
          className="text-[14px] lg:text-[18px] font-medium leading-[24px] lg:leading-[28px] tracking-[-0.2px] text-center "
        >
          We are changing the traditional business landscape by taking care of
          mundane tasks through our platform, enhancing speed & decision making thus
          helping businesses across various sectors.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-[46px] ">
        <div className="flex gap-4 ">
          <div className="relative group">
            <button
              onClick={() =>
                (window.location.href = "https://dev.1tapbiz.com/signup")
              }
              className="relative w-[145px] md:w-[169px] lg:w-[192.7px] h-[45px] md:h-[53px] bg-black rounded-[15px] text-white font-medium flex items-center justify-center gap-[8px] overflow-hidden"
            >
              <span className="relative z-10 font-semi-bold md:font-bold text-[16px] leading-[22.95px]">Get Started</span>
              <img src={arrow} alt="" className="relative z-10 hidden  md:flex" />

              {/* Hover effect using a pseudo element */}
              <span className="absolute inset-0 bg-primary transition-transform duration-700 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </button>
          </div>
          <div className="group">
            <button className="relative w-[145px] md:w-[192.7px] h-[45px] md:h-[53px] bg-white rounded-[15px] text-black border-[2px] border-black  group-hover:border-0 font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear">
              <span className="relative z-10 font-semibold md:font-bold text-[14px] md:text-[16px] leading-[22.95px]">Free consultation</span>
              <img
                src={arrow1}
                alt=""
                className="relative z-10 filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100 hidden md:flex"
              />
              <span className="absolute inset-0 bg-primary transition-transform duration-500 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceHeading;
