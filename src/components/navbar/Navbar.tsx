import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavLinkItem from "./navLink";
import { PhoneCallSpeaker } from "../../icons/icons";

export type NavigationItem = {
  label: string;
  url: string;
  children: NavigationItem[];
};

const navidation: NavigationItem[] = [
  {
    label: "Home", url: "", children: [
      { label: "Slide1", url: "/home", children: [] },
      { label: "Slide2", url: "/slide2", children: [] },
      { label: "Image1", url: "/image1", children: [] },
      { label: "Image2", url: "/image2", children: [] },
      { label: "Video", url: "/video", children: [] },
      { label: "SlideShow", url: "/slideShow", children: [] },
      { label: "Grid Background", url: "/gridBackground", children: [] },

    ]
  },
  { label: "About", url: "/about", children: [] },
  {
    label: "Services", url: "", children: [
      { label: "Services 01", url: "/services01", children: [] },
      { label: "Services 02", url: "/services02", children: [] },
      { label: "Services Details", url: "/services_detail", children: [] },
    ]
  },
  {
    label: "Cars", url: "", children: [
      {
        label: "Cars Grid", url: "", children: [
          { label: "Cars model 1", url: "/all_cars", children: [] },
          { label: "Cars model 2", url: "/all_cars/model2", children: [] },
          { label: "Cars model 3", url: "/all_cars/model3", children: [] },
        ]
      },
      { label: "Cars Listing", url: "/all_cars/listing", children: [] },



    ]
  },


  {
    label: "Pages", url: "", children: [
      { label: "team", url: "/our_team", children: [] },
      {
        label: "Image Gallery", url: "", children: [
          { label: "Image Gallery Grid", url: "/imagegallery/grid", children: [] },
          { label: "Image Gallery Masonry", url: "/imagegallery/mansory", children: [] },
        ]
      },
      { label: "Video Gallery", url: "/video_gallery", children: [] },
      { label: "Pricing", url: "/pricing", children: [] },
      { label: "FAQ", url: "/faq", children: [] },
      { label: "Testiominals", url: "/testiominals", children: [] },
      { label: "Team Single", url: "/our_team/detail", children: [] },
      { label: "404 Page", url: "/not_found", children: [] },
    ]
  },


  {
    label: "Blog", url: "", children: [
      { label: "Blog Grid 01", url: "/blog", children: [] },
      { label: "Blog Grid 01", url: "/blog/blog2", children: [] },
      { label: "Blog List", url: "/blog/blog_list", children: [] },
      { label: "Post Single", url: "/blog/singleblog", children: [] },
    ]
  },
  { label: "Contact", url: "/contact", children: [] },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayNav, setDisplayNav] = useState(window.innerWidth > 1000);
  const [scrolling, setScrolling] = useState(false); // Track scrolling

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      //setWindowWidth(window.innerWidth);
      setDisplayNav(window.innerWidth > 1000);
      setOpen(false);
    };

    // Handle scroll event
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const closeResponsiveNav = () => {
    if (document.documentElement.classList.contains("desktopView")) { return }

    setOpen(false);
    setDisplayNav(!displayNav);
  }
  return (
    <nav
      className={`  absolute top-0   z-[100]  w-full
      h-[90px] 
      px-[100px] max-lg:px-[50px] max-sm:px-[10px]
      ${scrolling ? " lg:fixed nav-scroll" : "bg-transparent lg:absolute "}
      `}
    >
      <div className="container mx-auto flex justify-between items-center  h-full">
        <img src={`${import.meta.env.BASE_URL}carRent-images/logo-light.png`} alt="logo" width={130} />

        <div className="flex-1 float-end">
          <div
            onClick={() => {
              setOpen(!open);
              setDisplayNav(!displayNav);
            }}
            className={`ml-auto w-fit flex-col gap-1 burgerMenu hidden max-lg:flex 
    ${open && "open"}`}
          >
            <div className="w-7 h-1 bg-white  rounded-lg"></div>
            <div className="w-7 h-1 bg-white  rounded-lg"></div>
            <div className="w-7 h-1 bg-white  rounded-lg"></div>
          </div>

          <ul
            className={`ml-auto lg:w-fit flex gap-0 firstNav responsiveNav 
    transition-all duration-300 ${!displayNav ? "h-0 overflow-hidden" : ""}
    ${open && "h-[90vh]"}`}
          >
            {navidation.map((nav, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.1 }}

              >
                <NavLinkItem data={nav} setOpen={closeResponsiveNav} />
              </motion.li>
            ))}
            <li className="flex text-white ml-4 justify-center items-center gap-2 max-lg:hidden">
              <div className=" flex justify-center items-center
       hover:bg-primary border p-3 border-primary rounded-full w-12 h-12">
                <PhoneCallSpeaker className=" w-full h-full" />
              </div>
              <div className="flex flex-col  text-xs">
                <span className="font-light " >Need help?</span>
                <span className="text-[17px] font-normal " >855 100 4444</span>

              </div>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
