import { useEffect, useState } from "react";
import { ArrowDiagonalTopRight, ArrowDropDownLine, BaselineCalendarMonth, CarDoor, GearboxSquare, TravelLuggageAndBagsRounded, User20Solid } from "../../icons/icons";
import List from "../generals/components/list/List";
import SelectList from "../generals/components/list/SelectList";
type carsImageType = {
  price?: number;
  name?: string;
  image: string;
};
function Image1() {
  const carsImgs= "/carRent%20images/slider/2.jpg"
   

  return (
    <section 
    style={{
        backgroundImage: `url("${carsImgs}")`,
       
      }}
      data-overlay-dark="6"
    className=" bg-cover bg-center flex justify-center items-center
          bg-img min-h-screen py-[120px] relative z-3 ">
     
        <CaroucelBodySlide2/>
    
     
    </section>
  );
}

export default Image1;

export const CaroucelBodySlide2 = () => {
  return (
  
     
        <div className="  z-2 relative mx-auto  container  px-5 flex max-md:flex-col justify-between ">
          <div className="text-white  flex justify-center flex-col max-md:my-8 ">
          <h6 className="text-xs text-primary tracking-[6px] uppercase font-light ">* Premium</h6>
            <h1 className={`font-outfit  testFont  `}>
              Rental Car
            </h1>
            <h5 className={` text-[17px]  font-light my-[15px]`} >
            You can rent any of our luxurious cars.
            </h5>
            <div className={`title  `}>
              <button
                className={`my-[15px] delay-700 transition-all flex items-center gap-1 justify-center hover:border-white hover:bg-white rounded-4xl bg-[var(--primary)]
                 text-black text-sm font-light py-[17px] px-[42px] border border-[var(--primary)]`}>
                View Details
                <ArrowDiagonalTopRight/>
              </button>
             
            </div>
          </div>
          <Carspecs/>
        </div>
   
  );
};

export const Carspecs = ()=>{
    return(
        <div className={`relative z-2   min-md:max-w-[400px]  duration-[.3s]  w-full rounded-lg h-full   p-[35px_20px]   bg-[var(--formBg)]
        animatetext-regtext`}>
                    <form  action="" className='image1Landing w-full grid grid-cols-2 gap-4'>       
                        <span className='rounded-3xl h-16 dark:bg-[#222] bg-white  relative col-span-2   '> <SelectList styles={{ marginBottom:"0px",backGroundColor:'red' }} text="ChooseCar Type" icon={<ArrowDropDownLine className='text-primary w-6 h-6'/>} /> </span>
                        <span className='rounded-3xl h-16 dark:bg-[#222] bg-white  relative max-md:col-span-2  col-span-1   '> <SelectList styles={{backGround:"transparent !important", marginBottom:"0px" }} text="Pick Up Location" icon={<ArrowDropDownLine className='text-primary w-6 h-6'/>} /> </span>
                        <span className='rounded-3xl h-16 dark:bg-[#222] bg-white  relative max-md:col-span-2  col-span-1   '> <List styles={{backGround:"transparent !important", marginBottom:"0px" }} text="Pick Up Date" icon={<BaselineCalendarMonth className='text-primary w-4 h-4'/> } /> </span>
                        <span className='rounded-3xl h-16 dark:bg-[#222] bg-white  relative max-md:col-span-2  col-span-1   '> <SelectList styles={{backGround:"transparent !important", marginBottom:"0px" }} text="Drop Off Location" icon={<ArrowDropDownLine className='text-primary w-6 h-6'/>} /> </span>
                        <span className='rounded-3xl h-16 dark:bg-[#222] bg-white  relative max-md:col-span-2  col-span-1   '> <List styles={{backGround:"transparent !important", marginBottom:"0px" }} text="Return Date" icon={<BaselineCalendarMonth className='text-primary w-4 h-4'/> } /> </span>

          <button className= {` col-span-2 flex shrink-0 w-full justify-center items-center h-full
           cursor-pointer transition-all  hover:border-white
            hover:bg-white rounded-4xl
              bg-[var(--primary)] text-black text-[14px] 
              font-light py-[20px] px-[15px] border 
              border-[var(--primary)]`} >
                Rent Now
                </button>
        </form>
              
           </div>
    )
}

const RoundIconText = ({icon,title,value}:any)=>{
    return(

        <div className='w-full py-4 border-b border-white/3 flex justify-between items-center gap-1'>
           <div className="flex items-center gap-2 text-[#999]"> 
            <span className="text-primary h-8 w-8 bg-[#222] rounded-full flex justify-center items-center"> 
                {icon}
            </span>
            <span>{title}</span>

            </div>
              <span className="text-white">{value}</span>
        </div>

    )
}