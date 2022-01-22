import myApi from './Api/Api'
import React, {useState} from 'react'
import Add from './component/addUser'
import Deposit from './component/deposite'

function App() {
  const [users, setUsers] = useState([])

 
    const request = async() =>{
      let {data} = await myApi.get('/users')
      setUsers(data)
      console.log(data);
    }
  
  const diplayData =  () =>{
    return users.map((user)=>{
      return (<ul key={user._id}>
        <li>ID:  {user.pasportID}</li>
        <li>NAME: {user.name}</li>
        <li>CASH: {user.cash}</li>
        <li>CREDIT:{user.credit}</li>
        <Deposit/>
      </ul>)
     
    })
  }

 

  return (
    <div className="App">
     <button onClick={() => request()}>Fetch all clients</button>
     {diplayData()}
     <div>
       <Add/>
     </div>

    </div>
  );
}

export default App;
