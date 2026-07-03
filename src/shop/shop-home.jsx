import { useEffect, useInsertionEffect, useLayoutEffect, useState } from "react"

export function Login(){

    useLayoutEffect(()=>{
        console.log('DOM Interactions Exectued');
    },[])

    useInsertionEffect(()=>{
        console.log('New Library Injected');
        const style = document.createElement('style');
        style.innerHTML = `
           h3 {
             color:red;
             background-color:yellow;
           }
        `;
        document.querySelector("head").appendChild(style);
    },[])

    useEffect(()=>{
        console.log('Login Component Mounted');
        return()=>{
            console.log('Login Component Unmounted');
        }
    },[])

    

    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}

export function Register(){
     useEffect(()=>{
        console.log('Register Component Mounted');
        return()=>{
            console.log('Register Component Unmounted');
        }
    },[])
    return(
        <div>
            <h3>Register</h3>
        </div>
    )
}


export function ShopHome(){
   
    const [view, setView] = useState('');

    function handleLoginClick(){
        setView(<Login />);
    }
    function handleRegisterClick(){
        setView(<Register />);
    }
    
    return(
        <div className="container-fluid">
            <h1>Shop Home</h1>
            <button onClick={handleLoginClick}>Login</button>           
            <button onClick={handleRegisterClick}>Register</button>
            <hr />
            {view}
        </div>
    )
}