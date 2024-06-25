import React, { useState } from 'react'
import axios from 'axios'

const Show = () => {
    const [products, setProduct] = useState([])

    const getProducts = () =>{
      const api = 'https://fakestoreapi.com/products'
      axios.get(api).then((products)=>{
        console.log(products)
        setProduct(products.data)
      })
      .catch((err)=>console.log(err));
    }
  
    const addProducts = () =>{
      const api = 'https://fakestoreapi.com/products'
      axios.post(api,{
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
  
      }).then((res)=>{
        console.log(res)
      })
      .catch((err)=>console.log(err));
    }
  
  return (
    <div>
        <button onClick={getProducts} className='px-2 py-1 bg-pink-500 text-white mb-4'>Call Product Api</button>
       <ul>
        {products.length > 0 ? products.map(p => <li key={p.id} className='px-2 py-1 bg-red-200 rounded-md text-lg mb-1'>{p.title}</li>) : <h1 className=' text-xl font-semibold'>Loading...</h1> }
        
      </ul>
    </div>
  )
}

export default Show
