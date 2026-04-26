import React from 'react'
import { ArrowDiagonalTopRight, Play, Whatsapp } from '../../../icons/icons'

const RentNowContact = () => {
  return (
    <section data-overlay-dark="6" className='fixedImg fixedRentNowContact relative flex items-center  '>
    <div className='relative px-5 text-white container justify-center mx-auto flex flex-col items-center z-2'>

      <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >Rent Your Car</p>

        <h4 className='font-bold text-[42px] text-center mb-[15px]'>Interested in Renting?</h4> 
        <p className='text-xs  text-center mb-[15px]'>Don't hesitate and send us a message.</p>
   
        <div className={`flex justify-center gap-2 my-4 flex-wrap `} >
        <button className= {`flex  justify-center items-center gap-2 cursor-pointer transition-all hover:-translate-y-1 hover:border-white hover:bg-white rounded-4xl
              bg-[var(--primary)] text-black text-[14px] font-light px-10 py-4 border border-[var(--primary)]`} >
                <Whatsapp className='h-5 w-5  '/>
                WhatsApp
               
                </button>               
                <button className= {`flex justify-center items-center gap-1 cursor-pointer transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:text-black hover:bg-[var(--primary)] rounded-4xl
               text-white text-[14px] font-light px-10 py-4 border border-white`} >
                Rent Now
                <ArrowDiagonalTopRight className='h-5 w-5 font-extralight'/>
                </button>
            </div>
    </div>

    </section>
  )
}

export default RentNowContact