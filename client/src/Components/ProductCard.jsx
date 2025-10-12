import React from 'react'
import Buynow2 from './Buynow2'

function ProductCard({ img, title }) {
  return (
    <div className="relative w-[65%] cursor-pointer overflow-hidden group">
      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Title centered */}
      {title && (
        <p className="absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-[24px] font-semibold text-center px-2">
          {title}
        </p>
      )}

      {/* Buy button slides up on hover */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-4">
        <Buynow2 name="Buy" />
      </div>
    </div>
  )
}

export default ProductCard
