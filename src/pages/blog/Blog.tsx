import { Link } from 'react-router'
import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { usePagination } from '../../hooks/usePaginationControls'
import { ArrowDiagonalTopRight, CommentIcon,  UserAltLight } from '../../icons/icons'

const Blog = () => {
  return (
    <div className=''>
       <AboutHeader
        background='url(/rentCar/carRent-images/slider/1.jpg'
        headTitle="Blog & News"
        title="Latest News"
      /> 
      <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
      <BlogListComp />
      <PageFooter />
    </div>
  )
}

export default Blog
type bloglistType = {
  date: string,
  title: string,
  blogger: string,
  comments: number,
  img: string
}
export const BlogListComp = ({ }) => {
  const blogList: bloglistType[] = [
    {
      date: "29,Dec,2025",
      title: "Documents required for car rental",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/03.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "Rental cost of sport and other cars",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/04.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "Rental cars how to check driving fines?",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/05.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "How to Rent a Car at the Airport Terminal?",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/06.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "Penalties for violating the rules in rental cars",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/01.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "How to check a car before renting?",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/02.jpg"

    },
  ]
   const {
            currentItems,
            PaginationControls,
          } = usePagination(blogList, 6);
  return (
    <>
    <div className='container mx-auto my-[90px] grid gap-y-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

      {
        currentItems.map((blog, i) => <Test key={i} data={blog} />)
      }
 <div className='lg:col-span-3 col-span-1 md:col-span-2'>

<PaginationControls />
</div>
    </div>
    </>
  )
}

export const Test = ({ data }: { data: bloglistType }) => {
  return (
    <div className=' z-20 px-3 flex  flex-col    mb-11 group  ' >
      <div className=' mb-4 h-full   '>
        <div className='  w-full overflow-hidden rounded-2xl '>
          <img className='group-hover:scale-110 transition-[scale] duration-500' src={data.img} alt="" />
        </div>
        <div className="p-[0.1px_30px_40px_30px] relative transition-[margin] duration-500
           flex flex-col gap-6 group-hover:mt-[-104px] mt-[-45px] bg-[var(--bgBox)] w-[90%] mx-auto rounded-2xl z-20 ">
          <div className=" px-4 py-3 font-light bg-primary rounded-lg w-fit text-xs dark:text-black -mt-4"> {data.date}  </div>
          <div className="relative flex flex-col gap-5 group-hover:pb-[70px] transition-[padding] duration-500 ">
            
            <div className="flex justify-star text-xs font-light gap-4 items-center">
              <span className="flex justify-center items-center gap-2 dark:text-[#999] "> <UserAltLight className='text-primary' /> {data.blogger} </span>
              <span className="flex justify-center items-center gap-2 dark:text-[#999] "><CommentIcon className='text-primary' /> 5 Comments</span>
            </div>
            <div className="text-[21px] font-bold "> <a href="post.html"> {data.title} </a> </div>
            <Link to="/blog/singleblog" className='invisible absolute bottom-0 transition-[translate_opacity] duration-500  rounded-full 
                                  h-[55px] w-[55px] group-hover:flex items-center justify-center
                                  group-hover:visible
                                  opacity-0
                                  group-hover:opacity-100
                                  translate-x-[60px]
                                  group-hover:translate-x-0
                                bg-primary 
                                dark:bg-transparent
                                border 
                                dark:text-white
                                hover:bg-black
                                dark:hover:bg-primary 
                                dark:hover:text-black
                                border-primary
                                hover:border-black
                                text-black
                                hover:text-white ' >
              <ArrowDiagonalTopRight className=' invisible group-hover:visible  w-full h-full m-5' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}