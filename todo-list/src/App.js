import React,{useState} from "react";
import TodoList from "./todolist";
const App=()=>
{ 
   const [item, setitem2] = useState("");
   const [itemfull, setitemfull] = useState([]); 

   const calltoadd=(e)=>{
     setitem2(e.target.value);
   };
    
  const buttonclicked=()=>{
   setitemfull((arrayitem)=>{
     return [...arrayitem,item];
   });
   setitem2("");
  };


  const cross=(id)=>{
    console.log("hi")

    setitemfull((arrayitem)=>{
      return arrayitem.filter((arrayitem,index)=>{
      return index != id ;
      });
    });
};

      
  return (
  <>
  

<div className="mdiv">
  <div className="cdiv" >
  
<h1>TO DO LIST</h1>
<br/>
<input type="text" placeholder="Add item" 
value={item} 
onChange={calltoadd}  />

<button onClick={buttonclicked} > + </button>
<ol>


{  itemfull.map((itemval,index)=>{
    
    return <TodoList 
    key={index} 
    id={index} 
    text={itemval}
    onSelect={cross}
    />;
  })
}

</ol>
  </div>

</div>

  </>
)
};
 export default App;