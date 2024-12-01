const Achievement = () => {
  return (
    <div className="h-[488px] pt-[112px] max-sm:pt-[64px]">
      <h1 className="font-bold text-[48px] max-sm:text-[32px] leading-[57.6px] text-center font-[Roboto]">
        Our Achievements
      </h1>

      <p className="font-[Roboto] mt-[24px] text-[18px] max-sm:text-[14px] text-center leading-[27px] max-sm:leading-[21px] max-sm:px-[16px]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        <span className="max-sm:hidden">
          Duis cursus mi quis viverra <br /> ornare. Eros dolor interdum nulla ut commodo diam libero vitae erat.
        </span>
      </p>

   
    <div className="flex justify-center sm:space-x-32  max-sm:flex-col max-sm:flex-wrap max-sm:justify-center mt-[32px]">
      <div className="max-sm:flex max-sm:space-x-8">
        <div className="flex flex-col items-center max-sm:w-[50%]">
          <h3 className="font-[Roboto] text-[40px] max-sm:text-[20px] font-bold">+200</h3>
          <p className="text-[16px] max-sm:text-[14px] font-[Roboto] leading-[24px] max-sm:leading-[21px]">
            Courses
          </p>
        </div>

       
        <div className="flex flex-col items-center max-sm:w-[50%]">
          <h3 className="font-[Roboto] text-[40px] max-sm:text-[20px] font-bold">50K</h3>
          <p className="text-[16px] max-sm:text-[14px] font-[Roboto] leading-[24px] max-sm:leading-[21px]">
            Mentors
          </p>
        </div>
        </div>

         <div className="max-sm:flex max-sm:space-x-8">
        <div className="flex flex-col items-center max-sm:w-[50%] max-sm:mt-[16px]">
          <h3 className="font-[Roboto] text-[40px] max-sm:text-[20px] font-bold">370K</h3>
          <p className="text-[16px] max-sm:text-[14px] font-[Roboto] leading-[24px] max-sm:leading-[21px]">
            Students
          </p>
        </div>

 
        <div className="flex flex-col items-center max-sm:w-[50%] max-sm:mt-[16px]">
          <h3 className="font-[Roboto] text-[40px] max-sm:text-[20px] font-bold">100+</h3>
          <p className="text-[16px] max-sm:text-[14px] font-[Roboto] leading-[24px] max-sm:leading-[21px]">
            Recognition
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
