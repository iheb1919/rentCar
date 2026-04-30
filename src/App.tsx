
import './App.css'
import Navbar from './components/navbar/Navbar'
import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider, useNavigation } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundryC from './components/errorBoundry/ErrorBoundry'
import Landing from './pages/landing/Landing'
import NotFound404 from './pages/404NotFound/NotFound404'

import About from './pages/about/About'
import LAndingSlide2 from './pages/landing/LAndingSlide2'
import CarTypes from './pages/carTypes/CarTypes'
import CarsFleet from './pages/cars/CarsFleet'
import CarDetail from './pages/carDetail/CarDetail'
import OurTeamPage from './pages/ourTeam/OurTeamPage'
import ContactPage from './pages/contactPage/ContactPage'
import DetailTeamPage from './pages/ourTeam/DetailTeamPage'
import LandingImage2 from './pages/landing/LandingImage2'
import LandingSlideShow from './pages/landing/LandingSlideShow'
import LandingImage1 from './pages/landing/LandingImage1'
import Services01 from './pages/services/Services01'
import Services02 from './pages/services/Servives02'
import ServiceDetails from './pages/services/ServiceDetails'
import CarsFleetModel2 from './pages/cars/CarsFleetModel2'
import CarsFleetModel3 from './pages/cars/CarsFleetModel3'
import { ScrollRestoration } from "react-router";
import CarsListing from './pages/cars/CarsListing'
import Faq from './pages/pages/Faq'
import ImageGallery_Grid from './pages/pages/ImageGallery_Grid'
import ImageGallery_Mansory from './pages/pages/ImageGallery_Mansory'
import Pricing from './pages/pages/Pricing'
import Testiominals from './pages/pages/Testiominals'
import VideoGallery from './pages/pages/VideoGallery'
import Blog2 from './pages/blog/Blog2'
import Blog from './pages/blog/Blog'
import BlogList from './pages/blog/BlogList'
import SingleBlog from './pages/blog/SingleBlog'


export const AppOutlet = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return  (
    <>
   
     
    <ScrollRestoration/>
      {isNavigating && <div className='fixed z-50 bg-amber-950 left-0 top-0 w-full h-full' >WAITINH</div>}
      <Navbar/>
      <Outlet />
    </>
  );
};
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <>
      <Route path="/" 
      errorElement={<ErrorBoundary FallbackComponent={ErrorBoundryC}>
      </ErrorBoundary>}
      element={<ErrorBoundary FallbackComponent={ErrorBoundryC}><AppOutlet /></ErrorBoundary>} >
          <Route index path="/" element={<Navigate to="/home" />} />
          <Route  path="/home" element={<Landing />} />
          <Route path="/slide2" element={<LAndingSlide2 />} />
            <Route path="image1" element={<LandingImage1 />} />
            <Route path="slideShow" element={<LandingSlideShow />} />
            <Route path="image2" element={<LandingImage2 />} />
          {/* About */}
          <Route path="about" element={<About />} />
          {/* Teams */}
          <Route path="our_team" element={<Outlet />} >
          <Route index element={<OurTeamPage />} />
          <Route path="detail" element={<DetailTeamPage />} />
          </Route>
          {/* Contact */}
          <Route path="contact" element={<ContactPage />} />
          {/* Cars  */}
         <Route path='all_cars' element={<Outlet />} >
         <Route index element={<CarsFleet />} />
         <Route path='model2' element={<CarsFleetModel2 />} />
         <Route path='model3' element={<CarsFleetModel3 />} />
         <Route path='car/:carId' element={<CarDetail />} />
         <Route path='listing' element={<Outlet />} >
         <Route index element={<CarsListing />} />
         <Route path='car/:carId' element={<CarDetail />} />

         </Route>
         </Route>

         <Route path="car_types" element={<Outlet />}>
          <Route index element={<CarTypes />} />
          <Route path=':carType/cars' element={<CarsFleet />} />
          <Route path=':carType/cars/:carId' element={<CarDetail />} />
         </Route>


         {/* Services */}
         <Route path='services01' element={<Services01 />} />
         <Route path='services02' element={<Services02 />} />
         <Route path='services_detail' element={<ServiceDetails />} />
          {/* PAges */}

         <Route path='imagegallery' element={<Outlet />} >
          <Route path='grid' element={<ImageGallery_Grid />} />
          <Route path='mansory' element={<ImageGallery_Mansory />} />
         </Route>
         <Route path='video_gallery' element={<VideoGallery />} />
         <Route path='pricing' element={<Pricing />} />
         <Route path='faq' element={<Faq />} />
         <Route path='testiominals' element={<Testiominals />} />
         <Route path='not_found' element={<NotFound404 />} />
         {/* BLOG */}
         <Route path='blog' element={<Outlet />} >
          <Route index element={<Blog />} />
          <Route path='blog2' element={<Blog2 />} />
          <Route path='blog_list' element={<BlogList />} />
          <Route path='singleblog' element={<SingleBlog />} />
         </Route>

      </Route>
        <Route path="/*" element={<NotFound404/> } />
   
     </>
      )
  );
  return (
    <>
    <RouterProvider router={router}/>   
    </>
  )
}

export default App
