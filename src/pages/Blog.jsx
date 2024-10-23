import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { arrow, arrow1, envelope, flash, gmail, outlook, phone, roller1, search, smallArrow, whatsapp } from '../assets/images'
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import { strapiBaseUrl, websiteName } from '../config';

export default function Blog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [topics, setTopics] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchBlogs = () => {
    axios.get(`${strapiBaseUrl}/api/blogs?filters[category][Title][$eq]=${websiteName}&populate[0]=topic&populate=coverImg&populate=authorImg`).then((res) => {
      setBlogs(res.data?.data || []);
      setFilteredBlogs(res.data?.data || []);
    }).catch(err => {
      console.error('Error fetching blogs:', err);
    });
  };

  const fetchTopics = () => {
    axios.get(`${strapiBaseUrl}/api/topics?filters[category][Title][$eq]=1Tap.biz`).then((res) => {
      setTopics(res.data?.data || []);
    }).catch(err => {
      console.error('Error fetching topics:', err);
    });
  };

  useEffect(() => {
    fetchBlogs();
    fetchTopics();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset visible count
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setVisibleCount(6); // Reset visible count
  };

  const filterBlogs = () => {
    const trimmedQuery = searchQuery.trim(); // Trim whitespace from the search query
    const filtered = blogs.filter(blog => {
      const matchesCategory = activeCategory === 'All' || blog.topic.title === activeCategory;
      const matchesQuery =
        trimmedQuery === '' || // Allow empty trimmed query
        blog.blogTitle.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        blog.blogDesc.toLowerCase().includes(trimmedQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
    setFilteredBlogs(filtered);
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  
    return (
      <section className='mt-[100px]'>
        <div className='md:w-[600px] lg:w-[1000px] md:h-[90px] lg:h-[227px] flex justify-center items-center container mx-auto'>
          <h2 className='font-bold md:text-[40px] lg:text-[70px] md:leading-[45px] lg:leading-[90px] text-center gradient-text'>
            1Tap Knowledge Base: Empowering your business
          </h2>
        </div>

      <div className='flex items-center justify-center'>
        <div className='relative md:mt-[35px] lg:mt-[40px]'>
          <img src={search} alt="" className='absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6' />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Search'
            className='md:w-[550px] lg:w-[621px] md:h-[62px] lg:h-[70px] border border-[#0085FF] rounded-[14px] pl-[60px]'
          />
        </div>
      </div>

      {/* the blog categories */}
      <div className='flex flex-wrap items-center gap-4 mt-[51px]'>
        <p className='md:text-[16px] lg:text-[24px] mx-2 md:ml-[53px] md:leading-[18.75px] lg:leading-[28px] md:w-full lg:w-auto'>
          Filter by categories:
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:w-full lg:w-auto">
          <div
            onClick={() => {
              handleCategoryClick('All')
              setFilteredBlogs(blogs)
            }}
            className={`px-6 py-3 rounded-[14px] font-normal lg:text-[18px] cursor-pointer transition-all duration-300 ${activeCategory === 'All' ? 'bg-primary text-white' : 'bg-[#E5F2FF] text-black'
              }`}

          >
            All
          </div>
          {topics?.map((topic) => (
            <div
              key={topic.id}
              className={`px-6 py-3 rounded-[14px] font-normal lg:text-[18px] cursor-pointer transition-all duration-300 ${activeCategory === topic.title ? 'bg-primary text-white' : 'bg-[#E5F2FF] text-black'
                }`}
              onClick={() => handleCategoryClick(topic.title)} // Set the active category on
            >
              {topic.title}
            </div>
          ))}
        </div>
      </div>



      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[40px] mx-[84px] md:gap-[30px] lg:gap-y-[200px] mb-[162px]'>
        {filteredBlogs.slice(0, visibleCount).map(blog => (
          <div key={blog.id} className='hover:cursor-pointer mt-10' onClick={() => navigate(`/blogs/${blog.documentId}`)}>
            <div className='max-w-[432px] max-h-[300px]  w-full h-full'>
              <img src={`${strapiBaseUrl}${blog.coverImg?.url}`} className='object-cover  w-full h-full rounded-lg' alt="" />
            </div>

            <div className='lg:w-[390px] lg:h-[74px] mt-[14px]'>
              <h4 className='font-inter font-semibold lg:text-[32px] lg:leading-[37px] line-clamp-2'>{blog.blogTitle}</h4>
              <div className='w-[305px]'>
                <p className='mt-[14px] lg:text-[18px] lg:leading-[28px] line-clamp-2'>{blog.blogDesc}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <img src={`${strapiBaseUrl}${blog.authorImg?.url}`} alt="" className='w-[56px] h-[56px] rounded-[50%] mt-[22px]' />
                <div className='flex flex-col pt-[24px]'>
                  <p className='lg:text-[18px] lg:leading-[28px]'>{blog.authorName}
                  </p>
                  <p className='lg:text-[14px] lg:leading-[28px] font-light text-[#8e8e93]'>{new Date(blog.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/\//g, '-')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {visibleCount < filteredBlogs.length && (
        <div className='flex items-center justify-center'>
          <button onClick={loadMore} className='w-[151px] h-[60px] bg-black mt-[62px] rounded-[15px] text-white flex items-center justify-center gap-3'>
            Load More
            <IoIosArrowDown />
          </button>
        </div>
      )}
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
    </section>
  );
}
