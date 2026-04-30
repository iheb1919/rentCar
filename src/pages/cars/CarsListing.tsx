import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
//import { whoAreWeTexttype } from '../../components/Landing/whoAreWe/WhoAreWe'
import { usePagination } from '../../hooks/usePaginationControls'
import {  Search, CarDoor, GearboxSquare, TravelLuggageAndBagsRounded, User20Solid, HeavyCheckMark } from '../../icons/icons'
import allCars from '../../../car_rentals.json'
import {  Cartype } from './CarsFleet'
const CarsListing = () => {
  return (
    <div className='z-50' >

    <AboutHeader
            
              background='url(/rentCar/carRent-images/slider/11.jpg'
                headTitle="Rent Now"
                /* title={carName || ""} */
                position='center'
                highlightTitle='Select'
                highlightTitleReverse={true}
                title=" Luxury Car"
                />
              <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
              <CarsFilters  />
          
           <PageFooter/></div>
  )
}

export default CarsListing

type FilterOption = {
  title: string;
  items: {
    value: string;
    label: string;
  }[];
};
export const CarsFilters = ()=>{

        const filterOptions: FilterOption[] = [
          {
            title: "Select Brand",
            items: [
              { value: "lamborghini", label: "Lamborghini" },
              { value: "aston_martin", label: "Aston Martin" },
              { value: "bugatti", label: "Bugatti" },
              { value: "bentley", label: "Bentley" },
              { value: "rolls_royce", label: "Rolls-Royce" },
              { value: "audi", label: "Audi" },
              { value: "ferrari", label: "Ferrari" },
            ],
          },
          {
            title: "Car Type",
            items: [
              { value: "luxury", label: "Luxury Cars" },
              { value: "sport", label: "Sport Cars" },
              { value: "suv", label: "SUVs" },
              { value: "convertible", label: "Convertible" },
            ],
          },
          {
            title: "Transmission",
            items: [
              { value: "automatic", label: "Automatic" },
              { value: "manual", label: "Manual" },
            ],
          },
        ];
        const { carType } = useParams();
        const [filtredCars, setFiltredCars] = useState<Cartype[]>([]);
      
        useEffect(() => {
          if (carType) {
            setFiltredCars(allCars.filter((car) => car.type === carType) as Cartype[]);
          } else {
            setFiltredCars(allCars as Cartype[]);
          }
        }, [carType]);
      
        const {
          currentItems: currentCars,
          PaginationControls,
        } = usePagination(filtredCars, 6);
  return(
      <div className="py-[120px] w-full">
   <div className="container  mx-auto ">
      <div className=" w-full   max-lg:px-[12px]  grid grid-cols-3 max-md:grid-cols-1 gap-y-5 ">
      <div className=" w-full md:mt-[-246px] z-2 lg:w-[80%]">
            <div className='w-full  flex flex-col overflow-hidden rounded-[0_0_20px_20px] '>
                <div className='bg-primary w-full p-5 font-bold rounded-[20px_20px_0_0] flex justify-center items-center text-2xl text-[#1b1b1b] 
                ' >
                   <label htmlFor='searchcar'  className='group w-full relative  border rounded-4xl h-14 border-primary overflow-hidden ' >
                                <input type="text" id="searchcar"  name=""  placeholder='Search ...' 
                                className='outline-0 h-full w-full pl-5 pr-16 rounded-4xl dark:!bg-[#1b1b1b] dark:text-white text-black placeholder:text-black dark:placeholder:text-white'  />   
                                  <Search className='dark:bg-primary bg-black text-primary dark:text-black/40 rounded-full absolute h-11 w-11 p-3 right-1.5 top-1/2 bottom-1/2 -translate-y-1/2
                                   group-hover:rotate-90 transition-all duration-1000
                                   group-hover:bg-primary group-hover:text-black/40
                                  ' />
                            </label> 

                   </div>
                    <div className=' p-[40px_30px] flex flex-col w-full bg-[var(--bgBox)] justify-center items-center gap-2 text-[#999] text-sm '>
                    
                    {
                        filterOptions.map((filter,j)=> 
                       <div key={j} className='w-full '>
                       <h3 className='mb-3 text-xl dark:text-white font-bold'> {filter.title}</h3>
                        {
                          filter.items.map((item,i)=> 
                          <label htmlFor={`inputradio_${i}_${item.value}`} key={i} className={` group  w-full  p-[15px_20px]
                            text-[#1b1b1b] dark:text-white  cursor-pointer !font-[200]
                              flex justify-s items-center gap-1`} > 
                            <input className='hidden peer' type="checkbox" name="" id={`inputradio_${i}_${item.value}`} />
                            <div className=' border border-primary group peer-checked:bg-primary w-4 h-4 rounded-full mr-2' >
                              <HeavyCheckMark className='text-black hidden  group-has-peer-checked:block '/>
                            </div>
                            {item.label}
                          </label>
                      )
                        }
                       </div>
                    )
                    }
                    
                    
                </div>
            </div>
      </div>
     {/* Second Part */}
        <div className=" ml-auto  shrink-0 md:col-span-2 grid gap-7 grid-cols-1 lg:grid-cols-2">
        {currentCars.map((car:Cartype,i)=>{
         return  <CartypeC key={i} data={car}/>
        })}                    
          <div className='lg:col-span-2'>

                  <PaginationControls />
          </div>
        </div>

   
       
      </div>
  </div>
 </div>
  )
}
export const CartypeC=({data}:{data:Cartype})=>{
  return(
    <div  className="  h-full cursor-pointer  w-full">
                      <div className='overflow-hidden   rounded-lg    '>
                        <img src="/rentCar/carRent-images/slider/7.jpg" className="w-full  transition-all duration-300 hover:scale-105" />
                      </div>
                     <div className=' z-2 p-7 w-full  rounded-lg 
                     bg-[var(--bgBox)]  '>
                        <div className='h-full w-full flex flex-col  gap-3 items-center '>
                          <div className='flex  w-full flex-col gap-6'>
                              <span className='text-2xl font-bold'> {data.brand}  {data.model}  </span>
                              <div className='flex text-[#555] dark:text-[#999] font-light flex-col justify-between w-full items-center gap-5  text-sm '>
                                  <div className='flex  justify-between w-full items-center gap-1'>  <span className='flex justify-center items-center gap-4' ><CarDoor  className='text-primary'/> doors</span>   <span className='dark:text-white' >{data.doors}  Seat</span></div>
                                  <div className='flex justify-between w-full items-center gap-1'>  <span className='flex justify-center items-center gap-4' ><GearboxSquare  className='text-primary'/> Transmission</span>   <span className='dark:text-white' > {data.transmission} </span></div>                        
                                  <div className='flex justify-between w-full items-center gap-1'>  <span className='flex justify-center items-center gap-4' ><TravelLuggageAndBagsRounded  className='text-primary'/> Luggage</span>   <span className='dark:text-white' >{data.luggage} Bags</span></div>                        
                                  <div className='flex justify-between w-full items-center gap-1'>  <span className='flex justify-center items-center gap-4' ><User20Solid  className='text-primary'/> Passengers</span>   <span className='dark:text-white' > {data.passengers} </span></div>
                              </div>
                          </div>
                          <div className='flex w-full justify-between items-center h-fit gap-2 mt-1' >
                                  <div className=' flex  gap-0'><span className='text-2xl font-bold text-primary'>$750</span><span className='text-sm font-light  text-[#555]'>/day</span></div>
                                  <Link to={`car/${data.id}?${data?.brand as string + data?.model}`} className='rounded-4xl shrink-0  leading-0.5 px-6 py-6 text-black bg-primary hover:bg-black dark:hover:text-black hover:text-white dark:hover:bg-white 
                                  hover:-translate-y-2
                                  transition-[background-color,translate] duration-500' >Details</Link>
                          </div>
                        </div>
                     </div>
                      </div>
  )
}