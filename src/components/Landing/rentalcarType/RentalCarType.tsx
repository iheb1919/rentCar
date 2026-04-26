import { useEffect } from 'react'

import Slider from 'react-slick';
import { NextButton, PrevButton, usePrevNextButtons } from '../carFleet/azeaze'
import { useDotButton } from '../carFleet/CarFleet'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import Imageround from '../../generals/imageRound/Imageround'
import { ArrowDiagonalTopRight } from '../../../icons/icons'

const RentalCarType = () => {
  return (
    
      <CarType/>
       
  )
}

export default RentalCarType

const CarType = ()=>{
    const images = [
        { id: 1, src: '/carRent%20images/cars/02.jpg', text:"SUV" },
        { id: 2, src: '/carRent%20images/cars/01.jpg', text:"Convertible" },
        { id: 3, src: '/carRent%20images/cars/03.jpg', text:"Luxury Cars" },
        { id: 4, src: '/carRent%20images/cars/04.jpg', text:"Sport Cars" },
        { id: 5, src: '/carRent%20images/cars/05.jpg', text:"Sedan" },
        { id: 5, src: '/carRent%20images/cars/06.jpg', text:"Small Cars" }
      ];
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [slidesInView, setSlidesInView] = React.useState<number[]>([]);
    const onSelect = React.useCallback(() => {
      if (!emblaApi) {
        return;
      }
      setSlidesInView(emblaApi.slidesInView());
     
    }, [emblaApi]);
    useEffect(() => {
        if (emblaApi) {
          onSelect()
        }
      }, [emblaApi,onSelect])
  const { selectedIndex } =useDotButton(emblaApi)

    return(
        <section className=' relative px-[12px] py-[120px] w-full flex flex-col gap-10 items-center'>
             <div className='relative  container  mx-auto flex flex-col items-center z-2'>
                <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >CATEGORIES</p>
                <h4 className='font-bold text-[42px]'>Rental 
                    <span className='text-primary' > Car Types</span>
                </h4>
            </div>
            <div className=' container'>
            <div className=' w-full mx-auto  max-w-[1200px] flex justify-center items-center flex-col gap-5 '>
             
            <RentalCarTypeCarousel 
            textPosition="top"
              button={<ArrowDiagonalTopRight/>}
              images={images}
             />
            </div>
            </div>
        </section>
    )
}





export  const RentalCarTypeCarousel = ({button,images,textPosition}) => {
  const settings = {
    customPaging: function() {
        return (
            <div   className={`caroucelDot `} ></div>
        );
      },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Tablets and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
  };

  return (
    <div className="w-full min-md:px-4">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="">
            <Imageround image={image.src}
            textPosition={textPosition}
            button={button ?button  :image.id} 
            btnstyle="
            bg-primary 
            dark:bg-transparent
            border 
            dark:text-white
            group-hover:bg-black
            dark:group-hover:bg-primary 
            dark:group-hover:text-black
            border-primary
            group-hover:border-black
            text-black
            group-hover:text-white " 
            text={image.text}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

