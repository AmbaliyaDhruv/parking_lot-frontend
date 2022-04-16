import React from 'react'
import "./Table.css"
function Table({data}) {
  return (
    <table className='Outer'>
        <thead>
            <tr className='tr'>
                <th>Name</th>
                <th>Phone</th>
                <th>Vehicle Number</th>
                <th>Vehicle Type</th>
                <th>Floor</th>
                <th>Slot</th>
            </tr>
        </thead>
        <tbody>
            {data.map((e)=>{
                 return <tr className='tr' key={e._id}>
                  <td>{e.name}</td>
                  <td>{e.phone}</td>
                  <td>{e.carNumber}</td>
                  <td>{e.carType}</td>
                  <td>{e.floor}</td>
                  <td>{e.slot}</td>
      
              </tr>
            })}
          
        </tbody>
    </table>
  )
}

export default Table