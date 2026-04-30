/* eslint-disable @typescript-eslint/no-explicit-any */
 
import {  ImageRoundEffect } from '../../../icons/icons'
type ImageroundProps = {
    button:any,
    buttonPosition?:"bottom" | "top",
    text?:string,
    btnstyle?:any,
    image:string,
    sub_text?:any,
    textLeft?:any,
    textPosition?:"top"|"bottom"|null
  
}
const ImageroundTest :React.FC<ImageroundProps>=(
    {button,
        textPosition="bottom",
        buttonPosition="bottom",
        text,
        btnstyle,
        textLeft,
        image,
        sub_text})=> {
  return (
    <div className={`cursor-pointer overflow-hidden w-full h-fit group    relative ${buttonPosition ==="top"? "rounded-[0px_20px_20px_20px]":"rounded-[20px_20px_20px_0px]"}`}>

{buttonPosition === "top" &&  <div className="project-date">
                            {textLeft}
                            <div className="br-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 fill-[var(--bgColor)]">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" ></path>
                                </svg>
                            </div>
                            <div className="br-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 fill-[var(--bgColor)]">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" ></path>
                                </svg>
                            </div>
                        </div>
      }













       {buttonPosition === "top" && <div className="image-fade"></div>}
          {image &&

          <img className="w-full rounded-[20px_20px_20px_0px] z-0 transition-[scale] duration-500  group-hover:scale-105" src={image} alt="" />
     
          }
          
          
           <div className={`z-2 absolute  w-[90px] h-[90px] flex justify-center items-center  
           ${buttonPosition === "bottom"? 
           " bottom-0   left-0  bg-[var(--bgColor)]" : 
           "bg-transparent  top-[10px] right-[10px]"}
            rounded-[0_40px_0_0]`} >
            <div style={typeof btnstyle === "object" ? btnstyle : undefined} className={`
            ${typeof(btnstyle)==="string" ? btnstyle : buttonPosition === "bottom" ? " border border-white ": "group-hover:bg-primary border-primary group-hover:text-black " }
            ${buttonPosition === "bottom" ? "h-[70px] w-[70px]":"h-[60px] w-[60px]"}
            z-[6]
               transition-all 
                 flex justify-center items-center
                  rounded-full`}>
               {button}
            </div>
           { buttonPosition === "bottom" && <>
            <div className="absolute top-[-24px] left-0 rotate-[270deg]   w-[25px] h-[25px] " ><ImageRoundEffect/></div>
            <div className="absolute right-[-23px] -bottom-0.5 rotate-[270deg] w-[24px] h-[24px] " ><ImageRoundEffect/></div>
           </>
            }
          </div> 
             {(text && textPosition) && (
                <>
                   {textPosition==="bottom" &&  <div className="bottom-fade"></div>}
                    <div className={`imageTitle  text-white flex flex-col
                      ${textPosition==="top" ? "!top-5 !pl-5 !p-0" : buttonPosition ==="top" ? " !pl-5 ":"pl-15"} `}>
                       <h4 className='inline-block !text-left'> {text}</h4> 
                      {sub_text&& <span className='text-[#999] font-light text-sm'> {sub_text} </span>}
                    </div>
                </>
            )} 
    </div>
  )
}

export default ImageroundTest