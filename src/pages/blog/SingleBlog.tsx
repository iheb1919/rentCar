import React from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { ContactPageForm } from '../contactPage/ContactPage'
import { ArrowLeft, ArrowRight, GridIcon } from '../../icons/icons'
import { Link } from 'react-router'

const SingleBlog = () => {
  return (
    <div className=''>
    <AboutHeader
      background='url(/carRent%20images/slider/1.jpg'
      headTitle="Blog"
      title="Rental cost of sport and other cars"
     
    />
    <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
      <div className='w-full'>
      <div className='container mx-auto py-[90px]'>
        <p className='text-sm text-[#555] dark:text-[#999] font-light leading-7 mb-4' >
        Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien nec elit ultrices euismon sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tristique sem eget leo faucibus porttiton.

        </p>
        <p className='text-sm text-[#555] dark:text-[#999] font-light leading-7 mb-4' >
        Nulla vitae metus tincidunt, varius nunc quis, porta nulla. Pellentesque vel dui nec libero auctor pretium id sed arcu. Nunc consequat diam id nisl blandit dignissim. Etiam commodo diam dolor, at scelerisque sem finibus sit amet. Curabitur id lectus eget purus finibus laoreet.

        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  mt-8'>
            <img className='rounded-2xl' src="/carRent%20images/slider/1.jpg" alt="" />
            <img className='rounded-2xl' src="/carRent%20images/slider/2.jpg" alt="" />
        </div>
      

      </div>
        <div className=' relative dark:bg-transparent bg-[#f2f2f2] '>
    <div className='h-[50px] z-2 absolute top-5 left-1/2   w-[1px] bg-primary mx-auto ' ></div>

           <div className='container py-[90px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4' >
            <div className='flex gap-9 mb-10'>
              <img className='rounded-full w-[90px] h-[90px]' src="/carRent%20images/team/2.jpg" alt="" />
                <div className='flex flex-col gap-1'>
                    <span className=' font-bold text-lg'>Olivia Brown                       </span>
                  <span className='text-[#999] text-xs font-light '  >29 Dec 2025 </span>
                  <p className='mt-5 text-sm font-light text-[#555] leading-8'>Lorem ultricies nibh non dolor maximus sceleue inte drana on molisen faubs neque nec tincidunte aliquam eraten volume id lectus fermen finibus in the miss rana duru fermen soreen.</p>
                </div>
            </div>
          {/* FORM */}
          <div className=' '>
            <h1 className={`text-[25px]  text-center leading-[1.25em] font-bold  mb-[15px]`}>Get in Touch</h1>
           

            <form action="" >
                <div className='   '>

                <input type="text" className=' placeholder:text-[#999] dark:!bg-[#222] ' placeholder='Full Name *'/>
                <input type="text" className=' placeholder:text-[#999] dark:!bg-[#222] ' placeholder='Email Adress*'/>
                <textarea   rows={4} className=' placeholder:text-[#999] dark:!bg-[#222] md:col-span-2 ' placeholder='Your Comment *' name="comment" id="message"></textarea>
                </div>

                <input type="submit" value="Send Message"  className='hover:!bg-white'/>

            </form>

        </div>
          </div>
        </div>
        <div className='w-full  dark:bg-[#222] py-10' >
         <div className='container mx-auto flex  font-light justify-between text-sm items-center'>
         <span className=' cursor-pointer hover:text-primary flex  dark:text-[#999] text-[#555] justify-center items-center gap-2' > <ArrowLeft className='dark:text-primary text-xl' />  Previous Post</span>
        <Link to="/blog/blog2" >   <GridIcon className='dark:text-primary text-3xl' /> </Link>
          <span className=' cursor-pointer hover:text-primary flex  dark:text-[#999] text-[#555] justify-center items-center gap-2' >   Next Post <ArrowRight className='dark:text-primary text-xl' /></span>


         </div>
        </div>
      </div>
    <PageFooter />
  </div>
  )
}

export default SingleBlog