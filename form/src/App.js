import React,{useState} from "react";
const App=()=>
{ 
   const [name, setName] = useState("");
   const [lname, setlname] = useState("");
   const [fname, setFullname]= useState("");
  const [lonsubmitname, setlonsubmitname] = useState("");
  const inputfield=(event) =>{

   setName(event.target.value);

  };
  const inputfieldtwo=(event)=>{
     
    setlname(event.target.value);
  };
  
  const onsubmit=(event)=>{
   event.preventDefault();
    setFullname(name);
     setlonsubmitname(lname);
  };
  return(
  <>
  <form onSubmit={onsubmit} >


  <div><h1>Input field {fname} {lonsubmitname} </h1></div>


  <input type="text" placeholder="Enter name" onChange={inputfield} value={name}
   />
   <button type='submit'>Click</button>




   <br/>
   <input type="text" placeholder="Enter pass" onChange={inputfieldtwo} value={lname}
   />
  <button type='submit'>Click</button>
  </form>
  </>
)
}
 export default App;