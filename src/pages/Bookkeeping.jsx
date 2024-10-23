import React, { useEffect, useState } from 'react'
import { arrow, arrow1, books1, envelope, facebook1, flash, founder3, gmail, keyboard, keyboard2, linkedin, outlook, phone, rings, roller1, share, smallArrow, virtual, whatsapp, woman, xx } from '../assets/images'
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import FeaturedBlogs from '../components/FeaturedBlogs';
import { strapiBaseUrl, websiteUrl } from '../config';
const bookkeepingData = [
  "Financial Clarity: Keeping track of every transaction provides a clear picture of where your money is going. This allows you to easily monitor profits and identify areas where you can cut costs.",
  "Tax Compliance: Proper bookkeeping ensures that all income and expenses are recorded, making tax time smoother and reducing the risk of costly mistakes or penalties from inaccurate filings.",
  "Informed Decision-Making: Up-to-date financial records help business owners make strategic decisions based on real data. Whether it's deciding to invest in new equipment or hire more staff, good bookkeeping provides the insights needed for smart choices.",
  "Cash Flow Management: Knowing how much cash you have on hand helps you avoid shortfalls. Good bookkeeping allows you to keep track of receivables and payables to maintain a healthy cash flow."
];

function bookkeeping() {
  const [blog, setBlog] = useState([])
  const { id } = useParams()
  const fetchBlog = () => {
    axios.get(`${strapiBaseUrl}/api/blogs/${id}?populate=*`).then((res) => {
      console.log('blog from strapi:', res.data);
      setBlog(res.data?.data)

    }).catch((err) => {
      console.log('Error fetching blog from strapi:', err);

    })
  }
  useEffect(() => {
    fetchBlog()
  }, [id])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])
  return (
    <section>
      <div className='mt-[110px] ml-[26px] md:ml-[74px] lg:ml-[84px] flex gap-[4.5px] items-center'>
        <p className='font-medium text-[24px] leading-[33px]'>Blog</p>
        <MdKeyboardArrowRight />
        <p className='font-medium text-[24px] leading-[33px]'>{blog?.topic?.title}</p>

      </div>
      <div className='md:w-[791px] md:h-[90px] lg:w-[1344px] lg:h-[180px] md:ml-[74px] lg:ml-[84px] mt-[35px]'>
        <h2 className='md:font-semibold lg:font-bold md:text-[40px] lg:text-[70px] md lg:leading-[90px]'>
          {blog?.blogTitle}
        </h2>
      </div>
      <div className='flex items-center justify-between'>
        <div className='ml-[84px] mt-[35px] flex items-center gap-[10px]'>
          <img src={`${strapiBaseUrl}${blog.authorImg?.url}`} alt="" className='h-[83px] w-[83px] rounded-full' />
          <div>
            <p className='font-medium lg:text-[32px] lg:leading-[28px]'>{blog?.authorName}</p>
            <div className='flex mt-[15px]'>
              <p className='font-inter text-[16px] leading-[18px] text-[#8e8e93]'>{new Date(blog?.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/\//g, '-')}</p>
              {/* <p className='ml-3 font-inter text-[16px] leading-[18px] text-[#8e8e93]'> 5 min read</p> */}
            </div>
          </div>
        </div>
        <div className='flex items-center gap-[16px] mr-[84px]'>
          {/* <img src={share} alt="" /> */}
          <FacebookShareButton url={`${websiteUrl}/blog/${id}`}>
            <img src={facebook1} alt="" />

          </FacebookShareButton>
          <TwitterShareButton url={`${websiteUrl}/blog/${id}`}>
            <img src={xx} alt="" />

          </TwitterShareButton>
          <LinkedinShareButton url={`${websiteUrl}/blog/${id}`}>
            <img src={linkedin} alt="" />

          </LinkedinShareButton>
        </div>
      </div>
      <div className='md:mx-[74px] lg:mx-[84px] mt-[63px] max-w-[1280px]'>
        <img src={`${strapiBaseUrl}${blog.coverImg?.url}`} alt="" className='hidden w-full md:hidden lg:block rounded-xl' />
        <img src={keyboard2} alt="" className='hidden md:block lg:hidden' />
      </div>
      <div className='md:ml-[74px] lg:ml-[84px] md:w-[705px] lg:w-[1100px] md:h-[90px] lg:h-[180px] mt-[101px]'>
        <h2 className='font-bold md:text-[40px] lg:text-[70px] md:leading-[45px] lg:leading-[90px] '>
          {blog.blogDesc}
        </h2>
      </div>


      {/* <div className='md:w-[720px] lg:w-[1000px] md:h-[112px] lg:h-[84px] md:ml-[74px] lg:ml-[84px] mt-[47px]'>
        <p className='lg:text-[18px] md:leading-[28px]'>
          Bookkeeping is the backbone of any succeddful business, regardless of its size. For small businesses,it&apos;s especially crucial as it ensures that financial records are accurate,organized,and up-to-date.Good bookkeepin helps business owners track their income and expenses,monitor cash flow,and make informed decisions that drive growth.
        </p>
      </div> */}
      {/* <div className='md:w-[784px] lg:w-[1012px] md:h-[364px] lg:h-[280px] ml-[84px] mt-[42px]'>
        <p className='font-normal text-[18px] leading-[28px]'>
          {bookkeepingData.map((item, index) => (
            <span key={index} className='flex'>
              <span className='mr-2'>{index + 1}.</span>
              <span style={{ minWidth: '0', flex: '1' }}>{item}</span>
            </span>
          ))}
        </p>
      </div> */}

      {/* <div className='md:ml-[74px] lg:ml-[84px] mt-[87px] md:w-[871px]'>
        <img src={woman} alt="" />
      </div> */}
      {/* <div className='md:ml-[74px] lg:ml-[84px] mt-[65px] md:w-[775px] lg:w-[1012px] md:h-[84px] lg:h-[56px]'>
        <p className='text-[18px] leading-[28px]'>
          In conclusion, bookkeeping isn&apos;t just aabout keeping records-it&apos;s about empowering small businesses to grow and succeed. With the right financial tracking in place, you can confidently focus on what matters most: building your business.
        </p>
      </div> */}
      <div>
        {/* BlogContent */}
        <div className='md:w-[720px] lg:w-[1000px]  md:ml-[74px] lg:ml-[84px] mt-[47px]'>
          <Markdown className={'line-break'}>
            {blog?.blogContent}
          </Markdown>
        </div>
        {/* BlogContent */}
      </div>
      <div className='flex items-center justify-center container mx-auto w-[293px] h-[28px] mt-[91px]'>
        <p className='font-semibold lg:text-[18px] lg:leading-[28px]'>Share this post</p>
      </div>
      <div className='flex items-center gap-[16px] justify-center mt-[17px] container mx-auto'>
        <FacebookShareButton url={`${websiteUrl}/blog/${id}`}>
          <img src={facebook1} alt="" />

        </FacebookShareButton>
        <TwitterShareButton url={`${websiteUrl}/blog/${id}`}>
          <img src={xx} alt="" />

        </TwitterShareButton>
        <LinkedinShareButton url={`${websiteUrl}/blog/${id}`}>
          <img src={linkedin} alt="" />

        </LinkedinShareButton>
      </div>
      <div className=' mt-[35px] flex flex-col items-center justify-center gap-[10px]'>
        <img src={`${strapiBaseUrl}${blog.authorImg?.url}`} alt="" className='h-[83px] w-[83px] rounded-full' />
        <p className='font-semibold text-[32px] leading-[28px]'>
          {blog?.authorName}
        </p>
      </div>
      {/* Featured Blogs */}
      <FeaturedBlogs />
      {/* Featured Blogs */}

    </section>
  )
}

export default bookkeeping