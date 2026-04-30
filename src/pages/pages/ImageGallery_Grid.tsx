import  { useState } from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'

const ImageGallery_Grid = () => {
  return (
   <div className=''>
   <AboutHeader
            position="center"
              background='url(/rentCar/carRent-images/slider/21.jpg'
                headTitle="Our Portfolio"
                title="Image Gallery"
                />
    <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>

<ImageGalleryFilter/>
<PageFooter/>
   </div>
  )
}

export default ImageGallery_Grid

export const ImageGalleryFilter = ()=>{
  const images=[
    "/rentCar/carRent-images/gallery/1.jpg",
    "/rentCar/carRent-images/gallery/2.jpg",
    "/rentCar/carRent-images/gallery/3.jpg",
    
    "/rentCar/carRent-images/gallery/4.jpg",
    "/rentCar/carRent-images/gallery/5.jpg",
    "/rentCar/carRent-images/gallery/6.jpg",
    
    "/rentCar/carRent-images/gallery/7.jpg",
    "/rentCar/carRent-images/gallery/8.jpg",
    "/rentCar/carRent-images/gallery/9.jpg",
    
  ]
  const filters=[

    {label:"All",value:"all"},
    {label:"Luxury Cars",value:"Luxury Cars"},
    {label:"Sport Cars",value:"Sport Cars"},
    {label:"Suv",value:"Suv"},
  ]
  const [active,setActive]=useState(0)
  return(
    <div className='flex max-sm:px-5 flex-col gap-10 container mx-auto my-[90px] '>
      <div className='flex justify-center items-center gap-4'>
        {filters.map((filter,i)=><div onClick={()=>setActive(i)} key={i} className= {`${active === i && "underline underline-offset-4 decoration-3 decoration-primary"} 
          cursor-pointer font-bold hover:text-primary `} >
            {filter.label}
        </div>
      )}

      </div>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 '>
        { images.map((arr,i)=><div key={i} className='cursor-pointer relative group rounded-lg overflow-hidden
        
        '>
            <img src={`${arr}`} alt="" className=' transition-[scale] group-hover:scale-120 duration-500'/>
            <span className='absolute z-2 bottom-5 -left-50 group-hover:left-5  tarnsition-[left] duration-1000       ' > Car Name Here</span>
            <div className="bottom-fade"></div>
            </div>)

        }
      
      </div>

    </div>
  )
}