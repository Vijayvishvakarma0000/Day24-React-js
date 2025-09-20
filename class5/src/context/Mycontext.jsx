import React, { useState } from 'react'
import { createContext } from 'react'
export const Callcontext =createContext()

function Mycontext({children}) {
    const [theme,setThem]=useState('light')

    const toggel=()=>{
        setThem(theme==='light'?'dark':'light')
    }
  return (
    <div>
        <Callcontext.Provider value={{theme,toggel}}>
               {children}
        </Callcontext.Provider>
    </div>
  )
}

export default Mycontext