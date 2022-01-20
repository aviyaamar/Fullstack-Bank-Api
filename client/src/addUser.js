import React, {useState } from 'react'
import myApi from './Api/Api'

const Add = () => {
    const [addName, setAddName] = useState('')
    const [addID,  setAddID] = useState('')
    const [addCash,  setAddCash] = useState(0)
    const [addCredit,  setAddCredit] = useState(0)
    const [isActive, setIsActive]= useState(true)
   
   const createRecipe = () =>{ 
       try{
        myApi.post(`/users`, {
            addName, 
            addID, 
            addCash, 
            addCredit, 
            isActive
            
        })
        setAddName('')
        setAddID('')
        setAddCash('')
        setAddCredit('')
        setIsActive('')
       

    }
       catch(e){
           console.log(e);

       }
      
   }

    return (
        <div className='add'>  
            <input className='input' type="text" placeholder='name' value={addName} onChange={(e) => setAddName(e.target.value)}></input><br/>
            <input className='input' type="number" placeholder='id' value={addID} onChange={(e) => setAddID(e.target.value)}></input><br/>
            <input className='input' type="text" placeholder='cash' value={addCash} onChange={(e) => setAddCash(e.target.value)}></input><br/>
            <input className='input' type="text"  placeholder='credit'  value={addCredit} onChange={(e) => setAddCredit(e.target.value)}></input><br/>
            <input className='input' type="text" placeholder='isActive' value={isActive} onChange={(e) => setIsActive(e.target.value)}></input><br/>
            <button  className='btn_add' onClick={createRecipe} >add </button><br/>
             
       </div>
    )
}

export default Add