import React, { useState } from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import Imageround from '../../components/generals/imageRound/Imageround'
import { ArrowDiagonalTopRight, Play } from '../../icons/icons'

const VideoGallery = () => {
  return (
    <div className=''>
    <AboutHeader
             position="center"
               background='url(/carRent%20images/slider/21.jpg'
                 headTitle="Videos"
                 title="Video Gallery"
                 />
     <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
 
 <ImageGalleryFilter/>
 <PageFooter/>
    </div>
  )
}

export default VideoGallery



export const ImageGalleryFilter = ()=>{
  const images=[
    "/carRent%20images/gallery/2.jpg",
    "/carRent%20images/gallery/3.jpg",
    
    "/carRent%20images/gallery/4.jpg",
    "/carRent%20images/gallery/5.jpg",
    "/carRent%20images/gallery/6.jpg",
    
   
    
  ]
 
  return(
    <div className='flex max-sm:px-5 flex-col gap-10 container mx-auto my-[90px] '>
     
      <div  className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-9   gap-4 '>
        { images.map((arr,i)=>
         <div key={i} className={` ${i <= 2 ? "lg:col-span-3":"lg:col-span-4"} `}> 
           <Imageround 
          button={<> 
                 <Play className=" text-2xl"/>
                 </>
                 }
                 buttonPosition="bottom"
         
         btnstyle="bg-primary
          dark:bg-transparent
         border border-white 
         dark:group-hover:bg-primary
         dark:group-hover:border-primary
         dark:text-white
         text-black
         group-hover:text-white
         group-hover:bg-black
         group-hover:border-black

         "
         image={`${arr}`}
       
         
         />  
         </div>
          )

        }
          
      </div>

    </div>
  )
}