import React from 'react'
import {useFormik} from "formik"
import { useNavigate } from 'react-router-dom'

export default function Input() {
  const nav=useNavigate()
  const formik = useFormik({
    initialValues:{
    name:'',
    place:''
    },
    validate:(values)=>{
      const errors={}
      if(!values.name){
        errors.name='*Please enter name'
      }
      if(!values.place){
        errors.place='*please enter place'
      }
      return errors;
    },
    onSubmit:async(values)=>{
      const response = await fetch('https://623ca0687efb5abea6849bfe.mockapi.io/Formik',
      { 
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(values),
      })
      const data = await response
  //  .then((data)=>data.json())
  //  .then((users)=>console.log(users))
   nav("/")
  }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name:</label>
        <input type='text' name='name' placeholder='Ender name' value={formik.values.name} onChange={formik.handleChange}/><br/>
        {formik.errors.name?<div>{formik.errors.name}</div> : null}
        <label>Place:</label>
        <input type='text' name='place' placeholder='Ender your place' value={formik.values.place} onChange={formik.handleChange}/><br/>
        {formik.errors.place?<div>{formik.errors.place}</div> : null}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
