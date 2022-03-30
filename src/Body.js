import React from 'react'
import {Routes, Route } from "react-router-dom"
import Tabel from './tabel'
import Input from './input'
import Edit from './edit'
import View from './view'

export default function Body() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Tabel/>}/>
            <Route path='/add-data' element={<Input/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/view/:id' element={<View/>}/>
        </Routes>
    </div>
  )
}
