import React from "react";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  arrow,
  arrow1,
  books,
  business,
  chatbot,
  dashboard4,
  dashboard5,
  envelope,
  flash,
  gmail,
  outlook,
  phone,
  roller1,
  smallArrow,
  vat,
  whatsapp,
} from "../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { swiperData } from "../data/swiperData";
import HorizontalScroll from "../components/HorizontalScroll";

import Faqitems from "../components/Faqitems";

import ComplianceHeading from "../components/ComplianceHeading";
import Man from "../components/Man";
import GetStarted from "../components/GetStarted";

// Duplicate the swiperData to ensure enough slides for looping
const duplicatedSwiperData = [
  ...swiperData, // Original swiper data
  ...swiperData.map((el, index) => ({
    ...el,
    id: `${el.id}-duplicate-1-${index}`, // First duplication
  })),
  ...swiperData.map((el, index) => ({
    ...el,
    id: `${el.id}-duplicate-2-${index}`, // Second duplication
  })),
  ...swiperData.map((el, index) => ({
    ...el,
    id: `${el.id}-duplicate-3-${index}`, // Third duplication (optional)
  })),
];

export default function Home() {
  const controls = useAnimation();
  const [inView] = useInView({ threshold: 0.2 }); // Adjust threshold as needed

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({ y: 100, opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <main className="container flex flex-col max-w-[1512px] mx-auto relative">
      
      <section className="relative lg:mt-[200px] md:mt-[57px] flex flex-col justify-center items-center h-[250px] bg-transparent">
        <ComplianceHeading />
      </section>
      <div className="relative mt-[200px] md:mt-[120px] lg:mt-[200px]">
        <div className="flex justify-center items-center ">
          <div className="md:ml-10 lg:ml-0 w-[352px] h-[1351px] md:w-[876px] md:h-[1094px] lg:w-[1246px] lg:h-[655px] bg-gradient-to-b from-[#eaf5ff] to-[#b8ddff] mt-[126px] rounded-[34px]">
            <div className="flex justify-center md:w-[697px] lg:w-[929px] text-center mx-auto">
              <h3 className="font-bold mt-[35px] md:text-[36px] lg:text-[45px] leading-[45px] md:leading-[60px]">
                <span className="text-primary ">
                  {" "}
                  Experience Fast, Transparent,
                </span>{" "}
                and Hassle-
                <span className="gradient-text ">Free Business Setup</span>
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center text-center mt-[26px] md:mt-[46px] ">
              <div className="flex gap-4 ">
                <div className="relative group">
                  <button
                    onClick={() =>
                      (window.location.href = "https://dev.1tapbiz.com/signup")
                    }
                    className="relative w-[145px] md:w-[169px] lg:w-[192.7px] h-[45px] md:h-[53px] bg-black rounded-[15px] text-white font-medium flex items-center justify-center gap-[8px] overflow-hidden"
                  >
                    <span className="relative z-10 font-semi-bold md:font-bold text-[16px] leading-[22.95px]">
                      Get Started
                    </span>
                    <img
                      src={arrow}
                      alt=""
                      className="relative z-10 hidden  md:flex"
                    />

                    {/* Hover effect using a pseudo element */}
                    <span className="absolute inset-0 bg-primary transition-transform duration-700 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                  </button>
                </div>
                <div className="group">
                  <button className="relative w-[145px] md:w-[192.7px] h-[45px] md:h-[53px] bg-transparent rounded-[15px] text-black border-[2px] border-black  group-hover:border-0 font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear">
                    <span className="relative z-10 font-semibold md:font-bold text-[14px] md:text-[16px] leading-[22.95px]">
                      Free consultation
                    </span>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-[10px] lg:gap-[32px] mt-[-10px] max-w-full">
              <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] bg-gradient-to-bl from-[#F2F8FF] to-[#BBDEFF] drop-shadow-lg rounded-[30px] mx-[20px] md:mx-[100px] lg:-mx-[64px] mt-[64px] md:mt-[87px] lg:mt-[120px] overflow-hidden z-10">
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-center mt-[30px] md:mt-[60px] font-semibold text-[24px] md:text-[32px] leading-[45px]">
                    <span className="text-primary">Technology</span>-Driven
                  </h3>
                  <img
                    src={roller1}
                    alt=""
                    className="mt-3 w-[174px] md:w-[235px]"
                  />
                </div>
              </div>
              <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] bg-white rounded-[30px] mx-[60px] md:mx-[3px] lg:-mx-[32px] mt-[-40px] md:mt-[87px] lg:mt-[48px] drop-shadow-lg">
                <div className="flex flex-col-reverse justify-center items-center">
                  <h3 className="text-[24px] md:text-[32px] font-semibold ml-3.5 leading-[45px] mt-[20px] md:mt-[40px] text-center md:text-start">
                    Fast &<span className="text-primary"> User-Driven</span>{" "}
                    Process
                  </h3>
                  <img src={flash} alt="" className="mt-[10px] md:mt-[65px] " />
                </div>
              </div>
              <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] bg-gradient-to-tr from-[#BBDEFF] to-[#F2F9FF] rounded-[30px] drop-shadow-lg mt-[-50px] md:mt-[16px] lg:mt-[120px] mx-[20px] md:mx-[100px] lg:mx-0 z-10 relative">
                <div className="flex justify-center items-center mt-[30px] md:mt-[64px]">
                  <h3 className="text-[32px] leading-[45px] font-semibold">
                    <span className="text-primary">24/7</span> Support
                  </h3>
                </div>
                
                  <div className="">
                    <div className="w-[13px] h-[13px] bg-gradient-to-b from-[#FFFFFF] to-[#2E95F4] rounded-full absolute bottom-[42px] right-[93px] z-10"></div>
                    <div className="w-[13px] h-[13px] bg-white rounded-full absolute top-[105px] md:top-[156px] left-[126px] md:left-[189px]"></div>
                    <div className="absolute w-[40px] left-[39px] md:left-[86px] bottom-[96px] md:bottom-[113px]">
                    <img
                      src={gmail}
                      alt=""
                      className="bg-white rounded-full p-2"
                    />
                    </div>
                  </div>
                  <div className="absolute bottom-[76px] md:bottom-[109px] right-[30px] md:right-[23px]  w-[40px]">
                    <img
                      src={outlook}
                      alt=""
                      className="bg-white rounded-full p-2"
                    />
                  </div>
                    <div className="w-[13px] h-[13px] bg-white rounded-full absolute bottom-[31px] left-[75px] md:bottom-[19px] md:left-[124px]"></div>
                    <div className="w-[13px] h-[13px] bg-gradient-to-b from-[#FFFFFF] to-[#2E95F4] rounded-full absolute bottom-[103px] md:bottom-[144px] left-[76px] md:left-[81px] z-10"></div>
                    <div className="absolute bottom-[5px] md:bottom-[51px] left-[2.5px] md:left-[31px]  rounded-full w-[40px]">
                      <img
                        src={phone}
                        alt=""
                        className="rounded-full bg-white p-1"
                      />
                    </div>
                  
                  <div className="bg-white absolute rounded-full left-[108px] md:left-[142px] bottom-[23px] md:bottom-[52px] w-[40px] h-[40px] flex items-center justify-center">
                    <img src={envelope} alt="" />
                  </div>

                  <div className="absolute bottom-[9px] md:bottom-[38px] right-[17px] md:right-[47px]  ">
                    <img
                      src={whatsapp}
                      alt=""
                      className="  rounded-full p-1 bg-white"
                    />
                  </div>
                
              </div>
              <div className="w-[250px] h-[250px] md:w-[320px]  md:h-[320px] bg-white rounded-[30px] mx-[60px] md:mx-[3px] mt-[-50px] md:mt-[16px] lg:mx-[32px] lg:mt-[48px] drop-shadow-lg">
                <div>
                  <img
                    src={smallArrow}
                    alt=""
                    className="mt-[30px] md:mt-[70px] w-[240px] md:w-[280px]"
                  />
                  <h3 className="font-bold text-[24px] md:text-[32px] leading-[60px] tracking-[-1px] text-center">
                    <span className="text-primary">End-toEnd</span> Support
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-[55px] md:mt-[88px] lg:mt-[162px] md:ml-10 lg:ml-0">
        <h2 className="text-[30px] md:text-[55px] font-bold leading-[80px] tracking-[-1.44px] gradient-text">
          Ecosystem of <span className="bg-primary bg-clip-text">BizTech.</span>
        </h2>
        <div className="flex flex-col justify-center items-center lg:pt-[1.5rem] md:pt-[10px]">
          <p className="font-normal text-[14px] md:text-[16px] lg:text-[20px] leading-[28px] tracking-[-0.2px] w-[306px] md:w-[600px] lg:w-[800px]">
            Welcome to our hub of Business in a box, your guide in the bustling
            United Arab Emirates. From setup to tax and beyond, we offer
            tailored solutions for your success.
            <br /> Let&apos;s navigate this journey together.
          </p>
          <div className="flex flex-col justify-center items-center text-center mt-[46px] ">
            <div className="flex gap-4 ">
              <div className="relative group">
                <button
                  onClick={() =>
                    (window.location.href = "https://dev.1tapbiz.com/signup")
                  }
                  className="relative w-[145px] md:w-[169px] lg:w-[192.7px] h-[45px] md:h-[53px] bg-black rounded-[15px] text-white font-medium flex items-center justify-center gap-[8px] overflow-hidden"
                >
                  <span className="relative z-10 font-semi-bold md:font-bold text-[16px] leading-[22.95px]">
                    Get Started
                  </span>
                  <img
                    src={arrow}
                    alt=""
                    className="relative z-10 hidden  md:flex"
                  />

                  {/* Hover effect using a pseudo element */}
                  <span className="absolute inset-0 bg-primary transition-transform duration-700 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                </button>
              </div>
              <div className="group">
                <button className="relative w-[145px] md:w-[192.7px] h-[45px] md:h-[53px] bg-white rounded-[15px] text-black border-[2px] border-black  group-hover:border-0 font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear">
                  <span className="relative z-10 font-semibold md:font-bold text-[14px] md:text-[16px] leading-[22.95px]">
                    Free consultation
                  </span>
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
      </div>
      <div className="relative overflow-hidden mt-[46px] w-screen">
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="whitespace-nowrap mb-[32px]"
          freeMode={true}
        >
          {duplicatedSwiperData.map((el) => (
            <SwiperSlide key={el.id} className="inline-block ">
              <div className="flex items-center bg-white rounded-xl px-4 py-2  md:px-6 md:py-4 gap-2 shadow-lg">
                <img src={el.image} alt="" className="w-5 md:w-7" />
                <p>{el.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <HorizontalScroll />
      </div>
      <aside className="flex flex-col gap-6 md:gap-[3.8rem]  md:mt-5 lg:flex-row lg:mt-[120px]  md:ml-[180px] lg:ml-[87px] lg:mx-auto relative">
      <div className="w-[365px] md:w-[707px] text-center mx-auto lg:text-start block md:hidden">
            <h2 className="font-bold text-[30px] md:text-[48px] lg:text-[45px] leading-[45px] lg:leading-[60px] lg:tracking-[-1px]">
              <span className="text-primary">One-stop</span> Digital Experience.
            </h2>
          </div>
        {/* Div containing text */}
        <div className="flex flex-col md:items-center lg:items-start lg:mt-[200px] md:mt-[50px] md:mr-[150px] order-4 md:order-2 ">
          <div className="w-[365px] md:w-[707px] text-center mx-auto lg:text-start hidden md:block">
            <h2 className="font-bold text-[30px] md:text-[48px] lg:text-[45px] leading-[45px] lg:leading-[60px] lg:tracking-[-1px]">
              <span className="text-primary">One-stop</span> Digital Experience.
            </h2>
          </div>
          <div className="w-[365px] md:w-[707px] lg:w-[552px] lg:h-[168px] mt-[20px] order-3 mx-auto lg:mx-0">
            <p className="md:text-[16px] lg:text-[18px] font-normal leading-[24px] lg:leading-[28px] text-center lg:text-start">
              Welcome to your all-in-one solution for starting and growing a
              business in the UAE.
              <br />
              From company formation to compliance and everything in between, we
              provide personalized services designed to simplify your journey.
              Let 1Tap handle the details, so you can focus on what truly
              matters—building your success.
            </p>
          </div>
          <div className="mt-[30px] order-4 mx-auto lg:mx-0">
            <button className="group relative w-[192px] h-[53px] bg-white md:rounded-[10px] text-black border-b-[2px]  md:border-[2px] border-black hover:border-white font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear">
              <span className="relative z-10">Learn more</span>
              <img
                src={arrow1}
                alt=""
                className="relative z-10 filter group-hover:invert hidden md:flex"
              />
              <span className="absolute inset-0 bg-primary transition-transform duration-500 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </button>
          </div>
        </div>

        {/* Div containing image */}
        <div className="bg-[#E8F4FF] h-[280px] md:h-[33.2rem] w-[330px]  md:w-[44.1rem] mx-auto md:-mx-[40px] lg:-mx-0  rounded-[30px] relative">
          <img
            src={dashboard4}
            alt=""
            className="absolute top-[30px] left-[15px] md:top-[20px] lg:top-[35px] md:left-[57px] lg:left-[80px] rounded-2xl w-[300px] md:w-[650px] lg:w-[630px]"
          />
          <div className="flex absolute -bottom-[30px] md:-bottom-[70px] lg:-bottom-[67px] ml-[45px] md:ml-[105px]">
            <img
              src={vat}
              alt=""
              className=" md:mt-[1px] w-[121.55px] h-[116px] md:w-[262px] md:h-[262px]"
            />
            <img
              src={books}
              alt=""
              className="md:pt-[10px] -mx-[18px] w-[126px] h-[121px] md:w-[262px] md:h-[262px] "
            />
          </div>
        </div>
      </aside>
      <aside className="flex flex-col lg:flex-row-reverse ml-[10%] md:ml-[10%] mt-[58px] md:mt-[80px] lg:mt-[8.9rem] relative lg:mx-auto">
  <div className="block md:hidden w-full max-w-[90%] h-[90px] text-center">
    <h2 className="font-bold text-[30px] md:text-[45px] leading-[40px] lg:leading-[60px] tracking-[-1.2px] lg:tracking-[-1px]">
      <span className="text-primary">Transparent</span> and Upfront Pricing
    </h2>
  </div>
  
  <div className="bg-[#FFE9FE] transition-all duration-1000 ease-in-out h-[248px] md:h-[33.2rem] w-full max-w-[90%] md:max-w-[70%] rounded-[30px] relative md:-ml-[5%] lg:ml-0 mt-[24px]">
    <img
      src={dashboard5}
      alt=""
      className="absolute left-[15px] md:left-0 top-[20px] md:top-[60px] rounded-2xl w-full max-w-[90%] md:max-w-[95%]"
    />
    <div className="absolute ml-[15%] md:ml-[18%] top-[30px] md:top-[118px]">
      <img
        src={business}
        alt=""
        className="mt-[30px] w-full max-w-[60%] md:max-w-[55%]"
      />
    </div>
  </div>

  <div className="flex flex-col ml-4 md:items-center lg:items-start mt-[20px] md:mt-[77px] lg:mt-[180px]">
    <div className="w-full max-w-[90%] h-[90px] ml-[20%] md:ml-0">
      <h2 className="font-bold text-[30px] md:text-[45px] leading-[40px] lg:leading-[60px] tracking-[-1.2px] lg:tracking-[-1px] hidden md:block">
        <span className="text-primary">Transparent</span> and Upfront Pricing
      </h2>

      <div className="lg:max-w-[80%] md:max-w-[85%] w-full">
        <p className="mt-4 md:mt-[1rem] md:text-[16px] lg:text-[18px] font-normal leading-[24px] md:leading-[28px] text-center lg:text-start">
          We prioritize transparency. All costs, including government fees and service charges, are clearly displayed upfront. With 1Tap, there are no hidden fees, giving you complete peace of mind as you start your business.
        </p>
      </div>

      <div className="mt-[30px] mx-auto md:ml-[20%] lg:ml-0">
        <button className="group relative w-[50%] max-w-[200px] h-[53px] bg-white rounded-[10px] text-black border-[3px] border-black hover:border-white font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear">
          <span className="relative z-10">Check Packages</span>
          <img
            src={arrow1}
            alt=""
            className="relative z-10 filter group-hover:invert"
          />
          <span className="absolute inset-0 bg-primary transition-transform duration-500 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </button>
      </div>
    </div>
  </div>
</aside>

      <section className="relative mt-[30px] md:mt-0">
        <Man />
      </section>

      <section className="mx-auto">
        <GetStarted />
      </section>
      <section>
        <Faqitems />
      </section>
    </main>
  );
}
