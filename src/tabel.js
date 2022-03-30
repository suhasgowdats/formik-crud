import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './tabel.css'


export default function Tabel() {
  const [ list, setList]=useState([])
  useEffect(()=>{
    renderdata()
    console.log(1)
  },[])
  // console.log(list)

   const renderdata = async () => {
    let response = await fetch('https://623ca0687efb5abea6849bfe.mockapi.io/Formik')
    let data = await response.json()
    setList(data)
    console.log(data)
   
  }

  function reRender(){
    fetch('https://623ca0687efb5abea6849bfe.mockapi.io/Formik')
   .then((data)=>data.json())
   .then((users)=>setList(users))    
  }

  async function handelDelete(id){
    await fetch(`https://623ca0687efb5abea6849bfe.mockapi.io/Formik/${id}`,{
      method:'DELETE'
    })
    .then((data)=>data.json())
    .then((users)=>console.log(users))
    reRender()
  }



  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Sl.no</td>
            <td>Name</td>
            <td>Place</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item,i)=>{
            return(
              <tr key={item.id}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td>
                 <NavLink to={`/view/${item.id}`}><button className='btn1'>View</button></NavLink>
                 <NavLink to={`/edit/${item.id}`}><button className='btn1'>Edit</button></NavLink>
                 <button className='btn1' onClick={(e)=>handelDelete(item.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>  
  )
}
