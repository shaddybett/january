import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Prime from './Components/Prime'
import { Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/prime' element = {<Prime/>}/>
        </Routes>

    </div>
  )
}
