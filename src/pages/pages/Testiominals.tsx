import React from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { FaqQuestion } from './Faq'
import TextGrid, { CustomerName } from '../../components/generals/textRound/TextRound'
import { testimonialsAvis } from '../../components/Landing/testimonials/Testimonials'

const Testiominals = () => {
  return (
    <div className=''>
    <AboutHeader
               background='url(/carRent%20images/slider/4.jpg'
                 headTitle="Testimonials"
                 title="What Clients Say"
                 />
     <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
     <TestimonialsClients/>
 <PageFooter/>
    </div>
  )
}

export default Testiominals

export const TestimonialsClients = ()=>{
  return(
    <div className='container mx-auto my-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
{testimonialsAvis.map((review,i)=>(
                <TextGrid key={i} stars={review.stars} 
                footer={ <CustomerName position={review.footer.position} name={review.footer.name} />}  
                btnText={<img src={review.footer.img} />}   
                text={review.footer.text} 
                /> 
            )
)}

    </div>
  )
}