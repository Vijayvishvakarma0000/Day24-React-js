import React from 'react'

import "./App.css"
import Addtask1 from './Components/Addtask1';
function App() {
  
  return (

    <>

    {/* <div>

     <center class="to-do-container">
      <h1 className='todo'> TO DO APP</h1>

      <div class="container">

  <div class="row">
    <div class="col-5 ">
      <input type='text' placeholder='Enter to do '

      
      
      ></input>
    </div>
    <div class="col-5 "><input type="date" /></div>
    <div class="col-2"><button type="button" class="btn btn-primary">ADD</button>
    </div>
  </div>
  <div className='margin1'>
  <div class="row">
  <div class="col-5 ">buy milk</div>
  <div class="col-5 "><input type="date" /></div>
  <div class="col-2"><button type="button" class="btn btn-danger">Delete</button>
  </div>
  
  </div>
  </div>
</div>
     </center>


    </div> */}

    <Addtask1 />
    </>

    
  )
}

export default App;