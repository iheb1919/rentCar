import Slider from "react-slick";
const Brands = () => {
    const slides=[
        "/carRent%20images/clients/1.png",
        "/carRent%20images/clients/2.png",
        "/carRent%20images/clients/3.png",
        "/carRent%20images/clients/4.png",
        "/carRent%20images/clients/5.png",
        "/carRent%20images/clients/6.png",
        "/carRent%20images/clients/7.png",
        "/carRent%20images/clients/1.png",
        "/carRent%20images/clients/2.png",
        "/carRent%20images/clients/3.png",
        "/carRent%20images/clients/4.png",
        "/carRent%20images/clients/5.png",
        "/carRent%20images/clients/6.png",
        "/carRent%20images/clients/7.png",
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
              <img 
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