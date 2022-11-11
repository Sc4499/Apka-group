import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {
const back = useNavigate();

    const[Name,setName]=useState();
    const[Email,setEmai]=useState();
    const[id,setid]=useState();

    useEffect(()=>{
        setid(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmai(localStorage.getItem("email"))
    },[])
 
    function handleupdate(e){
e.preventDefault();
axios.put(`https://636cf3c2ab4814f2b2739b0a.mockapi.io/scuser/${id}`,{
        name:Name,
        email:Email,
      }).then(()=>{
        back("/read");
      })
    }
    
   

  return (
    <div>
         <form className='border border-1 p-3'onSubmit={handleupdate}>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label fs-4">Email address</label>
    <input type="email" className="form-control" value={Email} onChange={(e)=>setEmai(e.target.value)} id="exampleInputEmail1"/>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputname" className="form-label fs-4">Name</label>
    <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputname"/>
  </div><button type="submit"  className="btn btn-dark w-100">Submit</button>
</form>
    </div>
  )
}

export default Update
