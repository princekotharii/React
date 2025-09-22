import React from 'react'

function ProductCard(props) {
  return (
    <div className='bg-amber-200 w-[20%] border m-2 p-2 rounded-md '>
        <h1>Product Name: {props.name}</h1>
        <p> Details: {props.details}</p>
        <p>Price: {props.price}</p>
    </div>
  )
}

export default ProductCard