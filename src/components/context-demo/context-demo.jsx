import { useState } from "react";

export function Child({onChildClick}){

    const [msg] = useState('Hello from child');

    function handleClick(){
        onChildClick(msg);
    }
    return(
        <div className="bg-danger text-white p-4">
            <h4>Child</h4>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}



export function ContextDemo(){

    const [msg, setMsg] = useState('Wating for data from child');

    function handleChildClick(e){
        setMsg(e);
    }

   return(
     <div className="container-fluid p-4 m-4 text-white bg-dark">
        <h2>Parent - {msg} </h2> 
        <Child onChildClick={handleChildClick} />
    </div>
   )
}