import Image from "next/image";
import logo from "@/public/images/Logo.svg";
import logo2 from "@/public/images/logo2.svg";
import logo3 from "@/public/images/logo3.svg";
import logo4 from "@/public/images/logo4.svg";
import logo5 from "@/public/images/logo5.svg";
import logo6 from "@/public/images/logo6.svg";

const Hero2 = () => {
  return (
    <div className="bg-custom max-md:flex-col h-[228px] max-sm:mt-2 xl:w-screen max-sm:h-auto xl:mt-10  pt-[80px] max-md:pt-[40px] max-md:mt-[450px] flex max-sm:flex-col max-sm:items-start">
      
      <p className="font-[Roboto] text-[24px] max-sm:text-[18px] max-sm:ml-2 ml-2 max-md:ml-36 font-bold leading-[33.6px] max-sm:leading-[26px]">
        Trusted by 2000+ companies <br className="max-sm:hidden max-md:hidden" />
        worldwide.
      </p>
      <div className="space-x-[30px] flex ml-[64px] max-sm:ml-0 max-sm:mt-[24px] max-md:mt-10 max-sm:space-x-0  max-sm:flex-wrap max-sm:gap-4 max-sm:justify-start">
        <Image
          src={logo}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:h-[33.34px] max-sm:w-[107.15px]"
        />
        <Image
          src={logo2}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:h-[33.34px] max-sm:w-[107.15px]"
        />
        <Image
          src={logo3}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:hidden"
        />
        <Image
          src={logo4}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:hidden"
        />
        <Image
          src={logo5}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:hidden max-md:hidden"
        />
        <Image
          src={logo6}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:hidden max-md:hidden"
        />
      </div>
    </div>
  );
};

export default Hero2;
