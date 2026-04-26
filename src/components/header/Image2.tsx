import { useEffect, useState } from "react";
import { ArrowDiagonalTopRight, ArrowDropDownLine, BaselineCalendarMonth, CarDoor, GearboxSquare, HeavyCheckMark, TravelLuggageAndBagsRounded, User20Solid } from "../../icons/icons";
import List from "../generals/components/list/SelectList";
type carsImageType = {
  price?: number;
  name?: string;
  image: string;
};
function Image2() {
  const carsImgs= "/carRent%20images/slider/25.jpg"
   const textList = [
    "Corporate Car Rental",
    "Car Rental with Driver",
    "Airport Transfer",
    "Fleet Leasing",
    "VIP Transfer",
    "Private Transfer"
   ]

  return (
    <section 
    style={{
        backgroundImage: `url("${carsImgs}")`,
       
      }}
      data-overlay-darkgray="4"
    className=" bg-cover bg-fixed bg-center flex justify-center items-center
          bg-img min-h-screen py-[120px]  z-3 
          relative 
          after:content-[''] 
          after:absolute 
          after:inset-0 
          after:top-0
          after:left-0
          after:w-full 
           after:bg-gradient-to-t 
          after:from-[#1b1b1b] after:to-transparent after:to-70%
          ">

            <div className="container px-2.5 z-3">
            <div className="relative mb-16 bg-primary p-[20px_15px] rounded-[15px_15px_0_15px] font-bold text-center uppercase text-[40px] text-[#1b1b1b] ">
                <div className="font-light  text-white text-xs leading-[25px] tracking-[1px] uppercase absolute p-[7px_25px] -rotate-z-8  rounded-sm -top-5 left-1/2 -translate-x-1/2  bg-[#ff0000]">Discount 50% Off</div>
                <h3 className="">Car Rental</h3>
                <div className="  absolute  
                
                

    right-0
    top-full *:[0px_45px_30px_0px]
    border-t-0
    border-r-[45px]
    border-b-[30px]
    border-l-[0px]


      border-t-transparent
    border-r-primary
    border-b-[transparent]
    border-l-[transparent]
    border-[transparent rgba(245, 183, 84, 0.9) transparent transparent]
    w-0 h-0
    rounded-[0_0_5px_0]
                
                "></div>
            </div>

            <div className=" grid grid-cols-2 max-md:grid-cols-1 gap-y-5">
           {textList.map((text,i)=> <div key={i} className="flex gap-5 items-center group ">
                <div className="w-9 h-9 flex justify-center items-center rounded-full text-[#1b1b1b]  bg-primary group-hover:bg-white "> <HeavyCheckMark className="w-5 h-5" /> </div>
                    <div className=" text-sm font-light text-white">
                        {text}
                </div>
            </div>)}
         
                                            
            </div>
            </div>
     
     
     
    </section>
  );
}

export default Image2;

export const CaroucelBodySlide2 = () => {
  return (
  
     
        <div className="  z-2 relative mx-auto  container  px-5 flex max-md:flex-col justify-between ">
          <div className="flex justify-center flex-col max-md:my-8 ">
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
        <div className={`relative z-2   min-md:max-w-[400px]  duration-[.3s]  w-full rounded-lg h-full   p-[35px_20px] bg-[#1b1b1b]
        animatetext-regtext`}>
                    <form  action="" className='image1Landing w-full grid grid-cols-2 gap-4'>       
                        <span className='rounded-3xl relative col-span-2 bg-[#222] py-[20px] px-[15px] '> <List styles={{marginBottom:"0px" }} text="ChooseCar Type" icon={<ArrowDropDownLine className='text-primary w-6 h-6'/>} /> </span>
                        <span className='rounded-3xl relative max-md:col-span-2 bg-[#222] col-span-1  py-[20px] px-[15px] '> <List styles={{marginBottom:"0px" }} text="Pick Up Location" icon={<ArrowDropDownLine className='text-primary w-6 h-6'/>} /> </span>
                        <span className='rounded-3xl relative max-md:col-span-2 bg-[#222] col-span-1  py-[20px] px-[15px] '> <List styles={{marginBottom:"0px" }} text="Pick Up Date" icon={<BaselineCalendarMonth className='text-primary w-4 h-4'/> } /> </span>
                        <span className='rounded-3xl relative max-md:col-span-2 bg-[#222] col-span-1  py-[20px] px-[15px] '> <List styles={{marginBottom:"0px" }} text="Drop Off Location" icon={<ArrowDropDownLine className='text-primary w-6 h-6'/>} /> </span>
                        <span className='rounded-3xl relative max-md:col-span-2 bg-[#222] col-span-1  py-[20px] px-[15px] '> <List styles={{marginBottom:"0px" }} text="Return Date" icon={<BaselineCalendarMonth className='text-primary w-4 h-4'/> } /> </span>

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

