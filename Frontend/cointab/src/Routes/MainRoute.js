import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Homepage from '../Pages/Homepage'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute