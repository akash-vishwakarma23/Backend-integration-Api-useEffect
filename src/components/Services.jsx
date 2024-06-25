import React, { useEffect } from 'react'

const Services = () => {
    useEffect(() =>{
        console.log('hello')
        return () => {
          console.log('bye')
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default Services
