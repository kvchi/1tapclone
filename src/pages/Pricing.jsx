import {useState} from 'react'
import Faqitems from '../components/Faqitems';
import { GoDash } from "react-icons/go";
import {  check } from '../assets/images';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';



export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState('launch');

  const items = [
    { title: 'Business Setup - Freezone' },
    { title: 'Vat Registration' },
    { title: 'Vat Profile Amendments' },
    { title: 'Corporate Tax Registration' },
    { title: 'Vat Returns - quarterly' },
    { title: 'Basic Books - Annually' },
    { title: 'Professional Books & MIS - Monthly' },
    { title: 'VAT Consultancy' },
    { title: 'Payroll & WPS' },
    { title: 'Economic substance regulations (ESR) filling' },
    { title: 'License Renewal - Freezone' },
  ];
  return (
    <section className='max-w-[1512px] mx-auto'>
       
      <div className='lg:w-[783px] md:w-[567px] w-[318px] lg:h-[180px] md:h-[90px] h-[135px] container mx-auto lg:mt-[200px] md:mt-[100px] relative'>
        <h2 className='lg:font-bold md:font-semibold lg:text-[70px] md:text-[40px] lg:leading-[90px] md:leading-[45px]  text-center'>
          Transparent Pricing for All Your Needs
        </h2>
        <div className='lg:w-[715px] md:w-[415px] w-[318px] lg:h-[28px] h-[56px]  text-center container mx-auto mt-[12px]'>
          <p className='text-[18px] leading-[28px] '>
            We offer clear and upfront pricing to show you what you are paying for.
          </p>
        </div>
      </div>
      <div className='flex justify-between lg:mt-[123px] md:mt-[150px] cursor-pointer'>
  <div 
    className='lg:w-[479px] md:w-[239px] lg:h-[90px] md:h-[54px] lg:ml-[78px] md:ml-[89px]'
    onClick={() => setSelectedOption('launch')}  
  >
    <p className={`font-semibold lg:text-[32px] md:text-[20px] lg:leading-[45px] md:leading-[27px] ${selectedOption === 'launch' ? 'text-black' : 'text-[#707070]'}`}>
      I want to Launch a New Business
    </p>
  </div>
  
  <div 
    className='lg:w-[479px] md:w-[239px] lg:h-[90px] md:h-[54px] lg:mr-[261px] md:mr-[215px] cursor-pointer'
    onClick={() => setSelectedOption('enhance')}
  >
    <p className={`font-semibold lg:text-[32px] md:text-[20px] lg:leading-[45px] md:leading-[27px] ${selectedOption === 'enhance' ? 'text-black' : 'text-[#707070]'}`}>
      I want to Enhance my Existing Business
    </p>
  </div>
</div>

{/* Transition for the line colors */}
<div className='flex items-center lg:mt-[31px] md:mt-[27px]'>
  {/* First line */}
  <div className={`lg:w-[673px] md:w-[430px] h-[4px] transition-colors duration-500 ${selectedOption === 'launch' ? 'bg-primary' : 'bg-[#D9D9D9]'} lg:ml-[78px] md:ml-[89px]`}></div>
  
  {/* Second line */}
  <div className={`lg:w-[673px] md:w-[430px] h-[4px] transition-colors duration-500 ${selectedOption === 'enhance' ? 'bg-primary' : 'bg-[#D9D9D9]'}`}></div>
</div>


      <aside className='mt-[56px] ml-[80px] flex lg:flex-row md:flex-row md:flex-wrap items-center gap-[26px]'>
         <div className='lg:w-[428px] md:w-[424px] lg:h-[530px] md:h-[644px] bg-white border-[8px] rounded-[12px] border-[#dff0ff] lg:mt-[78px] md:order-2 md:row-start-2'>
          <div className='mt-[27.5px] lg:`ml-[20px] md:ml-[35px] lg:w-[374px] md:w-[316px] lg:h-[45px] md:h-[80px]'>
            <h3 className='font-semibold text-[30px] leading-[45px]'>Founders Starter Package</h3>
            <div className='lg:w-[384px] lg:h-[56px] mt-[19px]'>
              <p className='lg:text-[18px] leading-[28px]'>
                Elevate yourbusiness with premium services including dedicated consultancy and support.
              </p>
            </div>
            <div className='lg:w-[174px] md:w-[188px] lg:h-[38px] md:h-[56px] mt-[12px]'>
              <p className='font-semibold lg:text-[32px] md:text-[36px] leading-[37.5px]'>
                $2,999/<span className='font-normal text-[20px] lg:leading-[23.44px] md:leading-[56px]'> Annual</span>
              </p>
            </div>
            <div className='lg:w-[375px] md:w-[316px] lg:h-[48px] md:h-[67px] mt-[34px]  rounded-[10px]  flex items-center justify-center md:ml-[5px] lg:ml-[-15px]'>
            <button className="relative w-[145px] md:w-[375px] h-[45px]  rounded-[10px] text-[#0085FF]  group-hover:border-0 flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear border-primary border-[2px]">
              <span className="relative z-10 font-semibold md:font-medium text-[14px] md:text-[16px] leading-[22.95px]">Get Started</span> 
              <span className="absolute inset-0 bg-primary transition-transform duration-1000 ease-out scale-0 group-hover:scale-500 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </button>
            </div>
            <div className='mt-[34px]'>
                <ul className='flex gap-[13px] items-center'>
                <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px]' />
                <p className='text-[18px] leading-[28px]'>Expert Consultation</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px]' />
                <p className='text-[18px] leading-[28px]'>Formation Filings</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px]' />
                <p className='text-[18px] leading-[28px]'>Annual State Filings</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px]' />
                <p className='text-[18px] leading-[28px]'>Business bank account opening</p>
                </ul>
            </div>
          </div>
         </div>
         <div className='relative lg:w-[444px] md:w-[879px] lg:h-[585px] md:h-[749px] bg-white lg:rounded-[12px] md:rounded-[23px] border-primary lg:border-[8px] md:border-[20px] lg:border-t-[47px] md:border-t-[60px] lg:mt-[23px] md:mr-[78px] lg:mr-0 md:order-1 lg:order-2'>
           <div className="absolute lg:top-[-35px] md:top-[-50px] left-0 right-0 text-center lg:text-[18px] md:text-[32px] text-white font-bold ">
             Most Popular
           </div>
           <div className='lg:w-[374px] md:w-[774px] lg:h-[45px] md:h-[40px] lg:mx-[22px] md:mx-[35px] mt-[37px]'>
            <p className='font-semibold md:text-[32px] leading-[45px]'>
              Business Elite Package
            </p>
           </div>
           <div className='lg:w-[384px] md:w-[774px] lg:h-[56px] md:h-[48px] mt-[19px] lg:mx-auto md:mx-[35px]'>
              <p className='lg:text-[18px] md:text-[16px] leading-[28px]'>
                Elevate your business with premium services including dedicated consultancy and support.
              </p>
            </div>
            <div className='lg:w-[174px] lg:h-[38px] lg:mt-[12px] md:mt-[23px] lg:mx-[22px] md:mx-[35px]'>
              <p className='font-semibold lg:text-[32px] md:text-[48px] lg:leading-[37.5px] md:leading-[56.25px]'>
                $4,999/<span className='font-normal text-[20px] leading-[23.44px]'>Annual</span>
              </p>
            </div>
            <div className='lg:w-[375px] md:w-[774px] lg:h-[48px] md:h-[67px] mt-[45px] rounded-[10px] flex items-center justify-center bg-primary lg:mx-[22px] md:mx-[35px]'>
              <button className='text-white font-medium lg:text-[16px] md:text-[24px] leading-[22.95px]'>Get Started</button>
            </div>
            <div className='mt-[34px] lg:mx-[22px] md:mx-[35px]'>
                <ul className='flex gap-[13px] items-center'>
                <IoMdCheckmarkCircleOutline className='lg:w-[25px] md:w-[30px] lg:h-[25px] md:h-[30px]' />
                <p className='lg:text-[18px] md:text-[24px] leading-[28px]'>Expert Consultation</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='lg:w-[25px] md:w-[30px] lg:h-[25px] md:h-[30px]' />
                <p className='lg:text-[18px] md:text-[24px] leading-[28px]'>Formation Filings</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='lg:w-[25px] md:w-[30px] lg:h-[25px] md:h-[30px]' />
                <p className='lg:text-[18px] md:text-[24px] leading-[28px]'>Annual State Filings</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='lg:w-[25px] md:w-[30px] lg:h-[25px] md:h-[30px]' />
                <p className='lg:text-[18px] md:text-[24px] leading-[28px]'>Business bank account opening</p>
                </ul>
            </div>
          </div>

          <div className='lg:w-[428px] md:w-[424px] lg:h-[530px] md:h-[644px] bg-white border-[8px] rounded-[12px] border-[#dff0ff] lg:mt-[78px] md:order-2'>
          <div className='mt-[27.5px] lg:`ml-[20px] md:ml-[35px] lg:w-[374px] md:w-[316px] lg:h-[45px] md:h-[80px]'>
            <h3 className='font-semibold text-[29px] leading-[45px]'> Incorporation Package</h3>
            <div className='lg:w-[384px] lg:h-[56px] mt-[19px]'>
              <p className='lg:text-[18px] leading-[28px]'>
                Elevate yourbusiness with premium services including dedicated consultancy and support.
              </p>
            </div>
            <div className='lg:w-[174px] md:w-[188px] lg:h-[38px] md:h-[56px] mt-[12px]'>
              <p className='font-semibold lg:text-[32px] md:text-[36px] leading-[37.5px]'>
                $999/<span className='font-normal text-[20px] leading-[23.44px]'>Annual</span>
              </p>
            </div>
            <div className='lg:w-[375px] md:w-[316px] lg:h-[48px] md:h-[67px] mt-[34px]  rounded-[10px]  flex items-center justify-center md:ml-[5px] lg:ml-[-15px]'>
            <button className="relative w-[145px] md:w-[375px] h-[45px]  rounded-[10px] text-[#0085FF]  group-hover:border-0 flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear border-primary border-[2px]">
              <span className="relative z-10 font-semibold md:font-medium text-[14px] md:text-[16px] leading-[22.95px]">Get Started</span> 
              <span className="absolute inset-0 bg-primary transition-transform duration-1000 ease-out scale-0 group-hover:scale-500 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </button>
            </div>
            <div className='mt-[34px]'>
                <ul className='flex gap-[13px] items-center'>
                <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px]' />
                <p className='text-[18px] leading-[28px]'>Expert Consultation</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px]' />
                <p className='text-[18px] leading-[28px]'>Formation Filings</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px]' />
                <p className='text-[18px] leading-[28px]'>Annual State Filings</p>
                </ul>
                <ul className='flex gap-[13px] items-center mt-[19px]'>
                <IoMdCheckmarkCircleOutline className='w-[25px] h-[25px]' />
                <p className='text-[18px] leading-[28px]'>Business bank account opening</p>
                </ul>
            </div>
          </div>
         </div>
      </aside>
      <div className='lg:w-[1335px] lg:h-[1255px] container mx-auto relative'>
      <div className="relative group flex items-center justify-center mt-[100px]
      ">
            <button className="relative w-[145px] md:w-[384px] h-[45px] md:h-[53px] bg-white rounded-[10px] text-black border-[2px] border-black  group-hover:border-0 font-medium flex items-center justify-center gap-[8px] overflow-hidden group hover:text-white transition-all duration-300 ease-linear">
              <span className="relative z-10 font-semibold md:font-bold text-[14px] md:text-[16px] leading-[22.95px]">Compare Packages</span> 
              <span className="absolute inset-0 bg-primary transition-transform duration-1000 ease-out scale-0 group-hover:scale-400 origin-center rounded-[50%] z-0 opacity-20 group-hover:opacity-100 h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </button>
          </div>
        <div className='absolute lg:right-[406px] md:right-[190px] mt-[74px]'>
          <h4 className='text-primary border-[1px]  border-[#0085FF] inline-block px-[5px] py-[1px] text-[14px] lg:rounded-[8px] md:rounded-[12px] rounded-full'>Most popular</h4></div>
          <div className='flex items-center md:gap-[50px] lg:gap-[63px] md:mt-[120px] lg:mt-[108px] md:ml-[300px] lg:ml-[500px]'>
            <h3 className='md:w-[177px] lg:w-[220px] md:h-[42px] lg:h-[56px] md:text-[16px] lg:text-[24px] md:leading-[21px] lg:leading-[28px] text-center'>Founders Starter Package </h3>
            <h3 className='md:w-[157px] lg:w-[220px] md:h-[42px] lg:h-[56px] md:text-[16px] lg:text-[24px] md:leading-[21px] lg:leading-[28px] text-center'>Business Elite Package </h3>
            <h3 className='md:w-[200px] lg:w-[220px] md:h-[42px] lg:h-[56px] md:text-[16px] lg:text-[24px] md:leading-[21px] lg:leading-[28px] text-center'>Core Compliance Package </h3>
          </div>
          <div className='md:w-[907px] lg:w-full md:h-[60px] lg:h-[70px] bg-[#CFE8FF] mt-[30px] md:rounded-[8px] lg:rounded-[16px] md:-ml-[60px] lg:-ml-0 flex items-center md:gap-[296px] lg:gap-[445px]'>
              <h4 className='lg:text-[24px] ml-[35px] font-medium'>Price</h4>
              <div className='flex items-center md:gap-[103px] lg:gap-[200px]'>
                <h4 className='font-bold md:text-[16px] lg:text-[24px] md:leading-[15px] lg:leading-[28px]'>$2,885/ <span className='md:text-[13px] lg:text-[16px] font-medium'>Annual</span></h4>
                <h4 className='font-bold md:text-[16px] lg:text-[24px] lg:leading-[28px] text-primary md:leading-[15px] md:-ml-[60px]'>$7,628/ <span className=' md:text-[13px] lg:text-[16px] font-medium'>Annual</span></h4>
                <h4 className='font-bold lg:text-[24px] lg:leading-[28px] md:leading-[15px] md:text-[16px] md:-ml-[30px]'>$2,885/ <span className='md:text-[13px] lg:text-[16px] font-medium'>Annual</span></h4>
              </div>
          </div>
          <div className='md:w-[924px] md:h-[933px] lg:w-[1335px] lg:h-[800px] bg-[#b2daff]/10 mt-[24px] rounded-[20px] p-4 md:-ml-[70px] lg:ml-0 overflow-hidden md:overflow-y-scroll hide-scrollbar '>
  {items.map((item, index) => (
    <div 
      key={index}
      className={`flex items-center w-full md:h-[131px] lg:h-[70px] group ${index < items.length - 1 ? 'border-b-[1px] border-gray-300' : ''}`}
    >
      <div className='w-[40%] '>
        <p className='group-hover:border-b border-black inline-block'>{item.title}</p>
      </div>
      <div className='w-[60%] flex justify-between px-[100px] max-w-full md:-ml-[50px]'> 
        <div>
          {index === 0 || index === 6 || index === 10 ? (
            <GoDash className='w-[30px] h-[30px]' />
          ) : index === 5 ? (
            <img src={check} alt="check" />
          ) : (
            <p className='text-center -ml-[60px]'>Up to 4 Employee</p>
          )}
        </div>

        <div className='flex items-center md:gap-[100px] lg:gap-[230px]'>
          <div><img src={check} alt="" /></div>
          <div className=''>
            {index === 1 || index === 2 || index === 3 || index === 4 || index === 9 ? (
              <img src={check} alt="" />
            ) : (
              <GoDash className="w-[40px] h-[40px]" />
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
      <Faqitems />
    </section>
  )
}

