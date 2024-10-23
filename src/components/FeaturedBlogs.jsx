import React, { useEffect, useState } from 'react'
import { arrow, arrow1, books1, envelope, facebook1, flash, founder3, gmail, keyboard, keyboard2, linkedin, outlook, phone, rings, roller1, share, smallArrow, virtual, whatsapp, woman, xx } from '../assets/images'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { strapiBaseUrl, websiteName } from '../config'
const FeaturedBlogs = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([])
    const navigate = useNavigate()
    const fetchFeaturedBlogs = () => {
        axios.get(`${strapiBaseUrl}/api/blogs?filters[category][Title][$eq]=${websiteName}&filters[isFeatured][$eq]=true&populate[0]=topic&populate=coverImg&populate=authorImg`).then((res) => {
            setFeaturedBlogs(res.data?.data || []);
            console.log(res.data?.data, "featured blogs from strapi!");

        }).catch(err => {
            console.error('Error fetching fetauredBlogs:', err);
        });
    };
    useEffect(() => {
        fetchFeaturedBlogs()
    }, [])
    return (
        <div>
            <div className='mt-[105px] md:ml-[74px] lg:ml-[84px]'>
                <p className='font-semibold text-[48px] leading-[45px]'>Featured post</p>
            </div>

            {/* Scrollbar */}
            <div className='md:ml-[74px] lg:ml-[84px] mt-[60px]'>
                <div className='overflow-y-auto' style={{ maxHeight: '1200px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style jsx>{`
      /* Hide scrollbar for Chrome, Safari, and Opera */
      .scrollable-container::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE and Edge */
      .scrollable-container {
        -ms-overflow-style: none;  /* IE and Edge */
      }
    `}</style>

                    <div className='scrollable-container'>
                        {featuredBlogs?.map((blog) => (
                            <div key={blog.id} className='flex gap-[44px] mt-[67px] hover:cursor-pointer' onClick={() => navigate(`/blogs/${blog.documentId}`)}>
                                <div className='md:w-[405px] lg:w-[660px] md:h-[377px]'>
                                    <img src={`${strapiBaseUrl}${blog.coverImg?.url}`} alt="" className='w-full h-full object-cover rounded-[15px]' />
                                </div>
                                <div className='md:w-[427px] lg:w-[590px] md:h-[135px] lg:h-[120px] mt-1'>
                                    <p className='font-bold md:text-[40px] lg:text-[48px] md:leading-[45px] lg:leading-[60px] tracking-[-1px] line-clamp-2'>
                                        {blog.blogTitle}
                                    </p>
                                    <div className='mt-[36px] md:w-[427px] lg:w-[590px] md:h-[112px] lg:h-[84px]'>
                                        <p className='text-[18px] leading-[28px] line-clamp-3'>
                                            {blog.blogDesc}
                                        </p>
                                    </div>
                                    <div className='mt-[35px] flex items-center gap-[10px]'>
                                        <img src={`${strapiBaseUrl}${blog.authorImg?.url}`} alt="" className='h-[55px] w-[55px] rounded-full' />
                                        <div>
                                            <p className='font-medium lg:text-[32px] lg:leading-[28px]'>{blog.authorName}</p>
                                            <div className='flex mt-[15px]'>
                                                <p className='font-inter text-[16px] leading-[18px] text-[#8e8e93]'>
                                                    {new Date(blog.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/\//g, '-')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scrollbar */}
            {/* Banner */}
            <div className="relative ">
                <div className="absolute top-0 left-0 w-full h-[500px]"></div>
                <div className="flex justify-center items-center ">
                    <div
                        className="ml-10 md:w-[876px] md:h-[1094px] lg:w-[1246px] lg:h-[655px] bg-gradient-to-b from-[#eaf5ff] to-[#b8ddff] mt-[126px] rounded-[34px]"
                    >
                        <div className="flex  justify-center md:w-[800px] lg:w-[1000px] text-center mx-auto">
                            <h3 className="font-bold mt-[35px] md:text-[36px] lg:text-[45px]">
                                <span className="text-primary">
                                    {" "}
                                    Experience Fast, Transparent,
                                </span>{" "}
                                and Hassle-
                                <span className="gradient-text">Free Business Setup</span>
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center md:mt-[28px] lg:mt-[24px]">
                            <div className="flex gap-4 ">
                                <div className="relative group">
                                    <button
                                        onClick={() =>
                                            (window.location.href = "https://dev.1tapbiz.com/signup")
                                        }
                                        className="relative w-[150.7px] h-[53px] bg-black rounded-[15px] text-white font-medium flex items-center justify-center gap-[8px] overflow-hidden"
                                    >
                                        <span className="relative z-10">Get Started</span>
                                        <img src={arrow} alt="" className="relative z-10" />

                                        {/* Hover effect using a pseudo element */}
                                        <span className="absolute inset-0 bg-primary transition-transform duration-700 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                                    </button>
                                </div>
                                <div className="group">
                                    <button className="relative w-[192.7px] h-[53px] bg-white rounded-[15px] text-black border-[3px] border-black  group-hover:border-0 font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear">
                                        <span className="relative z-10">Free consultation</span>
                                        <img
                                            src={arrow1}
                                            alt=""
                                            className="relative z-10 filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                                        />
                                        <span className="absolute inset-0 bg-primary transition-transform duration-500 ease-out scale-0 group-hover:scale-150 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4">
                            <div className="w-[320px] h-[320px] bg-gradient-to-bl from-[#F2F8FF] to-[#BBDEFF] drop-shadow-lg rounded-[30px] md:mx-[110px] lg:-mx-[64px] md:mt-[87px] lg:mt-[120px] overflow-hidden">
                                <div className="flex flex-col justify-center items-center">
                                    <h3 className="text-center mt-[60px] font-semibold text-[32px] leading-[45px]">
                                        <span className="text-primary">Technology</span>-Driven
                                    </h3>
                                    <img src={roller1} alt="" className="mt-3 w-[235px]" />
                                </div>
                            </div>
                            <div className="w-[320px] h-[320px] bg-white rounded-[30px] md:mx-[10px] lg:-mx-[32px] md:mt-[87px] lg:mt-[48px] drop-shadow-lg">
                                <div className="flex flex-col-reverse justify-center items-center">
                                    <h3 className="text-[32px] font-semibold ml-3.5 leading-[45px] mt-[40px]">
                                        Fast &<span className="text-primary"> User-Driven</span>{" "}
                                        Process
                                    </h3>
                                    <img src={flash} alt="" className="mt-[65px]" />
                                </div>
                            </div>
                            <div className="w-[320px] h-[320px] bg-gradient-to-tr from-[#BBDEFF] to-[#F2F9FF] rounded-[30px] drop-shadow-lg md:mt-[16px] lg:mt-[120px] md:mx-[110px] lg:mx-0">
                                <div className="flex justify-center items-center mt-[64px]">
                                    <h3 className="text-[32px] leading-[45px] font-semibold"><span className="text-primary">24/7</span> Support</h3>
                                </div>
                                <div className="flex">
                                    <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center ml-[86px] mt-[54px] relative">
                                        <div className="w-[13px] h-[13px] bg-gradient-to-b from-[#FFFFFF] to-[#2E95F4] rounded-full absolute -top-[1px] -left-[5px]"></div>
                                        <div className="w-[13px] h-[13px] bg-white rounded-full absolute -top-[10px] left-[100px]"></div>
                                        <img src={gmail} alt="" />
                                    </div>
                                    <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center ml-[119px] mt-[54px]">
                                        <img src={outlook} alt="" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center ml-[31px] mt-[21px] relative">
                                        <div className="w-[13px] h-[13px] bg-white rounded-full absolute -bottom-[30px] left-[85px]"></div>
                                        <div className="w-[13px] h-[13px] bg-gradient-to-b from-[#FFFFFF] to-[#2E95F4] rounded-full absolute -bottom-[5px] -right-[213px]"></div>
                                        <img src={phone} alt="" />
                                    </div>
                                    <div className="w-[39px] h-[39px] bg-white rounded-full flex items-center justify-center ml-[70px] mt-[22px]">
                                        <img src={envelope} alt="" />
                                    </div>
                                    <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center ml-[54px] mt-[27.45px]">
                                        <img src={whatsapp} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[320px] h-[320px] bg-white rounded-[30px] md:mx-[10px] md:mt-[16px] lg:mx-[32px] lg:mt-[48px] drop-shadow-lg">
                                <div>
                                    <img src={smallArrow} alt="" className="mt-[70px]" />
                                    <h3 className="font-bold text-[32px] leading-[60px] tracking-[-1px] text-center"><span className="text-primary">End-toEnd</span> Support</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner */}

        </div>
    )
}

export default FeaturedBlogs