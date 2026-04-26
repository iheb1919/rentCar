import React from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { useParams } from 'react-router'
import  { whoAreWeTexttype } from '../../components/Landing/whoAreWe/WhoAreWe'
import { CarDoor, GearboxSquare, HeavyCheckMark, SeatbeltFill, ThermometerHotLight, TravelLuggageAndBagsRounded, User20Solid, Whatsapp } from '../../icons/icons'
import DetailsAnimated from '../../components/header/DetailsAnimated'
import allCars from '../../../car_rentals.json'
import { Cartype, initialCarType } from '../cars/CarsFleet'
const CarDetail = () => {
    const {carId}=useParams()
    const data: Cartype = carId
  ? allCars.find(car => car.id === Number(carId)) ?? initialCarType
  : initialCarType
    const carName = data?.brand + " "+data?.model
  return (
    <div className='z-50' >

  { data?.id ? <>
    <AboutHeader
              position="center"
                background='url(/carRent%20images/slider/3.jpg'
                  headTitle="select your car"
                  title={ carName || ""}
                  /* highlightTitle="Car Fleet" */
                  />
                <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
                <CarInformation data={data}  />
  </> :<AboutHeader
              position="center"
                background='url(/carRent%20images/slider/3.jpg'
                 /*  headTitle="select your car" */
                  title="No Car Found"
                  /* highlightTitle="Car Fleet" */
                  />
            }
          
           <PageFooter/></div>
  )
}

export default CarDetail


