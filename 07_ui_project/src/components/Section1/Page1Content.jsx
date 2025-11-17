import React from 'react'
import LeftContent from '../Section1/LeftContent'
import RightContent from '../Section1/RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 gap-10 px-20 flex justify-between  h-full'>
        <LeftContent/>
        <RightContent user={props.user} />
    </div>
  )
}

export default Page1Content