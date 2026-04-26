import  { useEffect, useState } from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import RentNow from '../../components/Landing/rentNow/RentNow'
import {  Cartype } from './CarsFleet'
import { useParams } from 'react-router'
import { ArrowDiagonalTopRight, CarDoor, GearboxSquare, TravelLuggageAndBagsRounded, User20Solid } from '../../icons/icons'
import allCars from '../../../car_rentals.json'
import Imageround from '../../components/generals/imageRound/Imageround'

const CarsFleetModel3 = () => {
  return (
    <div className='z-50' >

<AboutHeader
              position="center"
              background='url(/carRent%20images/slider/3.jpg'
              headTitle="select your car"

              highlightTitle="Car Fleet" title={''}            />
          <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
       <AllCarsModel3/>
       <RentNow/>
       <PageFooter/>
    </div>
  )
}

export default CarsFleetModel3

export const AllCarsModel3 = ()=>{
    const { carType } = useParams();
    const [filtredCars, setFiltredCars] = useState<Cartype[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 6; // Number of cars per page
  
    useEffect(() => {
      if (carType) {
        setFiltredCars(allCars.filter((car) => car.type === carType) as Cartype[]);
      } else {
        setFiltredCars(allCars as Cartype[]);
      }
      setCurrentPage(1); 
    }, [carType]);
  
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filtredCars.slice(indexOfFirstCar, indexOfLastCar);
  
    const totalPages = Math.ceil(filtredCars.length / carsPerPage);
  
    return (
      <div className="container mx-auto max-sm:px-7 py-[90px]">
        {currentCars.length > 0 ? (
          <>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-9">
              {currentCars.map((image: Cartype) => (
                <div key={image.id} className="h-full w-full flex items-center justify-center">
                  <div className="relative cursor-pointer h-full w-full">
                    
                  <Imageround
                     button={<> 
                            <ArrowDiagonalTopRight className=" text-2xl"/>
                            </>
                            }
                            buttonPosition="top"
                    textLeft={<span style={{lineHeight:"10px"}} 
                    className="flex flex-col gap-2 justify-center items-center font-bold  h-full
                    text-primary  text-xl   ">${image.price_per_day} 
                   <br/> <i className="font-light text-xs text-[#555] "> day</i> </span>}
                    textPosition="bottom"
                    text={image.brand+" "+image.model}
                    btnstyle="bg-transparent
                     dark:bg-transparent
                    border border-white 
                    group-hover:bg-primary
                    group-hover:border-primary
                    text-white
                    group-hover:text-white"
                    image="/carRent%20images/blog/6.jpg"
                    sub_text={<div className="flex  gap-1">
                       
                        <div className="flex flex-wrap justify-center items-center gap-2 text-[#999] text-sm">
                          <div className="flex justify-center items-center gap-1">
                            <CarDoor className="text-primary" /> <span>{image.doors} </span>
                          </div>
                          <div className="flex justify-center items-center gap-1">
                            <GearboxSquare className="text-primary" />
                            <span>{image.transmission}</span>
                          </div>
                          <div className="flex justify-center items-center gap-1">
                            <TravelLuggageAndBagsRounded className="text-primary" />{" "}
                            <span>{image.luggage} </span>
                          </div>
                          <div className="flex justify-center items-center gap-1">
                            <User20Solid className="text-primary" />{" "}
                            <span>Age {2025 - image.year}</span>
                          </div>
                        </div>
                      </div>}
                    
                    />
                    
                  </div>
                </div>
              ))}
            </div>
  
            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="disabled:bg-[#999] disabled:cursor-not-allowed cursor-pointer dark:bg-[#222] bg-[#f2f2f2] rounded-full w-12 h-12 enabled:transition-all duration-500 enabled:hover:-translate-y-2 hover:bg-primary "
              >
                {`<`}
              </button>
             
              {
                   [-1,0,1].map((pag,i)=>{
                        const numPage =currentPage === 1  ?  currentPage+i : currentPage+pag  
                    return(
                    <button key={i}
                    onClick={() => setCurrentPage(numPage)}
                    disabled={currentPage === numPage}
                    className={`disabled:cursor-not-allowed cursor-pointer
                       ${ numPage === currentPage ?"bg-primary" :"dark:bg-[#222] bg-[#f2f2f2] "} 
                        rounded-full w-12 h-12 transition-all duration-500 enabled:hover:-translate-y-2 hover:bg-primary `}
                  >
                   {numPage}
                  </button>)}
                   
                )
                
              }



              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="disabled:cursor-not-allowed cursor-pointer dark:bg-[#222] bg-[#f2f2f2] rounded-full w-12 h-12 enabled:transition-all duration-500 enabled:hover:-translate-y-2 hover:bg-primary "
              >
                {`>`}
              </button>
            </div>
          </>
        ) : (
          <div className="w-full text-center">
            <h1>No cars available at the moment</h1>
          </div>
        )}
      </div>
    )
}