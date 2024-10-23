import { testimonialData } from '../data/testimonialData';

const doubledTestimonialData = [...testimonialData, ...testimonialData, ...testimonialData];

const TestimonialSlider = () => {
  return (
    <div className="embla w-[1425px] lg:w-[1820px]">
      <div className="embla__container">
        {doubledTestimonialData.map((el, index) => (
          <div 
            key={`${el.id}-${index}`} 
            className="embla__slide flex-[0_0_30%] md:flex-[0_0_30%] lg:flex-[0_0_30%] xl:flex-[0_0_0%]"
          >
            <div className="embla__slide__content">
              <div className="inline-block mt-[63px]">
                <div className="p-4 bg-white rounded-[33.95px] md:w-[445px] lg:h-[592px] md:h-[400px] flex flex-col">
                  <p className="mb-4 leading-[35.64px] mt-[2rem] ml-[1.5rem] lg:text-[25.46px] md:text-[20px] w-[90%] md:w-[361px] lg:h-[321px] md:[214px] font-manrope font-[400px]">
                    {el.description}
                  </p>
                  <div className="flex items-center mt-auto ml-[33.95px]">
                    <img
                      src={el.image}
                      alt={el.name}
                      className="w-12 h-12 rounded-full mr-4 mb-[37.34px]"
                    />
                    <div>
                      <h3 className="text-[22.06px] font-manrope font-normal leading-[30.14px] tracking-[-2.5%]">
                        {el.name}
                      </h3>
                      <div className="flex mb-[43.33px]">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
