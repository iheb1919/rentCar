/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
type SelectListProps ={ text:any;
      icon:any;
     styles?:any;
     classs?:string

 }
const SelectList:React.FC<SelectListProps> = ({ text, icon,styles,classs }) => {
    const [open, setOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const [isTop, setIsTop] = useState(false);
    
    useEffect(() => {
        if (open) {
            setTimeout(() => setShowScroll(true), 500); 
        } else {
            setShowScroll(false);
        }
    }, [open]); 

    const MenuFloat = useRef<HTMLDivElement>(null);

    // Scroll function with useCallback to prevent unnecessary re-creations
    const onscrollFn = useCallback(() => {
        if (MenuFloat.current && open) {
            const rect = MenuFloat?.current?.getBoundingClientRect();
            const hasReachedBottom = rect.bottom >= window.innerHeight;

            if (hasReachedBottom !== isTop) {
                setIsTop(hasReachedBottom);
            }
        }
    }, [open, isTop]);

    // Attach and detach event listener when `open` changes
    useLayoutEffect(() => {
        if (open) {
            window.addEventListener("scroll", onscrollFn);
        } else {
            window.removeEventListener("scroll", onscrollFn);
            setIsTop(false);
        }

        return () => {
            window.removeEventListener("scroll", onscrollFn);
        };
    }, [open, onscrollFn]);

    return (
        <div id="list" onClick={() => setOpen(!open)} style={styles} className={`rentformLanding  ${classs}`} >
            <span>{text} </span> {icon}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed w-screen h-screen z-[12] top-0 left-0"
                ></div>
            )}
            <div
                ref={MenuFloat}
                className={`${open ? "max-h-[350px]" : "max-h-0"} 
                w-full transition-[max-height] duration-500 z-[13] absolute 
                ${MenuFloat?.current?.getBoundingClientRect().bottom >= window.innerHeight ? "top-[unset] bottom-full" : "top-[110%]"} left-0  
                ${showScroll ? "overflow-y-auto" : "overflow-hidden"}`}
            >
                {[...Array(7)].map((_, i) => (
                    <div
                        className="hover:bg-primary py-3 bg-[#222] !w-full !mb-0 border-b-[1px] border-white/10 last:border-0"
                        key={i}
                    >
                        alfa romeo
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectList;

