import React from 'react'
import Box from './Box'

const RightContent = (props) => {
  
  return (
       <div id='right' className='h-3/4 w-3/4 bg-gray-100  flex flex-nowrap gap-5 overflow-x-auto'>
       {props.user.map((elem)=>{
        return <Box img={elem.img} para={elem.para} comment={elem.comment} count={elem.count}/>
       })}
       </div>

  )
}

export default RightContent