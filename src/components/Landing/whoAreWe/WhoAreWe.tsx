import { ArrowDiagonalTopRight, HeavyCheckMark, PlayLineDuotone } from "../../../icons/icons"
import Imageround from "../../generals/imageRound/Imageround"
export type whoAreWeTexttype = {
  headerTitle?:string,
  title:string,
  highlighttitle?:string,
  text:string[],
  list:string[],
  
}
type whoAreWeTextProps= {
  whoAreWeText:whoAreWeTexttype
  
}
const WhoAreWe:React.FC<whoAreWeTextProps>=({whoAreWeText})=> {
  return (
   <div className="py-[120px] w-full">
     <div className="container  mx-auto ">
        <div className=" w-full mx-auto max-lg:px-[12px] max-w-[1200px] grid grid-cols-2 max-md:grid-cols-1 gap-y-5 ">
          <div className="shrink-0">
            <div className="col-span-4 col-start-2  px-1.5rem">
            <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" > {whoAreWeText.headerTitle} </p>
            <div className="text-[35px] leading-[1.25em] font-bold  mb-[15px]" >{whoAreWeText.title}  <span className="text-primary inline-block">{whoAreWeText.highlighttitle}</span> </div>
            {
              whoAreWeText?.text?.map((text,i)=><p key={i} className="text-[#999] text-[14px] font-[300] leading-[1.95rem] mb-[15px]  last-of-type:mb-[30px] break-words " > {text} </p>)
            }
            <div className=" flex flex-col gap-4 mb-[30px]">
                {
                  whoAreWeText?.list?.map((List:string,i:number)=> <div key={i} className="flex gap-3">
                  <div  className="bg-[var(--bgBox)] flex justify-center items-center dark:text-primary text-gray-600 h-9 w-9 rounded-full">
                    <HeavyCheckMark/>
                  </div>
                  <span className="text-[#999] text-[14px] font-[300] leading-[1.95rem]">{List}</span>
              </div>)
                }
            
            </div>
          {/*   <button className= {`flex justify-center items-center gap-2 cursor-pointer transition-all hover:-translate-y-1 hover:border-white hover:bg-white rounded-4xl
                bg-[var(--primary)] text-black text-[14px] font-light px-11 py-4 border border-[var(--primary)]`} >
                  Read More
                  <ArrowDiagonalTopRight/>
                  </button> */}

            </div>
          </div>
          <div className="ml-auto w-[80%] max-md:w-full">
          <Imageround 
          button={ <PlayLineDuotone className="" />}
          btnstyle='border rounded-full  border-primary  bg-primary 
          dark:bg-transparent 
          dark:group-hover:bg-primary 
          group-hover:border-[#222]   group-hover:bg-[#222] border-primary group-hover:text-white 
          dark:group-hover:text-black' 
          image='/carRent%20images/about.jpg'/>
          
          </div>
        </div>
    </div>
   </div>
  )
}

export default WhoAreWe


/* 

<div className=" w-full mx-auto max-lg:px-[12px] max-w-[1200px] flex flex-wrap gap-5 ">
          <div className="w-full min-lg:w-1/2 shrink-0">
            <div className="col-span-4 col-start-2  px-1.5rem">
            <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" > {whoAreWeText.headerTitle} </p>
            <div className="text-[35px] leading-[1.25em] font-bold  mb-[15px]" >{whoAreWeText.title}  <span className="text-primary inline-block">{whoAreWeText.highlighttitle}</span> </div>
            {
              whoAreWeText?.text?.map((text,i)=><p key={i} className="text-[#999] text-[14px] font-[300] leading-[1.95rem] mb-[30px] break-words " > {text} </p>)
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
            <button className= {`flex justify-center items-center gap-2 cursor-pointer transition-all hover:-translate-y-1 hover:border-white hover:bg-white rounded-4xl
                bg-[var(--primary)] text-black text-[14px] font-light px-11 py-4 border border-[var(--primary)]`} >
                  Read More
                  <ArrowDiagonalTopRight/>
                  </button>

            </div>
          </div>
          <div className=" max-lg:w-full min-lg:w-[45%] ">
          <Imageround 
          button={ <PlayLineDuotone className="" />}
          btnstyle='border rounded-full  border-primary  bg-primary 
          dark:bg-transparent 
          dark:group-hover:bg-primary 
          group-hover:border-[#222]   group-hover:bg-[#222] border-primary group-hover:text-white 
          dark:group-hover:text-black' 
          image='/carRent%20images/about.jpg'/>
          
          </div>
        </div>

*/

