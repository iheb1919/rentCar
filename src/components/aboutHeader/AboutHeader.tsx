type AboutHeaderProps = {
  position?:string, background?:string,headTitle:string,title:string,highlightTitle?:string,highlightTitleReverse?:boolean
}
const AboutHeader:React.FC<AboutHeaderProps> = ({highlightTitleReverse=false,background="url(/rentCar/carRent-images/slider/3.jpg)",headTitle="RENTAX",title,highlightTitle,position}) => {
  return (
    <div style={
        {backgroundImage:background}
    }
    data-overlay-dark="6"
    className='pt-[90px]  h-[70vh]  image-container bg-cover bg-center bg-img'
    >
        
    <div className="z-2 absolute w-full top-1/2 -translate-y-1/2">
    <div className={` mx-auto  container ${position === "center" && "items-center"}  px-7 flex text-white justify-center flex-col `}>
                 <div className={`text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > {headTitle} </div>
                 <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px] ${highlightTitleReverse && "flex-row-reverse"  }  `}>
                 <h5 className={``}> {title} </h5> &nbsp;
                 {highlightTitle&&<h5 className="text-primary" > {highlightTitle} </h5> } 
                 </div>
             </div>
    </div>
        
        </div>
  )
}

export default AboutHeader