/* eslint-disable @typescript-eslint/no-explicit-any */
import  {  useEffect, useState } from 'react'
import { ArrowDiagonalTopRight, CurrencyDollar } from '../../icons/icons'

const SlideShow = () => {
    const carsImgs:string[]= [
        "/rentCar/carRent-images/slider/11.jpg",
        "/rentCar/carRent-images/slider/13.jpg",
        "/rentCar/carRent-images/slider/14.jpg"
    ]
    const [image,setImage]= useState(0)
    const [selected,setSelected]= useState(1)
    useEffect(()=>{
         setTimeout(()=>{
             if(image === carsImgs.length-1) setImage(0)
                 else setImage(prev=>prev+1)
         },5000)
    },[image])
  return (
   <>
    <section className='text-white relative flex items-center justify-center overflow-hidden h-screen w-full'>
        {carsImgs.map((imagebg,i) =>  <BgAnimation key={i} active={i===image ? true:false} images={imagebg} />)   }
        <div className="h-fit  z-9  relative mx-auto  container  px-5  ">
          <div className="flex justify-center flex-col max-md:my-8 max-sm:items-center">
          <h6 className="w-fit text-xs text-primary tracking-[6px] uppercase font-light ">* Premium</h6>
            <h1 className={`w-fit font-outfit  testFont  `}>
              Rental Car
            </h1>
            <h5 className={`w-fit  text-[17px]  font-light my-[15px]`} >
            You can rent any of our luxurious cars.
            </h5>
            <div className={`w-fit title  `}>
              <button
                className={`w-fit my-[15px] delay-700 transition-all flex items-center gap-1 justify-center hover:border-white hover:bg-white rounded-4xl bg-[var(--primary)]
                 text-black text-sm font-light py-[17px] px-[42px] border border-[var(--primary)]`}>
                View Details
                <ArrowDiagonalTopRight/>
              </button>
             
            </div>
          </div>
         
        </div>
    </section>
    <div className='w-full max-sm:px-2 mb-[60px] z-4 relative' >
      <div className='container mt-[-120px] h-fit mx-auto grid grid-cols-3 gap-5 max-md:grid-cols-1 '>
        
        <BoxAnimation click={()=>setSelected(1)}   active={selected===1?true:false}/>
        <BoxAnimation click={()=>setSelected(2)}   active={selected===2?true:false}/>
        <BoxAnimation click={()=>setSelected(3)}   active={selected===3?true:false}/>
      </div>
    </div>
   </>
  )
}

export default SlideShow

const BgAnimation = ({images,active}:any)=>
  {
  return(
    <div className={`
      h-full w-full 
          overflow-hidden
          absolute top-0 left-0
          z-3 
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
          ${active ? "slideShowbg cover ":"opacity-0"}
          `}
    style={{
        backgroundImage:`url(${images})`
    }}>
            </div>  
  )
}

const BoxAnimation=({click,active}:any)=>{
  return(
    <div onClick={click} className={`w-full p-10  transition-all duration-700 ${active ? "bg-primary -translate-y-5 text-black ":"bg-[var(--bgBox)]"} rounded-2xl `} >
        <span className= {` ${active ? "text-white bg-[#222]":"text-primary bg-[#333]"} h-20 w-20 text-2xl  rounded-full flex justify-center items-center`} > 
                <CurrencyDollar className=''/>
            </span>
                <h5 className='text-xl my-4 leading-6 font-bold '>
                Affordable Rates
                </h5>
                <span className='text-sm leading-8 font-normal '>
                We are constantly keeping an eye on the prices to make sure we'll get you the best deal there is on the market.
                </span>
        </div>
  )
}