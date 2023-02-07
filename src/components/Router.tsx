import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Saudi from './Saudi'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/LOGIN' element={<Login/>}></Route>
        <Route path='/NationalDay' element={<Saudi/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
