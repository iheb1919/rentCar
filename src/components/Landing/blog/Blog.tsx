import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import { NextButton, PrevButton, usePrevNextButtons } from "../carFleet/azeaze";
import { useDotButton } from "../carFleet/CarFleet";
import { ArrowDiagonalTopRight, CarDoor, GearboxSquare, TravelLuggageAndBagsRounded, User20Solid } from "../../../icons/icons";
import Imageround from "../../generals/imageRound/Imageround";
import Slider from 'react-slick';
import { slideTextImages } from "../../ourTeam/OurTeam";

const images:slideTextImages[] = [
    { id: 1, src: '/carRent%20images/blog/7.jpg', text:"VIP Transfer" },
    { id: 2, src: '/carRent%20images/blog/4.jpg', text:"Private Transfer" },
    { id: 3, src: '/carRent%20images/blog/5.jpg', text:"Corporate Car Rental" },
    { id: 4, src: '/carRent%20images/blog/8.jpg', text:"Car Rental with Driver" },
    { id: 6, src: '/carRent%20images/blog/6.jpg', text:"Car Rental with Driver" },
    { id: 5, src: '/carRent%20images/blog/3.jpg', text:"Airport Transfer" }
  ];
const OurBlog = () => {
 
  return (
    <section className='px-[12px] relative flex items-center py-[120px]  '>
    <div className="z-1 absolute w-full h-full top-0 left-0 "></div>
    <div className='max-w-[1260px]  relative  container  mx-auto flex flex-col items-center z-2'>
        <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] " >OUR BLOG</p>
        <h4 className='font-bold text-[42px]'>
            <span  >  Latest <span className='text-primary'> News </span>   </span>
        </h4> 
  
        <div className=' container'>
            <div className=' w-full mx-auto  max-w-[1200px] flex justify-center items-center flex-col gap-5 '>
             
            <RentalCarTypeCarousel 
            textPosition="top"
              button={{button:<> 
                <span style={{lineHeight:"10px"}} className="font-bold text-white text-sm  group-hover:hidden  ">29 <br/> <i className="font-light text-xs"> Jan</i> </span>
                <ArrowDiagonalTopRight className="hidden group-hover:block "/>
              </>,
            btnstyle:`bg-primary dark:bg-transparent border border-primary group-hover:bg-black 
            border-primary
            group-hover:border-black
            text-black
            group-hover:text-white`   
            }}
              images={images}
             />
            </div>
            </div>
    </div>

    </section>
  )
}

export default OurBlog

type RentalCarTypeCarouselProps={
button:any,
images:slideTextImages[],
textPosition:"top"| "bottom"
}

export  const RentalCarTypeCarousel:React.FC<RentalCarTypeCarouselProps> = ({button,images,textPosition}) => {
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
        {images.map((image:slideTextImages) => (
          <div key={image.id} className="">
             <Imageround image={image.src} 
             button={button.button} 
            btnstyle={button?.btnstyle}
            text={image.text} 
            sub_text={image?.sub_text}
            textPosition={textPosition}
            
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};