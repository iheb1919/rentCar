/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imageround from '../imageRound/Imageround';
import { motion } from 'framer-motion';
import { useState } from 'react';


const OurServicesCarousel = ({ button, images, textPosition }: { button: any; images: any[]; textPosition: any }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    customPaging: function () {
      return (
        <div className={`caroucelDot `} ></div>
      );
    },
    dots: true,
    afterChange: (index: number) => setActiveSlide(index),
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
    <div className="w-full max-sm:px-4">
      <Slider {...settings}>
        {images.map((image: any, idx) => (
          <motion.div
            key={image.id}
            animate={{
              opacity: activeSlide <= idx && idx < activeSlide + 3 ? 1 : 0.3,
              y: activeSlide <= idx && idx < activeSlide + 3 ? 0 : 20
            }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}>
            <Imageround image={image.src}
              textPosition={textPosition}
              button={button ? button : image.id}
              btnstyle="
             dark:group-hover:bg-primary 
             border
            dark:border-primary
            border-primary
            bg-primary 
            text-black
            group-hover:text-white
            group-hover:bg-black
            group-hover:border-black
            font-bold
            dark:text-white
            dark:group-hover:border-black
            dark:group-hover:text-black "
              text={image.text}
            //bottomText={true}
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default OurServicesCarousel;
