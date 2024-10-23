import React, { useState, useEffect } from 'react';
import { arrow, arrow1, cards, dashboard6 } from '../assets/images';
import { GetStartedData } from '../data/getStartedData';

function GetStarted() {
  // Initialize activeStep with the ID of the first item
  const [activeStep, setActiveStep] = useState(GetStartedData[0]?.id || null);
  const [currentImage, setCurrentImage] = useState(GetStartedData[0]?.image || dashboard6);
  (GetStartedData[0]?.cardImage || cards);
  const [imageOpacity, setImageOpacity] = useState(1); // State to control image opacity

  // useEffect to set the images based on the active step when component mounts
  useEffect(() => {
    const selectedStep = GetStartedData.find(step => step.id === activeStep);
    if (selectedStep) {
      setCurrentImage(selectedStep.image);
    }
  }, [activeStep]);

  const handleClick = (id) => {
    const selectedStep = GetStartedData.find(step => step.id === id);
    if (selectedStep) {
      setImageOpacity(0); // Start fading out the image
      setTimeout(() => {
        setActiveStep(id);
        setCurrentImage(selectedStep.image);
        setImageOpacity(1); // Fade in the new image
      }, 500); 
    }
  };

  return (
    <section className='mt-[50px] md:mt-[145px] '>
      <div className='flex items-center justify-center container mx-[50px] md:mx-auto text-center w-[334px] md:w-[619px] lg:w-full'>
        <h3 className='font-bold text-[30px] md:text-[45px] leading-[40px] md:leading-[60px]'>
          Get Your Business Started In{' '}
          <span className='text-primary'>Just 4 Simple Steps</span>
        </h3>
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-[46px] mr-[25px] md:mr-0">
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

      <aside className='flex flex-col md:flex-row md:gap-[45px] lg:gap-[251px] md:ml-[130px] lg:ml-0'>
        <div className='relative w-[325px] md:w-[440.5px] lg:w-[668px] h-[260px] md:h-[352px] lg:h-[534px] bg-gradient-to-b from-[#EAF5FF] to-[#F8FCFF] mt-[51px] rounded-[24px] md:-ml-[150px] flex md:items-center ml-[50px] md:justify-center lg:justify-start'>
          <img
            src={currentImage}
            alt=''
            style={{ opacity: imageOpacity, transition: 'opacity 500ms ease-in-out' }}
            className={`w-[390px] h-[300px] md:w-[422px] lg:w-[850px] lg:h-[750px]
              lg:pt-[37px] lg:ml-[123px] md:ml-[40px] ml-[20px] transition-all duration-500  ${activeStep === '22229' ? 'mt-4' : ''} ${activeStep === '22224' ? 'pb-4' : ""}`} 
          />
        </div>

        <div className='mt-[10px] md:mt-[50px] lg:mt-[96px] ml-[20px] md:ml-0'>
          {GetStartedData.map(({ id, number, title }) => (
            <div
              key={id}
              onClick={() => handleClick(id)}
              className={`relative w-[350px] md:w-[385px] lg:w-[562px] h-[54px] lg:h-[74px] flex drop-shadow-xl rounded-2xl gap-4 mb-[22px] items-center px-[19px] transition-all duration-300 cursor-pointer
                ${activeStep === id ? 'bg-[#DEEFFF] text-black border-[3px] border-primary' : 'bg-white text-black'}`}
            >
              <div className={`bg-[#DEEFFF] w-[43px] h-[43px] rounded-full text-center font-bold text-[25px] drop-shadow-lg py-1 transition-all duration-500 ${activeStep === id ? 'w-[60px] h-[60px] py-3 mb-[30px] -mx-[30px] text-black' : ''}`}>
                {number}
              </div>

              <div className={`text-[14px] lg:text-[22px] leading-[60px] transition-all duration-500 ${activeStep === id ? 'mx-[24px]' : ''}`}>
                {title}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default GetStarted;
