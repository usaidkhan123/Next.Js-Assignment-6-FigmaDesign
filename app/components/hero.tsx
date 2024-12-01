import Image from "next/image";
import codeimage from "@/public/images/Image1.svg";

const Hero = () => {
  return (
    <div className="flex h-[800px] xl:pl-10 max-sm:flex-col max-md:flex-col max-sm:h-auto">
      <div className="md:w-[640px] mt-[250px] max-md:mb-16 max-md:mt-[100px] flex-col justify-center max-sm:h-auto max-sm:pl-[24px] pl-[80px] max-sm:mt-[24px]">
        <h1 className="font-[Roboto] font-bold text-[56px] max-sm:text-[32px] max-sm:leading-[38px] max-sm:-mt-0 leading-[67.2px]">
          Learn new skills <br /> online with ease
        </h1>
        <p className="mt-[24px] font-[Roboto] text-[18px] leading-[27px] max-sm:text-[14px] max-sm:leading-[21px]">
          Discover a wide range of courses covering a <br /> variety of <br className="max-sm:hidden max-md:hidden" />
          subjects taught by expert instructors.
        </p>
        <div className="mt-[24px] max-sm:mt-[16px]">
          <button className="w-[178px] h-[48px] font-[Roboto] text-white text-[16px] rounded-[5px] leading-[24px] bg-black max-sm:w-[150px] max-sm:h-[40px] max-sm:ml-16 max-sm:text-[14px]">
            Start learning now
          </button>
          <button className="w-[164px] h-[48px] ml-[16px] rounded-[5px] text-[16px] border-[1px] border-black leading-[24px] font-[Roboto] max-sm:w-[140px] max-sm:ml-[70px] max-sm:mt-2 max-sm:h-[40px] max-sm:text-[14px] ">
            Explore Courses
          </button>
        </div>
      </div>
      <div className="max-sm:w-full max-sm:mt-[24px] flex justify-center">
        <Image
          src={codeimage}
          alt="hero image"
          width={640}
          height={800}
          className="max-sm:w-screen max-sm:h-auto xl:w-[668px]"
        />
      </div>
    </div>
  );
};

export default Hero;
