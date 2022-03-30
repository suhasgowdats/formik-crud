import { useFormik } from 'formik'
import React, { useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
    const {id}=useParams();
    const nav=useNavigate()
    useEffect(()=>{
          getData()
    },[])
    const formik=useFormik({
        initialValues:{
            name:"",
            place:""
        },
        onSubmit:async(values)=>{
            const response = await fetch(`https://623ca0687efb5abea6849bfe.mockapi.io/Formik/${id}`,
            { 
              method:'PUT',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(values),
            })
            nav('/')
        }
    })
    async function getData(){
        await fetch(`https://623ca0687efb5abea6849bfe.mockapi.io/Formik/${id}`)
        .then((data)=>data.json())
        .then((users)=>formik.setValues(users))
      }
  return (
    <div>
       <form onSubmit={formik.handleSubmit}>
        <label>Name:</label>
        <input type='text' name='name' placeholder='Ender name' required='required' value={formik.values.name} onChange={formik.handleChange}/><br/>
        {formik.errors.name?<div>{formik.errors.name}</div> : null}
        <label>Place:</label>
        <input type='text' name='place' placeholder='Ender your place' required='required' value={formik.values.place} onChange={formik.handleChange}/><br/>
        {formik.errors.place?<div>{formik.errors.place}</div> : null}
        <button type='submit'>Submit</button>
      </form> 
    </div>
  )
}
