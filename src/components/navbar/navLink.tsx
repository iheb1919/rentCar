import React, { useState, useRef, useEffect } from "react";
import { NavigationItem } from "./Navbar";
import { ChevronDown } from "../svgAssets/SvgAssets";
import { NavLink, useLocation } from "react-router";

type NavigationItemProps = {
  data: NavigationItem;
  direction?: "left-[100%]" | "right-[100%]";
  setOpen: () => void;
  level?: number;
};

const NavLinkItem: React.FC<NavigationItemProps> = ({ data, direction, setOpen, level = 0 }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<"left-[100%]" | "right-[100%]">(direction || "left-[100%]");
  const submenuRef = useRef<HTMLUListElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isActive = (item: NavigationItem): boolean => {
    if (item.url && location.pathname === item.url) {
      return true;
    }
    return item.children.some(isActive);
  };
  const activeClass = isActive(data) ? "text-primary " : "";
  const closeNav = () => {
    setIsOpen(false)
  }
  const sideresize = () => {
    setWindowWidth(window.innerWidth);

    document.documentElement.classList.remove("desktopView", "mobileView", "tabletView");

    if (window.innerWidth <= 768) {
      document.documentElement.classList.add("mobileView");
      closeNav()
    } else if (window.innerWidth <= 1000) {
      document.documentElement.classList.add("tabletView");
      closeNav()
    } else {
      document.documentElement.classList.add("desktopView");
      closeNav()
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    sideresize()
  }, [windowWidth]);
  useEffect(() => {
    if (submenuRef.current) {
      const rect = submenuRef.current.getBoundingClientRect();
      const spaceRight = window.innerWidth - rect.left;
      //const spaceLeft = rect.left;
      // If not enough space on the right, switch to the left
      if (spaceRight < rect.width) {
        setPosition("right-[100%]");
      } else {
        setPosition("left-[100%]");
      }
    }
  }, [isOpen]);
  return (
    <li
      className={` navTitle relative font-light text-sm text-white cursor-pointer max-lg:flex-col flex lg:items-center gap-2 hover:!text-[var(--primary)] `}
      onMouseEnter={() => window.innerWidth > 1000 && setIsOpen(true)}

      onMouseLeave={() => window.innerWidth > 1000 && setIsOpen(false)}
    >
      {data.url.length > 0 ? (
        <NavLink onClick={() => { setIsOpen(false); setOpen() }}
          className={`flex p-[8px_9px] items-center w-full h-full  ${activeClass}`} to={data.url}>
          {data.label}
          {data.children.length > 0 && <ChevronDown className="h-3 w-3" />}
        </NavLink>
      ) : (
        <p onClick={(e) => {
          e.stopPropagation();
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          window.innerWidth < 1000 && setIsOpen(!isOpen);
        }} className={`flex p-[8px_9px]   items-center w-full h-full ${activeClass}`}>
          {data.label}
          {data.children.length > 0 && <ChevronDown className="h-3 w-3" />}
        </p>
      )}


      {data.children.length > 0 && (
        <ul style={{
          transform: "translateY(10%)",
        }}
          ref={submenuRef}
          className={`${data.children.length > 0 && !isOpen && "opacity-0 -z-10 hidden overflow-hidden"}  
            
            submenu transition-all  ${level === 0 ? "top-full left-0" : "top-0 right-full"} ${isOpen ? "slide-in opacity-100 ${position}" : "opacity-0 slide-out "} 
            dark:bg-[#222] dark:text-white max-sm:ml-4 max-md:!bg-transparent max-md:!text-black md:!pl-5 
            lg:absolute lg:bg-white lg:shadow-lg rounded-lg w-[200px] lg:text-gray-700`}
        >
          {data.children.map((child, index) => (
            <NavLinkItem key={index} data={child} direction={position} level={level + 1} setOpen={setOpen} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLinkItem;
