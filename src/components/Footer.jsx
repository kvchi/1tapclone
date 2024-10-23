import React from 'react';
import { chatbot, discord, instagram, logo, note, twitter } from '../assets/images';
import { footerData } from '../data/footerData';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-[#f3f3f3] flex mt-[117px] mx-auto max-w-[1555px]'>
      <div className="fixed z-50 right-[5px] transform bottom-[30px] mr-[30px] mx-auto hidden lg:block">
        <img
          src={chatbot}
          alt=""
          className="bg-white w-[50px] h-[50px] rounded-full p-2"
          style={{
            boxShadow: `
      0 0 10px rgba(106, 173, 240, 0.775),  0 2px 5px rgba(0, 0, 0, 0.2) `,
          }}
        />
      </div>
    <aside className='flex flex-col md:flex-row lg:w-[672.22px] lg:gap-[207px] md:gap-[100px] ml-[29px] md:ml-0'>
      <div className='flex flex-col py-[25px] md:py-[2.8rem] md:items-center '>
          <img src={logo} alt="Footer Logo" className='w-[78px] h-[18px] md:ml-[40px] lg:ml-[176px]'/>
          <p className='font-medium font-inter text-[13px] leading-[24px] text-start md:text-center w-[216px] h-[24px] md:ml-[40px] lg:ml-[200px] mt-[15px]'>2023 Diagram Technologies, Inc</p> 
      </div>
      <div className='md:py-[44px] grid grid-cols-3 gap-[100px] lg:gap-[200px] '>
        {footerData.map((section) => (
          <div key={section.id} className='lg:space-y-4 w-[50px]'>
            <h3 className='text-[15px]'>{section.title}</h3>
            <ul className='lg:space-y-4 md:py-[8.6px] text-gray-400 list-none m-0'>
              {section.items.map((item) => (
                <li key={item.name} className=''>
                  <Link to={item.url} className='text-[14px]'>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    <div className='flex mt-[20px] md:mt-[150px]  lg:mt-[200px] gap-[12px] w-[24px] md:w-[42px] mb-[10px] md:mb-[42px] ml-0 md:-ml-[50px]'>
        <img src={twitter} alt="" />
        <img src={note} alt="" />
        <img src={discord} alt="" />
        <img src={instagram} alt="" className=''/>
    </div>
    </aside>
  </footer>
  
  );
}
