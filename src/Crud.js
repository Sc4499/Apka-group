import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
const Crud = () => {
  const[name,setName]=useState();
  const[Email,setEmai]=useState();
  const goback = useNavigate();
  const headers= {"Access-Control-Allow-Origin":"*"};
  const handleClick=(e)=>{
    e.preventDefault();
    console.log("clicked");
   
    axios.post("https://636cf3c2ab4814f2b2739b0a.mockapi.io/scuser",{
      name:name,
      email:Email,
      headers
    }).then(()=>{
      goback("/read");
    })
 
  }
  return (
    <div>
      <form className='border border-1 p-3' onSubmit={handleClick}>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label fs-4">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmai(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputname" className="form-label fs-4">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputname"/>
  </div><button type="submit"  className="btn btn-dark w-100">Submit</button>
</form>
<p>{name}</p>
<p>{Email}</p>
    </div>
  )
}

export default Crud
