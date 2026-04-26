import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imageround from '../imageRound/Imageround';


const OurServicesCarousel = ({button,images,textPosition}) => {
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
    <div className="w-full max-sm:px-4">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="">
            <Imageround image={image.src}
            textPosition={textPosition}
            button={button ?button  :image.id} 
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
            bottomText={true}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurServicesCarousel;
