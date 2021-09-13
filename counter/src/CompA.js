import React,{useState} from 'react';

const CompA=()=>{


const [count, setCount] = useState(0);



const decrease=()=>{
  setCount(count-1);
  console.log('decreased')
    }


const increase=()=>
{
  setCount(count+1);
  console.log('increased')
}

return(
  <>

  <h1> demo text {count} </h1>

  <button onClick={decrease} >Decrease</button>
  <button onClick={increase} >Increase</button>
  </>
)

}
export default CompA;