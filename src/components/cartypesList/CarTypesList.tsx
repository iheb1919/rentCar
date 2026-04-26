import React from 'react'
import cartypes from '../../../carTypes.json'
import Imageround from '../generals/imageRound/Imageround'
import { ArrowDiagonalTopRight } from '../../icons/icons'
import { Link } from 'react-router'

const CarTypesList = () => {

  return (
    <div className='py-[90px]'>
        <div className='container  mx-auto 
        grid 
        lg:grid-cols-3 
        md:grid-cols-2 
        grid-cols-1 
        px-2
        gap-6'
        >
        {cartypes && cartypes.map((type:string,i:number)=>
        <div className='min-h-[330px]'>
            <Imageround key={i} image={`/carRent%20images/cars/0${Math.floor(Math.random() *6) + 1}.jpg`} 
             button={ <Link className='z-10 w-full h-full flex justify-center items-center' to={`${type}/cars`} > <ArrowDiagonalTopRight/> </Link> } 
             btnstyle="
             bg-primary 
             dark:bg-transparent
             border 
             dark:text-white
             group-hover:bg-black
             dark:group-hover:bg-primary 
             dark:group-hover:text-black
             border-primary
             group-hover:border-black
             text-black
             group-hover:text-white "
            text={type} 
            textPosition="top"
            
            />
        </div>
    )}
        </div>

    </div>
  )
}

export default CarTypesList