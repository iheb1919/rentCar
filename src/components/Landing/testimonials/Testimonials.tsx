import TextGrid, { CustomerName } from '../../generals/textRound/TextRound'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const testimonialsAvis = [
    {
        stars:3,
        footer:{
            position:"customer",
            name:"Dan Martin",
            img:'/carRent%20images/team/1.jpg',
            text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
        }
    },
    {
        stars:5,
        footer:{
            position:"customer",
            name:"Olivia Brown",
            img:'/carRent%20images/team/4.jpg',
            text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
        }
    },
    {
        stars:4,
        footer:{
            position:"customer",
            name:"Emily Martin",
            img:'/carRent%20images/team/6.jpg',
            text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
        }
    },
    {
      stars:3,
      footer:{
          position:"customer",
          name:"Robert Frank",
          img:'/carRent%20images/team/3.jpg',
          text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
      }
  },
  {
      stars:5,
      footer:{
          position:"customer",
          name:"Jesica Mccury",
          img:'/carRent%20images/team/2.jpg',
          text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
      }
  },
  {
      stars:4,
      footer:{
          position:"customer",
          name:"Evelyn Elena",
          img:'/carRent%20images/team/5.jpg',
          text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
      }
  },
]
const Testimonials = () => {
    const settings = {
        
        dots: false,
        autoplay: true,
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
    <section className='relative px-[12px] flex items-center pb-[120px] '>
    <div className="z-1 absolute w-full h-full top-0 left-0 "></div>
    <div className='relative  container  mx-auto flex flex-col items-center z-2'>
        <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >Testimonials</p>
        <h4 className='font-bold text-[42px]'>What Clients Say</h4> 
        <div className='mt-9 w-full contasiner'>
            <div className=' w-full mx-auto relative '>
                <Slider {...settings}>
                {testimonialsAvis.map((review,i)=>(
                <TextGrid key={i} stars={review.stars} 
                footer={ <CustomerName position={review.footer.position} name={review.footer.name} />}  
                btnText={<img src={review.footer.img} />}   
                text={review.footer.text} 
                /> 
            )
)}
       
      </Slider>
            </div>
        </div>
    </div>

    </section>
  )
}

export default Testimonials