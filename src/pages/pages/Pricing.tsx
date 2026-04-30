import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { ArrowDiagonalTopRight, ImageRoundEffect } from '../../icons/icons'

const Pricing = () => {
  return (
    <div className=''>
    <AboutHeader
             position="center"
               background='url(/rentCar/carRent-images/slider/23.jpg'
                 headTitle="Pricing Plan"
                 title="Pricing Packages"
                 />
     <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
 <PricingPlan/>
 <PageFooter/>
    </div>
  )
}

export default Pricing
const pricingplan = [
  {active:false, title:"Standart Plan",price:120,advantages:["Lorem isum amet in the mis",
    "Vestibulum drana silver",
    "Elentesue habitant farmen",
    "Vivamus esse nis drana",
    "Solume place una the miss"
  ]},
  {active:true, title:"Pro Plan",price:150,advantages:["Lorem isum amet in the mis",
    "Vestibulum drana silver",
    "Elentesue habitant farmen",
    "Vivamus esse nis drana",
    "Solume place una the miss"
  ]},
  {active:false, title:"Premium Plan",price:180,advantages:["Lorem isum amet in the mis",
    "Vestibulum drana silver",
    "Elentesue habitant farmen",
    "Vivamus esse nis drana",
    "Solume place una the miss"
  ]}
]
export const PricingPlan = () =>{
  return(
    <div className='container py-[90px] mx-auto grid  gap-4 lg:grid-cols-3 grid-cols-1'>
        {
          pricingplan.map((plan,i)=>
            <div
            key={i}
          className={` p-[60px_45px] cursor-pointer overflow-hidden w-full h-fit group    relative 
            rounded-[20px_20px_20px_20px]
            bg-[var(--bgBox)] 
             
          `}
        >
          
            <div className={`${plan.active && "activePlan"} right  group-hover:!top-0 transition-all duration-500 group-hover:!right-0 group-hover:!opacity-100 `} >
            <div className={` absolute -translate-1/2  top-1/2 left-1/2   flex justify-center items-center  
               
                   
               
                `}>
            <div
              className={` bg-primary translate-all duration-500
hover:bg-black
dark:hover:bg-white
 dark:hover:text-black
 hover:text-white
                      border-primary
                text-black
                   h-[70px] w-[70px]
                font-bold text-xl
                   transition-all 
                     flex justify-center items-center
                      rounded-full `}
            >${plan.price}
            </div> 
            
          </div>
              <div className="shap-left-top ">
              <ImageRoundEffect />
              </div>
              <div className="shap-right-bottom">
              <ImageRoundEffect />
              </div>
            </div>
          
    
           
         
            <div className=' flex flex-col p-5 gap-4'>
              <div className='flex flex-col gap-2'>

              <h5 className='text-2xl font-bold'> {plan.title} </h5>
              <span className={`text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `}> PER DAY </span>
              </div>

              <ul>
                {
                  plan.advantages.map((adv,i)=><li key={i} className='font-light text-sm relative pl-5 my-4 text-[#999] advantagePrice' > {adv} </li>)
                }
              </ul>
    <div className={`text-sm flex flex-wrap gap-5  `} >
                    <button className= {`flex justify-center hover:-translate-y-2 
                    items-center gap-1 duration-500 transition-all
                        dark:hover:border-white
                         dark:hover:bg-white 
                         dark:hover:text-black

                         hover:border-black
                         hover:bg-black
                         hover:text-white
                         text-black 
                         rounded-4xl bg-[var(--primary)]
                          font-light py-4 px-7
                           border border-[var(--primary)]`} >View details <ArrowDiagonalTopRight/>  </button>
                </div>
            </div>
       
         
          
        </div>)
        }
    </div>
  )
}