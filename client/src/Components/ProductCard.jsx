import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <div className='relative group sm:w-1/4 w-[280px] cursor-pointer inline-block flex-shrink-0'>
      <Link to={props.linksrc || '/'}>
        <div className='relative w-full pb-[100%] overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img 
              src={props.img} 
              alt={props.title}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
          </div>
        </div>

        <div className='p-6 text-center'>
          <p className='text-base lg:text-xl font-bold leading-normal'>{props.title}</p>
        </div>

        <span className='text-white bg-black absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          Buy
        </span>
      </Link>
    </div>
  )
}

export default ProductCard