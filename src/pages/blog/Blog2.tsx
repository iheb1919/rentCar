import AboutHeader from '../../components/aboutHeader/AboutHeader'
import PageFooter from '../../components/generals/pageFooter/PageFooter'
import { usePagination } from '../../hooks/usePaginationControls'
import { ArrowDiagonalTopRight } from '../../icons/icons'
import Imageround from '../../components/generals/imageRound/Imageround'
import { Link } from 'react-router'

const Blog2 = () => {
  return (
    <div className=''>
       <AboutHeader
        background='url(/rentCar/carRent-images/slider/1.jpg'
        headTitle="Blog & News"
        title="Latest News"
        position='center'
      /> 
      <div className='h-[50px] z-2 relative -mt-5 w-[2px] bg-primary mx-auto ' ></div>
      <BlogListComp />
      <PageFooter />
    </div>
  )
}

export default Blog2


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
      img: "/rentCar/carRent-images/blog/3.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "Rental cost of sport and other cars",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/4.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "Rental cars how to check driving fines?",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/5.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "How to Rent a Car at the Airport Terminal?",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/6.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "Penalties for violating the rules in rental cars",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/7.jpg"

    },
    {
      date: "29,Dec,2025",
      title: "How to check a car before renting?",
      blogger: "Olivia D.",
      comments: 5,
      img: "/rentCar/carRent-images/blog/8.jpg"

    },
  ]
   const {
            currentItems,
            PaginationControls,
          } = usePagination(blogList, 6);
  return (
    <>
    <div className='container mx-auto my-[90px] grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

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
  console.log(data)
  return (
    <Imageround image={data.img} 
    button={<Link to="/blog/singleblog"> 
                    <span style={{lineHeight:"10px"}} className="font-bold text-white text-sm  group-hover:hidden  ">29 <br/> <i className="font-light text-xs"> Jan</i> </span>
                    <ArrowDiagonalTopRight className="hidden group-hover:block "/>
                  </Link>} 
   btnstyle={`bg-primary dark:bg-transparent border border-primary group-hover:bg-black 
   border-primary
   group-hover:border-black
   text-black
   group-hover:text-white` } 
   text={data.title} 
   sub_text="Rental"
   textPosition="bottom"
   
   />
  )
}

