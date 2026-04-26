import React from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import DetailsAnimated from '../../components/header/DetailsAnimated'

const Faq = () => {
  return (
    <div className=''>
    <AboutHeader
             position="center"
               background='url(/carRent%20images/slider/4.jpg'
                 headTitle="Frequently Asked Questions
"
                 title="Popular Questions"
                 />
     <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
     <FaqQuestion/>
 <PageFooter/>
    </div>
  )
}

export default Faq


export const FaqQuestion = ()=>{
  return(
    <div className='container mx-auto gap-5 my-[90px] grid grid-cols-1 lg:grid-cols-3 ' >
        <div className=' flex flex-col gap-3'>
        <DetailsAnimated title="Age and responsibility" num="1." text={["Driver must be 25+ years old to drive economy, luxury cars and supercars."]}/>
        <DetailsAnimated title="Deposit" num="2." text={["500 USD will be blocked on your card for the duration of 24 days, cash deposits are also accepted. This amount will be used only for fines and toll road charges. terms & conditions apply."]}/>
        <DetailsAnimated title="Documents" num="3." text={["A Passport copy is required, Valid Driving License, Mobile number, Email address and Location and Time of delivery"]}/>
        
        </div>
        <div>
          <img src="/carRent%20images/about2.png" alt="" />
        </div>
        <div className=' flex flex-col gap-3'>

        <DetailsAnimated title="Car Delivery" num="4." text={["At the time of Delivery our team will contact And Deliver the car to your Location. On spot, You will check the car, Sign the contract & receive the key. Enjoy your ride !"]}/>
        <DetailsAnimated title="Enquire Now" num="5." text={["You can contact us for a quotation & our team will assist you with the booking process. You can use the contact methods available on this page."]}/>
        <DetailsAnimated title="Payment Methodes" num="6." text={["We offer a variety of payment methods. We accept cash, Crypto and the majority of credit cards such as Visa, MasterCard and American Express."]}/>
        </div>

    </div>
  )
}