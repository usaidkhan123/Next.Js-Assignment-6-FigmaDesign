import Image from 'next/image'
import svg1 from '@/public/images/Image2.svg'
import svg2 from '@/public/images/Image3.svg'
import svg3 from '@/public/images/Image4.svg'
import svg4 from '@/public/images/Image5.svg'
import svg5 from '@/public/images/Image6.svg'
import svg6 from '@/public/images/Image7.svg'
import svg7 from '@/public/images/Star 1.svg'
const Courses = () => {
    return (
        <div className="h-[1742px] font-[Roboto]">
           <h1 className="text-[56px] max-sm:text-[32px] leading-[67.2px] max-sm:leading-[41.6px] font-bold mt-[112px] text-center">
  Courses
</h1>
<p className="mt-[16px] text-[18px] text-center leading-[27px]">
  Your Ultimate Guide to learning
</p>
<div className="mt-[102px] flex gap-[34px] justify-center max-sm:flex max-sm:gap-[16px]">
  <p className="text-[16px] font-[Roboto] leading-[24px]">Popular</p>
  <p className="text-[16px] font-[Roboto] leading-[24px]">Recommended</p>
  <p className="text-[16px] font-[Roboto] leading-[24px]">Best Price</p>
</div>

<div className="mt-[64px] flex max-sm:flex-col max-md:flex-col xl:items-center xl:justify-center max-md:items-center max-md:justify-center  max-sm:items-center  gap-[16px]">
  <div className="flex-col max-sm:w-full">
    <Image
      src={svg1}
      alt="hero image"
      width={416}
      height={300}
    />
    <div className="h-[210px] w-[416px]  bg-custom pl-[16px] max-sm:w-full">
      <div className="flex max-sm:flex">
        <p className="text-[14px] leading-[21px] font-semibold font-[Roboto]">Design</p>
        <div className="ml-auto max-sm:ml-52">
          <Image
            src={svg7}
            alt="hero image"
            width={24}
            height={24}
            className=" m"
          />
        </div>
        <p className="text-[14px] leading-[21px] font-semibold mt-[2px] ml-[5px] font-[Roboto]">5.0</p>
      </div>
      <div>
        <h1 className="font-bold font-[Roboto] text-[24px] leading-[33.2px] mt-[8px]">
          UX/UI Design 201
        </h1>
        <p className="text-[16px] leading-[24px] font-[Roboto] mt-[8px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex mt-[16px] max-sm:flex-col gap-[16px]">
          <button className="text-[16px] leading-[24px] font-[Roboto] rounded-[5px] bg-custom w-[117px]  border-[1px] border-black h-[40px] max-sm:w-full">
            Enroll Now
          </button>
          <button className="text-[16px] leading-[24px] font-[Roboto] font-semibold ml-[16px] h-[40px] w-[77px] max-sm:w-full max-sm:ml-0">
            $400
          </button>
        </div>
      </div>
    </div>
  </div>


  <div className="flex-col max-sm:w-full">
    <Image
      src={svg2}
      alt="hero image"
      width={416}
      height={300}
    />
    <div className="h-[210px] w-[416px] bg-custom pl-[16px] max-sm:w-full">
      <div className="flex max-sm:flex">
        <p className="text-[14px] leading-[21px] font-semibold font-[Roboto]">Programming</p>
        <div className="ml-auto max-sm:ml-44">
          <Image
            src={svg7}
            alt="hero image"
            width={24}
            height={24}
            className=""
          />
        </div>
        <p className="text-[14px] leading-[21px] font-semibold mt-[2px] ml-[5px] font-[Roboto]">5.0</p>
      </div>
      <div>
        <h1 className="font-bold font-[Roboto] text-[24px] leading-[33.2px] mt-[8px]">
          Introduction to Python
        </h1>
        <p className="text-[16px] leading-[24px] font-[Roboto] mt-[8px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex mt-[16px] max-sm:flex-col gap-[16px]">
          <button className="text-[16px] leading-[24px] font-[Roboto] rounded-[5px] bg-custom w-[117px] border-[1px] border-black h-[40px] max-sm:w-full">
            Enroll Now
          </button>
          <button className="text-[16px] leading-[24px] font-[Roboto] font-semibold ml-[16px] h-[40px] w-[77px] max-sm:w-full max-sm:ml-0">
            $400
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="flex-col max-sm:w-full">
    <Image
      src={svg3}
      alt="hero image"
      width={416}
      height={300}
    />
    <div className="h-[210px] w-[416px] bg-custom pl-[16px] max-sm:w-full">
      <div className="flex max-sm:flex">
        <p className="text-[14px] leading-[21px] font-semibold font-[Roboto]">Business</p>
        <div className="ml-auto">
          <Image
            src={svg7}
            alt="hero image"
            width={24}
            height={24}
            className=" "
          />
        </div>
        <p className="text-[14px] leading-[21px] font-semibold mt-[2px] ml-[5px] font-[Roboto]">5.0</p>
      </div>
      <div>
        <h1 className="font-bold font-[Roboto] text-[24px] leading-[33.2px] mt-[8px]">
          Data Analysis for Beginners
        </h1>
        <p className="text-[16px] leading-[24px] font-[Roboto] mt-[8px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex mt-[16px] max-sm:flex-col gap-[16px]">
          <button className="text-[16px] leading-[24px] font-[Roboto] rounded-[5px] bg-custom w-[117px] border-[1px] border-black h-[40px] max-sm:w-full">
            Enroll Now
          </button>
          <button className="text-[16px] leading-[24px] font-[Roboto] font-semibold ml-[16px] h-[40px] w-[77px] max-sm:hidden max-sm:ml-0">
            $400
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
            <div className=' mt-[64px] flex gap-[16px] xl:tems-center xl:justify-center max-sm:hidden max-md:hidden '>
            <Image
            src={svg4}
            alt="hero image"
            width={416}
            height={300} 
          /> 
          <Image
            src={svg5}
            alt="hero image"
            width={416}
            height={300} 
          />
          <Image
            src={svg6}
            alt="hero image"
            width={416}
            height={300} 
          />
            </div>
            <div className=' gap-[16px] flex xl:tems-center xl:justify-center max-sm:hidden max-md:hidden'>
                <div className=' h-[210px] w-[416px] bg-custom  pl-[16px]'>
                  <div className='flex'>
                    <p className=' text-[14px] leading[21px] font-semibold  font-[Roboto]'>Art</p>
                    
                    <div>
                    <Image
            src={svg7}
            alt="hero image"
            width={24}
            height={24} 
            className='ml-[300px]'
          />   
          </div>
          <p className=' text-[14px] leading[21px]  font-semibold mt-[2px] ml-[5px]  font-[Roboto]'>5.0</p>  
           </div>
           <div>
            <h1 className=' font-bold font-[Roboto] text-[24px] leading-[33.2px]  mt-[8px]'>Art Specialization</h1>
            <p className=' text-[16px] leading-[24px] font-[Roboto] mt-[8px]'>Lorem ipsum dolor sit amet  consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className=' flex mt-[16px]'>
            <button className=' text-[16px] leading-[24px] font-[Roboto] rounded-[5px]  bg-custom w-[117px] border-[1px] border-black h-[40px] '>Enroll Now</button>
            <button className=' text-[16px] leading-[24px] font-[Roboto] font-semibold ml-[16px] h-[40px] w-[77px] '>$400</button>
            </div>
            </div>
            </div>
                <div className=' h-[210px] w-[416px] bg-custom pl-[16px]'>  
                         <div className='flex '>
                    <p className=' text-[14px] leading[21px] font-semibold  font-[Roboto]'>Rule</p>
                    
                    <div>
                    <Image
            src={svg7}
            alt="hero image"
            width={24}
            height={24} 
            className='ml-[250px]'
          />   
          </div>
          <p className=' text-[14px] leading[21px]  font-semibold mt-[2px] ml-[5px]  font-[Roboto]'>5.0</p>  
           </div>
           <div>
            <h1 className=' font-bold font-[Roboto] text-[24px] leading-[33.2px]  mt-[8px]'>Rule of Law</h1>
            <p className=' text-[16px] leading-[24px] font-[Roboto] mt-[8px]'>Lorem ipsum dolor sit amet  consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className=' flex mt-[16px]'>
            <button className=' text-[16px] leading-[24px] font-[Roboto] rounded-[5px]  bg-custom w-[117px] border-[1px] border-black h-[40px] '>Enroll Now</button>
            <button className=' text-[16px] leading-[24px] font-[Roboto] font-semibold ml-[16px] h-[40px] w-[77px] '>$400</button>
            </div>
            </div>
            </div>
                <div className=' h-[210px] w-[416px] bg-custom pl-[16px]'>
                <div className='flex'>
                    <p className=' text-[14px] leading[21px] font-semibold  font-[Roboto]'>Tech</p>
                    
                    <div>
                    <Image
            src={svg7}
            alt="hero image"
            width={24}
            height={24} 
            className='ml-[290px]'
          />   
          </div>
          <p className=' text-[14px] leading[21px]  font-semibold mt-[2px] ml-[5px]  font-[Roboto]'>5.0</p>  
           </div>
           <div>
            <h1 className=' font-bold font-[Roboto] text-[24px] leading-[33.2px]  mt-[8px]'>Introduction to webflow</h1>
            <p className=' text-[16px] leading-[24px] font-[Roboto] mt-[8px]'>Lorem ipsum dolor sit amet  consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className=' flex mt-[16px]'>
            <button className=' text-[16px] leading-[24px] font-[Roboto] rounded-[5px]  bg-custom w-[117px] border-[1px] border-black h-[40px] '>Enroll Now</button>
            <button className=' text-[16px] leading-[24px] font-[Roboto] font-semibold ml-[16px] h-[40px] w-[77px] '>$400</button>
            </div>
            </div>
                </div>
            </div>
            <button className="font-[Roboto] ml-[600px] mt-[100px] w-[155px] max-md:ml-[300px] h-[48px] max-sm:ml-[100px] text-[16px] leading-[24px] rounded-[5px] border-black border-[1px]">View All Courses</button>
  
        </div>
    )
}
export default Courses;