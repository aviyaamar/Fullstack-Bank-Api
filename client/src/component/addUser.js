import React, {useState } from 'react'
import myApi from '../Api/Api'

const Add = () => {
    const [name, setAddName] = useState('')
    const [ pasportID,  setAddID] = useState('')
    const [cash,  setAddCash] = useState(0)
    const [credit,  setAddCredit] = useState(0)
    const [isActive, setIsActive]= useState(true)
   
   const addUser = async(e) =>{ 
       e.preventDefault()
       const newUser = { pasportID, name, cash, credit, isActive}
       try{
      const res = await myApi.post('/users',newUser)
      console.log('hi', res.data);
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
        <h3>Add User to bank</h3> 
        <form>
            <input type="text" placeholder='name' value={name} onChange={(e) => setAddName(e.target.value)}></input><br/>
            <input type="number" placeholder='id' value={pasportID} onChange={(e) => setAddID(e.target.value)}></input><br/>
            <input type="text" placeholder='cash' value={cash} onChange={(e) => setAddCash(e.target.value)}></input><br/>
            <input type="text"  placeholder='credit'  value={credit} onChange={(e) => setAddCredit(e.target.value)}></input><br/>
            <input type="text" placeholder='isActive' value={isActive} onChange={(e) => setIsActive(e.target.value)}></input><br/>
            <button onClick={addUser} >add </button><br/>
            </form>   
       </div>
    )
}

export default Add