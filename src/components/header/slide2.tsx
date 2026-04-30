import {  useState } from "react";
import { ArrowDiagonalTopRight, CarDoor, GearboxSquare, TravelLuggageAndBagsRounded, User20Solid } from "../../icons/icons";
type carsImageType = {
  price: number;
  name: string;
  image: string;
};
function Slide2() {
  const carsImgs: carsImageType[] = [
    {
      price: 750,
      name: "Bugatti Mistral W16",
      image: "/rentCar/carRent-images/slider/1.jpg",
    },
   {
      price: 600,
      name: "Bently Bentayga",
      image: "/rentCar/carRent-images/slider/13.jpg",
    },
    {
      price: 900,
      name: "Rolls Royce Cullinan",
      image: "/rentCar/carRent-images/slider/12.jpg",
    }, 
  ];
  const [image, setImage] = useState(0);

  return (
    <section  data-overlay-dark="5" className=" h-screen relative z-3 ">
      {carsImgs.map((car: carsImageType, i: number) => (
        <CaroucelBodySlide2
          key={i}
          active={i === image ? true : false}
          carsImgs={car}
        />
      ))}
      <div className="absolute  bottom-10 left-1/2 righ-1/2 -translate-1/2 flex gap-1 z-3">
        {carsImgs.map((_, i: number) => (
          <div
            onClick={() => setImage(i)}
            key={i}
            className={`caroucelDot ${
              image === i && "bg-primary border-primary"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Slide2;

export const CaroucelBodySlide2 = ({
  carsImgs,
  active,
}: {
  carsImgs: carsImageType;
  active: boolean;
}) => {
  return (
    <div
      className={` bord absolute 
           top-0 left-0 
        flex items-center  w-full h-full`}>
      <div  style={{
        backgroundImage: `url("${carsImgs.image}")`,
        opacity: active ? "1" : "0",
      }}  className={`
        flex items-center
         image-container bg-cover bg-center bg-img
         
           absolute 
           top-0 left-0 w-full h-full`} ></div>
      {active && (
        <div className=" text-white z-20 relative mx-auto  container  px-5 flex justify-between gap-5">
          <div className="flex justify-center flex-col gap-1">
            <span className="font-light text-xs text-primary tracking-[6px] ">* ECONOMY</span>
            <div
              className={`font-outfit ${
                active ? "fadeInUp" : "fadeInOut"
              } testFont  `}
            >
              {carsImgs.name}
            </div>
            <h5
              className={`animated ${
                active ? "fadeInUp" : "fadeInOut"
              } text-regtext font-light `}
            >
            
            Reserve now and get the best offer  
                <span className="ml-2 text-[var(--primary)] text-2xl font-bold">
                  ${carsImgs.price}
                </span>{" "}
                <i>/ day</i>
             
            </h5>
            
            <div className={`mt-4 text-sm flex flex-wrap gap-5 ${active ? "fadeInUp":"fadeInOut"} `} >
                <button className= {`flex justify-center items-center gap-1 delay-700 transition-all ${active ? "fadeInUp":"fadeInOut"} hover:border-white hover:bg-white rounded-4xl bg-[var(--primary)] text-black font-light py-4 px-7 border border-[var(--primary)]`} >View details <ArrowDiagonalTopRight/>  </button>
                <button className={`flex justify-center items-center gap-1 delay-700 animate-ping transition-all ${active ? "fadeInUp":"fadeInOut"} hover:text-black hover:border-[var(--primary)] hover:bg-[var(--primary)] rounded-4xl font-light  py-4 px-9 border `}>Rent Now <ArrowDiagonalTopRight/>  </button>
            </div>
          </div>
          <Carspecs active={active}/>
        </div>
      )}
    </div>
  );
};

export const Carspecs = ({active}:{active:boolean})=>{
    return(
        <div className={`relative z-2     duration-[.3s] max-w-[300px] w-full rounded-lg h-full lg:block hidden  p-10 bg-[var(--bgBoxDark)]
        animated ${
                active ? "fadeInRight" : "fadeInOut"
              } text-regtext`}>
                    <div className='w-full flex flex-col justify-center items-center text-[#999] text-sm '>
                        <RoundIconText icon={<CarDoor/>} title="Door" value="4"/>
                        <RoundIconText icon={<User20Solid/>} title="Passengers" value="2"/>
                        <RoundIconText icon={<GearboxSquare/>} title="Transmission" value="Auto"/>
                        <RoundIconText icon={<TravelLuggageAndBagsRounded/>} title="Luggage" value="1Bag"/>
                        <RoundIconText icon={<User20Solid/>} title="Age" value="25"/>
                        
                    </div>
              
           </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RoundIconText = ({icon,title,value}:any)=>{
    return(

        <div className='w-full py-4 border-b border-white/3 flex justify-between items-center '>
           <div className="flex items-center text-xs gap-2 text-[#999]"> 
            <span className="text-[#222]  dark:text-primary  h-7 w-7 bg-primary dark:bg-[#222]  rounded-full flex justify-center items-center"> 
                {icon}
            </span>
            <span>{title}</span>

            </div>
              <span className="text-[var(--text-body)]">{value}</span>
        </div>

    )
}