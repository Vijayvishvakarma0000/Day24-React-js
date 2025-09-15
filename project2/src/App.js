import React from 'react'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  return (
    <div>
     <Header/>
     <Routes>
       <Route path='/8
        ' element={<Home/>}/>
     </Routes>

    </div>
  )
}

export default App