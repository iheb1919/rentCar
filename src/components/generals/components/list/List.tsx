/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from "react";

type SelectListProps = {
  text: string;
  icon: React.ReactNode;
  styles?: any;
  classs?: string;
  id: string;
};

const List: React.FC<SelectListProps> = ({ text, icon, styles, classs, id }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      htmlFor={id}
      id="list"
      style={styles}
      className={`relative rentformLanding ${classs}`}
      onClick={() => {
        if (inputRef.current && "showPicker" in inputRef.current) {
          inputRef.current.showPicker();
         }
        // else {
        //   inputRef.current?.focus();
        // }
      }}
    >
      <span>{text}</span> {icon}
      <input
        ref={inputRef}
        className="hidden"
        type="date"
        name={id}
        id={id}
      />
    </label>
  );
};

export default List;
// import { useRef } from "react";

// type SelectListProps ={ text:any;
//       icon:any;
//      styles?:any;
//      classs?:string;
//      id:string

//  }
// const List:React.FC<SelectListProps> = ({ text, icon,styles,classs }) => {
   

//     const inputRef = useRef(null);

//     return (
//         <label 
//             htmlFor={text} 
//             id="list" 
//             style={styles}  
//             className={`relative rentformLanding ${classs}`} 
//             onClick={() => inputRef.current?.showPicker()}
//         >
//             <span>{text} </span> {icon}
//             <input 
//                 ref={inputRef} 
//                 className="hidden" 
//                 type="date" 
//                 name={text} 
//                 id={text} 
//             />
//         </label>
//     );
// };

// export default List;

