import React, {useState} from "react";
import Api from "../Api/Api";

function Deposit(){
    const [cash, setCash] = useState(0);
    const [id, setId] = useState("");
    // const [user, setUser] = useState(false);
    // const [currBalance, setCurrBalance] = useState("");
    // const [name, setName] = useState("");

    const addChash = (e) => {
      console.log(typeof(e.target.value));
        setCash(+e.target.value);
     
      };
    
      const addId = (e) => {
        setId(e.target.value);
      };
    
      const handleClick = async (e) => {
        console.log("hi");
        e.preventDefault()
       
        const newObj = {
          cash,
        };
        const data = await Api.put(`/users/deposit/${id}`, newObj);
        console.log('hi');
        console.log(data);
    
        // setCurrBalance(data.data.cash);
        // setName(data.data.name);
        // setUser(true);
      };
    return(
        <>
        <h3>Deposit</h3>
        <form>
            <input type="text" value={id} onChange={addId}/>
            <input type="number" value={cash} onChange={addChash}/>
            <button onClick={handleClick}>Submit</button>
        </form>
        {/* {user && (
        <p>
          Current Balance for {name} is {currBalance}{" "}
        </p>
      )} */}
        </>
    )

}
export default Deposit