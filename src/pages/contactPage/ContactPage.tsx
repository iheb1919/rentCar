 
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { PhoneCallSpeaker, MailCloseFill, LocationEmpty, Clock28Regular } from '../../icons/icons'

const ContactPage = () => {
  return (
    <div className='z-50' >

    <AboutHeader
            position="center"
              background='url(/rentCar/carRent-images/slider/4.jpg'
                headTitle="Get in touch"
                title="Contact"
                highlightTitle='US'
                />
              <ContactMethods/>
              <div className='py-[90px] container mx-auto max-sm:px-5 gap-4 grid grid-cols-1 lg:grid-cols-2'>
              <ContactPageForm/>
              <div className='   lg:ml-[8%] flex flex-col justify-center items-center'>
            <h1 className={` text-center text-[25px] leading-[1.25em] font-bold  mb-[15px]`}>Location</h1>
           
            <div className='w-full rounded-xl overflow-hidden mx-auto' >
                <iframe width="100%" height="350"   src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tunis%20+(Car%20Rental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">drones ireland</a></iframe></div>
          

        </div>
              </div>
          <div className='py-[90px]'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

              
            </div>



          </div>
           <PageFooter/></div>
  )
}

export default ContactPage

export const ContactMethods = ()=>{
    const contacts :ContactCardProps[]= [
        {
            icon: MailCloseFill,
            title:"Email us",
            text:"info@info.com"
        },
        {
            icon: LocationEmpty,
            title:"Our adress",
            text:"Tunis,2020"
        },
        {
            icon: Clock28Regular,
            title:"Opening Hours",
            text:"Mon-Sun: 8 AM - 7 PM"
        },
        {
            icon: PhoneCallSpeaker,
            title:"Call us",
            text:"+21622222222"
        },

        
    ]
   
    return(
        <div className='-mt-[100px] z-20 relative container max-sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-6' >
            {
                contacts.map((contact,i)=>(
                    <ContactCard key={i}
                    icon={contact.icon} 
                    title={contact.title} 
                    text={contact.text}                   />
                ))
            }
            
        </div>
    )
}

interface ContactCardProps {
    icon: any; // Expecting a React icon component
    title: string;
    text: string;
  }
export const ContactCard:React.FC<ContactCardProps> = ({icon : Icon,title,text})=>{
    return(
        <div className='overflow-hidden  relative bg-[var(--bgBox)] transition-all duration-300 hover:bg-primary hover:-translate-y-2 group cursor-pointer flex flex-col  p-[60px_30px]  rounded-4xl'>
                 <Icon className='mb-4 group-hover:text-[#1b1b1b] text-primary  w-[35px] h-[35px]' />
                 <span className='group-hover:text-[#1b1b1b] text-xl font-bold leading-6 dark:text-white text-[#1b1b1b]'> {title} </span>
                 <span className='group-hover:text-[#1b1b1b] text-sm font-light text-[#999]'> {text} </span>
                  <Icon className='absolute group-hover:text-black/4 w-1/2 h-1/2 text-black/4 dark:text-white/1 -bottom-5 -right-10' />       
            </div>
    )
}

export const ContactPageForm = ()=>{
    return(
        <div className=' '>
            <h1 className={`text-[25px]  text-center leading-[1.25em] font-bold  mb-[15px]`}>Get in Touch</h1>
           

            <form action="" >
                <div className='  grid grid-cols-1 md:grid-cols-2 gap-1'>

                <input type="text" className=' placeholder:text-[#999] dark:!bg-[#222] ' placeholder='Your Name *'/>
                <input type="text" className=' placeholder:text-[#999] dark:!bg-[#222] ' placeholder='Your Email *'/>
                <input type="text" className=' placeholder:text-[#999] dark:!bg-[#222] ' placeholder='Your Number *'/>
                <input type="text" className=' placeholder:text-[#999] dark:!bg-[#222] ' placeholder='Subject*'/>
                <textarea   rows={4} className=' placeholder:text-[#999] dark:!bg-[#222] md:col-span-2 ' placeholder='Message *' name="message" id="message"></textarea>
                </div>

                <input type="submit" value="Send Message"  className='hover:!bg-white'/>

            </form>

        </div>
    )
}