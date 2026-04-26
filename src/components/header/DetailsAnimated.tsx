import  { useEffect } from 'react'
import './detailsAnimated.css'
import { ChevronRight } from '../../icons/icons';
const DetailsAnimated = ({title="Contract and Annexes",num="1.",text=["In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy)."]}) => {
    useEffect(()=>{
        const detailsList = document.querySelectorAll("details");
        function handleDetailToggle(event:any) {
          if (!event.target.open) return;
          for (let details of detailsList) {
            details.open = details === event.target;
          }
        }
        for (let details of detailsList) {
          details.addEventListener("toggle", handleDetailToggle);
        }
    },[])
  return (
    <details>
        <summary> 
          <span className=' text-primary transition-[color] ease-in delay-100 ' >{num}  &nbsp; </span>
          {title}
  
          <ChevronRight className='iconDetail '/>
          
          </summary>
       {
        text.map((text,i)=> <p key={i}>{text} </p>)
       }
      </details>
  )
}

export default DetailsAnimated