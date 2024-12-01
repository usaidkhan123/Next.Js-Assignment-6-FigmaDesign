import Image from "next/image";
import svg1 from '@/public/images/pic1.svg'
import svg2 from '@/public/images/pic2.svg'
import svg3 from '@/public/images/pic3.svg'
import svg4 from '@/public/images/pic4.svg'
import svg5 from '@/public/images/pic5.svg'
import svg6 from '@/public/images/pic6.svg'
import svg7 from '@/public/images/LinkedIn.svg'
import svg8 from '@/public/images/Vector1.svg'
import svg9 from '@/public/images/Vector2.svg'


const Team = () => {
  return (
      <div className="h-[895px] max-sm:h-[1200px] items-center justify-center max-md:mt-96 xl:w-screen xl:tems-center xl:justify-center bg-custom max-sm:mt-96 pt-[112px]">
          <h1 className="text-center max-sm:text-center text-[48px] max-md:justify-center max-md:items-center font-[Roboto] leading-[57.6px] font-bold">
              Our team
          </h1>
          <p className="mt-[24px] text-center text-[18px] max-md:justify-center max-md:items-center leading-[27px] font-[Roboto]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>

          <div className="flex flex-wrap max-sm:flex-col max-md:justify-center max-md:items-center max-sm:items-center max-sm:justify-center">
              <div className="sm:w-[394.67px] h-[273px] max-sm:w-full max-sm:mt-[40px] text-center sm:ml-[31.99px] mt-[80px]">
                  <Image
                      src={svg1}
                      alt="hero image"
                      width={80}
                      height={80}
                      className="sm:ml-[157.335px] max-sm:mx-auto"
                  />
                  <h1 className="text-[20px] leading-[30px] font-[Roboto] font-semibold mt-[24px]">
                      James Nduku
                  </h1>
                  <p className="text-[18px] leading-[27px] font-[Roboto]">Marketing Coordinator</p>
                  <div className="flex items-center justify-center space-x-[14px] mt-[24px]">
                      <Image src={svg7} alt="hero image" width={24} height={24} />
                      <Image src={svg8} alt="hero image" width={24} height={24} />
                      <Image src={svg9} alt="hero image" width={24} height={24} />
                  </div>
              </div>

              <div className="sm:w-[394.67px] h-[273px] max-sm:w-full max-sm:mt-[40px] text-center sm:ml-[31.99px] mt-[80px]">
                  <Image
                      src={svg2}
                      alt="hero image"
                      width={80}
                      height={80}
                      className="sm:ml-[157.335px] max-sm:mx-auto"
                  />
                  <h1 className="text-[20px] leading-[30px] font-[Roboto] font-semibold mt-[24px]">
                      Joseph Munyambu
                  </h1>
                  <p className="text-[18px] leading-[27px] font-[Roboto]">Nursing Assistant</p>
                  <div className="flex items-center justify-center space-x-[14px] mt-[24px]">
                      <Image src={svg7} alt="hero image" width={24} height={24} />
                      <Image src={svg8} alt="hero image" width={24} height={24} />
                      <Image src={svg9} alt="hero image" width={24} height={24} />
                  </div>
              </div>
              <div className="sm:w-[394.67px] h-[273px] max-sm:w-full max-sm:mt-[40px] text-center sm:ml-[31.99px] mt-[80px]">
                  <Image
                      src={svg3}
                      alt="hero image"
                      width={80}
                      height={80}
                      className="sm:ml-[157.335px] max-sm:mx-auto"
                  />
                  <h1 className="text-[20px] leading-[30px] font-[Roboto] font-semibold mt-[24px]">
                      Joseph Munyambu
                  </h1>
                  <p className="text-[18px] leading-[27px] font-[Roboto]">Medical Assistant</p>
                  <div className="flex items-center justify-center space-x-[14px] mt-[24px]">
                      <Image src={svg7} alt="hero image" width={24} height={24} />
                      <Image src={svg8} alt="hero image" width={24} height={24} />
                      <Image src={svg9} alt="hero image" width={24} height={24} />
                  </div>
              </div>
          </div>
          <div className="flex max-sm:hidden max-md:hidden">
              <div className="w-[394.67px] h-[273px] text-center ml-[31.99px] mt-[80px]">
                  <Image
                      src={svg4}
                      alt="hero image"
                      width={80}
                      height={80}
                      className="ml-[157.335px]"
                  />
                  <h1 className="text-[20px] leading-[30px] font-[Roboto] font-semibold mt-[24px]">
                      Erick Kipkemboi
                  </h1>
                  <p className="text-[18px] leading-[27px] font-[Roboto]">Web Designer</p>
                  <div className="flex items-center justify-center space-x-[14px] mt-[24px]">
                      <Image src={svg7} alt="hero image" width={24} height={24} />
                      <Image src={svg8} alt="hero image" width={24} height={24} />
                      <Image src={svg9} alt="hero image" width={24} height={24} />
                  </div>
              </div>
              <div className="w-[394.67px] h-[273px] text-center ml-[31.99px] mt-[80px]">
                  <Image
                      src={svg5}
                      alt="hero image"
                      width={80}
                      height={80}
                      className="ml-[157.335px]"
                  />
                  <h1 className="text-[20px] leading-[30px] font-[Roboto] font-semibold mt-[24px]">
                      Stephen Kerubo
                  </h1>
                  <p className="text-[18px] leading-[27px] font-[Roboto]">President of Sales</p>
                  <div className="flex items-center justify-center space-x-[14px] mt-[24px]">
                      <Image src={svg7} alt="hero image" width={24} height={24} />
                      <Image src={svg8} alt="hero image" width={24} height={24} />
                      <Image src={svg9} alt="hero image" width={24} height={24} />
                  </div>
              </div>
              <div className="w-[394.67px] h-[273px] text-center ml-[31.99px] mt-[80px]">
                  <Image
                      src={svg6}
                      alt="hero image"
                      width={80}
                      height={80}
                      className="ml-[157.335px]"
                  />
                  <h1 className="text-[20px] leading-[30px] font-[Roboto] font-semibold mt-[24px]">
                      John Leboo
                  </h1>
                  <p className="text-[18px] leading-[27px] font-[Roboto]">Dog Trainer</p>
                  <div className="flex items-center justify-center space-x-[14px] mt-[24px]">
                      <Image src={svg7} alt="hero image" width={24} height={24} />
                      <Image src={svg8} alt="hero image" width={24} height={24} />
                      <Image src={svg9} alt="hero image" width={24} height={24} />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Team;
