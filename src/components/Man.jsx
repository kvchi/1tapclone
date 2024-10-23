import React from 'react';
import { man } from '../assets/images'; // Make sure to import any icons if needed
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Man = () => {

  

  return (
   <div className='mt-[200px]'>
    <aside className="relative flex flex-col-reverse lg:flex-row  justify-center container   bg-gradient-to-b from-[#EDF6FF] to-[#aed8ff] w-[353px] md:w-[880px] lg:w-[1349px] h-[861px] md:h-[1030px] lg:h-[545px] rounded-2xl overflow-hidden md:items-center lg:items-start lg:mx-auto mx-auto">
         <div className="lg:absolute md:relative  lg:left-[54px] md:top-[85px] lg:top-[60px] w-[312px] md:w-[578px] md:h-[540px] mt-[10px]">
            <img src={man} alt="" className="" />
          </div>
          <div className=" mt-[3.18rem] text-center md:text-start lg:ml-[37.5rem]">
            <div className="mt-[0.75rem]">
              <h2 className="text-[30px] md:text-[42px] font-bold font-inter md:leading-[49.22px]">
                Launch Your Business <br /> <span className='text-primary md:text-black'>with Ease</span>
              </h2>
            </div>
            <div className='w-[312px] md:w-[594px] h-[66px]'>
            <p className="mt-[1.1rem] font-normal text-[18px] lg:leading-[21.78px]">
              Get AI-driven insights with 1Tap to streamline your business setup.<br/>Our platform evaluates 45+ UAE jurisdictions and pinpoints the ideal<br/> match for your business, ensuring a smooth and efficient start.
              </p>
            </div>
           <aside className='flex flex-col md:flex-row md:gap-[44px]'>
           <div>
           <div className="bg-[#FFFFFF] w-[226px] h-[50px] md:w-[275px] md:h-[56px] rounded-[12px] mt-[130px] md:mt-[54px] flex items-center gap-[16px] justify-center mx-auto lg:mx-0">
              <span className="">
                <IoMdCheckmarkCircleOutline
                  className=" text-[#2E95F4]"
                  size={40}/>
              </span>
              <p className="  lg:text-[18px] font-medium leading-[19.2px] font-inter text-[#0085FF]">
                Jurisdiction Expertise
              </p>
            </div>
            <div className="bg-[#FFFFFF]  w-[226px] h-[50px] md:w-[275px] md:h-[56px] rounded-[12px] mt-[12px] md:mt-[2rem] flex items-center gap-[16px] justify-center mx-auto lg:mx-0">
            <span className="">
                <IoMdCheckmarkCircleOutline
                  className=" text-[#2E95F4]"
                  size={40}/>
              </span>
              <p className="  lg:text-[18px] font-medium leading-[19.2px] font-inter text-[#0085FF]">
                Transparent Pricing
              </p>
            </div>
           </div>
           <div>
           <div className="bg-[#FFFFFF] w-[226px] h-[50px] md:w-[275px] md:h-[56px] rounded-[12px] mt-[12px] md:mt-[54px] flex items-center gap-[16px] justify-center mx-auto lg:mx-0">
              <span className="">
                <IoMdCheckmarkCircleOutline
                  className=" text-[#2E95F4]"
                  size={40}/>
              </span>
              <p className="  lg:text-[18px] font-medium leading-[19.2px] font-inter text-[#0085FF]">
                Jurisdiction Expertise
              </p>
            </div>
            <div className="bg-[#FFFFFF]  w-[226px] h-[50px] md:w-[275px] md:h-[56px] rounded-[12px] mt-[12px] md:mt-[32px] flex items-center gap-[16px] justify-center mx-auto lg:mx-0">
            <span className="">
                <IoMdCheckmarkCircleOutline
                  className=" text-[#2E95F4]"
                  size={40}/>
              </span>
              <p className="  lg:text-[18px] font-medium leading-[19.2px] font-inter text-[#0085FF]">
                Transparent Pricing
              </p>
            </div>
           </div>
           </aside>
          </div>
        </aside>
   </div>
  );
};

export default Man;
