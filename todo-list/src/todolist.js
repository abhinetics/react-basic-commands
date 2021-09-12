import React from "react";
const TodoList=(props)=>{


  
return(

    <>


    <div className="todo" >

        <button onClick={()=>
        props.onSelect(props.id)
        } > click to delete </button>
    <li>{props.text}</li>


    </div>




       </>
      )



};
export default TodoList;