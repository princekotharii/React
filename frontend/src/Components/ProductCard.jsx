import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <div className='relative group sm:w-1/4 w-[280px] cursor-pointer inline-block flex-shrink-0 p-[0px_12px]'>
      <Link to={props.linksrc || '/'}>
        <div className='relative w-full pb-[100%] overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img 
              src={props.img} 
              alt={props.title}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
          </div>

          {/* Title Positioned at Top Center */}
          <div className='absolute top-4 left-1/2 -translate-x-1/2 text-center text-black  py-1 '>
            <p className='text-base lg:text-xl font-[700] leading-normal'>
              {props.title}
            </p>
          </div>

          {/* Buy Button */}
          <span className='text-white bg-black absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full 
                            opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out'>
            Buy
          </span>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
