import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function View() {
    const {id}=useParams()
    const nav=useNavigate()
    const [user, setUser]=useState([])
    useEffect(()=>{
        getUser()
    },[])
    async function getUser(){
        await fetch(`https://623ca0687efb5abea6849bfe.mockapi.io/Formik/${id}`)
        .then((data)=>data.json())
        .then((users)=>setUser(users))
      }

  return (
    <div style={{marginRight:"auto",marginLeft:"auto"}}>
        <h1>Name:{user.name}</h1>
        <h1>Place:{user.place}</h1>
        <button onClick={()=>nav("/")}>Back</button>
    </div>
  )
}
