import Image from 'next/image';
import svg1 from '@/public/images/Vectors.svg'
import svg3 from '@/public/images/pic3.svg'
import svg2 from '@/public/images/pic1.svg'
import svg6 from '@/public/images/pic6.svg'
import dot from '@/public/images/Dot.svg'
import dot2 from '@/public/images/Dotb.svg'
import arrow from '@/public/images/Button1.svg'
import arrow2 from '@/public/images/Button.svg'


const Customer = () => {
  return (
      <div className=" bg-custom h-[830.89px] xl:w-screen max-md:mt-96  max-sm:pt-[50px] pt-[112px] max-sm:pl-0 max-md:pl-0 pl-[64px]">
          <h1 className=" text-[48px] max-sm:text-[32px] xl:ml-20 font-bold max-sm:text-center max-md:text-center leading-[57.6px] font-[Roboto]">
              Customer testimonials
          </h1>
          <p className="text-[18px] leading-[27px] mt-[24px] max-md:text-center xl:ml-20 max-sm:text-center font-[Roboto]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
          <div className="flex max-sm:flex-col max-sm:space-y-[32px] space-x-[21.33px] xl:items-center xl:justify-center mt-[80px]">
              <div className=" sm:w-[362.67px] h-[321.89px] border-[1px] border-black pt-[32px] pl-[32px] pr-[32px]">
                  <div className="flex max-sm:justify-center">
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                  </div>
                  <p className="mt-[32px] text-[18px] max-sm:text-center">
                      Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit. <br />
                      Suspendisse varius enim in eros <span className='max-sm:hidden'><br/> elementum tristique. Duis cursus
                      mi <br /> quis viverra ornare.</span> 
                  </p>
                  <div className="flex mt-[20px] max-sm:flex-col max-sm:items-center">
                      <Image
                          src={svg3}
                          alt="hero image"
                          width={56}
                          height={56}
                          className="rounded-[30px]"
                      />
                      <div className="flex-col pl-[20px] max-sm:pl-0 max-sm:mt-[10px] max-sm:text-center">
                          <h1 className="font-semibold text-[16px] leading-[24px] font-[Roboto]">
                              James Nduku
                          </h1>
                          <p className="text-[16px] leading-[24px] font-[Roboto]">
                              Software Developer
                          </p>
                      </div>
                  </div>
              </div>
              <div className="w-[362.67px] h-[321.89px] max-sm:w-full   border-[1px] max-sm:hidden border-black pt-[32px] pl-[32px] pr-[32px]">
                  <div className="flex space-x-1">
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                  </div>
                  <p className="mt-[32px] text-[18px]">
                      Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit. <br />
                      Suspendisse varius enim in eros <br  /> elementum tristique. Duis cursus
                      mi <br /> quis viverra ornare.
                  </p>
                  <div className="flex mt-[20px]">
                      <Image
                          src={svg2}
                          alt="hero image"
                          width={56}
                          height={56}
                          className="rounded-[30px]"
                      />
                      <div className="flex-col pl-[20px]">
                          <h1 className="font-semibold text-[16px] leading-[24px] font-[Roboto]">
                              Erick Kipkemboi
                          </h1>
                          <p className="text-[16px] leading-[24px] font-[Roboto]">
                              Scrum Master
                          </p>
                      </div>
                  </div>
              </div>
              <div className="w-[362.67px] h-[321.89px] border-[1px] max-sm:hidden max-md:hidden border-black pt-[32px] pl-[32px]">
                  <div className="flex space-x-1">
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                      <Image src={svg1} alt="hero image" width={20} height={18.89} />
                  </div>
                  <p className="mt-[32px] text-[18px]">
                      Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit. <br />
                      Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus
                      mi <br /> quis viverra ornare.
                  </p>
                  <div className="flex mt-[20px]">
                      <Image
                          src={svg6}
                          alt="hero image"
                          width={56}
                          height={56}
                          className="rounded-[30px]"
                      />
                      <div className="flex-col pl-[20px]">
                          <h1 className="font-semibold text-[16px] leading-[24px] font-[Roboto]">
                              Stephen Kerubo
                          </h1>
                          <p className="text-[16px] leading-[24px] font-[Roboto]">
                              UI/UX Designer
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex max-sm:justify-center max-sm:flex-wrap space-x-[8px] mt-[100px] ">
              <Image src={dot2} alt="hero image" width={8} height={8} />
              <Image src={dot} alt="hero image" width={8} height={8} />
              <Image src={dot} alt="hero image" width={8} height={8} />
              <Image src={dot} alt="hero image" width={8} height={8} />
              <Image src={dot} alt="hero image" width={8} height={8} />
              <div className="flex space-x-[15px] max-sm:mt-[24px]">
                  <Image
                      src={arrow}
                      alt="hero image"
                      width={48}
                      height={48}
                      className="ml-[940px] max-sm:ml-[100px] max-md:ml-[550px]"
                  />
                  <Image src={arrow2} alt="hero image" width={48} height={48} />
              </div>
          </div>
      </div>
  );
};
export default Customer;
