 
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { usePagination } from '../../hooks/usePaginationControls'
import {  Search } from '../../icons/icons'
import { Link } from 'react-router'

const BlogList = () => {
  return (
    <div className=''>
      <AboutHeader
        background='url(/rentCar/carRent-images/slider/1.jpg'
        headTitle="Blog & News"
        title="Latest News"
        position='center'
      />
      <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
      <ListBlogC />
      <PageFooter />
    </div>
  )
}

export default BlogList

type latestPostType = {
  date: string,
  title: string,
  type: string,
  text: string,
  img: string
}
export const ListBlogC = () => {
  const latestPost: latestPostType[] = [
    {
      date: "29,Dec,2025",
      title: "Documents required for car rental",
      type: "Rent A Car",
      text: "Lorem ipsum potenti fringilla pretium ipsum non blandit vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada the fames ac turpis enesta mauris suscipit mis nec est farmen.",
      img: "/rentCar/carRent-images/slider/5.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "Rental cost of sport and other cars",
      type: "Cars",
      text: "Lorem ipsum potenti fringilla pretium ipsum non blandit vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada the fames ac turpis enesta mauris suscipit mis nec est farmen.",
      img: "/rentCar/carRent-images/slider/4.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "Rental cars how to check driving fines?",
      type: "Battery",
      text: "Lorem ipsum potenti fringilla pretium ipsum non blandit vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada the fames ac turpis enesta mauris suscipit mis nec est farmen.",
      img: "/rentCar/carRent-images/slider/3.jpg"

    },

  ]
  const {
    currentItems,
    PaginationControls,
  } = usePagination(latestPost, 6);
  return (
    <div className='container mx-auto py-[90px] grid gap-y-7 grid-cols-1 lg:grid-cols-3' >
      <div className=' lg:col-span-2   flex flex-col gap-5 px-4'>
        {
          currentItems.map((blog: latestPostType, i) => <div key={i} className='flex flex-col rounded-2xl overflow-hidden' >
            <img src={blog.img} alt="" />
            <div className='flex flex-col gap-3 bg-[var(--bgBox)] p-10 font-light '>
              <div className='flex text-xs w-fit justify-center items-center gap-7'>

                <h3 className='decoration dark:text-white decoration-primary underline underline-offset-4'> {blog.type} </h3>
                <span className='dark:text-[#999] text-[#555] '> {blog.date} </span>
              </div>

              <div className='flex flex-col gap-3'>
                <h2 className='dark:text-white font-bold text-2xl'> {blog.title} </h2>
                <p className='text-sm leading-8  dark:text-[#999] text-[#555]  ' > {blog.text}  </p>
                <div className={`text-sm flex flex-wrap gap-5  `} >
                  <Link to="/blog/singleblog" className={`flex justify-center hover:-translate-y-2 items-center gap-1
                     duration-500 transition-all 
                      dark:hover:border-white
                       dark:hover:bg-white
                       dark:hover:text-black
                       hover:bg-black
                       hover:text-white
                       rounded-4xl bg-[var(--primary)]
                        text-black font-light py-4
                         px-7`} >Read More  </Link>
                </div>
              </div>

            </div>

          </div>)
        }
        <div className='lg:col-span-3 col-span-1'>

          <PaginationControls />
        </div>
      </div>
      <div className=' flex flex-col gap-7'>
        <div className='bg-[var(--bgBox)] w-full p-6 font-bold rounded-[20px] flex justify-center items-center text-2xl text-[#1b1b1b] 
                          ' >
          <label htmlFor='searchcar' className='group w-full relative   rounded-4xl h-14  overflow-hidden ' >
            <input type="text" id="searchcar" name="" placeholder='type Here...'
              className='outline-0 h-full w-full pl-5 pr-16 rounded-4xl dark:!bg-[#333] dark:text-white text-black placeholder:text-black dark:placeholder:text-[#999]' />
            <Search className='dark:bg-primary bg-primary text-black dark:text-black/40 rounded-full absolute h-11 w-11 p-3 right-1.5 top-1/2 bottom-1/2 -translate-y-1/2
                                             group-hover:rotate-90 transition-all duration-1000
                                             group-hover:bg-primary group-hover:text-black/40
                                            ' />
          </label>

        </div>
        {/* Recent Posts */}
        <div className='bg-[var(--bgBox)] w-full p-6 font-bold rounded-[20px] flex flex-col gap-5'>
            <h2 className='text-xl border-b dark:border-white/2 border-black/5 pb-4'> Recent Posts </h2>
            <div className='flex flex-col gap-2 max-h-[300px] overflow-auto'>
                <div className='flex gap-4 font-light text-sm dark:text-[#999] text-black ' >
                  <div className='w-[130px] shrink-0 rounded-lg overflow-hidden'>

                  <img src="/rentCar/carRent-images/slider/2.jpg" alt="" />
                  </div>
                  <p className='hover:text-primary cursor-pointer' >How to Rent a Car at the Airport Terminal?</p>
                </div>
                <div className='flex gap-4 font-light text-sm dark:text-[#999] text-black ' >
                  <div className='w-[130px] shrink-0 rounded-lg overflow-hidden'>

                  <img src="/rentCar/carRent-images/slider/19.jpg" alt="" />
                  </div>
                  <p className='hover:text-primary cursor-pointer' >Penalties for violating the rules in rental cars</p>
                </div>
                <div className='flex gap-4 font-light text-sm dark:text-[#999] text-black ' >
                  <div className='w-[130px] shrink-0 rounded-lg overflow-hidden'>

                  <img src="/rentCar/carRent-images/slider/1.jpg" alt="" />
                  </div>
                  <p className='hover:text-primary cursor-pointer' >How to check a car before renting?</p>
                </div>
            </div>
        </div>
        {/* Archives */}
        <div className='bg-[var(--bgBox)] w-full p-6 font-bold rounded-[20px] flex flex-col gap-5'>
            <h2 className='text-xl border-b dark:border-white/2 border-black/5 pb-4'> Archives </h2>
                
                <div className='flex flex-col gap-4 font-light text-sm dark:text-[#999] text-[#555] max-h-[200px] overflow-auto' >
                <p className='hover:text-primary cursor-pointer' >Decembre 2025</p>
                <p className='hover:text-primary cursor-pointer' >Novembre 2025</p>
                <p className='hover:text-primary cursor-pointer' >October 2025</p>
                 
                </div>
                
        </div>
        {/* Categories */}
        <div className='bg-[var(--bgBox)] w-full p-6 font-bold rounded-[20px] flex flex-col gap-5'>
            <h2 className='text-xl border-b dark:border-white/2 border-black/5 pb-4'> Categories </h2>
                
                <div className='flex flex-col gap-4 font-light text-sm dark:text-[#999] text-[#555] max-h-[200px] overflow-auto' >
                <p className='hover:text-primary cursor-pointer' >Car Rental</p>
                <p className='hover:text-primary cursor-pointer' >Vehicles</p>
                <p className='hover:text-primary cursor-pointer' >Rent A Car</p>
                <p className='hover:text-primary cursor-pointer' >Rental Service</p>
                 
                </div>
                
        </div>
        {/* Tags */}
        <div className='bg-[var(--bgBox)] w-full p-6 font-bold rounded-[20px] flex flex-col gap-5'>
            <h2 className='text-xl border-b dark:border-white/2 border-black/5 pb-4'> Tags </h2>
                
                <div className='flex flex-wrap gap-4 font-light text-sm dark:text-[#999] text-[#555] max-h-[200px] overflow-auto' >
                <p className='dark:hover:bg-primary hover:bg-black hover:text-white bg-primary dark:text-[#999] dark:hover:text-black py-2  px-4 rounded-3xl dark:bg-[#333] cursor-pointer' >Car</p>
                <p className='dark:hover:bg-primary hover:bg-black hover:text-white bg-primary dark:text-[#999] dark:hover:text-black py-2  px-4 rounded-3xl dark:bg-[#333] cursor-pointer' >Rental</p>
                <p className='dark:hover:bg-primary hover:bg-black hover:text-white bg-primary dark:text-[#999] dark:hover:text-black py-2  px-4 rounded-3xl dark:bg-[#333] cursor-pointer' >Service</p>
                <p className='dark:hover:bg-primary hover:bg-black hover:text-white bg-primary dark:text-[#999] dark:hover:text-black py-2  px-4 rounded-3xl dark:bg-[#333] cursor-pointer' >Airport</p>
                <p className='dark:hover:bg-primary hover:bg-black hover:text-white bg-primary dark:text-[#999] dark:hover:text-black py-2  px-4 rounded-3xl dark:bg-[#333] cursor-pointer' >Limousine</p>
                
                </div>
                
        </div>
      </div>
    </div>
  )
}