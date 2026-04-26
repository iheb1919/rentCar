import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import RentNow from '../../components/Landing/rentNow/RentNow'
import CarPromo from '../../components/Landing/carPromo/CarPromo'
import { OtherServices } from './Services01'
import Imageround from '../../components/generals/imageRound/Imageround'

const Services02 = () => {
    const textGrid = [
        {src: '/carRent%20images/services/1.jpg', text:" Corporate Car Rental",btnText:"01" },
        {src: '/carRent%20images/services/2.jpg',text:"Car Rental with Driver",btnText:"02" },
        {src: '/carRent%20images/services/3.jpg',text:" Airport Transfer",btnText:"03" },
        {src: '/carRent%20images/services/4.jpg',text:"Fleet Leasing",btnText:"04" },
        {src: '/carRent%20images/services/5.jpg',text:"VIP Transfer",btnText:"05" },
        {src: '/carRent%20images/services/6.jpg',text:"Private Transfer ",btnText:"06" },
    ]
  return (
    <div className='z-50' >
    <AboutHeader 
    headTitle="What We Do"
    title="Our"
    position="center"
    highlightTitle="Services"
    />
    <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
    <div className='container mx-auto py-[90px] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {textGrid.map((grid,i)=>
        <Imageround key={i} 
        image={grid.src}
        button={grid.btnText} 
        btnstyle="
            bg-primary
            text-md 
            font-bold 
            dark:bg-transparent
            dark:text-white
            dark:border
            dark:border-primary
            dark:group-hover:bg-primary 
            dark:group-hover:text-black
            text-[#1b1b1b]
            group-hover:bg-[#1b1b1b]
            group-hover:border-black
            group-hover:text-white 
            "
        text={grid.text}
    /> )}
    </div>
    <RentNow/>
    <OtherServices/>
    <CarPromo/>
   
    <PageFooter/>
  </div>
  )
}

export default Services02