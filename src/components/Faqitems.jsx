import React, { useEffect, useState } from 'react';
import { faqData } from '../data/faqData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { add } from '../assets/images';

export default function Faqitems() {
  const [openFaq, setFaq] = useState(null);

  const toggleFaq = (id) => {
    setFaq(openFaq === id ? null : id);
  };

  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className='flex flex-col'>
      <section className="">
        <div className=" lg:ml-[116px] relative">
          <div className="relative z-10 overflow-hidden">
            <h2 
              className="font-black leading-[180px] text-[32px] md:text-[64px] lg:text-[74px] gradient-text ml-[29px] lg:ml-0">
              What<span className='font-inter font-black rounded-full bg-gradient-to-b from-[#000000]/70 to-[#000000]/40 inline-block items-center justify-center md:w-[15px] md:h-[15px] lg:w-[12px] lg:h-[12px]'>
              </span> The
              <span className='font-inter font-black rounded-full bg-gradient-to-b from-[#000000]/70 to-[#000000]/40 inline-block items-center justify-center md:w-[15px] md:h-[15px] lg:w-[12px] lg:h-[12px]'>
              </span>
              <span className='bg-primary bg-clip-text'> FAQ?</span>
            </h2>
          </div>
          <div className="-mt-[40px] md:mt-[16px] flex flex-col items-center lg:mr-[116px]">
            {faqData.map(({ id, question, answer }) => (
              <div 
                key={id} 
                className={`mb-6 py-[15px] px-[32px] bg-white shadow-lg rounded-3xl w-[331px] md:w-[924px] lg:w-[1280px] transition-all duration-700 ease-in-out`}
              >
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFaq(id)}>
                  <h3 className="text-[14px] md:text-[16px] lg:text-[22px] leading-[25px] font-normal">{question}</h3>
                  <button
                    className="relative flex items-center justify-center"
                    onClick={() => toggleFaq(id)}>
                    <span
                      className={`transition-transform duration-500 ease-in-out ${openFaq === id ? 'rotate-45' : 'rotate-0'}`}>
                      <img src={add} alt="" />
                    </span>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-1000 ease-in-out ${openFaq === id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                  style={{ maxHeight: openFaq === id ? '1000px' : '0' }} // Dynamically set max-height
                >
                  <p className="text-[16px] lg:text-[18px] max-w-4xl font-medium mt-4">
                    {answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
