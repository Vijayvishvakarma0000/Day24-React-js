import React, { useState,useEffect } from 'react'
import axios from 'axios';
import CallapiProps from './CallapiProps'


function Callapi() {

    const [product,setProduct]=useState([]);
    useEffect(()=>{
         axios.get('https://free-food-menus-api-two.vercel.app/bbqs').then(response=>{
            console.log(response.data)
            setProduct(response.data)
         })
    },[])
  return (
    <div className='api_itemrow'>

        {product.map((p)=>

       
<CallapiProps
id={p.id}
image={p.img}
name={p.name}
description={p.dsc}
price={p.price}

/>
 )}
    </div>
  )
}

export default Callapi