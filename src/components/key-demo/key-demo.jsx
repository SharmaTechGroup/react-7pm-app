import axios from "axios";
import { useEffect, useState } from "react"


export function KeyDemo(){

    const [users, setUsers] = useState([{user_id:''}]);
    const [statusMsg, setStatusMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [progress, setProgress] = useState('');
    const [progressWidth, setProgressWidth] = useState({width:''});
    const [progressMsg, setProgressMsg] = useState('');

    function LoadUsers(){
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    }

    useEffect(()=>{
        LoadUsers();
    })

    function VerifyUserId(e){
        for(var user of users){
            if(user.user_id===e.target.value){
                setStatusMsg('User Id Taken - Try Another');
                setErrorClass('text-danger');
                break;
            }  else {
                setStatusMsg('User Id Available');
                setErrorClass('text-success');
            }
        }
    }

    function VerifyPassword(e){
         if(e.target.value.match(/^(?=.*[A-Z])\w{4,15}$/)){
             setProgress('progress-bar progress-bar-animated progress-bar-striped bg-success');
             setProgressWidth({width:'100%'});
             setProgressMsg('Strong');
         } else {
             if(e.target.value.length<4){
                setProgress('progress-bar progress-bar-animated progress-bar-striped bg-danger');
                setProgressWidth({width:'20%'});
                setProgressMsg('Poor');
             } else {
                setProgress('progress-bar progress-bar-animated progress-bar-striped bg-warning');
                setProgressWidth({width:'70%'});
                setProgressMsg('Weak');
             }
         }
    }

    return(
        <div className="container">
            <h2>Register User</h2>
            <dl className="w-25">
                <dt>
                    User Id
                </dt>
                <dd>
                    <input type="text" onKeyUp={VerifyUserId} className="form-control" />
                </dd>
                <dd className={errorClass}>{statusMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyUp={VerifyPassword} className="form-control" /></dd>
                <dd className="progress">
                    <div className={progress} style={progressWidth}>
                        {progressMsg}
                    </div>
                </dd>
            </dl>
        </div>
    )
}