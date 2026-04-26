import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import CarPromo from '../../components/Landing/carPromo/CarPromo'
import Testimonials from '../../components/Landing/testimonials/Testimonials'
import WhoAreWe, { whoAreWeTexttype } from '../../components/Landing/whoAreWe/WhoAreWe'
import OurTeam from '../../components/ourTeam/OurTeam'
const About = () => {
  const  whoAreWeText:whoAreWeTexttype = {
    headerTitle:"Rentax",
    title:"We Are More Than",
    highlighttitle:"A Car Rental Company",
    text:["Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum.","Lorem ipsum potenti fringilla pretium ipsum non blandit vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant farmen."],
    list:["We offer multiple services","Multiple car repair locations"],
    
  }
  return (
    <div className='z-50' >
      <AboutHeader 
      headTitle="RENTAX"
      title="About"
      highlightTitle="Us"
      />
      <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
      <WhoAreWe whoAreWeText={whoAreWeText} />
      <CarPromo/>
      <Testimonials/>
      <OurTeam/>
      <PageFooter/>
    </div>
  )
}

export default About



