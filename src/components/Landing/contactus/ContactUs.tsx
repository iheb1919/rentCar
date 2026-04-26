import React, { ReactNode } from 'react'
import { LocationEmpty, MailCloseFill, PhoneCallSpeaker } from '../../../icons/icons'

const ContactUs = () => {
  return (
    <section className=' w-full py-[80px] pt-[90px] px-5 max-md:px-15'>
    <div className="container mx-auto ">

        <div className='grid grid-cols-3 max-md:grid-cols-1 rounded-xl border border-[var(--bgBox)] '>
            <ContactCell icon={<PhoneCallSpeaker className='text-black max-w-6 w-1/2 h-1/2' />} title={'Call us'} text={'+971 52-333-4444'}/>
            <ContactCell icon={<MailCloseFill className='text-black max-w-6 w-1/2 h-1/2'/>} title={'Write to us'} text={'example@email.com'}/>
            <ContactCell icon={<LocationEmpty className='text-black max-w-6 w-1/2 h-1/2'/>} title={'Address'} text={'Dubai, Water Tower, Office 123'}/>
        </div>
    </div>
    </section>
  )
}

export default ContactUs
 type ContactCellProps={
    icon : ReactNode ;
    title:string ;
    text:string  ;
 }
export const  ContactCell:React.FC<ContactCellProps> = ({icon,title,text})=>{
    return(
        <div className='flex gap-4 ContactCell  flex-nowrap jusstify-center items-center p-5  '>
           <div className='flex gap-4 max-md:pb-10 max-md:border-b max-md:border-r-0 border-r border-[var(--bgBox)] flex-nowrap  items-center flex-1'>
           <div className='shrink-0 bg-primary flex justify-center items-center rounded-full h-[55px] w-[55px] '>
                {icon}
            </div>
            <div className='flex flex-col h-fit '>
                <h5 className=" text-[14px] text-[var(--text-body)] font-bold "> {title} </h5>
                <p className=" text-sm text-[#999] leading-6 "> {text} </p>
            </div>
           </div>
        
        </div>
    )
}