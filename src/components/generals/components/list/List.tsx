import { useRef } from "react";

type SelectListProps ={ text:any;
      icon:any;
     styles?:any;
     classs?:string;
     id:string

 }
const List:React.FC<SelectListProps> = ({id, text, icon,styles,classs }) => {
   

    const inputRef = useRef(null);

    return (
        <label 
            htmlFor={text} 
            id="list" 
            style={styles}  
            className={`relative rentformLanding ${classs}`} 
            onClick={() => inputRef.current?.showPicker()}
        >
            <span>{text} </span> {icon}
            <input 
                ref={inputRef} 
                className="hidden" 
                type="date" 
                name={text} 
                id={text} 
            />
        </label>
    );
};

export default List;

