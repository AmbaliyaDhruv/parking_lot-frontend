import React,{useState} from 'react'
import axios from 'axios'
function Exit() {
    const [text,setText]=useState({
        carNumber:""
    })
    
    const hendleChange=(e)=>{
        const {id,value}=e.target
        setText({...text,[id]:value})
    }

    const submitOn=(e)=>{
        e.preventDefault()
                console.log(text.carNumber)
         axios.delete(`https://serverforparkinglot.herokuapp.com/assistat/${text.carNumber}`).then(res=>{
            setText({
                carNumber:"",
             })
             console.log(res)
             if(res.data===undefined){
                alert("Not exist") 
             }
             else{
                 let cur=new Date().getTime()
                 let entry=res.data.entryTime
                    let time=cur-entry
                    let minutes=Math.floor((time%(1000*60*60))/(1000*60))
                    let Pay=minutes*1
                    if(minutes<=30){
                        Pay=0
                    }
                alert("Payment is "+"₹ "+Pay)
             }
              
         })
         setText({
             carNumber:"",
            })
    }

 

  return (
      <>
        <h1>Exit Point</h1>
        <form onSubmit={submitOn}>
            <label>Enter Your Vehicle Number</label>
            <br />
            <input type="text" placeholder='Vehicle Number' value={text.carNumber} id='carNumber' onChange={hendleChange} />
            <br />
            <input className='submit' type="submit" />
        </form>
      </>
  
  )
}

export default Exit