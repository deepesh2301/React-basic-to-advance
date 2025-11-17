import React from 'react'
import style from '../Header/header.module.css'

const header = () => {
  return (
    <div>
        <h3 >Header</h3>
        <button className={style.btn}>Login</button>
    </div>
  )
}

export default header