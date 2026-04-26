import {  InfoCircleFilled } from '../../../icons/icons'
import  TextGrid  from '../../generals/textRound/TextRound'

const CarRentalProcess = () => {
  return (
    <section className='px-[12px] relative py-[120px] w-full flex flex-col gap-10 items-center'>
    <div className='relative  container  mx-auto flex flex-col items-center z-2'>
       <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >STEPS</p>
       <h4 className='font-bold text-[42px]'>Car Rental 
           <span className='text-primary' >  Process</span>
       </h4>
   </div>
   <div className=' contasiner'>
   <div className=' w-full mx-auto  max-w-[1200px] grid grid-cols-3 max-md:grid-cols-1 gap-4 '>
    <TextGrid  btnText=".01"  title="Choose A Car" text="View our range of cars, find your perfect car for the coming days." /> 
    <TextGrid  btnText=".02"  title="Come In Contact" text="Our advisor team is ready to help you with the booking process or any questions." /> 
    <TextGrid  btnText=".03"  title="Enjoy Driving" text="Receive the key and enjoy your car. We treat all our cars with respect." /> 
    
   </div>
   <p className='max-md:px-5  mt-5 text-sm text-[#999]  flex justify-center items-center flex-nowrap gap-2 mx-auto'>
  <InfoCircleFilled className="text-[1.2rem] text-primary  dark:text-white self-start flex-shrink-0"/>
  If you've never rented a car before, we'll guide you through the process.
</p>



   </div>
</section>
  )
}

export default CarRentalProcess

