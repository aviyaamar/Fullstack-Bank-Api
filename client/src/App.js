import myApi from './Api/Api'
import React, {useState, useEffect} from 'react'

function App() {
  const [users, setUsers] = useState([])

 
    const request = async() =>{
      let {data} = await myApi.get('/users')
      setUsers(data)
      console.log(data);
    }
  

 

  return (
    <div className="App">
     <button onClick={() => request()}>Fetch all clients</button>

    </div>
  );
}

export default App;
