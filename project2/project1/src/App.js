import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import Loginpage from './Pages/Loginpage'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header/>
     <Routes>
          <Route path="/loginpage" element={<Loginpage/>} />
     </Routes>
    </div>
  )
}

export default App