import Image from "next/image";
import image from '@/public/images/Frame 1.svg'
import svg1 from '@/public/images/Vectori.svg'
import svg2 from '@/public/images/Facebook.svg'
import svg3 from '@/public/images/LinkedIn.svg'
import svg4 from '@/public/images/Vector.svg'
const Footer = () => {
    return (
        <div className="h-[684px] max-sm:h-[1622px] pt-[80px] pl-[80px] pr-[80px] font-[Roboto] mt-[100px] max-sm:pl-4 max-sm:pr-4">
            <div className="h-[225px]  flex max-sm:flex-col max-md:flex-col max-sm:w-full">
                <div className="flex-col max-sm:ml-4">
                    <h1 className="text-[18px] leading-[27px] max-md:text-center font-semibold max-sm:text-left max-sm:ml-0">
                        Subscribe to our newsletter
                    </h1>
                    <p className="text-[16px] leading-[24px] max-md:text-center max-sm:text-left max-sm:mt-[16px] max-sm:ml-0">
                        Lorem ipsum dolor sit amet <br className="sm:hidden" /> consectetur adipiscing elit.
                    </p>
                </div>
                <div className="ml-[360px] max-sm:flex-col  max-md:ml-0 max-sm:ml-0">
                    <div className="flex max-md:flex-col">
                    <button className="w-[265px] h-[48px] border-black text-left pl-[8px] rounded-[5px] border-[1px] max-sm:ml-0 max-md:ml-[180px] max-md:mt-4 text-[16px] max-sm:mt-[24px] leading-[24px]">
                        Enter your email
                    </button>
                    <div className="  max-sm:mt-2">
                        <button className="w-[119px] max-sm:w-full h-[48px] rounded-[5px] border-[1px]  border-black text-[16px] leading-[24px] max-md:ml-[240px] ml-[16px] max-md:mt-2 max-sm:ml-0">
                            Subscribe
                        </button>
                       </div> 
                    </div>
                    <div className="flex-col">
                        <p className="text-[12px] leading-[18px] max-sm:ml-0 max-md:ml-44 mt-[8px]">
                            By subscribing you agree to with our
                            <span className="underline"> Privacy Policy </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className=" h-[225px] max-sm:mt-40 max-md:mt-14 flex gap-2  max-sm:flex-col max-sm:pl-4 max-sm:pr-4">
                <div className="w-[250px] flex h-[40px] mb-6 max-sm:mb-12 max-sm:justify-center">
                    <Image src={image} alt="" />
                    <p className="font-bold text-[25.07px] font-[Inter] leading-[30.34px] pt-[14.465px] max-sm:ml-2">
                        Ddsgnr
                    </p>
                </div>

                <div className="w-[250px] h-[225px] flex flex-col max-sm:text-center gap-[16px]">
                    <p className="text-[16px] leading-[24px] font-semibold">Courses</p>
                    <p className="text-[14px] leading-[21px]">Business</p>
                    <p className="text-[14px] leading-[21px]">Development</p>
                    <p className="text-[14px] leading-[21px]">Technology</p>
                    <p className="text-[14px] leading-[21px]">Design</p>
                    <p className="text-[14px] leading-[21px]">Programming</p>
                </div>
                <div className="w-[250px] h-[225px] flex flex-col max-sm:text-center gap-[16px]">
                    <p className="text-[16px] leading-[24px] font-semibold">Resources</p>
                    <p className="text-[14px] leading-[21px]">Career</p>
                    <p className="text-[14px] leading-[21px]">Resume</p>
                    <p className="text-[14px] leading-[21px]">Learning</p>
                    <p className="text-[14px] leading-[21px]">Interview Preparation</p>
                    <p className="text-[14px] leading-[21px]">Jobs</p>
                </div>
                <div className="w-[250px] h-[225px] flex flex-col max-sm:text-center gap-[16px]">
                    <p className="text-[16px] leading-[24px] font-semibold">About Us</p>
                    <p className="text-[14px] leading-[21px]">Contact</p>
                    <p className="text-[14px] leading-[21px]">Help/Support</p>
                    <p className="text-[14px] leading-[21px]">FAQ</p>
                    <p className="text-[14px] leading-[21px]">Terms and Conditions</p>
                    <p className="text-[14px] leading-[21px]">Partners</p>
                </div>
            </div>

            <div className=" h-[57px] flex max-sm:flex-col  border-solid max-sm:mt-[550px]  border-black border-t-[2px] pt-[33px]">
                <div className="h-[24px] flex flex-wrap gap-4  justify-between items-center  max-md:flex-col max-sm:gap-2">
                    <p className="text-[14px] leading-[21px] max-sm:text-center">2023 Ddsgnr. All right reserved.</p>
                    </div>
                    <div className="flex gap-4 max-sm:flex-col max-sm:mt-2 ml-10 max-sm:items-center">
                        <p className="text-[14px] leading-[21px] underline">Privacy Policy</p>
                        <p className="text-[14px] leading-[21px] underline">Terms Of Service</p>
                        <p className="text-[14px] leading-[21px] underline">Cookies Settings</p>
                </div>
                <div className="flex w-[132px] h-[24px] max-sm:ml-24 max-sm:mt-2 ml-96 items-center  max-md:ml-20 ">
                    <div className="h-[24px] w-[24px] flex justify-center items-center mr-[12px]">
                        <Image className="" src={svg2} alt="" />
                    </div>
                    <div className="h-[24px] w-[24px] flex justify-center items-center mr-[12px]">
                        <Image className="" src={svg1} alt="" />
                    </div>
                    <div className="h-[24px] w-[24px] flex justify-center items-center mr-[12px]">
                        <Image className="" src={svg3} alt="" />
                    </div>
                    <div className="h-[24px] w-[24px] flex justify-center items-center">
                        <Image className="" src={svg4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
