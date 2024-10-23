import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { founder, founder1, founder2, instagram1, twitter1 } from '../assets/images';

const ImageGrid = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className='flex flex-col lg:flex-row gap-5 md:ml-[60px] lg:ml-[30px]'>
      {/* First Image and Details */}
      <div>
        <div
          id="image-grid"
          className="flex flex-col md:flex-row gap-[1.5rem] mt-[3.125rem] overflow-hidden relative"
        >
          <div className='relative overflow-hidden'>
            <img
              src={founder}
              alt="Founder"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="0" // First image
              className="md:w-[700px] lg:w-[432px]"
            />
          </div>
        </div>
        <div className='lg:mt-[27px] md:mt-[32px] flex items-center lg:gap-[6.5rem] md:gap-[18.55rem] '>
          <div className=''>
            <p className='lg:text-[32px] md:text-[42px] font-semibold font-inter leading-[30px] tracking-[-1.44px]  '>Edward Snowden</p>
            <p className='font-inter font-normal lg:text-[20px] md:text-[24px] leading-[30px] tracking-[-1.44px] lg:mt-[10px] md:mt-[16px]'>CEO, Founder</p>
          </div>
          <div className='flex gap-2 -mt-9 overflow-hidden'>
            <img src={twitter1} alt="" className='w-[32px]'/>
            <img src={instagram1} alt="" className='w-[32px]'/>
          </div>
        </div>
      </div>

      {/* Second Image and Details */}
      <div>
        <div
          id="image-grid"
          className="flex flex-col md:flex-row gap-[1.5rem] mt-[3.125rem] overflow-hidden relative"
        >
          <div className='relative overflow-hidden'>
            <img
              src={founder1}
              alt="Founder"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="1000" 
              className="md:w-[700px] lg:w-[432px]"
            />
          </div>
        </div>
        <div className='lg:mt-[27px] md:mt-[32px] flex items-center lg:gap-[6.5rem] md:gap-[18.55rem] '>
          <div className=''>
            <p className='lg:text-[32px] md:text-[42px]  font-semibold font-inter leading-[30px] tracking-[-1.44px]'>Edward Snowden</p>
            <p className='font-inter font-normal lg:text-[20px] md:text-[24px] leading-[30px] tracking-[-1.44px] md:mt-[16px]'>CEO, Founder</p>
          </div>
          <div className='flex gap-2 -mt-10 overflow-hidden'>
            <img src={twitter1} alt="" className='w-[32px]'/>
            <img src={instagram1} alt="" className='w-[32px]'/>
          </div>
        </div>
      </div>

      {/* Third Image and Details */}
      <div>
        <div
          id="image-grid"
          className="flex flex-col md:flex-row gap-[1.5rem] mt-[3.125rem] overflow-hidden relative"
        >
          <div className='relative overflow-hidden'>
            <img
              src={founder2}
              alt="Founder"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="2000" // Delayed for third image
              className="md:w-[700px] lg:w-[432px]"
            />
          </div>
        </div>
        <div className='lg:mt-[27px] md:mt-[32px] flex items-center lg:gap-[6.5rem] md:gap-[18.55rem] '>
          <div className=''>
            <p className='lg:text-[32px] md:text-[42px]  font-semibold font-inter leading-[30px] tracking-[-1.44px]'>Edward Snowden</p>
            <p className='font-inter font-normal lg:text-[20px] md:text-[24px] leading-[30px] tracking-[-1.44px] md:mt-[16px]'>CEO, Founder</p>
          </div>
          <div className='flex gap-2 -mt-10 overflow-hidden'>
            <img src={twitter1} alt="" className='w-[32px] '/>
            <img src={instagram1} alt="" className='w-[32px]'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
