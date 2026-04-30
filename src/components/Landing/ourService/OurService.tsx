/* eslint-disable @typescript-eslint/no-explicit-any */

import OurServicesCarousel from '../../generals/caroucel/Caroucel'
import { Reveal } from '../../animations/Reveal'

const OurService = ({images}:any) => {
  
  return (
    <div className="py-[120px] w-full">
    <div className="container  mx-auto ">
       <div className=" w-full mx-auto max-lg:px-[12px] max-w-[1300px] flex justify-center items-center flex-col gap-5 ">
       <div className="w-full flex flex-col items-center justify-center shrink-0">
            <Reveal>
              <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >What We Do         </p>
            </Reveal>
            <Reveal>
              <div className="text-[35px] leading-[1.25em] font-bold  mb-[15px]" >Our <span className="text-primary inline-block">Services</span> </div>
            </Reveal>
       </div>
       <div className=" w-full flex gap-5  max-w-[1200px]">
    
      <OurServicesCarousel images={images} button={undefined} textPosition={undefined}  />
       
       </div>
   </div>
   </div>
  </div>
  )
}

export default OurService