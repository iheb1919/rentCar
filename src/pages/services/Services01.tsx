import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import TextGrid from '../../components/generals/textRound/TextRound'
import { ArrowDiagonalTopRight } from '../../icons/icons'
import RentNow from '../../components/Landing/rentNow/RentNow'
import CarPromo from '../../components/Landing/carPromo/CarPromo'

const Services01 = () => {
    const textGrid = [
        {title:"Corporate Car Rental",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:<ArrowDiagonalTopRight/> },
        {title:"Car Rental with Driver",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:<ArrowDiagonalTopRight/> },
        {title:"Airport Transfer",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:<ArrowDiagonalTopRight/> },
        {title:"Fleet Leasing",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:<ArrowDiagonalTopRight/> },
        {title:"VIP Transfer",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:<ArrowDiagonalTopRight/> },
        {title:"Private Transfer",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:<ArrowDiagonalTopRight/> },
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
        {textGrid.map((grid,i)=><TextGrid key={i} 
        btnText={grid.btnText} 
        btnstyle="
            bg-black 
            dark:bg-[#222]
            dark:text-white
            group-hover:bg-primary
            dark:group-hover:bg-primary 
            dark:group-hover:text-black
            text-2xl
            group-hover:border-black
            text-white
            group-hover:text-white "  
        title={grid.title}
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

export default Services01


export const OtherServices = ()=>{
    const textGrid = [
        {title:"Daily Car Rental",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:"01." },
        {title:"Monthly Car Rental",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:"01." },
        {title:"Annual Car Rental",text:"Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.",btnText:"01." },
       
    ]
    return(
        <section className=' relative px-[12px] py-[120px] w-full flex flex-col gap-10 items-center'>
                     <div className='relative  container  mx-auto flex flex-col items-center z-2'>
                        <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" >Steps                        </p>
                        <h4 className='font-bold text-[42px]'> Car Rental 
                            <span className='text-primary' > Process</span>
                        </h4>
                    </div>
                    
                    <div className='container w-full mx-auto  max-w-[1200px] 
                      grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                     
        {textGrid.map((grid,i)=><TextGrid key={i} 
        btnText={grid.btnText} 
       
        title={grid.title}
        text={grid.text}
    /> )}
                    </div>
                    
                </section>
    )
}