import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'

import { CarDoor, GearboxSquare, TravelLuggageAndBagsRounded, User20Solid } from '../../../icons/icons';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import { NextButton, PrevButton, usePrevNextButtons } from './azeaze';

const images = [
    { id: 1, src: '/carRent%20images/slider/7.jpg', text:"VIP Transfer" },
    { id: 2, src: '/carRent%20images/slider/1.jpg', text:"Private Transfer" },
    { id: 3, src: '/carRent%20images/slider/9.jpg', text:"Corporate Car Rental" },
    { id: 4, src: '/carRent%20images/slider/8.jpg', text:"Car Rental with Driver" },
    { id: 5, src: '/carRent%20images/slider/3.jpg', text:"Airport Transfer" }
  ];
const CarFleet = () => {
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

     
     
    
const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const { selectedIndex } =useDotButton(emblaApi)
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
    <section className='max-lg:px-4 relative py-[120px] w-full flex flex-col gap-10 items-center'>
   
    <div className='relative px-5 container  mx-auto flex flex-col items-center z-2'>

      <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px]uppercase " >SELECT YOUR CAR</p>
    <h4 className='font-bold text-[35px]'>Luxury  <span className='text-primary' > Car Fleet</span>        </h4>
   
          </div>
     <div className="slider-container w-[99%] relative    max-md:px-5">
    <div className="embla h-full" ref={emblaRef}>
      <div className="embla__container h-full">
            
        
        {images.map((image,i) => (
        <div key={i} className={`embla__slide h-full max-md:min-w-[830px]  flex items-center justify-center ${selectedIndex === i &&"slick-current " } `}>
          <div key={image.id} className="  relative cursor-pointer h-full w-full">
            <div className='overflow-hidden shrink-0 rounded-lg h-full  relative z-1 '>
              <img src={image.src} className="w-full  transition-all duration-300 hover:scale-105" />
            </div>
           <div className='relative z-2 carspecs mx-auto opacity-0 transition-opacity duration-[.3s]  rounded-lg tosp-[80%]  w-[90%] 
            -mt-14 max-lg:w-full max-lg:mt-0
           bg-[var(--bgBox)]  '>
              <div className='h-full p-7 w-full flex flex-wrap justify-between items-center '>
                <div className='flex flex-col gap-1'>
                    <span className='text-2xl font-bold'>{image.text} </span>
                    <div className='flex flex-wrap justify-center items-center gap-2 text-[#999] text-sm '>
                        <div className='flex justify-center items-center gap-1'> <CarDoor  className='text-primary'/>  <span>4 Seat</span></div>
                        <div className='flex justify-center items-center gap-1'> <GearboxSquare  className='text-primary'/>  <span>Auto</span></div>                        
                        <div className='flex justify-center items-center gap-1'> <TravelLuggageAndBagsRounded  className='text-primary'/>  <span>2Bags</span></div>                        
                        <div className='flex justify-center items-center gap-1'> <User20Solid  className='text-primary'/>  <span>Age 25</span></div>
                    </div>
                </div>
                <div className='flex gap-2 mt-1' >
                        <button className='rounded-4xl leading-0.5 px-4 py-1 text-black bg-primary hover:bg-white transition-[background-color] delay-500' >Details</button>
                        <div className=' flex flex-col gap-0'><span className='text-xl font-bold text-primary'>$750</span><span className='text-sm font-bold '>/day</span></div>
                </div>
              </div>
           </div>
            </div>
        </div>
        ))}
      </div>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
    </div> 
   {/*  <Slider {...settings}>
    {images.map((image,i) => (
        <div key={i} className={`embla__slide h-full max-md:min-w-[830px]  flex items-center justify-center slick-current ${selectedIndex === i &&"slick-current " } `}>
          <div key={image.id} className="  relative cursor-pointer h-full w-full">
            <div className='overflow-hidden shrink-0 rounded-lg h-full  relative z-1 '>
              <img src={image.src} className="w-full  transition-all duration-300 hover:scale-105" />
            </div>
           <div className='relative z-2 carspecs mx-auto opacity-0 transition-opacity duration-[.3s]  rounded-lg tosp-[80%]  w-[90%] 
            -mt-14 max-lg:w-full max-lg:mt-0
           bg-[var(--bgBox)]  '>
              <div className='h-full p-7 w-full flex flex-wrap justify-between items-center '>
                <div className='flex flex-col gap-1'>
                    <span className='text-2xl font-bold'>{image.text} </span>
                    <div className='flex flex-wrap justify-center items-center gap-2 text-[#999] text-sm '>
                        <div className='flex justify-center items-center gap-1'> <CarDoor  className='text-primary'/>  <span>4 Seat</span></div>
                        <div className='flex justify-center items-center gap-1'> <GearboxSquare  className='text-primary'/>  <span>Auto</span></div>                        
                        <div className='flex justify-center items-center gap-1'> <TravelLuggageAndBagsRounded  className='text-primary'/>  <span>2Bags</span></div>                        
                        <div className='flex justify-center items-center gap-1'> <User20Solid  className='text-primary'/>  <span>Age 25</span></div>
                    </div>
                </div>
                <div className='flex gap-2 mt-1' >
                        <button className='rounded-4xl leading-0.5 px-4 py-1 text-black bg-primary hover:bg-white transition-[background-color] delay-500' >Details</button>
                        <div className=' flex flex-col gap-0'><span className='text-xl font-bold text-primary'>$750</span><span className='text-sm font-bold '>/day</span></div>
                </div>
              </div>
           </div>
            </div>
        </div>
        ))}
      </Slider> */}

</section>
  )
}

export default CarFleet


/* import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel' */

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}


/* 

 <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="px-2 relative cursor-pointer ">
            <div className='overflow-hidden rounded-lg'>

           <img src={image.src} className=" transition-all duration-300 hover:scale-105" />
            </div>
           <div className='carspecs mx-auto hidden z-1 rounded-lg tosp-[80%] absoslute w-[90%] h-[100px]
           left-1/2 -translate-y-[70%] max-md:translate-y-0 max-md:w-full
           bg-[#222]  '>
            <div className='h-full p-7 w-full flex justify-between items-center'>
            <div className='flex flex-col'>
                <span className='text-2xl font-bold'>{image.text} </span>
                <div className='flex justify-center items-center gap-2 text-[#999] text-sm '>
                    <div className='flex justify-center items-center gap-1'> <CarDoor  className='text-primary'/>  <span>4 Seat</span></div>
                    <div className='flex justify-center items-center gap-1'> <GearboxSquare  className='text-primary'/>  <span>Auto</span></div>                        
                    <div className='flex justify-center items-center gap-1'> <TravelLuggageAndBagsRounded  className='text-primary'/>  <span>2Bags</span></div>                        
                    <div className='flex justify-center items-center gap-1'> <User20Solid  className='text-primary'/>  <span>Age 25</span></div>
                </div>
            </div>
            <div className='flex gap-2' >
                    <button className='rounded-4xl leading-0.5 px-4 py-1 text-black bg-primary hover:bg-white transition-[background-color] delay-500' >Details</button>
                    <div className=' flex flex-col gap-0'><span className='text-xl font-bold text-primary'>$750</span><span className='text-sm font-bold '>/day</span></div>
            </div>

            </div>
           </div>
          </div>
        ))}
      </Slider>
*/