import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Table from './Table'
import "./User.css"
function UserTable() {
    const [text,setText]=useState({
        name:'',
        phone:'',
        carNumber:"",
        carType:"",
        floor:"",
        slot:"",
        entryTime:new Date().getTime(),
        
    })

    const [spot,setspot]=useState([])
    const [floor,setfloor]=useState([])

    const [data,setData]=useState([])

    useEffect(()=>{
       getData()
    },[])

    const getData=()=>{
        axios.get("https://serverforparkinglot.herokuapp.com/assistat").then(res=>{
            setData(res.data)
        })
        axios.get("https://serverforparkinglot.herokuapp.com/spot/625980384a01659a0b87135b").then(res=>{
            let arr=[]
            let num=res.data.slotName
            for(let i=1;i<=num;i++){
                arr.push(i)
            }
            setspot(arr)
            
        })
        axios.get("https://serverforparkinglot.herokuapp.com/floor/625980234a01659a0b871359").then(res=>{
            let arr=[]
            let num=res.data.floorName
            for(let i=1;i<=num;i++){
                arr.push(i)
            }
            setfloor(arr)
            
        })
    }
    

    const hendleChange=(e)=>{
        const {id,value}=e.target
        setText({...text,[id]:value})
    }

    const submitOn=(e)=>{
        e.preventDefault()
         axios.post("https://serverforparkinglot.herokuapp.com/assistat",text).then(res=>{
            setText({
                name:'',
                phone:'',
                carNumber:"",
                carType:"",
                floor:"",
                slot:"" 
             })
           
             alert("Ticket Is Create"+" "+res.data._id)
             getData()
         })
         setText({
            name:'',
            phone:'',
            carNumber:"",
            carType:"",
            floor:"",
            slot:"" 
         })
    }
  
   
  return (
    <div>
        <form onSubmit={submitOn}>
            <input type="text" id='name' value={text.name} maxLength="42" onChange={hendleChange} placeholder='Name' required/>
            <br />
            <input type="text" id='phone' value={text.phone}  maxLength="10" onChange={hendleChange} placeholder='Number' required />
            <br />
            <input type="text" id='carNumber' value={text.carNumber}  maxLength="10" onChange={hendleChange} placeholder='Vehicle Number' required/>
            <br />
            <label for="cars">Choose a vehicle type:</label>
            <br />
         <select name="vehicle" id="carType" onChange={hendleChange} required>
         <option value="">-----------</option>
         <option value="Car">Four Wheeler</option>
         <option value="Bike">Two Wheeler</option>
         <option value="Electric Vehicle">Eelectric Vehicle</option>
         <option value="Moped">Moped</option>
        </select>
        <br />
        <label for="cars">Choose a floor:</label>
        <br />
        <select name="floor" id="floor" onChange={hendleChange} required>
        <option value="">-----------</option>
        {floor.map((e,i)=>{
            return <option key={i} value={e}>{e}</option>
        })}
        </select>
        <br />
       <label for="cars">Choose a spot:</label>
       <br />
        <select name="slot" id="slot" onChange={hendleChange} required>
        <option value="">-----------</option>
        {spot.map((e,i)=>{
            return <option key={i} value={e}>{e}</option>
        })}
        </select>
        <br />
        <input className='submit' type="submit"/>
        </form>
        <h1>Diplay</h1>
        <Table data={data}/>
    </div>
    
  )
}

export default UserTable