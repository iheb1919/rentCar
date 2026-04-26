import { Link } from 'react-router'

const NotFound404 = () => {
  return (
    <div className='w-screen h-screen
    flex flex-col gap-1 justify-center 
    notFoundbg relative mr-auto text-white
    '>
        <h1 className='z-2 font-serif text-[9rem] leading-[6rem] text-center '>404</h1>
        <h2 className='text-[3rem] z-2 font-serif text-center '>NOT FOUND</h2>
        <p className='z-2 text-[2rem] text-center '>  Sometimes things just don't go as planned.</p>
        <p className='z-2 text-[1rem] text-center '>  Please try the <Link to="/" className='underline hover:text-primary cursor-pointer '> Home page</Link>  </p>
    <div className='fixed top-0 left-0 w-full h-full bg-black/70 z-0'></div>
    </div>
  )
}

export default NotFound404