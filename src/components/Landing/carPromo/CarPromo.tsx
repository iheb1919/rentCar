import React, { useEffect, useState } from 'react'
import { Play } from '../../../icons/icons'

const CarPromo = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
    <section  data-overlay-dark="7" className='fixedImg fixedCarPromo relative flex items-center mb-[150px] '>
    <div className='relative text-white px-5 container  mx-auto flex flex-col items-center z-2'>

      <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >EXPLORE</p>

        <h4 className='font-bold text-[42px] '>Car <span className='text-primary' >Promo</span> Video</h4> 
   
            <button onClick={()=>setOpen(!open)} className='cursor-pointer hover:text-primary  border border-primary w-[90px] flex justify-center items-center text-[3rem] h-[90px] rounded-full' >
                <Play/>
            </button>
    </div>

    </section>
    {
        open && 
        <YoutubePromo setOpen={setOpen} />
    }
    </>
)
}

export default CarPromo


type youtubePromoProps= {
    setOpen:any
}
const YoutubePromo:React.FC<youtubePromoProps> = ({ setOpen }) => {
  useEffect(() => {
    const youtubePromo = document.getElementById("modal-open");
    
    if (youtubePromo) {
      setTimeout(() => {
        youtubePromo.classList.add("modal-open");
      }, 100);
    }

    
  }, []);
  const leaveCarPromo = ()=>{
      const youtubePromo = document.getElementById("modal-open");
      if (youtubePromo) {
        youtubePromo.classList.remove("modal-open");
      }
     setTimeout(() => {
        setOpen(false)
      }, 500);  
  }
  return (
    <div
     
      id="modal-open"
      className="flex justify-center items-center transition-opacity duration-[.5s] opacity-0 fixed w-screen h-screen bg-black/80 z-10 top-0 left-0">
        <div className="max-w-[750px] max-md:px-7 h-full w-full  flex justify-center flex-col">
            <span  onClick={() => leaveCarPromo()} className="cursor-pointer ml-auto w-fit mb-2">X</span>
            <iframe className='h-full w-full max-h-[480px] max-md:max-h-[220px]' src="https://www.youtube.com/embed/1LxcTt1adfY?autoplay=1" allowFullScreen={true}></iframe>
            </div>
        </div>
  );
};



