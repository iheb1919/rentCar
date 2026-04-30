import React, { ReactNode } from 'react'
import { ArrowDiagonalTopRight,  Facebook, Whatsapp, Youtube } from '../../../icons/icons'
import { Link } from 'react-router';
export type quickListType = {
    title:string | ReactNode;
    url:string
}
const Footer = () => {
    const quickList:quickListType[] = [
        {title:"About",url:"/about"},
        {title:"Cars",url:"/all_cars"},
        {title:"Car Types",url:"/car_types"},
        {title:"Team",url:"/our_team"},
        {title:"Contact",url:"/contact"},
    ]
    const quickList2:quickListType[] = [
        {title:<Whatsapp  />,url:""},
        {title:<Youtube  /> ,url:""},
        {title: <Facebook  />,url:""},

    ]
  return (
    <section className=' w-full py-[10px] max-md:px-15'>
    <div className=" mx-auto container">

        <div className='grid grid-cols-3 max-md:grid-cols-1 rounded-xl '>
           <FooterElem 
           text="Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen." 
           title={<img className='w-[150px]' src="/rentCar/carRent-images/logo-light.png" alt=""/>} 
           list={quickList2}
           />
           <FooterElem styles={{marginLeft:"50px"}} title="Quick Links" list={quickList} />
          { <FooterElem  text="Want to be notified about our services. Just sign up and we'll send you a notification by email."  
          title="Subscribe"
          footer={ 
          <label htmlFor='emailInput '  className='group relative  border rounded-4xl h-14 border-primary overflow-hidden ' >
              <input type="text" name=""  placeholder='Email Address' className=' !bg-transparent  outline-0 h-full w-full pl-5 pr-16 rounded-4xl '  />   
                <ArrowDiagonalTopRight className='bg-primary text-black rounded-full absolute h-11 w-11 p-2 right-1.5 top-1/2 bottom-1/2 -translate-y-1/2
                group-has-focus:bg-white group-has-focus:rotate-45 transition-all duration-1000
                ' />
          </label> 
          
          
        }
          />}
        </div>
        <div className='text-xs dark:text-white/50 text-black/50 py-[40px] my-[40px] border-t border-[#222] ' >©2025  All right Reserved <span className='text-[var(--text-color)] text-sm  underline decoration-4 decoration-primary underline-offset-4' >  MEJRI Iheb</span> </div>
    </div>
    </section>
  )
}

export default Footer


type FooterElemProps = {
  title?: ReactNode;
  text?: string;
  footer?: any;
  list?: quickListType[] | ReactNode;
  styles?:any
};

export const FooterElem: React.FC<FooterElemProps> = ({ title, text, footer, list,styles }) => {
  const isListArray = Array.isArray(list); // Check if list is an array
  const isTitleObject = isListArray && typeof list[0]?.title === "object";

  return (
    <div style={{...styles}} className="pr-4 last:pr-0 text-[var(--text-body)] max-md:!ml-0   ">
      <div className="flex flex-col gap-4">
        {title && <div className="text-xl font-bold mb-4">{title}</div>}
        <div className="flex flex-col gap-4">
          {text && <p className="text-black/80 dark:text-white/80 text-xs leading-6">{text}</p>}
          {isListArray && (
            <div>
              <ul className={`${isTitleObject ? "flex gap-2" : ""}`}>
                {list.map((item, i) => (
                  <li key={i} className='flex justisfy-center items-center gap-2 mb-2'>
                   {!isTitleObject&& <div className='bg-primary h-1.5 w-1.5 rounded-full' > </div>}
                    <Link 
                      className={`${
                        isTitleObject
                          ? "border w-12 h-12 rounded-full flex justify-center dark:hover:text-black hover:bg-primary items-center border-primary"
                          : "block hover:text-primary  text-black/80 dark:text-white/80 text-sm"
                      }`}
                      to={item.url}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {footer && footer}
        </div>
      </div>
    </div>
  );
};
