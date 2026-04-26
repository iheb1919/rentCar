import React from 'react'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { FooterElem, quickListType } from '../../components/Landing/footer/Footer'
import { Whatsapp, Youtube, Facebook, Instagram, HeavyCheckMark, InfoOutline } from '../../icons/icons'
import { whoAreWeTexttype } from '../../components/Landing/whoAreWe/WhoAreWe'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imageround from '../../components/generals/imageRound/Imageround'
import { slideTextImages } from '../../components/ourTeam/OurTeam'
import { Link } from 'react-router'
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const DetailTeamPage = () => {
  const myteam:slideTextImages[] = [
            { id: 1, src: '/carRent%20images/team/1.jpg', sub_text:"Sales Consultant",  text:"Dan Martin" },
            { id: 2, src: '/carRent%20images/team/4.jpg', sub_text:"Sales Consultant",  text:"Emily Arla" },
            { id: 3, src: '/carRent%20images/team/5.jpg', sub_text:"Sales Consultant",  text:"Olivia White" },
            { id: 4, src: '/carRent%20images/team/2.jpg', sub_text:"Sales Department",  text:"Margaret Nancy" },
            { id: 6, src: '/carRent%20images/team/6.jpg', sub_text:"Finance Department",  text:"Mia Jane" },
            { id: 5, src: '/carRent%20images/team/3.jpg', sub_text:"Sales Consultant",  text:"Micheal Brown" }
          ];
  return (
    <div className='z-50' >

    <AboutHeader
            position="center"
              background='url(/carRent%20images/slider/21.jpg'
                headTitle="Sales Consultant"
                title="Micheal Brown"
                />
              <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
             <TeamMateResume/>
             <div className='h-[50px] w-[2px] bg-primary  mx-auto ' ></div>

           <div className='py-[90px]'>
            <div className='container mx-auto flex flex-col gap-4'>
            <p className="text-primary  text-center text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >CERTIFIED TEAM</p>
            <h4 className='font-bold text-[42px]'>
                <span >  Our Experts Team   </span>
            </h4> 
            <TeamCaroucel 
            images={myteam}/>
            </div>
          </div> 
           <PageFooter/>
           </div>
  )
}

export default DetailTeamPage


export const TeamMateResume = ()=>{
  const quickList2:quickListType[] = [
          {title:<Whatsapp  />,url:""},
          {title:<Youtube  /> ,url:""},
          {title: <Facebook  />,url:""},
          {title:<Instagram/>,url:""}
  
      ]
      const  whoAreWeText:whoAreWeTexttype = {
        title:"Hello, I'm Micheal Brown. I work as your sales consultant at Rentax Luxury Car Rental.",
        text:["Car rental utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci done vitaerisus duise the nisan sapien in the miss rana duru lorem ipsum silver sapien."],
        list:["B Driver License","Bachelor's Degree","Good English"],
        
      }
  return(
    <div className=' mx-auto container py-[90px] grid grid-cols-1 max-md:grid-cols-1 gap-y-10 lg:grid-cols-3 max-sm:px-5  '>
      <div className=' flex flex-col justify-center items-center'>

        <img src="/carRent%20images/team/1.jpg" className='rounded-4xl' alt="" />
        <div className='mt-5 self-start'>
          <FooterElem 
                     list={quickList2}
                     />
                     <p className='mt-5 text-[#999] text-sm '>My e-mail address: &nbsp; <span className='text-white underline decoration-primary underline-offset-5 '>  info@renax.com</span> </p>
        </div>

      </div>
      <div className='md:ml-[8%] lg:ml-[16%] lg:col-span-2  flex flex-col justify-start items-start'>
       
            <div className="  px-1.5rem">
            <h6 className="text-[21px] font-bold leading-[1.95rem]  mb-[15px]" >{whoAreWeText.title}  </h6>
            {
              whoAreWeText?.text?.map((text,i)=><p key={i} className="dark:text-[#999] text-[#555] text-[14px] font-[300] leading-[1.95rem] mb-[15px]  last-of-type:mb-[30px] break-words " > {text} </p>)
            }
            <div className=" flex flex-col gap-4 mb-[30px]">
                {
                  whoAreWeText?.list?.map((List:string,i:number)=> <div className="flex gap-3">
                  <div key={i} className="bg-[var(--bgBox)] flex justify-center items-center dark:text-primary text-gray-600  h-9 w-9 rounded-full">
                    <HeavyCheckMark/>
                  </div>
                  <span className="dark:text-white text-[#555] text-[14px] font-[300] leading-[1.95rem]">{List}</span>
              </div>)
                }
            
            </div>
       

            </div>
            <TabGroup className={" w-full"}>
      <TabList className={" flex gap-5 border-b border-primary"}>
      <Tab className={({ selected }: { selected: boolean }) =>
        classNames('hover:text-primary flex flex-col justify-center gap-[0.9375rem] items-center h-[3.4375rem] rounded-lg py-[0.5625rem] outline-0 text-menuTitle font-medium leading-5 relative',
          selected ? 'text-primary   ': 'text-gray11 ')}> 
        {({  selected }) => (<>Biography</>)}
      </Tab>
      <Tab className={({ selected }: { selected: boolean }) =>
        classNames('hover:text-primary flex flex-col justify-center gap-[0.9375rem] items-center h-[3.4375rem] rounded-lg py-[0.5625rem] outline-0 text-menuTitle font-medium leading-5 relative',
          selected ? 'text-primary   ': 'text-gray11 ')}> 
        {({  selected }) => (<>Education</>)}
      </Tab>
      <Tab className={({ selected }: { selected: boolean }) =>
        classNames('hover:text-primary flex flex-col justify-center gap-[0.9375rem] items-center h-[3.4375rem] rounded-lg py-[0.5625rem] outline-0 text-menuTitle font-medium leading-5 relative',
          selected ? 'text-primary   ': 'text-gray11 ')}> 
        {({  selected }) => (<>Awards</>)}
      </Tab>
       
      </TabList>
      <TabPanels className={"pt-4"}>
        <TabPanel className={"dark:text-[#999] text-[#555] text-[14px] font-[300] leading-[1.95rem] mb-[15px]  last-of-type:mb-[30px] break-words "} >Biography utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci done vitaerisus duise the nisan sapien in the miss rana duru silver sapien.</TabPanel>
        <TabPanel className={"dark:text-[#999] text-[#555] text-[14px] font-[300] leading-[1.95rem] mb-[15px]  last-of-type:mb-[30px] break-words "} >Education utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci done vitaerisus duise the nisan sapien in the miss rana duru silver sapien.</TabPanel>
        <TabPanel className={"dark:text-[#999] text-[#555] text-[14px] font-[300] leading-[1.95rem] mb-[15px]  last-of-type:mb-[30px] break-words "} >Awards utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci done vitaerisus duise the nisan sapien in the miss rana duru silver sapien.</TabPanel>
      </TabPanels>
    </TabGroup>
      </div>

    </div>
  )
}



type TeamCaroucelProps = {
  images:slideTextImages[],
}
export const TeamCaroucel:React.FC<TeamCaroucelProps> = ({images}) => {
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
           button={<Link to="/our_team/detail/" ><InfoOutline className='text-[#fff] text-3xl group-hover:text-black ' /></Link>} 
           btnstyle="bg-primary 
              dark:bg-transparent 
              border
              border-primary 
              group-hover:bg-primary 
              text-black"
           text={image.text} 
           sub_text={image?.sub_text}
           textPosition="bottom"
            
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

