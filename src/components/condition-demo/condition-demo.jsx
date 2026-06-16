import { useState } from "react"

export function ConditionDemo(){


    const [uname, setUname] = useState('');

    function handleNameChange(e){
        setUname(e.target.value);
    }

    function handleSignIn(){
        sessionStorage.setItem('uname', uname);
        location.reload();
    }
    function handleSingout(){
        sessionStorage.removeItem('uname');
        location.reload();
    }

    return(
        <div className="container-fluid">
            <header className="d-flex p-4 border border-2 justify-content-between">
                <span className="fs-2 fw-bold">Amazon</span>
                <div>
                   {
                    (sessionStorage.getItem('uname')===null)?
                     <div className="input-group">
                        <input type="text" onChange={handleNameChange} placeholder="User Name" className="form-control" />
                        <button onClick={handleSignIn} className="btn btn-warning">SignIn</button>
                    </div> :
                     <div>
                        <span className="fw-bold fs-4">{sessionStorage.getItem('uname')}</span>
                        <button  onClick={handleSingout}  className="btn mx-3 btn-danger">  Signout</button>
                    </div>
                   }
                </div>
            </header>
        </div>
    )
}