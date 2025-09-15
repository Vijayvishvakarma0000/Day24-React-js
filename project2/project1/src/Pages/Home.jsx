import React, { useEffect, useState } from 'react'
import Hprops from './Hprops';
import axios from 'axios';

function Home() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('https://free-food-menus-api-two.vercel.app/bbqs').then(res=>{
            console.log(res)
            setProducts(res.data)
        })
    },[])
    
  return (
    <div>
        {products.map((motu)=>{
             return(

                <Hprops
                 
                bangad={motu.id}
                image={motu.img}
                name={motu.name}
                description={motu.dsc}
                dosome={motu.price}

       
       
                />
             )
        })}
       

    </div>
  )
}

export default Home