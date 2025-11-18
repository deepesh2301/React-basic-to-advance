import React from 'react'
import '../Form/form.css'

const Form = () => {
  let username='';
  let userage='';
  let userstudy=''

  function handlename(elem){
    username=elem.target.value
  }

  function handleage(elem){
    userage=elem.target.value
  }

  function handlestudy(elem){
    userstudy=elem.target.value
  }

  function handlesubmit(e){
   e.preventDefault();  
    console.log("Name :",username)
    console.log("Age :", userage)
    console.log("Study :", userstudy)
  }

  return (
   <div className="form-box">
        <h2>Simple Form</h2>

        <form onSubmit={handlesubmit}>
            <label>Name</label>
            <input onChange={handlename}  type="text" placeholder="Enter your name"/>

            <label>Age</label>
            <input onChange={handleage} type="number" placeholder="Enter your age" />

            <label>study</label>
            <input onChange={handlestudy} type="text" placeholder="Enter study" />

            <button  type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default Form