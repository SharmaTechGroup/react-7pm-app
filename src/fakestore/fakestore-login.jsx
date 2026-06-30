import { useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function FakestoreLogin(){

    const [username, setUserName] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    let navigate = useNavigate();

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleLoginClick(){
        setCookie('username', username, {expires: new Date('2026-06-30')});
        navigate('/search');
    }

     return(
        <div>
            <h3>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button onClick={handleLoginClick}>Login</button>
        </div>
     )
}