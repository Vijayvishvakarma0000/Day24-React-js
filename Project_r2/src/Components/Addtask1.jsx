import React, { useState } from 'react'
import styles from'./Addtask1.module.css'


function Addtask1() {
    const[input,setInput]=useState('');
  return (
    <>
<div>
    <input
     
    type='text'
    placeholder='Add new some tasks'
    
   
    
    />
    <button className={styles.addbutton1}> Add ++</button>
    
    

</div>
    </>
  )
}

export default Addtask1