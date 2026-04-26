import PageFooter from '../../components/generals/pageFooter/PageFooter';
import OurBlog from '../../components/Landing/blog/Blog';
import CarFleet from '../../components/Landing/carFleet/CarFleet';
import CarPromo from '../../components/Landing/carPromo/CarPromo';
import CarRentalProcess from '../../components/Landing/carRentalProcess/CarRentalProcess';
import OurService from '../../components/Landing/ourService/OurService';
import RentalCarType from '../../components/Landing/rentalcarType/RentalCarType';
import RentNow from '../../components/Landing/rentNow/RentNow';
import Testimonials from '../../components/Landing/testimonials/Testimonials';
import WhoAreWe, { whoAreWeTexttype } from '../../components/Landing/whoAreWe/WhoAreWe';
import Image2 from '../../components/header/Image2';

const LandingImage2 = () => {
    const OurServicesImages = [
      { id: "01", src: '/carRent%20images/services/1.jpg', text:"VIP Transfer" },
      { id: "02", src: '/carRent%20images/services/2.jpg', text:"Private Transfer" },
      { id: "03", src: '/carRent%20images/services/3.jpg', text:"Corporate Car Rental" },
      { id: "04", src: '/carRent%20images/services/4.jpg', text:"Car Rental with Driver" },
      { id: "05", src: '/carRent%20images/services/5.jpg', text:"Airport Transfer" },
      { id: "06", src: '/carRent%20images/services/6.jpg', text:"Airport Transfer" }
    ];
    const  whoAreWeText:whoAreWeTexttype = {
        headerTitle:"Rentax",
        title:"We Are More Than",
        highlighttitle:"A Car Rental Company",
        text:["Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum."],
        list:["Sports and Luxury Cars","Economy Cars"],
        
      }
    return (
      <>
       <Image2/>
      <WhoAreWe whoAreWeText={whoAreWeText} />
      <div className='h-[50px] w-[2px] bg-primary mx-auto ' ></div>
      <OurService images={OurServicesImages}/>
      <RentNow/>
      <CarFleet/>
      <div className='h-[50px] w-[2px] bg-primary  mx-auto ' ></div>
      <RentalCarType/>
      <div className='h-[50px] w-[2px] bg-primary  mx-auto ' ></div>
      <CarRentalProcess/>
      <CarPromo/>
      <Testimonials/>
      <div className='h-[50px] w-[2px] bg-primary mx-auto ' ></div>
      <OurBlog/>
     <PageFooter/>
      </>
    )
  }

export default LandingImage2