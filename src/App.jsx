import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <>
  
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/Ourservice" element={<Service/>} />
      <Route path="/aboutus" element={<About/>} />


      </Route>
    </Routes>
    </>
    </>
  )
}

export default App
