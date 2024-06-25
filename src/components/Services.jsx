import axios from "../utils/Axios"
import React, { useEffect, useState } from 'react'


const Services = () => {

    useEffect(() =>{
        getUser()
      },[])
    
      const getUser = () =>{
       
        axios.get("/users").then((user)=>{
          console.log(user)
        })
        .catch((err)=>console.log(err));
      }
    

   const [first,setFirst] =  useState("this is normal data")
    const [second,setSecond] =  useState("this is large data")
    useEffect(() =>{
        console.log('component creation')
        return () => {
          console.log('components deleted')
        }
    },[second])
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setFirst("change normal data")} className='bg-red-300 rounded-md px-2 py-1 mb-4'>first btn</button>
        <h1>{second}</h1>
        <button onClick={()=>setSecond("change large data")} className='bg-red-300 rounded-md px-2 py-1 mb-4'>Second btn</button>
      
    </div>
  )
}

export default Services
