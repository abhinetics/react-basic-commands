import React,{useEffect,useState} from "react";
import axios from "axios";

 const CompA=()=>{
   
const [num, setNum] = useState();
const [name, setname] = useState();
const [moves, setmoves] = useState();


 useEffect( ()=>{
   
   async function getData(){
     const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
     console.log(response.data.name);
     setname(response.data.name);
     setmoves(response.data.moves.length);
   }
   getData();
 })


 return(
   <>
<h1>You choose {name} </h1>
<h1>And it has {moves} moves</h1>
    
   <select value={num} onChange={(event) => {

   setNum(event.target.value);

  } }
  >
<option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>




    </select>


   </>
 )

}
 export default CompA;
