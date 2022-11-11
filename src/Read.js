import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Read = () => {
  const history = useNavigate()
const[getdata,setGetdata] = useState([]);
function goback(){
  history("/");
}
function showdata(){
  axios.get("https://636cf3c2ab4814f2b2739b0a.mockapi.io/scuser").then(res=>{
    setGetdata(res.data);
  })
}
useEffect(()=>{
showdata();
},[]);
function handledelete(id){
  axios.delete(`https://636cf3c2ab4814f2b2739b0a.mockapi.io/scuser/${id}`).then(()=>{
showdata();
  })
}

function locastoragedata(id,name,email){
  console.log("clicked");
  localStorage.setItem("id",id);
  localStorage.setItem("name",name);
  localStorage.setItem("email",email);
}

console.log(getdata)
  return (
    <div>
      <button className='btn btn-dark m-3' onClick={goback}>Back</button>
      <table className="table border border-1">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col" className='text-center'>Edit</th>
      <th scope="col" className='text-center'>Delete</th>
    </tr>
  </thead>
  <tbody>
   {getdata.map(item=>{
    return( 
      <tr key={item.id}>
      <th scope="row">{item.name}</th>
      <td>{item.email}</td>
      <td className='f-flex text-center text-center'><Link to="/update"><button className='btn btn-success' onClick={()=>locastoragedata(item.id,item.name,item.email)}>Edit</button></Link></td>
      <td className='f-flex text-center text-center'><button className='btn btn-danger' onClick={()=>handledelete(item.id)}>Delete</button></td>
    </tr>
    
 ) })} 
      
    
 
  
  
  </tbody>
</table>
    </div>
  )
}

export default Read
