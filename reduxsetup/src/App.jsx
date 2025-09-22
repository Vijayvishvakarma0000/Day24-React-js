import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Teacher from './pages/Teacher'
import Student from './pages/Student'
import Header from './components/Header'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
            <Route path='/' element={<Teacher/>}/>
            <Route path='/student' element={<Student/>}/>
      </Routes>
    </div>
  )
}

export default App