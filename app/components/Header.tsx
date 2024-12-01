import Image from "next/image";
import image from "@/public/images/Frame 1.svg";
import svg1 from "@/public/images/Facebook.svg";
import svg2 from "@/public/images/LinkedIn.svg";
import svg3 from "@/public/images/Vector.svg";
import svg4 from "@/public/images/Vectori.svg";

const Header = () => {
  return (
    <div>
      <div className="flex max-lg:hidden pl-[64px] bg-custom h-[54px] lg:w-screen max-sm:hidden">
        <p className="text-[14px] font-normal leading-[21px] font-[Roboto] pt-[20px]">
          Phone Number: 956 742 455 678
        </p>
        <p className="text-[14px] font-normal leading-[21px] font-[Roboto] pl-[16px] pt-[20px]">
          Email: info@ddsgnr.com
        </p>
        <div className="flex space-x-[12px] ml-[700px] xl:ml-[750px]">
          <Image src={svg1} alt="hero image" />
          <Image src={svg4} alt="hero image" />
          <Image src={svg3} alt="hero image" />
          <Image src={svg2} alt="hero image" />
        </div>
      </div>
      <div className="bg-custom mt-4 max-sm:mt-0 max-md:mt-0 h-[54px] lg:w-screen flex items-center justify-between px-4 max-sm:px-2">
        <div className="flex items-center">
          <Image
            src={image}
            alt="hero image"
            width={32.58}
            height={30.38}
            className="ml-[64px] max-sm:ml-0"
          />
          <p className="font-bold text-[25.07px] font-[Inter] leading-[30.34px] pt-[14.465px] max-sm:pt-0 max-sm:text-[20px]">
            Ddsgnr
          </p>
        </div>
        <div className="h-[44px] w-[910px] xl:ml-[130px] bg-white mt-[5px] max-sm:hidden max-md:hidden flex list-none">
          <ul className="list-none flex space-x-[59px] mt-[12px] text-[16px] leading-[24px] font-[Roboto] pl-[20px]">
            <li>Home</li>
            <li>Courses</li>
            <li>Services</li>
            <li>Achievement</li>
            <li>About Us</li>
            <li>Testimonial</li>
          </ul>
          <button className="ml-[32px] w-[80px] h-[40px] border-[1px] rounded-[5px] text-[16px] leading-[24px] font-[Roboto] border-black mt-[2px]">
            Login
          </button>
          <button className="ml-[16px] w-[95px] h-[40px] border-[1px] rounded-[5px] text-[16px] leading-[24px] font-[Roboto] border-black bg-black text-white mt-[2px]">
            Sign Up
          </button>
        </div>
        <div className="md:hidden  max-sm:flex">
          <button className="text-black w-[48px] h-[48px] focus:outline-none">
            ☰
          </button>
        </div>
      </div>

    </div>
  );
};

export default Header;
