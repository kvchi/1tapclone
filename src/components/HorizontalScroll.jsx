import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { sliderData } from '../data/sliderData'; // Adjust path as necessary

// Create duplicates to ensure a smooth loop
const duplicatedSliderData = [
  ...sliderData,
  ...sliderData.map((el, index) => ({ ...el, id: `${el.id}-duplicate-${index}` }))
];


export default function HorizontalScroll() {
  return (
    <div className='relative overflow-hidden w-screen'>
      <Swiper
        spaceBetween={30}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000} 
        modules={[Autoplay]}
        className='whitespace-nowrap'
        freeMode={true}
        dir="rtl" // Add this line to enable right-to-left movement
      >
        {duplicatedSliderData.map((el) => (
          <SwiperSlide key={el.id} className='inline-block'>
            <div className='flex items-center bg-white rounded-xl px-4 py-2  md:px-7 md:py-4 gap-2 mb-[5.3rem] shadow-lg'>
              <p className='font-medium'>{el.title}</p>
              <img src={el.image} alt="" className='w-5 h-5  md:w-7 md:h-7' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
