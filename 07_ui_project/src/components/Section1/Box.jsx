import React from 'react'

const Box = (props) => {
  console.log(props.user)
  return (
    <div  className='h-full w-1/3 rounded-4xl overflow-hidden relative shrink-0 '>

        <img className='w-full h-full object-cover ' src={props.img} alt="" />

        <div className='absolute top-4 left-4 text-white  px-2 py-8  h-full w-full flex flex-col justify-between '>
            <h1 className='w-10 h-10 bg-blue-200 flex justify-center items-center rounded-full font-semibold text-2xl bg-white text-black '  >{props.count}</h1>
            <p>{props.para} <br />
                <button className='bg-blue-600 px-4 py-1 item-center text-xl rounded-full mr-10 mt-3'>{props.comment}</button>
                 <i className="ri-arrow-right-line  bg-blue-600  text-2xl p-1.5 rounded-full"></i></p> 
           
            </div>
        
    </div>
  )
}

export default Box

