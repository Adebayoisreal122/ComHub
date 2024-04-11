import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Loader from './components/Loader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <>
  
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/" element={<Loader/>} />

      <Route path="/Ourservice" element={<Service/>} />
      <Route path="/aboutus" element={<About/>} />
      </Route>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>
    </>
    </>
  )
}

export default App
