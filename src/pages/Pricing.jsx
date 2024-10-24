import { useState } from "react";
import Faqitems from "../components/Faqitems";
import { GoDash } from "react-icons/go";
import { check } from "../assets/images";
import Card from "../components/Card";

export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState("launch");

  const items = [
    { title: "Business Setup - Freezone" },
    { title: "Vat Registration" },
    { title: "Vat Profile Amendments" },
    { title: "Corporate Tax Registration" },
    { title: "Vat Returns - quarterly" },
    { title: "Basic Books - Annually" },
    { title: "Professional Books & MIS - Monthly" },
    { title: "VAT Consultancy" },
    { title: "Payroll & WPS" },
    { title: "Economic substance regulations (ESR) filling" },
    { title: "License Renewal - Freezone" },
  ];
  return (
    <section className=" max-w-full lg:max-w-[1512px] mx-auto">
       <div className="w-[312px] md:w-[567px] lg:w-[783px] pt-[100px] mx-auto">
        <h2 className="font-semibold text-[35px] lg:text-[70px] md:text-[40px] lg:leading-[90px] leading-[45px]  text-center">
          Transparent Pricing for All Your Needs
        </h2>
      </div>
      <div className="lg:w-[715px] md:w-[415px] w-[318px] lg:h-[28px] h-[56px] text-center mx-auto mt-[12px]">
        <p className="text-[16px] lg:text-[18px] leading-[28px] ">
          We offer clear and upfront pricing to show you what you are paying
          for.
        </p>
      </div>
      <div className="flex justify-between  mt-[90px] cursor-pointer pl-[120px] ">
        <div
          className="lg:w-[479px] md:w-[239px]"
          onClick={() => setSelectedOption("launch")}
        >
          <p
            className={`font-semibold text-[16px] lg:text-[32px] leading-[27px] lg:leading-[45px] ${
              selectedOption === "launch" ? "text-black" : "text-[#707070]"
            }`}
          >
            I want to Launch a New Business
          </p>
        </div>

        <div
          className="lg:w-[479px] md:w-[239px] lg:h-[90px] md:h-[54px]  cursor-pointer"
          onClick={() => setSelectedOption("enhance")}
        >
          <p
            className={`font-semibold text-[16px] lg:text-[32px] md:text-[20px] lg:leading-[45px]  leading-[27px] ${
              selectedOption === "enhance" ? "text-black" : "text-[#707070]"
            }`}
          >
            I want to Enhance my Existing Business
          </p>
        </div>
      </div>

      {/* Transition for the line colors */}
      <div className="flex items-center mt-[25px] justify-center">
        {/* First line */}
         <div
          className={`lg:w-[673px] md:w-[430px] w-[180px] h-[4px] transition-colors duration-500 ${
            selectedOption === "launch" ? "bg-primary" : "bg-[#D9D9D9]"
          } lg:ml-[78px] md:ml-[89px]`}
        ></div>

        {/* Second line */}
         <div
          className={`lg:w-[673px] md:w-[430px] w-[180px] h-[4px] transition-colors duration-500 ${
            selectedOption === "enhance" ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
        ></div>
      </div>   

      <aside className="mt-[56px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-end gap-[26px] justify-center max-w-[1512px] px-[80px]"> 
       <Card />
       <Card active = {true}/>
       <Card />
      </aside>
       <div className="max-w-[1335px] md:h-[927px] px-[80px] mx-auto relative">
        <div
          className="relative group flex items-center justify-center mt-[112px]
      "
        >
          <button className="relative w-[301px] md:w-[384px] h-[45px] md:h-[53px] bg-white rounded-[10px] text-black border-[2px] border-black  group-hover:border-0 font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear">
            <span className="relative z-10 font-semibold md:font-bold text-[15px] md:text-[16px] leading-[22.95px]">
              Compare Packages
            </span>
            <span className="absolute inset-0 bg-primary transition-transform duration-1000 ease-out scale-0 group-hover:scale-400 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
          </button>
        </div>
        <div className="absolute lg:right-[406px] md:right-[190px] right-[180px] mt-[53px] ">
          <h4 className="text-primary border-[1px] border-[#0085FF] inline-block px-[40px] text-[10px] md:text-[14px] lg:rounded-[8px] md:rounded-[12px] rounded-full">
            Most popular
          </h4>
        </div>
        <div className="flex items-center justify-center gap-10 md:gap-[50px] lg:gap-[63px] mt-[106px] md:mt-[120px] lg:mt-[108px] md:ml-[300px] lg:ml-[500px] ">
          <h3 className="w-[110px] md:w-[177px] lg:w-[220px] h-[24px] md:h-[42px] lg:h-[56px] text-[14px] md:text-[16px] lg:text-[24px] leading-[14px] md:leading-[21px] lg:leading-[28px] text-center font-semibold">
            Founders Starter Package{" "}
          </h3>
          <h3 className="w-[95px] md:w-[157px] lg:w-[220px] h-[24px] md:h-[42px] lg:h-[56px]   text-[14px] md:text-[16px] lg:text-[24px] leading-[14px] md:leading-[21px] lg:leading-[28px] text-center font-semibold">
            Business Elite Package{" "}
          </h3>
          <h3 className="w-[88px] md:w-[200px] lg:w-[220px] h-[24px] md:h-[42px] lg:h-[56px]  text-[14px] md:text-[16px] lg:text-[24px] md:leading-[21px] lg:leading-[28px] leading-[14px] text-center font-semibold">
            Incoporation Package{" "}
          </h3>
        </div>
        <div className="  bg-[#CFE8FF] mt-[30px] md:rounded-[8px] lg:rounded-[16px] flex items-center justify-between rounded-t-[8px] pt-[15px] pb-[16px] pl-[37px] pr-[90px]">
          <h4 className="lg:text-[24px] font-medium hidden md:block w-[40%]">
            Price
          </h4>
          <div className="flex items-center justify-between w-[60%]">
            <h4 className="font-bold text-[14px] md:text-[16px] lg:text-[24px] leading-[16px] md:leading-[15px] lg:leading-[28px] bg-green-500">
              $2,885/{" "}
              <span className="md:text-[13px] lg:text-[16px] font-medium">
                Annual
              </span>
            </h4>
            <h4 className="font-bold text-[14px] md:text-[16px] leading-[16px] lg:text-[24px] lg:leading-[28px] text-primary md:leading-[15px] bg-green-500">
              $7,628/{" "}
              <span className=" md:text-[13px] lg:text-[16px] font-medium">
                Annual
              </span>
            </h4>
            <h4 className="font-bold text-[14px] lg:text-[24px] lg:leading-[28px] md:leading-[15px] leading-[16px] md:text-[16px]  bg-green-500">
              $2,885/{" "}
              <span className="md:text-[13px] lg:text-[16px] font-medium">
                Annual
              </span>
            </h4>
          </div>
        </div>
        <div className="  bg-[#b2daff]/10 h-[800px] mt-[24px] rounded-[20px]  overflow-hidden md:overflow-y-scroll hide-scrollbar md:">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row  w-full md:h-[131px] lg:h-[70px] group px-[35px]  ${
                index < items.length - 1 ? "border-b-[1px] border-gray-300" : ""
              }`}
            >
              
               <div className="md:w-[40%] flex items-center  text-[13px] mb-2 md:mb-0 ">
                <p className="group-hover:border-b border-black inline-block ">
                  {item.title}
                </p>
              </div>

              {/* Second Section (w-[60%]) */}
               <div className="flex items-center md:flex-row justify-between w-[60%]">
                {/* First Icon */}
                <div className=" mb-2 md:mb-0 bg-green-400">
                  {index === 0 || index === 6 || index === 10 ? (
                    <GoDash className="w-[24px] h-[24px]" />
                  ) : index === 5 ? (
                    <img
                      src={check}
                      alt="check"
                      className="w-[24px] h-[24px]"
                    />
                  ) : (
                    <img
                      src={check}
                      alt="check"
                      className="w-[24px] h-[24px] "
                    />
                  )}
                </div> 

                {/* Second Icon Section */}
                <div className=" bg-green-400">
                  <div className="">
                    <img
                      src={check}
                      alt="check"
                      className="w-[24px] h-[24px] "
                    />
                  </div>
                </div>
                  <div className="bg-green-400">
                    {index === 1 ||
                    index === 2 ||
                    index === 3 ||
                    index === 4 ||
                    index === 9 ? (
                      <img
                        src={check}
                        alt="check"
                        className="w-[24px] h-[24px]"
                      />
                    ) : (
                      <GoDash className="w-[24px] h-[24px]" />
                    )}
                  </div>
              </div> 
            </div>
          ))}
        </div> 
      </div>  
     <div className="mt-[200px]">
     <Faqitems /></div> 
    </section>
  );
}
