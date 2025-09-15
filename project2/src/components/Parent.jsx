import React from 'react'
import ChildA from './ChildA'

function Parent() {
    const user =" Dilli Wale ka message"
  return (
    <div>

        <ChildA u={user}/>

    </div>
  )
}

export default Parent