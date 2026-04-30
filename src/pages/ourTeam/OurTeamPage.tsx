import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import  { slideTextImages } from '../../components/ourTeam/OurTeam'
import Imageround from '../../components/generals/imageRound/Imageround'
import { InfoOutline } from '../../icons/icons'
import { Link } from 'react-router'

const OurTeamPage = () => {
  const myteam:slideTextImages[] = [
          { id: 1, src: '/rentCar/carRent-images/team/1.jpg', sub_text:"Sales Consultant",  text:"Dan Martin" },
          { id: 2, src: '/rentCar/carRent-images/team/4.jpg', sub_text:"Sales Consultant",  text:"Emily Arla" },
          { id: 3, src: '/rentCar/carRent-images/team/5.jpg', sub_text:"Sales Consultant",  text:"Olivia White" },
          { id: 4, src: '/rentCar/carRent-images/team/2.jpg', sub_text:"Sales Department",  text:"Margaret Nancy" },
          { id: 6, src: '/rentCar/carRent-images/team/6.jpg', sub_text:"Finance Department",  text:"Mia Jane" },
          { id: 5, src: '/rentCar/carRent-images/team/3.jpg', sub_text:"Sales Consultant",  text:"Micheal Brown" }
        ];
  return (
    <div className='z-50' >

    <AboutHeader
            position="center"
              background='url(/rentCar/carRent-images/slider/3.jpg'
                headTitle="Sales Consultants"
                title="Our Experts Team"
                />
              <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
             
          <div className='py-[90px]'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

              {
                myteam.map((team,i)=>( 
                <Imageround key={i} image={team.src} 
                  button={<Link to="detail" ><InfoOutline className='text-[#fff] text-3xl group-hover:text-black ' /></Link>} 
                 btnstyle="bg-primary 
                    dark:bg-transparent 
                    border
                    border-primary 
                    group-hover:bg-primary 
                    text-black"
                 text={team.text} 
                 sub_text={team?.sub_text}
                 textPosition="bottom"
                 
                 />))
              }
            </div>



          </div>
           <PageFooter/></div>
  )
}

export default OurTeamPage