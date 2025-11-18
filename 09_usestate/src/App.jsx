import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(1);
  
  function incraese(){
setNum(num+1)
  }


  return (
    <div>
      <h1>Number is {num}</h1>
      <button className='increase' onClick={incraese}>increace</button>
      <button className='decrease' onClick={()=>{setNum(num-1)}}>decrease</button>
    </div>
  )
}

export default App