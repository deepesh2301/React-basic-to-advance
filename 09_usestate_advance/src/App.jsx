import React, { useState } from 'react'

const App = () => {

  const [name, setName] = 
  useState([
    {
      user:"Rajesh",
      age:"50"
    },
    {
      user:"Ramesh",
      age:"40"
    }
  ])

  function magic(){
   const update = [...name]
  //  update[0].user="Brajesh"
  //  update[0].age=26
  //  update[1].user="Ritesh"
  //  update[1].age=24
 
   update[0]={...update[0],user:"Nanu",age:"50"}
   update[1]={...update[1],user:"Nani",age:"45"}
   setName(update)
 
  }

  return (
    <div>
     <h1>my name is {name[0].user},{name[0].age}</h1>
     <h1>my name is {name[1].user},{name[1].age}</h1>
     <button onClick={magic}>click magic</button>
    
    </div>
  )
}

export default App