import React, {useState} from 'react';


const App =() =>{

  let time= new Date().toLocaleTimeString()

   let [newtime,updatedtime]=useState(time)
  
   const looptimeupdate=() =>
   {
       let time= new Date().toLocaleTimeString();
    
      updatedtime(time);
   }
  
 setInterval(looptimeupdate,1000)
return(
    <>
    <div className="main">
      <div className="indiv">
    <h1>Time is {time}</h1>

      </div>


    </div>

    </>
)


}


export default App;