export const CarInformation = ({data}:{data:Cartype})=>{
    const  whoAreWeText:whoAreWeTexttype = {
        title:"General Information",
        text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton."],
        list:["24/7 Roadside Assistance","Free Cancellation & Return","Rent Now Pay When You Arrive"],
        
      }
    return(
        <div className="py-[120px] w-full">
     <div className="container  mx-auto ">
        <div className=" w-full mx-auto max-lg:px-[12px] max-w-[1200px] grid grid-cols-3 max-md:grid-cols-1 gap-y-5 ">
          <div className="shrink-0 col-span-2">
            <div className="col-span-4 col-start-2  px-1.5rem">
            <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" > {whoAreWeText.headerTitle} </p>
            <div className="text-[35px] leading-[1.25em] font-bold  mb-[15px]" >{whoAreWeText.title}  <span className="text-primary inline-block">{whoAreWeText.highlighttitle}</span> </div>
            {
              whoAreWeText?.text?.map((text,i)=><p key={i} className="text-[#999] text-[14px] font-[300] leading-[1.95rem] mb-[15px]  last-of-type:mb-[30px] break-words " > {text} </p>)
            }
            <div className=" flex flex-col gap-4 mb-[30px]">
                {
                  whoAreWeText?.list?.map((List:string,i:number)=> <div className="flex gap-3">
                  <div key={i} className="bg-[var(--bgBox)] flex justify-center items-center dark:text-primary text-gray-600 h-9 w-9 rounded-full">
                    <HeavyCheckMark/>
                  </div>
                  <span className="text-[#999] text-[14px] font-[300] leading-[1.95rem]">{List}</span>
              </div>)
                }
            
            </div>
                {/* Image Gallery */}
                   <div className='flex flex-col gap-5' >
                    <h1 className='font-bold leading-6 mb-4 text-xl'>Image Gallery</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2'>
                      <div className='overflow-hidden rounded-lg'>
                      <img className='rounded-lg hover:scale-110  transition-all duration-500' src="/carRent%20images/cars/c7.jpg" alt="" />
                      </div>
                      <div className='overflow-hidden rounded-lg'>
                            <img className='rounded-lg hover:scale-110  transition-all duration-500' src="/carRent%20images/cars/c8.jpg" alt="" />
                      </div> 
                      <div className='overflow-hidden rounded-lg'>
                            <img className='rounded-lg hover:scale-110  transition-all duration-500' src="/carRent%20images/cars/c9.jpg" alt="" />
                      </div>

                    </div>
                    {/* Rental condition */}
                    <div className='grid grid-cols-1 gap-4'>
                    <h1 className='font-bold leading-6 mb-4 text-xl'>Rental Conditions</h1>
                    <DetailsAnimated/>
                    <DetailsAnimated/>
                    <DetailsAnimated/>
                    <DetailsAnimated/>
                    </div>
                    </div> 
            </div>
          </div>

          {/* Second Part */}
          <div className="ml-auto w-full md:mt-[-250px] z-2 lg:w-[80%]">
        
                <div className='w-full flex flex-col overflow-hidden rounded-[0_0_20px_20px] '>
                    <div className='bg-primary w-full p-8 font-bold rounded-[20px_20px_0_0] flex justify-center items-center text-3xl text-[#1b1b1b] gap-2' > {data.price_per_day}  <span className='text-[14px] mt-3 font-light'>/rent per day</span> </div>
                         <div className='flex flex-col w-full bg-[var(--bgBox)] justify-center items-center gap-2 text-[#999] text-sm '>
                         <div className='w-full  flex justify-between px-6 p-4 items-center gap-1'> <div className='flex justify-center items-center gap-4'  >  <span className=' bg-[#333] rounded-full p-1.5' ><CarDoor  className='text-primary'/></span>   Doors </div>  <span>{data.doors} </span></div>
                         <div className='w-full flex justify-between px-6 p-4 items-center gap-1'> <div className='flex justify-center items-center gap-4'  >  <span className=' bg-[#333] rounded-full p-1.5' ><SeatbeltFill  className='text-primary'/></span>   Passengers </div>  <span> {data.passengers}</span></div>
                         <div className='w-full flex justify-between px-6 p-4 items-center gap-1'> <div className='flex justify-center items-center gap-4'  >  <span className=' bg-[#333] rounded-full p-1.5' ><GearboxSquare  className='text-primary'/></span>   Transmition </div>  <span> {data.transmission} </span></div>                        
                         <div className='w-full flex justify-between px-6 p-4 items-center gap-1'> <div className='flex justify-center items-center gap-4'  >  <span className=' bg-[#333] rounded-full p-1.5' ><TravelLuggageAndBagsRounded  className='text-primary'/></span>    Luggage </div> <span> {data.luggage} Bags</span></div>                        
                         <div className='w-full flex justify-between px-6 p-4 items-center gap-1'> <div className='flex justify-center items-center gap-4'  >  <span className=' bg-[#333] rounded-full p-1.5' ><ThermometerHotLight  className='text-primary'/></span>   Air Condition </div>  <span> {data.air_conditioning ? "Yes" : "No" } </span></div>
                         <div className='w-full flex justify-between px-6 p-4 items-center gap-1'> <div className='flex justify-center items-center gap-4'  >  <span className=' bg-[#333] rounded-full p-1.5' ><User20Solid  className='text-primary'/></span>   Year </div>  <span> {data?.year ? 2025 - data.year : '-'}</span></div>
                         <div className='w-full  text-[#222] font-light p-4  flex justify-center  items-center gap-1'>
                            <div className='relative  w-fit h-fit '>

                            <span className='absolute bg-[#333] h-7 w-7 text-white flex justify-center items-center top-1/2 right-[-15px] -translate-y-1/2  rounded-full '>&</span>
                            <button className='bg-primary hover:bg-white cursor-pointer transition-bg duration-300 px-7 py-5 flex rounded-[30px_0_0_30px] justify-center items-center whitespace-nowrap'>Rent Now</button>   
                            </div>
                            <button className='bg-primary hover:bg-white cursor-pointer transition-bg duration-300 px-7 py-5 flex rounded-[0px_30px_30px_0px] justify-center items-center whitespace-nowrap'> <Whatsapp/> WhatsApp</button>   
                         </div>
                    </div>
                </div>
          </div>
        </div>
    </div>
   </div>
    )
}