import React from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { CarInformation } from '../carDetail/CarDetail'
import DetailsAnimated from '../../components/header/DetailsAnimated'
import { HeavyCheckMark, CarDoor, SeatbeltFill, GearboxSquare, TravelLuggageAndBagsRounded, ThermometerHotLight, User20Solid, Whatsapp, ArrowDiagonalTopRight } from '../../icons/icons'
import { whoAreWeTexttype } from '../../components/Landing/whoAreWe/WhoAreWe'

const ServiceDetails = () => {
  return (
    <div className='z-50' >

    <AboutHeader
            
              background='url(/carRent%20images/slider/3.jpg'
                headTitle="Services"
                /* title={carName || ""} */
                title="VIP Transfers"
                />
              <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
              <AllServicesDetails  />
          
           <PageFooter/></div>
  )
}

export default ServiceDetails


export const AllServicesDetails = ()=>{
    const  whoAreWeText:whoAreWeTexttype[] = [{
            title:"",
            text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton."],
            list:[],
            
          },
          {
            title:"Options for VIP Transfers",
            text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton."],
            list:[],
            
          },
          {
            title:"Booking in Advance",
            text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton."],
            list:[],
            
          },
          {
            title:"Luggage Handling",
            text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan lorem pretium fermentum quam sit fermen."],
            list:["Security and Licensing","Private Car Services","Taxi or Rideshare Services"],
            
          }]
          const allservices= [" Corporate Car Rental"," Car Rental with Driver"," Fleet Leasing"," Airport Transfer"," VIP Transfer"," Private Transfer"]
          const details= [
            {title:"Security and Licensing",text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua rana the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante solicitune velention fermen morbinetion consesua the risus the porttiton.Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua rana the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante solicitune velention fermen morbinetion consesua the risus the porttiton."] },
            {title:" Local Currency and Tips",text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua rana the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante solicitune velention fermen morbinetion consesua the risus the porttiton."] },

            {title:"Communication",text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua rana the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante solicitune velention fermen morbinetion consesua the risus the porttiton."] },

            {title:" Accessibility",text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua rana the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante solicitune velention fermen morbinetion consesua the risus the porttiton."] },

          ]
    return(
        <div className="py-[120px] w-full">
     <div className="container  mx-auto ">
        <div className=" w-full mx-auto max-lg:px-[12px] max-w-[1200px] grid grid-cols-3 max-md:grid-cols-1 gap-y-5 ">
          <div className="shrink-0 col-span-2">
            <div className="  px-1.5rem">
            {
                whoAreWeText.map((textSection,i)=>
                <React.Fragment key={i}>
               {textSection.headerTitle && <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" > {textSection.headerTitle} </p>}
            { textSection.title && <h4 className="text-[22px]  w-fit text-start leading-[1.25em] font-bold  mb-[15px]" >{textSection.title}  
                {textSection.highlighttitle && <span className="text-primary inline-block">{textSection.highlighttitle}</span> }</h4>}
            {
              textSection?.text?.map((text,i)=><p key={i} className="text-[#999] text-[14px] font-[300] leading-[1.95rem] mb-[15px]  last-of-type:mb-[30px] break-words " > {text} </p>)
            }
           { textSection?.list.length > 0 && <div className=" flex flex-col gap-4 mb-[30px]">
                {
                  textSection?.list?.map((List:string,i:number)=> <div key={i}  className="flex gap-3">
                  <div className="bg-[var(--bgBox)] flex justify-center items-center dark:text-primary text-gray-600 h-9 w-9 rounded-full">
                    <HeavyCheckMark/>
                  </div>
                  <span className="text-[#999] text-[14px] font-[300] leading-[1.95rem]">{List}</span>
              </div>)
                }
            
            </div>}
                </React.Fragment>
                )
            }
                
                   <div className='flex flex-col gap-5' >
                    
                    {/* Rental condition */}
                    <div className='grid grid-cols-1 gap-4'>
                    
                    {details.map((detail,i)=><DetailsAnimated key={i} title= {detail.title} text={detail.text} num={(i+1)+`.`} />)}
                    
                   
                    </div>
                    </div> 
            </div>
          </div>

          {/* Second Part */}
          <div className="ml-auto w-full md:mt-[-246px] z-2 lg:w-[80%]">
        
                <div className='w-full flex flex-col overflow-hidden rounded-[0_0_20px_20px] '>
                    <div className='bg-primary w-full p-8 font-bold rounded-[20px_20px_0_0] flex justify-center items-center text-2xl text-[#1b1b1b] gap-2' > All Services   </div>
                         <div className=' p-[40px_30px] flex flex-col w-full bg-[var(--bgBox)] justify-center items-center gap-2 text-[#999] text-sm '>
                        
                        {
                            allservices.map((service,i)=> 
                            <div key={i} className={` ${i ==4 && "bg-primary"}  w-full group hover:bg-primary p-[15px_20px] text-[#1b1b1b] dark:text-white  cursor-pointer !font-[200] border border-black/5 dark:border-white/3 rounded-2xl flex justify-s items-center gap-1`} > 
                            <ArrowDiagonalTopRight className={` ${i == 4 ? "text-[#1b1b1b] ":"text-primary"} group-hover:text-[#1b1b1b]  text-xl`} /> 
                            {service}
                         </div>)
                        }
                         
                        
                    </div>
                </div>
          </div>
        </div>
    </div>
   </div>
    )
}