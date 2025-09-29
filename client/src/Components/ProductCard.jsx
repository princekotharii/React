import React from 'react'

function ProductCard(props) {
  return (
    <div className="relative w-[65%]">
      <img src={props.img} className="" />
    </div>
  )
}

export default ProductCard