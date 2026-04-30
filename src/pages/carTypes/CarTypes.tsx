import AboutHeader from '../../components/aboutHeader/AboutHeader'
import CarTypesList from '../../components/cartypesList/CarTypesList'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import RentNow from '../../components/Landing/rentNow/RentNow'

const CarTypes = () => {
  
      return (
        <div className='z-50' >
          <AboutHeader
          background='url(/rentCar/carRent-images/slider/23.jpg'
            headTitle="Categories"
            title="Rental Car "
            highlightTitle="Types"
            />
          <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
          <CarTypesList/>
          <RentNow/>
          <PageFooter/>
        </div>
      )
}

export default CarTypes