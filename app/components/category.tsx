import Image from "next/image";
import svg1 from "@/public/images/pen-tool-2.svg";
import svg2 from "@/public/images/volume-high.svg";
import svg3 from "@/public/images/group.svg";
import svg4 from "@/public/images/microphone.svg";
import svg5 from "@/public/images/link.svg";
import svg6 from "@/public/images/arrow-2.svg";
import svg7 from "@/public/images/Frame 292.svg";
import svg8 from "@/public/images/book1.svg";
import svg9 from "@/public/images/book.svg";

const Category = () => {
  return (
    <div className="pt-[112px] pb-[100px] max-sm:pt-[64px]">
      <div className="text-center">
        <h1 className="font-bold text-[48px] max-sm:text-[32px] max-sm:leading-[41.6px] leading-[57.6px] font-[Roboto]">
          Explore Courses By <br className="sm:hidden" /> Category
        </h1>
        <p className="mt-[24px] text-[18px] max-sm:text-[14px] leading-[27px] max-sm:px-[16px] font-[Roboto]">
          Discover a wide range of courses covering a variety of subjects taught by expert instructors.
        </p>
      </div>
      <div className="mt-[64px] flex flex-wrap justify-center gap-[24px] max-sm:gap-[16px] max-sm:px-[16px]">
        <div className="w-[410.67px] max-sm:w-full h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg1} alt="Design & Development" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px] leading-[30px] font-[Roboto]">Design & Development</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
        <div className="w-[410.67px] max-sm:w-full h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg2} alt="Marketing" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px] leading-[30px] font-[Roboto]">Marketing</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
        <div className="w-[410.67px] max-sm:w-full h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg3} alt="Development" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px] leading-[30px] font-[Roboto]">Development</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
        <div className="w-[410.67px] max-sm:hidden h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg4} alt="Communication" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px] leading-[30px] font-[Roboto]">Communication</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
        <div className="w-[410.67px] max-sm:hidden  h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg5} alt="Digital Marketing" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px]  leading-[30px] font-[Roboto]">Digital Marketing</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
        <div className="w-[410.67px] max-sm:hidden  h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg6} alt="Self Development" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px] leading-[30px] font-[Roboto]">Self Development</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
        <div className="w-[410.67px] max-sm:hidden  h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg7} alt="Business" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px] leading-[30px] font-[Roboto]">Business</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
        <div className="w-[410.67px] max-sm:hidden  h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg8} alt="Finance" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px] leading-[30px] font-[Roboto]">Finance</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
        <div className="w-[410.67px] max-sm:hidden  h-[132px] flex bg-custom rounded-[5px]">
          <div className="w-[100px] h-[100px] flex justify-center items-center ml-[16px] mt-[16px] bg-white rounded-[5px]">
            <Image src={svg9} alt="Consulting" width={32} height={32} />
          </div>
          <div className="ml-[32px] mt-[24px]">
            <p className="font-semibold text-[20px] leading-[30px] font-[Roboto]">Consulting</p>
            <p className="text-[18px] max-sm:text-[14px] leading-[27px] font-[Roboto]">50+ Courses Available</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[100px]">
        <button className="font-[Roboto] w-[155px] h-[48px] text-[16px] leading-[24px] rounded-[5px] border-black border-[1px]">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Category;
