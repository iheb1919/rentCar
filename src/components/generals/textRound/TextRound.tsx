import { BaselineStar, ImageRoundEffect, QuotesLeft } from "../../../icons/icons";

type textGridProps = {
  stars?: number;
  btnText?: any;
  btnstyle?: string | object;
  text?: string;
  title?: string;
  footer?:any
};

const TextGrid: React.FC<textGridProps> = ({
    stars,
  btnText,
  btnstyle,
  title,
  text,
  footer
}) => {
  return (
    <div className="cursor-pointer relative  mx-1 bg-[var(--bgBox)] w-full h-fit group rounsded-2xl    rounded-[20px_20px_20px_0]">
     {stars &&  <div className="stars ">
   
        <span className="flex ">
          {new Array(5).fill(null).map((_,i)=>(<BaselineStar key={i} className={`${ i+1 > stars&& "text-[#999]"}`} />))}
        </span>
        <div className="shap-left-top ">
          <svg
            viewBox="0 0 11 11"
             
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-[var(--bgColor)]"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              
            ></path>
          </svg>
        </div>
        <div className="shap-right-bottom">
          <svg
            viewBox="0 0 11 11"
           
            xmlns="http://www.w3.org/2000/svg"
             className="w-6 h-6 fill-[var(--bgColor)]"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              
            ></path>
          </svg>
        </div>
      </div>}
      <div className="p-[60px_40px_0_40px]">
      {stars && <QuotesLeft className="text-4xl text-primary mb-5 -mt-9" />}
      {(title || text) &&  (<div className="h-fit">
          {title &&<h5 className="mb-5 text-[20px] text-[var(--text-color)] font-bold "> {title} </h5>}
          {text &&  <p className="mb-5 text-sm text-[#999] leading-6 "> {text} </p>}
        </div>
        )
        }
      </div>
      <div className="z-2  relative flex  items-center w-full h-[90px]  ">
       <div className="w-[90px] shrink-0 relative h-[90px] bg-[var(--bgColor)] flex rounded-[0_40px_0_0] items-center justify-center">
       <button style={typeof btnstyle === "object" ? btnstyle : undefined}
          className={`${typeof(btnstyle)==="string"&& btnstyle}  bg-[var(--bgBox)] z-[6] overflow-hidden transition-all  flex justify-center items-center rounded-full h-15 w-15`}>
          {btnText}
        </button>
        <div className="absolute   top-[-24px] left-0 rotate-[270deg] rounded-[0_40px_0_0]  w-6 h-6 ">
          <ImageRoundEffect />
        </div>
        <div className="absolute   right-[-24px] bottom-0 rotate-[270deg] rounded-[0_40px_0_0] w-6 h-6 ">
          <ImageRoundEffect />
        </div>
       </div>
       {footer &&  <div className="px-5  flex-1 h-full ">
                {footer}
        </div>}
      </div>
    </div>
  );
};
export default TextGrid;
type CustomerNameProps = {
    name:string,
    position:string;
}
export const CustomerName: React.FC<CustomerNameProps> = ({name,position})=>{
    return(
        <div className='h-full w-full flex flex-col justify-center   ' >
        <span className=" text-sm text-[var(--text-body)] font-normal ">{name}</span>
        <span className='text-xs text-[#999] font-light' >{position}</span>
         </div> 
    )
}