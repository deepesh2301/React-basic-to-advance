import React from 'react'
import { useState } from 'react'
import './index.css'

const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState()

  function handler(e){
e.preventDefault()
    console.log([{Name:name,age:age}])
    setName('')
    setAge('')
  }


  return (
    <div className="form-box">
  <h2>Simple Form</h2>

  <form onSubmit={handler}>
    <label>Name</label>
    <input type="text" id="name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />

    <label>Age</label>
    <input type="number" id="age" placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)}/>

    <button type="submit">Submit</button>
  </form>
</div>

  )
}

export default App