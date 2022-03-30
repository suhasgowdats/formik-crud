import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

export default function Header() {
  return (
    <>
    <div className='header'>
    <div><NavLink to={'/'}><button className='btn'>Data</button></NavLink></div>
    <div><NavLink to={'/add-data'}><button className='btn'>Add Data</button></NavLink></div>
    </div>
    </>
  )
}
