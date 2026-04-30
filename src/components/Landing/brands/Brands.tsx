import Slider from "react-slick";
import LazyImage from "../../generals/image/LazyImage";
const Brands = () => {
    const slides=[
        "/rentCar/carRent-images/clients/1.png",
        "/rentCar/carRent-images/clients/2.png",
        "/rentCar/carRent-images/clients/3.png",
        "/rentCar/carRent-images/clients/4.png",
        "/rentCar/carRent-images/clients/5.png",
        "/rentCar/carRent-images/clients/6.png",
        "/rentCar/carRent-images/clients/7.png",
        "/rentCar/carRent-images/clients/1.png",
        "/rentCar/carRent-images/clients/2.png",
        "/rentCar/carRent-images/clients/3.png",
        "/rentCar/carRent-images/clients/4.png",
        "/rentCar/carRent-images/clients/5.png",
        "/rentCar/carRent-images/clients/6.png",
        "/rentCar/carRent-images/clients/7.png",
    ]
 
      const ssettings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024, // Tablets and below
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
      
              },
            },
            {
              breakpoint: 768, // Mobile
              settings: {
                slidesToShow:4,
                slidesToScroll:4,
              },
            },
            {
                breakpoint: 560, // Mobile
                settings: {
                  slidesToShow:3,
                  slidesToScroll:3,
                },
              },
          ],
      };
  return (
    <section className='dark:bg-[#222] bg-[#f2f2f2] w-full'>
    <div className="!max-w-[1250px] mx-auto">

     <div className="slider-container">
      <Slider {...ssettings}>
      {slides.map((image,index) => (
            <div 
            
            className=" embla__slide h-full cursor-pointer w-[180px] max-w-[220px]  flex justify-between items-center  " key={index}>
              <LazyImage 
              src={image} className="max-h-[85px] hover:grayscale  transition-all duration-300 hover:scale-110" />
            </div>
          ))}
      </Slider>
    </div>
    </div>
    </section>
  )
}

export default Brands