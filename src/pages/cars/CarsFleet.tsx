import AboutHeader from '../../components/aboutHeader/AboutHeader'
import { Link, useParams } from 'react-router'
import { CarDoor, GearboxSquare, TravelLuggageAndBagsRounded, User20Solid } from '../../icons/icons';
import allCars from '../../../car_rentals.json'
import { useEffect, useState } from 'react';
import PageFooter from '../../components/generals/pageFooter/PageFooter';
import RentNow from '../../components/Landing/rentNow/RentNow';
const CarsFleet = () => {
    const {carType}=useParams()
   
  return (
    <div className='z-50' >

<AboutHeader
        position="center"
          background='url(/carRent%20images/slider/3.jpg'
            headTitle="select your car"
            title={carType || ""}
            highlightTitle="Car Fleet"
            />
          <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
       <AllCars/>
       <RentNow/>
       <PageFooter/>
    </div>
  )
}

export default CarsFleet
export const initialCarType:Cartype={ id: null,
  brand: null,
  model: null,
  year: null,
  price_per_day: null,
  location: null,
  image: null,
  availability:  null,
  transmission: null,  
  fuel_type: null, 
  mileage: null,
  passengers: null,
  doors: null,
  luggage: null,
  air_conditioning: null,
  type: null,}
export type Cartype = {
    id: number | null;
    brand: string | null;
    model: string | null;
    year: number | null;
    price_per_day: number | null;
    location: string | null;
    image: string | null;
    availability: boolean | null;
    transmission: "Manual" | "Automatic" |string | null;  
    fuel_type: "Diesel" | "Petrol" | "Electric" | "Hybrid" | string | null;
    mileage: string | null;
    passengers: number | null;
    doors: number | null;
    luggage: number | null;
    air_conditioning: boolean | null;
    type: string | null; // If this represents a category, consider using an enum or union type
};
export const AllCars = () => {
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
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-9">
              {currentCars.map((image: Cartype) => (
                <div key={image.id} className="h-full w-full flex items-center justify-center">
                  <div className="relative cursor-pointer h-full w-full">
                    <div className="overflow-hidden rounded-lg h-fit relative z-1">
                      <img
                        src="/carRent%20images/slider/7.jpg"
                        className="w-full transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="relative z-2 rounded-lg  bg-[var(--bgBox)] lg:mx-6 lg:-mt-7">
                      <div className="h-full p-7 w-full flex  justify-between items-center">
                        <div className="flex flex-col gap-1">
                          <span className="text-2xl font-bold">
                            {image.brand} {image.model}
                          </span>
                          <div className="flex flex-wrap justify-center items-center gap-2 text-[#999] text-sm">
                            <div className="flex justify-center items-center gap-1">
                              <CarDoor className="text-primary" /> <span>{image.doors} Seat</span>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                              <GearboxSquare className="text-primary" />{" "}
                              <span>{image.transmission}</span>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                              <TravelLuggageAndBagsRounded className="text-primary" />{" "}
                              <span>{image.luggage} Bags</span>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                              <User20Solid className="text-primary" />{" "}
                              <span>Age {image?.year ? 2025 - image.year : '-'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-1">
                          <Link
                            to={"car/"+image.brand + image.model}
                            className="rounded-4xl  flex items-center justify-center leading-0.5 px-4 py-1 text-black bg-primary hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white transition-[background-color] duration-500"
                          >
                            Details
                          </Link>
                          <div className="flex flex-col gap-0">
                            <span className="text-xl font-bold text-primary">${image.price_per_day} </span>
                            <span className="text-sm font-bold">/day</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
    );
  };
  