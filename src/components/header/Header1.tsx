import {  useState } from "react";
import { ArrowDiagonalTopRight } from "../../icons/icons";
type carsImageType={
    price:number,
    name:string,
    image:string}
function Slide1() {
    const carsImgs:carsImageType[]= [
        {price:400, name:"Audi RS7 Sportback", image:"/rentCar/carRent-images/slider/11.jpg"},
        {price:600, name:"Bently Bentayga", image:"/rentCar/carRent-images/slider/13.jpg"},
        {price:900, name:"Rolls Royce", image:"/rentCar/carRent-images/slider/14.jpg"}
    ]
    const [image,setImage]= useState(0)
  return (
    <div className=' h-screen relative z-3 '>
                {carsImgs.map((car:carsImageType,i:number)=> <CaroucelBody  key={i} active={i===image ? true :false}  carsImgs={car} />)}
            <div className="absolute  bottom-10 left-1/2 righ-1/2 -translate-1/2 flex gap-1 z-3">
                {carsImgs.map((_,i:number)=> <div onClick={()=>setImage(i)} key={i}  className={`caroucelDot ${image===i && "bg-primary border-primary"}`} ></div>)}
            </div>
        
    </div>
  )
}

export default Slide1

export const CaroucelBody = ({carsImgs,active}:{carsImgs:carsImageType,active:boolean})=>{
    return(
        <div
        style={{
            
            backgroundImage:`url("${carsImgs.image}")`,
            opacity: active ? "1":"0"
        }}
    className={`
        image-container
    bg-cover
    bg-center
    bg-img before:bg-black 
    before:top-0 
    before:absolute 
    before:opacity-[.5]
    before:w-full 
    before:h-full
    before:z-[1]
    absolute top-0 left-0 w-full h-full`}>
        
       {active && <div className="z-2 relative mx-auto  container h-full px-7 flex text-white justify-center flex-col gap-5">
            <div className={`font-outfit ${active ? "fadeInUp":"fadeInOut"} testFont text-white  `} >Rental Car</div>
            <h5 className={`animated ${active ? "fadeInUp":"fadeInOut"} text-regtext`}> {carsImgs.name}  <span><span className="text-[var(--primary)] text-2xl font-bold" >${carsImgs.price}</span> <i>/ day</i></span></h5>
            <div className={`text-sm flex flex-wrap gap-5 ${active ? "fadeInUp":"fadeInOut"} `} >
                <button className= {`flex justify-center hover:-translate-y-2 items-center gap-1 duration-500 transition-all ${active ? "fadeInUp":"fadeInOut"} hover:border-white hover:bg-white rounded-4xl bg-[var(--primary)] text-black font-light py-4 px-7 border border-[var(--primary)]`} >View details <ArrowDiagonalTopRight/>  </button>
                <button className= {`flex justify-center hover:-translate-y-2 items-center gap-1 duration-500 animate-ping transition-all ${active ? "fadeInUp":"fadeInOut"} hover:text-black hover:border-[var(--primary)] hover:bg-[var(--primary)] rounded-4xl font-light  py-4 px-9 border `}>Rent Now <ArrowDiagonalTopRight/>  </button>
            </div>
        </div>}
        </div>
    )
}