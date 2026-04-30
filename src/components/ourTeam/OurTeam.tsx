import {  InfoOutline } from '../../icons/icons';
import { RentalCarTypeCarousel } from '../Landing/blog/Blog';
import { Reveal } from '../animations/Reveal';
export type slideTextImages = {
    id:number,
    src:string,
    text:string,
    sub_text?:string
}
const OurTeam = () => {
    const images:slideTextImages[] = [
        { id: 1, src: '/rentCar/carRent-images/team/1.jpg', sub_text:"Sales Consultant",  text:"Dan Martin" },
        { id: 2, src: '/rentCar/carRent-images/team/4.jpg', sub_text:"Sales Consultant",  text:"Emily Arla" },
        { id: 3, src: '/rentCar/carRent-images/team/5.jpg', sub_text:"Sales Consultant",  text:"Olivia White" },
        { id: 4, src: '/rentCar/carRent-images/team/2.jpg', sub_text:"Sales Department",  text:"Margaret Nancy" },
        { id: 6, src: '/rentCar/carRent-images/team/6.jpg', sub_text:"Finance Department",  text:"Mia Jane" },
        { id: 5, src: '/rentCar/carRent-images/team/3.jpg', sub_text:"Sales Consultant",  text:"Micheal Brown" }
      ];
  return (
     <section className='px-[12px] relative flex items-center py-[120px]  '>
        <div className="z-1 absolute w-full h-full top-0 left-0 "></div>
        <div className='max-w-[1260px]  relative  container  mx-auto flex flex-col items-center z-2'>
            <Reveal>
              <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >CERTIFIED TEAM</p>
            </Reveal>
            <Reveal>
              <h4 className='font-bold text-[42px]'>
                  <span >  Our Experts Team   </span>
              </h4> 
            </Reveal>
      
            <div className=' container'>
                <div className=' w-full mx-auto  max-w-[1200px] flex justify-center items-center flex-col gap-5 '>
                 
                <RentalCarTypeCarousel 
                textPosition="bottom"
                  button={{ button: <InfoOutline className='text-[#fff] text-3xl group-hover:text-black ' />,

                    btnstyle:`
                    bg-primary 
                    dark:bg-transparent 
                    border
                    border-primary 
                    group-hover:bg-primary 
                    text-black
                    `
                  }}
                  images={images}
                 />
                </div>
                </div>
        </div>
    
        </section>
  )
}

export default OurTeam