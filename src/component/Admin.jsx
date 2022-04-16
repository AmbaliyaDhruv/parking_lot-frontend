

import React, { useState } from 'react'
import axios from 'axios'
import "./Admin.css"
function Admin() {
 const [floor,setfloor]=useState({
    floorName:'1',
 })
 const [slot,setslot]=useState({
    slotName:'1',
 })
  
   const hendleChange=(e)=>{
         const {id,value}=e.target
         if(id==="NewFloor"){
              setfloor({
                    floorName:value
              })
         }
         else{
              setslot({
                    slotName:value
              })
         }
   }

   const floorSubmit=(e)=>{
    e.preventDefault()
    axios.patch("https://serverforparkinglot.herokuapp.com/floor/625980234a01659a0b871359",floor).then(res=>{
        alert("Floor Updated")
       
    })
    setfloor({
        floorName:'1',
    })
   
   }

   const slotSubmit=(e)=>{
    e.preventDefault()
    axios.patch("https://serverforparkinglot.herokuapp.com/spot/625980384a01659a0b87135b",slot).then(res=>{
        alert("Spot Updated")
        
    })
    setslot({
        slotName:'1',
    })
  
   }
    
  return (
    <>
    <h1>Admin Page</h1>
    <form onSubmit={floorSubmit}>
        <label>Add New Floor</label>
        <br />
        <input type="text" id="NewFloor" value={floor.floorName} onChange={hendleChange} placeholder='Add Floor' maxLength="2" required/>
        <br />
        <input className='submit'  type="submit" />
    </form>
    <form onSubmit={slotSubmit}>
    <label>Add New Spot</label>
    <br />
        <input type="text" id='NewSlot' value={slot.slotName} onChange={hendleChange} placeholder='Add slot' maxLength="2" required />
        <br />
        <input  className='submit' type="submit" />
    </form>
    </>
    
  )
}

export default Admin