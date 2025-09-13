import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Loginpage from './Pages/Loginpage';
import Registration from './Pages/Registration';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact/>} />
          <Route path="/loginpage" element={<Loginpage/>} />
           <Route path="/registration" element={<Registration/>} />

      </Routes>
    </div>
  )
}

export default App;
