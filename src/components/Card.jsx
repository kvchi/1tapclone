import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export default function Card({active = false}) {
  return (
    <div className={`${active ? "bg-primary rounded-[12px] relative pl-[6px] pr-[7px] pb-[8px] pt-[50px] md:col-span-2 lg:col-span-1" : "bg-[#dff0ff] pl-[6px] pr-[7px] py-[8px] rounded-[12px] "}`}>
    <div className="  bg-white lg:rounded-[12px]  md:rounded-[23px] h-full  rounded-[8px] lg:mr-0 p-6">
      {active &&<div className="absolute top-[14px]  left-0 right-0 text-center text-[20px] text-white font-bold z-10">
        Most Popular
      </div>}
      <div className="">
        <h3 className="font-semibold text-[30px] leading-[45px]">
          Business Elite Package
        </h3>
      </div>
      <div className=" mt-[19px]">
        <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[28px]">
          Elevate yourbusiness with premium services including dedicated
          consultancy and support.
        </p>
      </div>
      <div className="mt-[12px]">
        <p className="font-semibold text-[32px] md:text-[36px] leading-[37.5px]">
          $4,999/
          <span className="font-normal text-[20px] lg:leading-[23.44px] md:leading-[56px]">
            {" "}
            Annual
          </span>
        </p>
      </div>
      <div className={`${active ? "w-[100%] h-[48px] mt-[45px] rounded-[10px] flex items-center justify-center md:bg-primary md:border-0 mx-auto text-white": "text-black font-medium lg:text-[16px] md:text-[24px] flex items-center justify-center leading-[22.95px] border-black border-[2px] rounded-[12px] mt-[45px] w-[100%] h-[48px]"}`}>
        <button className=" ">
          Get Started
        </button>
      </div>
      <div className="mt-[34px]">
        <ul className="flex gap-[13px] items-center">
          <IoMdCheckmarkCircleOutline className="w-[25px] h-[25px]" />
          <p className="text-[16px] leading-[28px]">
            Expert Consultation
          </p>
        </ul>
        <ul className="flex gap-[13px] items-center mt-[19px]">
          <IoMdCheckmarkCircleOutline className="w-[25px] h-[25px]" />
          <p className="text-[16px] leading-[28px]">Formation Filings</p>
        </ul>
        <ul className="flex gap-[13px] items-center mt-[19px]">
          <IoMdCheckmarkCircleOutline className="w-[25px] h-[25px]" />
          <p className="text-[16px] leading-[28px]">
            Annual State Filings
          </p>
        </ul>
        <ul className="flex gap-[13px] items-center mt-[19px]">
          <IoMdCheckmarkCircleOutline className="w-[25px] h-[25px]" />
          <p className="text-[16px] leading-[28px]">
            Business bank account opening
          </p>
        </ul>
      </div>
    </div>
  </div>
  )
}
