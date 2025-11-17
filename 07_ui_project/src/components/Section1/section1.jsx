import React from 'react'
import Navbar from '../Section1/Navbar.jsx'
import Page1Content from '../Section1/Page1Content.jsx'

const Section1 = (props) => {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <Page1Content user={props.user}/>
    </div>
  )
}

export default Section1