import React from 'react'

function Buynow(props) {
  return (
    <div>
        <button className="cursor-pointer p-[0.469vw_1.198vw_0.521vw_1.198vw] rounded-full font-semibold text-white bg-black transition ">
            {props.name}
        </button>
       
    </div>
)
}

export default Buynow